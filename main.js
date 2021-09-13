const dropArea = document.getElementById('drop-area')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const title = document.querySelector('.title')

let file;

// If the user click the button, then the input is clicked too
btn.onclick = ()=>{
    input.click();
}

// If the user drag the file over dropArea
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault()
    // console.log('file is over dropArea')
    dropArea.classList.add('active')
})

// If the user leaves the file from dropArea
dropArea.addEventListener("dragleave", ()=>{
    // console.log('file is out of dropArea')
    dropArea.classList.remove('active')
})

// if the user drop the file on dropArea
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault()
    // console.log('file is out of dropArea')
    dropArea.classList.add('active')
})