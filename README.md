# MMR:phone-catalog-app (WIP)
Django + React phone catalog app.

## Frontend

### Launch
    cd frontend
    npm start

## Backend

### Launch
    cd backend
    virtualenv venv // Just for the first time.
    source venv/bin/activate
    pip install -r requirements.txt // Just for the first time.
    cd server 
    ./manage.py makemigrations // Create migration when you have model changes.
    ./manage.py migrate // Apply migrations when you have model changes.
    python manage.py runserver

### REST API for accounts
    /users/ - to signup a new user,
    /users/me/ - to get user information,
    /token/login/ - to get token,
    /token/logout/ - to logout.

### REST API for phones
    GET list of : /api/v1/phones,
    GET list of phones filtered: /api/v1/phones/?brand=[BRAND]&os=[OS],
    GET one visit with id: /api/v1/phones/1/ (for id = 1),
    create visit, the POST request at /api/v1/phones/ with visit JSON data,
    delete visit with DELETE request at /api/v1/phones/1/ (for id = 1),
    partial visit update with PATCH request at /api/v1/phones/1/ (for id = 1),
    full visit update with PUT request at /api/v1/phones/1/ (for id = 1).
