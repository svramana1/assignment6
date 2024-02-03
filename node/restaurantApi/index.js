const express = require('express')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const PORT=4000


const app = express()
const MONGO_URL = 'mongodb://127.0.0.1:27017';
let db;


const locations = [
    {
        "location_id": 1,
        "location_name": "Ashok Vihar Phase 3, New Delhi",
        "state_id": 1,
        "state": "Delhi",
        "country_name": "India"
    },
    {
        "location_id": 4,
        "location_name": "Bibvewadi, Pune",
        "state_id": 2,
        "state": "Maharashtra",
        "country_name": "India"
    },
    {
        "location_id": 8,
        "location_name": "Jeevan Bhima Nagar, Bangalore",
        "state_id": 3,
        "state": "Karnataka",
        "country_name": "India"
    },
    {
        "location_id": 13,
        "location_name": "Sector 40, Chandigarh",
        "state_id": 4,
        "state": "Punjab",
        "country_name": "India"
    }
]





app.get('/',  (req, res) => {
  res.send('Hello World')
})

app.get('/locations', (req, res) => {
    db.collection("locations").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

//get mealtype
app.get('/quickSearch', (req, res) => {
    db.collection("mealType").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})




app.get('/restaurants', (req, res) => {
    let query = {}
    let stateId = +req.query.state_id
    let mealId = +req.query.mealId
    if (stateId) {
        query = { state_id: stateId }
    }
    else if (mealId) {
        query = { "mealTypes.mealtype_id": mealId }
    }

    db.collection("restaurants").find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })
 
})

app.get('/filter/:mealId', (req, res) => {
    let query = {}
    let mealId = +req.params.mealId
    let cuisineId = +req.query.cuisineId
    let lcost = +req.query.lcost
    let hcost = +req.query.hcost
    let sort = { cost: 1 }//asc

    if (req.query.sort) {
        sort = { cost: req.query.sort }
    }

    if (cuisineId) {
        query = {
            "mealTypes.mealtype_id": mealId,
            "cuisines.cuisine_id": cuisineId
        }
    } else if (lcost && hcost) {
        query = {
            "mealTypes.mealtype_id": mealId,
            $and: [{ cost: { $gt: lcost, $lt: hcost } }]
        }
    } else if (cuisineId && lcost && hcost) {
        query = {
            "mealTypes.mealtype_id": mealId,
            "cuisines.cuisine_id": cuisineId,
            $and: [{ cost: { $gt: lcost, $lt: hcost } }]
        }
    }

    // -1 => desc
    // 1 => asc

    db.collection("restaurants").find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})



//details
app.get('/details/:id', (req, res) => {
    let id = +req.params.id

    db.collection("restaurants").find({ restaurant_id: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})


//menu of restaurant

app.get('/menu/:id', (req, res) => {
    let id = +req.params.id

    db.collection("menu").find({ restaurant_id: id }).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})



//mongo con

MongoClient.connect(MONGO_URL, (err, client) => {
    console.log("MongoDB is connected")
    if (err) console.log("Error while connecting to Mongo")
    db = client.db("mern-intern")
    app.listen(PORT, () => console.log("Server connected on the PORT", PORT))
})