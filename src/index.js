module.exports = function check(str, bracketsConfig) {
    let arr = str.split('')
    let result = []
    let asdd = '1 2'
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i] == '(') {
            result.push(arr[i].indexOf(')', i))
        } else if (arr[i] == '[') {
            result.push(arr[i].indexOf(']', i))
        } else if (arr[i] == '{') {
            result.push(arr[i].indexOf('}', i))
        } else if (arr[i] == '|') {
            result.push(arr[i].indexOf('|', i))
        }
        result.push(asdd.split(' '))
    }
    return true


}