// let allGood = true

// let fetchSomeData = new Promise((res,err) => {
//     if(!allGood){
//         err("error fetching data!");
//     }
//     else {
//         res({
//             id : 1,
//             message : "nice work...."
//         });
//     }
// })

// fetchSomeData.then(respond =>console.log("then : "+respond.id+"\n"+respond.message)).catch(reason => console.log(reason))
const val =0
let function1 = new Promise((res,err)=>{
    setTimeout(() => {
        if(val ==1) {
            res("Resolve");
        }
        else{
            err("err");
        }
    }, 2000);
    
})

function1
.then(res =>console.log(res))
.catch(err=> console.log(err))
console.log("445")

console.log(function1)