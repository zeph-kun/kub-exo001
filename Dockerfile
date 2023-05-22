FROM nginx:stable-alpine
USER root
COPY . /usr/share/nginx/html
