var number = [];
function add(){
    var inputData = document.getElementById("inputData");
    number.push(inputData);
    console.log('success');
}
function isFinite(){
    console.log("Có phải số hữu hạn không");
    number.forEach((e)=>{
        if(Number.isFinite(e)==true){
            console.log("Không phải số hữu hạn");
            console.log(Number.isFinite(e))
        }else{
            console.log("Là số hữu hạn");
        }
    })
}
function isInteger(){
    console.log("Có phải số tự nhiên không");
    number.forEach((e)=>{
        if(Number.isInteger(e)==true){
            console.log("Không phải số tự nhiên");
        }else{
            console.log("Là số tự nhiên");
        }
    })
}