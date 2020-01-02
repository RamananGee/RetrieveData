const functions = require('firebase-functions');
const admin = require('firebase-admin');
var serviceAccount = require("../retrieve-ff6b0-firebase-adminsdk-savhu-80bffd411a.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://retrieve-ff6b0.firebaseio.com"
  });


  
  
 

exports.ret = functions.https.onCall((data) =>{
     let reff = admin.database().ref().child('people');
     var creff = reff.child(data.id);
     creff.on("value", snap =>{
         var name1 = snap.child("name").val();
         console.log(name1);
         return {
            name: name1
        }
     })
   
})