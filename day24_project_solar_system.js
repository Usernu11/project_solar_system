// creating HTML elements
const spaceBg = document.createElement('div')
const iFrame = document.createElement('iframe')
const contentWrapper = document.createElement('div')
const titleEl = document.createElement('h1')
const calcPannel = document.createElement('div')
const input = document.createElement('input')
const select = document.createElement('select')
const button = document.createElement('button')
const resultWrapper = document.createElement('div')
const planetInfo = document.createElement('div')
const planetIMG = document.createElement('div')
const weightInfoEl = document.createElement('div')

// planet consts
const mercury = 3.7
const venus = 8.87
const earth = 9.8
const mars = 3.7
const jupiter = 24.8
const saturn = 10.4
const uranus = 8.87
const neptune = 10.15
const pluto = 0.66

// appending HTML elements
document.body.appendChild(spaceBg)
document.body.appendChild(contentWrapper)
contentWrapper.appendChild(titleEl)
contentWrapper.appendChild(calcPannel)
calcPannel.appendChild(input)
calcPannel.appendChild(select)
calcPannel.appendChild(button)
contentWrapper.appendChild(resultWrapper)
resultWrapper.appendChild(planetInfo)

// applying styles and filling content
const styles = {
    spaceBg: {
        backgroundImage: `url('img/space.jpg')`,
        backgroundSize: '100%',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        zIndex: '-1'
    },
    body: {
        margin: '0',
        fontFamily: 'sans-serif',
    },
    contentWrapper: {
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleEl: {
        color: 'white',
        textShadow: '2px 2px 0px blue',
        fontSize: '50px',
        textAlign: 'center',
        margin: '0',
        padding: '40px 0'
    },
    calcPannel: {
        margin: '100px 0 25px 0',
        width: '60%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    input: {
        height: '30px',
        padding: '0 10px',
        outline: 'none',
        borderRadius: '5px',
        border: 'none'
    },
    select: {
        height: '30px',
        width: '180px',
        borderRadius: '5px',
        padding: '5px',
        color: 'gray',
        border: 'none'
    },
    button: {
        padding: '0 10px',
        height: '30px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: 'rgba(180 , 180, 180 , .5)',
        color: 'white',
        border: 'none'
    },
    resultWrapper: {
        width: '100%',
        height: '200px',
        backgroundColor: 'rgba(120 , 120, 120 , .3)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        height: 'auto',
        padding: '30px'
    },
    planetInfo: {
        color: 'white',
        width: '50%',
        height: '100px',
        textAlign: 'center',
        fontSize: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(120 , 120, 120 , .5)'
    },
    planetIMG: {
        width: '300px',
        height: '300px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        marginRight: '20px',
        display: 'block',
        backgroundPosition: 'center'
    },
    weightInfoEl: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: 'rgba(180 , 180, 180 , .6)',
        fontSize: '35px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        textShadow: '1px 1px 0 white'
    }
}

const stylesButtonClick = {
    planetInfo: {
        height: 'auto',
        padding: '10px',
        display: 'flex',
        boxShadow: 'none'
    },
    resultWrapper: {
        height: '300px'
    },
    planetIMG: {
        backgroundPosition: 'center'
    }
}

Object.assign(spaceBg.style, styles.spaceBg)
Object.assign(body.style, styles.body)
Object.assign(contentWrapper.style, styles.contentWrapper)
Object.assign(titleEl.style, styles.titleEl)
Object.assign(calcPannel.style, styles.calcPannel)
Object.assign(input.style, styles.input)
Object.assign(select.style, styles.select)
Object.assign(button.style, styles.button)
Object.assign(resultWrapper.style, styles.resultWrapper)
Object.assign(planetInfo.style, styles.planetInfo)
Object.assign(planetIMG.style, styles.planetIMG)
Object.assign(weightInfoEl.style, styles.weightInfoEl)

titleEl.textContent = 'Calculate weight of an object on a planet'
input.placeholder = 'Mass in Kilogram'
button.textContent = 'Calculate weight'
planetInfo.textContent = 'Mass is required'

// filling select of options
for (let i = 0; i < 10; i++) {
    const newOption = document.createElement('option')
    select.appendChild(newOption)
    switch (i) {
        case 0: newOption.textContent = '- - select planet - - 🌏'
            break

        case 1: newOption.textContent = 'Mercury'
            break

        case 2: newOption.textContent = 'Venus'
            break

        case 3: newOption.textContent = 'Earth'
            break

        case 4: newOption.textContent = 'Mars'
            break

        case 5: newOption.textContent = 'Jupiter'
            break

        case 6: newOption.textContent = 'Saturn'
            break

        case 7: newOption.textContent = 'Uranus'
            break

        case 8: newOption.textContent = 'Neptune'
            break

        case 9: newOption.textContent = 'Pluto'
            break
    }
}

// work with eventListeners
const getSelect = document.querySelector('select')
let getInputValue = input.value
let getOptionValue = getSelect.value

input.addEventListener('focus', e => {
    input.style.boxShadow = 'inset 0 0 5px 1px blue'

})

getSelect.addEventListener('focus', e => {
    select.style.boxShadow = 'inset 0 0 5px 1px blue'
})

getSelect.addEventListener('change', e => {
    getOptionValue = e.target.value
    select.style.boxShadow = 'inset 0 0 5px 1px blue'
    planetInfo.style.display = 'none'
    resultWrapper.appendChild(planetIMG)

    switch (getOptionValue) {
        case 'Mercury':
            planetIMG.style.backgroundImage = 'url("img/planets/mercury.png")'
            break

        case 'Venus':
            planetIMG.style.backgroundImage = 'url("img/planets/venus.png")'
            break

        case 'Earth':
            planetIMG.style.backgroundImage = 'url("img/planets/earth.png")'
            break

        case 'Mars':
            planetIMG.style.backgroundImage = 'url("img/planets/mars.png")'
            break

        case 'Jupiter':
            planetIMG.style.backgroundImage = 'url("img/planets/jupiter.png")'
            break

        case 'Saturn':
            planetIMG.style.backgroundImage = 'url("img/planets/saturn.png")'
            break

        case 'Uranus':
            planetIMG.style.backgroundImage = 'url("img/planets/uranus.png")'
            break

        case 'Neptune':
            planetIMG.style.backgroundImage = 'url("img/planets/neptune.png")'
            break

        case 'Pluto':
            planetIMG.style.backgroundImage = 'url("img/planets/pluto.png")'
            break
    }
})

input.addEventListener('input', e => {
    if (getOptionValue === '- - select planet - - 🌏') {
        planetInfo.textContent = 'Planet is required 🌏'
    }

    if (input.value === '') {
        planetInfo.textContent = 'Mass is required'
    }

    if (input.value.toLowerCase() === 'one') {
        input.value = 1
    }

    if (input.value.toLowerCase() === 'two') {
        input.value = 2
    }

    if (input.value.toLowerCase() === 'three') {
        input.value = 3
    }

    if (input.value.toLowerCase() === 'four') {
        input.value = 4
    }

    if (input.value.toLowerCase() === 'five') {
        input.value = 5
    }

    if (input.value.toLowerCase() === 'six') {
        input.value = 6
    }

    if (input.value.toLowerCase() === 'seven') {
        input.value = 7
    }

    if (input.value.toLowerCase() === 'eight') {
        input.value = 8
    }

    if (input.value.toLowerCase() === 'nine') {
        input.value = 9
    }

    if (input.value.toLowerCase() === 'ten') {
        input.value = 10
    }

    if (input.value.toLowerCase() === 'eleven') {
        input.value = 11
    }

    if (input.value.toLowerCase() === 'twelf') {
        input.value = 12
    }

    if (input.value.toLowerCase() === 'twenty') {
        input.value = 20
    }

    if (input.value.toLowerCase() === 'thirty') {
        input.value = 30
    }

    if (input.value.toLowerCase() === 'fourty') {
        input.value = 40
    }

    if (input.value.toLowerCase() === 'fifty') {
        input.value = 50
    }

    if (input.value.toLowerCase() === 'sixty') {
        input.value = 60
    }

    if (input.value.toLowerCase() === 'seventy') {
        input.value = 70
    }

    if (input.value.toLowerCase() === 'eighty') {
        input.value = 80
    }

    if (input.value.toLowerCase() === 'ninety') {
        input.value = 90
    }

    getInputValue = input.value
})

button.addEventListener('click', () => {
    button.style.boxShadow = 'inset 0 0 5px 1px blue'

    if (getInputValue !== '') {
        switch (getOptionValue) {
            case '- - select planet - - 🌏':
                planetInfo.style.display = 'flex'
                planetInfo.textContent = 'Planet is required 🌏'
                planetInfo.style.boxShadow = 'inset 0 0 10px 1px red'
                planetIMG.style.display = 'none'
                break

            case 'Mercury':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * mercury).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Venus':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * venus).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Earth':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * earth).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Mars':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * mars).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Jupiter':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * jupiter).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Saturn':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * saturn).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                Object.assign(planetIMG.style, stylesButtonClick.planetIMG)
                break

            case 'Uranus':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * uranus).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Neptune':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * neptune).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break

            case 'Pluto':
                planetInfo.textContent = `The weight of the object on ${getOptionValue.toUpperCase()}`
                weightInfoEl.textContent = `${(getInputValue * pluto).toFixed(2)} N`
                planetInfo.appendChild(weightInfoEl)
                Object.assign(planetInfo.style, stylesButtonClick.planetInfo)
                Object.assign(resultWrapper.style, stylesButtonClick.resultWrapper)
                break
        }
    } else {
        planetInfo.style.display = 'flex'
        planetInfo.style.boxShadow = 'inset 0 0 10px 1px red'
    }
})

// work time: 3h : 37m
// additional time for changes ↓ (1h : 23m)
// total work time: 5h

// make changes
// 1. gifs for bg ❌
// 2. box-shadow for focudes input, select, button ✅
// 3. allow input apply words like 'ten' and convert then to numbers (maybe not all words, short) ✅
// 4. add mark to textContent in option which selected ?❌
// 5. add spinned planet gifs ❌
// 6. make planets bigger ✅
// 7. code optimization ✅

app.get('/pss/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'pss', 'styles.css'));
  });
  