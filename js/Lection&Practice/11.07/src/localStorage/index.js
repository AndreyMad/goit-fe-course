import galleryItems from '../data/gallery'

function convertToJSON(info){
    return JSON.stringify(info)
}
function convertFromJSON(str){
    return JSON.parse(str)
}
export {convertFromJSON, convertToJSON}