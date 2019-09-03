const template = document.createElement('template');
const types = ['default', 'red', 'green', 'blue'];
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

template.innerHTML = `
<style>
    #container {
        padding: 8px 16px;
        border: 1px solid #ddd;
        font-style: italic;
    }

    #container[type="red"] {
        background: red;
        color: #fff;
    }

    #container[type="blue"] {
        background: blue;
        color: #fff;
    }

    #container[type="green"] {
        background: green;
        color: #fff;
    }

    #container[type="default"] {
        background: none;
    }
</style>
<div id="container">
    <h3>Notificaton - <small>Web Component</small></h3>
    <button type="button" id="random-type">Make it random</button>
    <button type="button" id="red-type">Make it red</button>
</div>`;

class Notification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.btnRandomType = this.shadowRoot.querySelector('#random-type');
        this.btnRedType = this.shadowRoot.querySelector('#red-type');
        this.container = this.shadowRoot.querySelector('#container');
        this.container.setAttribute('type', 'default');

        this.btnRandomType.addEventListener('click', () => {
            console.log('Make it random - click');

            this.container.setAttribute(
                'type',
                types[getRandomInt(0, types.length - 1)]
            );
        });

        this.btnRedType.addEventListener('click', () => {
            console.log('Make it red - click');

            this.container.setAttribute('type', 'red');
        });
    }

    static get observedAttributes() {
        return ['type'];
    }

    connectedCallback() {}

    attributesChangedCallback(name, oldVal, newVal) {
        console.log({ oldVal, newVal, name });
    }
}

window.customElements.define('sunpietro-notification', Notification);
