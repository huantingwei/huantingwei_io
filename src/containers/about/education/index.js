import React from 'react'
import { Grid, } from '@material-ui/core'
import Code from 'components/codePython'
import List from 'components/listPython'
import { schools } from './configs'

const Education = (props) => {
    return (
        <Grid container item direction="column">
            <Grid item>
                <Code name={'Education'} />
            </Grid>
            <Grid item>
                <List items={schools} />
            </Grid>
        </Grid>
    )
}
export default Education