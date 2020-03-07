console.log('Test');

const btn = document.querySelector('button');
const title = document.querySelector('h1');
const div = document.querySelector('div');
let flag = true;
console.log(typeof btn);

btn.addEventListener('click', onClick);

function onClick()
{
    if(flag)
    {
        document.body.style.backgroundColor = 'black';
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        btn.style.border = '5px solid white';
        div.style.boxShadow = '5px 5px white';
        div.style.border = '5px solid white';
        title.innerText = 'Black COLOR BG';
        flag = false;
    }
    else
    {
        window.location.reload(); // This is not the most optimized solution, but since this exercise has few elements, it's good enough
    }
}
