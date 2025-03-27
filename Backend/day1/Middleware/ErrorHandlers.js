const ErrorHandlers = (err, req, res, next) => {
    res.status(500).json({
        message: "Failed",
        err,
    })
}

module.exports = {
    ErrorHandlers
}