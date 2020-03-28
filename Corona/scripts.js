const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo_corona.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.kawalcorona.com/indonesia/provinsi/', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
    data.forEach(Kota => {
        // console.log(Kota.attributes.Provinsi)
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = Kota.attributes.Provinsi

        const p = document.createElement('p')
        Kota.attributes.Kasus_Posi = Kota.attributes.Kasus_Posi.toString()
        // Kota.attributes.Kasus_Posi = Kota.attributes.Kasus_Posi.substring(0, 300)
        p.textContent = `Kasus Positif : ${Kota.attributes.Kasus_Posi}`
        

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
    })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()