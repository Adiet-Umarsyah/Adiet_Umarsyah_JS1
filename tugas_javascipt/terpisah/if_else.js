// If Else
console.log("If Statement :");
const harga = prompt("Masukkan harga minimal 1000: ");
const ifharga = document.getElementById("if");
if(harga < 20000){
    console.log("Harganya Murah");
    ifharga.textContent = "Harganya Murah";
    alert("Harganya Murah");
}else if(harga >=20000){
    console.log("Harganya Mahal");
    ifharga.textContent = "Harganya Mahal";
    alert("Harganya Mahah");
}else{
    console.log("Harganya Kurang");
    ifharga.textContent = "Harganya Kurang";
    alert("Harganya Kurang");
}
console.log(" ");