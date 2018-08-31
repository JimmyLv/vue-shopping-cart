import store from '../index'


describe('cart store', () => {

  it('should increment', () => {
    store.state.counter.count = 5
    store.dispatch('increment', 5)
    expect(store.state.counter.count).toEqual(10)
  })

  it('should decrease', () => {
    store.state.counter.count = 5
    store.dispatch('decrease')
    expect(store.state.counter.count).toEqual(4)
  })

  it('should not decrease when count is less 0', () => {
    store.state.counter.count = 0
    store.dispatch('decrease')
    expect(store.state.counter.count).toEqual(0)
  })

  it('should get count is odd number', () => {
    store.state.counter.count = 5
    expect(store.getters.countIsOdd).toEqual(false)
    store.dispatch('increment')
    expect(store.getters.countIsOdd).toEqual(true)
  })

  it.skip('should get correct base64 count', () => {
    store.state.counter.count = 10
    expect(store.getters.countHash).toEqual(window.atob(10))
  })

})
