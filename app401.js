//Define function
const fname = "Mark Zuckerberg";
function hello(fname,age,position) {
    console.log("Hello" , fname , age , position);
}
//Call function
let position = window.prompt("Enter position: ") //รับค่าจากแป้นพิมพ์
document.getElementById("test").innerHTML = position;
hello(fname , 45 , position);
hello("Elon Musk" , 50 , "CEO")