export default function Modal(){

  const modalBox = document.querySelector('.modal-box')
  const modal = document.querySelector('.modal')

  const cancelButton = document.querySelector('.button-grey.cancel')
  cancelButton.addEventListener("click", close)

  function open(){
    modalBox.classList.add("active")
    modal.classList.add("active")
  }
  function close(){
    modalBox.classList.remove("active")
    modal.classList.remove("active")
  }

  return{
    open,
    close

  }
}