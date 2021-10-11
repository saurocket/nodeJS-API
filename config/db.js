const {connect} = require('mongoose')
const log = require('../logger/logger')
const connectDB = async () => {
    const {USER, PASSWORD, NAME} = process.env


    const MD_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.2iiy6.mongodb.net/${NAME}?retryWrites=true&w=majority`

    const db =  await connect(MD_URI)
    log.info(`MongoDB is conected ${db.connection.name}, CLASTER_NAME: ${db.connection.host}`)
}

module.exports = connectDB
