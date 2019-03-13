const app = require("express")()
const port = 8080
app.get('/', (req, res) => {
    res.json({ status: 200 })
})
app.listen(port, () => {
    console.log('magic happens on ' + port)
})