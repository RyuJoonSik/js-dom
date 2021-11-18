window.addEventListener("load", function(){
    var section = document.querySelector("#section1");

    var imgs = section.querySelectorAll(".img")
    var currentImg = section.querySelector(".current-img");

    for(var i=0; i<imgs.length;i++){
        imgs[i].onclick = function(e){
            // console.log(e.target.nodeName);
            currentImg.src = e.target.src;
        };
    }
    // imgs[0].onclick = function(e){
    //     // console.log(e.target.nodeName);
    //     currentImg.src = e.target.src;
    // };

    // imgs[1].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };

    // imgs[2].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var delButton = tbody.querySelectorAll(".del-button");

    tbody.onclick = function(e){
        // console.log(e.target.nodeName);
        if(e.target.nodeName != "INPUT"){
            return;
        }
        var tar = e.target.parentElement.parentElement;
        tar.remove();
    }
    // for(i in delButton){
    //     delButton[i].onclick = function(e){
    //         var tar = e.target.parentElement.parentElement;
    //         tar.remove();
    //     };
    // }
    // delButton.onclick = function(e){
    //     e.target.parentElement.parentElement.remove();
    // };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section2");

    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    imgList.onclick = function(e){
        // console.log(e.target.nodeName);
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
    };
    // var imgs = section.querySelectorAll(".img")

    // for(var i=0; i<imgs.length;i++){
    //     imgs[i].onclick = function(e){
    //         // console.log(e.target.nodeName);
    //         currentImg.src = e.target.src;
    //     };
    // }
    // imgs[0].onclick = function(e){
    //     // console.log(e.target.nodeName);
    //     currentImg.src = e.target.src;
    // };

    // imgs[1].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };

    // imgs[2].onclick = function(e){
    //     currentImg.src = e.target.src;
    // };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section3");

    var imgList = section.querySelector(".img-list");
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e){
        console.log("imgList clicked");
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){
        e.stopPropagation(); /* 부모 요소 버블링 막기 */

        console.log("addButton clicked");
        var img = document.createElement("img");
        img.src = "images/img1.jpg";

        currentImg.insertAdjacentElement("afterend",img);
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section4");

    var tbody = section.querySelector(".notice-list tbody");
    
    tbody.onclick = function(e){
        var target = e.target;

        if(target.classList.contains("sel-button")){
            var tar = target.parentElement
            for(;tar.nodeName != "TR"; tar = tar.parentElement);

            tar.style.background = "yellow";
        }
        else if(target.classList.contains("edit-button")){

        }
        else if(target.classList.contains("del-button")){

        }
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section1-2");

    var tbody = section.querySelector(".notice-list tbody");
    
    tbody.onclick = function(e){
        e.preventDefault();

        var target = e.target;

        if(target.classList.contains("sel-button")){
            var tar = target.parentElement
            for(;tar.nodeName != "TR"; tar = tar.parentElement);

            tar.style.background = "yellow";
        }
        else if(target.classList.contains("edit-button")){

        }
        else if(target.classList.contains("del-button")){

        }
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function(){
        var event = new MouseEvent("click", {
            'view':window,
            'bubbles':true,
            'cancelable':true
        });

        fileButton.dispatchEvent(event);
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e){
        console.log("(x,y)" + e.x + "," + e.y);
        console.log("client : (x,y)" + e.clientX + "," + e.clientY);
        console.log("page : (x,y)" + e.pageX + "," + e.pageY);
        console.log("offset : (x,y)" + e.offsetX + "," + e.offsetY);
        box.style.position = "relative";
        box.style.left = e.offsetX+"px";
        box.style.top = e.offsetY+"px";
    }
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};

    container.onmousedown = function(e){
        if(e.target === box){
            dragging = true;
        }
    };
    container.onmousemove = function(e){
        if(!dragging){
            return;
        }
        box.style.left = e.pageX - offset.x +"px";
        box.style.top = e.pageY - offset.y +"px";
    };
    container.onmouseup = function(e){
        dragging = false;
    };

    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;

    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };
    container.onmousemove = function(e){
        if(!dragging){
            return;
        }
        current.style.left = e.pageX - offset.x +"px";
        current.style.top = e.pageY - offset.y +"px";
    };
    container.onmouseup = function(e){
        dragging = false;
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0, y:0};
    var current = null;
    var status = section.querySelector(".status");
    var left = container.offsetLeft;
    var top = container.offsetTop;

    section.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };
    section.onmousemove = function(e){
        if(!dragging){
            return;
        }

        var x = e.pageX - offset.x - left;
        var y = e.pageY - offset.y - top;
        current.style.left = x +"px";
        current.style.top = y +"px";

        status.innerText = ("(x, y) : (" + x + ", " + y + ")");
    };
    section.onmouseup = function(e){
        dragging = false;
    };
});
