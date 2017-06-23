/*const express=require('express');
const hbs=require('hbs');
var app=express();

hbs.registerPartials(__dirname+'/views/partials')

hbs.registerHelper('year',()=>{
   return new Date().getFullYear(); 
});
hbs.registerHelper('scream',(text)=>{
    return text.toUpperCase();
})

app.get('/',(req,res)=>{
    res.render('home.hbs',{
       welcome:'hello this is my wesbite'
    });
});

app.set('view engine','hbs');




app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        about:'About this page'
    });
}); 

app.listen(3000,()=>{
    console.log('server is onnnnnnnnnnnnn');
})
*/
var fs=require('fs');
const express=require('express');
const hbs=require('hbs');
var app=express();

const port=process.env.PORT || 3000;
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('scream',(text)=>{
    return text.toUpperCase();
})
hbs.registerHelper('year',()=>{
    return new Date().getFullYear();
})
app.use((req,res,next)=>{
var now=new Date().toString();
    var log=now+' '+req.method+' '+req.url;
    console.log(log);
    fs.appendFile('server.log',log+'\n',(err)=>{
        if(err){
            console.log('yay');
        }
    })
    
    next();
});

app.get('/',(req,res)=>{
        res.render('home.hbs',{
        welcome:'welcome to my page'
        }
        )});


app.get('/about',(req,res)=>{
        res.render('about.hbs',{
        about:'this is my page'
        }
        )});

app.listen(port,()=>{
    console.log('server is onnnnnnnn');
})
