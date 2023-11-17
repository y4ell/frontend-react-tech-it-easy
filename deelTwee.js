import {inventory} from "./src/constants/inventory.js";
//
// // 1a
//
// const allNames  = inventory.map((tvName) => {
//     return tvName.name
// })
//
// console.log(allNames)
//
// // 1b
//
// const soldOutTvs = inventory.filter((soldOutTv) => {
//     return soldOutTv.originalStock - soldOutTv.sold === 0;
// })
//
// console.log(soldOutTvs)
//
// // 1c
//
// const specificTv = inventory.find((specificT) => {
//     return specificT.type === "NH3216SMART"
// })
//
// console.log(specificTv)

// 1d


// const suitableSportTvs = inventory.map((suitableSportTV) => {
//     { if (suitableSportTV.refreshRate >= 100) {
//         return `name: ${suitableSportTV.name}, suitable: true`}
//     else  {
//     return `name: ${suitableSportTV.name}, suitable: false`}
// }})
//
// console.log(suitableSportTvs)

// 1e

// const bigTvs = inventory.filter((bigTv) => {
//    return bigTv.availableSizes.filter((tvSize) => {
//        return tvSize.availableSizes >= 65
//    })
// })
//
// console.log(bigTvs)
//
// Opdracht 1f (uitdaging): Gebruik array-methoden om alle informatie te verzamelen
// van de tv's die over ambilight beschikken. Log de uitkomst in de console.

// const ambilights = inventory.filter((ambilight) => {
//    return bigTv.options.filter((ambilight) => {
//
//    })
// })
// Filter de tv's die beschikbaar zijn in schermgroottes van 65 inch en groter
// const largeScreenTvs = inventory.filter(tv => tv.availableSizes.some(size => size >= 65));
//
// // Log de informatie van de tv's met grote schermen in de console
// console.log(largeScreenTvs);

// https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0

// Filter de tv's die over Ambilight beschikken
// const tvsWithAmbilight = inventory.filter(tv => tv.options.some(option => option.name === 'ambiLight' && option.applicable));
//
// // Log de informatie van de tv's met Ambilight in de console
// console.log(tvsWithAmbilight);
