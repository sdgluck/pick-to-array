/* global define:false, module:false, self:false */

'use strict'

if (typeof define === 'function' && define.amd) {
  define('pick-to-array', function () { return pickToArray })
} else if (typeof module === 'object' && module.exports) {
  module.exports = pickToArray
} else {
  self.pickToArray = pickToArray
}

function isPlainObject (o) {
  return typeof o === 'object' && o.constructor === Object
}

function forEach (obj, fn) {
  if (obj instanceof Array) {
    obj.forEach(fn)
  } else {
    Object.keys(obj).forEach(function (key) {
      return fn(obj[key], key)
    })
  }
}

/**
 * Pick the value of the `property` property from each object in `entities`.
 * Operation is recursive with `deep == true`.
 * @param {Array|Object} entities An array of objects or a single object
 * @param {String|Array} property Property name(s) to pick
 * @param {Boolean} [deep] Pick from nested properties, default false
 * @returns {Array} Values
 */
function pickToArray (entities, property, deep) {
  if (!(entities instanceof Array) && !isPlainObject(entities)) {
    throw new Error('Expecting entity to be object or array of objects')
  } else if (typeof property !== 'string' && !(property instanceof Array)) {
    throw new Error('Expecting property to be string or array')
  }

  var arr = entities instanceof Array ? entities : [entities]

  return arr.reduce(function (result, obj) {
    if (!(obj instanceof Array) && !isPlainObject(obj)) {
      return result
    }

    forEach(obj, function (value, key) {
      if (
        (property instanceof Array && property.indexOf(key) !== -1) ||
        (key === property)
      ) {
        result.push(value)

        if (!(property instanceof Array)) {
          return false
        }
      } else if (deep && (value instanceof Array || isPlainObject(value))) {
        result = result.concat(pickToArray(value, property, deep))
      }
    })

    return result
  }, [])
}
