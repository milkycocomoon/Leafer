// Generate and render abc
const abc = document.querySelector('#filter-abc');
function genCharArray() {
    let a = [...Array(26)].map((e,i)=>(i+10).toString(36).toUpperCase());

    for (let i = 0; i < a.length; ++i) {
        const div = document.createElement('div');
        abc.appendChild(div);
        div.classList.add('button-abc');
        div.classList.add('abc');
        div.textContent = a[i];
        div.setAttribute('id', a[i].toLocaleLowerCase());
    }
};
genCharArray();