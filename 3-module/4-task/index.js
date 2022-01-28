function showSalary(users, age) {
  // ваш код...
  let filterUserAge = users.filter(item => item.age <= age);

  let str = '';
  
  filterUserAge.forEach((item, i) => {
    str += (i == filterUserAge.length - 1) ? `${item.name}, ${item.balance}` : `${item.name}, ${item.balance}\n`;
  });

  return str;
}
