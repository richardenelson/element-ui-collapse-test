// ----- IMPORTS ----- //
import Vue from 'vue';
import App from './App.vue';


// ----- IMPORT & REGISTER UI COMPONENTS ----- //
import {
	Button,
	Card,
	Col,
	Collapse,
	CollapseItem,
	Input,
	Loading,
	MessageBox,
	Popover,
	Row,
	Slider
} from 'element-ui';

Vue.use( Button );
Vue.use( Card );
Vue.use( Col );
Vue.use( Collapse );
Vue.use( CollapseItem );
Vue.use( Input );
Vue.use( Popover );
Vue.use( Row );
Vue.use( Slider );

Vue.use( Loading.directive );

Vue.prototype.$loading = Loading.service;

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;


// ----- VUE ----- //
new Vue( {
	el: '#app',
	render: h => h( App )
} );
