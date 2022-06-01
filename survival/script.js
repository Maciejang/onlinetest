let rot = 1;
let rand = Math.trunc(Math.random() * 3);
let color = "";
let roombiome1 = "";
let hunger = document.querySelectorAll("progress")[0];
let thirst = document.querySelectorAll("progress")[1];
let who = 0;
let rot1 = document.querySelectorAll(".rot1")[0];
let rot2 = document.querySelectorAll(".rot2")[0];
let rot3 = document.querySelectorAll(".rot3")[0];
let rot4 = document.querySelectorAll(".rot4")[0];
let slot1c = 0;
let slot2c = 0;
let slot3c = 0;
let slot1 = "";
let slot2 = "";
let slot3 = "";
let invvis = 0;
let rot1vis = 1;
let rot2vis = 0;
let rot3vis = 0
let rot4vis = 0;
let woodprice = 10;
let rockprice = 2;
let houselvl = 1;
let inventory = [document.querySelector(".slot1").innerHTML, slot1c, document.querySelector(".slot2").innerHTML, slot2c, document.querySelector(".slot3").innerHTML, slot3c];
let housewidth = 200;
let househeight = 200;
let woodc = 0;
let rockc = 0;

if(rand == 0){
    color = "green";
    roombiome1 = "plains";
}
else if(rand == 1){
    color = "gray";
    roombiome1 = "rocky";
}
else if(rand == 2){
    color = "rgb(221, 238, 162)";
    roombiome1 = "desert";
}
document.querySelectorAll(".rot1")[0].style.visibility = "visible";
document.querySelectorAll(".rot2")[0].style.visibility = "hidden";
document.querySelectorAll(".rot3")[0].style.visibility = "hidden";
document.querySelectorAll(".rot4")[0].style.visibility = "hidden";
document.querySelectorAll("body")[0].addEventListener("keypress", (key)=> {
    if(key.key == "a") {
        if(rot == 1){
            rot = 2;
            document.querySelectorAll(".rot1")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot2")[0].style.visibility = "visible";
            rot1vis = 0;
            rot2vis = 1;
        }
        else if(rot == 4){
            rot = 1
            document.querySelectorAll(".rot4")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot1")[0].style.visibility = "visible";
            rot4vis = 0;
            rot1vis = 1;
        }
        else if(rot == 2){
            rot = 3
            document.querySelectorAll(".rot2")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot3")[0].style.visibility = "visible";
            rot2vis = 0;
            rot3vis = 1;
        }
        else if(rot == 3){
            rot = 4
            document.querySelectorAll(".rot3")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot4")[0].style.visibility = "visible";
            rot3vis = 0;
            rot4vis = 1;
        }     
    }
    if(key.key == "d") {
        if(rot == 1){
            rot = 4;
            document.querySelectorAll(".rot1")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot4")[0].style.visibility = "visible";
            rot1vis = 0;
            rot4vis = 1;
        }
        else if(rot == 4){
            rot = 3
            document.querySelectorAll(".rot4")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot3")[0].style.visibility = "visible";
            rot4vis = 0;
            rot3vis = 1;
        }
        else if(rot == 2){
            rot = 1
            document.querySelectorAll(".rot2")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot1")[0].style.visibility = "visible";
            rot2vis = 0;
            rot1vis = 1;
        }
        else if(rot == 3){
            rot = 2
            document.querySelectorAll(".rot3")[0].style.visibility = "hidden";
            document.querySelectorAll(".rot2")[0].style.visibility = "visible";
            rot3vis = 0;
            rot2vis = 1;
        }     
    }
})
document.querySelectorAll(".floor")[0].style.backgroundColor = color;
document.querySelectorAll(".floor")[1].style.backgroundColor = color;
document.querySelectorAll(".floor")[2].style.backgroundColor = color;
document.querySelectorAll(".floor")[3].style.backgroundColor = color;

class object {
    constructor(height, width, img, tool, loot, loot2){
        this.height = height,
        this.width = width,
        this.img = img,
        this.tool = tool,
        this.loot = loot,
        this.loot2 = loot2
    }
}
class item {
    constructor(id, img){
        this.id = id,
        this.img = img
    }
}
const stick = new item(1, "res/stick.png");
const wood = new item(2, "res/wood.png");
const water_glass = new item(3, "res/water_glass.png");
const apple_item = new object("30px", "30px", "res/apple.png", "apple");
const tree = new object("150px", "150px", "res/tree.png", "rock_item", "wood", "apple_item");
const giant_rock = new object("50px", "50px", "res/giant_rock.png", "rock_item", "rock_item");
const lake = new object("250px", "250px", "res/lake.gif", "any", "water_glass");
const rock_floor = new object("25px", "25px", "res/rock.png", "any", "rock_item");

for(let i=19; i > 0; i--){
    let rand = Math.trunc(Math.random() * 5);
    if(rand == 0){
        document.querySelectorAll(".obj")[who].style.backgroundImage = `url(${tree.img})`;
        document.querySelectorAll(".obj")[who].id = "tree";
        document.querySelectorAll(".obj")[who].style.width = tree.width;
        document.querySelectorAll(".obj")[who].style.height = tree.height;
    }
    if(rand == 1){
        document.querySelectorAll(".obj")[who].style.backgroundImage = `url(${giant_rock.img})`;
        document.querySelectorAll(".obj")[who].id = "giant_rock";
        document.querySelectorAll(".obj")[who].style.width = giant_rock.width;
        document.querySelectorAll(".obj")[who].style.height = giant_rock.height;
    }
    if(rand == 2){
        document.querySelectorAll(".obj")[who].style.backgroundImage = `url(${lake.img})`;
        document.querySelectorAll(".obj")[who].id = "lake";
        document.querySelectorAll(".obj")[who].style.width = lake.width;
        document.querySelectorAll(".obj")[who].style.height = lake.height;
    }
    if(rand == 3){
        document.querySelectorAll(".obj")[who].style.backgroundImage = `url(${rock_floor.img})`;
        document.querySelectorAll(".obj")[who].id = "rock_floor";
        document.querySelectorAll(".obj")[who].style.width = rock_floor.width;
        document.querySelectorAll(".obj")[who].style.height = rock_floor.height;
    }
    if(rand == 4){
        document.querySelectorAll(".obj")[who].style.backgroundImage = `url(${apple_item.img})`;
        document.querySelectorAll(".obj")[who].id = "apple_floor";
        document.querySelectorAll(".obj")[who].style.width = apple_item.width;
        document.querySelectorAll(".obj")[who].style.height = apple_item.height;
    }
    who++;
}

who = 0;

for(let i=19; i > 0; i--){
    let rand = Math.trunc(Math.random() * 80).toString();
    let rand2 = Math.trunc(Math.random() * 50 + 10).toString();
    document.querySelectorAll(".obj")[who].style.left = `${rand}vw`;
    document.querySelectorAll(".obj")[who].style.top = `${rand2}vh`;
    who++;
}

document.querySelectorAll(".obj")[0].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[0].id == "tree"){
        document.querySelectorAll(".obj")[0].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[0].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[0].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[0].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[0].id == "rock_floor"){
        document.querySelectorAll(".obj")[0].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[0].id == "apple_floor"){
        document.querySelectorAll(".obj")[0].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[1].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[1].id == "tree"){
        document.querySelectorAll(".obj")[1].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[1].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[1].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[1].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[1].id == "rock_floor"){
        document.querySelectorAll(".obj")[1].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[1].id == "apple_floor"){
        document.querySelectorAll(".obj")[1].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[2].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[2].id == "tree"){
        document.querySelectorAll(".obj")[2].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[2].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[2].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[2].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[2].id == "rock_floor"){
        document.querySelectorAll(".obj")[2].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[2].id == "apple_floor"){
        document.querySelectorAll(".obj")[2].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelector(".slot1").addEventListener("click", _=> {
    if(document.querySelector(".slot1").innerHTML == "apple" && slot1c > 0){
        slot1c--;
        hunger.value += 10;
        thirst.value += 5;
        if(slot1c <= 0){
            document.querySelector(".slot1").innerHTML = "";
        }
    }
    if(document.querySelector(".slot1").innerHTML == "water_glass" && slot1c > 0){
        slot1c--;
        thirst.value += 10;
        if(slot1c <= 0){
            document.querySelector(".slot1").innerHTML = "";
        }
    }
})
document.querySelector(".slot2").addEventListener("click", _=> {
    if(document.querySelector(".slot2").innerHTML == "apple" && slot2c > 0){
        slot2c--;
        hunger.value += 10;
        thirst.value += 5;
        if(slot2c <= 0){
            document.querySelector(".slot2").innerHTML = "";
        }
    }
    if(document.querySelector(".slot2").innerHTML == "water_glass" && slot2c > 0){
        slot2c--;
        thirst.value += 10;
        if(slot2c <= 0){
            document.querySelector(".slot2").innerHTML = "";
        }
    }
})
document.querySelector(".slot3").addEventListener("click", _=> {
    if(document.querySelector(".slot3").innerHTML == "apple" && slot3c > 0){
        slot3c--;
        hunger.value += 10;
        thirst.value += 5;
        if(slot3c <= 0){
            document.querySelector(".slot3").innerHTML = "";
        }
    }
    if(document.querySelector(".slot3").innerHTML == "water_glass" && slot3c > 0){
        slot3c--;
        thirst.value += 10;
        if(slot3c <= 0){
            document.querySelector(".slot3").innerHTML = "";
        }
    }
})

document.querySelectorAll(".obj")[3].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[3].id == "tree"){
        document.querySelectorAll(".obj")[3].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[3].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[3].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[3].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[3].id == "rock_floor"){
        document.querySelectorAll(".obj")[3].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[3].id == "apple_floor"){
        document.querySelectorAll(".obj")[3].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[4].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[4].id == "tree"){
        document.querySelectorAll(".obj")[4].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[4].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[4].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[4].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[4].id == "rock_floor"){
        document.querySelectorAll(".obj")[4].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[4].id == "apple_floor"){
        document.querySelectorAll(".obj")[4].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[5].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[5].id == "tree"){
        document.querySelectorAll(".obj")[5].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[5].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[5].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[5].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[5].id == "rock_floor"){
        document.querySelectorAll(".obj")[5].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[5].id == "apple_floor"){
        document.querySelectorAll(".obj")[5].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[6].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[6].id == "tree"){
        document.querySelectorAll(".obj")[6].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[6].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[6].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[6].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[6].id == "rock_floor"){
        document.querySelectorAll(".obj")[6].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[6].id == "apple_floor"){
        document.querySelectorAll(".obj")[6].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[7].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[7].id == "tree"){
        document.querySelectorAll(".obj")[7].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[7].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[7].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[7].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[7].id == "rock_floor"){
        document.querySelectorAll(".obj")[7].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[7].id == "apple_floor"){
        document.querySelectorAll(".obj")[7].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[8].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[8].id == "tree"){
        document.querySelectorAll(".obj")[8].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[8].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[8].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[8].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[8].id == "rock_floor"){
        document.querySelectorAll(".obj")[8].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[8].id == "apple_floor"){
        document.querySelectorAll(".obj")[8].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[9].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[9].id == "tree"){
        document.querySelectorAll(".obj")[9].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[9].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[9].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[9].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[9].id == "rock_floor"){
        document.querySelectorAll(".obj")[9].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[9].id == "apple_floor"){
        document.querySelectorAll(".obj")[9].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[10].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[10].id == "tree"){
        document.querySelectorAll(".obj")[10].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[10].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[10].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[10].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }
        else{
            console.log("inv full");
        }

    }
    if(document.querySelectorAll(".obj")[10].id == "rock_floor"){
        document.querySelectorAll(".obj")[10].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[10].id == "apple_floor"){
        document.querySelectorAll(".obj")[10].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[11].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[11].id == "tree"){
        document.querySelectorAll(".obj")[11].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[11].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[11].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[11].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[11].id == "rock_floor"){
        document.querySelectorAll(".obj")[11].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[11].id == "apple_floor"){
        document.querySelectorAll(".obj")[11].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[12].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[12].id == "tree"){
        document.querySelectorAll(".obj")[12].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[12].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[12].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[12].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[12].id == "rock_floor"){
        document.querySelectorAll(".obj")[12].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[12].id == "apple_floor"){
        document.querySelectorAll(".obj")[12].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[13].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[13].id == "tree"){
        document.querySelectorAll(".obj")[13].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[13].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[13].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[13].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[13].id == "rock_floor"){
        document.querySelectorAll(".obj")[13].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[13].id == "apple_floor"){
        document.querySelectorAll(".obj")[13].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[14].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[14].id == "tree"){
        document.querySelectorAll(".obj")[14].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[14].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[14].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[14].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[14].id == "rock_floor"){
        document.querySelectorAll(".obj")[14].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[14].id == "apple_floor"){
        document.querySelectorAll(".obj")[14].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[15].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[15].id == "tree"){
        document.querySelectorAll(".obj")[15].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[15].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[15].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[15].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[15].id == "rock_floor"){
        document.querySelectorAll(".obj")[15].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[15].id == "apple_floor"){
        document.querySelectorAll(".obj")[15].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[16].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[16].id == "tree"){
        document.querySelectorAll(".obj")[16].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[16].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[16].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[16].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[16].id == "rock_floor"){
        document.querySelectorAll(".obj")[16].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[16].id == "apple_floor"){
        document.querySelectorAll(".obj")[16].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[17].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[17].id == "tree"){
        document.querySelectorAll(".obj")[17].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[17].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[17].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[17].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[17].id == "rock_floor"){
        document.querySelectorAll(".obj")[17].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[17].id == "apple_floor"){
        document.querySelectorAll(".obj")[17].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[18].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[18].id == "tree"){
        document.querySelectorAll(".obj")[18].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[18].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[18].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[18].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[18].id == "rock_floor"){
        document.querySelectorAll(".obj")[18].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[18].id == "apple_floor"){
        document.querySelectorAll(".obj")[18].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

document.querySelectorAll(".obj")[19].addEventListener("click", _=>{
    if(document.querySelectorAll(".obj")[19].id == "tree"){
        document.querySelectorAll(".obj")[19].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "wood"){
            slot1c++;
            slot1 = "wood";
        }
        else if(slot2 == "" || slot2 == "wood"){
            slot2c++;
            slot2 = "wood";
        }
        else if(slot3 == "" || slot3 == "wood"){
            slot3c++;
            slot3 = "wood";
        };
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }


    }
    if(document.querySelectorAll(".obj")[19].id == "giant_rock" && slot1 == "rock" || slot2 == "rock" || slot3 == "rock"){
        document.querySelectorAll(".obj")[19].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[19].id == "lake"){
        if(slot1 == "" || slot1 == "water_glass"){
            slot1c++;
            slot1 = "water_glass";
        }
        else if(slot2 == "" || slot2 == "water_glass"){
            slot2c++;
            slot2 = "water_glass";
        }
        else if(slot3 == "" || slot3 == "water_glass"){
            slot3c++;
            slot3 = "water_glass";
        }

    }
    if(document.querySelectorAll(".obj")[19].id == "rock_floor"){
        document.querySelectorAll(".obj")[19].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "rock"){
            slot1c++;
            slot1 = "rock";
        }
        else if(slot2 == "" || slot2 == "rock"){
            slot2c++;
            slot2 = "rock";
        }
        else if(slot3 == "" || slot3 == "rock"){
            slot3c++;
            slot3 = "rock";
        }

    }
    if(document.querySelectorAll(".obj")[19].id == "apple_floor"){
        document.querySelectorAll(".obj")[19].style.visibility = "hidden";
        if(slot1 == "" || slot1 == "apple"){
            slot1c++;
            slot1 = "apple";
        }
        else if(slot2 == "" || slot2 == "apple"){
            slot2c++;
            slot2 = "apple";
        }
        else if(slot3 == "" || slot3 == "apple"){
            slot3c++;
            slot3 = "apple";
        }

    }
})

setInterval(() => {
    if(rot1vis == 1){
        document.querySelectorAll(".obj")[0].style.visibility = "visible";
        document.querySelectorAll(".obj")[1].style.visibility = "visible";
        document.querySelectorAll(".obj")[2].style.visibility = "visible";
        document.querySelectorAll(".obj")[3].style.visibility = "visible";
        document.querySelectorAll(".obj")[4].style.visibility = "visible";
    }   
    if(rot2vis == 1){
        document.querySelectorAll(".obj")[5].style.visibility = "visible";
        document.querySelectorAll(".obj")[6].style.visibility = "visible";
        document.querySelectorAll(".obj")[7].style.visibility = "visible";
        document.querySelectorAll(".obj")[8].style.visibility = "visible";
        document.querySelectorAll(".obj")[9].style.visibility = "visible";
    } 
    if(rot3vis == 1){
        document.querySelectorAll(".obj")[10].style.visibility = "visible";
        document.querySelectorAll(".obj")[11].style.visibility = "visible";
        document.querySelectorAll(".obj")[12].style.visibility = "visible";
        document.querySelectorAll(".obj")[13].style.visibility = "visible";
        document.querySelectorAll(".obj")[14].style.visibility = "visible";
    } 
    if(rot4vis == 1){
        document.querySelectorAll(".obj")[15].style.visibility = "visible";
        document.querySelectorAll(".obj")[16].style.visibility = "visible";
        document.querySelectorAll(".obj")[17].style.visibility = "visible";
        document.querySelectorAll(".obj")[18].style.visibility = "visible";
        document.querySelectorAll(".obj")[19].style.visibility = "visible";
    } 
}, 5000);

document.querySelector(".inv").addEventListener("click", _=> {
    if(invvis == 0){
        document.querySelector(".inventory").style.visibility = "visible";
        invvis = 1;
    }
    else if(invvis == 1){
        invvis = 0;
        document.querySelector(".inventory").style.visibility = "hidden";
    }
})

document.querySelector(".house").addEventListener("click", _=> {
    if(slot1 == "wood"){
        woodc = slot1c;
    }
    if(slot2 == "wood"){
        woodc = slot2c;
    }
    if(slot3 == "wood"){
        woodc = slot3c;
    }
    if(slot1 == "rock"){
        rockc = slot1c;
    }
    if(slot2 == "rock"){
        rockc = slot2c;
    }
    if(slot3 == "rock"){
        rockc = slot3c;
    }
    if(inventory.includes("wood") && inventory.includes("rock") && woodc >= woodprice && rockprice <= rockc){
        woodc -= woodprice;
        rockc -= rockprice;
        if(houselvl == 1){
            document.querySelector(".house").style.backgroundImage = "url('house/lvl2.png')";
            houselvl++;
            woodprice += 2;
            rockprice += 2;
        }
        else if(houselvl == 2){
            document.querySelector(".house").style.backgroundImage = "url('house/lvl3.png')";
            houselvl++;
            woodprice += 2;
            rockprice += 2;
        }
        else if(houselvl >= 3){
            woodprice += Math.trunc(woodprice * 0.1);
            rockprice += Math.trunc(rockprice * 0.1);
            houselvl++;
            housewidth += 2;
            househeight += 2;
            document.querySelector(".house").style.width = `${housewidth}px`
            document.querySelector(".house").style.backgroundSize = `${househeight}px`
            document.querySelector(".house").style.height = `${househeight}px`
        }
        document.querySelector(".house").innerHTML = `LVL ${houselvl}`;
    }
    else {
        alert(`you need ${woodprice} wood and ${rockprice} rock to level up!`);
    }
})

setInterval(() => {
    document.querySelector(".slot1").innerHTML = slot1;
    document.querySelector(".slot2").innerHTML = slot2;
    document.querySelector(".slot3").innerHTML = slot3;
    document.querySelector(".slot1c").innerHTML = slot1c;
    document.querySelector(".slot2c").innerHTML = slot2c;
    document.querySelector(".slot3c").innerHTML = slot3c;
    if(slot1c <= 0){
        document.querySelector(".slot1").innerHTML = "";
        slot1 = "";
    }
    if(slot2c <= 0) {
        document.querySelector(".slot2").innerHTML = "";
        slot2 = "";
    }
    if(slot3c <= 0){
        document.querySelector(".slot3").innerHTML = "";
        slot3 = "";
    }
    inventory = `${document.querySelector(".slot1").innerHTML}, ${slot1c}, ${document.querySelector(".slot2").innerHTML}, ${slot2c}, ${document.querySelector(".slot3").innerHTML}, ${slot3c}`;
}, 100);

setInterval(_=> {
    if(hunger.value <= 0 || thirst.value <= 0){
       document.querySelectorAll(".die")[0].style.fontSize = "500%";
       document.querySelectorAll(".die")[0].style.opacity = "1";
       document.querySelectorAll(".die")[0].classList.add("dead");
       document.querySelectorAll("body")[0].style.background = "black";
       document.querySelectorAll("main")[0].remove();
    }
 }, 100);
 
 setInterval(_=> {
    hunger.value -= 5;
    thirst.value -= 5;
}, 10000);