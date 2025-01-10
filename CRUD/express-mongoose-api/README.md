# CRUDS API

A simple node app that let the user to Create, Read, Update, Delete and Send a simple item.

## Item Schema

```json
{
  "name": "Jon Doe",
  "mobile": "0123456789",
  "email": "jon@example.com",
  "hobbies": ["hobby1", "hobby2"]
}
```

## setup

```bash
  # Copy or Clone the project and navigate in Project.
  cd cruds-api

  # Install all the required packages.
  npm install

  # Start with node.
  npm start

  # Start with nodemon / dev mode.
  npm run dev
```

## API paths

**Get all the item data :-** <https://cruds-api.herokuapp.com/item/get>

**Get a single item by Id :-** <https://cruds-api.herokuapp.com/item/get/:id>

**Create a new item and save in data base :-** <https://cruds-api.herokuapp.com/item/create>

**Update a item data :-** <https://cruds-api.herokuapp.com/item/update/:id>

**Delete a item item DB :-** <https://cruds-api.herokuapp.com/item/delete/:id>

**Mail a list of item :-** <https://cruds-api.herokuapp.com/item/mail>
