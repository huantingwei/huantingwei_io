import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Education from './education'

const education = [
    {
        school: 'Hong Kong University of Science and Technology',
        degree: 'Bachelor of Computer Science and Engineering',
        achievements: ['Dean\'s List', 'HKSAR Government Scholarship Fund - Reaching Out Award', 'University Scholarship']
    },
    {
        school: 'Czech Technical University in Prague',
        degree: 'Faculty of Information Technology',
        achievements: [],
    },
]
const About = (props) => {
    return (
        <Grid container>
            <Grid item container xs={12} sm={12} md={6}>
                <Education />
            </Grid>
            <Grid item container xs={12} sm={12} md={6}>
                class
            </Grid>
        </Grid>
    )
}

export default About