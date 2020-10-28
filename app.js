let number = prompt("เลขที่ต้องการซื้อหวย 2 ตัวท้ายคือ ?")
console.log(number)
document.getElementById("number").innerHTML = number
let random_number = Math.floor(Math.random()*100)
document.getElementById("random").innerHTML = random_number
if(number == random_number){
    document.getElementById("rerult").innerHTML = "ยินดีด้วยคุณถูกรางวัล 2 ตัวท้าย"
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วย คุณไม่ถูกรางวัล 2 ตัวท้าย "
}
