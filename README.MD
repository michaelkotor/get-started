# This is a very simple CRUD application.

## To run:\

`git clone https://github.com/michaelkotor/get-started.git`

`cd get-started`

`npm install`

`npm start`

## The server will start at localhost:5000

### Some easy commands to work with:

#### Get all users: 

`GET /api/getAllUsers`

#### Get a user by id

`GET /api/getUser/id`

Result:

```json
{
    "email": "example@example.com",
    "name": "David",
    "age": 21,
    "id": 123123213
}
```

#### Add a user

`POST /api/addUser`

Request:

```json
{
    "email": "example@example.com",
    "name": "David",
    "age": 21
}
```

Result:

```json
{
    "email": "example@example.com",
    "name": "David",
    "age": 21,
    "id": 235436566 
}
```

#### Update a user

`PUT /api/updateUser/id?name=NewName&age=NewAge`

You are not allowed to change id or email.

Result:

```json
{
    "email": "example@example.com",
    "name": "newName",
    "age": "newAge",
    "id": 23453245345 
}
```

#### Delete a user

`DELETE /api/deleteUser/id`

Result:

```json
{
    "email": "this_account_is_now_deleted@example.com",
    "name": "michel",
    "age": 14,
    "id": "id" 
}
