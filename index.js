const songs = [
    {
        src: "/audios/Afusic - Pal Pal with @Talwiinder  (Official Visualiser) Prod. @AliSoomroMusic.mp3",
        img: "/images/ab67616d0000b273236d0c72c9c3cbbfa15dd208.jpeg",
        title: "Pal Pal",
        artist: "Afusic, Talwiinder"

    },
    { 
        src: "/audios/PARTYNEXTDOOR - Some Of Your Love (Lyrics) come give me some of your love.mp3",
        img: "/images/maxresdefault.jpg",
        title: "Some Of Your Love",
        artist: "PARTYNEXTDOOR"
    },
    {
        src: "/audios/FloyyMenor, Anitta, Ozuna - Gata Only Remix (Audio Oficial).mp3",
        img: "/images/maxresdefault-2.jpg",
        title: "Gata Only Remix",
        artist: "FloyyMenor, Anitta, Ozuna"
    }
];

let currentSongIndex = 0;
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn =document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const songImg = document.getElementById('songImg');
const progressBar = document.getElementById('progressBar');
const currentTime = document.getElementById('currentTime');
const durationTime = document.getElementById('durationTime');


playBtn.addEventListener('click', () => {
    audioPlayer.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
});

audioPlayer.addEventListener('pause', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
});

audioPlayer.addEventListener('play', () => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex].src;
    songImg.src = songs[currentSongIndex].img;
    loadSong(currentSongIndex);
    audioPlayer.play();
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex].src;
    songImg.src = songs[currentSongIndex].img;
    audioPlayer.play();
});

audioPlayer.addEventListener('ended', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
});
 audioPlayer.addEventListener('loadedmetadata', () => {
    durationTime.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('timeupdate', () => {
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
    currentTime.textContent = formatTime(audioPlayer.currentTime);
    durationTime.textContent = formatTime(audioPlayer.duration);
});

progressBar.addEventListener('input', () => {
    audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

window.addEventListener('DOMContentLoaded', () => {
    audioPlayer.src = songs[currentSongIndex].src;
    songImg.src = songs[currentSongIndex].img;
    loadSong(currentSongIndex);
});

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songImg.src = song.img;
    title.textContent = song.title;
    artist.textContent = song.artist;
}
 