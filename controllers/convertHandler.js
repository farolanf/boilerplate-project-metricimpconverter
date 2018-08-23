/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  const pairs = {
    gal: 'L',
    lbs: 'kg',
    mi: 'km'
  }

  const pairsReverse = Object.keys(pairs).reduce((obj, key, pairs) => {
    obj[pairs[key]] = key
    return obj
  }, {})
  
  this.getNum = function(input) {
    var result = null;
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
    const match = input.match(/(gal|L|lbs|kg|mi|km)\s*$/)
    if (match) {
      result = match[1]
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    result = pairs[initUnit] ? pairs[initUnit] 
      : pairsReverse[initUnit] ? pairsReverse[initUnit] : false
    return result;
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
    const unitStr = {
      gallon
    }
    var result;
    var fromUnit = initNum
    result = `${initNum} ${fromUnit} converts to ${returnNum} ${toUnit}`
    return result;
  };
  
}

module.exports = ConvertHandler;
