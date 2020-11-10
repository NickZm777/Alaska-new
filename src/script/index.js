function menuHeaderBehavior() {
    let oldScroll = 0
    let heroHeader = document.querySelector('.header')
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



// let slideIndex = 0;
// showSlides();


// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("slideWildlife");
//     for (i = 0; i < slides.length; i+=1) {
//         slides[i].style.display = "none";
//     }
// slideIndex+=1;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
// }
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 3000);
// }


// function showAuroras() {
//     let i;
//     let slideZero=document.getElementsByClassName("slideDenali");
//     slideZero.style.display = "none";
//     let slides = document.getElementsByClassName("slideAurora");
//     for (i = 0; i < slides.length; i+=1) {
//         slides[i].style.display = "none";
//     }
// slideIndex+=1;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
// }
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showAuroras, 3000);
// }
// let butt = document.getElementById("asx");
// butt.addEventListener("click", showAuroras)



let slideIndex = 0;

showSlides("slideDenali");

function showSlides(name) {
        let i;
        let slides = document.getElementsByClassName(name);
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
    

  


