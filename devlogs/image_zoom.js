function zoomImage(event,image){
    const px = 100 * event.offsetX / image.width;
    const py = 100 * event.offsetY / image.height;

    image.style.transformOrigin = `${px}% ${py}%`;
    image.style.scale = 2;
}
function resetImage(event, image){
    image.style.transformOrigin = `0% 0%`;
    image.style.scale = 1;
}

images = document.getElementsByTagName("img")
for(let i=0;i<images.length;++i){
    const image = images[i];

    const width = image.width;
    const height = image.height;
    //console.log(width,height)

    const imageContainer = document.createElement("div");

    imageContainer.className = "imageContainer"
    image.parentNode.insertBefore(imageContainer, image);
    imageContainer.appendChild(image);

    image.onmousemove = (event)=>{zoomImage(event,image)};
    image.onmouseleave = (event)=>{resetImage(event,image)};
}