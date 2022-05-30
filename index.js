// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */

  let hasilLooping=[];
  for (let a = 0; a < dataYangAkanDilooping.length; a++){
    let nama = dataYangAkanDilooping[a].namaDepan + " " + dataYangAkanDilooping[a].namaBelakang;

    hasilLooping[a] = nama;
    hasilLooping[a+1];
  }



  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = 0;
  for (let a = 0; a < dataYangAkanDilooping.length; a++){
    if(dataYangAkanDilooping[a].jenisKelamin == "M"){
      jumlahPria = jumlahPria+1;

    }
  }

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = 0;
  for (let a = 0; a < dataYangAkanDilooping.length; a++){
    if(dataYangAkanDilooping[a].jenisKelamin == "F"){
      jumlahWanita = jumlahWanita+1;

    }
  }

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar;
  if (jumlahPria > jumlahWanita){
    komentar = "Jumlah Pria lebih banyak dari Wanita";
  }else if (jumlahWanita > jumlahPria){
    komentar = "Jumlah Wanita lebih banyak dari Pria";
  }else if (jumlahPria == jumlahWanita){
    komentar = "Jumlah Pria dan Wanita berimbang";
  }else{
    komentar = "Terjadi kesalahan.";
  }

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
