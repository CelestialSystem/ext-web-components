import Ext_form_Time from './Ext/form/Time.js';
import ElementParser from './ElementParser.js';

export default class EWCTimefield extends Ext_form_Time {
  constructor() {
    super ([], []);
    this.xtype = 'timefield';
  }
}
try {
  window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));
}
catch(e) {
  console.log(e)
  window.customElements.define('ext-timefield', EWCTimefield);
}
