## Installation

 

```bash
npm install > npm run serve
```
## 檔案結構說明

根路徑           |    次目錄與用途       |    說明
:---            |   :---              |   :---
./dist          |   *           |   js檔轉譯後輸出的預設路徑
/public         |   /assets/*         | 美術設計相關
./src           |   /components/*   |   元件放此,共用元件命名規則 = '${資料夾}-${檔名}'
--               |   /filter/*    |   過濾器相關放此
--               |   /helpers/*    |   共用的js,如api
--               |   /modula/*   |   模組相關放此
--               |   /plugins/*   |   插件引入放在此
--               |   /assets/../...    |   自訂html相關物件，包含css、fonts、images、js等等
--               |   /store/*       |   共用store變數都放置在這裡
--               |   /views/layout/*.vue   |   布局,畫面的controller , js都寫在這邊
--               |   /views/${style}/*.vue    |   畫面的view , css+html都寫在這邊
./.env          |   環境檔           |   環境檔
./vue.config.js |   設定檔    |   webpack設定相關等..


:sparkles:  風格指南 Style Guide :sparkles:
===

# 目的：討論專案中的各種情況的命名風格

# 進入主題

### HTML、CSS
* id、class 命名
* 引入`縮寫` (命名變數、函數時可使用縮寫)
    e.g message -> msg
    基本上有共識(包括本文件提供的字以及以下參考列表中所出現的都可以使用縮寫

## 語系、變數命名 相關

### 專案階層及多國語系(包含中英文、縮寫)

碰到真的不好翻譯的字
1. 選相近意思、或自行組合單字
2. 用羅馬拼音


## 需注意的字或變數名稱

#### 復數加 s

例如有多場賽事、多種遊戲 這類的在名詞上通常會加 s

- points
- games
- sports 

#### 優惠相關

優惠
- offers 比較被動 - 例如 某段期間提供某些優惠
- promotions 比較積極 - 例如 推廣 或 促銷
- sale - 更有賤賣的意思
- off - 強調數字上的則扣
- discount codes 則扣代碼，但比較偏向數字上的折扣
- coupon codes 優惠代碼

活動
- events
- activites

#### 行銷、商業常用

退水、現金回饋
- cashback 返水、返利、現金返還、現金回贈、現金回饋
- 佣金 House edge (賭場用) / commission (商業用)
    - 退回佣金 return of commission、refund commission

#### 賭場術語
https://williamhill-lang-tch.custhelp.com/app/answers/detail/a_id/6530

### 資料夾、檔名


:::danger
例外
大分類資料夾內的 index.vue 的 i 必須是小寫 :mega:
:::

例如 pages/finance/index.vue -> http://www.xxx.net/finance

---

#### Vue 元件命名建議

大駝峰(Good) > 肉串式 (Good for DOM template)

範例可參考 

https://vuejs.org/v2/style-guide/#Single-file-component-filename-casing-strongly-recommended

https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended

---

資料夾名稱 底線 -> node_module
專案名稱 肉串 ->  node-sass
是專案名稱也是資料夾 -> bootstrap-vue/

檔名(大部分檔案，Vue 元件或少數慣例 例外)

複合單字的檔名用肉串
`no-ssr.js`

需要有規則的拆散檔案時，也有利用`.`當作命名空間的例子
`i18n.plugin.js`
`i18n.util.js`
`i18n.multi-config.js`

有些檔名是特殊的或已成慣例，例如 

Markdown
`README.md`
`CHANGELOG.md`

Vue 元件
`Login.vue`


components  // 獨立或可共用的元件
layouts     // 共同的外層 layout
- header
    - header-signout
    - in
    - index
default.vue
       
pages       // 放各個不同的頁面和元件 


### 變數
- 什麼時候用 小駝峰、大駝峰、底線、肉串
    - 小駝峰 ( hackMe )
        - 大部分 js 變數、function 名稱
            - addItemToCart
            - removeItem
            - iHaveAPen
            - iHaveOnePen
            - removeProductFromCart
    - 大駝峰 ( HackMe )
        - 模組名稱
            - Vue
            - Axios
            - Bootstrap
        - 元件變數名稱
            - CartView
            - MyFavorite
            - Timer
        - Class 名稱
            ```
            Class Cart {
                ...
            }
            ```

    - 底線 ( hack_me )
        - 通常前端變數較少使用底線
        - 內部專用變數 ( _this, _self, _item )，不影響到 function 外的世界，通常用在需要區分 內外層的 `this` 時使用
        - 用駝峰試看起來太噁心的超長變數名稱
    - 肉串 ( hack-me )
        - Rest API 的命名通常用肉串
        - Vue 路由名稱

- 常數、全域變數是否大寫？
    - 常數一樣使用`小駝峰` 
        - ```const googleSearch = 'http://www.google.com.tw'```
    - 全域變數
        - 全域變數`全大寫`，通常很多全域變數也是常數
        - ```const PI = 3.1514```
        - `const CONFIG_PATH = '~/config.json'`
        - `let HACKME = true`
        - `window` 例外，全小寫
        - Vue、模組、外掛相關變數命名可能例外 (Vue、Axios、$store)
    
### Vue 元件、Vuex Store、元件檔名
- 參考 Vue.js 風格指南

### 註解

- TODO
```
    // TODO: use ES6 module when Nuxt2.x 
```


- 在 code 中插入參考連結

```
    // Ref: https://github.com/nuxt/nuxt.js/issues/2885
    
    // Doc: https://docs.sentry.io/  <-- Doc 泛指官方類的文件
```

- function 傳入參數、回傳結果 的 型態 及 解釋


```
    例如，以下為將物品放入購物車的 function
    
    /* 
    *  @param {Number} 商品 id   <-- 第一個參數
    *  @param {Number} 商品數量   <-- 第二個參數
    *  @return {Bollean} 回傳結果 <-- return 回傳的結果
    * */
      內容省略
      return true
    }
```

這種也不錯，比較簡單，可參考 [vue-test-utils](https://vue-test-utils.vuejs.org/api/wrapper/#find-selector) 的風格

```

Arguments: <- 傳入參數
    {string|Component} selector <- 參數型態和名稱 代表 {字串或元件}，變數為 selector
Returns:   <- 回傳參數
    {Wrapper}


```

- 覺得有需要的話可以補上參考連結 (例如 StackOverflow 的文章)
- 可以的話，有點不好一次讀懂的部分，補上預覽結果、畫圖
```
  例如，某個 function 內有個要將這個陣列從 ['3', '4', '5'] 變成數字 345 的部分
  let a = ['3', '4', '5'] 
  
  可以寫成一行的註解
  a.toString().replace(/,/g, '') * 1 // "3,4,5" -> "345" -> 345
  
  也可以拆成多行
  a
  .toString()             // "3,4,5"  <-- 這個就是預覽結果
  .replace(/,/g, '')      // "345"
  * 1                     // 345
```

### Git

#### Git Style Guide

目前沒有強制規定一定要遵守

主要範圍為 commit 的內容 和 branch 的命名，可參考以下來源

git-style-guide
https://github.com/JuanitoFatas/git-style-guide

emoji in git commit 
https://github.com/slashsBin/styleguide-git-commit-message

Gitmoji
http://gitmoji.surge.sh/

#### Git editor

git config --global core.editor "code --wait"

#### Git branch 命名風格

    product 分支  - master
    stage 分支    - stage / release
    
    分支  - {分支來源}{開分支的時間}-{分支功能}-{子分支}
    
    類別非必要，例如:
    bug   bug或實驗性
    test  測試用
    try   嘗試看看
    ...
    可依需求自行命名類別
    
    個人測試用分支範例：
    
    d0101-login                 // 1月1號 從dev開出來的 - 分支名稱
    m0101-修BUG             // 1月1號 從master開出來的 - 分支名稱
    
#### Git Commits 風格
難免有一些令人難為情的情況發生...
- commit 該包含哪些資訊?
    - 適當的描述修改了哪個地方(可以把視覺上的位置標出來)、修改原因、方式
    - commit 開頭加上 [項目] 已代表修改的部分，例如 `銀行帳戶` 或 `帳務中心>提款>銀行帳戶` 
    - 第一行簡扼描敘 處理的項目
    - 條列的列出 更動的詳細內容
    - 例如 為了解決 #6f25660 的 xxx bug，所以使用 XXX 方式處理
    - commit hash #6f25660
    - commit 提交要標記修訂版本號 #6f25660，只能標記 `同專案的版本號`，無法跨專案標記

- 如果只是修改小地方時...
    - 例如修復錯字，通常會打 fix typo 之類的慣用 commit
    - 可參考 Github 上的慣例
    - 可善用 `git rebase -i` 合併多個 commit
- 做個小測試但不小心送出很多次相似的 commit 時...
    - 可以再完成所有 commit 後，複製好最後想要的結果，將之前測試用多出來的 commit 砍掉 (**在尚未 push 之前 commit 都是可以被修改的**)

- 在 commit 內的特殊標記內容
    - `[skip ci]`、`[ci skip]` <--- 這兩個代表跳過 Gitlab 自動編譯，是 Gitlab 內建的功能，不是我們自定的
    - `#13de515` <-- 這個是 commit hash，通常取前五個字加上#，代表在 commit 內容中提及該 commit(#13de515)，這個也是 git 內建功能
    - `#code-review` `#雷` `#提醒自己的標籤`... <-- 這類是我們自訂的，在 commit 中加上 tag，方便未來搜尋及提醒自己，可以將 tag 加在 commit 內容的最後面

- 利用 git tag 管理標籤
    - 利用個人用的 tag 
    - `git tag -a tagName -m tag訊息` 為當前 commit 新增 tag
    - `git tag -v tagName` 列出某個 tag 的詳細資訊
    - `git tag` 列出所有 tag 名稱
    - `git tag -n` 列出 tag 名稱及內容
    - `git tag --format="%(refname:short) %(taggerdate) %(subject) %(body)"` 格式化輸出
    - git show --tags 逐一瀏覽所有詳細資訊

### 版本號 及 CHANGELOG

待捕...

### 編輯器用的排版檢查器 
- JavaScript Standard Style
- VSCode - https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs
- Atom - https://atom.io/packages/standard-formatter
- 官方提供的各類編輯器參考 https://standardjs.com/awesome.html#editor-plugins

## 風格相關參考:

國碼大小寫
https://blog.othree.net/log/2006/07/21/zh-tw-case-insensitive/

Vue.js 風格指南
https://cn.vuejs.org/v2/style-guide

統一 JavaScript，只需一種樣式
https://standardjs.com/readme-zhtw.html

Vue SSR 官方指南 
https://ssr.vuejs.org/zh/

git-style-guide
https://github.com/JuanitoFatas/git-style-guide

git emoji
https://github.com/slashsBin/styleguide-git-commit-message
https://www.webpagefx.com/tools/emoji-cheat-sheet/


## Gitlab

名稱 :iphone: `super-platform-client-mobile` / :computer: `super-platform-client-desktop`

產品分支 `master` :point_left: 穩定可上線的版本後丟這
開發分支 `dev-master` :point_left: 分支進度會先合併到這，開發時請 fork 這隻或個人的分支
樣板分支 `vance-scaffolding`  :point_left: 只放樣板而已，不會有正式專案的內容
註：電腦版樣板分支為 `scaffolding`

## Nuxt.js Scaffolding 的參考🌰
以下為有參考到的範例

- 使用 `npx Nuxt` 產生專案，並且能順便指定 UI framework、dev-server、module 
https://github.com/nuxt-community/create-nuxt-app

- Github - cretueusebiu/laravel-nuxt
https://github.com/cretueusebiu/laravel-nuxt

- [codecourse - Nuxt.js + Laravel Authentication](https://www.codecourse.com/lessons/nuxt-js-laravel-authentication/2518
)
[\[範例下載\] - code_nuxt-laravel-auth_nuxt-laravel-auth.zip](
https://www.jandi.com/file/90af3e275bc1bdc0c9b17991f5653743)

- SafariBooks - BS4 + Nuxt + Firebase
https://www.safaribooksonline.com/library/view/vuejs-2-and/9781788290920/
[\[範例下載\] - 9781788290920_Code.zip](https://www.packtpub.com/lcode_download/30008)

## Nuxt.js 教學

[vueschool/learn-vuex 免費影片及範例](https://github.com/vueschool/learn-vuex)

## 測試 :tea:

- unit - [Jest](https://facebook.github.io/jest/)
- e2e - [Testcafe](https://devexpress.github.io/testcafe/) (等介面穩定下來後才補上)

# Nuxt 相關參考

## Plugins

https://nuxtjs.org/examples/plugins/

## Vendor、Plugin、Moudle 的差別

[question] Plugins vs Modules vs Vendor <-- 解釋的還不錯
https://github.com/nuxt/nuxt.js/issues/2820

https://www.vuejsradar.com/intro-to-nuxt-js-modules/


https://github.com/nuxt-community/awesome-nuxt

https://support.google.com/webmasters/answer/156184?hl=zh-Hant&ref_topic=4581190

# 專案近況

## Gitlab: 

### 手機版 :iphone:
http://git.sp168.cc/vance/super-platform-client-mobile

產品分支 `master`
開發分支 `dev-master`
樣板分支 `vance-scaffolding`

### 電腦版 :computer:
http://git.sp168.cc/tiny/super-platform-client-desktop

產品分支 `master`
開發分支 `dev-master`
樣板分支 `scaffolding`

### 營運平台 - 前端共用的假 API :jack_o_lantern:
http://git.sp168.cc/vance/super-platform-client-mock-api

### 營運平台 - 前端共用函式庫 :open_file_folder:

- TBC

## Done
 - [風格指南](https://hackmd.io/IH-_usFhTSOkwlGkIAz9yg?both) - 04-09 ~ now
 - 佈局 Scaffolding [分支](http://git.sp168.cc/vance/super-platform-client-mobile/tree/vance-scaffolding) 04-15 ~ 04-20
 - 假 API 的部分獨立成子專案(Git Submodules) 04-24
 - Gitlab repo 重整 05-01
 - [意見回饋 - 網頁截圖及標記功能實作 (vanilla js)](https://codesandbox.io/s/pmypr4w50m) 05-02
 - 手機版、電腦版 開發環境更新 05-02
 - 側邊欄實作 05-10

## Doing
 - 雛形製作 prototype
     - 手機版 (<font color="orange"> Vance、Tiny </font>)
         - 基本格局
             - 參考 Bingo 手機版 
         - SMS 服務評估
             - 參考 Nexmo API 作為假資料
             - 需能夠輸入完 pin code 後立即驗證
         - 側邊欄 (side bar menu): 
             - http://mmenu.frebsite.nl/ (browser - jQuery)
             - [參考 其他方案列表](https://hackmd.io/IH-_usFhTSOkwlGkIAz9yg?both#%E5%81%B4%E9%82%8A%E6%AC%84)
             - 參考 Bingo 鍵盤
         - 輪播: [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper/tree/master/examples/nuxt-ssr-example)
         - 日期選擇器: Native
         - 分頁器 (上一頁 | 下一頁)
            - 自行寫分頁器模組 :white_check_mark: (可自訂樣式及CSS)
        - 圖形驗證碼
            - 自行寫圖形驗證碼模組 :white_check_mark: (使用 canvas)
        - 資料往下加載元件
            - [Vue-infinite-loading](https://github.com/PeachScript/vue-infinite-loading) :white_check_mark: v2.3.1
     - 電腦版 (<font color="orange"> 桃花 </font>)
        - 網頁截圖
            - 知乎使用的 [rasterizeHTML.js](https://github.com/cburgmer/rasterizeHTML.js) :white_check_mark: [v1.3.0](https://unpkg.com/rasterizehtml@1.3.0/dist/rasterizeHTML.allinone.js
)
        - 輪播
            - [Bootstrap 4 Carousel](http://bootstrap.hexschool.com/docs/4.0/components/carousel/) :white_check_mark:
        - 日期選擇器
            - [Flatpickr](https://flatpickr.js.org/) :white_check_mark: [v4.4.4](https://cdn.bootcss.com/flatpickr/4.4.4/flatpickr.min.js)
        - 分頁器 (上一頁 123 ... 20 下一頁)
            - [bootstrap-vue-pagination](https://bootstrap-vue.js.org/docs/components/pagination/) 使用 bootstrap-vue v2.0.0-rc.8
                - 當前不使用 bootstrap vue 所以此套件無法使用
            - [更多分頁器](https://vuejsexamples.com/tag/pagination/) 
            - 自行寫分頁器模組 :white_check_mark: (可自訂樣式及CSS)
        - 檔案上傳 (單一上傳 / 多檔上傳 / 頭像上傳)
            - [vue-upload-component](https://github.com/lian-yue/vue-upload-component/) :white_check_mark: v2.8.5
                - [Doc](https://lian-yue.github.io/vue-upload-component/#/documents)
                - 頭像上傳截圖
                    - [cropperjs](https://github.com/fengyuanchen/cropperjs) :white_check_mark: v1.3.5

- 能夠載入不同主題的 CSS 檔
- 單元測試 (Jest)
- 前端可共用的部分獨立成子專案（例如與 API 溝通)


## 詳細第三方模組及服務評估

:white_check_mark: 代表採該用方案或服務

### 側邊欄

#### key words: overlay side bar、on off canvas、side menu

* [Bootstrap 4 Sidebar Menu (toggleable)](https://www.codeply.com/go/GQ1Mz8RqZB/bootstrap-4-sidebar-menu-(toggleable))
* [off-canvas](https://wovue.github.io/off-canvas/#!/usage)
* [How To Create a Side Navigation Menu](https://www.w3schools.com/howto/howto_js_sidenav.asp) :white_check_mark:
    - [Demo](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_push)
* [norbert989/vue-offcanvas-simple: A basic vuejs off canvas sidebar component](https://github.com/norbert989/vue-offcanvas-simple)
* [Design a Responsive Side Menu for Bootstrap 4](https://codediode.io/lessons/198631-design-a-responsive-side-menu-for-bootstrap-4)
* [BlackrockDigital/startbootstrap-simple-sidebar: An off canvas sidebar navigation Bootstrap HTML template created by Start Bootstrap](https://github.com/blackrockdigital/startbootstrap-simple-sidebar/)
* [vue-3d-menu](https://www.npmjs.com/package/vue-3d-menu) :white_check_mark: v1.0.3
    - [Demo](https://shalldie.github.io/demos/vue-3d-menu/)

### Git module

未來可能將以下兩個部分獨立，以利電腦版與手機版共用

- [假 API](http://git.sp168.cc/vance/super-platform-client-mock-api) :white_check_mark: 
- 前端共用函式庫 :white_check_mark:


# 其他參考
[Hackmd 語法](https://hackmd.io/s/E1UakUq8)

試語法可到這邊，不要去改上面的
[Hackmd PlayGround](https://hackmd.io/SA8inq7VTmO8jIWC5QsMcw)
