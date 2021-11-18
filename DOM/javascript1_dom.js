window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("btn-add");
    var txtSum = document.getElementById("txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

window.addEventListener("load", function(){
    var section2 = document.getElementById("section2");
    /* var inputs = section2.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3]; */

    var txtX = section2.getElementsByClassName("txt-x")[0];
    var txtY = section2.getElementsByClassName("txt-y")[0];
    var btnAdd = section2.getElementsByClassName("btn-add")[0];
    var txtSum = section2.getElementsByClassName("txt-sum")[0];

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

window.addEventListener("load", function(){
    var section3 = document.getElementById("section3");
    /* var inputs = section3.getElementsByTagName("input");

    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3]; */

    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");

    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;
    };
});

window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");

    // childNodes는 텍스트 노드와 주석노드까지 포함된다.
    // var input1 = box.childNodes[1];
    // var input2 = box.childNodes[3];

    // children은 태그 노드들만 포함한다.
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var srcInput = section.querySelector(".src-input");
    var imgSelect = section.querySelector(".image-select")
    var changeButton = section.querySelector(".change-button");
    var img = section.querySelector(".img");
    var colorInput = section.querySelector(".color-input");

    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value;
        // img.src = "images/" + imgSelect.value;

        // 속성에 -가 들어갈 경우 사용해야 하는 방법
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;

        console.log(img.className);
    }
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section6");

    var titleInput = section.querySelector(".title-input")
    var menuListUl = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");

    addButton.onclick = function(){
        var title = titleInput.value;

        // 기존의 코드를 대체한다. += 연산을 하면 성능상 문제가 생길 수 있다.
        //menuListUl.innerHTML += '<li><a href="">' + title + '</a></li>';
        var html = '<a href="">' + title + '</a>';
        var liNode = document.createElement("li");
        liNode.innerHTML = html;
        // menuListUl.appendChild(liNode);
        menuListUl.append(liNode); /* append는 텍스트를 텍스트 노드로 바꿔주는 기능이 추가되었다. */

        // var title = titleInput.value;
        // var txtNode = document.createTextNode(title);

        // var aNode = document.createElement("a");
        // aNode.href = "";
        // aNode.appendChild(txtNode);

        // var liNode = document.createElement("li");
        // liNode.appendChild(aNode);

        // menuListUl.appendChild(liNode);
    };

    delButton.onclick = function(){
        // var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);
        liNode.remove();
    };
});

window.addEventListener("load", function(){
    var notices = [
        {id:5, title:"퐈이야~", regDate:"2019-01-26", writeId:"newlec", hit:0},
        {id:6, title:"퐈이야~", regDate:"2019-01-26", writeId:"newlec", hit:17}
    ];

    var section = document.querySelector("#section7");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button")
    var templateButton = section.querySelector(".template-button")

    cloneButton.onclick = function(){
        var trNode = noticeList.querySelector("tbody tr");
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll("td");
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href = "' + notices[0].id + '">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writeId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.appendChild(cloneNode);
    };
    templateButton.onclick = function(){
        var template = section.querySelector("template");
        for(i in notices){
            console.log(i);
            var cloneNode = document.importNode(template.content, true);
            console.log(cloneNode);
            var tds = cloneNode.querySelectorAll("td");
            
            tds[0].textContent = notices[i].id;
            // tds[1].innerHTML = '<a href = "' + notices[i].id + '">' + notices[i].title + '</a>';
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;
    
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writeId;
            tds[4].textContent = notices[i].hit;
    
            tbodyNode.appendChild(cloneNode);
            
            // cloneNode = null;
        }
        

        // tds[0].textContent = notices[1].id;
        // // tds[1].innerHTML = '<a href = "' + notices[1].id + '">' + notices[1].title + '</a>';
        // var aNode = tds[1].children[0];
        // aNode.href = notices[1].id;
        // aNode.textContent = notices[1].title;

        // tds[2].textContent = notices[1].regDate;
        // tds[3].textContent = notices[1].writeId;
        // tds[4].textContent = notices[1].hit;

        // tbodyNode.appendChild(cloneNode);
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section8")

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;

    downButton.onclick = function(){
        var nextNode = currentNode.nextElementSibling;

        if(nextNode == null){
            alert("더 이상 이동할 수 없습니다.");
            return;
        }
        
        // tbodyNode.removeChild(nextNode); 생략가능
        // tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin",nextNode);
    };
    upButton.onclick = function(){
        var prevNode = currentNode.previousElementSibling;

        if(prevNode == null){
            alert("더 이상 이동할 수 없습니다.");
            return;
        }

        // tbodyNode.removeChild(currentNode); 생략가능
        // tbodyNode.insertBefore(currentNode, prevNode)
        currentNode.insertAdjacentElement("afterend", prevNode);
    };
});

window.addEventListener("load", function(){
    var section = document.querySelector("#section9");

    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckBox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckBox.onchange = function(){
        // console.log(allCheckBox.value); /* value는 on이 기본값 */
        var inputs = tbody.querySelectorAll("input[type='checkbox']");

        // for(i in inputs){
            // inputs[i].checked = allCheckBox.checked;
        // }
        for(var i=0; i<inputs.length; i++){
            inputs[i].checked = allCheckBox.checked;
        }
    };

    delButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        for(i in inputs){
            inputs[i].parentElement.parentElement.remove();
        }
    };

    swapButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length != 2){
            alert("엘리먼트는 2개를 선택해야만 합니다.");
            return;
        }
        var trs = [];
        for(var i=0; i<inputs.length; i++){
            trs.push(inputs[i].parentElement.parentElement);
        }
        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };
});

window.addEventListener("load", function(){
    var notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section10");

    var noticeList = section.querySelector(".notice-list");
    var titleTd = noticeList.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function(){
        var template = section.querySelector("template")
        for(i in notices){
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            
            tds[0].textContent = notices[i].id;
            // tds[1].innerHTML = '<a href = "' + notices[i].id + '">' + notices[i].title + '</a>';
            var aNode = tds[1].children[0];
            aNode.href = notices[i].id;
            aNode.textContent = notices[i].title;
    
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writeId;
            tds[4].textContent = notices[i].hit;
    
            tbodyNode.appendChild(cloneNode);
            
            // cloneNode = null;
        }
    };

    bindData();

    var titleSorted = false;

    titleTd.onclick = function(){
        tbodyNode.innerHTML = "";

        if(!titleSorted){
            notices.sort(function(a, b){
                titleSorted = true;
                
                if(a.title < b.title){
                    return -1;
                }
                // else if(a.title > b.title){
                //     return 1;
                // }
                // else{
                //     return 0;
                // }
            });
        }
        else{
            notices.reverse();
        }
        bindData();
    };
});