// window.onload = function /* init */(){
    window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-Print");

    span1.onclick = function /* printResult */(){
        var x = prompt("x의 값을 입력하세요.", 0);
        var y = prompt("y의 값을 입력하세요.", 0);

        x = parseInt(x); /* 숫자+문자일 경우 숫자부분까지만 값으로 받는다. */
        y = parseInt(y);

        // alert(x + y);
        // span1.innerText = x+y;
        // btnPrint.type="text";
        btnPrint.value = x + y;
    };
});