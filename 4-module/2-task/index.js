function makeDiagonalRed(table) {
  // ваш код...
  let getCountElemets = Array.from(table.rows).length;
  for (let i = 0; i < getCountElemets; i++) {
    table.rows[i].cells[i].style.backgroundColor = "red";
  }
}
