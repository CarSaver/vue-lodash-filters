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

        Vue.filter('lowerCase', function (text) {
            return _.lowerCase(text)
        });

        Vue.filter('get', function (text, path, defaultPath) {
            return _.get(text, path, defaultPath)
        });
    }
};

export default VueLodashFilters

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLodashFilters)
}
