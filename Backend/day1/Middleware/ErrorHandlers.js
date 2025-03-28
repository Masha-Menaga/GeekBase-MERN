const ErrorHandlers = (err, req, res, next) => {

    //Validation Error
    if (err.name === "validationError") {
        const errMsg = Object.values(err.errors).map((el) => el.message)
        return res.status(500).json({
            message: " Validation Failed!",
            errMsg,
        })
    }

    //Cast Error
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "CastError - Invalid Id Format",
            error: `Invalid ${err.path} : ${err.values}`,
        })
    }

    //Code Error
    if (err.code == 11000) {
        const key = Object.keys(err.keyValue)[0];
        const value = err.keyValue[key];
        return res.status(400).json({
            message: `Duplicate value ${key} : ${value}`
        })
    }

    res.status(500).json({
        message: "Failed",
        err,
    })
}

module.exports = {
    ErrorHandlers
}