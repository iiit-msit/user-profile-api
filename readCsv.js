//install package (npm i csvtojson) in cmd

const csv=require('csvtojson')
// Invoking csv returns a promise
const converter=csv()
.fromFile('fileName')
.then((json)=>{
    console.log(json);
})