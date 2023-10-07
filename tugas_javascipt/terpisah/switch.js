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