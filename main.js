const makeDino = function(name, period, diet, extinct) {
    const obj = {
      species: name,
      period: period,
      carnivore: diet,
      extinct: extinct
    }
    if(obj.extinct === undefined){
      obj.extinct = false
    } else{
      obj.extinct === extinct
    } return obj
  }

const makeSingular = function(obj) {
  if(obj.species.lastIndexOf('us') === -1){
  } else {
    const sliceEnd = obj.species.lastIndexOf('us');
    obj.species = obj.species.slice(0, sliceEnd)
  } return obj
}

const truncateSpecies = function(obj) {
  if(obj.species.length > 10){
    obj.species = obj.species.slice(0, 7) + '...'
  } return obj
}

const makeExtinct = function(obj) {
   if(obj.extinct === false){
     obj.extinct = true
   } return obj
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}
