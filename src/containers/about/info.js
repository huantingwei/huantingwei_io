import React from 'react'

import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Info = (props) => {
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item style={{ marginBottom: "1rem" }}>
                <Typography variant="h1">Ting</Typography>
            </Grid>
            <Grid item style={{ padding: "0 1rem" }}>
                <Typography variant="h2">Wei Huan Ting 韋煥庭</Typography>
            </Grid>
            <Grid item>
                <List aria-label="contact info">
                    <ListItem button component="a" href="mailto:ting02940@gmail.com">
                        <ListItemIcon>
                            <MailOutlineIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Jibber Jabber?" />
                    </ListItem>
                    <ListItem button component="a" href="https://github.com/huantingwei">
                        <ListItemIcon>
                            <GithubIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="See what I'm up to" />
                    </ListItem>
                    <ListItem button component="a" href="https://www.linkedin.com/in/huan-ting-wei-01826a151/">
                        <ListItemIcon>
                            <LinkedInIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary="Connect with me" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Info