(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    body{
      font-size: 12px;
      background: #EFEFF2;
      color: #32323D;
      font-family: 'Roboto', sans-serif;
    }
    #wrap{
      padding-top: 3em;
      text-align: center;
    }
    #wrap h1{
      font-size: 2.5em;
      font-weight: 100;
      margin-bottom: 5px;
    }
    #wrap p{
      font-size: 1.2em;
      font-weight: 300;
    }
    #globe{
      margin: auto; 
      height: 120px;
      width: 120px;  
      background-image:     url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJnbG9iZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDU4IDU4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1OCA1ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMzMjMyM0Q7fQo8L3N0eWxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTAuNyw0OC4yQzU1LjIsNDMuMSw1OCwzNi40LDU4LDI5YzAtNy43LTMtMTQuNi03LjktMTkuOHYwYzAsMCwwLDAsMCwwQzQ1LDMuOCwzNy45LDAuMywzMCwwbDAsMGwtMC42LDAKCWMtMC4xLDAtMC4zLDAtMC40LDBzLTAuMywwLTAuNCwwTDI4LDBsMCwwQzIwLjEsMC4zLDEzLDMuOCw3LjksOS4yYzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwQzMsMTQuNCwwLDIxLjMsMCwyOQoJYzAsNy40LDIuOCwxNC4xLDcuMywxOS4yYzAsMCwwLDAsMCwwYzAsMCwwLDAsMC4xLDAuMUMxMi41LDU0LDE5LjgsNTcuNywyOCw1OGwwLDBsMC42LDBjMC4xLDAsMC4zLDAsMC40LDBzMC4zLDAsMC40LDBsMC42LDBsMCwwCglDMzguMiw1Ny43LDQ1LjUsNTQsNTAuNyw0OC4yQzUwLjYsNDguMyw1MC43LDQ4LjMsNTAuNyw0OC4yQzUwLjcsNDguMiw1MC43LDQ4LjIsNTAuNyw0OC4yeiBNMiwzMGgxMmMwLjEsNC4yLDAuOSw4LjQsMi40LDEyLjIKCWMtMi44LDEtNS42LDIuNC04LjEsNC4xQzQuNiw0MS45LDIuMywzNi4yLDIsMzB6IE04LjksMTFjMi41LDEuNiw1LjEsMi45LDcuOSwzLjlDMTUuMSwxOSwxNC4xLDIzLjQsMTQsMjhIMgoJQzIuMywyMS41LDQuOCwxNS42LDguOSwxMXogTTU2LDI4SDQ0Yy0wLjEtNC42LTEuMS05LTIuOC0xMy4xYzIuOC0xLDUuNC0yLjMsNy45LTMuOUM1My4yLDE1LjYsNTUuNywyMS41LDU2LDI4eiBNMjgsMTUKCWMtMi45LTAuMS01LjctMC41LTguNS0xLjNjMi00LjIsNC45LTcuOSw4LjUtMTFWMTV6IE0yOCwxN3YxMUgxNmMwLjEtNC4zLDEtOC42LDIuNy0xMi41QzIxLjcsMTYuNCwyNC44LDE2LjksMjgsMTd6IE0zMCwxNwoJYzMuMi0wLjEsNi4zLTAuNiw5LjMtMS40YzEuNiwzLjksMi41LDguMSwyLjcsMTIuNUgzMFYxN3ogTTMwLDE1VjIuNmMzLjYsMy4xLDYuNCw2LjksOC41LDExQzM1LjcsMTQuNCwzMi45LDE0LjksMzAsMTV6CgkgTTQwLjQsMTMuMWMtMS45LTQtNC42LTcuNy03LjktMTAuOEMzOC40LDMsNDMuNiw1LjcsNDcuNyw5LjZDNDUuNCwxMSw0MywxMi4yLDQwLjQsMTMuMXogTTE3LjYsMTMuMWMtMi41LTAuOS01LTIuMS03LjMtMy41CgljNC4xLTMuOSw5LjMtNi42LDE1LjItNy4zQzIyLjIsNS40LDE5LjUsOSwxNy42LDEzLjF6IE0xNiwzMGgxMnYxMGMtMy4zLDAuMS02LjUsMC42LTkuNywxLjVDMTYuOSwzNy45LDE2LjEsMzQsMTYsMzB6IE0yOCw0MnYxMy4zCgljLTMuOC0zLjMtNi44LTcuNC04LjktMTEuOUMyMiw0Mi42LDI1LDQyLjEsMjgsNDJ6IE0zMCw1NS40VjQyYzMsMC4xLDYsMC42LDguOSwxLjRDMzYuOCw0Ny45LDMzLjgsNTIsMzAsNTUuNHogTTMwLDQwVjMwaDEyCgljLTAuMSw0LTAuOSw3LjktMi4zLDExLjZDMzYuNSw0MC42LDMzLjMsNDAuMSwzMCw0MHogTTQ0LDMwaDEyYy0wLjIsNi4yLTIuNiwxMS45LTYuMywxNi4zYy0yLjUtMS43LTUuMy0zLjEtOC4xLTQuMQoJQzQzLDM4LjQsNDMuOSwzNC4yLDQ0LDMweiBNOS43LDQ3LjhjMi40LTEuNiw0LjktMi44LDcuNS0zLjhjMS45LDQuNCw0LjcsOC4zLDguMywxMS43QzE5LjMsNTUsMTMuOCw1Mi4xLDkuNyw0Ny44eiBNMzIuNSw1NS44CgljMy41LTMuNCw2LjMtNy4zLDguMy0xMS43YzIuNiwwLjksNS4yLDIuMiw3LjUsMy44QzQ0LjIsNTIuMSwzOC43LDU1LDMyLjUsNTUuOHoiLz4KPC9zdmc+");
      background-size: 60%;
      background-repeat: no-repeat;  
      background-position: center;  
      display: table;  
    }
    #plane{
      width: 100%;
      display: table-cell;
      vertical-align: middle;
      -webkit-animation: spin 2s infinite linear;
      -moz-animation: spin 2s infinite linear;
      -ms-animation: spin 2s infinite linear;
      animation: spin 2s infinite linear;
    }
    #plane:after{
      content: '';  
      display: block;  
      height: 20px;
      width: 20px;  
      background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJwbGFuZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQyLjcgNDIuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDIuNyA0Mi43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzMyMzIzRDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMS40LDBjLTAuNCwwLTAuOCwwLjItMS4yLDAuNWMtMC4zLDAuMy0wLjYsMC44LTAuOCwxLjRjLTAuNSwxLjItMC43LDIuOS0wLjksNC45Yy0wLjIsMi0wLjIsNC4zLTAuMSw2LjgKCWMtNS41LDIuMy0xNi43LDYuOS0xNy42LDhjLTEuMiwxLjQtMC44LDMtMC4zLDRsMTguNC0zLjdjMC40LDQuOSwwLjksOS43LDEuNCwxMy41Yy0xLjgsMC41LTUuMiwxLjYtNS45LDIuMmMtMSwwLjktMSwzLjgtMSwzLjgKCWw3LjUtMC42YzAuMiwxLjIsMC4zLDIsMC4zLDJsMCwwLjFoMC4xaDAuMWgwLjFsMC0wLjFjMCwwLDAuMS0wLjcsMC4zLTJsNy41LDAuNmMwLDAsMC0yLjktMS0zLjhjLTAuNy0wLjYtNC4xLTEuNy01LjktMi4yCgljMC41LTMuOCwxLTguNiwxLjQtMTMuNWwxOC4yLDMuN2MwLjUtMS4xLDAuOS0yLjYtMC4zLTRjLTAuOS0xLTExLjgtNS42LTE3LjQtNy45YzAuMS0yLjUsMC00LjktMC4xLTYuOXYwYy0wLjItMi0wLjQtMy43LTAuOS00LjkKCWMtMC4yLTAuNi0wLjUtMS4xLTAuOC0xLjRDMjIuMywwLjIsMjEuOSwwLDIxLjQsMEwyMS40LDBMMjEuNCwwTDIxLjQsMEMyMS40LDAsMjEuNCwwLDIxLjQsMHoiLz4KPC9zdmc+");
      background: contain;
      background-size: 100%;
      background-repeat: no-repeat;  
      background-position: center;  
    }
    
    @-webkit-keyframes spin {
      to { -webkit-transform: rotate(360deg); }
    }
    @-moz-keyframes spin {
      to { -moz-transform: rotate(360deg); }
    }
    @-ms-keyframes spin {
      to { -ms-transform: rotate(360deg); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    
    
    </style> 
    <div id="wrap">
    <h1>Flight Info Search</h1>
    <div id="globe">
      <div id="plane"></div>
    </div>
    <p>Searching Flights. Please Wait</p>
  </div>
   </svg>

      
      <script>
        
       
      
      </script>
  
	`;

  class loader extends HTMLElement {
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

  customElements.define("com-sample-loader", loader);
})();
