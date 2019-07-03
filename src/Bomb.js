import Cell from './Cell';

export default class Bomb extends Cell {
    constructor(x, y, context, sandbox) {
        super(x, y, context);
        this.sandbox = sandbox;
    }

    click() {
        this.sandbox.showAllBomb();
        this.node.style.background = '#F00';
        this.updateState();
    }

    updateState() {
        this.state = 1;
    }

    render() {
        if (this.state !== null) {
            this.node.innerHTML = '*';
        }
    }
}