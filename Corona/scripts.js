const app = document.getElementById('root')

const chart_id = document.createElement('canvas')
chart_id.setAttribute('id', 'myChart')
chart_id.style.marginBottom = '35px'
const arr_lokasi = []
const data_posi = []
const data_semb = []
const data_meni = []

const logo = document.createElement('img')
logo.src = 'logo_corona.png'

const table = document.createElement('table')
table.setAttribute('class', 'table is-fullwidth is-striped')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(chart_id)
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

// chart provinsi

var request_data = new XMLHttpRequest()
request_data.open('GET', 'https://api.kawalcorona.com/indonesia/provinsi/', true)
request_data.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request_data.status >= 200 && request_data.status < 400) {
        data.forEach(Kota => {
            // console.log(Kota.attributes.Provinsi)

            arr_lokasi.push(Kota.attributes.Provinsi)
            data_posi.push(Kota.attributes.Kasus_Posi)
            data_semb.push(Kota.attributes.Kasus_Semb)
            data_meni.push(Kota.attributes.Kasus_Meni)
            

        })

        const ctx = document.getElementById('myChart').getContext('2d');
        const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: arr_lokasi,
            datasets: [
                {
                    label: 'Positif',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data_posi
                },
                {
                    label: 'Sembuh',
                    backgroundColor: 'rgb(66, 203, 245)',
                    borderColor: 'rgb(66, 203, 245)',
                    data: data_semb
                },
                {
                    label: 'Meninggal',
                    backgroundColor: 'rgb(245, 221, 66)',
                    borderColor: 'rgb(245, 221, 66)',
                    data: data_meni
                }
            ]
        },

        // Configuration options go here
        options: {}
        });

    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
}

request_data.send()

