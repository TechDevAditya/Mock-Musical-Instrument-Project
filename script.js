window.addEventListener('DOMContentLoaded', () => {
    const pianoSection = document.getElementById('piano-section');
    const guide = document.getElementById('guide-section');
    const miniguide = document.getElementById('mini-guide');
    const toggleModebtn = document.getElementById('toggle-mode');
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

            noteplay(rawNote);
        })
    })

    function noteplay(noteName){
        const note = noteName.toLowerCase();
        const audio= new Audio(`sounds/${note}.mp3`);
        const matchingkey = document.querySelector(`.key[data-note="${noteName}"]`);

        if(!matchingkey) console.warn('No key is matching');

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r}, ${g}, ${b})`;

        matchingkey.style.backgroundColor = color;

        //key release, change color back
        setTimeout(() => {
            matchingkey.style.backgroundColor = '';
        }, 300);

        console.log(`Clicked: ${noteName}, Attempt to play: sounds/${note}.mp3`);
        audio.play()
        .then(() => console.log(`Playing ${note}`))
        .catch(e => console.error(`Error in playing ${note}:`, e));
    }

    
    //press through keyboard
    const pressedkeys = new Set();

    window.addEventListener('keydown', (e) => {
        pressedkeys.add(e.key.toUpperCase());

        let letter = null;
        let number = null;

        for(let key of pressedkeys){
            if(["A","B","C","D","E","F","G"].includes(key)){
                letter = key;
            }else if(["3","4","5"].includes(key)){
                number = key;
            }
        }

        if(letter && number){
            const note = letter+number;
            noteplay(note);
        }

    });

    window.addEventListener('keyup', (e) => {
        pressedkeys.delete(e.key.toUpperCase());
    });

    //Toggle Dark Mode
    toggleModebtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleModebtn.textContent = document.body.classList.contains('dark-mode')?'Light mode' : 'Dark mode';

        document.querySelectorAll('#mini-guide, #guide-section').forEach(section => {
            section.classList.toggle('dark-mode');
        });
    });
});