export class StringUtil {
  /**
     * @description 判断是否是空
     * @param data 要判断的数据可以是：字符串，数组，对象，undefined, null
     */
    static isEmpty (data: any): boolean {
      if (typeof data === 'string') {
        return !data
      } else if (typeof data === 'object') {
        if (data instanceof Array) {
          return !data.length
        } else if (data === null) {
          return true
        } else {
          return (JSON.stringify(data) === '{}')
        }
      } else if (typeof data === 'number') {
        return !data
      } else {
        return true
      }
    }

    /**
   * @description 判断字符串是否为手机号码
   * @param str 要判断的手机号码字符串
   */
  static isPhoneNumber (str: string): boolean {
    const myreg = /^[1][0-9]{10}$/
    if (!myreg.test(str)) {
      return false
    } else {
      return true
    }
  }

  /**
     * 获取所有大写英文字母
     */
    public static getWords (): string[] {
      let count = 0
      const arr = []
      for (let i = 65; i < 91; i++) {
        arr[count] = String.fromCharCode(i)
        count++
      }
      return arr
    }
}