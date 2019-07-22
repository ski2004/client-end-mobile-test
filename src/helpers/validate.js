

export default {
  validConfirmed(o, t) {
    return o === t
  },
  validRequired(value) {
    return value !== '' && value !== undefined && value !== null
  },
  validEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  },
  validNumeric(num) {
    let regex = /^-?[0-9]\d*(\.\d+)?$/
    return regex.test(num)
  },
  validAlphaNum(mix) {
    let regex = /^(?=.*\d)(?=.*[a-z])/
    return regex.test(mix)
  },
  validAlphaChineseNum(mix) {
    let regex = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/
    return regex.test(mix)
  },
  validInteger(num) {
    let regex = /^-?[0-9]\d*$/
    return regex.test(num)
  },
  validLength(value, limit) {
    let result = false
    if (typeof value === 'number') {
      result = value === limit
    } else if (typeof value === 'string') {
      result = value.length === limit
    }
    return result
  },
  validMax(value, limit) {
    let result = false
    if (typeof value === 'number') {
      result = value <= limit
    } else if (typeof value === 'string') {
      result = value.length <= limit
    }
    return result
  },
  validMin(value, limit) {
    let result = false
    if (typeof value === 'number') {
      result = value >= limit
    } else if (typeof value === 'string') {
      result = value.length >= limit
    }
    return result
  },

  validMobile(mobile) {
    var re = /^09\d{8}$/
    return re.test(mobile)
  },
  /**
   * 驗證權限
   * @param {*} data 
   * @param {*} play_id [1,2,3]
   */
  vaildPower(data, play_id) {
    let power = {};
    _.forEach(play_id, (play) => {
      power[play] = true;
    })
    let res = [];
    _.forEach(data, (o, index) => {
      _.forEach(o.row, (obj, i) => {
        let temp = [];
        _.forEach(o.row[i], (obj, j) => {
          let play = data[index].row[i][j].ratio.play
          // console.log(play , power)
          if (!power[play]) return;
          temp.push(data[index].row[i][j])
        });
        if (temp.length > 0) res.push(temp)
      });
      data[index].row = res;
    });
    return data
  }
}
