/*! @maps4html/web-map-custom-element 15-03-2024 */

class MapStyle extends HTMLElement{static get observedAttributes(){}attributeChangedCallback(t,e,s){}constructor(){super()}connectedCallback(){var t,e;this._stylesheetHost=this.getRootNode()instanceof ShadowRoot?this.getRootNode().host:this.parentElement,void 0!==this._stylesheetHost&&(this.styleElement=document.createElement("style"),(this.styleElement.mapStyle=this).styleElement.textContent=this.textContent,e=(t=this).styleElement,Array.from(t.attributes).forEach(t=>{e.setAttribute(t.nodeName,t.nodeValue)}),this._stylesheetHost._layer?this._stylesheetHost._layer.appendStyleElement(this):this._stylesheetHost._templatedLayer&&this._stylesheetHost._templatedLayer.appendStyleElement(this))}disconnectedCallback(){this._stylesheetHost&&this.styleElement.remove()}}export{MapStyle};
//# sourceMappingURL=map-style.js.map