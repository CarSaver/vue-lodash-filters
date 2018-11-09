import _ from 'lodash'

const VueLodashFilters = {
    install: function (Vue) {
        Vue.filter('capitalize', function (text) {
            return _.capitalize(text)
        })
    }
}

export default VueLodashFilters

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLodashFilters)
}