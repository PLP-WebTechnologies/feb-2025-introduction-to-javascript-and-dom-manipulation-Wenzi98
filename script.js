// DOM Elements
const dynamicText = document.getElementById('dynamicText');
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleStyleBtn = document.getElementById('toggleStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const elementContainer = document.getElementById('elementContainer');
const themeToggle = document.getElementById('themeToggle');
const counter = document.getElementById('counter');

let elementCount = 0;
let currentTextIndex = 0;


const texts = [
    "🚀Interstellar- The black hole visuals required solving real physics equations (thanks, physicist Kip Thorne!) ",
    "💡 Pulp Fiction- The adrenaline needle stabbed into Uma Thurman’s chest? A real (but harmless) jab!JavaScript makes websites interactive",
    "🎨 The Departed- Leonardo DiCaprio’s character dies in every scene he shares with Nicholson.",
    "⚡ Project X- The chaotic house party used real amateur footage from an actual teen’s rager",
    "🎮In the Hear of the sea- Chris Hemsworth ate only 500 calories a day to play a starving sailor. Moby Diet."
];

const greetings = [
    "Thanos", "Rush Hour", "Tenet", "Inception", "Prisoners",
    "Creed", "Scream", "The Equalizer", "Hidden Figures", "Training Day"
];

// Event Listeners
changeTextBtn.addEventListener('click', () => {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    animateText(dynamicText, texts[currentTextIndex]);
});

toggleStyleBtn.addEventListener('click', () => {
    dynamicText.classList.toggle('highlight');
});

addElementBtn.addEventListener('click', () => {
    createDynamicElement();
});

clearAllBtn.addEventListener('click', () => {
    elementContainer.innerHTML = '';
    elementCount = 0;
    updateCounter();
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Helper Functions
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 60%)`;
}

function getRandomGreeting() {
    return greetings[Math.floor(Math.random() * greetings.length)];
}

function animateText(element, newText) {
    element.style.opacity = '0';
    setTimeout(() => {
        element.textContent = newText;
        element.style.opacity = '1';
    }, 200);
}

function updateCounter() {
    counter.textContent = `Elements created: ${elementCount}`;
}

function createDynamicElement() {
    elementCount++;
    updateCounter();

    const element = document.createElement('div');
    element.className = 'dynamic-element';
    element.style.borderLeft = `4px solid ${getRandomColor()}`;

    const content = document.createElement('span');
    content.textContent = `${getRandomGreeting()} #${elementCount}`;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✖ Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
        element.style.opacity = '0';
        element.style.transform = 'translateX(100px)';
        setTimeout(() => {
            element.remove();
        }, 300);
    };

    element.appendChild(content);
    element.appendChild(removeBtn);
    elementContainer.appendChild(element);
}


dynamicText.textContent = texts[Math.floor(Math.random() * texts.length)];