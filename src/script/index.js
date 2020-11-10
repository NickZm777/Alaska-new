let slideIndex = 0;
showSlides();
   
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slideDenali");
    for (i = 0; i < slides.length; i+=1) {
        slides[i].style.display = "none";
    }
slideIndex+=1;
    if (slideIndex > slides.length) {
        slideIndex = 1;
}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}




function menuHeaderBehavior() {
    let oldScroll = 0
    let heroHeader = document.querySelector('.header')
    let heroHeaderHeight = heroHeader.clientHeight
    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset
        if(currentScroll > oldScroll ) {
            heroHeader.classList.add('hidden')
            oldScroll = currentScroll
        } else {
            heroHeader.classList.remove('hidden')
            oldScroll = currentScroll
        }
    })
}

menuHeaderBehavior()




function qwe() {
    let q = document.getElementById("test");
    q.style.display="block";    
}

let butt=document.getElementById("butt");

butt.addEventListener("click", qwe);



