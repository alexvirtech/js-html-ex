const temp = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ad est enim eum similique esse aspernatur tempora molestias mollitia accusantium incidunt nam atque inventore eius minima, eveniet praesentium at sunt!'

const data = [
    { 
        type: 'title',
        value: 'Hello World'
    },
    { 
        type: 'text',
        value: temp
    },
    { 
        type: 'columns',
        value: [temp,temp,temp]
    },
    { 
        type: 'image',
        value: './inc/braude.jpg'
    }
]

const col = v => {
    return `<div class="col-sm">${v}</div>`
}

const row = v => {
    return `<div class="row">${v}</div>`
}

const renderContent = (d) => {
    const content = document.querySelector('.content')
    d.forEach(item => {
        let el
        switch(item.type) {
            case 'title':
                el = row(col(`<h1>${item.value}</h1>`))
                break
            case 'text':
                el = row(col(`${item.value}`))
                break
            case 'columns':
                const cols = item.value.map(c=>col(c)).join('')
                el = row(cols)
                break
            case 'image':
                el = row(col(`<img src="${item.value}" class="img-fluid" />`))
                break
        }
        content.insertAdjacentHTML('beforeend', el)
    })
}

renderContent(data)