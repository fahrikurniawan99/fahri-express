const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

app.use(router)
app.use((req, res) => {
    res.status(404) 
    res.json({
        status: 'failed',
        message: 'Resource not found'
     });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
