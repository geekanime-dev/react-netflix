const generateFiles = require('./generateFiles');

module.exports = (name, withSaga, withStyle) => {
    const filesArray = ['action', 'reducer', 'index']

    withSaga.toUpperCase() === 'Y' ? filesArray.push('saga') : null
    withStyle.toUpperCase() === 'Y' ? filesArray.push('constants') : null

    if(withSaga.toUpperCase() === 'Y' || withSaga.toUpperCase() === 'N') {
        generateFiles(name, filesArray, withStyle)
    } else {
        throw new Error("User Input Not Valid")
    }

}