import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './index.scss';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});