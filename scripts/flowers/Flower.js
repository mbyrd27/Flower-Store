export const Flower = (flower) => {
    return `<div class="card">
    <h3>${flower.commonName}</h3>
    <div><strong>Color:</strong> ${flower.color}</div>
    </div>`
}