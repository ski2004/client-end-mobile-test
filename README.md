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
-.               |   /filter/*    |   過濾器相關放此
-.               |   /helpers/*    |   共用的js,如api
-               |   /modula/*   |   模組相關放此
-               |   /plugins/*   |   插件引入放在此
-               |   /assets/../...    |   自訂html相關物件，包含css、fonts、images、js等等
-               |   /store/*       |   共用store變數都放置在這裡
-               |   /views/layout/*.vue   |   布局,畫面的controller , js都寫在這邊
-               |   /views/${style}/*.vue    |   畫面的view , css+html都寫在這邊
./.env          |   環境檔           |   環境檔
./vue.config.js |   設定檔    |   webpack設定相關等..

