import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'utils/theme'
import TabLayout from 'components/tabLayout'
import About from 'containers/about'
import Experience from 'containers/experience'
import Project from 'containers/project'


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: '#0f1114' }}>
                <TabLayout tabItems={[
                    {
                        id: 'about',
                        label: 'about.js',
                        content: <About />,
                    },
                    {
                        id: 'experience',
                        label: 'experience.py',
                        content: <Experience />,
                    },
                    {
                        id: 'projects',
                        label: 'projects.md',
                        content: <Project />,
                    }, 


                    // {
                    //     id: 'passion',
                    //     label: 'passion.go',
                    //     content: <div>passion.go</div>,
                    // },
                ]} />
            </div>
        </ThemeProvider>

    )
}

export default App;
