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
#指定資料夾
folder_name="$1"
#指定檔名
file_name="$2"
#測試模式
test="false"

#內文用全域變數
doc_content=""
doc_type=""
doc_tables=""
doc_example=""
doc_desc=""

# 如果第一个参数是目录，则使用参数目录。若无，则使用脚本所在的目录。
if [[ -z "$folder_name" ]] || [[ ! -d "$folder_name" ]] ; then #目录判断，如果$folder_name不是目录或者是空，则使用当前目录
	echo "請重新輸入目錄 ... " 
	if	[[ $test == "true" ]]; then
		read -s -n1 -p "按任意键继续 ... " # 本機測試打開
	fi
	exit
else
	# curren_dir=$(cd $folder_name; pwd)
	curren_dir=$(find $folder_name -iname '*.vue' -type f )
fi
echo -e "\033[36m 搜尋資料夾:$folder_name \033[0m "

# 重置
reset(){
	doc_type=""
	doc_tables=""
	doc_example=""
	doc_desc=""
}
# 組合資料
combination(){
	# echo "combination"
	if [[ "$doc_example" != "" ]]; then
		doc_content+="\n####範例:\n"
		doc_content+='```\n'
		doc_content+="$doc_example"
		doc_content+='```'
	fi
	if [[ "$doc_tables" != "" ]]; then
		doc_content+="\n####類型:$doc_type\n"
		doc_content+="$doc_tables \n\n"
	fi
}

# 递归搜索文件
searchfile() {

	old_IFS="$IFS"
	IFS=$'\n'            #IFS修改
	for chkfile in $curren_dir
	do
		#換新檔案就重置
		doc_content=""
		reset

		#指定檔案時判斷是否有符合
		if [[ $chkfile =~ "$file_name" ]] ; then
			echo "$chkfile 掃描中..."
		else
			echo "$chkfile 跳過..."
			continue
		fi
		filesize=`ls -l $chkfile | awk '{ print $5 }'`
		maxsize=$((1024*1024*1))  # 1M以下的文本文件才会被扫描
		if [[ -f "$chkfile" ]] &&  [ $filesize -le $maxsize ] && [[ -n $(file $chkfile | grep text) ]] ; then # 只对text文件类型操作
			# echo "正在扫描 $chkfile"
			result=$(sed -n -e '/\/\*\*/,/\*\//p' $chkfile | grep showdoc) # 正则匹配
		if [ ! -z "$result" ] ; then 
					echo -e "\033[33m 擷取到資料.. \033[0m"
					txt=$(sed -n -e '/\/\*\*/,/\*\//p' $chkfile)
					# echo "sed -n -e '/\/\*\*/,/\*\//p' $chkfile"
					# echo "txt>>>$txt"
					for row in $txt;do
						# 找出字段
						finds1=$(echo $row | egrep -e '\* @')
						finds2=$(echo $row | egrep -e '\* >|\* -')
						if [[ "$finds1" != "" ]] || [[ "$finds2" != "" ]]; then
							# echo "before >>'$row'";
							data=$row
	
							# 開始找key
							# 開始
							if [[ $data =~ "showdoc" ]];
							then
								combination
								reset

							# 結束
							# elif [[ $data =~ "*/" ]];
							# then

							# 左側層級
							elif [[ $data =~ "* @catalog" ]];
							then
								cat_name=${data/"* @catalog"/}

							# 標題
							elif [[ $data =~ "* @title" ]];
							then
								page_title=${data/"* @title"/}
							
							# 方法名稱
							elif [[ $data =~ "* @name" ]];
							then
								doc_content+="\n\nfunction ${data/"* @name "/} \n--\n"
							# 位置
							elif [[ $data =~ "* @path" ]];
							then
								doc_content+="\n####位置：\n"
								doc_content+="- ${data/"* @path "/} \n\n"
							# 類型
							elif [[ $data =~ "* @type" ]];
							then
								doc_type="${data/"* @type "/}"
							
							# 參數表
							elif [[ $data =~ "* @param" ]];
							then
								if [[ "$doc_tables" == "" ]]; then
									doc_tables="參數|類型|描述\n---|\n"
								fi
								temp=$( eval echo "${data/"* @param "/}" )
								doc_tables+="${temp// /|} \n"
							
							# 描述
							elif [[ $data =~ "* @description" ]];
							then
								doc_content+="\n####描述：\n"
							elif [[ $data =~ "* -" ]];
							then
								temp=$( eval echo "${data/"* "/}" )
								doc_content+="$temp\n"

							# 範例
							elif [[ $data =~ "* @example" ]];
							then
								doc_example=''
							elif [[ $data =~ "* >" ]];
							then
								doc_example+="${data/"* >"/}\n"
							
							#其他未定義
							else
								echo "未定義:$data"
							fi
						fi
					done

					#組合內容
					combination

					# CURL begin
					if  [[ $txt =~ "@showdoc" ]] && [[ $txt =~ "@title" ]]; then
						echo -e "\033[32m ------文檔API開始------ \033[0m "
						
						if	[[ $test == "true" ]]; then
							echo -e "結果:\n\n$doc_content"
						else
						# 通过接口生成文档
curl -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8'  "${url}" --data-binary @- <<CURL_DATA
api_key=${api_key}&api_token=${api_token}&cat_name=${cat_name}&page_title=${page_title}&page_content=$(echo -e $doc_content)&s_number=$(date +%s)
CURL_DATA
							echo ""
						fi
						
						echo -e "\033[32m ------文檔API結束------ \033[0m "
					fi
			else
				echo -e "\033[33m 無資料.. \033[0m"
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
	echo -e "\033[33m 已更新文件.. \033[0m"
	if	[[ $test == "true" ]]; then
		read -s -n1 -p "按任意键继续 ... " # 本機測試打開
	fi
fi

