// class Body / Constructor
class Body {
  constructor() {
    this.node = document.createElement('div');
    this.node.setAttribute('class', 'body-part');
    this.node.setAttribute('id', store.bodyPartId);

    const bodyPart = {
      top: store.head.top,
      left: store.head.left,
    };

    store.body.push(bodyPart);

    board.appendChild(this.node);
    console.log(store.head);
    this.node.style.transform = `translate(${store.head.left}px, ${store.head.top}px) translateZ(50px)`;
    store.bodyPartId += 1;
  }
}
// Grow snake
function growSnake() {
  const bodySection = new Body();
}
// Move snake