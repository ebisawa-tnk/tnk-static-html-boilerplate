
const a = 1;
const b = 2;
let d = 1;
const calc = () => {
    const c = String(a + b + d);
    const div = document.createElement('p');
    div.innerHTML = c;
    const element = document.getElementById('inspection');
    element.insertAdjacentHTML('afterend', `<p>${c}</p>`);
    element.classList.add('inside-body-image');
}
const element = document.getElementById('inspection');
element.addEventListener('click', () => {
    console.log('click');
    d++;
    calc();
});
