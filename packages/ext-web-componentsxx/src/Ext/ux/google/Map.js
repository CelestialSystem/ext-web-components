import Ext_Container from '../../../Ext/Container';

export default class Ext_ux_google_Map extends Ext_Container {

    static PROPERTIES() { return [
'activeChildTabIndex',
'activeItem',
'alignSelf',
'allowFocusingDisabledChildren',
'alwaysOnTop',
'ariaAttributes',
'ariaDescribedBy',
'ariaLabel',
'ariaLabelledBy',
'autoDestroy',
'autoSize',
'axisLock',
'bind',
'bodyCls',
'border',
'bottom',
'cardSwitchAnimation',
'centered',
'cls',
'constrainAlign',
'contentEl',
'control',
'controller',
'data',
'defaultFocus',
'defaultListenerScope',
'defaults',
'defaultType',
'disabled',
'displayed',
'docked',
'draggable',
'flex',
'floated',
'focusableContainer',
'focusCls',
'fullscreen',
'geo',
'height',
'hidden',
'hideAnimation',
'hideMode',
'hideOnMaskTap',
'html',
'id',
'inactiveChildTabIndex',
'innerCls',
'instanceCls',
'itemId',
'items',
'keyMap',
'keyMapEnabled',
'keyMapTarget',
'layout',
'left',
'listeners',
'manageBorders',
'map',
'mapListeners',
'mapOptions',
'margin',
'markers',
'markerTemplate',
'masked',
'maxHeight',
'maxWidth',
'minHeight',
'minWidth',
'modal',
'modelValidation',
'name',
'nameable',
'nameHolder',
'padding',
'plugins',
'publishes',
'record',
'reference',
'referenceHolder',
'relative',
'renderTo',
'requiredScripts',
'resetFocusPosition',
'right',
'ripple',
'scrollable',
'session',
'shadow',
'shareableName',
'shim',
'showAnimation',
'stateful',
'statefulDefaults',
'stateId',
'style',
'tabIndex',
'toFrontOnShow',
'tooltip',
'top',
'touchAction',
'tpl',
'tplWriteMode',
'translatable',
'twoWayBindable',
'ui',
'useCurrentLocation',
'userCls',
'userSelectable',
'viewModel',
'weight',
'weighted',
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
{name:'activate',parameters:'newActiveItem,map,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'map,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
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
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'map'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'map,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centerchange',parameters:'map,map,center'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'deactivate',parameters:'oldActiveItem,map,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'map,event'},
{name:'focusenter',parameters:'map,event'},
{name:'focusleave',parameters:'map,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maprender',parameters:'map,map'},
{name:'markerclick',parameters:'map,info'},
{name:'markerdblclick',parameters:'map,info'},
{name:'markerdrag',parameters:'map,info'},
{name:'markerdragend',parameters:'map,info'},
{name:'markerdragstart',parameters:'map,info'},
{name:'markermousedown',parameters:'map,info'},
{name:'markermouseout',parameters:'map,info'},
{name:'markermouseover',parameters:'map,info'},
{name:'markermouseup',parameters:'map,info'},
{name:'markerrightclick',parameters:'map,info'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'map,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'map,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'map,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'map'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'typechange',parameters:'map,map,mapType'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'zoomchange',parameters:'map,map,zoomLevel'},
{name:'ready',parameters:''}
]};
    static getProperties(properties) {
        properties = properties.concat(Ext_ux_google_Map.PROPERTIES());
        return Ext_Container.getProperties(properties);
    }
    static getEvents(events) {
        events = events.concat(Ext_ux_google_Map.EVENTS());
        return Ext_Container.getEvents(events);
    }
//events
////configs
//
//static XTYPE() {return 'map'}
//static PROPERTIESOBJECT() { return {
//[object Object]}}

//static METHODS() { return [
//]}

    static get observedAttributes() {
        var attrs = super.observedAttributes
        //for (var property in Ext_ux_google_Map.PROPERTIESOBJECT()) {
        //    attrs.push(property)
        //}
        Ext_ux_google_Map.PROPERTIES().forEach(function (property, index, array) {
            attrs.push(property)
        })
        Ext_ux_google_Map.EVENTS().forEach(function (eventparameter, index, array) {
            attrs.push('on' + eventparameter.name)
        })
        return attrs
    }

    constructor(properties, events) {
        super (
            properties.concat(Ext_ux_google_Map.PROPERTIES()),
            events.concat(Ext_ux_google_Map.EVENTS())
        )
    }

    connectedCallback() {
        super.connectedCallback()
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        super.attributeChangedCallback(attrName, oldVal, newVal)
    }

}
