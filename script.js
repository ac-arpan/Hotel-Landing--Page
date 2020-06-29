const firstSection = document.querySelector('.first')
const secondSection = document.querySelector('.second')
const thirdSection = document.querySelector('.third')

const firstHeading = firstSection.firstElementChild
const firstPara = document.querySelector('.first p')

const secondHeading = secondSection.firstElementChild
const secondPara = document.querySelector('.second p')

const thirdHeading = thirdSection.firstElementChild

const lastImg = document.querySelector('.pimg4')
const lastText = document.querySelector('.last-text')
const contact = document.querySelector('.contact')
const icons = document.querySelector('.icons')


window.addEventListener('scroll', () => {
    if(secondSection.offsetTop - window.scrollY < 500) {
        secondHeading.style.animation = 'heading 0.5s forwards ease-out';
        secondPara.style.animation = 'heading 0.5s forwards ease-out';
    }
    if(firstSection.offsetTop - window.scrollY < 500) {
        firstHeading.style.animation = 'heading 0.5s forwards ease-out';
        firstPara.style.animation = 'heading 0.5s forwards ease-out';
    }
    if(thirdSection.offsetTop - window.scrollY < 500) {
        thirdHeading.style.animation = 'heading 0.5s forwards ease-out';
    }
    
    if(lastImg.offsetTop - window.scrollY < 5 ){
        console.log('i ma in');
        
        lastText.style.animation = 'largemove 1s forwards ease-out';
        contact.style.animation = 'custom 0.5s forwards ease-out';
        icons.style.animation = 'customone 0.5s forwards ease-out 1s';
    }
    
    console.log(lastImg.offsetTop - window.scrollY);
    

})
