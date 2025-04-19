//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 5000;
let timeAutoNext = 10000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.addEventListener('DOMContentLoaded', function() {
    // Card data - you can expand this with more cards
    const yugiohCards = [
        {
            id: 1,
            name: "Dark Magician",
            type: "Monster",
            category: "Spellcaster / Normal",
            image: "image/monsters/magician.webp",
            description: "The ultimate wizard in terms of attack and defense.",
            atk: 2500,
            def: 2100,
            level: 7,
            attribute: "DARK"
        },
        {
            id: 6,
            name: "Blue Eyes White Dragon",
            type: "Monster",
            category: "Normal",
            image: "image/monsters/blueeye.jpg",
            description: "The ultimate wizard in terms of attack and defense.",
            atk: 2500,
            def: 2100,
            level: 7,
            attribute: "DARK"
        },
        {
            id: 2,
            name: "Infinite Impermanence",
            type: "Trap",
            category: "Normal",
            image: "image/trap/impermanance_karta.webp",
            description: "Target 1 face-up monster your opponent controls; negate its effects until the end of this turn.",
            effect: "Quick-effect negation"
        },
        {
            id: 3,
            name: "Pot of Greed",
            type: "Spell",
            category: "Normal",
            image: "image/spell/greed3.jpg",
            description: "Draw 2 cards from your Deck.",
            effect: "Card advantage"
        },
        {
            id: 4,
            name: "Firewall Dragon",
            type: "Link",
            category: "Cyberse / Link / Effect",
            image: "image/link/link.jpg",
            description: "2+ monsters, except Tokens. Once per turn: You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand.",
            atk: 2500,
            link: 4,
            attribute: "LIGHT"
        },
        {
            id: 5,
            name: "Fake Trap",
            type: "Trap",
            category: "Normal",
            image: "image/trap/faketrap.webp",
            description: "2+ monsters, except Tokens. Once per turn: You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand.",
            effect: "Quick-effect negation"
        }
          
        // Add more cards as needed
    ];

    // Get the cards-wrapper element
    const cardsWrapper = document.querySelector('.cards-wrapper');
    
    // Populate the gallery with cards - simplified version that only shows images initially
    yugiohCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.dataset.cardId = card.id;
        cardElement.dataset.name = card.name; // For the hover effect
        cardElement.dataset.type = card.type; // Add type for filtering
        
        // Simplified card HTML - just the image
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}" class="card-image">
        `;
        
        cardsWrapper.appendChild(cardElement);
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Add click event to each button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Get all card items
            const cardItems = document.querySelectorAll('.card-item');
            
            // Filter cards
            cardItems.forEach(card => {
                if (filterValue === 'all') {
                    // Show all cards
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.position = 'relative';
                    }, 500);
                } else {
                    // Get card type
                    const cardType = card.getAttribute('data-type');
                    
                    if (cardType === filterValue) {
                        // Show card if it matches the filter
                        card.classList.remove('hidden');
                        setTimeout(() => {
                            card.style.position = 'relative';
                        }, 500);
                    } else {
                        // Hide card if it doesn't match the filter
                        card.classList.add('hidden');
                        card.style.position = 'absolute';
                    }
                }
            });
            
            // Animate cards coming into view
            let delay = 0;
            cardItems.forEach(card => {
                if (!card.classList.contains('hidden')) {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, delay);
                    delay += 50; // Stagger the animations
                }
            });
        });
    });
    
    // Modal functionality
    const modal = document.querySelector('.card-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.querySelector('.modal-card-image');
    const modalName = document.querySelector('.modal-card-name');
    const modalType = document.querySelector('.modal-card-type');
    const modalDescription = document.querySelector('.modal-card-description');
    const modalStats = document.querySelector('.modal-card-stats');
    
    // Open modal when clicking on a card
    document.querySelectorAll('.card-item').forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.dataset.cardId;
            const cardData = yugiohCards.find(c => c.id == cardId);
            
            modalImage.src = cardData.image;
            modalName.textContent = cardData.name;
            modalType.textContent = `${cardData.type} - ${cardData.category}`;
            modalDescription.textContent = cardData.description;
            
            // Display different stats based on card type
            let statsHtml = '';
            if (cardData.type === 'Monster') {
                statsHtml = `
                    <p><strong>Level:</strong> ${cardData.level}</p>
                    <p><strong>Attribute:</strong> ${cardData.attribute}</p>
                    <p><strong>ATK:</strong> ${cardData.atk} / <strong>DEF:</strong> ${cardData.def}</p>
                `;
            } else if (cardData.type === 'Link') {
                statsHtml = `
                    <p><strong>Attribute:</strong> ${cardData.attribute}</p>
                    <p><strong>ATK:</strong> ${cardData.atk}</p>
                    <p><strong>Link Rating:</strong> ${cardData.link}</p>
                `;
            } else if (cardData.type === 'Spell' || cardData.type === 'Trap') {
                statsHtml = `
                    <p><strong>Effect Type:</strong> ${cardData.effect}</p>
                `;
            }
            
            modalStats.innerHTML = statsHtml;
            modal.style.display = 'block';
        });
    });
    
    // Close modal when clicking the X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Add scroll to view animation
    const banner2 = document.querySelector('.banner2');
    let animationTriggered = false;
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const visiblePercent = 0.3;
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - visiblePercent) &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * visiblePercent
        );
    }
    
    function handleScroll() {
        if (!animationTriggered && isElementInViewport(banner2)) {
            console.log("Banner2 is now in viewport - triggering animation");
            animationTriggered = true;
            
            document.querySelectorAll('.card-item').forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 * index); // Faster animation for grid layout
            });
            
            window.removeEventListener('scroll', handleScroll);
        }
    }
    
    // Initialize cards with opacity 0 for animation
    document.querySelectorAll('.card-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)'; 
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial state
    handleScroll();
});


