module.exports=function(app){
    // app.all('*',(req,res,next)=>{
    //     res.header('Access-Control-Allow-Origin','*');
    //     res.header('Access-Control-Allow-Headers','Content-Type');
    //     next();
    // })
    app.use('/sign-up',require('./signup'));
    app.use('/login',require('./login'));
    app.use('/checkLogin',require('./checkLogin'));
    app.use('/logout',require('./logout'));
    app.use('/publish',require('./publish'));
    app.use('/content',require('./content'));
    app.use('/update',require('./update'));
}
