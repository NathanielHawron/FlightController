const buttonList = document.getElementById("navigation").children[0];
const pageDisplay = document.getElementById('pageDisplay');

for(const page of pages){
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.appendChild(button);
    
    button.innerText = page.buttonLabel;
    button.onclick = function(){
        pageDisplay.src = "./pages/"+page.filename+".html";
        window.location.hash=page.filename;
        
        const buttons = document.querySelectorAll('#navigation button');
        
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    }

    buttonList.appendChild(li);
}

let pageUrl = window.location.hash.substring(1)||0;
let pageUrlIndex = 0;
for(let p in pages){
    if(pages[p].filename == pageUrl){
        pageUrlIndex = p;
        break;
    }
}
if(pageUrlIndex >= 0){
    buttonList.children[pageUrlIndex].children[0].onclick();
}