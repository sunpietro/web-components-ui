const template = document.createElement('template');

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
<section id="container">
    <slot name="title"><h3>Notification title</h3></slot>
    <div id="message"><slot>Sample message</slot></div>
    <button type="button" id="close">&times;</button>
</section>`;

class Notification extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['type'];
    }

    _onClose() {
        this.dispatchEvent(
            new CustomEvent('close', { bubbles: true, detail: null })
        );
    }

    connectedCallback() {
        this.btnClose = this.shadowRoot.querySelector('#close');
        this.container = this.shadowRoot.querySelector('#container');

        this.btnClose.addEventListener('click', this._onClose, false);
    }

    disconnectedCallback() {
        this.btnClose.removeEventListener('click', this._onClose);
    }

    attributesChangedCallback(name, oldVal, newVal) {
        console.log({ oldVal, newVal, name });
    }
}

window.customElements.define('sunpietro-notification', Notification);
