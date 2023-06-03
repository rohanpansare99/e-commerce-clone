let express = require('express');
let app = express();
let port = 1920;
let {dbConnect, db, getData} = require('./controller/dbController');

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

//Products
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