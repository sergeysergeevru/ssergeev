import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './index.scss';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

var app = new Vue({
    el: '#app',
    data: { profile: null },
    mounted: function () {
        var that = this;
        fetch("/data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                that.profile = myJson;
            });
        console.log(this);
    },
    methods: {}
});