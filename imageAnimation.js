(function imageChangerOnHover() {
  const bigImg = document.querySelector('.big_image');
  const imageCon = document.querySelectorAll('.images_small img');
  imageCon.forEach((img) => {
    img.addEventListener('click', () => {
      bigImg.src = img.src;
      imageCon.forEach((e) => {
        e.style.opacity = '0.5'
        if (e.src === bigImg.src) {
          e.style.opacity = '1'
        }
      })

    });

  });
})();

(function imageAnimationOnHover() {
  const imageCon = document.querySelectorAll('.images_small img');
  // On mouser over img
  imageCon.forEach((img) => {
    img.addEventListener('mouseover', () => {
      img.classList.add('on_hover');
    });
    // on mouse out of img
    img.addEventListener('mouseout', () => {
      img.classList.remove('on_hover');
    });
  });
})();
