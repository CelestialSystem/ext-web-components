import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtPagingtoolbarComponent extends Ext_grid_PagingToolbar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pagingtoolbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pagingtoolbar', ExtPagingtoolbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pagingtoolbar', HTMLParsedElement.withParsedCallback(ExtPagingtoolbarComponent))
