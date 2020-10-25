import React from 'react'
import { Typography } from '@material-ui/core'
import R from 'components/reservedWord'


const Code = (props) => {
    const { name } = props
    return (
        <div style={{ paddingBottom: '1rem' }}>
            <R>class </R>
            <Typography display="inline">{name} (</Typography>
            <R>self</R>
            <Typography display="inline">) : </Typography>
        </div>
    )
}

export default Code