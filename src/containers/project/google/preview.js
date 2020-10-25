import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link, CardMedia, Grid } from '@material-ui/core'
import ggHack from 'ggHack.jpg'

const useStyles = makeStyles((theme) => ({
    img: {
        margin: "1rem auto",
        height: "20%",
        width: "20%"
    }
}));

const GooglePreview = (props) => {
    const classes = useStyles()
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <CardMedia component="img" className={classes.img} src={ggHack} />
            </Grid>
            <Grid item>
                <Link
                    color="inherit"
                    variant="caption"
                    href="https://events.withgoogle.com/google-girl-hackathon-cn/project-showcase/">
                    showcase link on Google's official website
                </Link>
            </Grid>
        </Grid>
    )
}

export default GooglePreview