const mongoose = require('mongoose')
async function connectdb() {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
        console.log("DB connected")
        })
        .catch(err => {
            console.log("error connecting to DB")
            process.exit(1)
        })
    
}

module.exports = connectdb
