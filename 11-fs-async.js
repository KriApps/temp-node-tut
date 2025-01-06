//async
const {readFile, writeFile, read} = require('fs');

readFile('./content/first.txt','utf8',(err, result)=>{
    if (err){
        console.log(err);
        return; 
    }
    const  first = result;
    readFile('./content/second.txt','utf8',(err, result)=>{
        if (err){
            console.log(err);
            return; 
        }
        const  second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`
        ,(err,result)=>{
            if (err){
                console.log(err);
                return;
            }
            console.log(result)
        })

    })
})

//task starts, offloads to the next task, task completes; this is easier and qucker for more users
//however callbacks are a problem, so alternatives are using promises or async await
//async await more useful 