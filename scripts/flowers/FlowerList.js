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
    contentTarget.innerHTML = flowerList.map(flower => Flower(flower)).join('')
}