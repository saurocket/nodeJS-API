const app = require('../app')
const log = require('../logger/logger')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  log.info(`Server running. Use our API on port: ${PORT}`)
})
