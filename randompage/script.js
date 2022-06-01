        //Don't look at my code man
        let string = "QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./qwertyuiop[]asdfghjkl;'\\zxcvbnm,./1234567890-=!@!#$%^&*()_+";
        let classtring = "abcdefghij";
        let bgimg = ["jump.png", "sky.png", "dog.jpg", "fnaf.jpg", "monki.jpg", "wat.jpg", "tree.gif", "sugoma.jpg", "salmon.jpg", "polishsg.jpg", "rich.jpg", "HEHEHEHAW.png"] //12 elem
        let rand = Math.trunc(Math.random() * 16777215).toString(16);
        let hehe = 0;
        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;
        let e = 0;
        let f = 0;
        let g = 0;
        let count = 0;
        let dis = document.querySelectorAll("div")[0];

        document.querySelector("body").width = screen.availWidth;
        //gen
        function imgrand() {
            let bg = Math.trunc(Math.random() * 12).toString();
            return bgimg[bg];
        }
        document.querySelector("body").style.backgroundImage = "url(" + imgrand() + ")";

        function randpos(){
            return Math.trunc(Math.random() * 400).toString();
        }

        function randsize() {
            return Math.trunc(Math.random() * 80 + 18).toString();
        }

        document.body.style.backgroundColor = "#" + rand;
        for(let i=10; i > 0; i--) {
            let hac = Math.trunc(Math.random() * 16777215).toString(16);
            document.querySelectorAll("u")[hehe].style.color = "#" + hac;
            document.querySelectorAll("u")[hehe].style.fontSize = randsize() + "px";
            document.querySelectorAll("u")[hehe].style.top = randpos() + "px";
            document.querySelectorAll("u")[hehe].style.left = randpos() + "px";
            document.querySelectorAll("img")[hehe].style.top = randpos() + "px";
            document.querySelectorAll("img")[hehe].style.left = randpos() + "px";
            hehe++;
        }


        let img = "https://via.placeholder.com/";
        function rando() {
            let randimg = Math.trunc(Math.random() * 1000).toString();
            let randimg2 = Math.trunc(Math.random() * 1000).toString();
            let size = randimg + "x" + randimg2;
            return size;
        }
        function stringrand() {    
            let randm = Math.trunc(Math.random() * 91);
            let text = string[randm];
            return text;
        }   
        function get() {
            return "\"" + Math.trunc(Math.random() * 61 + 1) + "px" + "\"";
        }
        function random() {
            let halo = Math.trunc(Math.random() * 50);
            let txt = "";
             for(let i=halo; i > 0; i--) {
                if(halo == 1) {
                    txt += stringrand();
                }
                else {
                    txt += stringrand(), "+";
                }
             }
             return txt;
        }
        function lessgo() {
            return "/" + Math.trunc(Math.random() * 16777215).toString();
        }
        function color() {
            return "/" + Math.trunc(Math.random() * 16777215).toString() + "?" + "text=" + random();
        }
        function randmo() {
            let ranstring = Math.trunc(Math.random() * 10);
            return classtring[ranstring];
        }
        function choose() {
            return Math.trunc(Math.random() * 2);
        }
        function helo() {
            //img
            document.querySelector("img[id=a]").class = randmo(); 
            document.querySelector("img[id=b]").class = randmo(); 
            document.querySelector("img[id=c]").class = randmo(); 
            document.querySelector("img[id=d]").class = randmo(); 
            document.querySelector("img[id=e]").class = randmo();  
            document.querySelector("img[id=f]").class = randmo();  
            document.querySelector("img[id=g]").class = randmo(); 
            document.querySelector("img[id=h]").class = randmo(); 
            document.querySelector("img[id=i]").class = randmo();  
            document.querySelector("img[id=j]").class = randmo(); 

            if(choose() == 0){
                document.querySelector("img[id=a]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=a]").src = imgrand();
                document.querySelector("img[id=a]").width = randpos();
                document.querySelector("img[id=a]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=b]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=b]").src = imgrand();
                document.querySelector("img[id=b]").width = randpos();
                document.querySelector("img[id=b]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=c]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=c]").src = imgrand();
                document.querySelector("img[id=c]").width = randpos();
                document.querySelector("img[id=c]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=d]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=d]").src = imgrand();
                document.querySelector("img[id=d]").width = randpos();
                document.querySelector("img[id=d]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=e]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=e]").src = imgrand();
                document.querySelector("img[id=e]").width = randpos();
                document.querySelector("img[id=e]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=f]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=f]").src = imgrand();
                document.querySelector("img[id=f]").width = randpos();
                document.querySelector("img[id=f]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=g]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=g]").src = imgrand();
                document.querySelector("img[id=g]").width = randpos();
                document.querySelector("img[id=g]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=h]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=h]").src = imgrand();
                document.querySelector("img[id=h]").width = randpos();
                document.querySelector("img[id=h]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=i]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=i]").src = imgrand();
                document.querySelector("img[id=i]").width = randpos();
                document.querySelector("img[id=i]").height = randpos();
            }
            if(choose() == 0){
                document.querySelector("img[id=j]").src = img + rando() + lessgo() + color(); 
            }
            else {
                document.querySelector("img[id=j]").src = imgrand();
                document.querySelector("img[id=j]").width = randpos();
                document.querySelector("img[id=j]").height = randpos();
            }
            //text
            document.querySelectorAll("u")[0].innerHTML = random();
            document.querySelectorAll("u")[1].innerHTML = random();
            document.querySelectorAll("u")[2].innerHTML = random();
            document.querySelectorAll("u")[3].innerHTML = random();
            document.querySelectorAll("u")[4].innerHTML = random();
            document.querySelectorAll("u")[5].innerHTML = random();
            document.querySelectorAll("u")[6].innerHTML = random();
            document.querySelectorAll("u")[7].innerHTML = random();
            document.querySelectorAll("u")[8].innerHTML = random();
            document.querySelectorAll("u")[9].innerHTML = random();
            
            document.querySelectorAll("u")[0].class = randmo();
            document.querySelectorAll("u")[1].class = randmo();
            document.querySelectorAll("u")[2].class = randmo();
            document.querySelectorAll("u")[3].class = randmo();
            document.querySelectorAll("u")[4].class = randmo();
            document.querySelectorAll("u")[5].class = randmo();
            document.querySelectorAll("u")[6].class = randmo();
            document.querySelectorAll("u")[7].class = randmo();
            document.querySelectorAll("u")[8].class = randmo();
            document.querySelectorAll("u")[9].class = randmo();
            
        }
        helo()
        //genend

        document.querySelectorAll("u")[0].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{     
                if(a == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                a = 1;
            }
        })
        document.querySelectorAll("u")[1].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{
                if(b == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                b = 1;
            }
        })
        document.querySelectorAll("u")[2].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{
                if(c == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                c = 1;
            }
        })
        document.querySelectorAll("u")[3].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{
                if(d == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                d = 1;
            }
        })
        document.querySelectorAll("u")[4].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{          
                if(e == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                e = 1;
            }
        })
        document.querySelectorAll("u")[5].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{
                if(f == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                f = 1;
            }
        })
        document.querySelectorAll("u")[6].addEventListener("click", _=> {
            if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1 && g == 1) {
                document.querySelectorAll("img")[0].src = "jump.png";
                document.querySelectorAll("img")[1].src = "jump.png";
                document.querySelectorAll("img")[2].src = "jump.png";
                document.querySelectorAll("img")[3].src = "jump.png";
                document.querySelectorAll("img")[4].src = "jump.png";
                document.querySelectorAll("img")[5].src = "jump.png";
                document.querySelectorAll("img")[6].src = "jump.png";
                document.querySelectorAll("img")[0].height = 500;
                playSound("joe mama.mp3");
            }
            else{
                if(g == 0) {
                    count++;
                    dis.innerHTML = count;
                }
                g = 1;
            }
        })


        function playSound(url) {
        const audio = new Audio(url);
        audio.play();
        }

        function animateTitle() {
      i >= message.length - 1 ? (i = 0) : i++,
        (document.title = message[i]),
        setTimeout("animateTitle()", 200);
    }
    let message = [
        "_____________",
        "A____________",
        "_A___________",
        "__A__________",
        "___A_________",
        "____A________",
        "_____A_______",
        "______A______",
        "_______A_____",
        "________A____",
        "_________A___",
        "__________A__",
        "___________A_",
        "____________A",
        "_____________",
      ],
      i = 0;
    animateTitle();