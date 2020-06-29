const firstSection = document.querySelector('.first')
const secondSection = document.querySelector('.second')
const thirdSection = document.querySelector('.third')

const firstHeading = firstSection.firstElementChild
const firstPara = document.querySelector('.first p')

const secondHeading = secondSection.firstElementChild
const secondPara = document.querySelector('.second p')

const thirdHeading = thirdSection.firstElementChild
const cardOne = document.getElementById('card1')
const cardTwo = document.getElementById('card2')
const cardThree = document.getElementById('card3')


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
    if(thirdSection.offsetTop - window.scrollY < 600) {
        thirdHeading.style.animation = 'heading 0.5s forwards ease-out';
        cardOne.style.animation = 'card 0.5s forwards ease-out 0.5s'
        cardTwo.style.animation = 'card 0.5s forwards ease-out 0.7s'
        cardThree.style.animation = 'card 0.5s forwards ease-out 0.9s'
    }
    
    if(lastImg.offsetTop - window.scrollY < 5 ){
        
        lastText.style.animation = 'largemove 1s forwards ease-out';
        contact.style.animation = 'custom 0.5s forwards ease-out';
        icons.style.animation = 'customone 0.5s forwards ease-out 1s';
    }
    
    

})
