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
    const { children } = props
    const classes = useStyles()
    return (
        <Typography className={classes.reservedWord}>{children}</Typography>
    )
}

export default R