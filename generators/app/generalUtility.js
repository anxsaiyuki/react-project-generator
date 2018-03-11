const flattenObj = function(arg) {
  let flatten = {}
  let length = arg.length;

  flattenFunc = function() {
    if (length > 0) {
      for (let key in arg[length]) {
        flatten[key] = arg[length][key]
      }
      flattenFunc()
    }
  }
  flattenFunc()
  console.log(flatten)
  return flatten
}

module.exports = {
  flattenObj
}
