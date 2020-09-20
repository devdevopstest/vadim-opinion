FROM node:10.13.0-alpine as node
WORKDIR /app
COPY package.json /app/
RUN npm install @angular/cli@6.0.8 -g
RUN cd /app && npm install
COPY . /app
RUN cd /app && npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY .nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/vadim-opinion /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

