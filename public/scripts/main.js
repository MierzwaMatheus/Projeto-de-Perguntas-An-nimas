import  Modal  from './modal.js'

const modal = Modal()

const deleteButtons = document.querySelectorAll(".buttons .delete")

deleteButtons.forEach(button => {
  button.addEventListener("click", event => {
    modal.open()
  })
})

const checkButtons = document.querySelectorAll(".buttons .check")

checkButtons.forEach(button => {
  button.addEventListener("click", event => {
    modal.open()
  })
})

