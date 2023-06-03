let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
//let mongoUrl = "mongodb://127.0.0.1:27017";
let mongoUrl = "mongodb+srv://Admin:jsx0kbtfm1XaBwik@cluster0.uk6ihnr.mongodb.net/?retryWrites=true&w=majority";
let client = new MongoClient(mongoUrl);


async function dbConnect(){
    await client.connect()
}

//let db = client.db('zomato');
let db = client.db('ecom');


async function getData(colName, query){
    let output = [];
    try {
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor){
            output.push(data);
        }
        cursor.closed;
    }
    catch(err){
        output.push({"Error":"Error in GetData"})
    }
    return output;
}
module.exports = {
    dbConnect,
    db,
    getData
}

