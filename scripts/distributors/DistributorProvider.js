let distributors = []

export const getDistributors = () => {
    return fetch('http://localhost:8088/distributors')
        .then(resp => resp.json())
        .then(data => distributors = data)
}

export const useDistributors = () => distributors.slice()