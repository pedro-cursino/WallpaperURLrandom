function redirect() {
    let pages = ["../Steven Universo/index.html", "../Chainsaw Man/01.html", "../Vagabond/02.html", "../Junji Ito/03.html",
        "../Berserk/04.html", "../Tokyo Ghoul/05.html", "../Miku/06.html"];
    let randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}
setTimeout(redirect, 60000);