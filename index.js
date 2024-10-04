const button = '.button-class'
const buttonAction = document.querySelector(button)
const input = '.input-class'
const addInput = document.querySelector(input)
const form = '.form-class'


function elementFromHtml(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  return template.content.firstElementChild
}

const myList = elementFromHtml(`
  <ul>
    <li>List Item</li>
  </ul>
  `)

  // console.log(myList)

document.body.appendChild(myList)

buttonAction.addEventListener('click', () => {
  const ul = form.querySelector('ul')
  const li = document.createElement('li')
  li.innerHTML = addInput.value
  ul.appendChild(li)
})
