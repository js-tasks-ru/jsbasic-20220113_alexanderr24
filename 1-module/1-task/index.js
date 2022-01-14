function factorial(n) {
  // ваш код...
  let f = 1;

  do {
    if (n == 0) {
      f = 1;
      break;
    }
    f *= n;
    n -= 1;
  } while (n > 1);

  return f;
}
