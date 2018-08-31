import App from '@/App'
import { mount } from '@vue/test-utils'

describe('App.vue', () => {
  it('should render by using mount', () => {
    const wrapper = mount(App, {
      stubs: ['router-link', 'router-view'],
    })

    expect(wrapper.find('.header-title').text()).toEqual('Vue Shopping Cart')
  })
})
