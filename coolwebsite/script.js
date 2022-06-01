//phone
let number = document.querySelectorAll(".calc");
let phone = document.querySelectorAll(".calcscreen")[0];
let end = document.querySelectorAll(".calc1");
let phonenumber = 0;

number[0].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 1;
        phone.innerHTML += 1;
    }
})
number[1].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 2;
        phone.innerHTML += 2;
    }
})
number[2].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 3;
        phone.innerHTML += 3;
    }
})
number[3].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 4;
        phone.innerHTML += 4;
    }
})
number[4].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 5;
        phone.innerHTML += 5;
    }
})
number[5].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 6;
        phone.innerHTML += 6;
    }
})
number[6].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 7;
        phone.innerHTML += 7;
    }
})
number[7].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 8;
        phone.innerHTML += 8;
    }
})
number[8].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 9;
        phone.innerHTML += 9;
    }
})
number[9].addEventListener("click", _=> {
    if(phone.innerHTML.length >= 9){
        phone.style.background = "red"
        setTimeout(() => {
            phone.style.background = "black"
        }, 300);
    }
    else{
        phonenumber += 0;
        phone.innerHTML += 0;
    }
})
end[1].addEventListener("click", _=>{
    phonenumber = 0;
    phone.innerHTML = "";
})
end[0].addEventListener("click", _=> {
    if(phonenumber >= 30 || phonenumber <= 60 && phonenumber != 54) {
        phone.innerHTML = "calling..."
        setTimeout(_=> {
            phone.innerHTML = "You know joe?"
        }, 500)
        setTimeout(_=> {
            phone.innerHTML = "Joe Mama"
        }, 2000)
        setTimeout(_=> {
            phone.innerHTML = ""
            phonenumber = 0;
        }, 3000)
    
    }
    if(phonenumber == 54){
        phone.innerHTML = "calling..."
        setTimeout(_=> {
            phone.style.background = "red"
            phone.innerHTML = "You shouldn't have called this number"
        }, 500);
        setTimeout(_=> {
            phone.innerHTML = ""
            phone.style.background = "black"
            phonenumber = 0;
        }, 2000);
    }
})
//phone end

//but
let inp = document.querySelectorAll(".but");
let con = 0;

inp[0].addEventListener("click", _=> {
    if(con == 2){
        inp[0].style.background = "red"
        con++;
    }
    else{
        con = 0;
        document.querySelectorAll(".but")[0].style.background = "gray";
        document.querySelectorAll(".but")[1].style.background = "gray";
        document.querySelectorAll(".but")[2].style.background = "gray";
        document.querySelectorAll(".but")[3].style.background = "gray";
        document.querySelectorAll(".but")[4].style.background = "gray";
        document.querySelectorAll(".but")[5].style.background = "gray";
    }
})
inp[1].addEventListener("click", _=> {
    if(con == 0){
        inp[1].style.background = "red"
        con++;
    }
    else{
        con = 0;
        document.querySelectorAll(".but")[0].style.background = "gray";
        document.querySelectorAll(".but")[1].style.background = "gray";
        document.querySelectorAll(".but")[2].style.background = "gray";
        document.querySelectorAll(".but")[3].style.background = "gray";
        document.querySelectorAll(".but")[4].style.background = "gray";
        document.querySelectorAll(".but")[5].style.background = "gray";
    }
})
inp[3].addEventListener("click", _=> {
    if(con == 1){
        inp[3].style.background = "red"
        con++;
    }
    else{
        con = 0;
        document.querySelectorAll(".but")[0].style.background = "gray";
        document.querySelectorAll(".but")[1].style.background = "gray";
        document.querySelectorAll(".but")[2].style.background = "gray";
        document.querySelectorAll(".but")[3].style.background = "gray";
        document.querySelectorAll(".but")[4].style.background = "gray";
        document.querySelectorAll(".but")[5].style.background = "gray";
    }
})
inp[2].addEventListener("click", _=> {
    if(con == 3){
        inp[2].style.background = "red"
        con++;
    }
    else{
        con = 0;
        document.querySelectorAll(".but")[0].style.background = "gray";
        document.querySelectorAll(".but")[1].style.background = "gray";
        document.querySelectorAll(".but")[2].style.background = "gray";
        document.querySelectorAll(".but")[3].style.background = "gray";
        document.querySelectorAll(".but")[4].style.background = "gray";
        document.querySelectorAll(".but")[5].style.background = "gray";
    }
})
inp[4].addEventListener("click", _=> {
    if(con == 5){
        inp[4].style.background = "red"
        con++;
        window.location.href = "helo.html"
    }
    else{
        con = 0;
        document.querySelectorAll(".but")[0].style.background = "gray";
        document.querySelectorAll(".but")[1].style.background = "gray";
        document.querySelectorAll(".but")[2].style.background = "gray";
        document.querySelectorAll(".but")[3].style.background = "gray";
        document.querySelectorAll(".but")[4].style.background = "gray";
        document.querySelectorAll(".but")[5].style.background = "gray";
    }
})
inp[5].addEventListener("click", _=> {
    if(con == 4){
        inp[5].style.background = "red"
        con++;
    }
    else{
        con = 0;
        document.querySelectorAll(".but")[0].style.background = "gray";
        document.querySelectorAll(".but")[1].style.background = "gray";
        document.querySelectorAll(".but")[2].style.background = "gray";
        document.querySelectorAll(".but")[3].style.background = "gray";
        document.querySelectorAll(".but")[4].style.background = "gray";
        document.querySelectorAll(".but")[5].style.background = "gray";
    }
})
//but end