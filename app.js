var express=require('express');
var app=express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://kaloina4:13131313@clusterkal.ct0zewn.mongodb.net/?retryWrites=true&w=majority')
    .then(client=>{
        console.log('Cooooooooo')
        const db=client.db('DBBeaute')
        app.use(bodyParser.urlencoded({extended:true}))
        app.use(bodyParser.json())

        app.get('/getClients',function(req,res){
            const clientCollection = db.collection('client')
            
            clientCollection.find({}).toArray()
            .then(clients => {
                res.json(clients);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
        })

        app.listen(3000)
    })
    .catch(error=> console.error(error))
