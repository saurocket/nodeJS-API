const sendGrid = require('@sendgrid/mail')

const sendEmail = async (data) => {
    const {SAND_GRID_KEY} = process.env
    sendGrid.setApiKey(SAND_GRID_KEY)

    const email = {...data, from: "ezsauron167@yandex.ru"}
    try {
        await sendGrid.send(email)
        return true
    } catch (e) {
        throw e
    }
}
module.exports = sendEmail
