let field = document.querySelector(".main")

for(i = 0; i < 300; i++){
    field.innerHTML += '<div id="main' + (i+1) + '" class="cell">' + (i+1) +'</div>' 
}