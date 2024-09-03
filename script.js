let inputText = document.getElementById("input-text");

function search(){
    if(inputText.value != ""){
        window.location.href = `https://www.google.com/search?q=${inputText.value}`;
        inputText.value = "";
    }
    else{
        alert("First enter something to search")
    }
}    

document.addEventListener('keydown',event =>{
    if(event.keyCode === 13){
       search();
    }
})
