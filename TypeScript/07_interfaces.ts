// Interfaces -> são como as aliases, só que só funcionam em objetos
interface Rectangle {
     height: number,
     width: number
}

const rectangle: Rectangle = {
     height: 20,
     width: 10
}

// Extendendo uma interface
interface ColoredRectangle extends Rectangle {
     color: string
}

const coloredRectangle: ColoredRectangle = {
     height: 20,
     width: 10,
     color: "red"
}