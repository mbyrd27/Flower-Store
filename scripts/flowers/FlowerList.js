import {getFlowers, useFlowers } from './FlowerProvider.js'
import { Flower } from './Flower.js'

export const FlowerList = () => {
    getFlowers()
        .then(() => {
            const allFlowers = useFlowers()
            render(allFlowers)
        })
}

const render = (flowerList) => {
    const contentTarget = document.querySelector('.flowers')
    contentTarget.innerHTML = 
    `<h2>Flowers</h2>
    ${flowerList.map(flower => Flower(flower)).join('')}`
}