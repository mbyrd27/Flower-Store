export const Retailer = (retailer, distributor, nurseries, flowers) => {
    return `
    <div class="card">
        <h3>${retailer.name}</h3>
        <div>${retailer.address}</div>
        <div>${retailer.city}, ${retailer.state}</div>
        <div><strong>Flower Distributor:</strong> ${distributor.name}</div>
        <div><strong>Source Nurseries:</strong>
            <ul class="list nurseryList">
                ${nurseries.map(nurs => `<li>${nurs.name}</li>`).join('')}
            </ul>
        </div>
        <div><strong>Flowers Available:</strong>
            <ul class="list flowerList">
                ${flowers.map(flwr => `<li>${flwr}</li>`).join('')}
            </ul>
        </div>   
    </div>  `
}