const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo_corona.png'

const table = document.createElement('table')
table.setAttribute('class', 'table is-fullwidth is-striped')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(table)
app.appendChild(container)

// inside table
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const th_lokasi = document.createElement('th')
th_lokasi.textContent = `Lokasi`
const th_positif = document.createElement('th')
th_positif.textContent = `Positif`
const th_sembuh = document.createElement('th')
th_sembuh.textContent = `Sembuh`
const th_meninggal = document.createElement('th')
th_meninggal.textContent = `Meninggal`

const tbody = document.createElement('tbody')
// apendChildTable
table.appendChild(thead)
table.appendChild(tbody)
// apendChildThead
thead.appendChild(tr)
// apendChildTr
tr.appendChild(th_lokasi)
tr.appendChild(th_positif)
tr.appendChild(th_sembuh)
tr.appendChild(th_meninggal)

var request_indo = new XMLHttpRequest()
request_indo.open('GET', 'https://api.kawalcorona.com/indonesia/', true)
request_indo.onload = function() {
    // Begin accessing JSON data here
    var data_indo = JSON.parse(this.response)
    if (request_indo.status >= 200 && request_indo.status < 400) {
        data_indo.forEach(Negara => {
            const tr_indo = document.createElement('tr')
            const td_lokasi_n = document.createElement('td')
            td_lokasi_n.textContent = Negara.name
            const td_positif_n = document.createElement('td')
            td_positif_n.textContent = Negara.positif
            const td_sembuh_n = document.createElement('td')
            td_sembuh_n.textContent = Negara.sembuh
            const td_meninggal_n = document.createElement('td')
            td_meninggal_n.textContent = Negara.meninggal

            tbody.appendChild(tr_indo)
            tr_indo.appendChild(td_lokasi_n)
            tr_indo.appendChild(td_positif_n)
            tr_indo.appendChild(td_sembuh_n)
            tr_indo.appendChild(td_meninggal_n)
        })
    }
    else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

var request = new XMLHttpRequest()
request.open('GET', 'https://api.kawalcorona.com/indonesia/provinsi/', true)
request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(Kota => {
            // console.log(Kota.attributes.Provinsi)

            const tr_body = document.createElement('tr')
            const td_lokasi = document.createElement('td')
            td_lokasi.textContent = Kota.attributes.Provinsi
            const td_positif = document.createElement('td')
            td_positif.textContent = Kota.attributes.Kasus_Posi
            const td_sembuh = document.createElement('td')
            td_sembuh.textContent = Kota.attributes.Kasus_Semb
            const td_meninggal = document.createElement('td')
            td_meninggal.textContent = Kota.attributes.Kasus_Meni

            tbody.appendChild(tr_body)
            tr_body.appendChild(td_lokasi)
            tr_body.appendChild(td_positif)
            tr_body.appendChild(td_sembuh)
            tr_body.appendChild(td_meninggal)

        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request.send()
request_indo.send()