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

#### Add a user

`POST /api/createUser`

```json
{
    "name": "David",
    "age": 14
}
```

#### Update a user

`PUT /api/editUser/id?name=NewName&age=NewAge`

#### Delete a user

`DELETE /api/deleteUser/id`


