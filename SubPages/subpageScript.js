


// function nextImage1(slideshow1) {
//     var image = document.getElementById("slideshow1");
//     for(var i = 0; i < imgArray1.length; i++) {
//         if(imgArray1[i].src == image.src) {
//             if (i === imgArray1.length){
//                 document.getElementById("slideshow1").src = imgArray1[0].src;
//                 break;
//             }
//             document.getElementById("slideshow1").src = imgArray1[i+1].src;
//             break;
//         }
//             }
//         }
   
// var imgArray1 = new Array();

// imgArray1[0] = new Image();
// imgArray1[0].src = "images/testimage1.jpg";

// imgArray1[1] = new Image();
// imgArray1[1].src = "images/testimage2.jpg";

// imgArray1[2] = new Image();
// imgArray1[2].src = "images/testimage3.jpg";

// imgArray1[3] = new Image();
// imgArray1[3].src = "images/testimage4.jpg";
// imgArray1[3] = "images/testimage4.jpg"
// }



function nextImage1() {
    let imagesArray = ["images/testimage1.jpg","images/testimage2.jpg","images/testimage3.jpg"];

    let image = document.getElementById("slideshow1");
    let prevCounter = 0; // declare a variable to store the previous value of counter
    let button = document.getElementById("button");
    let counter = 0;
    button.addEventListener("click", function blep() {
        let counter = counter+1;
        console.log(counter);
    });
    image.style.backgroundImage = "url(" + imagesArray[counter] + ")";
 
}



