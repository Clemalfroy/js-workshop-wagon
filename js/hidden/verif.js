//verifElements
const titleCheck = document.querySelector('#titleCheck')
const buttonClickedCheck = document.querySelector('#buttonClicked')
const hiddenSectionCheck = document.querySelector('#hiddenSectionCheck')
const bodyEditCheck = document.querySelector('#bodyEditCheck')
const imageBluredCheck = document.querySelector('#imageBluredCheck')
const removePopupCheck = document.querySelector('#removePopupCheck')
const wagonMoveCheck = document.querySelector('#wagonMoveCheck')
const soundCheck = document.querySelector('#soundCheck')


const validateElement = (element) => {
  element.innerText = 'Ok.'
}

//Checks functions

const titleIsValid = () => {
  const title = document.querySelector('h1')
  if (title.innerText !== 'Javascript Workshop - Hello World !') {
    validateElement(titleCheck)
  }
}

const buttonIsClicked = () => {
  const movingButton = document.querySelector('#movingButton')
  if (movingButton.innerText === "I have been clicked") {
    validateElement(buttonClickedCheck)
  }
}

const sectionIsNotHidden = () => {
  const hiddenSection = document.querySelector('#hiddenSection')
  if (!hiddenSection.hidden) {
    validateElement(hiddenSectionCheck)
  }
}

const bodyIsEditable = () => {
  if (document.body.contentEditable === "true") {
    validateElement(bodyEditCheck)
  }
}

const imageAreNotBlurred = () => {
  const images = Array.from(document.querySelectorAll('img'))
  if (images.every(img => img.style.filter === 'none')) {
  validateElement(imageBluredCheck)
  }
}

const payPopupIsRemoved = () => {
  const payPopup = document.querySelector('#payPopup')
  if (!payPopup) validateElement(removePopupCheck)
}

const wagonCanMove = () => {
  const logoImage = document.querySelector('#wagonLogo')
  const {x: currentPosition } = logoImage.getBoundingClientRect()
  document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight'}));
  const {x: newPosiionAfterRight } = logoImage.getBoundingClientRect()
  document.body.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowLeft'}));
  const {x: newPosiionAfterLeft } = logoImage.getBoundingClientRect()
  if (currentPosition < newPosiionAfterRight && newPosiionAfterRight > newPosiionAfterLeft) {
    validateElement(wagonMoveCheck)
  }
}

const soundPlayOnClick = () => {
  const allAudio = Array.from( document.querySelectorAll('audio') );
  const isPlaying = [...allAudio].some(item => !item.paused);
  if (isPlaying || navigator.mediaSession.playbackState === "playing") validateElement(soundCheck)
}

//Checks

setInterval(() => {
  titleIsValid()
  buttonIsClicked()
  sectionIsNotHidden()
  bodyIsEditable()
  imageAreNotBlurred()
  payPopupIsRemoved()
  soundPlayOnClick()
  wagonCanMove()
}, 1000);

