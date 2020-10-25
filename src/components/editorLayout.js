import React from 'react'
import { Container, Grid, Typography } from "@material-ui/core"


const lineNums = [...Array(20).keys()].map(foo => foo + 1)

const Editor = (props) => {
    const { children } = props
    return (
        // minHeight=95vh + tabLayout minHeight=5vh
        <Container maxWidth="xl"
            style={{ color: 'white', minHeight: '94vh', paddingTop: '2%' }}>
            <Grid container>
                <Grid item container direction="column" xs={1}>
                    {lineNums.map((line, index) => {
                        return <Grid item key={`line-${index}`} style={{ marginRight: "-3%" }}>
                            <Typography variant="body1">{line}</Typography>
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