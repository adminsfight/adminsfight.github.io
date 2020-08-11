
var epNum = 1;
var pageNum = 1;

var mouseX;
var mouseY;

var check = false;

var img;

function ImageExist(url) 
{
   img = new Image();
   img.src = url;
   return img.height != 0;
}

addEventListener("mousemove",function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})

function episode(selector) {
    epNum = selector.options.selectedIndex + 1;
    pageNum=1;
    document.getElementById("input").value = pageNum;
    document.getElementById("page").src = "episodes/"+epNum+"/1.png";
    document.getElementById("comment").src = "episodes/"+epNum+"/1c.png";
    console.log("Switched to episode " + epNum);
}

function prev(){
    pageNum--
    document.getElementById("input").value = pageNum;
    if (input.value<1 && input.value != "" ) {
        input.value = 1;
    }
    
    pageNum = input.value;
    
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
    document.getElementById("comment").src = "episodes/"+epNum+"/"+pageNum+"c.png";
    console.log("Switched to page " + pageNum);
}

function next(){
    pageNum++;
    document.getElementById("input").value = pageNum;
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
    document.getElementById("comment").src = "episodes/"+epNum+"/"+pageNum+"c.png";
    console.log("Switched to page " + pageNum);
}

function page(input){
    if (input.value<1 && input.value != "" ) {
        input.value = 1;
    }
    pageNum = input.value;

    if (input.value != "") checknum = true;
    if (input.value == "") {
        checknum = false;
    } 
    while (checknum) {
        if (ImageExist("episodes/"+epNum+"/"+pageNum+".png")) {
            checknum = false;
        } else {
            if (pagenum == 0) {
                pageNum=2
            }
            pageNum--;
            checknum=true;
        }
    }
    document.getElementById("input").value = pageNum;
    document.getElementById("page").src = "episodes/"+epNum+"/"+pageNum+".png";
    document.getElementById("page").title = "Page " + pageNum;
    document.getElementById("comment").src = "episodes/"+epNum+"/"+pageNum+"c.png";
    console.log("Switched to page " + pageNum);
}

function clickpage() {
    if (mouseX<window.innerWidth/2) {
        prev();
    } else {
        next();
    }
}

