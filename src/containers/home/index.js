import React from 'react'
import { Grid } from '@material-ui/core'
import Intro from './intro'
import Info from './info'
import Photo from './photo'

const Home = (props) => {
    return (
        <Grid container>
            <Grid item container direction="column" alignItems="center" xs={12} sm={12} md={5}>
                <Grid item xs={12} sm={12} md={5}>
                    <Photo />
                </Grid>
                <Grid item>
                    <Info xs={12} sm={12} md={7} />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Intro />
            </Grid>
        </Grid>
    )
}

export default Home