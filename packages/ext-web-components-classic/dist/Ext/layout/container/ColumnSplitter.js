import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_resizer_Splitter from '../../../Ext/resizer/Splitter.js';

var Ext_layout_container_ColumnSplitter =
/*#__PURE__*/
function (_Ext_resizer_Splitter) {
  _inheritsLoose(Ext_layout_container_ColumnSplitter, _Ext_resizer_Splitter);

  Ext_layout_container_ColumnSplitter.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'childEls', 'cls', 'collapsedCls', 'collapseOnDblClick', 'collapseTarget', 'collapsible', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'defaultSplitMax', 'defaultSplitMin', 'disabled', 'disabledCls', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'padding', 'performCollapse', 'plugins', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'size', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'tracker', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_layout_container_ColumnSplitter.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_layout_container_ColumnSplitter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_ColumnSplitter.PROPERTIES());
    return Ext_resizer_Splitter.getProperties(properties);
  };

  Ext_layout_container_ColumnSplitter.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_ColumnSplitter.EVENTS());
    return Ext_resizer_Splitter.getEvents(events);
  } //events
  ////configs
  //
  //static XTYPE() {return 'columnsplitter'}
  //static PROPERTIESOBJECT() { return {
  //[object Object]}}
  //static METHODS() { return [
  //]}
  ;

  _createClass(Ext_layout_container_ColumnSplitter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_resizer_Splitter.observedAttributes; //for (var property in Ext_layout_container_ColumnSplitter.PROPERTIESOBJECT()) {
      //    attrs.push(property)
      //}

      Ext_layout_container_ColumnSplitter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_ColumnSplitter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_ColumnSplitter(properties, events) {
    return _Ext_resizer_Splitter.call(this, properties.concat(Ext_layout_container_ColumnSplitter.PROPERTIES()), events.concat(Ext_layout_container_ColumnSplitter.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_ColumnSplitter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_resizer_Splitter.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_resizer_Splitter.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_ColumnSplitter;
}(Ext_resizer_Splitter);

export { Ext_layout_container_ColumnSplitter as default };