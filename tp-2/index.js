class PrimaryActiveBtn extends HTMLElement {
    constructor() {
        super();
        // Add initialization code here
        const shadow = this.attachShadow({ mode: 'open' });
        // Add Shadow DOM content and styling here
        // Define HTML content
        shadow.innerHTML = `
            <style>
            /* Add component-specific CSS here */
            :host {
                display: inline-flex;
              }
      
              button {
                padding: 10px 24px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 13px;
                background: var(--Secundario-L1, #478D76);
                cursor: pointer;
              }
      
              button:hover {
                background-color: #2980b9;
              }
            </style>
            <button><slot></slot></button>
        `;
        const button = shadow.querySelector('button');
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
}

customElements.define('primary-active-btn', PrimaryActiveBtn);
