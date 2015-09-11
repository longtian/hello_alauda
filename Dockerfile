FROM node:4.0.0
MAINTAINER wyvernnot wyvernnot@users.noreply.github.com
COPY . .
RUN npm install
EXPOSE 8888
ENV REDIS_PORT 62290
ENV REDIS_HOST redis-wangyan.internal.myalauda.cn
ENV ONEAPM_APP_NAME awesome_app
ENV ONEAPM_DEMO 1
ENV ONEAPM_LICENSE_KEY <YOUR_KEY>
ENV ONEAPM_LOG stdout
ENV ONEAPM_LOG_LEVEL trace
ENV ONEAPM_NO_CONFIG_FILE 1
CMD ["npm","start"]