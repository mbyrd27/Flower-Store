import { getRetailers, useRetailers } from './RetailerProvider.js'
import { Retailer } from './Retailer.js'

export const RetailList = () => {
    getRetailers()
        .then(() => {
            const allRetailers = useRetailers()
            render(allRetailers)
        })
}

const render = (retailer) => {
    const contentTarget = document.querySelector('.retailers')
    contentTarget.innerHTML =
    `<h2>Retailers</h2> 
    ${retailer.map(ret => Retailer(ret)).join('')}`
}