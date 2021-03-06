
/**
 * 通用js方法封装处理
 */

// 日期格式化
// pattern 模式
export function parseTime (time, pattern) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/')
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatSeconds (time) {
  time = time / 1000
  // let days = Math.floor(time / (60 * 60 * 24));
  let modulo = time % (60 * 60 * 24);
  let hours = Math.floor(modulo / (60 * 60));
      hours = hours < 10 ? ('0' + hours) : hours;
      modulo = modulo % (60 * 60);
  let minutes = Math.floor(modulo / 60);
      minutes = minutes < 10 ? '0' + minutes : minutes;
  let seconds = modulo % 60;
      seconds = ('0' + seconds).slice(-2)
  let str = hours + ':' + minutes + ':' + seconds
  return str
}

// 添加日期范围
export function addDateRange (params, dateRange) {
  var search = params
  search.beginTime = ''
  search.endTime = ''
  if (dateRange != null && dateRange != '') {
    search.beginTime = this.dateRange[0]
    search.endTime = this.dateRange[1]
  }
  return search
}

// 回显数据字典
export function selectDictLabel (datas, value) {
  var actions = []
  Object.keys(datas).map((key) => {
    if (datas[key].dictValue == ('' + value)) {
      actions.push(datas[key].dictLabel)
      return false
    }
  })
  return actions.join('')
}

// 回显数据字典（字符串数组）
export function selectDictLabels (datas, value, separator) {
  var actions = []
  var currentSeparator = undefined === separator ? ',' : separator
  var temp = value.split(currentSeparator)
  Object.keys(value.split(currentSeparator)).some((val) => {
    Object.keys(datas).some((key) => {
      if (datas[key].dictValue == ('' + temp[val])) {
        actions.push(datas[key].dictLabel + currentSeparator)
      }
    })
  })
  return actions.join('').substring(0, actions.join('').length - 1)
}

// 字符串格式化(%s )
export function sprintf (str) {
  var args = arguments; var flag = true; var i = 1
  str = str.replace(/%s/g, function () {
    var arg = args[i++]
    if (typeof arg === 'undefined') {
      flag = false
      return ''
    }
    return arg
  })
  return flag ? str : ''
}

// 转换字符串，undefined,null等转化为""
export function praseStrEmpty (str) {
  if (!str || str == 'undefined' || str == 'null') {
    return ''
  }
  return str
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId 根Id 默认 0
 */
export function handleTree (data, id, parentId, children, rootId) {
  id = id || 'id'
  parentId = parentId || 'parentId'
  children = children || 'children'
  rootId = rootId || Math.min.apply(Math, data.map(item => { return item[parentId] })) || 0
  // 对源数据深度克隆
  const cloneData = JSON.parse(JSON.stringify(data))
  // 循环所有项
  const treeData = cloneData.filter(father => {
    const branchArr = cloneData.filter(child => {
      // 返回每一项的子级数组
      return father[id] === child[parentId]
    })
    branchArr.length > 0 ? father.children = branchArr : ''
    // 返回第一层
    return father[parentId] === rootId
  })
  return treeData != '' ? treeData : data
}

/**
 * 表格时间格式化
 */
export function formatDate (cellValue) {
  if (cellValue === null || cellValue === '' || cellValue === undefined) return ''
  var date = new Date(cellValue)
  var year = date.getFullYear()
  var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime (time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject (url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength (str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray (actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param (json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text (val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge (target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass (element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime (type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce (func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone (source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr (arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString () {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass (ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass (ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass (ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

export function makeMap (str, expectsLowerCase) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}

// 首字母大小
export function titleCase (str) {
  return str.replace(/( |^)[a-z]/g, L => L.toUpperCase())
}

// 下划转驼峰
export function camelCase (str) {
  return str.replace(/-[a-z]/g, str1 => str1.substr(-1).toUpperCase())
}

export function isNumberStr (str) {
  return /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(str)
}

// 一月前
export function ageMonth () {
  var startTime = new Date()
  startTime.setDate(startTime.getDate() - 1) // 前一天的一月前
  var month = startTime.getMonth()
  month = month < 10 ? '0' + month : month
  var date = startTime.getDate()
  date = date < 10 ? '0' + date : date
  return startTime.getFullYear() + '-' + month + '-' + date
}

// 下个月
export function nextMonth () {
  var startTime = new Date()
  startTime.setMonth(startTime.getMonth() + 2)
  var month = startTime.getMonth()
  month = month < 10 ? '0' + month : month
  var date = startTime.getDate()
  date = date < 10 ? '0' + date : date
  return startTime.getFullYear() + '-' + month + '-' + date
}

// 一天前
export function agoDay () {
  var endTime = new Date()
  endTime.setDate(endTime.getDate() - 1)
  var month = endTime.getMonth() + 1
  month = month < 10 ? '0' + month : month
  var date = endTime.getDate()
  date = date < 10 ? '0' + date : date
  return endTime.getFullYear() + '-' + month + '-' + date
}

/**
 * @param {number} 1234567
 * @returns {string} 1,234,567.00
 */
export function convert (money) {
  if (!money) { return }
  var m = money.toString().split('.')
  var m1 = m[0]
  if (!m[1]) { m[1] = '00' } // 加不加0看需求
  var m2 = m.length > 1 ? '.' + m[1] : ''
  var reg = /(\d+)(\d{3})/
  while (reg.test(m1)) {
    m1 = m1.replace(reg, '$1' + ',' + '$2')
  }
  return m1 + m2
}

/**
 * @param {number} 1234567
 * @returns {string} 1,234,567.00 00是sup上角标
 */
export function convertSup (money) {
  if (!money) return null
  var m = money.toString().split('.')
  var m1 = m[0]
  if (!m[1]) { m[1] = '00' } // 加不加0看需求
  var m2 = m.length > 1 ? '<sup>.' + m[1] + '</sup>': ''
  var reg = /(\d+)(\d{3})/
  while (reg.test(m1)) {
    m1 = m1.replace(reg, '$1' + ',' + '$2')
  }
  return m1 + m2
}

/**
 * @param {number} 12345
 * @returns {string} 1.23万
 */
export function convertNum (value) {
  if (!value) return null
  if (!isNaN(value)) value = value.toString()
  if (value.length < 5) return value
  value = Math.floor((value / 10000) * 100) / 100 // 保留小数点两位
  return value + '万'
}

/**
 * @param {string} 18310746666
 * @returns {string} 183****6666 前3后4，中间4星
 */

export function mobileToStar (value) {
  if (!value) return null
  let reg = '', str = ''
  if (!isNaN(value)) value = value.toString()
  let len = value.length
  if (len === 4) {
    reg = /^([A-Za-z0-9]{1})([A-Za-z0-9]{2})([A-Za-z0-9]{1})$/
    str = value.replace(reg, '$1**$3')
  } else if (len === 5) {
    reg = /^([A-Za-z0-9]{1})([A-Za-z0-9]{3})([A-Za-z0-9]{1})$/
    str = value.replace(reg, '$1***$3')
  } else if (len > 5 && len < 21) { // 隐藏中间4位
    var num = Math.floor(len / 2) - 2
    str = value.substr(0, num) + '****' + value.substr(num + 4)
  } else if (len > 20) {
    str = value.substr(0, 6) + '****' + value.substr(len - 6)
  }
  return str
}

// JavaScript中Number最大的安全整数为16位。如果超出后还需使用可以考虑转换成String类型
/**
 * 隐藏身份证中间8位数
 * @param {data} 传入数据
 * 格式：530026******2101
 */
export function idCardToStar (value) {
  if (!value) return null
  if (!isNaN(value)) value = value.toString()
  let reg = /^(.{6})(.+)(.{4})$/
  let str = value.replace(reg, '$1********$3')
  return str
}

/**
 * 只隐藏姓名中间的字
 * @param {string} 传入数据
 * 格式：张*三
 */
export function fullNameCenterToStar (name) {
  let newName = ''
  let arr = Array.from(name)
  newName = arr.slice(0, 1).join('') + '*' + arr.slice(-1).join('')
  return newName
}

/**
 * 只显示姓氏
 * @param {string} 传入数据
 * 格式：张**
 */
export function firstNameToStar (name) {
  let newName = ''
  let arr = Array.from(name)
  let star = ''
  for (let i = 0, len = arr.length - 1;i < len; i++) {
    if(i >= 6) break // star 最多显示6位
    star += '*'
  }
  newName = arr.slice(0, 1).join('') + star
  return newName
}
