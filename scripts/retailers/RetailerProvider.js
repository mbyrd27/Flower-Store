let retailers = []

export const getRetailers = () => {
    return fetch('http://localhost:8088/retailers')
        .then(resp => resp.json())
        .then(data => retailers = data)
}

export const useRetailers = () => retailers.slice()