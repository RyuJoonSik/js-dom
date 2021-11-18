document.addEventListener('DOMContentLoaded', function(){
    var menu = document.querySelectorAll('#top_menu ul li');
    var contents = document.querySelectorAll('#contents > section');

    for(var i = 0; i < menu.length; i++){
        menu[i].addEventListener('click', function(e){
            e.preventDefault();

            var idx = this.getAttribute('data-num');
            var tt = contents[idx].offsetTop;
            var lastPos = 0;

            // window.scroll(0, tt);
            // window.scrollTo(0, tt);
            // window.scrollBy(0, tt);
            // contents[idx].scrollIntoView();

            var scrollInterval = setInterval(function(){
                if(tt - window.pageYOffset > 50 || window.pageYOffset - tt > 50){
                    if(tt > lastPos){
                        window.scrollBy(0, 55);
                    }
                    else{
                        window.scrollBy(0, -55);
                    }
                }
                else{
                    clearInterval(scrollInterval);
                    window.scrollTo(0, tt);
                    lastPos = tt;
                }
            }, 15);
        });
    }

    window.addEventListener('scroll', function(){
        var scr = this.pageYOffset;

        for(var i = 0; i < contents.length; i++){
            if(contents[i].offsetTop <= scr){
                var idx = contents[i].getAttribute('data-num');
                for(var j = 0; j < menu.length; j++){
                    menu[j].classList.remove('on');
                }
                menu[idx].classList.add('on');
            }
        }
    })
});