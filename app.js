console.log('app.js loaded');
// document.addEventListener('DOMContentLoaded', () => {
//     typeWriter('.job'); // ou typeWriter('.job', { text: 'Nouveau texte' });
// });




function changeHoverImage() {
    console.log('changeHoverImage');
    const image = "myself.jpg";
    const profileImage = document.querySelector('.profile-image img');
    profileImage.src = image;
}

function changeNormalImage() {
    const image = "me.jpg";
    const profileImage = document.querySelector('.profile-image img');
    profileImage.src = image;
}


// code la saisie 
function typeWriter(selector, { text, typingSpeed = 120, cursorBlinkSpeed = 500 } = {}) {
    console.log(selector);
    const element = document.querySelector(selector);
    console.log(element);
    if (!element) return;

    

    const cursor = document.createElement('span');
    let jobs = ['software engineer', 'web developer', 'data analyst', 'machine learning engineer', 'full stack developer'];

    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        console.log(job);

        const content = text ?? element.textContent;
        element.textContent = job;
        cursor.className = 'typewriter-cursor';
        cursor.textContent = '|';
        element.appendChild(cursor);
    
        let index = 0;
    
        function typeNextCharacter() {
            if (index < content.length) {
                cursor.insertAdjacentText('beforebegin', content.charAt(index));
                index++;
                setTimeout(typeNextCharacter, typingSpeed);
            } else {
                cursor.remove();
            }
        }
    
        typeNextCharacter();
    
        cursor.style.display = 'inline-block';
        cursor.style.marginLeft = '2px';
        cursor.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: cursorBlinkSpeed, iterations: Infinity }
        );
    }
}


