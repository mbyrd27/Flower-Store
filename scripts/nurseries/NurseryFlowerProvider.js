let nurseryFlowers = []

export const getNurseryFlowers = () => {
    return fetch('http://localhost:8088/nurseryFlowers')
        .then(resp => resp.json())
        .then(data => nurseryFlowers = data)
}

export const useNurseryFlowers = () => nurseryFlowers.slice()