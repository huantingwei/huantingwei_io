import { createMuiTheme } from '@material-ui/core/styles'

// info.main = reserved word color
const editorDark = '#FF252526'
const editorLight = '#FF3E3E40'
const yello = '#FFC34D'

const theme = createMuiTheme({
    palette: {
        background: {
            default: editorDark,
            paper: editorLight,
        },
        secondary: {
            main: yello,
        },
    },
    text: {
        primary: '#fafafa',
        secondary: '#ffffff',
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Consolas',
            'Courier New',
            'monospace',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: "2.5rem",
            fontWeight: 600,
        },
        h2: {
            fontSize: "2rem",
        },
        button: {
            fontStyle: 'normal',
        },
    },
});

export default theme