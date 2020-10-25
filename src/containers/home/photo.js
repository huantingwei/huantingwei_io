import React from 'react'
import { Box } from '@material-ui/core'
import head from 'head.jpg'

const Photo = (props) => {
    return (
        <Box style={{ margin: "3% 0" }}>
            <img src={head} alt={'profile-pic'} style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} />
        </Box>
    )
}

export default Photo