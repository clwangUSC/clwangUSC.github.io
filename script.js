function toggleP(button) {
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

