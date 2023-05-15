function addHeader(){

    header=document.createElement('div')
    header.className = "header"
    navbar=document.createElement('div')
    navbar.className="navbar"

    index = document.createElement("a")
    photos = document.createElement("a")
    publication = document.createElement("a")
    contact = document.createElement("a")
    index.href = "index.html"
    index.innerHTML="Home"
    photos.href = "photos.html"
    photos.innerHTML="Photos"
    publication.href = "publications.html"
    publication.innerHTML="Publication"
    contact.href = "contact.html"
    contact.innerHTML="contact"

    navbar.appendChild(index)
    navbar.appendChild(photos)
    navbar.appendChild(publication)
    navbar.appendChild(contact)

    header.appendChild(navbar)
    document.body.appendChild(header)
}
addHeader()