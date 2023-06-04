module.exports.home=function(req,res){
    console.log(req.cookies);
//    return res.cookies('user_id',25);
console.log("hh");
console.log(req.body);
    return res.render('home')
   
}