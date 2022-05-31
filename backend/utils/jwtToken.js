//Create and send token and save in the cookie
const sendToken = (user, statusCode, res) => {
    //Create JWT token
    const token = user.getJwtToken()

    //Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: false
    }

    res.cookie('token', token, options)
    res.status(statusCode).json({
        success: true,
        token,
        user
    })
}

module.exports = sendToken