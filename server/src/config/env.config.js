function getRequire(key){
    const exist = process.env[key] ??""
    if(!exist){
        throw new Error(`${key} does not exist`)
    }
    return exist
}

function getKey(key,existed){
    const exist = process.env[key] ??""
    if(!exist){
        return existed
    }
    return exist
}

class EnvConfig{
    static PORT = getRequire("PORT")
    static DB_STRING= getKey("DB_STRING","mongodb://localhost:27017/inventory_system")
}

module.exports = EnvConfig