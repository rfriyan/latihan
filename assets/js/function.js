/* Variable */
// var nama = "riyan" (Variabel dalam js lama)
//$nama = "riyan"; (variabel dalam php)


let nama = "riyan";
let kota_kelahiran = "Magelang";

let barang = 80;
let jumlah = 100;
let total = barang + jumlah;

/* constant */
const country = "Indonesia";
const database = "pelatihan";

/* Data Type */

/* Operator */


/* alert */
let cookie;
cookie = "riyan 27102021";
let cookie2 ="rf 27102021";

/* output */
alert(cookie);

//Console.log untuk implementasi alert saat ad kesalahan / error
console.log("total barang + total"); /* yang muncul akan keluar total barang karena string */
document.write("Test Dulu");


/* Conditional */
if (nama_lengkap = "riyan rf"){
    alert ("Selamat Datang" + nama_lengkap);
} else {
    alert("Maaf sapa ya");
}


/* Loop */
for(let i = 0; i<=10; i++){
   // console.log(i);
}

let j = 0;
while (j <= 10) {
    //console.log(j);
    j++;
}

let k = 0;
do {
  //  console.log("loop 3" + k);
    k++;
}
while (k<=10);


/* Function */
function greeting(){
    if (nama_lengkap){
        console.log("user aman, bisa masuk web");

    }else{
        console.log("user tidak aman, jangan kasih masuk web");
    }

}

greeting();

function login(username, password){
    if(username && password){
        console.log("Selamat Datang");
        console.log("username:"+username);
        console.log("password:"+password);
        
    }else if(username ||password){
        console.log("Username atau Password Salah");
    
    }else{
        console.log("Anda Belum Login");
    }
}

let username = "Fulan";
let password = "1234";

login(username,password);

function luasSegitiga(alas, tinggi){
let luas = (alas * tinggi) / 2;
return luas;
}

let alas = 10;
let tinggi = 5;
let luas = luasSegitiga(alas,tinggi);
console.log(luas);


//Struktur Data
let dataMhs = ["Satu", "Dua","Tiga"];
