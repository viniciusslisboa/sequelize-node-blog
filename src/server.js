// import express and handlebars
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const Post = require('./models/Post')

//body parser 
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//template handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
app.set('view engine', 'handlebars')


//routes
app.get('/', (req, res) => {
    res.render('form')
})

app.get('/posts', async (req, res) => {
    try {
        const all = await Post.findAll()
        res.render('home', {posts: all})


    } catch (err) {
        res.status(500).send(err)
    }
    
})

app.post('/add', (req, res) => {
    try {
        const title = req.body.title
        const content = req.body.content
        
        if(title == "" || content == "") {
            res.send('Houveram falhas no cadastro!')

        } else {
            Post.create({
                title: title,
                content: content
                })
//               
                res.redirect('/posts')
        }
    } catch (err) {
        res.status(500).send(err)
    }
    
})

app.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        Post.destroy({where: {'id': id}})
        res.redirect('/posts')
    } catch (err) {
        res.status(500).send(err)
    }
})


// start server port 
const port = 2433
app.listen(port, () => {
    console.log(`listen at port: ${port}`)
})
