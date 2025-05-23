window.addEventListener('DOMContentLoaded', () => {
    const pianoSection = document.getElementById('piano-section');
    const guide = document.getElementById('guide-section');
    const miniguide = document.getElementById('mini-guide');

    const pianobtn = document.getElementById('open-piano');
    const guidebtn = document.getElementById('open-guide');

    console.log({ pianoSection, guide, miniguide, pianobtn, guidebtn });

    pianobtn.addEventListener('click', () => {
        pianoSection.classList.remove('hidden');
        guide.classList.add('hidden');
        miniguide.classList.remove('hidden');
    });

    guidebtn.addEventListener('click', () => {
        guide.classList.remove('hidden');
        pianoSection.classList.add('hidden');
        miniguide.classList.add('hidden');
    });
})