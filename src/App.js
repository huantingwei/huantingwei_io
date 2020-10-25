import React from 'react';
import TabLayout from 'components/tabLayout'
import Home from 'containers/home'
import About from 'containers/about'

function App() {
    return (
        <TabLayout tabItems={[
            {
                label: 'home.js',
                content: <Home />,
                // icon: <FormatQuoteIcon />,
            },
            {
                label: 'about.py',
                content: <About />,
                // icon: <CodeIcon />,
            },
            {
                label: 'projects.md',
                content: <div>projects.md</div>,
                // icon: <GitHubIcon />,
            },
            {
                label: 'passion.go',
                content: <div>passion.go</div>,
                // icon: <SettingsEthernetIcon />,
            },
        ]} />

    )
}

export default App;
