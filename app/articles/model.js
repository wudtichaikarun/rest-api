import Model from '../model'

const Articles = {
    ...Model,
    key: 'articles',
    //can change only title , authorId
    permittedAttrs: ['title','content', 'authorId', 'categoryId'] 
}

export default Articles