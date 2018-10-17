/***
 ** Utils 工具类集合
***/
export default {
	//时间戳
	timestamp: () => {
		return Date.parse(new Date());
  },
  
  /**
   * 滚动到第一个错误位置
   */
  catchError() {
    setTimeout(() => {
      if (jQuery('.is-error').length) {
        var firstErr = jQuery('.is-error').eq(0).offset().top - 68;
        jQuery('html, body').animate({scrollTop: firstErr});
      }
    }, 300);
  },

	//验证邮箱地址
	isEmail: (email) => { 
		if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
			return true
		}
		return false
	},

	//验证密码规则（大于等于8位数，且包含大小写）
	validatePassword: (password) => {
    if (!(/[a-z]/.test(password) && /[A-Z]/.test(password))) {
      return false;
    }
    
    return true;
  },
  
  /**
   * 判断字符串是否包含双字节
   * Return true:包含 false:不包含
   */
  lengthB: (str) => {
    let has = false;
    var l = str.length;
    if (l) {
      for (var i = 0; i < l; i++) {
        if (str.charCodeAt(i) > 255) {
          has = true;
          break;
        }
      }
    }
    return has;
  },

  /**
   * 判断字符串是否全部为半角
   * Return true:全是半角 false:有全角
   */
  isHalfWidth: (s) => {
    let str = s.replace(/[^\uff00-\uffff]/g, '');
    if (str == '') {
      return true
    }
    return false
  },

  /**
   * 只保留数字和小数点
   */
  numOnly: (str) => {
    if (!str) return '';
    return str.toString().replace(/[^\d.]/g, '');
  },

  /**
   * 筛选出数字和小数点
   * str: 需要格式化的数字
   * beforeLen: 小数点左边位数
   * afterLen: 小数点右边位数
   */
  floatOnly: (str, beforeLen = 12, afterLen = 5) => {
    if (!str) return '';
    let newNum = '', before = '', after = '';
    let num = str.toString().replace(/[^\d.]/g, '');
    if (!num) return '';
    let numArr = num.split('.');
    if (numArr.length > 0) {
      let new1 = numArr[0];
      if (new1.length > beforeLen) {
        new1 = new1.substring(0, beforeLen);
      }
      before = new1;
    }

    if (afterLen > 0) {
      if (numArr.length > 1) {
        let new2 = numArr[1] + '';
        after = '.' + new2;
        if (new2.length > afterLen) {
          new2 = new2.substring(0, afterLen);
          after = '.' + new2;
        }
      }
      if (!after && afterLen > 0) {
        after = '.' + Array(afterLen + 1).join('0');
      } else if (afterLen > 0) {
        after += Array(afterLen - after.replace('.', '').length + 1).join('0');
      }
    }
    
    return before + after;
  },

  /**
   * 千分位 + 保留小数
   * num: 需要格式化的数字
   * n: 需要保留的小数位数，不够自动补0
   * symbol: 分隔符
   */
  splitNum(num, n = 0, symbol = ',') {
    num = num * 1;
    if (num > 0) {
      if(!num)throw new Error('splitNum需要传入一个待转换的数据');
      if(typeof num!=='number')throw new TypeError('num参数应该是一个number类型');
      if(n<0)throw new Error('参数n不应该小于0');
      var hasDot=parseInt(num)!=num;//这里检测num是否为小数，true表示小数
      var m=(n!=undefined&&n!=null)?n:1;
      num=m==0?num.toFixed(m)+'.':hasDot?(n?num.toFixed(n):num):num.toFixed(m);
      num=num.toString().replace(/(\d)(?=(\d{3})+\.)/g,function(match, p1,p2) {
          return p1 + symbol;
      });
      if(n==0||(!hasDot&&!n)){//如果n为0或者传入的num是整数并且没有指定整数的保留位数，则去掉前面操作中的小数位
          num=num.substring(0,num.indexOf('.'));
      }
      return num;
    }
  },

  /**
   * 转义空格
   */
  coverSpace(str) {
    return str.replace(/ /g, '%20');
  },

  /**
   * 序列化参数
   */
  addQueryString(params) {
    let paramsData = '';
    for (var Key in params) {
        paramsData += (paramsData.indexOf('?') == -1 ? '?' : '&') + (Key + '=' + params[Key]);
    }
    return paramsData;
  }
}