FROM node:10.17-alpine

# COPY . /workspace
# WORKDIR /workspace
# # RUN npm install



## 複製本地資料夾至 Docker Image 中
 # 把当前目录所有内容拷贝到目录/node-project。拷贝内容受.dockerignore影响
WORKDIR /usr/src/app
COPY . ./             

# RUN npm install pm2 -g 
## 執行 npm install
RUN npm install 

## 利用 PM2-runtime 來啟動 Nextjs service，並直接使用 env_production 中的設定
# CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
EXPOSE 3005

CMD ["node", "./node/server.js"]