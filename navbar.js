var height;
function anim1() {
    var interval = setInterval(frame, 5);
    height=0;
    function frame() {
        if (document.getElementById("navbar").style.height == "40px") {
        
        } else {
            document.getElementById("navbar").style.height = String(height) + "px";
            height += 0.5;
        }
    }
}


function show(element){
    document.getElementById("navbar").style.visibility = "visible";
    document.getElementById("navbar").style.height = "30px";
    
}

function hide(element) {
    document.getElementById("navbar").style.visibility = "hidden";
    document.getElementById("navbar").style.height = "0px";
}