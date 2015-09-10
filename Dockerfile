FROM node
COPY . .
RUN npm install
EXPOSE 8888
CMD ["npm","start"]