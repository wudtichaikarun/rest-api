import controller from './controller'
//new router
export function setup(router){
    // instand of app.get('/users',() => {})
    router
    .get('/:id', controller.get)
    .get('/', controller.getAll)
    .post('/', controller.create)
}


//old router
// app.get('/users',() => {})
// app.get('/users/:id',() => {})
// app.post('/users',() => {})

    // instand of app.get('/users',() => {})
    //router.get('/',(req, res) => { res.send('hello worldvvv') })