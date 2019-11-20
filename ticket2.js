(function() {
  let template = document.createElement("template");
  template.innerHTML = `
    <style>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css">
    // (Opinionated BEM: blockName-elementName--modifier)

    /* Colors */
    $color-primary: #25293c;
    $color-highlight: #f03f55;
    $color-white: #fff;
    $color-black: #222;
    $color-gray: #ccc;
    $color-text: #444;
    $color-text-secondary: lighten($color-text, 30%);
    
    /* Page */
    html {
      min-height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      color: $color-text;
      background: linear-gradient(60deg,
        darken($color-primary, 10%),
        lighten($color-primary, 10%)
      );
    }
    
    body {
      line-height: 1.5;
    }
    
    hr {
      width: 100%;
      margin: 1.5em 0;
      border: 0;
      border-bottom: 1px dashed $color-gray;
    }
    
    .hr--invisible {
      border-bottom-color: transparent;
    }
    
    /* Boarding Pass */
    .boardingPass {
      width: 400px;
      box-shadow: -3px 3px 5px rgba(0, 0, 0, .3);
      border-radius: 4px;
    }
    
    /* Section */
    /** Label **/
    .section-label {
      display: block;
      text-transform: uppercase;
      font-size: .8rem;
      color: $color-text-secondary;
    }
    
    /** Icon **/
    .boardingPass-icon {
      flex-grow: .5;
      color: $color-highlight;
    }
    
    /* Header */
    .boardingPass-header {
      padding: .5em 2em;
      background: linear-gradient(60deg, 
        darken($color-highlight, 10%), 
        lighten($color-highlight, 10%)
      );
      border-radius: inherit;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      color: $color-white;
    }
    
    .boardingPass-airline {
      margin: 0;
      font-style: italic;
    }
    
    /* Main */
    .boardingPass-main {
      padding: 2em;
      background: $color-white;
    }
    
    .boardingPass-departur-IATA,
    .boardingPass-arrival-IATA {
      display: inline-block;
      line-height: 1;
      font-size: 4rem;
    }
    
    .boardingPass-transport {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .boardingPass-transport-icon {
      transform: rotate(90deg);
      color: $color-text-secondary;
      font-size: 36px;
    }
    
    /* Footer */
    .boardingPass-footer {
      padding: 0 2em 2em;
      background: $color-white;
      border-radius: inherit;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    
    .boardingPass-qrCode {
      height: 40px;
      width: 100%;
      background: repeating-linear-gradient(to right, 
        $color-black, $color-black 2%,
        transparent 2%, transparent 3%,
        $color-black 3%, $color-black 4%,
        transparent 4%, transparent 6%,
        $color-black 6%, $color-black 7%,
        transparent 7%, transparent 8%,
        $color-black 8%, $color-black 10%,
        transparent 10%, transparent 11%
      );
    }
    </style> 
    
    <div class="boardingPass">
    <header class="boardingPass-header">
      <h1 class="boardingPass-airline">Airline</h1>
    </header>
    
    <main class="boardingPass-main">
      <div class="row">
        <section class="boardingPass-departur col-xs">
          <span class="section-label">London, UK</span>
          <span class="boardingPass-departur-IATA">LDN</span>	
        </section>
  
        <section class="boardingPass-transport boardingPass-icon col-xs">
          <i class="boardingPass-transport-icon material-icons">airplanemode_active</i>
        </section>
  
        <section class="boardingPass-arrival col-xs">
          <span class="section-label">Marseille, FR</span>
          <span class="boardingPass-arrival-IATA">MRS</span>	
        </section>
      </div>
      
      <hr class="hr--invisible" />
    
      <div class="row">
        <section class="boardingPass-icon col-xs">
          <i class="material-icons">event</i>
        </section>
        
        <section class="boardingPass-date col-xs">
          <span class="section-label">Date</span>
          <span>4 Nov</span>		
        </section>
  
        <section class="boardingPass-departurTime col-xs">
          <span class="section-label">Departur</span>
          <span>10:00</span>	
        </section>
  
        <section class="boardingPass-arrivalTime col-xs">
          <span class="section-label">Arrival</span>
          <span>12:05</span>	
        </section>
      </div>
      
      <hr />
      
      <div class="row">
        <section class="boardingPass-icon col-xs">
          <i class="material-icons">flight_takeoff</i>	
        </section>
        
        <section class="boardingPass-flight col-xs">
          <span class="section-label">Flight</span>
          <span>EZY147</span>		
        </section>
  
        <section class="boardingPass-terminal col-xs">
          <span class="section-label">Terminal</span>
          <span>North</span>		
        </section>
  
        <section class="boardingPass-gate col-xs">
          <span class="section-label">Gate</span>
          <span>58</span>	
        </section>
      </div>
      
      <hr />
      
      <div class="row">
        <section class="boardingPass-icon col-xs">
          <i class="material-icons">account_circle</i>
        </section>
  
        <section class="boardingPass-passenger col-xs">
          <span class="section-label">Passenger</span>
          <span>Johan MOUCHET</span>	
        </section>
  
        <section class="boardingPass-seat col-xs">
          <span class="section-label">Seat</span>
          <span>17A</span>	
        </section>
  
        <section class="boardingPass-class col-xs">
          <span class="section-label">Class</span>
          <span>E</span>	
        </section>
      </div>
    </main>
      
    <footer class="boardingPass-footer">
      <div class="row">
        <div class="boardingPass-qrCode col-xs"></div>
      </div>
    </footer>
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
