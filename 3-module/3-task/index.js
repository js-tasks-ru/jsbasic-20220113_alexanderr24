function camelize(str) {
  // ваш код...
  return str.split('-')
         .map((item, i) => i == 0 ? item : item.slice(0, 1).toUpperCase() + item.slice(1))
         .join('');
}
