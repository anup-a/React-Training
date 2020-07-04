export const styles = {
    Nav: {
        height: '6vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    Logo: {
        backgroundColor: "rgb(214, 214, 214)",
        padding: "15px",
        "& a span": {
            fontSize: '1.5rem',
        },
        "& a": {
            textDecoration: 'none',
        },
    },
    SliderContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: '1rem',
    },
    Slider: {
        width: '20%',
        margin: '1rem',
        "& .rc-slider-track": {
            background: 'transparent'
        },
        "& rc-slider-rail": {
            height: 5,
        },
        "& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus": {
            border: 'none',
            outline: 'none',
            backgroundColor: 'blueviolet',
            boxShadow: 'none',
            marginBottom: '-2px',
        }
    },
    SelectContainer: {
        justifyContent: 'flex-end',
    },
}