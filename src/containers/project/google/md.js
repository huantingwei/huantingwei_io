import React from 'react'
import R from 'components/reservedWord'
import S from 'components/stringWord'
import C from 'components/commentWord'
import { Typography } from '@material-ui/core'


const GoogleMd = (props) => {
    return (
        <div>
            <R variant="h6"># 2020 Google Girl Hackathon Season VI</R>
            <br></br>
            <S>** 2nd Prize among over 300 teams **</S>
            <br></br>
            <C>{'// '}Project: ROSS - An Integrated Reservation Platform for On-Site Services </C>
            <ul>
                <li>
                    <Typography>
                        Built a reservation platform 
                        with real-time and historical crowd data for on-site services 
                        to reduce cluster infection of COVID-19
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Designed and implemented 
                        the backend RESTful API server 
                        with Python Django and PostgreSQL
                    </Typography>
                </li>
            </ul>
        </div>
    )
}

export default GoogleMd