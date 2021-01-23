import { getRetailers, useRetailers } from './RetailerProvider.js'
import { getDistributors, useDistributors } from '../distributors/DistributorProvider.js'
import { Retailer } from './Retailer.js'

export const RetailList = () => {
    getRetailers()
        .then(getDistributors)
        .then(() => {
            const allRetailers = useRetailers()
            const allDistributors = useDistributors()
            render(allRetailers, allDistributors)
        })
}

const render = (retailer, distributor) => {
    const contentTarget = document.querySelector('.retailers')
    contentTarget.innerHTML =
    `<h2>Retailers</h2> 
    ${retailer.map(ret => {
        const matchingDist = distributor.find(dist => dist.id === ret.distributorId)
        return Retailer(ret, matchingDist)
    }).join('')
    }`
}
