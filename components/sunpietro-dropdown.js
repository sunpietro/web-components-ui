(function() {
    const template = document.createElement('template');

    // https://dribbble.com/shots/7125812-Icon-transition-on-country-code-dropdown-InVision-Studio

    template.innerHTML = `
<style>
:host {
    position: relative;
    z-index: 1;
    display: block;
}
*,
*:after,
*:before {
    box-sizing: border-box;
}

#container {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    z-index: 1;
    width: 100%;
}

#selected-value {
    line-height: 32px;
    padding: 0 16px;
    border-radius: 16px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #fff;
}

.expanded #selected-value {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 2px solid #333;
}

#list {
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    position: absolute;
    z-index: 2;
    top: 32px;
    left: 0;
    right: 0;
    background: #fff;
}

.expanded #list {
    display: flex;
    flex-direction: column;
}

.list-item {
    padding: 0 16px;
    line-height: 32px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.list-item:hover,
.list-item:focus {
    background: #e0e2db;
}

.list-item[data-selected='true'] {
    background: #d1d1d1;
    pointer-events: none;
}
</style>
<div id="container">
    <div id="selected-value"></div>
    <ul id="list"></ul>
</div>`;

    class Dropdown extends HTMLElement {
        _refSelectedValueLabel = null;
        _refList = null;
        _refContainer = null;
        _refOptions = null;
        selectedValue = null;
        options = {};

        constructor() {
            super();
            this.attachShadow({ mode: 'open' });

            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this._renderOption = this._renderOption.bind(this);
        }

        connectedCallback() {
            this._refList = this.shadowRoot.querySelector('#list');
            this._refSelectedValueLabel = this.shadowRoot.querySelector(
                '#selected-value'
            );
            this._refContainer = this.shadowRoot.querySelector('#container');

            if (this.hasAttribute('selectedValue')) {
                this.selectedValue = this.getAttribute('selectedValue');
            }

            if (this.hasAttribute('options')) {
                this.options = JSON.parse(this.getAttribute('options'));

                const options = Object.entries(this.options).reduce(
                    this._renderOption,
                    document.createDocumentFragment()
                );

                this._refList.append(options);
                this._refSelectedValueLabel.addEventListener(
                    'click',
                    this._showList,
                    false
                );

                this._refOptions = this._refList.querySelectorAll('.list-item');
            }
        }

        disconnectedCallback() {
            document.body.removeEventListener('click', this._hideList);
            this._refSelectedValueLabel.removeEventListener(
                'click',
                this._showList
            );
        }

        attributesChangedCallback(name, oldVal, newVal) {
            console.log('attributesChangedCallback', { name, oldVal, newVal });
        }

        get options() {
            return this.options;
        }

        set options(newVal) {
            this.options = JSON.parse(newVal);
        }

        get selectedValue() {
            return this.selectedValue;
        }

        set selectedValue(newVal) {
            this._updateSelectedLabel(label);
        }

        _showList = () => {
            this._refContainer.classList.add('expanded');
            document.body.addEventListener('click', this._hideList, false);
        };

        _hideList = event => {
            if (event && event.target === this) {
                return;
            }

            this._refContainer.classList.remove('expanded');
            document.body.removeEventListener('click', this._hideList);
        };

        _selectOption = event => {
            this._updateSelectedLabel(event.target.dataset.value);
            this._updateOptionsSelectedState(event.target.dataset.value);
            this._hideList();
        };

        _updateOptionsSelectedState = value => {
            this._refOptions.forEach(option => {
                option.dataset.selected = false;

                if (option.dataset.value === value) {
                    option.dataset.selected = true;
                }
            });
        };

        _updateSelectedLabel = value => {
            const label = this.options[value];

            this.selectedValue = value;
            this._refSelectedValueLabel.innerHTML = label;
        };

        _renderOption = (total, [value, label], index) => {
            const element = document.createElement('li');

            element.classList.add('list-item');
            element.dataset.value = value;
            element.dataset.selected = false;
            element.innerText = label;
            element.tabIndex = -1;
            element.addEventListener('click', this._selectOption, false);

            if (this.selectedValue === null && index === 0) {
                element.dataset.selected = true;

                this._updateSelectedLabel(value);
            } else if (!!this.selectedValue && this.selectedValue === value) {
                element.dataset.selected = true;

                this._updateSelectedLabel(value);
            }

            total.append(element);

            return total;
        };
    }

    window.customElements.define('sunpietro-dropdown', Dropdown);
})();
