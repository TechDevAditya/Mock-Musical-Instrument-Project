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

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.addEventListener('click', function () {
            const rawNote = this.getAttribute('data-note');
            if(!rawNote){
                console.warn('No note found for this key!');
            };

            const note = rawNote.toLowerCase();
            const audio= new Audio(`sounds/${note}.mp3`);

            console.log('Clicked: ${rawNote}, Attempt to play: sounds/${note}.mp3');
            audio.play()
                .then(() => console.log(`Playing ${note}`))
                .catch(e => console.error(`Error in playing ${note}:`, e))
        })
    })
})