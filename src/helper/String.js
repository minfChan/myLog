/**
 * 文言
 */
const Labels = {
  // 测试
  helloword: ['一', '二', '三', '四'],

  // 用户数据自定义
  TABELDATA: [
    { id: 1, name: 'admin', address: '重庆九龙坡 113号' }, 
    { id: 2, name: 'google', address: '加利福尼亚 1024街'}, 
    { id: 3, name: 'baidu', address: '北京海淀区 1024号'}, 
    { id: 6, name: 'alibaba', address: '浙江杭州 1024 号'},
    { id: 5, name: 'jiaguwen', address: 'USA 1024 号'},
    { id: 4, name: 'vue', address: 'China 1024 号'}
  ]
}

const Strings = {
  Labels: Labels,

  FileExt: '.doc|.docx|.docm|.xls|.xlsx|.xlsm|.ppt|.pptx|.pptm|.pdf|.bmp|.gif|.jpeg|.jpg|.tiff|.tif|.png',
  ImageExt: '.bmp|.gif|.jpeg|.jpg|.tiff|.tif|.png',

  LOADING: '加载中...'
}

export default Strings;