galleryImages = [
    "2021-08-27-rainyday",
    "2022-08-14-ayano",
    "2023-05-28-balloons",
    "2023-08-19-rainyday",
    "bioshock_elizabeth",
    "haedos",
    "halloween2020",
    "morte-1",
    // "morte-2",
    // "morte-3",
    // "morte-4",
    "PERSONA3_revealtheworld",
    "pollyandoz",
    "rcs-giardino-int",
    "sometimeswejustfindthings",
    "umbrellalady"
]

function feedGallery (images) {
    const ul = document.getElementById("art-gallery")

    images.forEach(e => {
        ul.innerHTML += '\
            <li>\
                <img src="../assets/img/art/'+e+'.png">\
            </li>\
        ';
    });
}

feedGallery(galleryImages);