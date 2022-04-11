const mainContainer = document.querySelector('.container');
const app = mainContainer.querySelector('#action');
let url = 'https://jsonplaceholder.typicode.com/posts/1';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

async function mountStructure() {
    const elements = {
        div: document.createElement('div'),
        h1: document.createElement('h1'),
        p: document.createElement('p'),
    }

    const res = await getData();

    fillStructure(elements, res);
}

function fillStructure({ div, h1, p }, res) {
    h1.innerText = res.title;
    p.innerText = res.body;
    div.appendChild(h1);
    div.appendChild(p);

    document.querySelector('.container').appendChild(div);
}

app.addEventListener('click', (event) => mountStructure());
    // fetch(url)
    //     .then(response => response.json())
    //     .then(res => mountStructure(res));
// });