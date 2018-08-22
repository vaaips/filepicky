export default function filepicky(options) {
  const picker = document.querySelector(options.picker)
  const input = document.querySelector(options.input)

  input.setAttribute('hidden', true)

  picker.addEventListener('click', () => {
    input.click()
  })
}
