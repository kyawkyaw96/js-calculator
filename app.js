(function(){

    let screen=document.querySelector(".screen");
    let btns=document.querySelectorAll(".btn");
    let clear=document.querySelector(".clear");
    let equal=document.querySelector(".equal");
    btns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            let values =e.target.dataset.num;
            screen.value += values
        });
    });
    equal.addEventListener("click",function(e){
        if(screen.value === ""){
            screen.value = "Please enter"
        }else{
            screen.value= eval(screen.value)
        }
    })

})();