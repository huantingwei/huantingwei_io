import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    string: {
        display:'inline',
        color: theme.palette.secondary.main,
        variant: 'body1',
    }
}));


const S = (props) => {
    const { children } = props
    const classes = useStyles()
    return (
        <Typography className={classes.string}>{children}</Typography>
    )
}

export default S 