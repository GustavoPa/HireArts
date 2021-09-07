
const router = require("express").Router();

const artists = require("./api/artist-mockdata")
const user = {login:true}

router.get("/search", (req,res) => {
 
 
    try{res.render("artistsearch", {artists})
  }
    catch(err){
        res.status(404).end();
    }
}) 

router.get("/contacts", (req,res)=> {
    try{res.render("contacts")
  }
    catch(err){
        res.status(404).end();
    }
}) 

router.get("/signuplogin", (req,res)=> {
    try{res.render("signuplogin")
  }
    catch(err){
        res.status(404).end();
    }
}) 

router.get("/logout", (req,res)=> {
    try{res.render("logout")
  }
    catch(err){
        res.status(404).end();
    }
}) 
router.get("/editprofile", (req,res)=> {
    const artist = artists[0]
    try{res.render("editprofile", {artist})
  }
    catch(err){
        res.status(404).end();
    }
}) 
module.exports = router;

