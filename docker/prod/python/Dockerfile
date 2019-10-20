FROM python:3.6

COPY ./personal_website /personal_website

WORKDIR /personal_website

RUN pip install -r requirements/requirements.txt

EXPOSE 8000

CMD ["gunicorn", "personal_website.wsgi", "-b 0.0.0.0:8000"]
