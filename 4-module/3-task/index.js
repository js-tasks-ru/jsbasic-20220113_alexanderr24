function highlight(table) {
  // ваш код...
  let arr = Array.from(table.lastElementChild.rows);

  arr.forEach((item) => {
    let tdLastElements = item.lastElementChild;

    if (tdLastElements.hasAttribute("data-available")) {
      switch (tdLastElements.getAttribute("data-available")) {
        case "true":
          item.classList.add("available");
          break;
        case "false": {
          item.classList.add("unavailable");
          break;
        }
      }
    } else {
      item.setAttribute("hidden", "");
    }
    

    let tdGender = item.children[2];
    switch (tdGender.textContent) {
      case "m": {
        item.classList.add("male");
        break;
      }
      case "f": {
        item.classList.add("female");
        break;
      }
    }

    let tdAge = item.children[1];
    if (tdAge.textContent < 18) {
      item.style.textDecoration = "line-through";
    }
  });
}
