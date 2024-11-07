document.addEventListener("DOMContentLoaded", function () {
    // Quotes yang berubah otomatis
    const quotes = [
        "aku tidak akan pernah lupa,dimana hari itu aku mulai menyukaimu.",
        "banyak hal yang indah di bumi salah satunya kamu.",
        "cinta ga selalu tentang memiliki, bisa saja hanya mengagumi.",
        "dia adalah ketidakmungkinan yang selama ini selalu ku semogakan.",
        "melupakan itu tidak semudah menemukannya.",
        "dunia ga perlu tahu dia siapa, tapi dunia harus tahu dia istimewa.",
        "bagaimanapun ujungnya senang bisa mengenalmu.",
    ];

    let quoteIndex = 0;
    const quoteText = document.getElementById("changing-quote");

    function changeQuote() {
        quoteText.style.opacity = 0;
        setTimeout(() => {
            quoteText.textContent = quotes[quoteIndex];
            quoteText.style.opacity = 1;
            quoteIndex = (quoteIndex + 1) % quotes.length;
        }, 500);
    }
    setInterval(changeQuote, 5000);
    

    // Kontrol musik autoplay
    const music = document.getElementById("background-music");
    const toggleMusicButton = document.getElementById("toggle-music");

    toggleMusicButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            toggleMusicButton.textContent = "Matikan Musik";
        } else {
            music.pause();
            toggleMusicButton.textContent = "Nyalakan Musik";
        }
    });

    // Kontrol mode gelap
    const toggleDarkModeButton = document.getElementById("toggle-darkmode");
    toggleDarkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Set volume musik
    music.volume = 0.2;
});
