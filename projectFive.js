const container = document.querySelector("#container")
const sunButton = document.querySelector("#sunButton")

sunButton.addEventListener('click', e => {
  console.log("Button pressed!")
  container.innerHTML = `<a-sphere color="blue" radius="100" position="0 0 0">`
})