
// Si el primer nodo es null entonces no hay lista enlazada
const Frame = require('../src/frame')
describe('Test Frame class', () => {
  test('Should have previous node undefined', () => {
    const frame = new Frame()
    expect(frame.getNodoAnterior()).toBeUndefined()
  })
  test('Input must be type number', () => {
    const frame = new Frame()
    frame.setTiro1(1)
    expect(typeof frame.getTiro1()).toBe('number')
  })
  test('Input must be type string', () => {
    const frame = new Frame()
    const test = ' '
    frame.setTiro2(test)
    expect(typeof frame.getTiro2()).toBe('string')
  })
  test('Input must be type boolean', () => {
    const frame = new Frame()
    const test = true
    frame.setTiro3(test)
    expect(typeof frame.getTiro3()).toBe('boolean')
  })
})
