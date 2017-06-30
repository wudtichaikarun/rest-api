import db from '../db'
import Fider from './finder'
import Pagination from './pagination'

const Model = {
    ...Fider,
    ...Pagination,
    
    create(attrs) {
        const collection = this.collection()
        const record = this.withPermmitedAttrs(attrs, { id: collection.length + 1 })

        this.setCollection([...collection, record])
        return record
    },

    update(id, attrs) {
        const collection = this.collection()
        const index = this.findIndex(id)

        const updatedRecord =
            this.withPermmitedAttrs(attrs, collection[index])

        this.setCollection([
            ...collection.slice(0, index),
            updatedRecord,
            ...collection.slice(index + 1 )
        ])

        return updatedRecord
    },

    destroy(id) {
        const collection = this.collection()
        const index = this.findIndex(id)

        this.setCollection([
             ...collection.slice(0, index),
             ...collection.slice(index + 1 )
        ])
    },

    collection() {
        return db[this.key]
    },

    findRecord(id) {
        return this.collection().find(record => record.id === +id)
    },
    findIndex(id){
        return this.collection().findIndex(record => record.id === +id)
    },

    withPermmitedAttrs(attrs, init = {}){
       return this.permittedAttrs.reduce(
            (record, attr) =>
            attrs[attr] ? { ...record, [attr]: attrs[attr]} : record, init )
    },

    setCollection(collection) {
        db[this.key] = collection
    }
}

export default Model