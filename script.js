function changeImage() {
    var x = document.getElementById('image');
    if (x.src.match("on.jpg")) {
        x.src = "off.jpg";
        document.getElementById("button").value = " ON "
    }
    else {
        document.getElementById("button").value = "OFF"
        x.src = "on.jpg";
    }
}