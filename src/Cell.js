export default class Cell {
    constructor(x, y, context, width = 25, height = 25) {
        this.x = x;
        this.y = y;
        this.state = null;
        this.node = document.createElement('div');
        this.node.node = this;

        context.appendChild(this.node);
        this.node.style.border = '1px solid #333';
        this.node.style.width = width + 'px';
        this.node.style.height = height + 'px';
        this.node.style.position = 'absolute';
        this.node.style.boxSizing = 'border-box';
        this.node.style.background = '#CCC';

        this.node.style.left = x * width + 'px';
        this.node.style.top = y * height + 'px';
    }

    updateState() {

    }

    click() {

    }

    render() {

    }
}