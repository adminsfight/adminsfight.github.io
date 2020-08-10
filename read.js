
var epNum = 1;
var pageNum = 1;

var mouseX;
var mouseY;

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
    pageNum--;
    document.getElementById("input").value = pageNum;
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
    pageNum = input.value;    
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