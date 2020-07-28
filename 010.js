function caesarCipher(str, n) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        // console.log(code);
        let lower = "a".charCodeAt(0);
        // console.log(lower)
        if (code >= lower && code < lower + 26)
            code = (code - lower + n) % 26 + lower;
        let upper = "A".charCodeAt(0);
        if (code >= upper && code < upper + 26)
            code = (code - upper + n) % 26 + upper;
        result[i] = String.fromCharCode(code);
    }
    cipher = result.join("")
    return console.log(cipher);
}

caesarCipher("I love JavaScript!", 100) /// "E hkra FwrwOynelp!"
caesarCipher("I love JavaScript!", -100) /// "M pszi NezeWgvmtx!"