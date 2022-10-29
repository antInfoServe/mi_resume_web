const parserFactory = (container) => new Parser(container)

class Parser {
    constructor(container) {

    }

    stringToArray(str) {
        console.log(str.length)
        if(str.length < 1)return[]
        str = str.replace(/\n+$/gm, "").replace(/\n+/gm, '|')
        const array = str.split('|')
        return array.map(ele => ele.trim())
    }
}

export default parserFactory