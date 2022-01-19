const {writeFile, readFile} = require('fs')

readFile('./ets/t1.txt','utf8',(err, result) => {
        if (err){
            console.log(err)
            return
        }
        var res=result;
        readFile('./ets/t2.txt','utf8',(err, result2) => {
            if(err){
                console.log(err)
                return
            }
            res=res+result2;
            console.log(res)
            writeFile('./ets/t3.txt',res,(err)=>{
                if(err){
                    console.log(err)
                    return
                }
            })
        })
        console.log(res)
        
    }
)

