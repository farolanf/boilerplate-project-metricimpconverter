/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function(input) {
    const inputRe = /^([0-9./-]+)?\s*[a-zA-Z]+$/
    const numberRe = /^(?:-?\d+(?:\.\d*)?)(?:\/(?:-?\d+(?:\.\d*)?))?$/

    var result = 'invalid number';

    const match = input.match(inputRe)
    
    if (match) {
      if (!match[1]) {
        result = 1
      } else if (numberRe.test(match[1])) {
        eval('result = ' + match[1])
      }
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var result = 'invalid unit';
    const match = input.match(/(gal|l|lbs|kg|mi|km)\s*$/i)
    if (match) {
      result = match[1]
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const input = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    const expect = ['l', 'gal', 'kg', 'lbs', 'km', 'mi']
    var result;
    const i = input.indexOf(initUnit.toLowerCase())
    if (i === -1) return initUnit
    return result = expect[i];
  };

  this.spellOutUnit = function(unit) {
    const name = {
      gal: 'gallons',
      l: 'litres',
      lbs: 'pounds',
      kg: 'kilograms',
      mi: 'miles',
      km: 'kilometers'
    }
    return name[unit.toLowerCase()] ? name[unit.toLowerCase()] : unit;
  };
  
  this.convert = function(initNum, initUnit) {
    if (isNaN(initNum)) return initNum
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal': result = initNum * galToL; break;
      case 'l': result = initNum / galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'mi': result = initNum * miToKm; break;
      case 'km': result = initNum / miToKm; break;
      default: return initNum
    }
    return Math.round(result * 1e5) / 1e5;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    const from = this.spellOutUnit(initUnit.toLowerCase())
    const to = this.spellOutUnit(returnUnit.toLowerCase())
    result = `${initNum} ${from} converts to ${returnNum} ${to}`
    return result;
  };
  
}

module.exports = ConvertHandler;
