// Tager fat i alle HTML elementerne vi skal bruge
const left = document.querySelector('.arrow__left')
const right = document.querySelector('.arrow__right')
const bigImg = document.querySelector('.big_image')

//Tager fat i ALLE elementer med class (.images_small) og HTML element img
const thumbnails = document.querySelectorAll('.images_small img')

// Bruges til at sætte tal på, på det billede vi skal bruge med arrows
let index = 0

// Lytter efter 'click' på de elementer vi har taget fat i 
//Når der bliver klikket sender den info fra hvilket thumbnail der blev klikket med
//cangePhotoClick(billedet[nummer af billedet])
//
//i er 0, mens i er mindre end thumbnails længde, kør denne loop, plus 1 til i
//efter hvert loop
for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', () => {
        changePhotoClick(thumbnails[i])
        index = i
        setActive(index)
    })
}

//Lytter efter clicks på arrows og køre functioner
right.addEventListener('click', () => {
    changePhotoArrowRight()
})

left.addEventListener('click', () => {
    changePhotoArrowLeft()
})

//function for at skifte src på bigImg med brug af vores index variable -
//og som bliver kørt når vi trykker på arrows
function changePhotoArrowRight() {
    if (index >= 4){
        index = 0
    } else {
        index++
    }
    let newSrc = thumbnails[index].getAttribute('src')
    bigImg.setAttribute('src', newSrc)
    setActive(index)
}

function changePhotoArrowLeft() {
    if (index === 0){
        index = 4
    } else {
        index--
    }
    let newSrc = thumbnails[index].getAttribute('src')
    bigImg.setAttribute('src', newSrc)
    setActive(index)
}

//function når thumbnails bliver klikket.
//e er en parameter som indholder thumbnail information som bliver sendt af
//for løkken længere oppe
function changePhotoClick(e) {

    //Skifter det store billede (bigImg) src med src fra thumbnail der blev send (e)
    bigImg.setAttribute('src', e.src)
   
}

//function for at sætte border på de valgte billeder
//og fjerne border på sidste aktive billed
function setActive(dataNumber) {
    //Gemmer det nuværende aktive billede in en variable
    let currentActive = document.querySelector(`[data-number="${dataNumber}"]`)

    //Gemmer det aktive billede i en variable
    let lastActive = document.querySelector('.active')

    //Hvis det klikkede billede (e) 
    //ikke er lige med det sidste aktive billede (lastActive)
    if (dataNumber !== lastActive) {

        //Sidste aktive får fjernet sin border
        lastActive.classList.remove('active')

        //Den nye klikkede får en border
        currentActive.classList.add('active')
    } 
}


// (function imageChangerOnHover() {
//   const bigImg = document.querySelector('.big_image');
//   const imageCon = document.querySelectorAll('.images_small img');
//   imageCon.forEach((img) => {
//     img.addEventListener('click', () => {
//       bigImg.src = img.src;
//       imageCon.forEach((e) => {
//         e.style.opacity = '0.5'
//         if (e.src === bigImg.src) {
//           e.style.opacity = '1'
//         }
//       })

//     });

//   });
// })();

// (function imageAnimationOnHover() {
//   const imageCon = document.querySelectorAll('.images_small img');
//   // On mouser over img
//   imageCon.forEach((img) => {
//     img.addEventListener('mouseover', () => {
//       img.classList.add('on_hover');
//     });
//     // on mouse out of img
//     img.addEventListener('mouseout', () => {
//       img.classList.remove('on_hover');
//     });
//   });
// })();
