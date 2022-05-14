import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const deleteButtons = document.querySelectorAll(".buttons .delete")

deleteButtons.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false))
})

const checkButtons = document.querySelectorAll(".buttons .check")

checkButtons.forEach(button => {
  button.addEventListener("click", handleClick)
})

function handleClick(event, check = true) {
  const text = check ? "Marcar como lida" : "Excluir"
  const slug = check ? "check" : "delete"
  const roomId = document.querySelector("#room-id").dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector(".modal form")
  form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = text
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()}?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

  modal.open()
}