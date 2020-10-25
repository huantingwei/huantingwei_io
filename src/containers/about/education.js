import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography, List, ListItem, ListItemIcon, ListItemAvatar, ListItemText, Divider } from '@material-ui/core'

const reserved = "#1aa3ff"
const Education = (props) => {
    const { data } = props

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Typography variant="h6"><span style={{ color: reserved }}>class </span>Education:</Typography>
            </Grid>
            <Grid item xs={12}>
                <List aria-label="education" style={{ marginLeft: "1.5rem" }}>
                    {data.map((edu) => {
                        return (
                            <ListItem style={{ height: "15vh" }}>
                                <ListItemText primary={
                                    <> <Typography variant="h6"><span style={{ color: reserved }}>def </span>
                                        {edu.school}</Typography>
                                    </>
                                }
                                    secondary={
                                        <Typography variant="subtitle1"><span style={{ paddingLeft: "2rem", color: "white" }}>{edu.degree}</span></Typography>
                                    } />
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
        </Grid>
    )
}

Education.defaultProps = {
    data: [
        {
            id: 'hkust',
            school: 'Hong Kong University of Science and Technology',
            degree: 'Bachelor of Computer Science and Engineering',
            achievements: ['Dean\'s List', 'HKSAR Government Scholarship Fund - Reaching Out Award', 'University Scholarship']
        },
        {
            id: 'ctu',
            school: 'Czech Technical University in Prague',
            degree: 'Faculty of Information Technology',
            achievements: [],
        },
    ]
}

Education.propTypes = {
    data: PropTypes.array,
}
export default Education