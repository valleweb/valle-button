import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { valleMixinButton } from '@valle/valle-mixinbutton/valle-mixinButton.js';

class ValleButton extends valleMixinButton(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          background-color: var(--primary-color, #2196F3);
          border-radius: 2px;
          /* Elevation 1 - default */
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                      0 1px 5px 0 rgba(0, 0, 0, 0.12),
                      0 3px 1px -2px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          color: var(--primary-text-color, #fff);
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          line-height: 36px;
          min-width: 88px;
          outline: none;
          padding: 0 16px;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: box-shadow .5s, background-color .3s;
        };

        /* Elevations */
        :host([elevation="2"]) {
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                      0 1px 10px 0 rgba(0, 0, 0, 0.12),
                      0 2px 4px -1px rgba(0, 0, 0, 0.4);
        };

        :host([elevation="3"]) {
          box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                      0 1px 18px 0 rgba(0, 0, 0, 0.12),
                      0 3px 5px -1px rgba(0, 0, 0, 0.4);
        };

        :host([elevation="4"]) {
          box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                      0 3px 14px 2px rgba(0, 0, 0, 0.12),
                      0 5px 5px -3px rgba(0, 0, 0, 0.4);
        };

        :host([elevation="5"]) {
          box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                      0 4px 22px 3px rgba(0, 0, 0, 0.12),
                      0 6px 7px -4px rgba(0, 0, 0, 0.4);
        };

        /* UI feedbacks */
        :host(:focus) {
          box-shadow: 0 0 8px rgba(0,0,0,.18),
                      0 8px 16px rgba(0,0,0,.36);
        };

        :host(:focus:hover) {
          visibility: hidden; /*remove visual focus state when click*/
        };

        :host(:active) {
          box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),
                      0 1px 10px 0 rgba(0,0,0,.12),
                      0 2px 4px -1px rgba(0,0,0,.2);
        };

        :host(:hover) {
          background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
          cursor: pointer;
        };

        /* States */
        :host([disabled]) {
          background-color: rgba(0,0,0,.12);
          box-shadow: none;
          color: rgba(0,0,0,.26);
        };

        :host([disabled]:hover) {
          background-image: none;
          cursor: default;
        };

        :host([pressed]) {
          background-color: var(--background-color-pressed, #AB82FF);
          color: var(--text-color-pressed, #fff);
        };
      </style>

      <slot></slot>
    `;
	}
};

customElements.define('valle-button', ValleButton);
