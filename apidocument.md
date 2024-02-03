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