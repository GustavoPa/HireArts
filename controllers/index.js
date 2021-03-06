
const router = require("express").Router()
const apiRoutes = require("./api")
const htmlRoutes = require("./html-routes")

router.use("/api", apiRoutes) 
router.use("/", htmlRoutes) 

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;

