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

const columns = document.createElement('div')
columns.setAttribute('class', 'columns is-multiline is-mobile')

const columns_indo = document.createElement('div')
columns_indo.setAttribute('class', 'columns')

app.appendChild(logo)
app.appendChild(chart_id)
app.appendChild(columns_indo)
app.appendChild(columns)
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
            const column_indo = document.createElement('div')
            column_indo.setAttribute('class', 'column')

            const card_indo = document.createElement('div')
            card_indo.setAttribute('class', 'card')

            const card_content_indo = document.createElement('div')
            card_content_indo.setAttribute('class', 'card-content')
            
            const p_content_indo = document.createElement('p')
            p_content_indo.setAttribute('class', 'title')
            p_content_indo.textContent = Negara.name

            const footer_indo = document.createElement('footer')
            footer_indo.setAttribute('class', 'card-footer')

            const p_positif_indo = document.createElement('p')
            p_positif_indo.setAttribute('class', 'card-footer-item')

            const span_danger_indo = document.createElement('span')
            span_danger_indo.setAttribute('class', 'tag is-danger')
            span_danger_indo.textContent = `Positif`

            const span_posi_indo = document.createElement('span')
            span_posi_indo.setAttribute('class', 'tag')
            span_posi_indo.textContent = Negara.positif

            const p_sembuh_indo = document.createElement('p')
            p_sembuh_indo.setAttribute('class', 'card-footer-item')
            
            const span_primary_indo = document.createElement('span')
            span_primary_indo.setAttribute('class', 'tag is-primary')
            span_primary_indo.textContent = `Sembuh`

            const span_semb_indo = document.createElement('span')
            span_semb_indo.setAttribute('class', 'tag')
            span_semb_indo.textContent = Negara.sembuh

            const p_meni_indo = document.createElement('p')
            p_meni_indo.setAttribute('class', 'card-footer-item')

            const span_warning_indo = document.createElement('span')
            span_warning_indo.setAttribute('class', 'tag is-warning')
            span_warning_indo.textContent = `Meninggal`

            const span_meni_indo = document.createElement('span')
            span_meni_indo.setAttribute('class', 'tag')
            span_meni_indo.textContent = Negara.meninggal

            columns_indo.appendChild(column_indo)
            column_indo.appendChild(card_indo)
            card_indo.appendChild(card_content_indo)
            card_content_indo.appendChild(p_content_indo)
            card_indo.appendChild(footer_indo)
            footer_indo.appendChild(p_positif_indo)
            p_positif_indo.appendChild(span_danger_indo)
            p_positif_indo.appendChild(span_posi_indo)
            footer_indo.appendChild(p_sembuh_indo)
            p_sembuh_indo.appendChild(span_primary_indo)
            p_sembuh_indo.appendChild(span_semb_indo)
            footer_indo.appendChild(p_meni_indo)
            p_meni_indo.appendChild(span_warning_indo)
            p_meni_indo.appendChild(span_meni_indo)

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
            // console.log(data.length)

            const column = document.createElement('div')
            column.setAttribute('class', 'column')

            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const card_content = document.createElement('div')
            card_content.setAttribute('class', 'card-content')
            
            const p_content = document.createElement('p')
            p_content.setAttribute('class', 'title')
            p_content.textContent = Kota.attributes.Provinsi

            const footer = document.createElement('footer')
            footer.setAttribute('class', 'card-footer')

            const p_positif = document.createElement('p')
            p_positif.setAttribute('class', 'card-footer-item')

            const span_danger = document.createElement('span')
            span_danger.setAttribute('class', 'tag is-danger')
            span_danger.textContent = `Positif`

            const span_posi = document.createElement('span')
            span_posi.setAttribute('class', 'tag')
            span_posi.textContent = Kota.attributes.Kasus_Posi

            const p_sembuh = document.createElement('p')
            p_sembuh.setAttribute('class', 'card-footer-item')
            
            const span_primary = document.createElement('span')
            span_primary.setAttribute('class', 'tag is-primary')
            span_primary.textContent = `Sembuh`

            const span_semb = document.createElement('span')
            span_semb.setAttribute('class', 'tag')
            span_semb.textContent = Kota.attributes.Kasus_Semb

            const p_meni = document.createElement('p')
            p_meni.setAttribute('class', 'card-footer-item')

            const span_warning = document.createElement('span')
            span_warning.setAttribute('class', 'tag is-warning')
            span_warning.textContent = `Meninggal`

            const span_meni = document.createElement('span')
            span_meni.setAttribute('class', 'tag')
            span_meni.textContent = Kota.attributes.Kasus_Meni

            columns.appendChild(column)
            column.appendChild(card)
            card.appendChild(card_content)
            card_content.appendChild(p_content)
            card.appendChild(footer)
            footer.appendChild(p_positif)
            p_positif.appendChild(span_danger)
            p_positif.appendChild(span_posi)
            footer.appendChild(p_sembuh)
            p_sembuh.appendChild(span_primary)
            p_sembuh.appendChild(span_semb)
            footer.appendChild(p_meni)
            p_meni.appendChild(span_warning)
            p_meni.appendChild(span_meni)

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

