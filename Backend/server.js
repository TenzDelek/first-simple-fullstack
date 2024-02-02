import express from 'express';

const app=express();

//all app.use() that starts from use are middleware commands
// app.use(express.static('dist')) -- used when build of frontend is there 
//but it is consider bad practise because the changes of frontend will not reflect
//so we need to again build frontend and it create a dist file and take it to backend

// app.get('/',(req,res)=>{
//     res.send('server is ready')
// })

app.get('/api/quote',(req,res)=>{
    const quote=[
        {
            id:1,
            title:'Tenzin Quote',
            content:'BE THE CHANGE'
        },
        {
            id:2,
            title:'Delek Quote',
            content:'ONE STEP A TIME'
        },
        {
            id:3,
            title:'mONLAM Quote',
            content:'TRUST THE PROCESS'
        },

    ]
    res.send(quote)
})

const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})
//step1: create the express server
//step2: send data using the server constant
//step3: make a port and listen to it using the express constant
