let plr = document.querySelectorAll("div")[0];
let kord = document.querySelectorAll("div")[2];
let map = document.querySelectorAll("#joe");
let plry = 0;
let plrx = 0;
let plrrot = 0;

kord.innerHTML = `X: ${plrx}; Y: ${plry};`;

document.querySelector("body").addEventListener("keydown", (el)=> {
    if(plrrot == 90){
        document.querySelectorAll("div")[3].innerHTML = "A"
    }
    if(plrrot == -90){
        document.querySelectorAll("div")[3].innerHTML = "D"
    }
    if(plrrot == 180){
        document.querySelectorAll("div")[3].innerHTML = "W"
    }
    if(plrrot == -180){
        document.querySelectorAll("div")[3].innerHTML = "W"
    }
    if(plrrot == 270){
        document.querySelectorAll("div")[3].innerHTML = "D"
    }
    if(plrrot == -270){
        document.querySelectorAll("div")[3].innerHTML = "A"
    }
    if(plrrot == 0){
        document.querySelectorAll("div")[3].innerHTML = "S"
    }
    
    if(el.key == "s"){
        kord.innerHTML = `X: ${plrx}; Y: ${plry};`;
        plry += 2;
        plr.style.top = `${plry}px`;
    }
    if(el.key == "w"){
        kord.innerHTML = `X: ${plrx}; Y: ${plry};`;
        plry -= 2;
        plr.style.top = `${plry}px`;
    }
    if(el.key == "d"){
        kord.innerHTML = `X: ${plrx}; Y: ${plry};`;
        plrx += 2;
        plr.style.left = `${plrx}px`;
        map.style.left = `${plrx}px`;
    }
    if(el.key == "a"){
        kord.innerHTML = `X: ${plrx}; Y: ${plry};`;
        plrx -= 2;
        plr.style.left = `${plrx}px`;
    }
    if(el.key == "i"){
        plrrot += 3;
        if(plrrot >= 360){
            plrrot = 0;
        }
        plr.style.transform = `rotate(${plrrot}deg)`
        console.log(plrrot);
    }
    if(el.key == "o"){
        plrrot -= 3;
        if(plrrot <= -360){
            plrrot = 0;
        }
        console.log(plrrot);
        plr.style.transform = `rotate(${plrrot}deg)`
    }
})