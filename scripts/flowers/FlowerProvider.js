let flowers = []

export const getFlowers = () => {
    return fetch('http://localhost:8088/flowers')
        .then(resp => resp.json())
        .then(data => flowers = data)
}

export const useFlowers = () => flowers.slice()