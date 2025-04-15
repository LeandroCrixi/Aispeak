import { createElement } from "./utils.js"

const phoneScreen = () => {
    const phone = document.querySelector('.phone')

    const divMejor = createElement('div', { class: 'mejor font-2' })
    const pMejor = createElement('p', {}, 'Mejor opción')
    divMejor.appendChild(pMejor)

    const elements = [
        createElement('h1', { class: 'font-1' }, 'No espere más y llevemos tu nivel de Inglés al más alla!'),
        featureList(),
        createElement('h2', { class: "font-3" }, 'Elige un plan'),
        divMejor,
        planSelection(),
        toggle(),
        createElement('a', { class: "btn" }, 'Suscribite'),
        footer()
    ]

    elements.forEach(el => phone.appendChild(el))
}

const featureList = () => {
    const unorderedList = createElement('ul', { class: "font-2" })
    const elements = [
        createElement('li', {}, 'Chat sin límites'),
        createElement('li', {}, 'Temas de conversación infinitos'),
        createElement('li', {}, 'Mensajes de voz ilimitados'),
        createElement('li', {}, 'Correcciones al instante'),
        createElement('li', {}, 'Práctica diaria desde nivel A1 hasta C2'),
    ]

    elements.forEach(el => unorderedList.appendChild(el))
    return unorderedList
}

const planSelection = () => {
    const letFormPlan = createElement('form', { class: "font-3" })

    const div1 = createElement('div')
    const inputAnual = createElement('input', { type: "radio", id: "anual", name: "options", value: "anual", checked: 'checked' })
    const labelAnual = createElement('label', { for: "anual" }, 'Anual')
    const pAnual = createElement('p', { class: "font-2" })
    pAnual.innerHTML = '€69,99/año <span>(€5,83/mes)</span><span class="blue"> Ahorra €25!</span>'

    const div2 = createElement('div')
    const inputMes = createElement('input', { type: "radio", id: "mes", name: "options", value: "mes" })
    const labelMes = createElement('label', { for: "mes" }, 'Mes')
    const pMes = createElement('p', { class: "font-2" }, '€7,99/mes')

    div1.append(inputAnual, labelAnual, pAnual)
    div2.append(inputMes, labelMes, pMes)
    letFormPlan.append(div1, div2)

    return letFormPlan
}

const toggle = () => {
    const div = createElement('div', { class: "toggle" })
    const pFree = createElement('p', { class: "font-2" })
    pFree.innerHTML = 'Activar <strong>prueba gratuita</strong> por <strong>7 días</strong>, luego €69,99/año'

    const labelSwitch = createElement('label', { class: "switch" })
    const inputChecked = createElement('input', { type: "checkbox", checked: 'checked' })
    const spanSlider = createElement('span', { class: "slider round" })
    labelSwitch.append(inputChecked, spanSlider)

    div.append(pFree, labelSwitch)
    return div
}

const footer = () => {
    const divFooter = createElement('div', { class: "footer font-2" })
    const elements = [
        createElement('a', {}, 'Términosy y Condiciones'),
        createElement('span', {}, '.'),
        createElement('a', {}, 'Política de Privacidad')
    ]

    elements.forEach(el => divFooter.appendChild(el))

    return divFooter
}

export { phoneScreen }