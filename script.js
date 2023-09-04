const themeIcon = document.getElementById("theme-icon");

themeIcon.onclick = function(){
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        themeIcon.src = "image/sun.png";
    }else{
        themeIcon.src = "image/moon.png";
    }
    
}