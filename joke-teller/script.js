const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Passing Joke to TTS VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: '1b0e322d2224448a91b978b78d395586',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
        });
}

// Get Jokes from API 
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        tellMe(joke);
    } catch (error) {
        // State error here
        console.log('Whoopsi', error);
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
