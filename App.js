const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ma");
console.log('connection successful...');

//mongodb schema defines the structure of the document & also used to get the default values
const schemaData = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    Div:String,
    Rollno:Number
    

})

const Playlist = new mongoose.model("Playlist",schemaData); // creates a database

// creating or inserting document 

const createDocument = async () => {
    try{
        const reactPlaylist = new Playlist({
            name : "Sharad",
            Div : "D",
            Rollno : 54
        })
        
        const nodejs = new Playlist({
            name : "nodejs",
            Div : "M",
            Rollno : 1
        })
        
        const mongo = new Playlist({
            name : "mongo",
            Div : "F",
            Rollno : 4
        })
        
         const result = await Playlist.insertMany([reactPlaylist,nodejs,mongo]);
         console.log(result);

    }catch(err){
        console.log(err);
    }
    
}

//createDocument();

const getDocument = async ()=>{
    const result = await Playlist
    //.find({name:"nodejs"})
    //.find({Rollno:{$lt:4}})
    //.find({Div:{$in :["D"]}})
    .find({$or : [{Div:"M"},{Rollno:7}]})
    .select({name:0}).limit(1);
    console.log(result);
}
getDocument();
