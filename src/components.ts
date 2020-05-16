namespace Components {
  export class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This s Header';
      document.body.appendChild(elem);
    }
  }

  export class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This s Content';
      document.body.appendChild(elem);
    }
  }

  export class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This s Footer';
      document.body.appendChild(elem);
    }
  }
}
