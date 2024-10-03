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
}

HTMLSelectElement.prototype = new HTMLElement()
HTMLSelectElement.prototype.constructor = HTMLSelectElement;