import Ext_Widget_Component from '../../Ext/Widget';

export default class Ext_draw_SurfaceBase_Component extends Ext_Widget_Component {
//events
//configs

static XTYPE() {return ''}
static PROPERTIESOBJECT() { return {
}}
static EVENTS() { return [
]}
static METHODS() { return [
]}

constructor() {
    super (
        Ext_draw_SurfaceBase_Component.METHODS(),
        Ext_draw_SurfaceBase_Component.XTYPE(),
        Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT(),
        Ext_draw_SurfaceBase_Component.EVENTS()
    )
    this.XTYPE = Ext_draw_SurfaceBase_Component.XTYPE()
    this.PROPERTIESOBJECT = this.extendObject(this.PROPERTIESOBJECT, Ext_draw_SurfaceBase_Component.PROPERTIESOBJECT());
    this.METHODS = this.extendArray(this.METHODS, Ext_draw_SurfaceBase_Component.METHODS());
    this.EVENTS = this.extendArray(this.EVENTS, Ext_draw_SurfaceBase_Component.EVENTS());
  }

connectedCallback() {
    super.connectedCallback()
}

attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
}

}
