import React from 'react'
import { Grid } from '@material-ui/core'
import List from 'components/listPython'
import Code from 'components/codePython'
import { work } from './configs'

const Work = (props) => {
    return (
        <Grid container item direction="column">
            <Grid item>
                <Code name={'Work'} />
            </Grid>
            <Grid item>
                <List items={work} />
            </Grid>
        </Grid>
    )
}

export default Work