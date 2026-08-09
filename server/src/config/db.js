const mongoose = require("mongoose")
const EnvConfig = require("./env.config")

// const ConnectDB = async()=>{}

async function ConnectDB(){
    try {
        await mongoose.connect(EnvConfig.DB_STRING)
        console.log(`the db is connect with ${mongoose.connection.host}`)
        
    } catch (error) {
        console.log("DB Connection is failed");
        
        process.exit(1)
    }
}

module.exports  = ConnectDB