(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    body {
      background: #e2c02d;
    }
    
    .plane {
      display: block;
      width: 126px;
      height: 43px;
      margin: 100px auto;
      animation: flight 10s linear infinite;
    }
    
    .plane svg {
      animation: plane-stutter 5s infinite;
    }
    
    .smoke1 {
      animation: smoke 1s infinite;
    }
    
    .smoke2 {
      animation: smoke 1s infinite;
      animation-delay: 0.4s;
    }
    
    .smoke3 {
      animation: smoke 1s infinite;
      animation-delay: 0.2s;
    }
    
    .smoke4 {
      animation: smoke 1s infinite;
      animation-delay: 0.7s;
    }
    
    .path {
      animation: draw 0.2s linear infinite;
    }
     
     @keyframes draw {
      50% {
        stroke-dashoffset: 0;
      }
    }
    
    @keyframes plane-stutter {
      0% {
        transform: translateY(100%);
      }
      
      25% {
        transform: translateY(20%);
      }
      
       50% {
        transform: translateY(80%);
      }
      
      75% {
        transform: translateY(0%);
      }
      
      100% {
        transform: translateY(100%);
      }
    }
    
    @keyframes smoke {
      0% {
        transform: translateX(100%);
      }
      
      70% {
        opacity: 0.8;
      }
      
      100% {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
    
    @keyframes plane-stutter {
      0% {
        transform: translateY(100%);
      }
      
      25% {
        transform: translateY(20%);
      }
      
       50% {
        transform: translateY(80%);
      }
      
      75% {
        transform: translateY(0%);
      }
      
      100% {
        transform: translateY(100%);
      }
    }
    
    @keyframes flight {
      0% {
        transform: translateX(-300%);
      }
      
      100% {
        transform: translateX(400%);
      }
    }
    
    </style> 
    

    .<div class="plane">
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-332 285.2 126.6 43.8"><style>.st0{fill:none;stroke:#C29924;stroke-width:2.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} .st1{fill:#E2C02D;stroke:#C29924;stroke-width:2.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class="st0 path" stroke-dasharray="12" stroke-dashoffset="12" d="M-209.5,306v12"/><path class="st0 path" stroke-dasharray="12" stroke-dashoffset="12" d="M-209.5,305.9v-12"/><path class="st1" d="M-215.4 299.4c4.9 0 8.8 2.9 8.8 6.6 0 3.7-3.9 6.6-8.8 6.6"/><path class="st0" d="M-292.9 308.5h-2.4c-5.8 0-10.5-5.7-10.5-11.5v-4.1c0-3.6 3-6.6 6.6-6.6 3.4 0 6.2 2.8 6.2 6.2v16h.1z"/><path class="st1" d="M-292.9 292.6l7.8 6.6"/><path class="st0" d="M-224.7 318.3h-37.5s2.3-4.9 18.6-4.9 18.9 4.9 18.9 4.9zm0-26.6h-37.5s2.3-4.9 18.6-4.9 18.9 4.9 18.9 4.9z"/><path class="st0" d="M-256 314.4l-36.8-5.9.3-9.1h43.8v1.2c.3 3.7 3.5 6.7 7.3 6.7s6.9-2.8 7.3-6.5v-1.4h18.8v13.3l-14.3 2.5M-252.4 313.8v-22.1"/><path class="st0" d="M-234.6 313.8v-22.1l-17.6 22.2"/><circle class="st0" cx="-218.9" cy="323.8" r="4"/><line class="st0 smoke smoke1" x1="-320.1" y1="302.7" x2="-326.5" y2="302.7"/><path class="st0" d="M-215.8,313.4l-3.1,10.4l-3.6-9.4 M-292.6,299.4h-17.6 M-224.7,299.4v-7.7l-5.7,7.7"/><line class="st0 smoke smoke2" x1="-324.4" y1="297.4" x2="-330.8" y2="297.4"/><line class="st0 smoke smoke3" x1="-317.7" y1="292.2" x2="-324.1" y2="292.2"/><line class="st0 smoke smoke4" x1="-312.5" y1="295.9" x2="-318.9" y2="295.9" /></svg>
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
