import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_ux_rating_Picker from '@sencha/ext-runtime-base/dist/./Ext/ux/rating/Picker.js';
import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCRating =
/*#__PURE__*/
function (_Ext_ux_rating_Picker) {
  _inheritsLoose(EWCRating, _Ext_ux_rating_Picker);

  function EWCRating() {
    var _this;

    _this = _Ext_ux_rating_Picker.call(this, [], []) || this;
    _this.xtype = 'rating';
    return _this;
  }

  return EWCRating;
}(Ext_ux_rating_Picker);

export { EWCRating as default };
window.customElements.define('ext-rating', HTMLParsedElement.withParsedCallback(EWCRating));