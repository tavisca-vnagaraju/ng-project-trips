import {LitElement, html, property} from 'lit-element';

class LitFooter extends LitElement {


  [x:string]:any;
  @property()footer = 'Trips Manager';

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        .footer{
            height: 50px;
            background-color: #673ab7;
            width: 100%;
            position: fixed;
            bottom:0px;
        }
        .footer-text{
            text-align:center;
        }
        .margin-top-footer{
          margin-bottom: 50px;
          height: 20px;
        }
      </style>
      <div class="margin-top-footer"></div>
      <footer class="footer">
        <h4 class="footer-text"> ${this.footer}</h4>
      </footer>
    `;
  }

}
customElements.define('lit-footer', LitFooter);