(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    svg {margin: 60px;}
    </style> 
    <svg width="1200" height="600" viewBox="0 0 900 350">
        <path id="motionPath" fill="none" stroke="#000000" stroke-miterlimit="20" d="
              M 150, 100
              m -75, 0
              a 75,75 0 1,0 150,0
              a 75,75 0 1,0 -150,0
              "/>
        
        <g id="plane" style="" transform="scale(0.05, 0.05) translate(0,20) rotate(-133 100 100)">
        <defs id="defs0" />
        <path
           d="M 439.48098,95.969555 L 393.34268,142.46481 L 305.91233,133.41187 L 324.72376,114.58551 L 308.61525,98.464215 L 276.15845,130.94677 L 185.25346,123.08136 L 201.15145,107.27643 L 186.46085,92.574165 L 158.32,120.73735 L 45.386032,112.12042 L 15.000017,131.66667 L 221.20641,192.48691 L 298.26133,237.01135 L 191.91028,345.62828 L 152.82697,408.6082 L 41.549634,393.05411 L 21.037984,413.58203 L 109.25334,470.93369 L 166.38515,558.95725 L 186.8968,538.42933 L 171.35503,427.06371 L 234.28504,387.94939 L 342.81586,281.51396 L 387.305,358.63003 L 448.07703,565.00001 L 467.60778,534.58989 L 458.99769,421.56633 L 487.16033,393.38134 L 473.14247,379.35235 L 456.6139,395.97492 L 448.79636,303.63439 L 481.25315,271.15184 L 465.14464,255.03055 L 446.33321,273.8569 L 436.04766,185.1164 L 482.35108,138.7864 C 501.1942,119.92833 560.62425,61.834815 564.99998,14.999985 C 515.28999,23.707295 476.1521,61.495405 439.48098,95.969555 z "
           style="opacity:1;color:#000000;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;marker:none;visibility:visible;display:inline;overflow:visible"
           id="path1" />
      </g>
         
        <animateMotion 
                 xlink:href="#plane"
                 dur="2s"
                 begin="0s"     
                 fill="freeze"
                 repeatCount="indefinite"
                 rotate="auto-reverse">
          <mpath xlink:href="#motionPath" />
        </animateMotion>
      </svg>


      <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js"></script>
      <script>
        
        $(function() {
      
          var polar_to_cartesian, svg_circle_arc_path, animate_arc;
        
          polar_to_cartesian = function(cx, cy, radius, angle) {
            var radians;
            radians = (angle - 90) * Math.PI / 180.0;
            return [Math.round((cx + (radius * Math.cos(radians))) * 100) / 100, Math.round((cy + (radius * Math.sin(radians))) * 100) / 100];
          };
        
          svg_circle_arc_path = function(x, y, radius, start_angle, end_angle) {
            var end_xy, start_xy;
            start_xy = polar_to_cartesian(x, y, radius, end_angle);
            end_xy = polar_to_cartesian(x, y, radius, start_angle);
            return "M " + start_xy[0] + " " + start_xy[1] + " A " + radius + " " + radius + " 0 0 0 " + end_xy[0] + " " + end_xy[1];
          };
        
          animate_arc = function(ratio, svg, perc) {
            var arc, center, radius, startx, starty;
            arc = svg.path('');
            center = 500;
            radius = 450;
            startx = 0;
            starty = 450;
            return Snap.animate(0, ratio, (function(val) {
              var path;
              arc.remove();
              path = svg_circle_arc_path(500, 500, 450, -90, val * 180.0 - 90);
              arc = svg.path(path);
              arc.attr({
                class: 'data-arc'
              });
              perc.text(Math.round(val * 100) + '%');
            }), Math.round(2000 * ratio), mina.easeinout);
          };
        
          $('.metric').each(function() {
            var ratio, svg, perc;
            ratio = $(this).data('ratio');
            svg = Snap($(this).find('svg')[0]);
            perc = $(this).find('text.percentage');
            animate_arc(ratio, svg, perc);
          });
        });
      
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
