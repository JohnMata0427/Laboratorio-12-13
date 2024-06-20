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
  "email":"Your email",
  "password": "Your password"
}
```

## 🛠️ API Architecture (CRUD Operations)

In private routes (POST, PUT and DELETE) include the token granted upon login in the authentication headers to make use of the API

#### Data Schema

```json
{
  "rute": [],
  "capacity":{
    "blue": number, 
    "yellow": number, 
    "green": number
  },
  "startsAt":"",
  "endsAt":"",
  "driverId":number
}
```

#### CREATE

```http
POST /api/v1/tankers
```
![image](https://github.com/JohnMata0427/Laboratorio-12-13/assets/133397748/7baec65b-fb05-49b0-ae9d-0e32322a1072)


#### READ

```http
GET /api/v1/tankers
```

```http
GET /api/v1/tankers/{id}
```
![image](https://github.com/JohnMata0427/Laboratorio-12-13/assets/133397748/5b293e97-1496-4329-afa7-520e16576efb)

#### UPDATE

```http
PUT /api/v1/tankers/{id}
```
![image](https://github.com/JohnMata0427/Laboratorio-12-13/assets/133397748/41d54f02-11e5-4a8a-8cb5-e158c187e880)


#### DELETE

```http
DELETE /api/v1/takers/{id}
```
![image](https://github.com/JohnMata0427/Laboratorio-12-13/assets/133397748/29c662ff-26e5-4896-85c7-dc69582c6a47)

