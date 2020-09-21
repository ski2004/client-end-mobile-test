import Vue from 'vue'
import Vuex from 'vuex'
import { expect , assert } from 'chai'
import NodeJS from '@/views/layout/NodeJS.vue'
import { shallowMount, createLocalVue, config } from '@vue/test-utils'
import axios from 'axios'
// 如果有遇到storage
// global.sessionStorage = require('node-sessionstorage')
// Object.defineProperty(window, 'sessionStorage', { value: global.sessionStorage });

const localVue = createLocalVue()
localVue.use(Vuex)

describe('測試頁面: @/views/layout/NodeJS.vue', () => {
  let store = new Vuex.Store()
  let wrapper, vm, resp;
  // 生命週期
  before(async () => {
    // 呈現畫面
    wrapper = shallowMount(NodeJS, {
      store, localVue,
      mocks: {
        $http: axios
      }
    })
    vm = wrapper.vm
    // console.log("axios" ,axios)
  });

  after(function () {
    // run after all tests in this block
  });

  beforeEach(function () {
    // run before each test in this block
  });

  afterEach(function () {
    // run after each test in this block
  });

  it('檢查請求是否為200:get_list() ', (done) => {
    vm.get_list().then((res) => {
      expect( res.code ).to.equal(200)
      done();
    }).catch(done);
  })
  it('檢查資料型態:data.list ', () => {
    assert.typeOf(vm.list, 'Array');
    expect( vm.list.length ).to.be.above(0)
  })
})

