// Birthday wishes in Indonesian
const birthdayWishes = [
    "Selamat ulang tahun, Shayna! 🎂",
    "Semoga hari spesialmu dipenuhi keajaiban dan kegembiraan! ✨",
    "Selamat bertambah usia, semoga makin bahagia! 🎊",
    "Doaku untukmu: panjang umur, sehat selalu, dan bahagia terus! 🌟",
    "Selamat ulang tahun! Semoga tahun ini lebih indah dari sebelumnya! 🎈",
    "Happy birthday, Shayna! Semoga semua impianmu terwujud! 🎁",
    "Hari ini adalah harimu! Rayakan dengan penuh kebahagiaan! 🎉",
    "Selamat ulang tahun! Semoga hidupmu penuh berkah dan cinta! 💖",
    "Tambah umur, tambah dewasa, tambah cantik! Selamat ya! 🌹",
    "Semoga di usia yang baru ini kamu makin sukses dan bahagia! 🏆"
];

let currentWishIndex = 0;
let particleCount = 0;

// Initialize particles
function createParticles() {
    const container = document.getElementById('particles');
    
    // Create sparkles
    for (let i = 0; i < 25; i++) {
        createParticle(container, 'sparkle', '✨');
    }
    
    // Create fire particles
    for (let i = 0; i < 15; i++) {
        createParticle(container, 'fire', '🔥');
    }
    
    // Create stars
    for (let i = 0; i < 20; i++) {
        createParticle(container, 'sparkle', '⭐');
    }
}

function createParticle(container, type, symbol) {
    const particle = document.createElement('div');
    particle.className = `particle ${type}`;
    particle.innerHTML = symbol;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (2 + Math.random() * 2) + 's';
    particle.style.fontSize = (12 + Math.random() * 8) + 'px';
    container.appendChild(particle);
}

// Reveal birthday card function
function revealBirthdayCard() {
    const surpriseCard = document.getElementById('surpriseCard');
    const mainCard = document.getElementById('mainCard');
    
    // Add fade out effect to surprise card
    surpriseCard.style.opacity = '0';
    surpriseCard.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        surpriseCard.style.display = 'none';
        mainCard.classList.remove('hidden');
        
        // Add entrance animation to main card
        mainCard.style.opacity = '0';
        mainCard.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            mainCard.style.opacity = '1';
            mainCard.style.transform = 'scale(1)';
            mainCard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 100);
        
        // Show toast notification
        showToast();
        
        // Create more particles for celebration
        createCelebrationParticles();
        
        // Start auto wish rotation
        startAutoWishRotation();
    }, 500);
}

// Show toast notification
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Create celebration particles
function createCelebrationParticles() {
    const container = document.getElementById('particles');
    
    // Add more celebration particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle(container, 'fire', '🎉');
            createParticle(container, 'sparkle', '🎊');
        }, i * 200);
    }
}

// Next wish function
function nextWish() {
    currentWishIndex = (currentWishIndex + 1) % birthdayWishes.length;
    updateWishDisplay();
}

// Update wish display
function updateWishDisplay() {
    const wishElement = document.getElementById('currentWish');
    
    // Add fade out effect
    wishElement.style.opacity = '0';
    wishElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        wishElement.textContent = birthdayWishes[currentWishIndex];
        wishElement.style.opacity = '1';
        wishElement.style.transform = 'translateY(0)';
    }, 300);
}

// Auto wish rotation
function startAutoWishRotation() {
    setInterval(() => {
        nextWish();
    }, 5000); // Change wish every 5 seconds
}

// Add floating animation to images
function addImageAnimations() {
    const chibis = document.querySelectorAll('.chibi-img');
    const stickers = document.querySelectorAll('.birthday-sticker');
    
    [...chibis, ...stickers].forEach((img, index) => {
        img.style.animationDelay = (index * 0.5) + 's';
        
        // Add hover sound effect (visual feedback)
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Add interactive effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation keyframes dynamically
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced particle effects
function createEnhancedParticles() {
    const container = document.getElementById('particles');
    
    // Create different types of particles
    const particleTypes = [
        { symbol: '🎂', class: 'sparkle' },
        { symbol: '🎈', class: 'float' },
        { symbol: '🎊', class: 'sparkle' },
        { symbol: '✨', class: 'sparkle' },
        { symbol: '🔥', class: 'fire' },
        { symbol: '⭐', class: 'sparkle' },
        { symbol: '💫', class: 'sparkle' },
        { symbol: '🌟', class: 'sparkle' }
    ];
    
    particleTypes.forEach((type, index) => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                createParticle(container, type.class, type.symbol);
            }, index * 500);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    addImageAnimations();
    addButtonEffects();
    addRippleAnimation();
    
    // Preload images for smoother experience
    const imageUrls = [
        'https://images.unsplash.com/photo-1758287621027-b9d46325ec52',
        'https://images.unsplash.com/photo-1758555225970-5167a1a8d697',
        'https://images.pexels.com/photos/34044696/pexels-photo-34044696.jpeg',
        'https://images.unsplash.com/photo-1669894197890-6f5f9eaecedd',
        'https://images.pexels.com/photos/16605271/pexels-photo-16605271.jpeg',
        'https://images.pexels.com/photos/19919392/pexels-photo-19919392.jpeg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
    
    // Add entrance animation to surprise card
    setTimeout(() => {
        const surpriseCard = document.getElementById('surpriseCard');
        surpriseCard.style.opacity = '0';
        surpriseCard.style.transform = 'scale(0.8)';
        surpriseCard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            surpriseCard.style.opacity = '1';
            surpriseCard.style.transform = 'scale(1)';
        }, 100);
    }, 200);
});

// Add special effects for birthday celebration
function triggerSpecialEffects() {
    // Create confetti effect
    const colors = ['#fbbf24', '#ef4444', '#f97316', '#eab308'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.animation = `fall ${3 + Math.random() * 2}s linear forwards`;
            confetti.style.zIndex = '999';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add fall animation for confetti
const fallKeyframes = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = fallKeyframes;
document.head.appendChild(styleSheet);