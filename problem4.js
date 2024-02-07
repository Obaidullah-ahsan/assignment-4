function password(obj) {
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName;
    if (name === undefined || birthYear===undefined || siteName === undefined) {
        return 'invalid'
    }
    else if (birthYear.toString().length < 4) {
        return 'invalid';
    }
    const split = siteName.slice(0, 1).toUpperCase();
    const fullSiteName = split + siteName.slice(1, siteName.length);
    const pass = fullSiteName + '#' + name + '@' + birthYear;
    return pass;

}
console.log(password({ name: 'rahat' , birthYear: 2002, siteName: 'Facebook' }))