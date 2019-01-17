import _ from 'lodash'

const VueLodashFilters = {
    install: function (Vue) {
        Vue.filter('capitalize', function (text) {
            return _.capitalize(text)
        });

        Vue.filter('upperFirst', function (text) {
            return _.upperFirst(text)
        });

        Vue.filter('startCase', function (text) {
            return _.startCase(text)
        });
    }
};

export default VueLodashFilters

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLodashFilters)
}
