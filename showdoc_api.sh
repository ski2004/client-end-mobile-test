#! /bin/bash
#
# 文档说明： https://www.showdoc.cc/page/741656402509783 
# 
#api_key
api_key="" 		
#api_token	
api_token="" 	
#同步到的url。使用www.showdoc.cc的不需要修改，使用开源版的请修改
url="https://www.showdoc.cc/server/api/item/updateByApi" 
#資料夾層級
cat_name="test/"
#頁面名稱
page_title="test"
#指定檔名
curren_file_name="$2"
# 如果第一个参数是目录，则使用参数目录。若无，则使用脚本所在的目录。
if [[ -z "$1" ]] || [[ ! -d "$1" ]] ; then #目录判断，如果$1不是目录或者是空，则使用当前目录
	echo "請重新輸入目錄 ... " 
	# read -s -n1 -p "請重新輸入目錄 ... " # 本機測試
	exit
else
	curren_dir=$(cd $1; pwd)
fi
echo "搜尋資料夾 >>>>> $curren_dir"

# 递归搜索文件
searchfile() {


	old_IFS="$IFS"
	IFS=$'\n'            #IFS修改
	for chkfile in $1/*
	do
		tables_type=""
		tables=""
		page_content=""
		#檔案判斷是否有符合指定
		if [[ $chkfile =~ "$curren_file_name" ]] ; then
			echo "$chkfile 掃描中..."
		else
			echo "$chkfile 跳過..."
			break
		fi
		filesize=`ls -l $chkfile | awk '{ print $5 }'`
		maxsize=$((1024*1024*1))  # 1M以下的文本文件才会被扫描
		if [[ -f "$chkfile" ]] &&  [ $filesize -le $maxsize ] && [[ -n $(file $chkfile | grep text) ]] ; then # 只对text文件类型操作
			# echo "正在扫描 $chkfile"
			result=$(sed -n -e '/\/\*\*/,/\*\//p' $chkfile | grep showdoc) # 正则匹配
		if [ ! -z "$result" ] ; then 
					echo "$chkfile 擷取到資料"
					txt=$(sed -n -e '/\/\*\*/,/\*\//p' $chkfile)
					# echo "sed -n -e '/\/\*\*/,/\*\//p' $chkfile"
					# echo "txt>>>$txt"
					for row in $txt;do
						# 找出字段
						# echo "row='$row'";

						finds1=$(echo $row | egrep -e '\* @')
						finds2=$(echo $row | egrep -e '\* >|\* -')
						if [[ "$finds1" != "" ]] || [[ "$finds2" != "" ]]; then
							# echo "before >>'$row'";
							data=$row
	
							# 開始找key
							# 開始
							if [[ $data =~ "showdoc" ]];
							then
								# echo "-----START-----"
								if [[ "$tables" != "" ]]; then
									page_content+="$tables_type\n$tables \n\n"
								fi
								tables_type=""
								tables=""
							# elif [[ $data =~ "*/" ]];#結束
							# then
							# 	echo "-----END-----"
							# 	if [[ "$tables" != "" ]]; then
							# 		page_content+="$tables_type\n$tables \n\n"
							# 	fi

							# 左側層級
							elif [[ $data =~ "* @catalog" ]];
							then
								cat_name=${data/"* @catalog"/}

							# 標題
							elif [[ $data =~ "* @title" ]];
							then
								page_title=${data/"* @title"/}

							# 參數表
							elif [[ $data =~ "* @param" ]];
							then
								if [[ "$tables" == "" ]]; then
									tables="參數|類型|描述\n---|\n"
								fi
								temp=$( eval echo "${data/"* @param "/}" )
								tables+="${temp// /|} \n"
							
							# 方法名稱
							elif [[ $data =~ "* @name" ]];
							then
								page_content+="\n\nfunction ${data/"* @name "/} \n--\n"
							
							# 類型
							elif [[ $data =~ "* @type" ]];
							then
								tables_type="\n####類型:${data/"* @type "/}"
							
							# 描述
							elif [[ $data =~ "* @description" ]];
							then
								desc=${data/"* @description "/}
								page_content+="\n####描述：\n- $desc \n"
							elif [[ $data =~ "* -" ]];
							then
								temp=$( eval echo "${data/"* "/}" )
								page_content+="$temp\n"
							
							# 位置
							elif [[ $data =~ "* @path" ]];
							then
								page_content+="\n####位置：\n- ${data/"* @path "/} \n\n"
							
							# 範例
							elif [[ $data =~ "* @example" ]];
							then
								page_content+="\n####範例:\n"
							elif [[ $data =~ "* >" ]];
							then
								page_content+="${data/"* >"/}\n"
							else
								echo "未定義:$data"
							fi
						fi
					done
					if [[ "$tables" != "" ]]; then
						page_content+="$tables_type\n$tables \n\n"
					fi
					# echo -e "結果:\n\n$page_content"

					# CURL begin
					if  [[ $txt =~ "@showdoc" ]] && [[ $txt =~ "@title" ]]; then
						echo -e "\033[32m $chkfile 扫描到内容 , 正在生成文档 \033[0m "
						# 通过接口生成文档
curl -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8'  "${url}" --data-binary @- <<CURL_DATA
api_key=${api_key}&api_token=${api_token}&cat_name=${cat_name}&page_title=${page_title}&page_content=$(echo -e $page_content)&s_number=$(date +%s)
CURL_DATA
					fi
			fi
		fi

		if [[ -d $chkfile ]] ; then
			searchfile $chkfile
		fi
	done
	IFS="$old_IFS"
}




#执行搜索
searchfile $curren_dir


#
sys=$(uname)
if [[ $sys =~ "MS"  ]] || [[ $sys =~ "MINGW"  ]] || [[ $sys =~ "win"  ]] ; then 
	echo "已更新文件 ..." 
	# read -s -n1 -p "按任意键继续 ... " # 本機測試
fi

