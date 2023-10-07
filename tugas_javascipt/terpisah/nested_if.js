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