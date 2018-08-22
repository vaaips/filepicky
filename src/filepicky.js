export default function filepicky(options) {
  document.querySelector(options.picker)
    .addEventListener('click', () => {
    document.querySelector(options.input).click()
  })
}
