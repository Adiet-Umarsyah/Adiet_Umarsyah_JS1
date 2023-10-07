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