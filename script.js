var lights = 1;
const frameImages = [
    "",
    "images/eyes2.png",
    "images/eyes1.png",
    "images/eyes0.png",
    "images/eyes1.png",
    "images/eyes2.png",
];

const frameRate = 25;
const frameTimes=[80*frameRate,frameRate,frameRate,2*frameRate,frameRate]; 
let currentFrameIndex = 0;

document.addEventListener('DOMContentLoaded',()=>{
    drawFrame();
    const buttons = document.getElementById("goHome");
    toggleP(buttons);

    document.querySelectorAll(".individual-link").forEach(item=>{
        item.addEventListener("mouseover",event=> {
            item.style.color="yellow";
        })
        item.addEventListener("mouseout",event=> {
            item.style.color='#F1E3DB';
        })
    })
})


function toggleP(button) {
    console.log(button);
  
    //document.getElementById("theSprite").src = "images/Portfolio.png";
    var home = document.getElementById("homeComplex");
    var portfolio = document.getElementById("portComplex");
    var about = document.getElementById("aboutComplex");
    if(button.id==="goHome")
    {
        portfolio.style.display="none";
        home.style.display="block";
        about.style.display="none";
    }
    else if(button.id==="goPort")
    {

        portfolio.style.display="block";
        home.style.display="none";
        about.style.display="none";
    }
    else
    {
        portfolio.style.display="none";
        home.style.display="none";
        about.style.display="block";
    }
}

function start()
{
    var button = document.getElementById("homeComplex");
    toggleP(button);
}

function clickedBackgroundObject()
{
    //alert('object not yet interactable :(');
    var background = document.getElementById("background");
    if(lights == 1)
    {
        background.src = "images/background.png";
        lights=0;
    }
    else
    {
        background.src = "images/lightson.png";
        lights=1;
    }

}

function drawFrame() 
{
    var eyes = document.getElementById("blink");

    currentFrameIndex = (currentFrameIndex + 1) % frameImages.length;
    eyes.src = frameImages[currentFrameIndex];


    setTimeout(drawFrame, frameTimes[currentFrameIndex]);
}
