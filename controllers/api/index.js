const router = require("express").Router()

const artistsRoute = require("./artistdata-mock")

router.use ("/mock", artistsRoute);

module.exports = router; 
