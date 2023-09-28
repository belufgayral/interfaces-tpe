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
        button.style.padding = '0';
        button.style.border = 'none';

        // Add a click event listener
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });

        // Add a mouseenter event listener to apply styles on hover
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#2980b9';
            // Add any other hover styles here
        });

        // Add a mouseleave event listener to reset styles on mouseleave
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#478D76';
            // Reset any other hover styles here
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

