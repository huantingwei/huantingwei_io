import React from 'react'
import { Grid } from '@material-ui/core'
import Education from './education'
import Work from './work'

const Experience = (props) => {
    return (
        <Grid container>
            <Grid item container xs={12} sm={12} md={6} lg={6} xl={6}>
                <Education />
            </Grid>
            <Grid item container xs={12} sm={12} md={6} lg={6} xl={6}>
                <Work />
            </Grid>
        </Grid>
    )
}

export default Experience