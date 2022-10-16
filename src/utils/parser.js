const parserFactory = (container) => new Parser(container)

class Parser {
    constructor(con) {

    }

    stringToArray(str) {
        if(typeof str !== "string")return str
        str = str.replace(/\,,+/gm, ',').replace(/\,+$/gm, "")
        const array = str.split(',')
        return array.map(ele => ele.trim())
    }
}

export default parserFactory