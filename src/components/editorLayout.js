import React from 'react'
import { Container, Grid, Typography } from "@material-ui/core"


const lineNums = [...Array(20).keys()].map(foo => foo + 1)

const Editor = (props) => {
    const { children } = props
    return (
        // minHeight=95vh + tabLayout minHeight=5vh
        <Container maxWidth="xl" fluid 
            style={{ backgroundColor: '#0f1114', color: 'white', minHeight: '94vh', minWidth: '100vw', paddingTop: '2%' }}>
            <Grid container>
                <Grid item container direction="column" xs={1}>
                    {lineNums.map((line) => {
                        return <Grid item style={{ marginRight: "-3%" }}>
                            <Typography variant="body2">{line}</Typography>
                        </Grid>
                    })}

                </Grid>
                <Grid item xs={11}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Editor