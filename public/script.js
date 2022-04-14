// Populating contact cards
const contactTemplate = document.querySelector("[data-contact-card]")
const contactCards = document.querySelector(".contact-cards")

let contacts = []

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        contacts = data.map(element => {
            let card = contactTemplate.content.cloneNode(true).children[0]
            let name = card.querySelector(".name")
            let email = card.querySelector(".email")

            name.textContent = element.name
            email.textContent = element.email

            contactCards.append(card)

            return { name: element.name, email: element.email, element: card }
        })
    })

// Event listener for search bar
const searchInput = document.querySelector("#search")

searchInput.addEventListener("input", e => {
    let value = e.target.value.toLowerCase()
    contacts.forEach(contact => {
        let isVisible = contact.name.toLowerCase().includes(value) || contact.email.toLowerCase().includes(value)
        contact.element.classList.toggle("hide", !isVisible)
    })
})