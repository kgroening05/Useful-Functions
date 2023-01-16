
export function capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
}

export function toTitleCase(string){
    const array = string.split(' ');
    let titleArray = []
    array.forEach(word => {
        titleArray.push(capitalize(word))
    });
    return titleArray.join(' ');
}

export function reverseString(string){
    return string.split('').reverse().join('')
}

export function caesarCipher(sentence, shift){
    const sentenceArr = sentence.split('');
    const convertedArr = sentenceArr.map((element)=>{
        let encodedChar = element.charCodeAt() + shift
        if (encodedChar > 122) return String.fromCharCode(encodedChar -= 26)
        if (encodedChar > 90 && element.charCodeAt() < 91) return String.fromCharCode(encodedChar -= 26)
        if (encodedChar > 64) return String.fromCharCode(encodedChar)
        return element
    })
    return convertedArr.join('')
}
