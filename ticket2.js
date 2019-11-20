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
      width: 300px;
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
      padding: 20px;
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
    
    .info {
      margin: 30px 0;
      display: block;
      clear: both;
      position: relative;
    }
    .info::before,
    .info::before {
      top: 0;
    }
    .info::after {
      bottom: 0;
    }
    .info__section {
      padding: 20px 0 30px 0px;
      position: relative;
      width: 100%;
      display: inline-block;
    }
    
    .info__section dt {
      color: #D8E1E5;
    }
    .info__section dd {
      font-size: 40px;
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
        
        <div class="info__section">
          <dt>Company</dt>
          <dd>Delta</dd
        </div>
            <div class="info__section">
          <dt>Flight</dt>
          <dd>AB 7451</dd
        </div>
       <div class="info__section--first">
          <dt>Price</dt>
          <dd>200$</dd>
        </div>
      </dl> 
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
