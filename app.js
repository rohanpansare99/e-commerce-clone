let express = require('express');
let app = express();
let port = 1920;
let {dbConnect, db, getData} = require('./controller/dbController');

//test
app.get('/', (req,res) => {
    res.send('Hi from Express');
})

app.get('/location',async (req,res) => {
    let query={}
    let collection="location"
    let output = await getData(collection,query)
    res.send(output);
})

app.get('/restaurants',async (req,res) => {
    let query={}
    if(req.query.stateId){
        query={state_id: Number(req.query.stateId)}
    }
    let collection="restaurants"
    let output = await getData(collection,query)
    res.send(output);
})

app.get('/filter/:mealId',async (req,res) => {
    let mealId= Number(req.params.mealId);
    let cusineId = Number(req.query.cusineId)

    //let query={}
    if(cusineId){
        
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cusineId
        }
    }
    else{
        let query={} 
    }
    let collection="restaurants"
    let output = await getData(collection,query)
    res.send(output);
})









app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})