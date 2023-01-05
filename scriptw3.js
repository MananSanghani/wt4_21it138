tbl = document.getElementById('tbl');
const bike = {
    wheels: 2,
    source: 'petrol',
}
const car = {
    wheels: 4,
    source: 'petrol/cng',
}
const bi = {
    wheels: 2,
    source: 'human effort',
}
let whe = document.getElementById('whe');
let src = document.getElementById('srca');
function detail(bike){
    whe.innerText = bike.wheels;
    src.innerText = bike.source;
}
function detail(car){
    whe.innerText = car.wheels;
    src.innerText = car.source;
}
function detail(bi){
    whe.innerText = bi.wheels;
    src.innerText = bi.source;
}