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

// Nested If
console.log("Nested If :");
let no;
const nifw = document.getElementById("nif");
const warna = prompt("Pilih merah atau biru: ");
if(warna == "merah"){
    no = prompt("Pilih Nomor 1 Atau 2: ");
    if(no == "1"){
        alert("Selamat Anda Mendapatkan Nasi Lemak!!");
        nifw.textContent = "Selamat Anda Mendapatkan Nasi Lemak!!";
        console.log("Selamat Anda Mendapatkan Nasi Lemak!!");
    }else if(no == "2"){
        alert("Selamat Anda Mendapatkan KFC Fried Chicken!!");
        nifw.textContent = "Selamat Anda Mendapatkan KFC Fried Chicken!!";
        console.log("Selamat Anda Mendapatkan KFC Fried Chicken!!");
    }else{
        alert("Nomor Tidak Valid!!");
        console.log("Nomor Tidak Valid!!");
        nifw.textContent = "Nomor Tidak Valid!!";
    }
}else if(warna == "biru"){
    no = prompt("Pilih Nomor 1 Atau 2: ");
    if(no == "1"){
        alert("Selamat Anda Mendapatkan Es Teh Manis!!");
        nifw.textContent = "Selamat Anda Mendapatkan Es Teh Manis!!";
        console.log("Selamat Anda Mendapatkan Es Teh Manis!!");
    }else if(no == "2"){
        alert("Selamat Anda Mendapatkan McDonald Mcfloat!!");
        nifw.textContent = "Selamat Anda Mendapatkan McDonald Mcfloat!!";
        console.log("Selamat Anda Mendapatkan McDonald Mcfloat!!");
    }else{
        alert("Nomor Tidak Valid!!");
        console.log("Nomor Tidak Valid!!");
        nifw.textContent = "Nomor Tidak Valid!!";
    }
}else{
    alert("Warna Tidak Valid!!");
    console.log("Warna Tidak Valid!!");
    nifw.textContent = "Warna Tidak Valid!!";
}
console.log(" ");

// Switch
console.log("Switch :");
const pintu = prompt("Pilih Pintu 1-3: ");
const hasilSwitch = document.getElementById("switch");
switch(pintu){
    case "1":
        alert("Selamat Anda Memenangkan Mobil Avanza");
        console.log("Selamat Anda Memenangkan Mobil Avanza");
        hasilSwitch.textContent = "Selamat Anda Memenangkan Mobil Avanza";
        break;
    case "2":
        alert("Selamat Anda Memenangkan Mobil Jeep");
        console.log("Selamat Anda Memenangkan Mobil Jeep");
        hasilSwitch.textContent = "Selamat Anda Memenangkan Mobil Jeep";
        break;
    case "3":
        alert("Selamat Anda Memenangkan Mobil Tesla");
        console.log("Selamat Anda Memenangkan Mobil Tesla");
        hasilSwitch.textContent = "Selamat Anda Memenangkan Mobil Tesla";
        break;
    default:
        alert("Pintu Tidak Valid");
        console.log("Pintu Tidak Valid");
        hasilSwitch.textContent = "Pintu Tidak Valid";
        break;
}
console.log(" ");

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

// Function
console.log("Function :");
const n1 = prompt("Masukkan Nilai Pertama: ");
const n2 = prompt("Masukkan Nilai Kedua: ");
const op = prompt("Masukkan Operator Aritmatika: ");
function hitung(a, b, operator){
    let nilai1 = parseInt(a);
    let nilai2 = parseInt(b);
    let hasiloperator;
    if (operator == "+"){
        hasiloperator = nilai1 + nilai2;
        console.log("Hasil Operasi " + nilai1 + operator + nilai2 + " Adalah " + hasiloperator);
    }
    else if (operator == "-"){
        hasiloperator = nilai1 - nilai2;
        console.log("Hasil Operasi " + nilai1 + operator + nilai2 + " Adalah " + hasiloperator);
    }
    else if (operator == "*"){
        hasiloperator = nilai1 * nilai2;
        console.log("Hasil Operasi " + nilai1 + operator + nilai2 + " Adalah " + hasiloperator);
    }
    else if (operator == "/"){
        hasiloperator = nilai1 / nilai2;
        console.log("Hasil Operasi " + nilai1 + operator + nilai2 + " Adalah " + hasiloperator);
    }
    else{
        alert("Operator Tidak Valid");
        console.log("Operator Tidak Valid");
    }
    const arit = document.getElementById("fun");
    arit.textContent = "Hasil Operasi " + nilai1 + operator + nilai2 + " Adalah " + hasiloperator;
    alert("Hasil Operasi " + nilai1 + operator + nilai2 + " Adalah " + hasiloperator);
}
hitung(n1, n2, op);