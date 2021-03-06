const express = require("express")

const app = express()

app.set('secret','i2u4u7s2h3ad')
app.use(require('cors')())
app.use(express.json())
app.use('/uploads',express.static(__dirname+'/uploads'))
require('./routes/admin/index')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
    console.log("http://localhost:3000")
})
