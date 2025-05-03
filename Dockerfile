# Use official Nginx image
FROM nginx:alpine

# Copy your website files to Nginx's default public folder
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose port 7777
EXPOSE 7777

# Override default Nginx config to listen on port 7777
RUN sed -i 's/80;/7777;/' /etc/nginx/conf.d/default.conf