var users = [
  {
    id: 1,
    first_name: 'Dulcinea',
    last_name: 'Beeton',
    email: 'dbeeton0@google.co.uk',
  },
  {
    id: 2,
    first_name: 'Shoshanna',
    last_name: 'Eymer',
    email: 'seymer1@behance.net',
  },
  {
    id: 3,
    first_name: 'Cull',
    last_name: 'Nazareth',
    email: 'cnazareth2@squidoo.com',
  },
  {
    id: 4,
    first_name: 'Dorella',
    last_name: 'Damerell',
    email: 'ddamerell3@taobao.com',
  },
  {
    id: 5,
    first_name: 'Robena',
    last_name: 'Jankovic',
    email: 'rjankovic4@youtube.com',
  },
  {
    id: 6,
    first_name: 'Jarret',
    last_name: 'Guitton',
    email: 'jguitton5@ucoz.ru',
  },
  {
    id: 7,
    first_name: 'Elias',
    last_name: 'Hanson',
    email: 'ehanson6@aol.com',
  },
  {
    id: 8,
    first_name: 'Corby',
    last_name: 'Gartrell',
    email: 'cgartrell7@sogou.com',
  },
  {
    id: 9,
    first_name: 'Scarlet',
    last_name: 'Eilhertsen',
    email: 'seilhertsen8@reverbnation.com',
  },
  {
    id: 10,
    first_name: 'Merv',
    last_name: 'Lequeux',
    email: 'mlequeux9@sohu.com',
  },
];

class Table {
  constructor(tagID, data) {
    this.container = document.querySelector(tagID);
    this.data = data;
    this.table = document.createElement('table');
    this.table.className = 'table';
  }

  createRow(rowData) {
    return `
      <tr class='table-row'>
        <td class='table-cell'>${rowData.id}</td>
        <td class='table-cell'>${rowData.first_name}</td>
        <td class='table-cell'>${rowData.last_name}</td>
        <td class='table-cell'>${rowData.email}</td>
      </tr>`;
  }

  render() {
    let html = '';
    this.data.forEach((user) => {
      html += this.createRow(user);
    });
    this.table.innerHTML = html;
    this.container.appendChild(this.table);
    this.table.onclick = this.whenClick;
    this.table.ondblclick = this.whenDblClick;
  }

  whenClick(event) {
    const currentRow = event.target.parentNode;
    currentRow.classList.toggle('yellow-row');
  }

  whenDblClick(event) {
    const currentUser = event.target.parentNode;
    const firstName = currentUser.childNodes[3].innerText;
    const lastName = currentUser.childNodes[5].innerText;
    const message = `${firstName} ${lastName}`;
    alert(message);
  }
}

(function () {
  const storage = {
    setUser(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },

    getUser(key) {
      return JSON.parse(localStorage.getItem(key));
    },
  };

  if (!storage.getUser('users')) {
    storage.setUser('users', users);
  }

  const localUsers = JSON.parse(localStorage.getItem('users'));
  const table = new Table('#table', localUsers);
  table.render();

  const form = document.querySelector('#form');
  form.onsubmit = function (event) {
    event.preventDefault();

    const id = this.user_id.value;
    const first_name = this.first_name.value;
    const last_name = this.last_name.value;
    const email = this.email.value;

    const inputUser = { id, first_name, last_name, email };

    localUsers.push(inputUser);
    localStorage.setItem('users', JSON.stringify(localUsers));
    table.render();
  };
})();
