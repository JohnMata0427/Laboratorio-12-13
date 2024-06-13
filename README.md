<h1 align="center"><img src="https://github.com/JohnMata0427/Laboratorio-12-13/assets/150484680/bfb548e6-b88e-4a4b-a356-42fe727eeb0b" height="35px"> Authentication and Authorization <img src="https://github.com/JohnMata0427/Laboratorio-12-13/assets/150484680/bfb548e6-b88e-4a4b-a356-42fe727eeb0b" height="35px"></h1>

## 👨‍⚖️ RESTful API of Public Connotation Cases in Ecuador 🇪🇨

The objective of the API is to create new functionalities such as creating an advanced search function that allows filtering cases based on more personable criteria, and thus improve the obtaining of information on cases of public significance in Ecuador, which are officially detailed on the website of the Attorney General's Office. This will help mitigate misinformation on social networks by having official information easily obtained with the new implemented functionalities.

RESTful API Deployment URL: https://laboratorio-12-13.onrender.com

## 🚀 Get Started

To create, update, or delete data in the RESTful API, you must register and then log in using a REST Client (e.g. Postman). Credentials are included in the request body, and once logged in, a token is sent to you in the response for use within one hour. This token goes in the authentication header of the request when using the API's private routes.

#### REGISTER AND LOGIN

Route to register new user account:

```http
POST /api/v1/users/register
```

Route to log in to the registered user account:

```http
POST /api/v1/users/login
```

In the request body include the following properties:

```json
{
  "username": "Your username",
  "password": "Your password"
}
```

## 🛠️ API Architecture (CRUD Operations)

In private routes (POST, PUT and DELETE) include the token granted upon login in the authentication headers to make use of the API

#### Data Schema

```json
{
  "caseName": "string",
  "crime": "string",
  "introduction": "string",
  "events": [],
  "evidencie": {
    "type": "string",
    "url":"string"
  },
  "prosecuted": []
}
```

#### CREATE

```http
POST /api/v1/legalcases
```

#### READ

```http
GET /api/v1/legalcases
```

```http
GET /api/v1/legalcases/{id}
```

#### UPDATE

```http
PUT /api/v1/legalcases/{id}
```

#### DELETE

```http
DELETE /api/v1/legalcases/{id}
```
