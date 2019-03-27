//import { Route } from '@sencha/ext-components';

import  { getRoutes } from '@sencha/ext-components/lib/aa-router.component';
import '@sencha/ext-components/lib/ext-audio.component';
import '@sencha/ext-components/lib/ext-container.component';
import '@sencha/ext-components/lib/ext-menu.component';
import '@sencha/ext-components/lib/ext-menuitem.component';
import '@sencha/ext-components/lib/ext-carousel.component';
import '@sencha/ext-components/lib/ext-button.component';
import '@sencha/ext-components/lib/ext-checkboxfield.component';
import '@sencha/ext-components/lib/ext-column.component';
import '@sencha/ext-components/lib/ext-comboboxfield.component';
import '@sencha/ext-components/lib/ext-container.component';
import '@sencha/ext-components/lib/ext-containerfield.component';
import '@sencha/ext-components/lib/ext-splitbutton.component';
import '@sencha/ext-components/lib/ext-dataview.component';
import '@sencha/ext-components/lib/ext-dialog.component';
import '@sencha/ext-components/lib/ext-datepanel.component';
import '@sencha/ext-components/lib/ext-datepickerfield.component';
import '@sencha/ext-components/lib/ext-datepickernativefield.component';
import '@sencha/ext-components/lib/ext-emailfield.component';
import '@sencha/ext-components/lib/ext-fieldset.component';
import '@sencha/ext-components/lib/ext-filefield.component';
import '@sencha/ext-components/lib/ext-formpanel.component';
import '@sencha/ext-components/lib/ext-grid.component';
import '@sencha/ext-components/lib/ext-numberfield.component';
import '@sencha/ext-components/lib/ext-panel.component';
import '@sencha/ext-components/lib/ext-passwordfield.component';
import '@sencha/ext-components/lib/ext-radiofield.component';
import '@sencha/ext-components/lib/ext-searchfield.component';
import '@sencha/ext-components/lib/ext-selectfield.component';
import '@sencha/ext-components/lib/ext-sliderfield.component';
import '@sencha/ext-components/lib/ext-spinnerfield.component';
import '@sencha/ext-components/lib/ext-treelist.component';
import '@sencha/ext-components/lib/ext-panel.component';
import '@sencha/ext-components/lib/ext-segmentedbutton.component';
import '@sencha/ext-components/lib/ext-tabpanel.component';
import '@sencha/ext-components/lib/ext-tabbar.component';
import '@sencha/ext-components/lib/ext-tab.component';
import '@sencha/ext-components/lib/ext-textareafield.component';
import '@sencha/ext-components/lib/ext-textfield.component';
import '@sencha/ext-components/lib/ext-timefield.component';
import '@sencha/ext-components/lib/ext-textareafield.component';
import '@sencha/ext-components/lib/ext-textfield.component';
import '@sencha/ext-components/lib/ext-timefield.component';
import '@sencha/ext-components/lib/ext-timepanel.component';
import '@sencha/ext-components/lib/ext-titlebar.component';
import '@sencha/ext-components/lib/ext-togglefield.component';
import '@sencha/ext-components/lib/ext-toolbar.component';
import '@sencha/ext-components/lib/ext-urlfield.component';
import '@sencha/ext-components/lib/ext-grid.component';
import '@sencha/ext-components/lib/ext-column.component';
import '@sencha/ext-components/lib/ext-formpanel.component';
import '@sencha/ext-components/lib/ext-textfield.component';
import '@sencha/ext-components/lib/ext-sliderfield.component';
import '@sencha/ext-components/lib/ext-gauge.component';
import '@sencha/ext-components/lib/ext-colorselector.component';
import '@sencha/ext-components/lib/ext-draw.component';
import '@sencha/ext-components/lib/ext-progress.component';
import '@sencha/ext-components/lib/ext-spacer.component';
import '@sencha/ext-components/lib/ext-sheet.component';
import '@sencha/ext-components/lib/ext-video.component';



import '@sencha/ext-components/lib/ext-segmentedbutton.component';
import '@sencha/ext-components/lib/ext-indicator.component';



import getMenu from './menu';
import MainComponent from './view/main/MainComponent.js';

(function () {

  init();

  function init() {
    window.menu = getMenu();
    window.routes = getRoutes(window.menu);
    window.main = new MainComponent()
    document.body.innerHTML = window._code['main']['MainComponent.html']
  }

}());

