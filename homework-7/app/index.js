const users = [
  {
    id: 1,
    name: 'Veronika',
    email: 'vgroves0@vistaprint.com',
    age: 50,
    city: 'Javhlant',
    gender: 'Female',
    inn: 2604048463,
  },
  {
    id: 2,
    name: 'Correy',
    email: 'cskidmore1@shop-pro.jp',
    age: 50,
    city: 'Junglinster',
    gender: 'Male',
    inn: 5396152028,
  },
  {
    id: 3,
    name: 'Chrissie',
    email: 'csobieski2@go.com',
    age: 40,
    city: 'Mercaderes',
    gender: 'Female',
    inn: 7437115687,
  },
  {
    id: 4,
    name: 'Adrianna',
    email: 'awharrier3@hud.gov',
    age: 33,
    city: 'Manuel Cavazos Lerma',
    gender: 'Non-binary',
    inn: 6292774004,
  },
  {
    id: 5,
    name: 'Fairlie',
    email: 'feliasen4@bing.com',
    age: 34,
    city: 'Радовиш',
    gender: 'Female',
    inn: 5943534093,
  },
];

class Accordion {
  constructor(selector, data) {
    this.container = document.querySelector(selector);
    this.data = data;
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'accordion';
  }

  createAccItem(userData) {
    return `
    <div class='accItem'>
      <div class='accHeader'><b>${userData.name}</b></div>
      <div class='accBody'>
        <div class='avatar'>AVATAR</div>
        <div class='info_1'>
          <p><b>inn:</b> ${userData.inn}</p>
          <p><b>name:</b> ${userData.name}</p>
          <p><b>age:</b> ${userData.age}</p>
        </div>
        <div class='info_2'>
          <p><b>email:</b> ${userData.email}</p>
          <p><b>city:</b> ${userData.city}</p>
          <p><b>gender:</b> ${userData.gender}</p>
        </div>    
      </div>
    </div>
    `;
  }

  render() {
    let html = '';
    this.data.forEach((user) => {
      html += this.createAccItem(user);
    });
    this.wrapper.innerHTML = html;
    this.wrapper.onclick = this.show;
    this.container.appendChild(this.wrapper);
  }

  show(event) {
    const headItem = event.target;

    if (!headItem.classList.contains('accHeader')) return;

    const bodyItem = headItem.parentNode.querySelector('.accBody');
    bodyItem.classList.toggle('show');
  }
}

const accUsers = new Accordion('#accordion', users);
accUsers.render();
