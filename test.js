const test = require('tape')

const pickToArray = require('./index')

test('throws if not an object', (t) => {
  try {
    pickToArray(0, 'id')
  } catch (err) {
    t.equal(err.message, 'Expecting entity to be object or array of objects')
    t.end()
  }
})

test('pick from single object', (t) => {
  const result = pickToArray({ hello: 'world' }, 'hello')
  t.equal(result[0], 'world')
  t.end()
})

test('shallow pick from array of objects', (t) => {
  const result = pickToArray([{ id: 123 }, { id: 456, entity: { id: 789 } }], 'id')
  t.equal(result.length, 2)
  t.equal(result[0], 123)
  t.equal(result[1], 456)
  t.end()
})

test('deep pick from array of objects', (t) => {
  const result = pickToArray([{ id: 123 }, { id: 456, entity: { id: 789 } }], 'id', true)
  t.equal(result.length, 3)
  t.equal(result[0], 123)
  t.equal(result[1], 456)
  t.equal(result[2], 789)
  t.end()
})

test('pick from nested object', (t) => {
  const result = pickToArray({ entity: { id: 123 } }, 'id', true)
  t.equal(result[0], 123)
  t.end()
})
