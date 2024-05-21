var activeElement;

function show(clicked_id){
    document.getElementById("box2").style.display="block";
    document.getElementById("pop_up").style.visibility="visible";
    document.getElementById("cancel").style.visibility="visible";
    
    var img=document.getElementById(clicked_id).style.backgroundImage;
    img=img.substring(4,img.length-1);

    document.getElementById("pop_up").innerHTML="<img src="+img+" height='100%' width='100%'>";
    activeElement=clicked_id;

    document.getElementById("left").style.visibility="visible";
    document.getElementById("right").style.visibility="visible";
    document.getElementById("small").style.visibility="visible";
}

function cancel(){
    window.location.reload();
}

function left(){
    if(activeElement>1){
        var img=document.getElementById(activeElement-1).style.backgroundImage;
        img=img.substring(4,img.length-1);

        document.getElementById("pop_up").innerHTML="<img src="+img+" height='100%' width='100%'>";
        activeElement=activeElement-1;
    }
}

function right(){
    if(activeElement<8){
        var img=document.getElementById(parseInt(activeElement)+1).style.backgroundImage;
        img=img.substring(4,img.length-1);

        document.getElementById("pop_up").innerHTML="<img src="+img+" height='100%' width='100%'>";
        activeElement=parseInt(activeElement)+1;
    }
}