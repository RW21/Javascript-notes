const R = require('ramda');


const lib = [{title:'aba'}, {title:'b'}, {title:'c'}]

const isTitleInLib = R.curry((lib, isTitle) => R.filter(isTitle, lib))
const isTitle = R.curry((title, book) => R.equals(title, book.title))

const isAba = isTitle('aba')

const foreverAge = R.curry((targetAge, age) => R.ifElse(R.lte(targetAge), R.always(21), R.inc)(age))
const forever21 = foreverAge(21)

const OUR_COUNTRY = 'JP'
const AGE_FIELD = 'age'
const person = {birthCountry: 'JP' }
const wasBornInCountry = R.compose(R.equals(OUR_COUNTRY), R.prop('birthCountry'))
const wasNaturalized = R.compose(Boolean, R.prop('naturalizationDate'))
const addFakeAge = R.curry((targetAge, person) => R.assoc(AGE_FIELD, targetAge, person))
const change18 = addFakeAge(18)
const addFakeCanDrive = person => change18(person)
const isOver18 = R.compose(R.gte(R.__, 18), R.prop('age'))
console.log(addFakeCanDrive(person))