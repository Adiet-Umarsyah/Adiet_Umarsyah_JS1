// For
console.log("For Statement :");
const jalan = prompt("Masukkan Banyak Jalan: ");
let i;
for(i = 1; i <= jalan; i++){
    console.log("Ini Jalan Ke " + i);
}
alert("Terdapat " + jalan + " Jalan")
const hasilDiv = document.getElementById("hasil");
hasilDiv.textContent = "Terdapat " + jalan + " Jalan";
console.log(" ");