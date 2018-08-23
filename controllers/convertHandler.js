/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function(input) {
    var result = 1;
    const match = input.match(/^(-?[0-9.,/]+)/)
    if (match) {
      try {
        eval('result = ' + match[1])
      }
      catch (x) {
        result = false
      }
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result = false;
    const match = input.match(/(gal|L|lbs|kg|mi|km)\s*$/i)
    if (match) {
      result = match[1]
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const input = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    const expect = ['l', 'gal', 'kg', 'lbs', 'km', 'mi']
    var result;
    const i = input.indexOf(initUnit)
    if (i === -1) return false
    return result = expect[i];
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit) {
      case 'gal': result = initNum * galToL; break;
      case 'L': result = initNum / galToL; break;
      case 'lbs': result = initNum * lbsToKg; break;
      case 'kg': result = initNum / lbsToKg; break;
      case 'mi': result = initNum * miToKm; break;
      case 'km': result = initNum / miToKm; break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    var fromUnit = this.spellOutUnit(init
    var toUnit = Math.abs(returnNum) === 1 ? unitStr[returnUnit + '1'] : unitStr[returnUnit]
    result = `${initNum} ${fromUnit} converts to ${returnNum} ${toUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
