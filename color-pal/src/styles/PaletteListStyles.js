

export const styles = {
    PaletteList: {
        background: "rgb(189, 189, 189)",
        // width: "50%",

        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    main: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        alignItems: "flex-start",
        flexWrap: "wrap",
        height: "100%",
    },
    navbar: {
        display: "inline-block",
    },

    navTitle: {
        fontSize: "2rem",
    },
    listContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridColumnGap: "5%",
        boxSizing: "border-box",
        width: "100%",
    }
}
