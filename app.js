let express = require('express');
let app = express();
let port = process.env.PORT||1920;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect, db, getData,postData, updateOrder,deleteOrder} = require('./controller/dbController');


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())


app.get('/', (req,res) => {
    res.send('Hi from Express');
})
//categories
app.get('/categories',async (req,res) => {
    let query={}
    let collection="categories"
    let output = await getData(collection,query)
    res.send(output);
})
//SubCategories
app.get('/subcategories',async (req,res) => {
    let query={}
    if(req.query.catId){
        query={category_id: Number(req.query.catId)}
    }
    let collection="subcategories"
    let output = await getData(collection,query)
    res.send(output);
})

//Products  wrt subcategory
app.get('/products/:subCatId', async(req,res) => {
    let subCatId = Number(req.params.subCatId);
    let query = {"subcategory.subcat_id": subCatId}
   
    let collection = "products";
    let output = await getData(collection,query);
    res.send(output)
})

//Products after filter
app.get('/filter/:subCatId', async(req,res) => {
    let subCatId = Number(req.params.subCatId);
    let brandId = Number(req.query.brandId)
    let offerId = Number(req.query.offerId)
    if(brandId){
        query = {
            "subcategory.subcat_id":subCatId,
            "brand.brand_id":brandId
        }
    } else if(offerId){
        query = {
            "subcategory.subcat_id":subCatId,
            "offer.offer_id":offerId
        }
    }
    else{
        query = {}
    }
    let collection = "products";
    let output = await getData(collection,query);
    res.send(output)
})
//details
app.get('/details/:id', async(req,res) => {
    let id = Number(req.params.id);
    let query = {product_id: id }
    
    let collection = "products";
    let output = await getData(collection,query);
    res.send(output)
})
//    let id = new Mongo.ObjectId(req.params.id)


//orders
app.get('/orders',async(req,res) => {
    let query = {};
    if(req.query.email){
        query={email:req.query.email}
    }else{
        query = {}
    }
   
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output)
})

//add to cart details
app.post('/addToCart', async(req, res) => {
    if (Array.isArray(req.body.id)){
        let query = {product_id: {$in:req.body.id}}
        let collection = 'cart'
        let output = await postData(collection,query);
        res.send(output)
    }
    else{
        res.send('Please enter data in form of array')
    }
})
//cart details
app.get('/cartDetails', async(req, res) => {

        let query = {}
        let collection = 'cart'
        let output = await getData(collection,query);
        res.send(output)
    
})


//placeOrder
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = "orders";
    let output = await postData(collection,data)
    res.send(output)
})

//update order
app.put('/updateOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})

//delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = 'orders';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let output = await deleteOrder(collection,condition)
    res.send(output)
})





//test with zomato

// app.get('/location',async (req,res) => {
//     let query={}
//     let collection="location"
//     let output = await getData(collection,query)
//     res.send(output);
// })

// app.get('/restaurants',async (req,res) => {
//     let query={}
//     if(req.query.stateId){
//         query={state_id: Number(req.query.stateId)}
//     }
//     let collection="restaurants"
//     let output = await getData(collection,query)
//     res.send(output);
// })

// app.get('/filter/:mealId',async (req,res) => {
//     let mealId= Number(req.params.mealId);
//     let cusineId = Number(req.query.cusineId)

//     //let query={}
//     if(cusineId){
        
//         query={
//             "mealTypes.mealtype_id":mealId,
//             "cuisines.cuisine_id":cusineId
//         }
//     }
//     else{
//         let query={} 
//     }
//     let collection="restaurants"
//     let output = await getData(collection,query)
//     res.send(output);
// })









app.listen(port,(err) => {
    dbConnect()
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})