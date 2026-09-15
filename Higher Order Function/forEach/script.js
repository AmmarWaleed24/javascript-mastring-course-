
/*
--forEach
*/

const cards = document.querySelectorAll('.card');
const cardsLinks = document.querySelectorAll('.cards ul li');

cardsLinks.forEach((link, index) => {
    link.addEventListener('click', () =>{
        cards.forEach((card)=>{
            card.classList.remove('active');
            
        })
        cards[index].classList.add('active');
        cardsLinks.forEach((link)=>{
            link.classList.remove('active');
        });
        cardsLinks[index].classList.add('active');
    });
});
