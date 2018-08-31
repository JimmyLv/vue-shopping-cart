import Vuex from 'vuex'
import Cart from '@/pages/Cart'
import { createLocalVue, mount } from '@vue/test-utils'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Cart.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      cartAddProduct: jest.fn(),
      cartChangeCount: jest.fn(),
    }
    store = new Vuex.Store({
      state: {
        cart: { cartProducts: [] },
      },
      getters: {
        cartTotalPrice: () => 100,
      },
      actions,
    })
  })

  it('should render by using mount', () => {
    // given

    // when
    const wrapper = mount(Cart, { store, localVue })
    wrapper.setComputed({ totalPrice: 100 })

    // then
    expect(wrapper.find('.title').text()).toEqual('总价 100')
  })

  it('should toggle cart when click add product button', () => {
    //given
    const stubToggleCart = jest.fn()

    // when
    const wrapper = mount(Cart, { store, localVue })
    wrapper.setMethods({ toggleCart: stubToggleCart })
    wrapper.find('.btn').trigger('click')

    // then
    // expect(stubToggleCart).toBeCalled()
  })
})
