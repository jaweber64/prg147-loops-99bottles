/**
 * Created by jaWeber on 9/23/16.
 */

var $ = function(id)
{
    return document.getElementById(id);
};


window.onload = function() {
    var imagePath = "beer.png";
    var bottle = document.getElementById("bottleImg");
    var img;

    for (var i = 0; i < 99; i++)
    {
       img = new Image();
        img.src = imagePath;
        bottle.appendChild(img);
    }
};
