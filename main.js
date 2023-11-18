// code reference https://github.com/bradtraversy/50projects50days/


const sliderContainer = document.querySelector('.slider-container'); // Get the slider container element
const slideRight = document.querySelector('.right-slide'); // Get the right slide element
const slideLeft = document.querySelector('.left-slide'); // Get the left slide element
const upButton = document.querySelector('.up-button'); // Get the up button element
const downButton = document.querySelector('.down-button'); // Get the down button element

const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0;

// Initially position the left slide at the bottom
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add click event listeners for navigation buttons
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// define the changeSlide() which we have called above on click event
function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight; // Get the height of the slider container

  if (direction === 'up') {
    // Move to the next slide
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      // Reset to the first slide if reaching the end
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    // Move to the previous slide
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      // Wrap to the last slide if going beyond the beginning
      activeSlideIndex = slidesLength - 1;
    }
  }

  // Update the positions of the right and left slides based on the active slide index
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}