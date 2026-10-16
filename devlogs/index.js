const buttonList = document.getElementById("navigation").children[0];
const pageDisplay = document.getElementById('pageDisplay');

for(const page of pages){
    let li = document.createElement("li");
    let button = document.createElement("button");
    let indicator = document.createElement("input");
    indicator.type = "radio";
    indicator.inert = true;
    indicator.classList.add("indicator");
    indicator.checked = true;

    li.appendChild(button);
    li.appendChild(indicator);
    li.style.position = "relative";

    switch(page.indicator){
        case 0:indicator.hidden = true;break;
        case 1:indicator.style.accentColor ="red";break;
        case 2:indicator.style.accentColor ="blue";break;
    }
    
    button.innerText = page.buttonLabel;
    button.onclick = function(){
        pageDisplay.src = "./pages/"+page.filename+".html";
        window.location.hash=page.filename;
        
        const buttons = document.querySelectorAll('#navigation button');
        
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        localStorage.setItem(page.filename, page.version);
        page.indicator = 0;
        indicator.hidden = true;
    }
    if(page.bclass != undefined){
        button.classList.add(page.bclass);
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