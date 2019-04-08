const app = require('express')();
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser({
    extended: true
}))

app.use(cors())
app.use('/api/v1', routes)


app.listen(process.env.PORT || 4000, () => { 
    console.log(`Server running`)
});

