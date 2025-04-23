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
            id: 17,
            name: "Dark Hole",
            type: "Spell",
            category: "Normal",
            image: "image/spell/hole.jpg",
            description: "Destroy all monsters on the field.",
            effect: "Mass destruction"
        },
        {
            id: 6,
            name: "Blue Eyes White Dragon",
            type: "Monster",
            category: "Dragon / Normal",
            image: "image/monsters/blueeye.jpg",
            description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
            atk: 3000,
            def: 2500,
            level: 8,
            attribute: "LIGHT"
        },
        {
            id: 5,
            name: "Fake Trap",
            type: "Trap",
            category: "Normal",
            image: "image/trap/faketrap.webp",
            description: "When your opponent activates a card or effect that would destroy a Trap Card(s) you control: You can discard this card; your Trap Cards cannot be destroyed by your opponent's card effects this turn.",
            effect: "Protection"
        },
        {
            id: 24,
            name: "Knightmare Phoenix",
            type: "Link",
            category: "Fiend / Link / Effect",
            image: "image/link/phoenix.webp",
            description: "2+ monsters with different names. If this card is Link Summoned: You can discard 1 card, then target 1 Spell/Trap on the field; destroy it, then, if this card was co-linked when this effect was activated, you can draw 1 card.",
            atk: 1900,
            link: 2,
            attribute: "FIRE"
        },
        {
            id: 10,
            name: "Elemental HERO Neos",
            type: "Monster",
            category: "Warrior / Normal",
            image: "image/monsters/hero.webp",
            description: "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.",
            atk: 2500,
            def: 2000,
            level: 7,
            attribute: "LIGHT"
        },
        {
            id: 15,
            name: "Gozen Match",
            type: "Trap",
            category: "Continuous",
            image: "image/trap/gozen.jpg",
            description: "Each player can only control 1 Attribute of monster. Send all other monsters they control to the GY.",
            effect: "Field control"
        },
        {
            id: 8,
            name: "Summoned Skull",
            type: "Monster",
            category: "Fiend / Normal",
            image: "image/monsters/skull.jpg",
            description: "A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.",
            atk: 2500,
            def: 1200,
            level: 6,
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
            id: 23,
            name: "Apollousa, Bow of the Goddess",
            type: "Link",
            category: "Fairy / Link / Effect",
            image: "image/link/apollousa.webp",
            description: "2+ Effect Monsters. This card gains 800 ATK for each material used for its Link Summon. Once per turn: You can negate the activation of an opponent's monster effect by reducing this card's ATK by 800 (until the end of this turn).",
            atk: 0,
            link: 4,
            attribute: "WIND"
        },
        {
            id: 18,
            name: "Raigeki",
            type: "Spell",
            category: "Normal",
            image: "image/spell/raigeki.jpg",
            description: "Destroy all monsters your opponent controls.",
            effect: "Opponent destruction"
        },
        {
            id: 7,
            name: "Red-Eyes Black Dragon",
            type: "Monster",
            category: "Dragon / Normal",
            image: "image/monsters/redeye.jpg",
            description: "A ferocious dragon with deadly attack power.",
            atk: 2400,
            def: 2000,
            level: 7,
            attribute: "DARK"
        },
        {
            id: 11,
            name: "Mirror Force",
            type: "Trap",
            category: "Normal",
            image: "image/trap/mirror.jpg",
            description: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters.",
            effect: "Mass destruction"
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
            id: 20,
            name: "Polymerization",
            type: "Spell",
            category: "Normal",
            image: "image/spell/poly.jpg",
            description: "Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from your hand or field as Fusion Material.",
            effect: "Fusion summoning"
        },
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
            id: 19,
            name: "Mystical Space Typhoon",
            type: "Spell",
            category: "Quick-Play",
            image: "image/spell/typhoon.jpg",
            description: "Target 1 Spell/Trap on the field; destroy that target.",
            effect: "Spell/Trap removal"
        },
        {
            id: 12,
            name: "Torrential Tribute",
            type: "Trap",
            category: "Normal",
            image: "image/trap/tribute.webp",
            description: "When a monster(s) is Summoned: Destroy all monsters on the field.",
            effect: "Board wipe"
        },
        {
            id: 25,
            name: "Accesscode Talker",
            type: "Link",
            category: "Cyberse / Link / Effect",
            image: "image/link/access.webp",
            description: "2+ Effect Monsters. If this card is Link Summoned: You can target monsters in your GY up to the number of Link Monsters used as material for this card; banish them. Gains 1000 ATK for each attribute among those banished monsters.",
            atk: 2300,
            link: 4,
            attribute: "DARK"
        },
        {
            id: 9,
            name: "Stardust Dragon",
            type: "Monster",
            category: "Dragon / Synchro / Effect",
            image: "image/monsters/stardust.webp",
            description: "During either player's turn, when a card or effect is activated that would destroy a card(s) on the field: You can Tribute this card; negate the activation, and if you do, destroy it.",
            atk: 2500,
            def: 2000,
            level: 8,
            attribute: "LIGHT"
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
            id: 22,
            name: "Borrelsword Dragon",
            type: "Link",
            category: "Dragon / Link / Effect",
            image: "image/link/borrel.jpg",
            description: "3+ Effect Monsters. Cannot be destroyed by your opponent's card effects. Once per turn: You can target 1 Attack Position monster; change it to Defense Position, also this card can make a second attack during each Battle Phase this turn.",
            atk: 3000,
            link: 4,
            attribute: "DARK"
        },
        {
            id: 13,
            name: "Solemn Judgment",
            type: "Trap",
            category: "Counter",
            image: "image/trap/solemn.webp",
            description: "When a monster would be Summoned, OR a Spell/Trap Card is activated: Pay half your LP; negate the Summon or activation, and if you do, destroy that card.",
            effect: "Counter negation"
        },
        {
            id: 16,
            name: "Monster Reborn",
            type: "Spell",
            category: "Normal",
            image: "image/spell/reborn.jpg",
            description: "Target 1 monster in either GY; Special Summon it.",
            effect: "Monster revival"
        },
        {
            id: 14,
            name: "Imperial Order",
            type: "Trap",
            category: "Continuous",
            image: "image/trap/order.jpg",
            description: "Negate all Spell Card effects on the field. During each of your Standby Phases, pay 700 LP or destroy this card.",
            effect: "Spell negation"
        }
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


// Dodajte to kodo na konec script.js datoteke

// Ko se DOM naloži, nastavimo inspect funkcionalnost
document.addEventListener('DOMContentLoaded', function() {
    // Nastavimo dogodek za gumb Inspect
    setupInspectFunctionality();
});

// Funkcija za nastavitev inspect funkcionalnosti
function setupInspectFunctionality() {
    // Pridobimo inspect gumb in modalno okno
    const inspectButton = document.querySelector('.inspect-button');
    const inspectModal = document.querySelector('.inspect-modal');
    
    // Če gumb ali modalno okno ne obstaja, končamo
    if (!inspectButton || !inspectModal) {
        console.error("Inspect elements not found!");
        return;
    }
    
    // Pridobimo potrebne elemente
    const modalImage = document.querySelector('.modal-card-image');
    const card3d = inspectModal.querySelector('.card-3d');
    const card3dFront = inspectModal.querySelector('.card-3d-front');
    const closeInspect = inspectModal.querySelector('.close-inspect');
    const rotateButtons = inspectModal.querySelectorAll('.rotate-btn');
    const flipButton = inspectModal.querySelector('.flip-btn');
    const card3dSpace = inspectModal.querySelector('.card-3d-space');
    const body = document.body;
    
    // Globalne spremenljivke za sledenje rotacije
    let currentRotation = 0;
    let isFlipped = false;
    
    // Dodamo dogodek za klik na inspect gumb
    inspectButton.addEventListener('click', function() {
        // Pridobimo trenutno sliko karte
        const currentCardImage = modalImage.src;
        
        // Nastavimo sprednjo stran 3D karte
        card3dFront.innerHTML = `<img src="${currentCardImage}" alt="Card Front">`;
        
        // Prikažemo inspect modal
        inspectModal.style.display = 'flex';
        
        // Začetni položaj karte
        card3d.style.transform = 'rotateY(0deg)';
        currentRotation = 0;
        isFlipped = false;
        
        // Preprečimo drsenje ozadja
        body.style.overflow = 'hidden';
    });
    
    // Zapri inspect modal
    closeInspect.addEventListener('click', function() {
        inspectModal.style.display = 'none';
        body.style.overflow = 'auto';
    });
    
    // Gumbi za obračanje
    rotateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const direction = this.getAttribute('data-rotation');
            
            if (direction === 'left') {
                currentRotation -= 15;
            } else {
                currentRotation += 15;
            }
            
            // Posodobimo rotacijo
            updateCardTransform();
        });
    });
    
    // Gumb za obračanje (flip) karte
    flipButton.addEventListener('click', function() {
        isFlipped = !isFlipped;
        updateCardTransform();
    });
    
    // Funkcija za posodabljanje transformacije karte
    function updateCardTransform() {
        if (isFlipped) {
            card3d.style.transform = `rotateY(${currentRotation + 180}deg)`;
        } else {
            card3d.style.transform = `rotateY(${currentRotation}deg)`;
        }
    }
    
    // Dodaj funkcionalnost drsnika za rotacijo z miško
    let isDragging = false;
    let startPosition = 0;
    let startRotation = 0;
    
    card3dSpace.addEventListener('mousedown', function(e) {
        isDragging = true;
        startPosition = e.clientX;
        startRotation = currentRotation;
        this.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startPosition;
        currentRotation = startRotation + deltaX / 3;
        updateCardTransform();
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        card3dSpace.style.cursor = 'grab';
    });
    
    // Dodaj poslušalce za mobilne naprave (touch)
    let touchStartX = 0;
    
    card3dSpace.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        startRotation = currentRotation;
    });
    
    card3dSpace.addEventListener('touchmove', function(e) {
        const deltaX = e.touches[0].clientX - touchStartX;
        currentRotation = startRotation + deltaX / 3;
        updateCardTransform();
    });
    
    // Zapiranje modala ob kliku izven vsebine
    window.addEventListener('click', function(e) {
        if (e.target === inspectModal) {
            inspectModal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });
}