function hitung_luas() {
    const alas = parseFloat(document.getElementById("Falas").value);
    const tinggi = parseFloat(document.getElementById("Ftinggi").value);

    const luas = 0.5 * alas * tinggi;
    document.getElementById("luas").textContent = luas.toFixed();
    return false;
}
function reset_luas () {
    document.getElementById("Falas").value = "";
    document.getElementById("Ftinggi").value = "";
    document.getElementById("luas").textContent = "";
}

function hitung_keliling() {
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);

    const keliling = sisi1 + sisi2 +sisi3;
    document.getElementById("keliling").textContent = keliling.toFixed();
}
function reset_keliling(){
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("keliling").textContent = "";
}

function hitung_luas_jg() {
    const alas = parseFloat(document.getElementById("alasjg").value);
    const tinggi = parseFloat(document.getElementById("tinggijg").value);

    const luas = alas * tinggi;
    document.getElementById("luasjg").textContent = luas.toFixed();
}
function reset_luas_jg(){
    document.getElementById("alasjg").value = "";
    document.getElementById("tinggijg").value = "";
    document.getElementById("luasjg").textContent = "";
}

function hitung_keliling_jg() {
    const alas = parseFloat(document.getElementById("alasj").value);
    const tinggi = parseFloat(document.getElementById("tinggij").value);

    const luas = alas * tinggi;
    document.getElementById("kelilingjg").textContent = luas.toFixed();
}
function reset_keliling_jg(){
    document.getElementById("alasj").value = "";
    document.getElementById("tinggij").value = "";
    document.getElementById("kelilingjg").textContent = "";
}