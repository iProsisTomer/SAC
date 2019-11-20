(function() {
  let template = document.createElement("template");
  template.innerHTML = `
		<style>
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";
    body{
      text-align: center;
    }
    .ticket{
      display: inline-block;
      width: 350px;
      margin: 20px;
      background-color: #273138;
      border-radius: 10px;
      color: #fff;
      font-family: Helvetica Neue;
      font-weight: 300;
      letter-spacing: 1px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      header{
        position: relative;
        height: 35px;
        background-color: #1B252E;
        padding: 10px;
        border-radius: 10px;
        .company-name{
          line-height: 35px;
          text-align: left;
        }
        .gate{
          position: absolute;
          right: 15px;
          top: 10px;
          font-weight: 400;
          line-height: 18px;
          text-align: center;
          font-size: 12px;
        }
        &:after{
          content: '';
          width: 16px;
          height: 16px;
          background-color: #fff;
          position: absolute;
          bottom: -8px;
          right: -8px;
          border-radius: 50%;
          box-shadow: inset 12px 0px 18px -11px rgba(0,0,0,0.5);
        }
        &:before{
          content: '';
          width: 16px;
          height: 16px;
          background-color: #fff;
          position: absolute;
          bottom: -8px;
          left: -8px;
          border-radius: 50%;
          box-shadow: inset -12px 0px 18px -11px rgba(0,0,0,0.5);
        }
      }
      .airports{
        padding: 5px 10px 10px 10px;
        height: 100px;
        text-align: center;
        position: relative;
        border-bottom: 2px dashed #000;
        .airport {
          position: relative;
          margin: 10px;
          text-align: center;
          display: inline-block;
          .airport-name{
            color: #29A8EB;
            font-size: 12px;
            font-weight: 400;
          }
          .airport-code{
            font-size: 32px;
            font-weight: 400;
            margin: 5px 0;
          }
          .dep-arr-label{
            color: #9299A0;
            font-size: 12px;
            font-weight: 500;
          }
          .time{
            font-size: 10px;
            color: #9299A0;
          }
          &:first-child{
            margin-right: 40%;
            &:after{
              font-family: FontAwesome;
              color: #353E48;
              content: "\f072";
              position: absolute;
              font-size: 55px;
              top: calc(50% - 25px);
              right: -150%;
            }
          }
        }
        &:after{
          content: '';
          width: 16px;
          height: 16px;
          background-color: #fff;
          position: absolute;
          bottom: -8px;
          right: -8px;
          border-radius: 50%;
          box-shadow: inset 12px 0px 18px -11px rgba(0,0,0,0.5);
        }
        &:before{
          content: '';
          width: 16px;
          height: 16px;
          background-color: #fff;
          position: absolute;
          bottom: -8px;
          left: -8px;
          border-radius: 50%;
          box-shadow: inset -12px 0px 18px -11px rgba(0,0,0,0.5);
        }
      }
      .place{
        padding: 10px;
        text-align: center;
        height: 330px;
      }
      .place-block{
        display: inline-block;
        margin: 10px 30px;
        .place-label{
          color: #29A8EB;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .place-value{
          color: #9299A0;
          font-size: 12px;
          font-weight: 500;
        }
      }
      .qr{
        width: 220px;
        height: 220px;
        margin: 20px auto;
        border-radius: 10px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .ticket.inverse{
      background-color: #F8F8F8;
      header{
        background-color: #29A8EB;
      }
      .airports{
        border-bottom-color: #D3D6DA;
      }
      .airport {
        &:first-child{
            &:after{
                color: #D3D6DA;
            }
        }
        .airport-code{
          color: #707884;
          font-weight: 500;
        }
      }
    }
    </style> 
    

    .ticket
    header
      .company-name American Airlines
      .gate
        div Gate
        div B4
    section.airports
      .airport 
        .airport-name Charlotte
        .airport-code CLT
        .dep-arr-label Departing
        .time 7:45am
      .airport 
        .airport-name Tampa
        .airport-code TPA
        .dep-arr-label Arriving
        .time 9:15am
    section.place
      .place-block
        .place-label Group
        .place-value 2
      .place-block
        .place-label Seat
        .place-value 2A
      .place-block
        .place-label Term
        .place-value B
      .qr
        img src="http://www.classtools.net/QR/pics/qr.png"
  .ticket.inverse
    
    
      
   
  
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
