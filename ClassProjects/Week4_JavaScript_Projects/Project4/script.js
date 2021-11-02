
var pics = [
    'assets/image0.jpg',
    'assets/image1.jpg',
    'assets/image2.jpg']
          
 
var index = 1;

function rotate(){

    var nextImage = pics[index];

    document.getElementById("bgPic").style.backgroundImage=`url(${nextImage})`;
    
    index++;

    if(index == pics.length){
        index = 0;
    }


}

function start(){
setInterval(rotate, 3000);
}