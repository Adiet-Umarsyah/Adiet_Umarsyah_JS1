// Do While
console.log("Do While Statement :");
const ayam = prompt("Masukkan Banyak Anak Ayam: ");
let jumlah_ayam = parseInt(ayam)
let h = 0;
do{
    h++;
    console.log("Menetas "+h+" Anak Ayam");
}while(h < jumlah_ayam);
const ay = document.getElementById("dw");
ay.textContent = "Menetas Sebanyak "+h+" Anak Ayam";
alert("Menetas Sebanyak "+h+" Anak Ayam");
console.log(" ");