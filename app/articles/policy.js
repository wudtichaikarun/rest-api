import Policy from '../policy'

const articlePolicy = {
    ...Policy,

    create(user){
        return !!user
    },

    update(user, article){
        return user && user.id === article.authorId
    },

    destroy(user, article){
        return user && (user.isAdmin || user.id === article.authorId)
    }
}

export default articlePolicy