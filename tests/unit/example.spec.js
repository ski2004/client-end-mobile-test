import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Test from './Test.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Test, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
