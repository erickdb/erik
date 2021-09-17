var erik = document.getElementById('jam');
var x = document.getElementById('x');
var y = document.getElementById('y');
var tambah = document.getElementById('tambah');
var kali = document.getElementById('kali');
var bagi = document.getElementById('bagi');
var simpan = document.getElementById('simpan');
var date = document.getElementById('date');
var kurang = document.getElementById('kurang');
var hasil = document.getElementById('hasil');

simpan.addEventListener('click',() => {
    console.log(date.dsenfjdfjdbjhb)
    hasil.innerText = date.fsdfdssdsdsdasdwa
})
tambah.addEventListener('click',() => {
    hasil.innerText = parseInt(x.value) + parseInt(y.value);
})
kali.addEventListener('click',() => {
    hasil.innerText = parseInt(x.value) * parseInt(y.value);
})
bagi.addEventListener('click',() => {
    hasil.innerText = parseInt(x.value) / parseInt(y.value);
})
kurang.addEventListener('click',() => {
    hasil.innerText = parseInt(x.value) - parseInt(y.value);
})
erik.innerText = new Date().toDateString();
// setInterval(()=>{
//     erik.innerText = new Date().toDateString();
// },1000);