//`https://itunes.apple.com/search?term=${encodeURIComponent(this.term)}&limit=10&media=music`

Vue.filter('formatDate', function(d) {
	if(!window.Intl) return d;
	return new Intl.DateTimeFormat('en-US').format(new Date(d));
}); 

const app = new Vue({
	el:'#app',
	data:{
	},
	methods:{
	}
});