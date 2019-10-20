FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/prod/nginx/django_personal_website.conf /etc/nginx/conf.d/
