import Ext_Button from '../../Ext/Button.js';

export default class Ext_tab_Tab extends Ext_Button {

    static PROPERTIES() { return [
'active',
'alignSelf',
'allowDepress',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'arrow',
'arrowAlign',
'autoEvent',
'axisLock',
'badgeText',
'bind',
'border',
'bottom',
'buttonType',
'centered',
'closable',
'cls',
'constrainAlign',
'contentEl',
'controller',
'data',
'defaultListenerScope',
'destroyMenu',
'disabled',
'displayed',
'docked',
'draggable',
'enableToggle',
'flex',
'floated',
'focusCls',
'fullscreen',
'handler',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'icon',
'iconAlign',
'iconCls',
'id',
'instanceCls',
'itemId',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'left',
'listeners',
'margin',
'maxHeight',
'maxWidth',
'menu',
'menuAlign',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'padding',
'plugins',
'pressed',
'pressedDelay',
'publishes',
'record',
'reference',
'relative',
'renderTo',
'right',
'ripple',
'rotation',
'scope',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'stateful',
'statefulDefaults',
'stateId',
'stretchMenu',
'style',
'tabIndex',
'tabPosition',
'text',
'textAlign',
'title',
'toFrontOnShow',
'toggleHandler',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'userCls',
'userSelectable',
'value',
'viewModel',
'weight',
'width',
'x',
'xtype',
'y',
'zIndex',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
]};
    static EVENTS() { return [
{name:'activate',parameters:'tab'},
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforepressedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'tab'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'tab,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'tab'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'tab,event'},
{name:'focusenter',parameters:'tab,event'},
{name:'focusleave',parameters:'tab,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'pressedchange',parameters:'sender,value,oldValue'},
{name:'release',parameters:'tab,e'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tap',parameters:'tab,e'},
{name:'tofront',parameters:'tab'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_tab_Tab.PROPERTIES());
        return Ext_Button.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_tab_Tab.EVENTS());
        return Ext_Button.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'tab'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_tab_Tab.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_tab_Tab.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_tab_Tab.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_tab_Tab.PROPERTIES()),
            events.concat(Ext_tab_Tab.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}