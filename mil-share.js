import { LitElement, html, css } from "lit-element";
import { fbLogo, twLogo, mailLogo, wappLogo, share } from "./social-icons.js";

class milShare extends LitElement {
  /**
   * Declared properties and their corresponding attributes
   */
  static get properties() {
    return {
      fburl: { type: String },
      twurl: { type: String },
      emailurl: { type: String },
      wappurl: { type: String },
      header: { type: String },
      opened: { type: String }
    };
  }

  /**
   * Instance of the element is created/upgraded. Useful for initializing
   * state, set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    var url = encodeURIComponent(window.location.href);
    this.fburl = "https://facebook.com/sharer/sharer.php?u=" + url;
    this.twurl = "https://twitter.com/intent/tweet/?url=" + url;
    this.emailurl = "mailto:?body=" + url;
    this.wappurl = "https://api.whatsapp.com/send?phone=&text=" + url;
    this.header = "Share this page";
    this.opened = false;
  }

  static get styles() {
    return [
      css`
        :host {
          display: inline-flex !important;
          flex-direction: column;
          align-items: flex-end;
        }

        a {
          color: transparent;
          padding-right: 10px;
        }

        a:first-of-type {
          padding-left: 10px;
        }

        #dropdownPanel.opened {
          opacity: 1;
        }

        #dropdownPanel {
          position: absolute;
          min-width: 10rem;
          padding: 0.5rem 0;
          margin-top: 2rem;
          margin-right: 0.5rem;
          color: var(--body-text-color, black);
          text-align: left;
          list-style: none;
          background-color: #ffffff;
          background-clip: padding-box;
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 0.25rem;
          z-index: 100;
          box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
          opacity: 0;
          -webkit-transition: opacity 0.3s ease;
          transition: opacity 0.3s ease;
        }

        svg {
          width: var(--social-icon-width, 32px);
          height: var(--social-icon-height, 32px);
        }

        #dropdownIcon svg {
          fill: var(--share-icon-color, #555);
          height: var(--share-icon-height, 24px);
          width: var(--share-icon-width, 24px);
        }

        :host(:hover) #dropdownIcon svg {
          fill: var(--share-icon-color-hover, #eee);
        }

        #header {
          padding: 10px;
          color: #555;
        }
      `
    ];
  }

  render() {
    return html`

<div id="dropdownIcon" @click="${()=>{this.opened=!this.opened}}">${share}</div>
        <div id="dropdownPanel" class="${this.opened?"opened":""}">
            <div id="header">${this.header}</div>
            <!-- Sharingbutton Facebook -->
            <a
              href="${this.fburl}"
              target="_blank"
              rel="noopener"
              aria-label="Share on Facebook"
            >
              <span id="fbLogo">${fbLogo}</span>
            </a>

            <!-- Sharingbutton Twitter -->
            <a
              href="${this.twurl}"
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
            >
              ${twLogo}
            </a>

            <!-- Sharingbutton E-Mail -->
            <a
              href="${this.emailurl}"
              target="_self"
              rel="noopener"
              aria-label="Share by E-Mail"
            >
              ${mailLogo}
            </a>

            <!-- Sharingbutton WhatsApp -->
            <a
              href="${this.wappurl}"
              aria-label="Share on WhatsApp"
              data-action="share/whatsapp/share"
              target="_blank"
            >
              ${wappLogo}
            </a>
      </div>


    `;
  }
}

customElements.define("mil-share", milShare);
