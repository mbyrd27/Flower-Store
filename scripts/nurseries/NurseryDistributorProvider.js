let distributorNurseries = []

export const getDistributorNurseries= () => {
    return fetch('http://localhost:8088/distributorNurseries')
        .then(resp => resp.json())
        .then(data => distributorNurseries = data)
}

export const useDistributorNurseries = () => distributorNurseries.slice()