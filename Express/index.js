let express = require("express");
let app = express();

let port = 3000;

app.listen(port,()=>{
    console.log(`${port} is on`);
})

/*app.use((req,res)=>{
    console.dir(req);
    console.log("Request recieved ");
    res.send(<h1>Fruits <ul><li>Banana</li><li>Apple</li></ul></h1>);
})

*/

app.get("/",(req,res)=>{
    res.send("you contacted root path");
})

app.get("/apple",(req,res)=>{
    console.log("you contacted apple path");
})

app.get("/banana",(req,res)=>{
    res.send("you contacted banana path");
})

/*app.get("/*splat",(req,res)=>{
    console.log("you contacted wrong path");
})
    */

//Path parameter 
app.get("/:username/:id",(req,res)=>{
    let{username,id} = req.params;
     let htmlstr = `<h1>Welcome to the page of @${username} (ID: ${id})</h1>`;
    res.send(htmlstr);
})