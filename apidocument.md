List of city /locations (GET)

http://localhost:4000/locations

List of QuickSearch / MealTypes (GET)

http://localhost:4000/quickSearch

List of restaurant (GET)

http://localhost:4000/restaurants

restaurants wrt city (GET)

http://localhost:4000/restaurants?state_id=1

## Page 2

restaurants wrt mealType (GET)

http://localhost:4000/restaurants?mealId=1

restaurants wrt cuisineId and mealId (GET)

http://localhost:4000/filter/5?cuisineId=3

restaurants wrt cost and mealId (GET)

http://localhost:4000/filter/1?lcost=500&hcost=1000

restaurants wrt cuisineId and cost (GET)

http://localhost:4000/filter/2?cuisineId=1&lcost=500&hcost=900

sort in basis of cost (GET)

http://localhost:4000/filter/1?lcost=200&hcost=500&sort=-1


## page 3

Details of restaurant (GET)

http://localhost:4000/details/1

Menu of restaurant (GET)

http://localhost:4000/menu/2

## page 4

npm install --save-dev nodemon


Menu Details (POST)

http://localhost:4000/menuItem

input => [1,2,3]

PlaceOrder (POST)

http://localhost:4000/placeOrder

{

        "orderId": 1,
        "name": "peter",
        "email": "peter@gmail.com",
        "address": "Home 5",
        "phone": 7435434155,
        "cost": 577,
        "restName": "Domino's Pizza",
        "menuItem": [1,2,3]
    }

## Page 5

List of orders

http://localhost:4000/orders

order wrt email

http://localhost:4000/orders?email=peter@gmail.com

delete order wrt id

http://localhost:4000/deleteOrder/1

update payment details (PUT)

{
"status":"Delivered",
"bank_name":"HDFC",
"date":"12-23-23"
}


## register

http://localhost:8000/auth/register

{
"name": "John",
"email": "john@gmail.com",
"password": "1234567",
"phone": 9883243656,
"role": "user"
}

## login

http://localhost:8000/auth/login

{
"email": "john@gmail.com",
"password": "1234567"
}

## getallUSers

http://localhost:8000/auth/users

## get particular user

http://localhost:8000/auth/userInfo

pass x-access-token in headers



