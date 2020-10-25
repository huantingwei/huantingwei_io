import React from 'react'
import { Typography } from '@material-ui/core'
import S from 'components/stringWord'
import R from 'components/reservedWord'

const Intro = (props) => {
    return (
        <Typography>
            Passionate developer and self-motivated learner with both <S>industrial</S> and <S>research</S> internship experiences
            across <S>security</S>, <S>cloud computing</S>, <S>web application</S>,
            <S>DevOps</S>, and <S>machine learning</S>.
            Demonstrated strong <S>communication</S> and <S>teamwork</S> skills through
            competitions and extra-curricular activities.
            Have a <R>keen interest in cybersecurity</R> and is actively seeking future career in relevant fields
        </Typography>
    )

}

export default Intro