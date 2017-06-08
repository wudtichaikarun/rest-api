import bcrypt from 'bcrypt'
import Model from '../model'

const Users = {
   ...Model,
   key: 'users',
   permittedAttrs: ['email'],

   createnewUser(email, password){
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 12, (err, hash) => {
        if(err) return reject(err)

        const collection = this.collection()
        const user = {
            id: collection.length + 1,
            email,
            password: hash,
            isAdmin: false
        }
        // console.log(user);
        console.log("-------->promise function")
        //this.setCollection([...collection, user])
        //return resolve(user)
       })
     })
   }
}
export default Users