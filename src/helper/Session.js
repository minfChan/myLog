/***
 ** 缓存 操作类
***/

export default {
	get(key) {
		return sessionStorage.getItem(key);
	},

	set(key, val) {
		sessionStorage.setItem(key, val);
	},

	remove(key) {
		sessionStorage.removeItem(key);
	},

	removeAll() {
		sessionStorage.clear();
	},

	//强缓存
	getS(key) {
		return localStorage.getItem(key);
	},

	setS(key, val) {
		localStorage.setItem(key, val);
	},

	removeS(key) {
		localStorage.removeItem(key);
	},

	removeAllS() {
		localStorage.clear();
  },
  
  doLogin(data) {
    localStorage.setItem('username', data);
  },

  doLogout(data) {
    localStorage.removeItem(data); 
  },

}