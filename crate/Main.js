let openCd = false
let recentItemId = 0;
const itemList = ["likeFace", "kaktus", "super"];
const qualityList = ["Garbage", "Neat", "Nice", "Sloppy", "Elegant", "Superb"];
const rarityList = ["common", "common", "common", "common", "common", "common", "common", "common", "common", "uncommon", "uncommon", "uncommon", "uncommon", "uncommon", "uncommon", "uncommon", "rare", "rare", "rare", "rare", "rare", "epic", "epic", "epic", "legendary", "legendary", "exotic","super","super","super","super"];
const effectList = ["Raining Tacos", "orbiting flies", "♂","★super★"];
if(localStorage.getItem("recentNum")){
    recentItemId = parseInt(localStorage.getItem("recentNum"));
}else{
    recentItemId = 0;
}
class Item {
    constructor(id, name, rarity, quality,  effect) {
      this.id = id;
      this.name = name;
      this.rarity = rarity;
      this.quality = quality;
      this.effect = effect
    }

    ItemName(){
        if(this.effect == "none"){
            return `${this.quality} ${this.rarity} ${this.name}`;
        }
        else{
            return `${this.quality} ${this.rarity} ${this.effect} ${this.name}`;
        }
    }
  }

let items = new Array();

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
        case "super":
            return "#f2993f";
        break;    
        default:
            return "#fffff";
            break;
    }
}

function rollItem(itemName){
    recentItemId++;
    let rarity = rarityList[Math.floor(Math.random()*rarityList.length)];
    let effect = "none";
    if(Math.floor(Math.random()*101) <= 1){
        effect = effectList[Math.floor(Math.random()*effectList.length)];
    }
    let quality = qualityList[Math.floor(Math.random()*qualityList.length)];

    const uniqueItem = new Item(recentItemId, itemName, rarity, quality, effect);
    localStorage.setItem("recentNum", recentItemId);
    window.localStorage.setItem(`item${recentItemId}`, JSON.stringify(uniqueItem));
    return [uniqueItem.ItemName(), rarity];
}

document.querySelector("input[value='open']").addEventListener("click", _=>{
    if(openCd == false){
        document.querySelector(".crate .item").innerHTML = "";
        let random = Math.floor(Math.random()*itemList.length);
        let OpenedItem = itemList[random];
        let rolledItem = rollItem(OpenedItem)
        let itemText = rolledItem[0];
        openCd = true
        document.querySelector(".crate .faceLeft").style.opacity = 1;
        document.querySelector(".crate .faceRight").style.opacity = 1;
        document.querySelector(".crate .faceFront").style.opacity = 1;
        document.querySelector(".crate .faceLeft").classList.add("FallAnimLeft");
        document.querySelector(".crate .faceRight").classList.add("FallAnimRight");
        document.querySelector(".crate .faceFront").classList.add("FallAnimFront");
        document.querySelector(".crate .item").innerHTML = `<span class="itemInfo"></span> <img src="img/${OpenedItem}.gif" class="itemImg">`
        document.querySelector(".crate .item").style.opacity = 0;
        setTimeout(() => {
            document.querySelector(".crate .item").style.opacity = 1;
            document.querySelector(".crate .item .itemImg").style.border = `3px solid ${itemColor(rolledItem[1])}`;
            document.querySelector(".crate .item .itemInfo").style.font
            document.querySelector(".crate .item .itemInfo").innerHTML = itemText;
            document.querySelector(".crate .item .itemInfo").style.color = itemColor(rolledItem[1]);
        }, 1500);
        setTimeout(() => {
            document.querySelector(".crate .faceLeft").classList.remove("FallAnimLeft");
            document.querySelector(".crate .faceRight").classList.remove("FallAnimRight");
            document.querySelector(".crate .faceFront").classList.remove("FallAnimFront");
            setTimeout(() => {
                openCd = false;
            }, 1500);
        }, 2500);
    }
})

document.querySelector(".reset").addEventListener("click", _=>{
    localStorage.clear();
    recentItemId = 0;
})