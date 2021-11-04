const orelsanSound = new Audio('../../assets/lol.mp3');

const updateMovingButtonPosition = (mouseX, mouseY) => {
  const movingButton = document.querySelector('#movingButton')
  const { x, y, width, height } = movingButton.getBoundingClientRect()
  const mainContent = document.querySelector('#mainContent')
  const boundingRectDiv = mainContent.getBoundingClientRect()
  if ((mouseX < x + width + 20 && mouseX > x - 20) && (mouseY < y + height + 20 && mouseY > y - 20 )) {
    movingButton.style.left = `${Math.random() * boundingRectDiv.width - width}px`
  }
}

const handleMouseMove = (mouseEvent) => {
  updateMovingButtonPosition(mouseEvent.clientX, mouseEvent.clientY)
}

const movingButton = document.querySelector('#movingButton')

const addBlur = (imgElement) => {
  imgElement.style.filter = 'blur(5px)';
}

document.querySelectorAll('img:not(.unblurred)').forEach(imgElement => {
  addBlur(imgElement)
});

movingButton.addEventListener('click', () => {
  movingButton.dataset.clicked = true
  movingButton.innerText = 'I have been clicked'
  setTimeout(() => {
    orelsanSound.play()
  }, 1000);
})

document.body.addEventListener('mousemove', handleMouseMove)