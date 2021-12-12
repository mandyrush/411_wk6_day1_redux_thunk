const URL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        fetch(URL)
            .then(res => res.json())
            .then(response => {
                console.log('Makes: ', response)
                const action = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                dispatch(action)
            })
    }
}

export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKE',
        value: index
    }
}