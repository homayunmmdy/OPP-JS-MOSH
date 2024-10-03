function HTMLElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HTMLElement.prototype.focus = function () {
  console.log("focued");
};

function HTMLSelectElement(item = []) {
  this.item = item;

  this.addItem = function (item) {
    this.item.push(item);
  };

  this.removeItem = function (item) {
    this.item.splice(this.item.indexOf(item), 1);
  };

  this.render = function () {
    return `
    <select>${this.item.map(item => `
      <option>${item}<option>`).join("")}
    </select>
    `;
  };
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src=${this.src} />`;
  };
}

HtmlImageElement.prototype = new HTMLElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
