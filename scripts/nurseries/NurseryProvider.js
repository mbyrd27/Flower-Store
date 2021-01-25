let nurseries = []

export const getNurseries = () => {
    return fetch('http://localhost:8088/nurseries')
        .then(resp => resp.json())
        .then(data => nurseries = data)
}

export const useNurseries = () => nurseries.slice()