import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import R from 'components/reservedWord'

const useStyles = makeStyles((theme) => ({
    listItem: {
        marginBottom: '2rem',
        marginLeft: '2.15rem',
    },
    title: {
        display: 'inline',
        fontWeight: '600',
        textTransform: "uppercase",
        color: theme.palette.secondary.main,
    },
    subtitle:{
        color: '#70db70',
    },
    content: {
        marginTop: '0.5rem',
    },
}));
//


const ListPython = (props) => {
    const classes = useStyles()
    const { items } = props
    return (
        <Box paddingRight={10}>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <R>def </R>
                        <Typography className={classes.title}>{item.primary}</Typography>

                        <div className={classes.listItem}>
                            <Typography className={classes.subtitle}>{'# ' + item.secondary}</Typography>
                            {item.content.map((c) => {
                                return (
                                    <div className={classes.content} key={c.id}>
                                        <Typography variant="subtitle1">{c.title.toLowerCase().replaceAll(' ', '_') + ' = '}</Typography>
                                        <Typography variant="subtitle1">{'"' + c.description + '"'}</Typography>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                )
            })}
        </Box>
    )
}

export default ListPython