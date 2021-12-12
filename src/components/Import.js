import React from 'react'
import { Button } from "@material-ui/core"
import { CustomTable } from './CustomTable'

const Import = (props) => {
    return (
        < div >
            <Button onClick={() => props.fetchMakes()} color="primary" variant="contained">
                Import
            </Button>
            <h2>Number of cars: {props.makes.length}</h2>
            <CustomTable deleteMake={props.deleteMake} makes={props.makes}></CustomTable>
        </div >
    )
}

export default Import