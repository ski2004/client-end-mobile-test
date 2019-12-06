import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Test2 from '@/views/layout/Test2.vue'

describe('views/layout/Test2.vue.vue', () => {
  let wrapper , alert

  beforeEach(() => {
    // alert = sinon.spy(window, 'alert') // spy一個alert，以便訪問這個方法
    // vm = createTest(Test2)
    wrapper  = shallowMount(Test2)
  })

  // afterEach(() => {
  //   // alert.restore() // 每次案例測試完得銷毀
  //   destroyVM(wrapper)
  // })


  it('renders props.msg when passed', () => {
    const msg = 'xxx'
    const wrapper = shallowMount(Test2, {
      propsData: { msg }
    })
    // wrapper.vm.look1(1)
    // wrapper.find("#button").trigger("click")
    // console.log( wrapper.html() );
    // wrapper.vm.jisuan()
    // console.log(wrapper.vm.$data);
    // wrapper.vm._data.ipt[1]
    expect(wrapper.html()).to.include('xaaaaa')
  })
})
