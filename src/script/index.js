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
        setTimeout(() => showSlides(name), 3000);
    }
    

