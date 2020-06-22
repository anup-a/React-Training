import chroma from 'chroma-js'

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatePalettes(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };

    for (let i = 0; i < levels.length; i++) {
        newPalette.colors[levels[i]] = []
    }

    for (let color of starterPalette.colors) {
        let scale = generateScale(color.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: color.name,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }

    return newPalette
}

function getRange(hexColor) {
    return [
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        "#fff"
    ]
}
function generateScale(hexColor, numColors) {
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numColors);
}

export default generatePalettes;