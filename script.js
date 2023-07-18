document.addEventListener('DOMContentLoaded',()=>{
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
    alert('object not yet interactable :(');
}
