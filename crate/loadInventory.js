function itemColor(rarity){

    switch (rarity) {
        case "exotic":
            return "#05c9ff";
            break;
        case "legendary":
            return "#ff6505";
            break;
        case "epic":
            return "#3c00ff";
        break;     
        case "rare":
            return "#005eff";
        break;  
        case "uncommon":
            return "#00ff8c";
        break;
        case "common":
            return "#9b9c97";
        break;    
        default:
            return "#fffff";
            break;
    }
}

function loadInventory(){
    document.querySelector(".inventory").innerHTML = "";
    for(i=0; i < localStorage.length; i++){
        if(localStorage.getItem("item" + i)){
            const currentItem = JSON.parse(localStorage.getItem("item" + i));
            if(currentItem.effect == "none"){
                document.querySelector(".inventory").innerHTML += `<div class="displayItem" style="background-color: ${itemColor(currentItem.rarity)};">${currentItem.quality} ${currentItem.rarity} ${currentItem.name}</div>`
            }else{
                document.querySelector(".inventory").innerHTML += `<div class="displayItem" style="background-color: ${itemColor(currentItem.rarity)};">${currentItem.quality} ${currentItem.rarity} ${currentItem.effect} ${currentItem.name}</div>`
            }
        }else{
            
        }
    }
}

loadInventory();

document.querySelector(".refresh").addEventListener("click", _=>{
    loadInventory();
})

