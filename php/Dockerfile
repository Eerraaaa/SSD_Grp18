FROM php:8.1-fpm
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli
WORKDIR /var/www/html 