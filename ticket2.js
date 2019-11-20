(function() {
  let template = document.createElement("template");
  template.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
    .card {
      margin: 20px;
      width: 400px;
      border-radius: 4px;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2),
                  0 3px 3px -2px rgba(0, 0, 0, 0.14),
                  0 1px 8px 0 rgba(0, 0, 0, 0.12);
      color: #6d7487;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
    }
    .image {
      width: 100%;
      border-radius: 4px;
    }
    .button {
      background-color: #3559a5;
      border-radius: 4px;
      color: #fff;
      font-size: 20px;
      height: 50px;
      width: 150px;
      float: right;
      cursor: pointer;
    }
    .section {
      padding: 30px;
    }
    .section::after {
      content: '';
      clear: both;
      display: block;
    }
    .section__airport {
      font-size: 60px;
      display: inline-block;
      width: 49%;
      line-height: 1;
      position: relative;
    }
    .section__from::after {
      content: '';
      background-image: url(https://i.imgur.com/ppufFur.png);
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      right: 0;
      top: 50%;
      height: 20px;
      width: 20px;
      transform: translateX(50%) translateY(-50%);
    }
    .section__to {
      text-align: right;
    }
    .barcode {
      float: left;
      height: 50px;
      width: 150px;
      opacity: .5;
    }
    .info {
      margin: 30px 0;
      display: block;
      clear: both;
      position: relative;
    }
    .info::before,
    .info::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #D8E1E5;
    }
    .info::before {
      top: 0;
    }
    .info::after {
      bottom: 0;
    }
    .info__section {
      padding: 30px 0 30px 30px;
      position: relative;
      width: 49%;
      display: inline-block;
    }
    .info__section--first::after {
      content: '';
      display: block;
      width: 1px;
      background-color: #D8E1E5;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .info__section dt {
      color: #D8E1E5;
    }
    .info__section dd {
      font-size: 30px;
    }
    .info__section dt:not(:first-child) {
      margin-top: 20px;
    }
    
    </style> 
    
    <div class="card">
    <img src="https://www.aviontourism.com/images/1920-900-fix/90f2695d-c194-4c3e-8e01-98f3dfd1e2c4" alt="New York" class="image">

    <div class="section">
      <p class="section__from section__airport">JFK</p>
      <p class="section__to section__airport">JFK</p>
      <dl class="info">
        <div class="info__section info__section--first">
          <dt>Flight</dt>
          <dd>AB 7451</dd>

          <dt>Seat</dt>
          <dd>G050</dd>
        </div>
        <div class="info__section">
          <dt>Terminal</dt>
          <dd>14</dd>

          <dt>Gate</dt>
          <dd>3</dd>
        </div>
      </dl>
      <img src="data:image/png;base64,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" alt="Barcode" class="barcode">
      <button class="button">View Details</button>
    </div>
  </div>
      
   
  
	`;

  class ticket2 extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      this.addEventListener("click", event => {
        var event = new Event("onClick");
        this.dispatchEvent(event);
      });
      this._props = {};
    }

    onCustomWidgetBeforeUpdate(changedProperties) {
      this._props = { ...this._props, ...changedProperties };
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      if ("color" in changedProperties) {
        this.style["background-color"] = changedProperties["color"];
      }

      if ("opacity" in changedProperties) {
        this.style["opacity"] = changedProperties["opacity"];
      }
    }
  }

  customElements.define("com-sample-ticket2", ticket2);
})();
