const dropArea = document.getElementById('drop-area')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const title = document.querySelector('.title')

let file;

// If the user click the button, then the input is clicked too
btn.onclick = ()=>{
    input.click();
}

input.addEventListener("change", function(){
    // Getting user select file and selecting only the first one in case the user drops multiple files
    file = this.files[0]
    showFile()
    dropArea.classList.add('active')
})

// If the user drag the file over dropArea
dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault()
    dropArea.classList.add('active')
    title.textContent = "Release to upload file"
})

// If the user leaves the file from dropArea
dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove('active')
    title.textContent = "Drag & Drop to upload file"
})

// if the user drop the file on dropArea
dropArea.addEventListener("drop", (event)=>{
    event.preventDefault()
    // Getting user select file and selecting only the first one in case the user drops multiple files
    file = event.dataTransfer.files[0]
    showFile()
})

function showFile(){
    let fileType = file.type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]
    
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader()
    
        fileReader.onload = ()=>{
            let fileURL = fileReader.result
            let imgTag = '<img src = "'+ fileURL +'" ' + 'alt = "image">'
            dropArea.innerHTML = imgTag
        }
    
        fileReader.readAsDataURL(file)
    } else{
        alert("This is not an Image File!")
    }
}