function toggleP(button) {
    var portfolio = document.getElementById("portfolio");
    if(button.id==="goHome")
    {
        document.getElementById("theSprite").src = "images/Home.png";
        portfolio.style.display="none";
    }
    else if(button.id==="goPort")
    {
        document.getElementById("theSprite").src = "images/Portfolio.png";
        portfolio.style.display="block";
    }
    else
    {
        document.getElementById("theSprite").src = "images/AboutMe.png";
        portfolio.style.display="none";
    }
}