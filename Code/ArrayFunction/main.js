var array=[];

function add(){
    var tuoi = document.getElementById('txtTuoi').value;
    if(tuoi.trim()!= null){
        array.push(tuoi);
        tuoi.value =" ";
    }else{
        alert('Vui lòng nhập đủ thông tin!');
    }
    console.log('save succes')
}
function map(){
    console.log("Mảng hiện tại là: ")
    array.map((e)=>{
        console.log(e);
    });
}
var arrayFill = [];
function fill(){
    arrayFill=array.fill(21,1,6);
    console.log("Fill số 21 vào table")
    console.log(arrayFill);
}
function ToString(){
    console.log("Chuyển hết về String")
    console.log(arrayFill.toString());
}
function within(){
    console.log("Coppy cái thứ 3 xong paste sang cái 1-4")
    let within = array.copyWithin(3,1,4);
    console.log(within);
}
function Every(){
    console.log("Có cái nào lớn hơn 33 không ")
    function check(number){
        return number >33;
    }
    console.log(array.every(check));
}
function Find(){
    console.log("Moi ra cái lớn hơn 21 đi")
    function check(e){
        return e >21;
    }
    var find = array.find(check);
    console.log(find);
}
function FindIndex(){
    console.log("Cái lớn hơn 21 nó nằm chỗ nào.")
    var findIndex = array.findIndex(function(e){
        return e >21;
    });
    console.log(findIndex);
}
function Foreach(){
    console.log("Có số bay qua con 21 không")
    var Foreach = array.forEach((e)=>{
        if(e>21){
            return false;
        }else{
            return true;
        }
    });
    if(Foreach = false){
        console.log("tạch rồi bae ơi");
    }
    else{
        console.log('bay rồi bae ơi')
    }
}
function Indexof(){
    console.log("Cái mình cần để đâu ấy nhể")
    console.log(arrayFill.indexOf(21));
}
function isarray(){
    console.log("Fill xong thì có mảng không")
    console.log(Array.isArray(arrayFill));
}
function yone(){
    console.log("Ném chúng nó ra xa nhao")
    console.log(array.join('<+>'));
}
function LastIndexof(){
    console.log("Từ đít lên đầu con 21 nó nằm chỗ nào")
    var check  = arrayFill.lastIndexOf(21);
    console.log(check);
}
function Reveres(){
    console.log("ngoáy lộn mảng này lên")
    console.log(arrayFill.reverse());
}
function pop(){
    console.log("xóa đứa ở cuối xem nó là đứa nào")
    console.log(array.pop());
}
function reduce(){
    console.log("Duyệt mảng rồi sum cno lại nào");
    var t = array.reduce((t,e)=>{
        if(e>31){
            return t + e;
        }else{
            return t;
        }
    })
    console.log(t);
}
function Arrayshift(){
    console.log("Đá thằng đầu tiên xem nó là thằng nào")
    console.log(array.shift());
}
function Slice(){
    console.log("Lôi mấy đứa trong cái danh sách này ra")
    console.log(array.slice(1,19));
}
function Some(){
    console.log("Kiểm tra trong mảng xem có đứa nào thỏa mãn không")
    console.log(array.some(e=>
        e>21))
}
function Sort(){
    console.log("Sắp xếp các phẩn từ trong mảng")
    console.log(array.sort());
}
function Splice(){
    console.log("Các số đã xóa khỏi mảng là");
    var check = array.splice(2,3,33,44);
    console.log(check);
}
function Unshift(){
    console.log("Chiều dài của mảng sau khi thêm phẩn tử là")
    var check = array.unshift(22,33,222);
    console.log(check);
}