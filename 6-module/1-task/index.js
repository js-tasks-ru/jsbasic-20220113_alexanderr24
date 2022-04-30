/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.template();
    this.deleteUser();
  }

  template() {
    let table = document.createElement('table');
    table.innerHTML = `
        <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      ${this.rows.map(item => {
        return `
          <tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.salary}</td>
            <td>${item.city}</td>
            <td><button>X</button></td>
          </tr>
        `;
     }).join('')
      }
      </tbody>
    `;

    return table;
  }

  deleteUser() {
    this.elem.querySelectorAll('button').forEach(item => {
      item.addEventListener('click', () => {
        item.parentElement.parentElement.remove();
      });
    });
  }
}
