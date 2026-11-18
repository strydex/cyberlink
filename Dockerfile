FROM nginx:alpine
COPY cyberlink-react/nginx.conf /etc/nginx/conf.d/default.conf
COPY cyberlink-react/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
