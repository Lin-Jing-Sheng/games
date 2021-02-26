/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val == 'boolean') {
    return false;
  }
  if (typeof val == 'number') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
    return false;
  }
  return false;
}

/**
 * 判断姓名是否正确
 */
export function validateName(rule, value, callback) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/;
  if (!validatenull(value)) {
    if (!regName.test(value)) {
      return callback(new Error('请输入正确的中文姓名'));
    } else return callback()
  } else {
    return callback(new Error('姓名不能为空'));
  }

}

// 手机号正确格式校验
export function validatePhone(rule, value, callback) {
  var isPhone = /^1[0-9]{10}$/;
  if (!validatenull(value)) {
    if (value.length == 11) {
      if (!isPhone.test(value)) {
        return callback(new Error('手机号码格式不正确'));
      } else return callback()
    } else {
      return callback(new Error('请输入11位手机号'));
    }
  } else {
    return callback(new Error('手机号码不能为空'));
  }
}

//正整数类型校验
export function integer(rule, value, callback) {
  if (!validatenull(value)) {
    if (value < 0) {
      return callback(new Error('数值必须大于零'))
    } else {
      return callback()
    }
  } else {
    return callback(new Error("内容不能为空"))
  }
}

//经度纬度输入验证，两个数字以逗号链接
export function longLatitud(rule, value, callback) {
  let reg = /^(\d+[,])*(\d+)$/
  if(value==null){
    return callback();
  }
  if (!reg.exec(value)[1]) {
    return callback(new Error('经纬度为数字且以逗号相隔'));
  } else {
    return callback();
  }
}

//MAC地址校验
export function MACvalidate(MAC) {
  let reg = "([A-Fa-f0-9]{2}-){5}[A-Fa-f0-9]{2}"
  let regexp = new regExp(reg)
  if (!regexp.test(MAC)) {
    return callback(new Error('请输入正确格式的MAC地址'))
  } else return callback(new Error('请输入正确格式的MAC地址'))
}


//是否正整数
export function isUpInt(rule, value, callback) {
  var n = Math.round(Number(value));
  var flag = n !== Infinity && String(n) == value && n > 0;
  if (flag) {
    return callback();
  } else {
    return callback(new Error("请输入正整数"));
  }
};


//是否正数
export function isUpDouble(rule, value, callback) {
  var n = Number(value);
  var flag = n !== Infinity && String(n) == value && n > 0;
  if (flag) {
    return callback();
  } else {
    return callback(new Error("请输入正数"));
  }
};
