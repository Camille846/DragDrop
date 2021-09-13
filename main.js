const dropArea = document.getElementById('drop-area')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const title = document.querySelector('.title')

let file;

// If the user click the button, then the input is clicked too
btn.onclick = ()=>{
    input.click();
}

// If the user drag the file over dragArea
dropArea.addEventListener("dragover", ()=>{
    console.log('file is over dragArea')
})

// If the user leaves the file from dragArea
dropArea.addEventListener("dragleave", ()=>{
    console.log('file is out of dragArea')
})
