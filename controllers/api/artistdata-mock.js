const router = require("express").Router()

const artists = require("./artist-mockdata")

router.get("/artistdatamock", (req,res) => {
 
 
    try{res.render("artistsearch", {artists})
  }
    catch(err){
        res.status(404).end();
    }
}) 

module.exports = router;

