var gulp = require("gulp");
var webserver = require("gulp-webserver")
var fs = require("fs")
gulp.task("httpserver",function(){
    gulp.src("./")
        .pipe(webserver({
            port:8080,
            livereload:true,
            open:true
        }))
})
gulp.task("mockserver",function(){
    gulp.src("./")
        .pipe(webserver({
            port:3000,
            middleware:function(req,res,next){
                res.writeHeader(200,{
                    "content-type":"text/json",
                    "Access-Control-Allow-Origin":"*"
                })
                if(req.url=="/data"){
                    res.end(fs.readFileSync("./Data/data.json"))
                }
            }
        }))
})
gulp.task("default",["httpserver","mockserver"])