import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    string: {
        display: 'inline',
        color: theme.palette.secondary.light,
        variant: 'body1',
    }
}));


const S = (props) => {
    const { children, ...other } = props
    const classes = useStyles()
    return (
        <Typography className={classes.string} {...other}>{children}</Typography>
    )
}

export default S 