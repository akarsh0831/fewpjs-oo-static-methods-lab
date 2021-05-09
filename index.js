class Formatter {
    static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    const avoid = /[#@!$*^({]/g
    return string.replace(avoid, '')
  }

  static titleize(string) {
    const avoid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newString = []
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
      if (i == 0) {
        newString.push(this.capitalize(array[i]))
      } else {
        if (avoid.includes(array[i])) {
          newString.push(array[i])
        } else {
          newString.push(this.capitalize(array[i]))
        }
      }
    }
    return newString.join(' ')
  }
  //add static methods here
}