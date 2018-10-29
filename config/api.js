var api1= process.env.API_1;
var api2 = process.env.API_2;

export default {
  API_1: api1,
  API_2: api2,
  API_singlePoetry: 'http://api.apiopen.top/singlePoetry', //古诗词api
  API_weather: 'https://www.apiopen.top/weatherApi', //天气 参数:city
  API_city: 'https://search.heweather.com/top?key=a1dbc59d157a4014a06d39cfe0a1612f'//城市 带唯一key
}
//process.env.API_1 接口调用方式