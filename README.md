# LEYDYMEN Academy – Portail de pré-inscription

Projet complet Angular + Django pour les Bootcamps LEYDYMEN Academy.

## Fonctionnalités

- Page d'accueil professionnelle avec logo et couleurs LEYDYMEN
- Présentation des 3 Bootcamps
- Formulaire de pré-inscription
- Enregistrement des inscriptions dans Django Admin / SQLite
- Architecture extensible vers PostgreSQL, paiement, e-mail, WhatsApp, etc.

## Lancer le backend Django

```bash
cd backend
python -m venv venv
venv\Scripts\activate     # Windows
# source venv/bin/activate # Linux/Mac
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend : http://127.0.0.1:8000
Admin : http://127.0.0.1:8000/admin
API : http://127.0.0.1:8000/api/registrations/

## Lancer le frontend Angular

```bash
cd frontend
npm install
npm start
```

Frontend : http://localhost:4200

## Important pour l'hébergement

GitHub Pages, Netlify et Vercel hébergent très bien Angular, mais pas Django en mode classique.
Pour Django, utilise Render, Railway, PythonAnywhere ou un VPS.

Pour connecter Angular au backend en ligne, modifie dans `frontend/src/main.ts` :

```ts
const API_URL = 'https://ton-backend-en-ligne.com/api/registrations/';
```

Puis reconstruis le frontend.
