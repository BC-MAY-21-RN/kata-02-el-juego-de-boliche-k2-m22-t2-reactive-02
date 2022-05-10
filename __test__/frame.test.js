
// Si el primer nodo es null entonces no hay lista enlazada
const Frame = require('../src/frame')
const frame = new Frame()
describe('Test Frame class', () => {
  test('Should have previous node undefined', () => {
    expect(frame.getNodoAnterior()).toBeUndefined()
  })
})
