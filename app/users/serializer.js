
import Serializer from '../serializer'

const UsersSerializer = {
    ...Serializer,

    get(user) {
       return this.serialize(user)
    },

    getAll(users){
       return users.map(user => this.serialize(user)) 
    },

    create(){
        return this.serialize(user)
    },

    serialize(user) {
          const { id, email } = user
        return { id, email }
    }
}

export default UsersSerializer