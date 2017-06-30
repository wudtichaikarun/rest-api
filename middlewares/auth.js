import jwt from 'jsonwebtoken'
//import config from '../config'  //call secreat key 'romantic_secret'
import { Users } from '../app/users'

export default function(req, res, next){
    const authHeader = req.header('Authorization')
    if(!authHeader) return next()

    // select only token not need Bearer use regulaexpression /Bearer (.*)/
    const accessToken = authHeader.match(/Bearer (.*)/)[1]

    jwt.verify(accessToken, 'romantic_secret', (err, decoded) => {
        if(err) return next()

        //console.log(decoded.sub)
        req.user = Users.find(decoded.sub)
        next()
    })
}