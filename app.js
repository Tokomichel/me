


function changeHoverImage() {
    const image = "myself.jpg";
    const profileImage = document.querySelector('.profile-image img');
    profileImage.src = image;
}

function changeNormalImage() {
    const image = "me.jpg";
    const profileImage = document.querySelector('.profile-image img');
    profileImage.src = image;
}



// Fonction pour l'animation type terminal
function typeWriterTerminal(selector, skills, options = {}) {
    const {
        typingSpeed = 100,      // Vitesse d'écriture
        deletingSpeed = 50,     // Vitesse d'effacement
        pauseBeforeDelete = 2000, // Pause avant d'effacer
        pauseBeforeType = 500,   // Pause avant d'écrire
        cursorChar = '|'         // Caractère du curseur
    } = options;

    const element = document.querySelector(selector);
    if (!element) return;

    let currentSkillIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;

    // Créer le curseur
    const cursor = document.createElement('span');
    cursor.className = 'terminal-cursor';
    cursor.textContent = cursorChar;
    cursor.style.color = '#64ffda';
    cursor.style.marginLeft = '2px';
    element.appendChild(cursor);

    // Animation du curseur clignotant
    cursor.style.animation = 'blink 1s infinite';

    function type() {
        const currentSkill = skills[currentSkillIndex];
        
        if (isDeleting) {
            // Effacer un caractère
            currentText = currentSkill.substring(0, charIndex - 1);
            charIndex--;
            element.textContent = currentText;
            element.appendChild(cursor);
            
            if (currentText === '') {
                isDeleting = false;
                currentSkillIndex = (currentSkillIndex + 1) % skills.length;
                setTimeout(type, pauseBeforeType);
                return;
            }
            
            setTimeout(type, deletingSpeed);
        } else {
            // Écrire un caractère
            currentText = currentSkill.substring(0, charIndex + 1);
            charIndex++;
            element.textContent = currentText;
            element.appendChild(cursor);
            
            if (currentText === currentSkill) {
                isDeleting = true;
                setTimeout(type, pauseBeforeDelete);
                return;
            }
            
            setTimeout(type, typingSpeed);
        }
    }

    // Démarrer l'animation
    type();
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        'software engineer',
        'web developer',
        'Devops engineer',
        'full stack developer'
    ];
    
    typeWriterTerminal('.job_list_writer', skills, {
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseBeforeDelete: 2000,
        pauseBeforeType: 500
    });
});


