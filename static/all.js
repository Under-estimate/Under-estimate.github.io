function getGOH() {
    let c = document.cookie
    if(c.length <= 0) {
        showOauth()
        return null
    }
    let arr = c.split(";")
    for(let i in arr) {
        let pair = arr[i].split("=")
        if(pair[0].trim() == "goh") return pair[1]
    }
    return null
}

function getURLParam(name) {
    let splited = location.href.split("?")
    if(splited.length <= 1) return null
    let params = splited[1].split("&")
    for(let i in params) {
        let pair = params[i].split("=")
        if(pair[0] == name) return pair[1]
    }
    return null
}

Date.prototype.format = function(fmt){
    var o = {
      "M+" : this.getMonth()+1,                 //月份
      "d+" : this.getDate(),                    //日
      "h+" : this.getHours(),                   //小时
      "m+" : this.getMinutes(),                 //分
      "s+" : this.getSeconds(),                 //秒
      "q+" : Math.floor((this.getMonth()+3)/3), //季度
      "S"  : this.getMilliseconds()             //毫秒
    };
  
    if(/(y+)/.test(fmt)){
      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
          
    for(var k in o){
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(
          RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));  
      }       
    }
  
    return fmt;
  }