
// document.getElementById("menu-bar").addEventListener("click",function(){
//     document.getElementById("menu").style.display="none";
// });

$(document).ready(function(){
    $(".icon").on("click",function(){
        $(".icon-content").slideToggle("slow");
    });
    $(".btn-all").on("click",function(){
        $("#accordion-all").slideToggle("slow");
    });
    $(".btn-fashion").on("click",function(){
        $(".content-fashion").slideToggle("slow");
    });
    $(".btn-women").on("click",function(){
        $(".content-women").slideToggle("slow");
    });
});

