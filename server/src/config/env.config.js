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
    static DB_STRING= getRequire("DB_STRING")
}

module.exports = EnvConfig