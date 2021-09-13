const dragArea = document.querySelector('.frame')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const title = document.querySelector('.title')

let file

// If the user click the button, then the input is clicked too
btn.onclick = ()=>{
    input.click();
}