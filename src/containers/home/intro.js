import React from 'react'
import { Box, Typography } from '@material-ui/core'
import S from 'components/stringWord'
import R from 'components/reservedWord'

const Intro = (props) => {
    return (
        <Box m={'8rem 2rem 8rem 0'}>
            <Typography>
                Passionate developer and self-motivated learner with both <S>industrial</S> and <S>research</S> internship experiences
                across <S>security</S>, <S>cloud computing</S>, <S>web application</S>,
                <S>DevOps</S>, and <S>machine learning</S>.
                Demonstrated strong <S>communication</S> and <S>teamwork</S> skills through
                competitions and extra-curricular activities.
                Have a <R>keen interest in cybersecurity</R> and is actively seeking future career in relevant fields
            </Typography>
        </Box>
    )

}

export default Intro