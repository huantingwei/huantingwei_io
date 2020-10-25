import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    reservedWord: {
        display: 'inline',
        color: theme.palette.info.main,
        fontWeight: '550'
    },
}));


const R = (props) => {
    const { children, ...other } = props
    const classes = useStyles()
    return (
        <Typography className={classes.reservedWord} {...other}>{children}</Typography>
    )
}

export default R