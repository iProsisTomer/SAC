(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    @import "bourbon";

    html, body {
      height: 100%;
      @include linear-gradient(#0d1944, #49aae7);
    }
    
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    .flight-tracker {
      @include position(absolute, 50% null null 50%);
      @include transform(translate(-50%, -50%));
      @include size(290px auto);
      font-family: 'Ubuntu Mono';
      font-weight: 400;
      color: #4e4e4e;
      border-radius: 32px / 28px;
      @include perspective(320px);
      @include transform-style(preserve-3d);
      @include transform-origin(50% 48px);
    
      header {
        background: white;
        border-radius: 32px 32px 0 0 / 28px 28px 0 0;
        padding: 7px 15px;
        @include transform-origin(50% 50%);
        @include transform(translate3d(0px, 28px, 0px) rotateX(0deg));
        @include transform-style(preserve-3d);
        @include animation(fold-header 12s $ease-out-quart infinite);
    
        h1.aa-logo {
          display: block;
          margin: 0;
          @include hide-text;
          @include size(130px 20px);
          background-repeat: no-repeat;
          background-image: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NDBEQUExQUFCQjMxMUUzOTI0QUJFNDAwRUZDMEY4NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NDBEQUExQkFCQjMxMUUzOTI0QUJFNDAwRUZDMEY4NCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMUVCQ0ZGQUJCMjExRTM5MjRBQkU0MDBFRkMwRjg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRCMUVCRDAwQUJCMjExRTM5MjRBQkU0MDBFRkMwRjg0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAFACCAwERAAIRAQMRAf/EAKgAAAEDBQADAAAAAAAAAAAAAAcABQgBAgQJCgMGCwEAAgMAAwEBAAAAAAAAAAAAAAMBAgQGBwgJBRAAAAUDAQYDBAgGAwAAAAAAAwQFBgcBAggRABITFBUJITEWIiMXGEJiozRkJSY2QWEkVEVm1igZEQABAwMCBAQEBAMJAAAAAAABEQIDABIEITFBEwUGUSIUB2EyIxahFRcIcWIk8IGRwdFSMzQm/9oADAMBAAIRAxEAPwDt7cuUcBs7ISOMU3LJSMlZBS2z3K/o8jQYqsCKzjaTR5jrquEfLpoyGQtAoSM1BCNmgBzlpQxUvYLQuNuaWYmS/GdmMYTjMcA52iAnYeP+Gyhd6Q7JgZO3Fc4CdwJA8QPwo+7ZqfS2KKWxRQpQ5ibC/L77hQmlvUB1x62Gk7FpWUWW4U1jnk153qViWXbb2Nkgm84lMrVLv5wuVGEvLVrS272rRLbHOge2Fs5LbHEgBQuniNx8KU2ZrpXQgG9oBOhTXwOxorbJptLYopjczlQWY23A8HSqlEJsNREVXI41tQE4JBHQkMgOpq6odF0rwyienlRBRLtK6WWVrtZjHPcGMCvJQDxJqrnNY0vcUaApPwFRmRM3ceHnjIi5exi5nBLkFuM0nFEFfjNiPNzr6qKefIUdjULMexELPKy5Ic194Z0MUiGKXBAEEus3baVrqdgZLMo4coDMgbhxAG126pttrWcZuO/GGXGS+A7EAk7psi776UXJ2m6Osb4gkCdJbWB0CN4xb5hzu9YKpigsGCCSWEBBEGBTEsuaPmxKjD2W0tDsrpva10tpWtE48EuVM3HhCyvKAba02aaPHidNKUjaFNNMcZAMSVXu8WK0ib1vOMtqxq8zThV2O5ENlLyFKyCM42uM0HaqECyM5zQKaD+YAFRLxU8a6gQ1Lb9baWlxpIY2yPtRxcEBBILShUbj4LvURzsleWNuUAHYgI4KEPH4+FG/bPTqWxRWtvuh4qL+S+OCyoRkWEEnWJQj73iuwuYGKDOEYuXtucTDvGAtvE/VqUXqGVrbS28NSCLVtEDtrfdt3T7He5b/AG77rAzXf+a6gBDlNIBDQp5cyHRYnFXbgxl4IOgroL9wfs10/wB3e02MbGPufpr3TYkmoOoAlhUapK0BNiJGsIc3U1Bbsrd2IjliQP4qTWprJXJCNUpSNN1VdZM6TVZRZjeMAlFomqDmioFnxPjO84XLLBYW7mz5O8JQpxrqHhAuS+/Xtlhdv9Q+8O1mRDtnMeOZFERZjyvCgsAJTHnQujTyxuui8reWCv2H7u7gzOhM7S7zdNJ3BhMtjyJVvyYW6DmkgEzwghsjneaVtshLn811dBu3nGvQNLYorjomNwZTTU4Mh+5FFuGz6kNvs3KiOJwxxyVLShHTdAQcaMIDayxl1pJEMuQ8HMKk2JjQB34bVwyRey1SGXS44RcahMLXmsDcSBsXS5Z2tc6FzHstcVfKhBLh5VabAPBDqFriUzsmZ0nUYoS5olDmPuARkagi0+ZHC5U3X4VhZTjp8pIvdxywZDlmI6+oflLA2R8RJAabvlxppsZJ8/t2EU9bdrBZyOppyWcfvplRusVhT5NQKh0LFrLggrLDFBJxFhdh4cgZy3slbICGm6wu0JPBdkTjRlJKMrJYX3sdEYyC4JcGqQPFN1WiHk8xJNxhc3c6gnEtUmFJj8SGMLpLkoM665pkZduQnXI6yQyYl1tqFp9bd97ncbIGFq77EAwEeMIoBoQlYEcAAqGrEkiym4uRmBhkvlDdGtChvkadggPyroqLpTMlkmM7JgxS8R2RuOriUJN7huVI+ZOG2tBlBbYK/DzcY8PZaNt2xXIHcpwLQAGlhUfydZzYx9IyG3pTab+VG+45icbteaaHJSbUobNp4SucTklbJ8zwypm/due5xbOZJoSJm4spWXlkvtLSFDQB5fFASNNRSWtuhDIZQY3ZEQSO8BqggoXEnXwUgELoakdk60nhj+8O5ZC2OAk1NSJovxqwIQAm4xnDJ7tcLGxxXJSXB8l1GJzC6puFQHdQMdqSuMMaAGHUQC9TF4V9ogdu7mxHsyGYs+VYZnyylSGgF4aLLkTS5PhWjJa+B2RDj3iJscQQFxIYXG+1V1RfjVcgXp21ScOY8RVi4mMZaxYkPIKQzD4nWYH3m464LiKUG3D7dWrmycQmxIbTfDzlySmsogBoaWOtFSJc6VM3UsqoCXWbRjM6oZ5JcsuGW2NqMaIg9zS4hVLSA1p3KKhHConk6cIo4sa04rpCrnGQtaQ0aaEEuI2Cp/fQaw4YpzLJ+9vmE8nD82SFHdMK8ySbrSlJ4TAyhXYcZeW7sS47SJJViKwjOYymx+2GWnWoqccN2HgaXFObuMcOylz82T0ceTPiCNsnPjTRpRYwSW6EeYkqQE3RKViMOU+CDJvdHyZFCuCo8ouq6ABAvgtGW2Yp2k7suYf4yt9KkuYcgcw5UkvHwm2h3AcbUgq2PsKTzKJqSC40ivCgaa37CcBxwWbwKuvGNwcBQDEEvMX3XVuTyceLrk2W4sZjQMa9UUXuY23yjfzuuQeFO5s8vR4sZoc/IlcWIqG1rnLqdvKEU+NRlyQfE84844dx/HhYhSQ8M1WQZMx3zNxpiJnyGlvdSRm6/ZhjiIp7bTHe0GGhm2ntxLeiOUXgEUG4AYqEsGq0B3A6CU1Y0ePk5ONktkbO1rHxPcWpqGucwkO1UgkLxQVmyHzwY+RjljoS5zJGNBBQFwa4At0RUKcFNG/IaFER5wj365sc4EluGQotl+aWBEAJ5zSOba7LZb8jqNr32TZ0eWqVWooXPG5WMCHjt5E5fYHQHl7i9oFlds+NO6PI6fA20RvY0u0apIc5Fdvpw1Hxp+RCHw50zrjI17g3UoAQFQba8fw2r03JdUlAwp5bNpIdcvtsEgi9i9OaJlqKj2TDTJMuRJfiY41VkhkbqE0RWtFGtvMXgBaWnLArx7aiWWaMxGxJC4hhU5SqmqEID/baqZBlWVoLwExkRdFUFPj/AJ14co2pKuNy/wBy7HPFsxIjVxdZEv8Abtcswois5pvkBMZEGyhH74U8ipDSTpZwKsuqzacznKotkgl2upWKtG2VHqS4ItBK2mI+HKbi5WXactzJg0gNCvaRY06WqAtlwS4hajKbLjuyMfFuGMHxF2rijSDed7kJS+0qm1NljUZ6nh0+0u/uLYvBQyLl9HLoY0YJCfmEkYhDKSXGSysPqBHI8lV1rUzIDAfwo5JzW0TV8ymJyyVFrbZcOavCste8ZrT6aXnclwLvp8z5kDwAA0kat1CkfwqLWnEcPUR8nmggfU5fyqWkqXAHfQoD/GuiTtWv9Ek3BGC3a2oZckCN04SdxVEjpxu55Pywump76cpMu5mo75CHHei7Hz4tC6w3xFDdFDSDwAVlOEGHWvGurRui6hIx0gkdorgAOA0IGgcNinEGv3+mSCTBY9rDG3VASTxOoJ1Q7heFQk77+VUsYlwfGy5FbaRx1aU5AFYg0pOZADXkSJShdvnljhEUsOhYupu16jlKF02iiPQmFQEe+oY19lllOue/e8uodndEGT0mO7qM0nLa4i6NmhNzmlWlyfKHAqh04j1V+1L2B7c9/vcWbo3eOd6XtjpuH6qeGOTl5OUA9rBHCQjwwFyzPaRY0tVwUUfu0JnXFeZWOpcgg2l2nMcY8qmTFGF7iVVuiYqHg9S75ZfqFSU1ukaPowCMZIhXiiWpZvmE+66+4vxRrdld6DvPpYyssMZ1qMBs7GgAXJ/yMH+x+4XVpVpLkudk/ct+3fI/b93s7p3SJJ8z27znPk6ZlyK5/LVXYuQ75fVYyhsiI2VhZOxrGyctm2fbmVeb6pTTSmmmmlNNPLT+GmnhppsUUrd3T2dNPHTd008/Hy8PPYoquxRWCn9N5b8p5HlOOZ16fy/LczzAnOfdvdcfmt/i/S4mu9467SVXXeoCcKztoqaag+ickDwuldO5y3gcPlOS6h1Cu5wd33HOdV8t32+Y+vtbzLxVKr5U0RKddq1arfZ3vo7+7XTy3t3Wmv8APd12KKVd3W3Xd3vHd1018vHd18fLz02KKu2KKWxRS2KKZf070f8AwvQPD+x6P95pp+C++fa/W2t5ruN341AtTRLaetq1Na8+6p8rfyG5A/OFznwY9K+/6Dynrn1nzQPoL4ac37HxC9U8v03X3O/vcz/Scxtxvu78n+38j88/6Fuu11y+SxdL7kTh4+Va7k9gf1C/VnpH6Yr91c8ot3K5Np9R6i3X0/Ku5nFEs+pZXCL2pfmY/wDRCD/ko9deqvVYXqr1N0bpny1+oET4rfHDpP6e9I9E4OvC9713p3TPzTlduguzed9zQ/b/ADedd5lRORcL+ZwtTx1uts+pbX1N/cD+Xfo11T9V/R/lPI+lbfd+Zct/pPRXfU599ycORzuf/T8yvob/APZf/TP3l+H/AGL/AMg+y29Xf0P8234/6V8Qf67+Sv/Z);
        }
    
        .flight-number {
          @include position(absolute, 7px 15px null null);
          font-size: 18px;
        }
      }
    
      .flight-details {
        margin: -1px 0 0;
    
        table {
          border: 0 none;
          width: 100%;
          thead {
            background: #bfbfbf;
            @include backface-visibility(hidden);
            @include transform(translate3d(0px, 28px, 0px) rotateX(-90deg));
            @include transform-origin(50% 0%);
            @include animation(fold-top 12s $ease-out-quart infinite);
            th {
              text-align: left;
              font-size: 11px;
              height: 28px;
              font-weight: 400;
              color: #289dd7;
              vertical-align: bottom;
              padding: 0 15px;
    
              &:last-child {
                text-align: right;
              }
            }
          }
    
          tbody {
            background: #ebebeb;
            @include backface-visibility(hidden);
            @include transform(translate3d(0px, -28px, 0px) rotateX(90deg));
            @include transform-origin(50% 100%);
            @include animation(fold-bottom 12s $ease-out-quart infinite);
            td {
              font-size: 11px;
              height: 28px;
              vertical-align: top;
              padding: 0 15px;
    
              &:last-child {
                text-align: right;
              }
            }
          }
        }
      }
    
      .flight-duration {
        padding: 7px 15px;
        background: white;
        @include transform-origin(50% 50%);
        @include transform(translate3d(0px, -28px, 0px) rotateX(0deg));
        @include transform-style(preserve-3d);
        @include animation(fold-footer 12s $ease-out-quart infinite);
    
        .flight-end {
          float: right;
        }
      }
    
      footer {
        @include linear-gradient(#289dd7, #0e8acf);
        border-radius: 0 0 32px 32px / 0 0 28px 28px;
        height: 53px;
        color: white;
        font-size: 11px;
        text-shadow: 1px 1px 2px rgba(#0d1944, .4);
        box-shadow: 0 10px 24px rgba(#0d1944, .7);
        overflow: hidden;
        @include transform(translate3d(0px, -28px, 0px) rotateX(0deg));
        @include transform-style(preserve-3d);
        @include animation(fold-footer 12s $ease-out-quart infinite);
    
        strong {
          display: block;
          font-weight: 400;
          font-size: 24px;
        }
    
        .flight-from {
          @include position(absolute, null null 12px 15px);
        }
    
        .flight-to {
          text-align: right;
          @include position(absolute, null 15px 12px null);
        }
    
        .flight-progress {
          @include position(absolute, 50% null null 50%);
          @include transform(translate3d(-50%, -50%, 0));
          @include size(100px 2px);
          background: #015683;
          border-radius: 1px;
          box-shadow: 0 0 2px rgba(#0d1944, .4);
          @include animation(progress-bar 12s $ease-out-quart infinite);
    
          &::before {
            content: '\20';
            display: block;
            @include size(0% 2px);
            background: white;
            border-radius: 1px;
            box-shadow: inset 0 0 1px rgba(#0d1944, .4);
            @include animation(progress 12s linear infinite);
          }
    
          &::after {
            content: '\20';
            display: block;
            @include position(absolute, 0px null null 0px);
            @include size(2px);
            background: white;
            border-radius: 1px;
            box-shadow: 0 0 1px 1px white;
            @include animation(progress-track 12s linear infinite);
          }
        }
      }
    
      .airplaine {
        @include position(absolute, 50% null null 50%);
        @include transform(translate3d(-50%, -50%, 0));
        font-size: 48px;
        text-shadow: 1px 1px 2px rgba(#0d1944, .4);
        @include animation(airplaine 12s infinite);
      }
    }
    
    @include keyframes(fold-header) {
      0%, 19% {
        @include transform(translate3d(0px, 28px, 0px) rotateX(0deg));
      }
      23%, 42% {
        @include transform(translate3d(0px, 0px, 0px) rotateX(0deg));
      }
      45%, 100% {
        @include transform(translate3d(0px, 28px, 0px) rotateX(0deg));
      }
    }
    
    @include keyframes(fold-top) {
      0%, 19% {
        background: #bfbfbf;
        @include transform(translate3d(0px, 28px, 0px) rotateX(-90deg));
      }
      23%, 42% {
        background: white;
        @include transform(translate3d(0px, 0px, 0px) rotateX(0deg));
      }
      45%, 100% {
        background: #bfbfbf;
        @include transform(translate3d(0px, 28px, 0px) rotateX(-90deg));
      }
    }
    
    @include keyframes(fold-bottom) {
      0%, 19% {
        background: #ebebeb;
        @include transform(translate3d(0px, -28px, 0px) rotateX(90deg));
      }
      23%, 42% {
        background: white;
        @include transform(translate3d(0px, 0px, 0px) rotateX(0deg));
      }
      45%, 100% {
        background: #ebebeb;
        @include transform(translate3d(0px, -28px, 0px) rotateX(90deg));
      }
    }
    
    @include keyframes(fold-footer) {
      0%, 19% {
        @include transform(translate3d(0px, -28px, 0px) rotateX(0deg));
      }
      24%, 42% {
        @include transform(translate3d(0px, 0px, 0px) rotateX(0deg));
      }
      45%, 100% {
        @include transform(translate3d(0px, -28px, 0px) rotateX(0deg));
      }
    }
    
    @include keyframes(progress-bar) {
      0%, 7% {
        opacity: 0;
      }
      10%, 42% {
        opacity: 1;
      }
      45%, 100% {
        opacity: 0;
      }
    }
    
    @include keyframes(progress) {
      0%, 10% {
        width: 0%;
      }
      40%, 100% {
        width: 100%;
      }
    }
    
    @include keyframes(progress-track) {
      0%, 10% {
        left: 0%;
      }
      40%, 100% {
        left: 100%;
      }
    }
    
    @include keyframes(airplaine) {
      0%, 50% {
        left: -20%;
        text-shadow: 20px 20px 8px rgba(#0d1944, .4);
      }
      65%, 85% {
        left: 50%;
        text-shadow: 1px 1px 2px rgba(#0d1944, .4);
      }
      100% {
        left: 120%;
        text-shadow: 20px 20px 8px rgba(#0d1944, .4);
      }
    }
    </style> 
    

    .<link href='https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700' rel='stylesheet' type='text/css'>
    <section class="flight-tracker">
      <header>
        <h1 class="aa-logo">American Airlines</h1>
        <span class="flight-number">AA289</span>
      </header>
      <div class="flight-details">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Term</th>
              <th>Gate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3-14-2014</td>
              <td>Departed</td>
              <td>T3</td>
              <td>K12</td>
            </tr>
          </tbody>
        </table>
        <div class="flight-duration">
          <span class="flight-start">11:35</span>
          <span class="flight-end">15:05</span>
        </div>
      </div>
      <footer>
        <span class="flight-from"><strong>ORD</strong> <span class="city">Chicago</span></span>
        <span class="flight-to"><strong>PVG</strong> <span class="city">Shanghai</span></span>
        <span class="flight-progress"></span>
        <span class="airplaine">✈</span>
      </footer>
    </section>
    
      
   
  
	`;

  class ticket extends HTMLElement {
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

  customElements.define("com-sample-ticket", ticket);
})();
