const app = require("./src/app")
const EnvConfig = require("./src/config/env.config")
const port = EnvConfig.PORT

console.log(EnvConfig.DB_STRING);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})