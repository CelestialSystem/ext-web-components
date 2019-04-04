Ext.require([
    'Ext.chart.theme.Blue',
    'Ext.chart.theme.Green',
    'Ext.chart.theme.Muted',
    'Ext.chart.theme.Red',
    'Ext.chart.theme.Sky',
    'Ext.chart.theme.Yellow'
]);

export default class ChartToolbar extends HTMLElement {
    constructor() {
        super()
        this.theme = "default";
    }
 
    connectedCallback() {
        const theme = this.getAttribute('theme');
        const show = this.getAttribute('show');
        const preview = this.getAttribute('preview');
        const onlyMidnight = this.getAttribute('onlyMidnight') || false;
        const refresh = this.getAttribute('onRefreshButtonReady') || false;
        const onStackGroup = this.getAttribute('onStackGroup');
        const onToggleCrosshair = this.getAttribute('onToggleCrosshair');
        const onToggleZoomOnPan = this.getAttribute('onToggleZoomOnPan');
        const supportsTouch = this.getAttribute('supportsTouch');
        const onMenuItemReady = this.getAttribute('onItemReady')

     this.innerHTML = `
            <ext-container>
                <ext-button
                    hidden=${!(theme || show)}
                    margin="0 10px 0 0"
                    iconCls="x-fa fa-picture-o"
                    text="Theme"
                    ui="action">
                    <ext-menu>
                        <ext-menuitem
                            onready=${onMenuItemReady}
                            text="Default"
                            iconCls="x-font-icon md-icon-done"
                            itemId="0">
                        </ext-menuitem>
                        <ext-menuitem
                            onready=${onMenuItemReady}
                            text="Green"
                            hidden=${onlyMidnight}
                            itemId="1">
                        </ext-menuitem>
                        <ext-menuitem
                            onready=${onMenuItemReady}
                            text="Midnight"
                            itemId="2">
                        </ext-menuitem>
                        <ext-menuitem
                            onready=${onMenuItemReady}
                            hidden=${onlyMidnight}
                            text="Muted"
                            itemId="3">
                        </ext-menuitem>
                        <ext-menuitem
                            hidden=${onlyMidnight}
                            onready=${onMenuItemReady}
                            text="Red"
                            itemId="4">
                        </ext-menuitem>
                        <ext-menuitem
                            hidden=${onlyMidnight}
                            onready=${onMenuItemReady}
                            text="Sky"
                            itemId="5">
                        </ext-menuitem>
                        <ext-menuitem
                            text="Yellow"
                            hidden=${onlyMidnight}
                            onready=${onMenuItemReady}
                            itemId="6">
                        </ext-menuitem>
                    </ext-menu>
                </ext-button>
                <ext-button
                    hidden=${!preview}
                    margin="0 10px 0 0"
                    ui="action"
                    iconCls="x-fa fa-eye"
                    text="Preview"
                    platformConfig='{
                        "desktop": {
                            "text": "DOWNLOAD",
                            "iconCls": "x-fa fa-download"
                        }}'>
                </ext-button>
                <ext-button
                    onready=${refresh}
                    hidden=${!refresh}
                    ui="action"
                    margin="0 10px 0 0"
                    iconCls="x-fa fa-refresh"
                    text="REFRESH">
                </ext-button>

                <ext-segmentedbutton
                    hidden=${!(show || onStackGroup)}
                    margin="0 10px 0 0">
                    <ext-button
                        iconCls="x-fa fa-bars"
                        text="STACK" >
                    </ext-button>
                    <ext-button
                        iconCls="x-fa fa-bar-chart"
                        text="GROUP">
                    </ext-button>
                </ext-segmentedbutton>

                <ext-segmentedbutton
                    hidden=${!(show || onToggleZoomOnPan) || supportsTouch}
                    >
                    <ext-button
                    iconCls="x-fa fa-arrows"
                    text="PAN"
                    value="false">
                    </ext-button>
                    <ext-button
                    iconCls="x-fa fa-search-plus"
                    text="ZOOM"
                    value="true">
                    </ext-button>
                    <ext-button
                    hidden=${!onToggleCrosshair}
                    iconCls="x-fa fa-crosshairs"
                    text="CROSSHAIR" value="crosshair">
                    </ext-button>
                </ext-segmentedbutton>
            </ext-container>
        `;
    }
}

window.customElements.define('chart-toolbar', ChartToolbar);