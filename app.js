const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public')); // LOOKS FOR ALL THE STATIC PAGES
// app.use((req,res,next) => {
//     res.render('maintain.hbs');
// });

hbs.registerHelper('getcurrentyear',() => {
    return new Date().getFullYear();
})

app.get('/',(req,res) => {
    res.render('root.hbs',{
        title : 'Welcome Page',
        welcome : 'fantastic page',
    });
});

app.get('/bad',(req,res) => {
    res.send(
        {
            error : 'Some error occured'
        }
    );
});

app.get('/about',(req,res) => {
    res.render('about.hbs' );
})

app.listen(3000,() => {
    console.log('Server has Started');
});