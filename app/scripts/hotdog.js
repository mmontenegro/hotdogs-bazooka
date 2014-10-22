$(function() {
    var img= '<img src="https://cdn2.iconfinder.com/data/icons/vector-icons-pack-part-6/57/fast_food_hot_dog_sausage-512.png" class="hotdog"></img>';

    $(".hotdogstore").append(img);

    var dogcreator = setInterval(function(){
        $(".hotdogstore").append(img);
    }, 2001);

    setTimeout(function(){ clearInterval(dogcreator) }, 10000);

});