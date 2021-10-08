const {connect} = require('mongoose')
const log = require('../logger/logger')
const connectDB = async () => {
    const {MONGODB_URI} = process.env
    const db =  await connect(MONGODB_URI)
    log.info(`MongoDB is conected ${db.connection.name}, CLASTER_NAME: ${db.connection.host}`)
}

module.exports = connectDB
