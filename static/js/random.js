$("#recipes_home > li").hide();
randomItem();

$("button").click(function(){
    var lastItems = $("#recipes_home > li:visible");
    randomItem();
    lastItems.hide();
});

function randomItem(){
    for (var i = 0; i < 3; i++){
        var length = $("#recipes_home > li:not(:visible)").length;
        var random = Math.floor(Math.random() * length);
        $("#recipes_home > li:not(:visible)").eq(random).show();
    }
}