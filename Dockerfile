FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY docs-dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
