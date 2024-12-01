// Aritmatika
function tambah() {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  let hasil = angka1 + angka2;
  document.getElementById("tambah").innerHTML = hasil;

  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}

function kurang() {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  let hasil = angka1 - angka2;
  document.getElementById("kurang").innerHTML = hasil;

  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}

function kali() {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  let hasil = angka1 * angka2;
  document.getElementById("kali").innerHTML = hasil;

  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}

function bagi() {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  let hasil = angka1 / angka2;
  document.getElementById("bagi").innerHTML = hasil;

  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}

function sisabagi() {
  let angka1 = parseInt(document.getElementById("angka1").value);
  let angka2 = parseInt(document.getElementById("angka2").value);
  let hasil = angka1 % angka2;
  document.getElementById("sisabagi").innerHTML = hasil;

  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
}

// Perbandingan
function cekHasil() {
  let angka3 = parseInt(document.getElementById("angka3").value);
  let angka4 = parseInt(document.getElementById("angka4").value);

  if (angka3 > angka4) {
    document.getElementById(
      "hasilperbandingan"
    ).innerHTML = `${angka3} lebih besar dari ${angka4}`;
  } else if (angka3 < angka4) {
    document.getElementById(
      "hasilperbandingan"
    ).innerHTML = `${angka3} lebih kecil dari ${angka4}`;
  } else if (angka3 == angka4) {
    document.getElementById(
      "hasilperbandingan"
    ).innerHTML = `${angka3} sama dengan ${angka4}`;
  } else if (angka3 != angka4) {
    document.getElementById(
      "hasilperbandingan"
    ).innerHTML = `${angka3} tidak sama dengan ${angka4}`;
  } else {
    document.getElementById("hasilperbandingan").innerHTML = `Tidak Diketahui`;
  }

  document.getElementById("angka3").value = "";
  document.getElementById("angka4").value = "";
}
