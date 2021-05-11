const encryptCaesar = (string) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaCode = alphabet.split("");
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if(string[i] === "z") return newString += 'a'

        let newChar = alphaCode[alphaCode.findIndex((char) => char === string[i] ) + 1];
        newString += newChar;
    }
    return newString
}

export default encryptCaesar
