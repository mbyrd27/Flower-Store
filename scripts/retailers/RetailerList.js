import { getRetailers, useRetailers } from './RetailerProvider.js'
import { getDistributors, useDistributors } from '../distributors/DistributorProvider.js'
import { getNurseries, useNurseries } from '../nurseries/NurseryProvider.js'
import { getDistributorNurseries, useDistributorNurseries } from '../nurseries/NurseryDistributorProvider.js'
import { getNurseryFlowers, useNurseryFlowers } from '../nurseries/NurseryFlowerProvider.js'
import { getFlowers, useFlowers } from '../flowers/FlowerProvider.js'

import { Retailer } from './Retailer.js'

export const RetailList = () => {
    getRetailers()
        .then(getDistributors)
        .then(getNurseries)
        .then(getFlowers)
        .then(getDistributorNurseries)
        .then(getNurseryFlowers)
        .then(() => {
            const allRetailers = useRetailers()
            const allDistributors = useDistributors()
            const allNurseries = useNurseries()
            const allFlowers = useFlowers()
            const distributorNurseryRelationship = useDistributorNurseries()
            const nurseryFlowerRelationship = useNurseryFlowers()
            render(allRetailers, allDistributors, allNurseries, 
                distributorNurseryRelationship, nurseryFlowerRelationship,
                allFlowers)
        })
}

const render = (retailer, distributor, nursery, nursDisRel, nursFlowRel, flower) => {
    const contentTarget = document.querySelector('.retailers')
    
    contentTarget.innerHTML =
    `<h2>Retailers</h2> 
    ${retailer.map(ret => {
        const matchingDist = distributor.find(dist => dist.id === ret.distributorId)
        const nurseryList = nursDisRel.filter(rel => rel.distributorId === matchingDist.id)
        const matchingNurseries = nurseryList.map(nursRel => {
            return nursery.find(nurs => nurs.id === nursRel.nurseryId)
        })
        let flowerNames = []
        matchingNurseries.map(mn => {
            const parsedNurseries = nursFlowRel.filter(nfr => nfr.nurseryId === mn.id)
            const matchingFlowers = parsedNurseries.map(pn => {
                return flower.find(flwr => flwr.id === pn.flowerId)
            })
            matchingFlowers.map(mf => flowerNames.push(mf.commonName))
        })
        return Retailer(ret, matchingDist, matchingNurseries, flowerNames)
    }).join('')
    }`
}
