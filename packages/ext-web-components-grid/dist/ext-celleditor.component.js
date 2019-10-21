import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCelleditorComponent =
/*#__PURE__*/
function (_Ext_grid_CellEditor) {
  _inheritsLoose(ExtCelleditorComponent, _Ext_grid_CellEditor);

  function ExtCelleditorComponent() {
    var _this;

    _this = _Ext_grid_CellEditor.call(this, [], []) || this;
    _this.xtype = 'celleditor';
    return _this;
  }

  return ExtCelleditorComponent;
}(Ext_grid_CellEditor); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-celleditor', ExtCelleditorComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(ExtCelleditorComponent));