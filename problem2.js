function checkName(name) {
    if (typeof name !== 'string'){
        return "invalid"
    }
    const nameLower = name.toLowerCase()
    const splitname = nameLower.split("")
    const lastWord = splitname[splitname.length - 1]
    if (lastWord === 'a' || lastWord === 'y' || lastWord === 'i' || lastWord === 'e' || lastWord === 'o' || lastWord === 'u' || lastWord === 'w') {
        return "Good Name"
    }
    else{
        return "Bad Name"
    }

}
console.log(checkName('obaidulla'))