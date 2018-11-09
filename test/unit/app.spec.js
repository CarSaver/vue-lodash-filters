import { mount, createLocalVue } from '@vue/test-utils'
import App from './App.vue'

import VueLodashFilters from '../../src/index'

const localVue = createLocalVue()
localVue.use(VueLodashFilters)

describe('App', function () {
    let wrapper
    beforeEach(function () {
        wrapper = mount(App, { localVue })
    })

    it('is a Vue instance', function () {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('capitilized string', function () {
        expect(wrapper.find('div').text()).toBe('Lower case string')
    })
})