import MyAxios from 'axios';

MyAxios.install=function(Vue){
    var instance =MyAxios.create({
        baseURL:"http://localhost:8888/api/private/v1/"
    });
    Vue.prototype.$axios=instance;
}

export default MyAxios;