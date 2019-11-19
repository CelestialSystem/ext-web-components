import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_calendar_view_Days from '@sencha/ext-runtime-base/dist/./Ext/calendar/view/Days.js';
import Ext_calendar_view_Days from './Ext/calendar/view/Days.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCCalendar_daysview =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(EWCCalendar_daysview, _Ext_calendar_view_Da);

  function EWCCalendar_daysview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-daysview';
    return _this;
  }

  return EWCCalendar_daysview;
}(Ext_calendar_view_Days);

export { EWCCalendar_daysview as default };
window.customElements.define('ext-calendar-daysview', HTMLParsedElement.withParsedCallback(EWCCalendar_daysview));