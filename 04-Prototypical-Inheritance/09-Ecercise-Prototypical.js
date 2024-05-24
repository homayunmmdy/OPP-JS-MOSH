function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focued');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    }

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

// baseHtmlSelectElement
//HtmlSelectElement.prototype = Object.create(HtmlElement.propery); // baseHtmlElement


HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// new HtmlSelectElement.prototype.constructor
// new HtmlSelectElement();