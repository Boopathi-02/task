const express = require('express');
const cors = require('cors')
const app = express();
const fileupload = require('express-fileupload')
const bodyparser = require("body-parser")

app.use(cors());
app.use(fileupload())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.listen(3005)


// ===================================================================

app.post("/login", (req, res) => {

    const user = req.body.user;
    const password = req.body.password;
    const type = req.body.type;

    if (!user || !password || !type) {
        const resp = {
            Response: {
                Success: 0,
                Message: 'Please Provide username , Password and Type'
            }
        }
        res.send(resp)


    }

    if (type == 'A') {
        if (user.toUpperCase() == 'ADMIN' && password.toUpperCase() == "ADMIN") {
            const resp = {
                Response: {
                    Success: 1,
                    Message: 'Access Provide'
                }
            }
            res.send(resp)

        } else {
            const resp = {
                Response: {
                    Success: 0,
                    Message: 'Please Provide Correctly'
                }
            }
            res.send(resp)
        }

    }
    if (type == 'U') {
        if (user.toUpperCase() == 'EM1' && password == "123456") {
            const resp = {
                Response: {
                    Success: 1,
                    Message: 'Access Provide'
                }
            }
            res.send(resp)

        } else {
            const resp = {
                Response: {
                    Success: 0,
                    Message: 'Please Provide Correctly'
                }
            }
            res.send(resp)
        }

    }
})