/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
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
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
