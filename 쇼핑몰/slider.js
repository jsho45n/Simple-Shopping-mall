var imageIndex = 0;
showImages();

function showImages() {
    var i;
    var image = new Array;
    image = document.getElementsByClassName("myImage");
    for (i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }
    imageIndex++;
    if (imageIndex > image.length) { imageIndex = 1 };
    image[imageIndex - 1].style.display = "block";
    setTimeout(showImages, 2000);
}