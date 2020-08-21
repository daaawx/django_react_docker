# Django + React + Docker

An example project using Django, React and Docker 🐳

How to run for **local development**:
```
docker-compose up --build
```

Django will be exposed on `localhost:8000`, and React on `localhost:3000`.

How to run for **production**:
```
docker-compose -f docker-compose.prod.yml up --build
```

<hr>

Create a Django superuser:
```
docker-compose exec backend python manage.py createsuperuser
```


