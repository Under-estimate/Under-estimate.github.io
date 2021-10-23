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