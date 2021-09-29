

const controllerWrapper = (ctr) => {
    return async (req, res, next) => {
        try {
            await ctr(req, res, next)
        }
        catch (e) {
            next(e)
        }
    }

}
module.exports = controllerWrapper
