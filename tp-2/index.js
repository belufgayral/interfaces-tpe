class PrimaryActiveBtn extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Include a button element as content
        const button = document.createElement('button');
        button.innerHTML = '<slot></slot>';
        shadow.appendChild(button);

        // Apply custom styles to the button element
        button.style.backgroundColor = '#478D76';
        button.style.color = 'white';
        button.style.padding = '10px 20px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        // Add a click event listener
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }

    // Define a getter and setter for the 'class' attribute
    get class() {
        return this.getAttribute('class');
    }

    set class(value) {
        this.setAttribute('class', value);
    }

    // Listen for changes to the 'class' attribute and apply it to the button
    attributeChangedCallback(name, newValue) {
        if (name === 'class') {
            const button = this.shadowRoot.querySelector('button');
            button.className = newValue;
        }
    }

    // Specify which attributes to observe for changes
    static get observedAttributes() {
        return ['class'];
    }
}

customElements.define('primary-active-btn', PrimaryActiveBtn);

