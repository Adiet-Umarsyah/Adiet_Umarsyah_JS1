// While
console.log("While Statement :");
const bebek = prompt("Masukkan Banyak Anak Bebek: ");
let jumlah_bebek = parseInt(bebek)
let n = 0;
while(n < jumlah_bebek){
    n++;
    console.log("Turun "+n+" Anak Bebek");
}
const ab = document.getElementById("while");
ab.textContent = "Turun Sebanyak "+n+" Anak Bebek";
alert("Turun Sebanyak "+n+" Anak Bebek");
console.log(" ");