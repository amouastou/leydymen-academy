#!/usr/bin/env bash
set -o errexit

echo "Application des migrations..."
python manage.py migrate --noinput

echo "Collecte des fichiers statiques..."
python manage.py collectstatic --noinput

echo "Création du superuser si nécessaire..."
python manage.py create_admin

echo "Démarrage de Gunicorn..."
gunicorn config.wsgi:application
