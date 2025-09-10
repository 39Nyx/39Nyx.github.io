FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY docs-dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
