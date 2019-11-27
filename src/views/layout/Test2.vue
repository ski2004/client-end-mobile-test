<template>
<div>

  <table
    style="margin: 0px auto; box-shadow: 0 0 5px #eee !important; border: 1px solid #e1e1ff !important;"
    cellspacing="0"
    cellpadding="0"
    width="341"
    align="center">
    <tbody>
      <tr>
        <td width="341">
          <table border="0" cellspacing="0" cellpadding="0" width="383" bgcolor="#a5a5a5">
            <!-- <form> -->
            <tbody>
              <tr>
                <td bgcolor="#f7f7f7" height="30" colspan="3" align="middle" class="header">
                   賠率
                </td>
              </tr>

              <tr>
                <td bgcolor="#dbdbdb" height="30" colspan="3">
                  <table border="0" cellspacing="0" cellpadding="0" width="100%">
                    <tbody>
                      <tr>
                        <td height="33" class="td2" align="left">
                          <table border="0">
                            <tbody>
                              <tr>
                                <td width="96" align="right">賠率：</td>
                                <td width="277">
                                  <input v-model="bj" id="bj" class="kuang" name="bj" type="text" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- <tr></tr> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="th1">
                <th bgcolor="#ffffff" height="30" align="center">賠率</th>
                <th bgcolor="#ffffff" align="center">賠率</th>
                <th bgcolor="#ffffff" align="center">賠率</th>
              </tr>

              <tr :class="[(item & 1) === 0 ? 'td4' : 'td3']" v-for="(item,i) in list">
                <td bgcolor="#ffffff" height="30" width="70" align="center">{{item}}</td>
                <td bgcolor="#ffffff" width="102" align="center">
                  <input :id="`pl${item}`" class="kuang_a1" name="textfield" type="text" />
                </td>
                <td bgcolor="#ffffff" width="211" align="center">
                  <span class="black--text pr-1">賠率</span>
                  <select
                    v-model="select[item]"
                    :id="`select${item}`"
                    @change="look1(item)"
                    class="bd10"
                    :name="`select${item}`">
                    <option selected value="all_win">全贏</option>
                    <option value="all_loss">全輸</option>
                    <option value="duce">平</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                  </select>
                  <input
                    :id="`bfb${item}`"
                    v-model="ipt[item]"
                    class="bd11"
                    :disabled="select[item] !== '+'&&select[item] !== '-'"
                    name="bfb1"
                    value="100"
                    size="10"
                    type="text"
                  />
                  <span class="black--text pl-1">%</span>
                </td>
              </tr>

              <tr>
                <td class="td5" height="30" colspan="3" align="left">
                  <table width="383" height="27" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                      <tr>
                        <td width="137" align="center">
                          <label>
                            <input
                              type="button"
                              name="button"
                              id="button"
                              value="計算"
                              @click="jisuan()"
                            />
                          </label>
                        </td>
                        <td width="236">
                          可贏金額：
                          <input id="jg" class="kuang" name="textfield" type="text" disabled />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
            <!-- </form> -->
          </table>
        </td>
      </tr>

      <tr>
        <td class="woedred14" height="84" valign="top" align="left">
          {{ '註：中洞需自行輸入球頭' }}
          <br />{{ '例：洋基1+80紅襪，比賽結束2:1' }}
          <br />{{ '下注洋基：選擇(+)，填入80' }}
          <br />{{ '下注紅襪：選擇(-)，填入80' }}
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data: function() {
    // 資料
    return {
      bj:'',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ipt:[100,100,100,100,100,100,100,100,100,100,100],
      select: [
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win",
        "all_win"
      ]
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    jisuan() {
      var bj; // 投注金額
      var pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10; // 賠率
      var bfb1, bfb2, bfb3, bfb4, bfb5, bfb6, bfb7, bfb8, bfb9, bfb10; // 盤口
      var jg1, jg2, jg3, jg4, jg5, jg6, jg7, jg8, jg9, jg10;
      // var bj = document.getElementById("bj").value;
      var bj = this.bj

      // 提示訊息參數設定
      // this.$toastr.options = {
      //   closeButton: false, // 顯示關閉按鈕
      //   debug: false, // 除錯
      //   newestOnTop: false, // 最新一筆顯示在最上面
      //   // progressBar: true, // 顯示隱藏時間進度條
      //   // positionClass: 'toast-bottom-right', // 位置的類別
      //   preventDuplicates: false, // 隱藏重覆訊息
      //   onclick: null, // 當點選提示訊息時，則執行此函式
      //   showDuration: "300", // 顯示時間(單位: 毫秒)
      //   hideDuration: "1000", // 隱藏時間(單位: 毫秒)
      //   timeOut: "2000", // 當超過此設定時間時，則隱藏提示訊息(單位: 毫秒)
      //   extendedTimeOut: "1000", // 當使用者觸碰到提示訊息時，離開後超過此設定時間則隱藏提示訊息(單位: 毫秒)
      //   showEasing: "swing", // 顯示動畫時間曲線
      //   hideEasing: "linear", // 隱藏動畫時間曲線
      //   showMethod: "fadeIn", // 顯示動畫效果
      //   hideMethod: "fadeOut" // 隱藏動畫效果
      // };

      if (bj == "") {
        alert('xxxxx')
        //this.$toastr.error(this.$ln("請輸入下注金額"));
        return;
      } else {
        if (bj > 0) {
          // 第一關結果------Start
          pl1 = document.getElementById("pl1").value;
          if (pl1 == "") {
            alert('xxxxx')
            // this.$toastr.error(this.$ln("%s不能為空",this.$ln("賠率")));
            return;
          } else {
            if (pl1 > 0) {
              bfb1 = document.getElementById("bfb1").value;
              var select1 = document.getElementById("select1").value;
              if (select1 == "-") {
                bfb1 = bfb1 * -1;
              }
              if (bfb1 == "") {
                // this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb1 > 0) {
                  jg1 = (100 + pl1 * 1 * bfb1 * 1) / 100;
                } else if (bfb1 < 0) {
                  // jg1 = (100 + (bfb1 * 1)) / 100
                  jg1 = 1 + bfb1 / 100;
                } else if (bfb1 == 0) {
                  jg1 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第一關結果------End

          //第二關結果------Start
          pl2 = document.getElementById("pl2").value;
          if (pl2 == "") {
            jg2 = 1;
          } else {
            if (pl2 > 0) {
              bfb2 = document.getElementById("bfb2").value;
              var select2 = document.getElementById("select2").value;
              if (select2 == "-") {
                bfb2 = bfb2 * -1;
              }
              if (bfb2 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb2 > 0) {
                  jg2 = (100 + pl2 * 1 * bfb2 * 1) / 100;
                } else if (bfb2 < 0) {
                  //jg2 = (100 + (bfb2 * 1)) / 100
                  jg2 = 1 + bfb2 / 100;
                } else if (bfb2 == 0) {
                  jg2 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第二關結果------End

          //第三關結果------Start
          pl3 = document.getElementById("pl3").value;
          if (pl3 == "") {
            jg3 = 1;
          } else {
            if (pl3 > 0) {
              bfb3 = document.getElementById("bfb3").value;
              var select3 = document.getElementById("select3").value;
              if (select3 == "-") {
                bfb3 = bfb3 * -1;
              }
              if (bfb3 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb3 > 0) {
                  jg3 = (100 + pl3 * 1 * bfb3 * 1) / 100;
                } else if (bfb3 < 0) {
                  //jg3 = (100 + bfb3 * 1) / 100
                  jg3 = 1 + bfb3 / 100;
                } else if (bfb3 == 0) {
                  jg3 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第三關結果------End

          //第四關結果------Start
          pl4 = document.getElementById("pl4").value;
          if (pl4 == "") {
            jg4 = 1;
          } else {
            if (pl4 > 0) {
              bfb4 = document.getElementById("bfb4").value;
              var select4 = document.getElementById("select4").value;
              if (select4 == "-") {
                bfb4 = bfb4 * -1;
              }
              if (bfb4 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb4 > 0) {
                  jg4 = (100 + pl4 * 1 * bfb4 * 1) / 100;
                } else if (bfb4 < 0) {
                  // jg4 = (100 + bfb4 * 1) / 100
                  jg4 = 1 + bfb4 / 100;
                } else if (bfb4 == 0) {
                  jg4 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第四關結果------End

          //第五關結果------Start
          pl5 = document.getElementById("pl5").value;
          if (pl5 == "") {
            jg5 = 1;
          } else {
            if (pl5 > 0) {
              bfb5 = document.getElementById("bfb5").value;
              var select5 = document.getElementById("select5").value;
              if (select5 == "-") {
                bfb5 = bfb5 * -1;
              }
              if (bfb5 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb5 > 0) {
                  jg5 = (100 + pl5 * 1 * bfb5 * 1) / 100;
                } else if (bfb5 < 0) {
                  //jg5 = (100 + bfb5 * 1) / 100
                  jg5 = 1 + bfb5 / 100;
                } else if (bfb5 == 0) {
                  jg5 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第五關結果------End

          //第六關結果------Start
          pl6 = document.getElementById("pl6").value;
          if (pl6 == "") {
            jg6 = 1;
          } else {
            if (pl6 > 0) {
              bfb6 = document.getElementById("bfb6").value;
              var select6 = document.getElementById("select6").value;
              if (select6 == "-") {
                bfb6 = bfb6 * -1;
              }
              if (bfb6 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb6 > 0) {
                  jg6 = (100 + pl6 * 1 * bfb6 * 1) / 100;
                } else if (bfb6 < 0) {
                  //jg6 = (100 + bfb6 * 1) / 100
                  jg6 = 1 + bfb6 / 100;
                } else if (bfb6 == 0) {
                  jg6 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第六關結果------End

          //第七關結果------Start
          pl7 = document.getElementById("pl7").value;
          if (pl7 == "") {
            jg7 = 1;
          } else {
            if (pl7 > 0) {
              bfb7 = document.getElementById("bfb7").value;
              var select7 = document.getElementById("select7").value;
              if (select7 == "-") {
                bfb7 = bfb7 * -1;
              }
              if (bfb7 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb7 > 0) {
                  jg7 = (100 + pl7 * 1 * bfb7 * 1) / 100;
                } else if (bfb7 < 0) {
                  //jg7 = (100 + bfb7 * 1) / 100
                  jg7 = 1 + bfb7 / 100;
                } else if (bfb7 == 0) {
                  jg7 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第七關結果------End

          //第八關結果------Start
          pl8 = document.getElementById("pl8").value;
          if (pl8 == "") {
            jg8 = 1;
          } else {
            if (pl8 > 0) {
              bfb8 = document.getElementById("bfb8").value;
              var select8 = document.getElementById("select8").value;
              if (select8 == "-") {
                bfb8 = bfb8 * -1;
              }
              if (bfb8 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb8 > 0) {
                  jg8 = (100 + pl8 * 1 * bfb8 * 1) / 100;
                } else if (bfb8 < 0) {
                  //jg8 = (100 + bfb8 * 1) / 100
                  jg8 = 1 + bfb8 / 100;
                } else if (bfb8 == 0) {
                  jg8 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第八關結果------End

          //第九關結果------Start
          pl9 = document.getElementById("pl9").value;
          if (pl9 == "") {
            jg9 = 1;
          } else {
            if (pl9 > 0) {
              bfb9 = document.getElementById("bfb9").value;
              var select9 = document.getElementById("select9").value;
              if (select9 == "-") {
                bfb9 = bfb9 * -1;
              }
              if (bfb9 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb9 > 0) {
                  jg9 = (100 + pl9 * 1 * bfb9 * 1) / 100;
                } else if (bfb9 < 0) {
                  //jg9 = (100 + bfb9 * 1) / 100
                  jg9 = 1 + bfb9 / 100;
                } else if (bfb9 == 0) {
                  jg9 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第九關結果------End

          //第十關結果------Start
          pl10 = document.getElementById("pl10").value;
          if (pl10 == "") {
            jg10 = 1;
          } else {
            if (pl10 > 0) {
              bfb10 = document.getElementById("bfb10").value;
              var select10 = document.getElementById("select10").value;
              if (select10 == "-") {
                bfb10 = bfb10 * -1;
              }
              if (bfb10 == "") {
                //this.$toastr.error(this.$ln("%s不能為空",this.$ln("百分比")));
                return;
              } else {
                if (bfb10 > 0) {
                  jg10 = (100 + pl10 * 1 * bfb10 * 1) / 100;
                } else if (bfb10 < 0) {
                  //jg10 = (100 + bfb10 * 1) / 100
                  jg10 = 1 + bfb10 / 100;
                } else if (bfb10 == 0) {
                  jg10 = 1;
                } else {
                  //this.$toastr.warning(this.$ln("%s請輸入%s",this.$ln("百分比"),this.$ln("數字")));
                  return;
                }
              }
            } else {
              //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("賠率")));
              return;
            }
          }
          //第十關結果------End
          var sum;
          if (bj * 1 != 0) {
            sum =
              bj *
                (jg1 * jg2 * jg3 * jg4 * jg5 * jg6 * jg7 * jg8 * jg9 * jg10) -
              bj;

          }
          if (sum > 1000000) {
            sum = 1000000;
          }
          if (
            select1 == "all_loss" ||
            select2 == "all_loss" ||
            select3 == "all_loss" ||
            select4 == "all_loss" ||
            select5 == "all_loss" ||
            select6 == "all_loss" ||
            select7 == "all_loss" ||
            select8 == "all_loss" ||
            select9 == "all_loss" ||
            select10 == "all_loss"
          ) {
            document.getElementById("jg").value = parseFloat(0).toFixed(0);
          } else {
            document.getElementById("jg").value = parseFloat(sum).toFixed(0);
          }
        } else {
          //this.$toastr.warning(this.$ln("%s必須是數字且大於0",this.$ln("下注金額") ));
          return;
        }
      }
    },

    changeTwoDecimal_f(x) {
      var f_x = parseFloat(x);
      if (isNaN(f_x)) {
        //this.$toastr.error(":changeTwoDecimal -> parameter error");
        return false;
      }
      var f_x = Math.round(x * 100) / 100;
      var s_x = f_x.toString();
      var pos_decimal = s_x.indexOf(".");
      if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += ".";
      }
      while (s_x.length <= pos_decimal + 2) {
        s_x += "0";
      }
      return s_x;
    },

    look1(key) {
      let num = this.select[key] ;
      if (num == "all_win") {
        this.ipt[key] = "100"
      } else if (num == "all_loss") {
        this.ipt[key] = "100"
      } else if (num == "+") {
        this.ipt[key] = ""
      } else if (num == "-") {
        this.ipt[key] = ""
      } else if (num == "duce") {
        this.ipt[key] = "0"
      } else {
        this.ipt[key] = ""
      }
    },


  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    // this.src = this.$options.__file;

  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    //元素已掛載， $el 被建立。
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
};
</script>

<style lang="scss" scoped>
td > select {
  appearance: button-bevel;
  -moz-appearance: button-bevel; /* Firefox */
  -webkit-appearance: button-bevel;
  margin-right: 10px;
}

body {
  color: #333;
  font-size: 14px;
  background-color: #fff;
  font-family: "Noto Sans TC", \5FAE\8EDF\6B63\9ED1\9AD4, "Microsoft JhengHei", "Arial Black", Gadget, sans-serif;
}
/* .header {
	line-height: 45px;
	height: 45px;
	color: #FFF;
	font-family: \5FAE\8EDF\6B63\9ED1\9AD4, "Microsoft JhengHei", "Arial Black", Gadget, sans-serif;
	font-size: 20px;
	text-align: center;
	background: #000;
	background: -moz-linear-gradient(bottom, #434343 0%, #000 100%);
	background: -webkit-gradient(linear, left bottom, left top, color-stop(0%, #434343), color-stop(100%, #000)););
	background: -webkit-linear-gradient(bottom, #434343 0%, #000 100%);
	background: -o-linear-gradient(bottom, #434343 0%, #000 100%);
	background: -ms-linear-gradient(bottom, #434343 0%, #000 100%);
	background: linear-gradient(to bottom, #434343 0%, #000 100%);
} */
.header {
  line-height: 45px;
  height: 45px;
  color: #fff;
  font-family: \5FAE\8EDF\6B63\9ED1\9AD4, "Microsoft JhengHei", "Arial Black", Gadget, sans-serif;
  font-size: 20px;
  text-align: center;
  background: #bf360c;
  /* background: -moz-linear-gradient(bottom, #434343 0%, #000 100%);
	background: -webkit-gradient(linear, left bottom, left top, color-stop(0%, #434343), color-stop(100%, #000)););
	background: -webkit-linear-gradient(bottom, #434343 0%, #000 100%);
	background: -o-linear-gradient(bottom, #434343 0%, #000 100%);
	background: -ms-linear-gradient(bottom, #434343 0%, #000 100%);
	background: linear-gradient(to bottom, #434343 0%, #000 100%); */
}
.td2 {
  font-size: 15px;
  line-height: 34px;
  background-image: none !important;
  height: 34px;
  background-color: #fff !important;
  color: #333;
}
.td2 table {
  height: 34px;
  color: #333;
  font-size: 15px;
}
td {
  font-size: 13px;
}
th {
  color: #000000;
  font-size: 14px;
}
body {
  margin: 0px;
}
.bd1022 {
  border-bottom: #000000 1px solid;
  border-left: #000000 1px solid;
  width: 100px;
  height: 20px;
  border-top: #000000 1px solid;
  border-right: #000000 1px solid;
}
.bd10 {
  border-bottom: #000000 1px solid;
  border-left: #000000 1px solid;
  width: 55px;
  // height: 20px;
  border-top: #000000 1px solid;
  border-right: #000000 1px solid;
  background: #FFFFFF;
  color: #000000;
}
.woedred14 {
  line-height: 25px;
  color: #000;
  font-size: 14px;
  padding: 0 20px;
  background-color: #ededed;
}
.woedred14cu {
  color: #cc0000;
  font-size: 14px;
  font-weight: bold;
}
.bd11 {
  border-bottom: #000000 1px solid;
  border-left: #000000 1px solid;
  width: 30px;
  // height: 20px;
  border-top: #000000 1px solid;
  border-right: #000000 1px solid;
  background: #FFFFFF;
}
.black14cu {
  color: #000000;
  font-size: 14px;
  font-weight: bold;
}
.green {
  color: #0a1cfe;
  font-size: 14px;
  font-weight: bold;
}
body,
td,
th {
  font-size: 16px;
}
/* .th1 th{
	font-size: 15px;
	color: #FFF;
	padding-top: 8px;
	padding-bottom: 8px;
	background-color: #2e2e2e;
} */
.th1 th {
  font-size: 15px;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #bf360c;
}
.td3 td {
  background-color: #ffffff !important;
  font-size: 15px;
  color: #000;
  padding: 3px;
}
.td4 td {
  background-color: #ededed;
  font-size: 15px;
  color: #333;
  padding: 3px;
}
.td5 td {
  background-color: #ffffff;
  font-size: 15px;
  color: #000;
  padding-top: 8px;
  padding-bottom: 8px;
}
.td5 #button {
  font-family: "Microsoft JhengHei", Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 31px;
  color: #fff;
  height: 31px;
  width: 99px;
  border: 0;
  background: #bf360c;
  box-shadow: 1px 1px #dadada;
  filter: progid:DXImageTransform.Microsoft.gradient( startcolorstr='#434b5b', endcolorstr='#323842',GradientType=0 );
  border-radius: 3px;
  cursor: pointer;
}

.kuang {
  width: 100px;
  height: 23px;
  font-size: 13px;
  color: #000;
  font-weight: normal;
  text-align: left;
  background-color: #fff;
  line-height: 10px;
  border: 1px #343434 solid;
  padding-right: 6px;
  padding-left: 6px;
}
.kuang_a1 {
  width: 76px;
  height: 20px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #999;
}
.kuang_a2 {
  width: 76px;
  height: 20px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #999;
}

#toast-container > .toast {
  width: 280px !important;
}
</style>
