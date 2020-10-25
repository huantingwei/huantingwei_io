import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Tabs, Tab } from '@material-ui/core'
import EditorBackground from 'components/editorLayout'
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
// import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet'
// import CodeIcon from '@material-ui/icons/Code'
// import GitHubIcon from '@material-ui/icons/GitHub'
const dark = '#272a2e'
const light = '#0f1114'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <EditorBackground>{children}</EditorBackground>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function tabProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}



const StyledTabs = withStyles({
    root: {
        backgroundColor: dark,
        minHeight: '6vh',
        height: '6vh'
    },
    indicator: {
        background: dark,
        visibility: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: light,
    },
})((props) => <Tabs {...props} />);

const StyledTab = withStyles((theme) => ({
    root: {
        minHeight: '6vh',
        height: '6vh',
        backgroundColor: dark,
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        '&:focus': {
            opacity: 1,
            backgroundColor: light
        },
    },
}))((props) => <Tab disableRipple disableFocusRipple {...props} />);


export default function TabLayout(props) {
    const { tabItems } = props
    const [value, setValue] = React.useState(0)

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <StyledTabs value={value} onChange={handleChange} aria-label="top nav" >
                {tabItems.map((item, index) => {
                    return <StyledTab key={item.label} label={item.label} {...tabProps(index)} />
                })}
            </StyledTabs>
            {tabItems.map((item, index) => {
                return (<TabPanel key={item.id} value={value} index={index}>
                    {item.content}
                </TabPanel>)
            })}
        </>
    );
}

TabLayout.defaultProps = {
    tabItems: [
        {
            label: 'home.js',
            content: <div>home.js</div>,
            // icon: <FormatQuoteIcon />,
        },
        {
            label: 'about.py',
            content: <div>about.py</div>,
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
    ]
}
TabLayout.propTypes = {
    tabItems: PropTypes.array,
}