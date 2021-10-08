const app = require('../app')
const log = require('../logger/logger')
const connectDB = require('../config/db')



const {NODE_ENV, PORT = 3400} = process.env



connectDB()

app.listen(PORT, () => {
  log.info(`Server running in ${NODE_ENV}. Use our API on port: ${PORT}`)
})

process.on('unhandledRejection', (error, propise) => {
  log.info(`Error  ${error.message}`)
  app.close(() => process.exit(1))
})
