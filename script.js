/* =========================================
   MUSIC
========================================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;


/* MUSIC BUTTON */

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {

        if (playing) {

            music.pause();

            playing = false;

            musicBtn.innerHTML = "♪";

        } else {

            music.play()
                .then(() => {

                    playing = true;

                    musicBtn.innerHTML = "♫";

                })
                .catch(error => {

                    console.log("Music could not start:", error);

                });

        }

    });

}

/* =================================
   ADULTHOOD GALLERY CONTROLS
================================= */

const adulthoodGallery =
    document.getElementById("adulthoodGallery");

const adultPrev =
    document.getElementById("adultPrev");

const adultNext =
    document.getElementById("adultNext");


if (adulthoodGallery && adultPrev && adultNext) {

    adultNext.addEventListener("click", () => {

        adulthoodGallery.scrollBy({
            left: 230,
            behavior: "smooth"
        });

    });


    adultPrev.addEventListener("click", () => {

        adulthoodGallery.scrollBy({
            left: -230,
            behavior: "smooth"
        });

    });

}

/* =========================================
   FLOATING HEARTS
========================================= */

const heartsContainer =
    document.getElementById("hearts-container");


function createHeart() {

    if (!heartsContainer) return;

    const heart =
        document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML =
        Math.random() > .5 ? "♥" : "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (10 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 7) + "s";

    heart.style.opacity =
        .3 + Math.random() * .5;

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 14000);

}

setInterval(createHeart, 1200);


/* =========================================
   BIRTHDAY POPUP
========================================= */

const celebrateBtn =
    document.getElementById("celebrateBtn");

const birthdayPopup =
    document.getElementById("birthdayPopup");

const closePopup =
    document.getElementById("closePopup");


if (celebrateBtn && birthdayPopup) {

    celebrateBtn.addEventListener("click", () => {

        birthdayPopup.classList.add("show");

        launchCelebration();

    });

}


if (closePopup && birthdayPopup) {

    closePopup.addEventListener("click", () => {

        birthdayPopup.classList.remove("show");

    });

}


if (birthdayPopup) {

    birthdayPopup.addEventListener("click", (event) => {

        if (event.target === birthdayPopup) {

            birthdayPopup.classList.remove("show");

        }

    });

}


/* =========================================
   CELEBRATION HEARTS
========================================= */

function launchCelebration() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createCelebrationHeart();

        }, i * 80);

    }

}


function createCelebrationHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top =
        (50 + Math.random() * 30) + "vh";

    heart.style.color = "#52c8ff";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.zIndex = "1000000";

    heart.style.pointerEvents = "none";

    heart.style.transition =
        "all 2.5s ease";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.style.transform =
            `translate(
                ${(Math.random() - .5) * 300}px,
                -${300 + Math.random() * 500}px
            )
            rotate(${Math.random() * 360}deg)`;

        heart.style.opacity = "0";

    }, 50);


    setTimeout(() => {

        heart.remove();

    }, 2700);

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".photo-card, .letter, .timeline-item, .section-title"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: .12
            }
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 1s ease, transform 1s ease";

        observer.observe(element);

    });

}


/* =========================================
   PARALLAX STARS
========================================= */

window.addEventListener("scroll", () => {

    const stars =
        document.querySelector(".stars");

    if (stars) {

        stars.style.transform =
            `translateY(${window.scrollY * .08}px)`;

    }

});


/* =========================================
   DOUBLE CLICK HERO
========================================= */

const hero =
    document.querySelector(".hero");

if (hero) {

    hero.addEventListener("dblclick", () => {

        launchCelebration();

    });

}


/* =================================================
   ❤️ SURPRISE VIDEO
================================================= */

const videoPopup =
    document.getElementById("videoPopup");

const surpriseVideoPlayer =
    document.getElementById("surpriseVideoPlayer");


/* OPEN VIDEO */

function showMyVideo() {

    console.log("❤️ Surprise button clicked!");

    if (!videoPopup) {

        console.error("videoPopup not found!");

        return;

    }

    if (!surpriseVideoPlayer) {

        console.error("surpriseVideoPlayer not found!");

        return;

    }


    /* Show popup */

    videoPopup.classList.add("active");


    /* Start video from beginning */

    surpriseVideoPlayer.currentTime = 0;


    /* Sound ON */

    surpriseVideoPlayer.muted = false;

    surpriseVideoPlayer.volume = 1;


    /* Try to play */

    const playPromise =
        surpriseVideoPlayer.play();


    if (playPromise !== undefined) {

        playPromise
            .then(() => {

                console.log("❤️ VIDEO PLAYING WITH SOUND");

            })
            .catch(error => {

                console.error(
                    "Video autoplay/play error:",
                    error
                );

                /*
                   If browser blocks playback,
                   the video popup still appears.
                   The user can press Play manually.
                */

            });

    }

}


/* CLOSE VIDEO */

function closeSurpriseVideo() {

    if (!videoPopup || !surpriseVideoPlayer) {

        return;

    }


    surpriseVideoPlayer.pause();

    surpriseVideoPlayer.currentTime = 0;

    videoPopup.classList.remove("active");

}


/* CLICK OUTSIDE VIDEO */

if (videoPopup) {

    videoPopup.addEventListener("click", function(event) {

        if (event.target === videoPopup) {

            closeSurpriseVideo();

        }

    });

}


/* ESCAPE KEY */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeSurpriseVideo();

    }

});
