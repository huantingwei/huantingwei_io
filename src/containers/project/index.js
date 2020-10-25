import React from 'react'
import { Grid } from '@material-ui/core'
import { GoogleMd, GooglePreview } from './google'
import { FypMd } from './fyp'

const Project = (props) => {
    return (
        <Grid container direction="column">
            {/* Google */}
            <Grid item container xs={12}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <GoogleMd />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <GooglePreview />
                </Grid>
            </Grid>
            {/* FYP-Kubernetes */}
            <Grid item container xs={12}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FypMd />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

                </Grid>
            </Grid>
            {/* BookTracker */}
            <Grid item container xs={12}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>

                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Project