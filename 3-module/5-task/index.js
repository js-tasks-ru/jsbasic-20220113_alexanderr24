function getMinMax(str) {
  // ваш код...
  let strArr = str.split(' ');
  let numberArr = strArr.filter(item => isFinite(item));

  let minNumber = Math.min(...numberArr);
  let maxNumber = Math.max(...numberArr);
  
  return {
    min: minNumber,
    max: maxNumber
  };
}
