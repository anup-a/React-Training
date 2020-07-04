export const styles = {
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    PaletteColors: {
        height: "90%"
    },
    ColorBox: {
        width: "20%",
        height: "50%",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-5px",
    },
    backButton: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: '50%',
        left: '50%',
        marginLeft: '-30px',
        marginTop: '-15px',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: '#fff',
    },
    footerSection: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '6vh',
        letterSpacing: '2px',
        fontSize: '15px',
        fontWeight: '600',
        textTransform: 'uppercase',
        "& span": {
            margin: '0 1rem',
            fontSize: '20px',
        }
    }
}
