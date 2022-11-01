const relocatorFactory = (container) => new Relocator(container)

class Relocator {
    constructor() {

    }

    moveDown(array, index) {
        const ele = array.splice(index, 1)
        array.splice(Number(index)+1, 0, ele[0])
        return array
    }

    moveUp(array, index) {
        const ele = array.splice(index, 1)
        array.splice(Number(index) - 1, 0, ele[0])
        return array
    }
}

export default relocatorFactory