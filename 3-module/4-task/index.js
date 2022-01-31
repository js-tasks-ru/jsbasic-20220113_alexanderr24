function showSalary(users, age) {
  // ваш код...
  let filterUserAge = users.filter((item) => item.age <= age);
  let getUsers = filterUserAge.map((item) => `${item.name}, ${item.balance}`).join('\n');

  return getUsers;
}
