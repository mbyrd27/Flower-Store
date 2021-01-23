export const Retailer = (retailer, distributor) => {
    return `
    <div class="card">
        <h3>${retailer.name}</h3>
        <div>${retailer.address}</div>
        <div>${retailer.city}, ${retailer.state}</div>
        <div><strong>Flower Provider:</strong> ${distributor.name}</div>
    </div>  `
}