(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    241: function(t, e, n) {
        var o = n(242);
        "string" == typeof o && (o = [[t.i, o, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(5)(o, i);
        o.locals && (t.exports = o.locals)
    },
    242: function(t, e, n) {
        (t.exports = n(4)(!1)).push([t.i, "\n.historic-aqidata-inner .monthly:hover svg text { visibility: inherit; }\n.historic-aqidata-inner .monthly { cursor: pointer; }\n.historic-aqidata-inner ul { cursor: pointer; }\n\n\n.historic-aqidata-inner table {\n\tfont-size: 10px;\n\tline-height: 10px;\n\tborder-spacing: 0;\n\tmargin-bottom: 10px;\n}\n\n\n.historic-aqidata-inner .month {\n\tdisplay:inline-block;\n\tcolor: #888;\n\ttext-align:center;\n\tfont-size: 8px;\n\tpadding: 0 5px\n\n}\n\n.historic-aqidata-inner td.year \n{\n\ttext-align: center;\n\tfont-size: 10px;\n}\n\n\n.historic-aqidata-inner td.month \n{\n\tfont-size: 8px;\n\tline-height: 1;\n}\n\n.historic-aqidata-inner td \n{ \n\theight: 9px;\n\tpadding: 0px; \n}\n\n@keyframes slidy-in {\n  0%   { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes slidy-out {\n  0%   { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.historic-aqidata-inner .slide-in {\n    animation: 1s slidy-in ;\n}\n.historic-aqidata-inner .slide-out {\n\theight: 0;\n    animation: 1s slidy-out ;\n}", ""])
    },
    345: function(t, e) {
        var n = L.Point.prototype._round
          , o = function() {
            return this
        };
        function i(t, e, n) {
            e ? t.destroy() : n || (t.autoPreventDefault = !1)
        }
        var r = {
            options: {
                padding: .1,
                forceCanvas: !1,
                doubleBuffering: !1,
                resolution: L.Browser.retina ? 2 : 1,
                projectionZoom: function(t) {
                    return (t.getMaxZoom() + t.getMinZoom()) / 2
                },
                destroyInteractionManager: !1,
                autoPreventDefault: !0
            },
            initialize: function(t, e, n) {
                L.setOptions(this, n),
                L.stamp(this),
                this._drawCallback = t,
                this._pixiContainer = e,
                this._rendererOptions = {
                    transparent: !0,
                    resolution: this.options.resolution,
                    antialias: !0,
                    forceCanvas: this.options.forceCanvas
                },
                this._doubleBuffering = PIXI.utils.isWebGLSupported() && !this.options.forceCanvas && this.options.doubleBuffering
            },
            _setMap: function() {},
            _setContainerStyle: function() {},
            _addContainer: function() {
                this.getPane().appendChild(this._container),
                this.getPane().style.direction = "ltr"
            },
            _setEvents: function() {},
            onAdd: function(t) {
                if (this._setMap(t),
                !this._container) {
                    var e = this._container = L.DomUtil.create("div", "leaflet-pixi-overlay");
                    e.style.position = "absolute",
                    this._renderer = PIXI.autoDetectRenderer(this._rendererOptions),
                    i(this._renderer.plugins.interaction, this.options.destroyInteractionManager, this.options.autoPreventDefault),
                    e.appendChild(this._renderer.view),
                    this._zoomAnimated && (L.DomUtil.addClass(e, "leaflet-zoom-animated"),
                    this._setContainerStyle()),
                    this._doubleBuffering && (this._auxRenderer = PIXI.autoDetectRenderer(this._rendererOptions),
                    i(this._auxRenderer.plugins.interaction, this.options.destroyInteractionManager, this.options.autoPreventDefault),
                    e.appendChild(this._auxRenderer.view),
                    this._renderer.view.style.position = "absolute",
                    this._auxRenderer.view.style.position = "absolute")
                }
                this._addContainer(),
                this._setEvents();
                var n = this._map;
                this._initialZoom = this.options.projectionZoom(n),
                this._wgsOrigin = L.latLng([0, 0]),
                this._wgsInitialShift = n.project(this._wgsOrigin, this._initialZoom),
                this._mapInitialZoom = n.getZoom(),
                this._scale = n.getZoomScale(this._mapInitialZoom, this._initialZoom);
                var o = this;
                this.utils = {
                    latLngToLayerPoint: function(t, e) {
                        return e = void 0 === e ? o._initialZoom : e,
                        n.project(L.latLng(t), e)
                    },
                    layerPointToLatLng: function(t, e) {
                        e = void 0 === e ? o._initialZoom : e;
                        var i = L.point(t);
                        return n.unproject(i, e)
                    },
                    getScale: function(t) {
                        return void 0 === t ? n.getZoomScale(n.getZoom(), o._initialZoom) : n.getZoomScale(t, o._initialZoom)
                    },
                    getRenderer: function() {
                        return o._renderer
                    },
                    getContainer: function() {
                        return o._pixiContainer
                    },
                    getMap: function() {
                        return o._map
                    }
                },
                this._update({
                    type: "add"
                })
            },
            onRemove: function() {
                L.DomUtil.remove(this._container)
            },
            getEvents: function() {
                var t = {
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._zoomChange
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
                t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function(t) {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, e) {
                var n = this._map.getZoomScale(e, this._zoom)
                  , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
                  , i = this._map.project(this._center, e)
                  , r = o.multiplyBy(-n).add(i).subtract(this._map._getNewPixelOrigin(t, e));
                L.Browser.any3d ? L.DomUtil.setTransform(this._container, r, n) : L.DomUtil.setPosition(this._container, r)
            },
            _redraw: function(t, e) {
                this._disableLeafletRounding();
                var n = this._map.latLngToLayerPoint(this._wgsOrigin)._subtract(this._wgsInitialShift.multiplyBy(this._scale))._subtract(t);
                this._pixiContainer.scale.set(this._scale),
                this._pixiContainer.position.set(n.x, n.y),
                this._drawCallback(this.utils, e),
                this._enableLeafletRounding()
            },
            _update: function(t) {
                if (!this._map._animatingZoom || !this._bounds) {
                    var e = this.options.padding
                      , n = this._map.getSize()
                      , o = this._map.containerPointToLayerPoint(n.multiplyBy(-e)).round();
                    if (this._bounds = new L.Bounds(o,o.add(n.multiplyBy(1 + 2 * e)).round()),
                    this._center = this._map.getCenter(),
                    this._zoom = this._map.getZoom(),
                    this._doubleBuffering) {
                        var i = this._renderer;
                        this._renderer = this._auxRenderer,
                        this._auxRenderer = i
                    }
                    var r = this._renderer.view
                      , a = this._bounds
                      , s = this._container
                      , l = a.getSize();
                    if (!this._renderer.size || this._renderer.size.x !== l.x || this._renderer.size.y !== l.y) {
                        if (this._renderer.gl && (this._renderer.resolution = this._renderer.rootRenderTarget.resolution = this.options.resolution),
                        this._renderer.resize(l.x, l.y),
                        r.style.width = l.x + "px",
                        r.style.height = l.y + "px",
                        this._renderer.gl) {
                            var c = this._renderer.gl;
                            c.drawingBufferWidth !== this._renderer.width && (this._renderer.resolution = this._renderer.rootRenderTarget.resolution = this.options.resolution * c.drawingBufferWidth / this._renderer.width,
                            this._renderer.resize(l.x, l.y))
                        }
                        this._renderer.size = l
                    }
                    if (this._doubleBuffering) {
                        var p = this;
                        requestAnimationFrame(function() {
                            p._redraw(a.min, t),
                            p._renderer.gl.finish(),
                            r.style.visibility = "visible",
                            p._auxRenderer.view.style.visibility = "hidden",
                            L.DomUtil.setPosition(s, a.min)
                        })
                    } else
                        this._redraw(a.min, t),
                        L.DomUtil.setPosition(s, a.min)
                }
            },
            _disableLeafletRounding: function() {
                L.Point.prototype._round = o
            },
            _enableLeafletRounding: function() {
                L.Point.prototype._round = n
            },
            _zoomChange: function() {
                this._scale = this._map.getZoomScale(this._map.getZoom(), this._initialZoom)
            },
            redraw: function(t) {
                return this._map && (this._disableLeafletRounding(),
                this._drawCallback(this.utils, t),
                this._enableLeafletRounding()),
                this
            }
        };
        L.PixiOverlay = L.Layer.extend(r),
        L.pixiOverlay = function(t, e, n) {
            return L.Browser.canvas ? new L.PixiOverlay(t,e,n) : null
        }
    },
    346: function(t, e, n) {
        var o = n(347);
        "string" == typeof o && (o = [[t.i, o, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(5)(o, i);
        o.locals && (t.exports = o.locals)
    },
    347: function(t, e, n) {
        (t.exports = n(4)(!1)).push([t.i, "\n.i18n-coop-btn {\n    font-size: 1em;\n    padding: 5px;\n    border: 1px solid #888;\n    border-radius: 3px;\n    background: #f8f8f8;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px rgba(0,0,0,.2);\n    margin-bottom: 10px;\n    width: fit-content;\n\n}\n\n.i18n-coop-btn:hover {\n\tbackground: #eee;\n}\n\n\n.i18n-coop-btn button {\n    border: none;\n    border-radius: 3px;\n\tbackground: #0086c8;\n\tfont-family: inherit;\n    font-size: inherit;\n    color: white;\n}\n\n.i18n-coop-btn img {\n    vertical-align: top;\n    height: 20px;\n    margin: 0 2px;\n}\n.i18n-coop-btn #i18n-help {\n    font-size: 120%;\n}\n.i18n-coop-btn #i18n-more {\n    font-size: 80%;\n}\n\n.i18n-coop-btn #i18n-divider {\n    width:50px;\n    margin-top:5px;\n    border-top:1px solid #888;    \n}", ""])
    },
    348: function(t, e, n) {
        var o = n(349);
        "string" == typeof o && (o = [[t.i, o, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(5)(o, i);
        o.locals && (t.exports = o.locals)
    },
    349: function(t, e, n) {
        (t.exports = n(4)(!1)).push([t.i, '\n.popper,\n.tooltip {\n    position: absolute;\n/*    background: #eee149;\n*/    background: #f8f8f8;\n\n    color: black;\n    width: 200px;\n    border-radius: 3px;\n    box-shadow: 0 0 2px rgba(0,0,0,0.5);\n    padding: 3px;\n    text-align: center;\n    z-index: 88;\n}\n\n.popper.small,\n.tooltip.small {\n    width: auto;\n    padding: 5px;\n    background: black;\n    color:white;\n}\n\n .tooltip-header {\n    font-weight: 800;\n    font-size: 1.1em;\n    margin: 5px;\n    padding: 5px;\n }\n\n\n.popper .popper__arrow,\n.tooltip .tooltip-arrow {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    margin: 5px;\n    z-index: 88;\n}\n\n.tooltip .tooltip-arrow,\n.popper .popper__arrow {\n    border-color: #f8f8f8;\n}\n\n.tooltip.small .tooltip-arrow,\n.popper.small .popper__arrow {\n    border-color: black;\n}\n\n.popper[x-placement^="top"],\n.tooltip[x-placement^="top"] {\n    margin-bottom: 5px;\n}\n.popper[x-placement^="top"] .popper__arrow,\n.tooltip[x-placement^="top"] .tooltip-arrow {\n    border-width: 5px 5px 0 5px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    bottom: -5px;\n    left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.popper[x-placement^="bottom"],\n.tooltip[x-placement^="bottom"] {\n    margin-top: 5px;\n}\n.tooltip[x-placement^="bottom"] .tooltip-arrow,\n.popper[x-placement^="bottom"] .popper__arrow {\n    border-width: 0 5px 5px 5px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    top: -5px;\n    left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.tooltip[x-placement^="right"],\n.popper[x-placement^="right"] {\n    margin-left: 5px;\n}\n.popper[x-placement^="right"] .popper__arrow,\n.tooltip[x-placement^="right"] .tooltip-arrow {\n    border-width: 5px 5px 5px 0;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    left: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n}\n.popper[x-placement^="left"],\n.tooltip[x-placement^="left"] {\n    margin-right: 5px;\n}\n.popper[x-placement^="left"] .popper__arrow,\n.tooltip[x-placement^="left"] .tooltip-arrow {\n    border-width: 5px 0 5px 5px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    right: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n}\n', ""])
    },
    351: function(t, e, n) {
        var o = n(352);
        "string" == typeof o && (o = [[t.i, o, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(5)(o, i);
        o.locals && (t.exports = o.locals)
    },
    352: function(t, e, n) {
        (t.exports = n(4)(!1)).push([t.i, "\n\n\n\n\n\n.leaflet-container {\n     font: inherit!important;\n}\n\n.aqi-marker-tooltip-desktop {\n    max-width: 320px;\n    min-width: 120px;\n    overflow: hidden;\n    line-height: 1;\n}\n\n.aqi-marker-tooltip-mobile {\n    max-width: 320px;\n    min-width: 120px;\n    line-height: 1;\n    font-size: 100%;\n    max-height: 420px;\n    overflow-x: hidden;\n    overflow-y:scroll;\n}\n\n.aqi-marker-tooltip-mobile .more-info { border: 1px solid #888; border-radius: 3px; background-color:#eee; padding: 3px 0;}\n\n.aqi-marker-tooltip-mobile::-webkit-scrollbar { width: 3px; }\n\n.aqi-marker-tooltip-desktop .label-aqistation-title  { min-width: 280px; }\n.aqi-marker-tooltip-mobile  .label-aqistation-title  { min-width: 200px; }\n\n.label-aqistation-inner table {\n    width: 100%;\n}\n\n.label-aqistation-inner table td {\n    text-align: center;\n    white-space: normal;\n}\n\n.label-aqistation-inner table td img {\n    vertical-align:middle;\n}\n\n.label-aqistation-title {\n    \n    word-wrap: break-word;\n    font-weight: 800;\n    max-height: 55px;\n    white-space: normal;\n    overflow: hidden;\n}\n\n.saqi.item{\n    display: inline-block;\n    padding: 0 3px;\n    min-width: 38px;\n}\n\n.label-info-small {\n    font-size:80%;\n    color:#888;\n}\n\n.label-info-xsmall {\n    font-size:66%;\n    color:#888;\n}\n\n.label-info-small > b {\n    font-size:120%;\n    color:black;\n    font-weight: normal;\n}\n\n.leaflet-popup-content {\n    margin: 1px!important;\n}\n\n.leaflet-popup-content-wrapper {\n    border-radius: 1px!important;\n}\n\ntable.forecast-daily{\n    border-spacing: 0;\n}\n\ntable.forecast-daily tr.day td {\n    font-size: 80%;\n}\n\ntable.forecast-daily tr.aqi td {\n    font-family: sans-serif;\n    font-size:10px;\n    line-height:1;\n}\n\ntable.forecast-daily tr.emoticon td div {\n    border-radius: 3px;\n}\n\ntable.forecast-daily td {\n    text-align:center;\n    font-size: 80%;\n    color: #888;\n}", ""])
    },
    353: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n     width=12 height=12 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n<path style="fill:#CFD8DC;" d="M444.876,365.803L231.542,152.469c-4.16-4.171-10.914-4.179-15.085-0.019\n    c-2.006,2.001-3.133,4.717-3.134,7.55v295.403c-0.001,5.891,4.773,10.668,10.664,10.669c2.382,0.001,4.697-0.796,6.573-2.264\n    l54.165-42.347l47.275,85.099c1.893,3.368,5.459,5.449,9.323,5.44c1.659,0,3.295-0.387,4.779-1.131l64-32\n    c2.604-1.304,4.562-3.616,5.419-6.4c0.866-2.78,0.558-5.794-0.853-8.341L370.124,384h67.2c5.891,0.011,10.675-4.757,10.686-10.648\n    c0.005-2.84-1.123-5.565-3.134-7.571V365.803z"/>\n<g>\n    <path style="fill:#455A64;" d="M223.99,85.333c-5.891,0-10.667-4.776-10.667-10.667v-64C213.324,4.776,218.099,0,223.99,0\n        c5.891,0,10.667,4.776,10.667,10.667v64C234.657,80.558,229.882,85.333,223.99,85.333z"/>\n    <path style="fill:#455A64;" d="M138.657,170.667h-64c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h64\n        c5.891,0,10.667,4.776,10.667,10.667C149.324,165.891,144.548,170.667,138.657,170.667z"/>\n    <path style="fill:#455A64;" d="M373.324,170.667h-64c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h64\n        c5.891,0,10.667,4.776,10.667,10.667C383.991,165.891,379.215,170.667,373.324,170.667z"/>\n    <path style="fill:#455A64;" d="M163.66,110.315c-2.831,0.005-5.548-1.115-7.552-3.115l-45.184-45.333\n        c-3.535-4.713-2.58-11.399,2.133-14.933c3.793-2.844,9.007-2.844,12.8,0l45.333,45.163c4.171,4.16,4.179,10.914,0.019,15.085\n        c-2.006,2.011-4.731,3.139-7.571,3.134H163.66z"/>\n    <path style="fill:#455A64;" d="M118.39,276.245c-5.89-0.094-10.589-4.945-10.495-10.836c0.044-2.723,1.127-5.326,3.028-7.276\n        l45.184-45.355c4.092-4.237,10.845-4.355,15.083-0.262c4.237,4.092,4.355,10.845,0.262,15.083\n        c-0.086,0.089-0.173,0.176-0.262,0.262l-45.333,45.205C123.884,275.069,121.201,276.211,118.39,276.245z"/>\n    <path style="fill:#455A64;" d="M284.321,110.315c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571\n        l45.355-45.163c4.713-3.535,11.399-2.579,14.933,2.133c2.844,3.793,2.844,9.007,0,12.8l-45.184,45.312\n        C289.872,109.186,287.155,110.314,284.321,110.315z"/>\n</g>\n<path d="M341.324,512c-3.872,0-7.441-2.098-9.323-5.483l-47.275-85.099l-54.165,42.368c-4.641,3.629-11.344,2.809-14.973-1.832\n    c-1.463-1.871-2.26-4.177-2.264-6.552V160c-0.011-5.891,4.757-10.675,10.648-10.686c2.84-0.005,5.565,1.123,7.571,3.134\n    l213.333,213.333c4.171,4.16,4.179,10.914,0.019,15.085c-2.006,2.011-4.731,3.139-7.571,3.134h-67.2l44.544,80.149\n    c1.411,2.547,1.719,5.561,0.853,8.341c-0.857,2.784-2.814,5.096-5.419,6.4l-64,32C344.617,511.627,342.981,512.007,341.324,512z\n     M287.991,394.667c0.717-0.002,1.431,0.07,2.133,0.213c3.059,0.617,5.694,2.543,7.211,5.269l48.256,87.104l44.907-22.464\n    l-47.936-86.251c-2.875-5.142-1.038-11.641,4.104-14.516c1.626-0.909,3.462-1.377,5.325-1.356h59.584L234.657,185.771v247.744\n    l46.763-36.565C283.293,395.476,285.607,394.672,287.991,394.667z"/>\n<path d="M223.99,85.333c-5.891,0-10.667-4.776-10.667-10.667v-64C213.324,4.776,218.099,0,223.99,0\n    c5.891,0,10.667,4.776,10.667,10.667v64C234.657,80.558,229.882,85.333,223.99,85.333z"/>\n<path d="M138.657,170.667h-64c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h64\n    c5.891,0,10.667,4.776,10.667,10.667C149.324,165.891,144.548,170.667,138.657,170.667z"/>\n<path d="M373.324,170.667h-64c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h64\n    c5.891,0,10.667,4.776,10.667,10.667C383.991,165.891,379.215,170.667,373.324,170.667z"/>\n<path d="M163.66,110.315c-2.831,0.005-5.548-1.115-7.552-3.115l-45.184-45.333c-3.535-4.713-2.58-11.399,2.133-14.933\n    c3.793-2.844,9.007-2.844,12.8,0l45.333,45.163c4.171,4.16,4.179,10.914,0.019,15.085c-2.006,2.011-4.731,3.139-7.571,3.134H163.66z\n    "/>\n<path d="M118.39,276.245c-5.89-0.094-10.589-4.945-10.495-10.836c0.044-2.723,1.127-5.326,3.028-7.276l45.184-45.355\n    c4.092-4.237,10.845-4.355,15.083-0.262c4.237,4.092,4.355,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262\n    l-45.333,45.205C123.884,275.069,121.201,276.211,118.39,276.245z"/>\n<path d="M284.321,110.315c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l45.355-45.163\n    c4.713-3.535,11.399-2.579,14.933,2.133c2.844,3.793,2.844,9.007,0,12.8l-45.184,45.312\n    C289.872,109.186,287.155,110.314,284.321,110.315z"/>\n</svg>'
    },
    354: function(t, e, n) {
        var o = n(355);
        "string" == typeof o && (o = [[t.i, o, ""]]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(5)(o, i);
        o.locals && (t.exports = o.locals)
    },
    355: function(t, e, n) {
        (t.exports = n(4)(!1)).push([t.i, '\n.popper,\n.tooltip {\n\tfont-family:"Noto Serif",Cambria,"Palatino Linotype","Book Antiqua","URW Palladio L",serif; \n\tfont-size:110%;\n    position: absolute;\n    background: #f8f8f8;\n\n    color: black;\n    width: 200px;\n    border-radius: 3px;\n    box-shadow: 0 0 2px rgba(0,0,0,0.5);\n    padding: 3px;\n    text-align: center;\n    z-index: 8888;\n}\n\n.popper.small,\n.tooltip.small {\n    width: auto;\n    padding: 5px;\n    background: black;\n    color:white;\n}\n\n .tooltip-header {\n    font-weight: 800;\n    font-size: 1.1em;\n    margin: 5px;\n    padding: 5px;\n }\n\n\n.popper .popper__arrow,\n.tooltip .tooltip-arrow {\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    margin: 5px;\n    z-index: 88;\n}\n\n.tooltip .tooltip-arrow,\n.popper .popper__arrow {\n    border-color: #f8f8f8;\n}\n\n.tooltip.small .tooltip-arrow,\n.popper.small .popper__arrow {\n    border-color: black;\n}\n\n.popper[x-placement^="top"],\n.tooltip[x-placement^="top"] {\n    margin-bottom: 5px;\n}\n.popper[x-placement^="top"] .popper__arrow,\n.tooltip[x-placement^="top"] .tooltip-arrow {\n    border-width: 5px 5px 0 5px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    bottom: -5px;\n    left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.popper[x-placement^="bottom"],\n.tooltip[x-placement^="bottom"] {\n    margin-top: -29px;\n}\n.tooltip[x-placement^="bottom"] .tooltip-arrow,\n.popper[x-placement^="bottom"] .popper__arrow {\n    border-width: 0 5px 5px 5px;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    top: -5px;\n    left: calc(50% - 5px);\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.tooltip[x-placement^="right"],\n.popper[x-placement^="right"] {\n    margin-left: 5px;\n}\n.popper[x-placement^="right"] .popper__arrow,\n.tooltip[x-placement^="right"] .tooltip-arrow {\n    border-width: 5px 5px 5px 0;\n    border-left-color: transparent;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    left: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n}\n.popper[x-placement^="left"],\n.tooltip[x-placement^="left"] {\n    margin-right: 5px;\n}\n.popper[x-placement^="left"] .popper__arrow,\n.tooltip[x-placement^="left"] .tooltip-arrow {\n    border-width: 5px 0 5px 5px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-bottom-color: transparent;\n    right: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0;\n}\n', ""])
    },
    376: function(t, e, n) {
        "use strict";
        n.r(e);
        var o, i = n(64), r = n(7);
        var a = "https://api.waqi.info/";
        function s(t) {
            return !isNaN(t) && parseInt(Number(t)) == t && !isNaN(parseInt(t, 10))
        }
        function l(t, e) {
            var n = Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&");
            return fetch(t, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: n
            }).then(function(t) {
                return t.json()
            })
        }
        var c = {};
        function p(t, e, n) {
            if (void 0 === e && (e = {}),
            void 0 === n && (n = 3600),
            void 0 == t || -1 == t || !s(t) && "hbs" != t)
                return Promise.resolve("na");
            if (!c[t]) {
                var o = l(a + "api/token/" + t, e).then(function(t) {
                    return t.rxs.obs[0].msg.token || "notkn"
                }).catch(function(e) {
                    return console.error("Failed to aquire token for", t, ":", e),
                    "nope"
                });
                c[t] = o
            }
            return c[t]
        }
        function d() {
            (function() {
                var t = Date.now();
                return new Promise(function(e, n) {
                    var o = !1
                      , i = !1;
                    try {
                        i = !!window.callPhantom
                    } catch (t) {}
                    function r() {
                        var n = document.documentElement.scrollTop || document.body.scrollTop;
                        s() && e([0, n, window.innerHeight, (new Date).getTime() - t, i ? 1 : 0])
                    }
                    function a(n) {
                        s() && e([1, n.pageX, n.pageY, (new Date).getTime() - t, i ? 1 : 0])
                    }
                    function s() {
                        var t = !o;
                        return window.removeEventListener("mousemove", a, !1),
                        window.removeEventListener("scroll", r, !0),
                        o = !0,
                        t
                    }
                    window.addEventListener("scroll", r, !0),
                    window.addEventListener("mousemove", a, !1)
                }
                )
            }
            )().then(function(t) {
                return t[0] += 128,
                p("hbs", {
                    k: btoa(JSON.stringify(t))
                })
            }).catch(function(t) {
                console.error("Failed to send HBS")
            })
        }
        function u(t, e, n) {
            return void 0 === n && (n = {}),
            p(e).then(function(o) {
                return n.token = o,
                n.id = e,
                l(t, n).then(function(t) {
                    for (var e = t.rxs.obs.length, n = 0; n < e; n++) {
                        var o = t.rxs.obs[n]
                          , i = o.status;
                        if ("200" == i || "ok" == i)
                            return o.msg;
                        if ("nug" != i)
                            throw "error" == i ? o.msg : new Error("Invalid request response: " + i);
                        d()
                    }
                })
            })
        }
        new (function() {
            function t() {}
            return t.prototype.full = function(t, e) {
                var n = "https://wind.waqi.info/nsearch/full/" + t;
                return e && e.n && 20 != e.n && (n += "?n=" + e.n),
                l(n, {
                    type: "full"
                })
            }
            ,
            t
        }());
        function h(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
        function f(t, e, n) {
            for (var o = "#", i = 0; i < 3; i++) {
                var r = parseInt(t.substr(1 + 2 * i, 2), 16)
                  , a = parseInt(e.substr(1 + 2 * i, 2), 16)
                  , s = Math.round(r + (a - r) * n)
                  , l = (s = Math.min(255, Math.max(0, s))).toString(16);
                1 == l.length && (l = "0" + l),
                o += l
            }
            return o
        }
        function m(t) {
            return t < 0 || !h(t) ? "#ffffff" : (t -= 25) <= 50 ? f("#009966", "#ffde33", t / 50) : t < 100 ? f("#ffde33", "#ff9933", (t - 50) / 50) : t < 150 ? f("#ff9933", "#cc0033", (t - 100) / 50) : t < 200 ? f("#cc0033", "#660099", (t - 150) / 50) : t < 300 ? f("#660099", "#7e0023", (t - 200) / 100) : void 0
        }
        var v = n(3)
          , g = n(43);
        g.selection.prototype.c = function(t, e, n, o) {
            var i = this.append(t)
              , r = i.node();
            if ("string" != typeof e && (o = n,
            n = e,
            e = null),
            e && i.attr("class", e),
            n)
                for (var a in n)
                    r.style[a] = n[a];
            return o && i.html(o),
            i
        }
        ,
        g.selection.prototype.show = function() {
            return this.style("display", "block"),
            this
        }
        ,
        g.selection.prototype.hide = function() {
            return this.style("display", "none"),
            this
        }
        ,
        g.selection.prototype.onSeen = function(t) {
            var e = !1
              , n = new IntersectionObserver(function(o) {
                o.forEach(function(o) {
                    !e && o.intersectionRatio > 0 && (e = !0,
                    n.disconnect(),
                    t())
                })
            }
            );
            return n.observe(this.node()),
            this
        }
        ;
        var b = g
          , x = (n(241),
        function() {
            function t(t, e, n) {
                this.stationId = t,
                this.divId = e,
                this.isMobile = n
            }
            return t.create = function(e, n, o) {
                return new t(e,n,o)
            }
            ,
            t.prototype.specie = function(t) {
                return this.currentSpecie = t,
                this
            }
            ,
            t.prototype.start = function(t) {
                var e = this;
                return this.subscription = t.replaceError(function(n) {
                    if (console.error("[histo:", e.stationId, "] error catched - ", n),
                    !e.view) {
                        var o = b.select("#" + e.divId);
                        o.html('<div style="border-top: 1px solid #888888;margin: 5px 0px 5px 0;"></div>'),
                        o.c("div", "label-info-small").c("center").html("Failed to load the historical data").c("div").c("small").html(n)
                    }
                    return t
                }).subscribe({
                    next: function(t) {
                        "aqi" != e.currentSpecie && (t.species = t.species.filter(function(t) {
                            return t.pol == e.currentSpecie
                        }));
                        var n = b.select("#" + e.divId);
                        n.html('<div style="border-top: 1px solid #888888;margin: 5px 0px 5px 0;"></div>'),
                        e.view = n.c("div", "historic-aqidata-inner").c("div"),
                        e.show(t, 0),
                        e.onUpdatedCb && (e.onUpdatedCb(),
                        e.onUpdatedCb = null)
                    },
                    complete: function() {},
                    error: function(t) {
                        console.error("[histo:", e.stationId, "] error uncatched - ", t)
                    }
                }),
                this
            }
            ,
            t.prototype.stop = function() {
                return this.subscription && this.subscription.unsubscribe(),
                this.timeout && clearTimeout(this.timeout),
                this
            }
            ,
            t.prototype.onUpdated = function(t) {
                return this.onUpdatedCb = t,
                this
            }
            ,
            t.prototype.show = function(t, e) {
                var n = this;
                this.timeout && clearTimeout(this.timeout);
                var o = this.view.html("")
                  , i = o.c("div")
                  , r = o.c("div")
                  , a = t.species.length;
                if (0 == a)
                    i.c("center", "label-info-small").html("sorry, there is no historical data.");
                else {
                    var s = t.species[e % a];
                    i.c("center", "label-info-small").style("padding-bottom", "5px").html("past 12 months " + s.name),
                    i.c("center").html(w(s, t.dailyhours, this.isMobile)),
                    a > 1 && (this.timeout = setTimeout(function() {
                        s = t.species[(e + 1) % a],
                        r.c("center", "label-info-small").style("padding-bottom", "5px").html("past 12 months " + s.name),
                        r.c("center").html(w(s, t.dailyhours, n.isMobile)),
                        i.attr("class", "slide-out"),
                        r.attr("class", "slide-in"),
                        n.timeout = setTimeout(function() {
                            n.show(t, (e + 1) % a)
                        }, 1e3)
                    }, 4e3))
                }
            }
            ,
            t
        }());
        function w(t, e, n) {
            var o = {}
              , i = 0
              , r = new Date
              , a = r.getFullYear()
              , s = r.getMonth()
              , l = t.values;
            if (!l || l.length <= 2)
                return "<div class='label-info-small'>sorry, there is no historical data for " + t.name + "</div>";
            for (var c = l[0].t.t; c < l[l.length - 2].t.t; c++)
                if (l[c]) {
                    var p = l[c].t.d;
                    if (p.getTime() > r.getTime())
                        continue;
                    var d = p.getDate()
                      , u = p.getMonth()
                      , h = p.getFullYear()
                      , f = Math.floor(p.getHours() / e);
                    d = 0 == d ? 6 : d - 1,
                    o[h] = o[h] || {},
                    o[h][u] = o[h][u] || {},
                    o[h][u][d] = o[h][u][d] || {},
                    o[h][u][d][f] = l[c],
                    l[c].v && (i = Math.max(l[c].v, i))
                }
            for (var v = window.moment, g = "", b = 0, x = n ? 210 : 250, w = n ? 8 : 9, y = (x - 0 - 20) / 31, k = 2018, _ = 0, q = !1; k < a || k == a && _ < s; )
                if (++_ >= 12 && (_ = 0,
                k++),
                !(k < a - 1) && !(k == a - 1 && _ <= s) && (o[k] && o[k][_] || q)) {
                    q = !0;
                    var C = new Date(k,_ + 1,0,0,0,0);
                    if (0 == (1 & b))
                        g += '<text font-family="sans-serif" color="#888" font-size=9 font-weight="lighter" x=0 y=' + (b + .7) * w + " >" + v(C).format("MMM") + "</text>";
                    for (var z = 0; z < 31; z++) {
                        for (var T = 24 / e, L = [], M = !1, P = 0; P < T; P++) {
                            var S = void 0;
                            try {
                                S = o[k][_][z][P].v,
                                o[k][_][z][P].t.d
                            } catch (t) {}
                            var j = m(S);
                            L[P] = {
                                c: j,
                                v: S
                            },
                            isNaN(S) || (M = !0)
                        }
                        if (M)
                            for (P = 0; P < T; ) {
                                j = L[P].c;
                                g += "<rect x=" + (20 + (P / T + z) * y) + " width=" + (y / T - .5) + " y=" + w * b + " height=" + (w - .5) + ' style="fill:' + j + ';" />',
                                P += 1
                            }
                        else if (z < C.getDate()) {
                            if (_ != s || z < r.getDate())
                                g += "<rect x=" + (20 + z * y) + " width=" + (y - .5) + " y=" + w * b + " height=" + (w - .5) + ' style="fill:#eee;" />'
                        }
                    }
                    b++
                }
            return "<svg style='margin:0px;padding:0px;width:" + x + "px;height:" + w * b + "px;'>" + g + "</svg>"
        }
        function y(t, e) {
            if (void 0 === e && (e = "pm25"),
            !function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }(t))
                return t;
            var n, o = [{
                aqi: 50,
                conc: 12,
                color: "#009966"
            }, {
                aqi: 100,
                conc: 35.5,
                color: "#ffde33"
            }, {
                aqi: 150,
                conc: 65.5,
                color: "#ff9933"
            }, {
                aqi: 200,
                conc: 150.5,
                color: "#cc0033"
            }, {
                aqi: 300,
                conc: 250.5,
                color: "#660099"
            }, {
                aqi: 400,
                conc: 350.5,
                color: "#660099"
            }, {
                aqi: 500,
                conc: 500.4,
                color: "#7e0023"
            }], i = {
                "pm10-mg": "pm10",
                "pm2.5-mg": "pm25"
            };
            if (i[e] && (e = i[e]),
            "pm25" == e)
                n = o;
            else if ("pm10" == e)
                n = [{
                    aqi: 50,
                    conc: 55,
                    color: "#009966"
                }, {
                    aqi: 100,
                    conc: 155,
                    color: "#ffde33"
                }, {
                    aqi: 150,
                    conc: 255,
                    color: "#ff9933"
                }, {
                    aqi: 200,
                    conc: 355,
                    color: "#cc0033"
                }, {
                    aqi: 300,
                    conc: 425,
                    color: "#660099"
                }, {
                    aqi: 400,
                    conc: 505,
                    color: "#660099"
                }, {
                    aqi: 500,
                    conc: 605,
                    color: "#7e0023"
                }];
            else {
                if ("pm1" != e)
                    return t;
                n = o
            }
            var r = 0
              , a = 0;
            for (var s in n) {
                var l = n[s];
                if (t <= l.conc || 500 == l.aqi)
                    return r + (l.aqi - r) * (t - a) / (l.conc - a);
                a = l.conc,
                r = l.aqi
            }
            return n[n.length - 1].aqi
        }
        function k(t) {
            return t instanceof Date && !isNaN(t)
        }
        n(6).default.get("gfx");
        var _ = function() {
            function t(t) {
                this.model = t;
                try {
                    t.obs ? this.init2(t.obs) : t.data ? this.init3(t.data) : this.init()
                } catch (t) {
                    console.error("Failed to initialize graph:", t),
                    this.model = {}
                }
            }
            return t.prototype.init2 = function(t) {
                var e = 0;
                this.model.h = {};
                var n = this.model.time.tz;
                for (var o in this.model = {},
                t) {
                    var i = t[o]
                      , r = 1e3 * i.d
                      , a = i.s.replace("/", "-").replace(" ", "T") + n
                      , s = new Date(a);
                    if (!k(s))
                        throw "Invalid date: " + i.s + " -> " + a;
                    var l = []
                      , c = s.getTime() - r
                      , p = i.m;
                    i.v.forEach(function(t) {
                        "number" == typeof t ? (c += r,
                        l.push({
                            t: c,
                            v: t,
                            s: 1
                        })) : (c += 1e3 * t[1],
                        l.push({
                            t: c,
                            v: t[0],
                            s: Math.abs(t[1] / i.d)
                        }))
                    });
                    var d = 0;
                    l.forEach(function(t) {
                        t.v += d,
                        d = t.v,
                        t.v /= p
                    }),
                    l.sort(function(t, e) {
                        return t.t > e.t ? -1 : 1
                    }),
                    this.model[o] = l,
                    -1 == ["t", "p", "h", "r", "d", "w", "wg"].indexOf(o) && (0 == e && (e = l[0].t),
                    e < l[0].t && (e = l[0].t))
                }
                e = e + 36e5 - e % 36e5,
                e = (e = (new Date).getTime()) + 36e5 - e % 36e5,
                this.model.maxt = e
            }
            ,
            t.prototype.init = function() {
                var t = 0;
                for (var e in this.model.h = {},
                this.model.iaqi) {
                    var n = this.model.iaqi[e]
                      , o = n.p
                      , i = n.h[0]
                      , r = []
                      , a = new Date(i).getTime()
                      , s = a
                      , l = n.h[1];
                    n.h[2].forEach(function(t) {
                        if ("string" == typeof t)
                            for (var e = 0; e < t.length; e++) {
                                s -= 36e5;
                                var n = t.charCodeAt(e);
                                n >= 97 ? n -= 97 : n = -(n - 65) - 1,
                                r.push({
                                    t: s,
                                    v: n / l,
                                    s: 1
                                })
                            }
                        else
                            "number" == typeof t ? (s -= 36e5,
                            r.push({
                                t: s,
                                v: t / l,
                                s: 1
                            })) : (s -= 36e5 * t[0],
                            r.push({
                                t: s,
                                v: t[1] / l,
                                s: t[0]
                            }))
                    });
                    var c = 0;
                    r.forEach(function(t) {
                        t.v += c,
                        c = t.v
                    }),
                    this.model.h[o] = r,
                    0 != t && -1 != ["t", "p", "h", "r", "d", "w"].indexOf(o) || t < a && (t = a)
                }
                this.model.maxt = t
            }
            ,
            t.prototype.init3 = function(t) {
                var e = 0;
                for (var n in this.model = {},
                t) {
                    var o = t[n];
                    if (o && 0 != o.length) {
                        var i = [];
                        o.forEach(function(t) {
                            var e = Math.round(y(t.mean, "pm25"));
                            i.push({
                                t: new Date(t.time).getTime(),
                                v: e,
                                s: 1
                            })
                        }),
                        i.sort(function(t, e) {
                            return t.t > e.t ? -1 : 1
                        }),
                        this.model[n] = i,
                        0 == e && (e = i[0].t),
                        e < i[0].t && (e = i[0].t)
                    }
                }
                e = e + 36e5 - e % 36e5,
                e = (e = (new Date).getTime()) + 36e5 - e % 36e5,
                this.model.maxt = e
            }
            ,
            t.prototype.hasData = function(t) {
                return this.model[t] && this.model[t].length > 0
            }
            ,
            t.prototype.getGraph = function(t, e, n, o) {
                var i = this.model[n]
                  , r = document.createElement("canvas");
                r.style.width = t + "px",
                r.style.height = e + "px";
                var a = window.devicePixelRatio || 1;
                t *= a,
                e *= a,
                r.width = t,
                r.height = e;
                var s = r.getContext("2d")
                  , l = this.model.maxt;
                if (0 == l)
                    throw new Error("Can not decode maxt");
                var c = Math.max(5 * a, (t - 10) / 120)
                  , p = function(e) {
                    return t - 5 - c * (l - e) / 36e5
                }
                  , d = 0
                  , u = 0;
                if (i && i.forEach(function(e, n) {
                    t - c - c * (l - e.t) / 36e5 < 0 || ((0 == n || e.v < d) && (d = e.v),
                    (0 == n || e.v > u) && (u = e.v))
                }),
                d == u)
                    return null;
                for (var h = new Date(l).getHours(), f = new Date(l - 3600 * (h % 6) * 1e3).getTime(), m = -1; m < 40; m++) {
                    if ((w = p(f - 6 * m * 3600 * 1e3)) < 0)
                        break;
                    s.beginPath(),
                    s.fillStyle = "#888888",
                    s.rect(w, o ? 8 * a : 0, 1, e),
                    s.fill()
                }
                if (i && d != u)
                    if (d < 0 && u > 0) {
                        var g = (0 - d) * (o ? e - 8 * a : e) / (u - d);
                        i.forEach(function(t, i) {
                            var r = p(t.t)
                              , l = (t.v - d) * (o ? e - 8 * a : e) / (u - d);
                            s.beginPath(),
                            s.fillStyle = Object(v.a)(t.v, "b", n),
                            t.v < 0 ? s.rect(r - t.s * c, e - l, Math.max(1, Math.min(3, t.s)) * c - .5, l - g) : s.rect(r, e - l, Math.min(3, t.s) * c - .5, l - g),
                            s.fill()
                        })
                    } else
                        i.forEach(function(t, i) {
                            var r = p(t.t)
                              , l = 5 * a + (t.v - d) * ((o ? e - 8 * a : e) - 5 * a) / (u - d);
                            s.beginPath(),
                            s.fillStyle = Object(v.a)(t.v, "b", n),
                            s.rect(r - c, e - l, Math.max(1, Math.min(3, t.s)) * c - .5, l),
                            s.fill()
                        });
                if (o)
                    for (m = 0; m < 40; m++) {
                        if ((w = p(f - 6 * m * 3600 * 1e3)) < 0)
                            break;
                        var b = 9 * a;
                        s.beginPath(),
                        s.font = "bold " + b + "px sans-serif",
                        s.fillStyle = "#000000",
                        s.textBaseline = "top",
                        s.textAlign = "center";
                        var x = new Date(f - 6 * m * 3600 * 1e3).getHours();
                        0 == x && (s.font = a > 1 ? "lighter " + (b - a) + "px sans-serif" : "normal " + b + "px sans-serif"),
                        s.lineWidth = 1,
                        s.strokeStyle = "#ffffff",
                        s.strokeText(x.toString(), w, 0),
                        s.fillText(x.toString(), w, 0)
                    }
                for (m = -1; m < 120; m++) {
                    var w = p(f - 3600 * m * 1e3);
                    s.beginPath(),
                    s.fillStyle = "rgba(0, 0, 0, 0.5)",
                    s.rect(w, e - 10, 1, 10),
                    s.fill()
                }
                return r
            }
            ,
            t
        }()
          , q = "8086" === window.location.port || "8002" === window.location.port || "8003" === window.location.port
          , C = !1;
        try {
            var z = Object.defineProperty({}, "passive", {
                get: function() {
                    C = !0
                }
            });
            window.addEventListener("testPassive", null, z),
            window.removeEventListener("testPassive", null, z)
        } catch (t) {}
        var T = !1;
        window.addEventListener("touchstart", function() {
            T = !0
        }, !!C && {
            passive: !0
        });
        var M = q ? "https://waqi.info" : "";
        function P(t, e, n) {
            var o = "aqi" != n ? ".w.png" : ".png";
            return "-" != t && "placeholder" != t && "flag-" != t.toString().substr(0, 5) && (t = Math.round(t)),
            M + "/mapicon/" + t + "." + e + o + "?2&s=" + e
        }
        var S = "https://api.waqi.info/map/"
          , j = {
            markers: S + "realtime/markers",
            species: S + "realtime/specie",
            matrix: S + "matrix",
            translate: "https://api.waqi.info/translate/",
            rtdata: "https://waqi.info/rtdata/"
        }
          , I = n(375)
          , O = n(243);
        n(345);
        var D = function() {
            function t(e) {
                var n, o, i = this;
                this.map = e,
                this.selectionSprite = new O.Graphics,
                this.pixiContainer = new O.Container,
                this.markers = [],
                this.markersAQI = new r.a,
                this.markersSpecie = new r.a(!0),
                this.shadowTexture = PIXI.Texture.fromCanvas(this.markersAQI.getShadow().canvas),
                this.textures = {};
                var a = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
                  , s = new O.ticker.Ticker;
                s.add(function(t) {
                    i.pixiLayer.redraw({
                        type: "redraw",
                        delta: t
                    })
                });
                var l = null
                  , c = 0;
                this.pixiLayer = window.L.pixiOverlay(function(r, a) {
                    var p = r.latLngToLayerPoint
                      , d = r.getContainer()
                      , u = r.getRenderer()
                      , h = function(t) {
                        var e = Math.min(.25, t);
                        return .66 * Math.pow(8 * e, .25) / t
                    }
                      , f = (r.getMap().getZoom(),
                    h(r.getScale()));
                    if (t.scale = f * r.getScale(),
                    "zoomanim" === a.type) {
                        l = 0,
                        c = e.getZoom() - a.zoom;
                        var m = h(r.getScale(a.zoom));
                        return i.markers.forEach(function(t) {
                            var e = t.sprite;
                            e.currentScale = e.scale.x,
                            e.targetScale = m * t.texture.scale
                        }),
                        void s.start()
                    }
                    if ("redraw" === a.type && (i.markers.forEach(function(t) {
                        if (!t.init) {
                            t.init = !0,
                            t.marker.obj.z = !1;
                            var e = p(t.marker.obj.g);
                            t.sprite.x = e.x,
                            t.sprite.y = e.y,
                            t.sprite.scale.set(f * t.texture.scale),
                            t.shadow.x = e.x,
                            t.shadow.y = e.y,
                            t.shadow.scale.set(f * t.texture.scale),
                            i.quadTree.add(t)
                        }
                        if (t.resize && (t.resize = !1,
                        t.sprite.scale.set(f * t.texture.scale),
                        t.shadow.scale.set(f * t.texture.scale)),
                        t.marker.obj.z) {
                            t.marker.obj.z = !1,
                            i.quadTree.remove(t);
                            e = p(t.marker.obj.g);
                            t.sprite.x = e.x,
                            t.sprite.y = e.y,
                            t.shadow.x = e.x,
                            t.shadow.y = e.y,
                            i.quadTree.add(t)
                        }
                    }),
                    a.delta)) {
                        var v = a.delta;
                        if (null !== l) {
                            var g = (l += v) / 17;
                            g > 1 && (g = 1,
                            l = null),
                            g = c >= 1 ? 1 - (1 - g) * (1 - g) : 1 - (1 - (g = 1 - (1 - g) * (1 - g))) * (1 - g),
                            i.markers.forEach(function(t, e) {
                                if (t.shown) {
                                    var n = t.sprite
                                      , o = n.currentScale + g * (n.targetScale - n.currentScale);
                                    t.sprite.scale.set(o),
                                    t.shadow.scale.set(o)
                                }
                            })
                        } else
                            i.markers.forEach(function(t, e) {
                                t.sprite.scale.set(f * t.texture.scale),
                                t.shadow.scale.set(f * t.texture.scale)
                            }),
                            s.stop()
                    }
                    if (u.render(d),
                    "add" === a.type) {
                        var b = !1
                          , x = function(t) {
                            "movestart" == t.type || "move" == t.type ? (b = !0,
                            o = null,
                            n && n.close(),
                            n = null) : "moveend" == t.type && (b = !1)
                        }
                          , w = function(t) {
                            if (!b) {
                                var r = p(t.latlng)
                                  , a = i.findMarker(r);
                                if (a && a != o)
                                    o = a,
                                    setTimeout(function() {
                                        n && n.close();
                                        (n = new R(a.marker,e)).open()
                                    }, n ? 300 : 1);
                                else if (!a) {
                                    o = null;
                                    var s = n;
                                    n && setTimeout(function() {
                                        s.close()
                                    }, 100),
                                    e.dragging.enable(),
                                    n = null
                                }
                            }
                        };
                        e.on("click", w, i),
                        e.on("mousemove", w, i),
                        e.on("movestart", x, i),
                        e.on("moveend", x, i)
                    }
                }, this.pixiContainer, {
                    doubleBuffering: a,
                    destroyInteractionManager: !0
                }),
                this.pixiLayer.addTo(e),
                e.on("zoomanim", this.pixiLayer.redraw, this.pixiLayer),
                this.quadTree = Object(I.a)().x(function(t) {
                    return t.sprite.x
                }).y(function(t) {
                    return t.sprite.y
                })
            }
            return t.prototype.add = function(t) {
                var e = this;
                t.show = function() {
                    !0
                }
                ,
                this.icon(t.obj).then(function(n) {
                    var o = new O.Sprite(e.shadowTexture)
                      , i = new O.Sprite(n.texture)
                      , r = {
                        sprite: i,
                        marker: t,
                        shadow: o,
                        shown: !1,
                        init: !1,
                        texture: n,
                        resize: !1
                    };
                    o.anchor.set(.4, .9),
                    i.anchor.set(.5, .9),
                    i.obj = r,
                    e.markers.push(r),
                    t.show = function() {
                        r.shown || (e.pixiContainer.addChild(o),
                        e.pixiContainer.addChild(i),
                        r.shown = !0,
                        e.redraw())
                    }
                    ,
                    t.hide = function() {
                        return r.shown && (e.pixiContainer.removeChild(i),
                        e.pixiContainer.removeChild(o),
                        r.shown = !1,
                        e.redraw()),
                        !1
                    }
                    ,
                    t.updateAqi = function(n) {
                        e.icon(t.obj, n).then(function(t) {
                            i.texture = t.texture,
                            r.texture = t,
                            r.resize = !0,
                            e.redraw()
                        })
                    }
                    ,
                    t.updateZoom = function(t) {
                        r.resize = !0
                    }
                })
            }
            ,
            t.prototype.redraw = function() {
                var t = this;
                clearTimeout(this.redrawTimeout),
                this.redrawTimeout = setTimeout(function() {
                    q && t.pixiContainer.removeChild(t.selectionSprite);
                    var e = [];
                    t.pixiContainer.children.forEach(function(t) {
                        return e.push(t)
                    }),
                    e.sort(function(t, e) {
                        var n = t.obj
                          , o = e.obj;
                        return n ? o ? n.indi || o.indi ? n.indi && !o.indi ? -1 : o.indi && !n.indi ? 1 : 0 : n.marker.compareTo(o.marker) : 1 : -1
                    }),
                    t.pixiContainer.children = e,
                    q && t.pixiContainer.addChild(t.selectionSprite),
                    t.pixiLayer.redraw({
                        type: "redraw"
                    })
                }, 50)
            }
            ,
            t.prototype.icon = function(t, e) {
                void 0 === e && (e = "aqi");
                var n = t.a
                  , o = "placeholder" === n;
                if (o) {
                    var i = t.x.toString().substr(0, 2).toLowerCase();
                    n = "flag-" + i
                }
                isNaN(parseFloat(n)) || (n = Math.floor(n));
                var r = n + ("aqi" == e ? "A" : "B");
                if (!this.textures[r])
                    if (o)
                        this.textures[r] = new Promise(function(t, o) {
                            var i = new O.loaders.Loader
                              , r = "marker.15." + n;
                            i.add(r, P(n, 15, e)),
                            i.load(function(e, n) {
                                t({
                                    texture: n[r].texture,
                                    scale: 1
                                })
                            })
                        }
                        );
                    else if ("aqi" == e) {
                        var a = this.markersAQI.get(n)
                          , s = "-" === n ? 1 / 3 : 1 / 1.66
                          , l = PIXI.Texture.fromCanvas(a.canvas);
                        this.textures[r] = Promise.resolve({
                            texture: l,
                            scale: s
                        })
                    } else {
                        a = this.markersSpecie.get(n),
                        s = "-" === n ? 1 / 3 : 1 / 1.66,
                        l = PIXI.Texture.fromCanvas(a.canvas);
                        this.textures[r] = Promise.resolve({
                            texture: l,
                            scale: s
                        })
                    }
                return this.textures[r]
            }
            ,
            t.prototype.findMarker = function(t) {
                var e = []
                  , n = t.x
                  , o = t.y;
                if (this.markers.length) {
                    var i = this.markers[0].sprite.scale.x / this.markers[0].texture.scale * 1.2
                      , r = n - 25 * i
                      , a = n + 25 * i
                      , s = o + 0 * i
                      , l = o + 60 * i;
                    return this.quadTree.visit(function(t, n, o, i, c) {
                        if (!t.length)
                            do {
                                var p = t.data
                                  , d = p.sprite
                                  , u = d.x
                                  , h = d.y;
                                p.shown && u >= r && u < a && h >= s && h <= l && (e.push(p),
                                !0)
                            } while (t = t.next);return n >= a || o >= l || i < r || c < s
                    }),
                    e.length ? (e.sort(function(t, e) {
                        return e.marker.compareTo(t.marker)
                    }),
                    e[0]) : null
                }
            }
            ,
            t.scale = 1,
            t
        }()
          , E = n(2)
          , N = (n(346),
        n(348),
        n(350))
          , Z = n(43)
          , A = (n(6).default.get("i18n"),
        function() {
            function t() {}
            return t.srvLang = function() {
                var t = window.waqi18n
                  , e = t ? t.lang : "en";
                return "en" == e ? "" : ["es", "pl", "fr", "de", "ru", "cn", "tw", "ko"].indexOf(e) >= 0 ? ("tw" == e && (e = "hk"),
                "ko" == e && (e = "kr"),
                "ja" == e && (e = "jp"),
                e + "/") : "#/w/" + e
            }
            ,
            t.get = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                var o = window.waqi18n;
                if (o && o.texts[t]) {
                    for (var i = o.texts[t], r = 0; r < e.length; r++)
                        i = (i = i.replace("%" + (r + 1), e[r])).replace("_" + (r + 1) + "_", e[r]);
                    return i
                }
                return "!" + t
            }
            ,
            t.momentAsync = function() {
                var t = window;
                return t.moment ? Promise.resolve(t.moment) : Promise.all([n.e(4), n.e(2)]).then(n.t.bind(null, 0, 7)).then(function(e) {
                    e = e.default,
                    t.moment = e;
                    var n = t.waqi18n
                      , o = n ? n.lang : "en";
                    return "cn" == o && (o = "zh-CN"),
                    "tw" == o && (o = "zh-Tw"),
                    e.locale(o),
                    e
                })
            }
            ,
            t.init = function() {
                try {
                    t.cooperation()
                } catch (t) {
                    console.log("...", t)
                }
                try {
                    t.icons()
                } catch (t) {
                    console.log("...", t)
                }
                try {
                    t.legend()
                } catch (t) {
                    console.log("...", t)
                }
                fetch(j.translate + "available").then(function(t) {
                    return t.json()
                }).then(function(e) {
                    if ("ok" == e.status && e.data) {
                        var n = window.waqi18n;
                        if (n) {
                            var o = e.data.langs.filter(function(t) {
                                return t.Id != n.lang
                            });
                            if (0 != o.length) {
                                var i = {}
                                  , r = Z.select("#header-info-lang")
                                  , a = Z.select("#body-info-lang").show().c("div").html("<b>" + t.get("localization-title") + "</b>: ")
                                  , s = 0;
                                o.forEach(function(t) {
                                    var e = t.Id;
                                    if (!i[e]) {
                                        i[e] = 1;
                                        var n = "/";
                                        if ("en" != e && (n += q ? "index." + e + ".html" : e + "/"),
                                        0 == s++) {
                                            var o, l = t.Local + (t.Native ? " - " + t.Native : ""), c = Z.select(document.body).c("div", "popper small").hide();
                                            c.c("div").html(l);
                                            var p = r.append("img").attr("src", "/images/flags/" + t.flag + ".svg").attr("alt", l).style("height", "25px").style("margin", "2px").on("click", function() {
                                                var t = n
                                                  , e = window.location.hash;
                                                "#/c/" == e.substr(0, 4) && (t += e),
                                                window.location.assign(t)
                                            }).on("mouseover", function() {
                                                o = new N.a(p.node(),c.node(),{
                                                    placement: "left"
                                                }),
                                                c.show()
                                            }).on("mouseout", function() {
                                                o && o.destroy(),
                                                c.hide(),
                                                o = null
                                            })
                                        }
                                        var d = a.c("a", "country-link").style("cursor", "pointer").on("click", function() {
                                            var t = n
                                              , e = window.location.hash;
                                            "#/c/" == e.substr(0, 4) && (t += e),
                                            window.location.assign(t)
                                        });
                                        d.append("img", "country-flag").attr("src", "/images/flags/" + t.flag + ".svg").style("height", "25px").style("margin", "2px").style("vertical-align", "middle").attr("alt", name),
                                        d.c("div", {
                                            display: "inline-block",
                                            verticalAlign: "middle"
                                        }).html("<div class='native'>" + t.Native + "</div><div class='local'>" + t.Local + "</div>")
                                    }
                                })
                            }
                        }
                    }
                }).catch(function(t) {
                    E.a.error("Failed to load available langs", t)
                })
            }
            ,
            t.icons = function() {}
            ,
            t.legend = function() {
                var e = {
                    "aqi-label-1": ["0-50"],
                    "aqi-label-2": ["50-100"],
                    "aqi-label-3": ["100-150"],
                    "aqi-label-4": ["150-200"],
                    "aqi-label-5": ["200-300"],
                    "aqi-label-6": ["300-500"]
                }
                  , n = 1
                  , o = function(o) {
                    var i = document.getElementsByClassName(o)[0]
                      , r = e[o][0]
                      , a = t.get("aqi-" + r).replace(/<br>/g, " ").replace(/<small>/g, "").replace(/<\/small>/g, "");
                    a = "<div class='tooltip-header aqi-label-" + n + "'>" + a + "</div>" + ("<img src='/images/emoticons/" + o + ".svg' style='width:42px;height:42px'>") + "<p>" + t.get("scale-implication-" + r) + "</p>",
                    i.setAttribute("data-balloon", a),
                    i.setAttribute("data-balloon-pos", "up");
                    var s, l = Z.select(document.body).c("div", "popper").hide();
                    l.c("div").html(a),
                    Z.select(i).on("mouseover", function() {
                        s = new N.a(i,l.node(),{
                            placement: "top"
                        }),
                        l.show()
                    }).on("mouseout", function() {
                        s && s.destroy(),
                        l.hide(),
                        s = null
                    }),
                    l.on("click", function() {
                        Z.event.stopPropagation(),
                        s && s.destroy(),
                        l.hide(),
                        s = null
                    }),
                    n++
                };
                for (var i in e)
                    o(i)
            }
            ,
            t.cooperation = function() {
                var t = window;
                fetch(j.translate + "check?page=waqi").then(function(t) {
                    return t.json()
                }).then(function(e) {
                    if ("ok" == e.status && e.data && e.data.query) {
                        var n = Z.select("#waqi-translate-root").c("center")
                          , o = e.data.flag;
                        o && (o = "<img inline src='" + o + "'>");
                        e.data.query.btnok;
                        var i = "<div id='i18n-help'>" + (o + " " + e.data.query.spoken + " " + o) + "</div>\n\t\t\t\t\t<div id='i18n-divider'></div>\n\t\t\t\t\t<div>" + e.data.query.help + "</div>\n\t\t\t\t\t<div id='i18n-more'>" + e.data.query.more + "</div>\n\t\t\t\t\t";
                        n.c("div", "i18n-coop-btn").html(i).on("click", function() {
                            t.i18nGetTranslatedCountry = function() {
                                return e.data.lang.Local
                            }
                            ,
                            t.i18nGetTranslatedLang = function() {
                                return e.data.lang.Id
                            }
                            ;
                            var n = window.open(e.data.url, "i18n");
                            n ? n.focus() : location.assign(e.data.url)
                        })
                    }
                }).catch(function(t) {
                    E.a.error("Failed to load translation checker", t)
                })
            }
            ,
            t
        }())
          , U = (n(351),
        n(43));
        n(6).default.get("tooltip");
        function B(t, e) {
            try {
                var n = document.getElementsByClassName("leaflet-map-pane")[0].style.transform.match(/translate3d\((-?[0-9\.]+)px, *(-?[0-9\.]+)px, *(-?[0-9\.]+)px\)/)
                  , o = n && 4 == n.length ? 1 * n[2] : 0;
                if (4 != (n = t._contentNode.style.transform.match(/translate3d\((-?[0-9\.]+)px, *(-?[0-9\.]+)px, *(-?[0-9\.]+)px\)/)).length)
                    return;
                var i = 1 * n[2]
                  , r = e._container.clientHeight - 42
                  , a = t._contentNode.clientHeight;
                if (i = Math.min(i, r - a - o),
                (i = Math.max(i, 1 - o)) != n[2]) {
                    var s = "translate3d(" + n[1] + "px, " + i + "px, " + n[3] + "px)";
                    t._contentNode.style.transform = s
                }
            } catch (t) {
                console.error("tooltip", t)
            }
        }
        var R = function() {
            function t(t, e) {
                this.marker = t,
                this.map = e
            }
            return t.prototype.open = function() {
                var t = this;
                this.close();
                var e, n = this.marker.obj, o = Object(v.d)(n.a), i = this.map.latLngToLayerPoint(n.g), r = 3 * D.scale, a = [this.map.layerPointToLatLng([i.x - 10 * r, i.y - 21 * r]), this.map.layerPointToLatLng([i.x + 10 * r, i.y - 21 * r]), this.map.layerPointToLatLng([i.x + 10 * r, i.y + 3 * r]), this.map.layerPointToLatLng([i.x - 10 * r, i.y + 3 * r])], s = this.tooltip = L.polygon(a, {
                    color: o,
                    stroke: !0,
                    weight: T ? 3 : 1,
                    fill: !1
                });
                this.content(T, function() {
                    t.tooltip == s && e && B(e, t.map)
                }).then(function(n) {
                    var o = n.label;
                    s.on("add", function() {
                        if (t.tooltip == s) {
                            var n = e = L.tooltip({
                                permanent: !0,
                                className: T ? "aqi-marker-tooltip-mobile" : "aqi-marker-tooltip-desktop",
                                interactive: !0
                            });
                            n.setContent(o),
                            s.bindTooltip(n).openTooltip(),
                            B(n, t.map);
                            var i = Date.now();
                            setTimeout(function() {
                                var e = L.stamp(n._container);
                                s.on("click", function(n) {
                                    if (n.originalEvent.preventDefault(),
                                    !(Date.now() - i < 500)) {
                                        for (var o = !1, r = n.originalEvent.target; r && !(o = o || L.stamp(r) === e); )
                                            r = r.parentNode;
                                        !T && o || t.redirect()
                                    }
                                })
                            }, 100)
                        } else
                            s.remove()
                    }),
                    s.addTo(t.map)
                })
            }
            ,
            t.prototype.redirect = function() {
                this.marker.obj.open()
            }
            ,
            t.prototype.isOpened = function() {
                return null != this.tooltip
            }
            ,
            t.prototype.close = function() {
                var t = this.tooltip;
                this.tooltip = null,
                clearTimeout(this.obsLoading),
                this.obsLoading = null,
                this.histoViewer && (this.histoViewer.stop(),
                this.histoViewer = null),
                t && setTimeout(function() {
                    t.unbindPopup(),
                    t.closeTooltip(),
                    t.remove()
                }, 10)
            }
            ,
            t.prototype.content = function(t, e) {
                return void 0 === t && (t = !1),
                void 0 === e && (e = null),
                i.b(this, void 0, void 0, function() {
                    var o, r, a, s, l, c, p, d, u, h, f, g, b, w, y, k, q, C, z, T, L, M, P = this;
                    return i.c(this, function(S) {
                        switch (S.label) {
                        case 0:
                            return o = this.marker.obj,
                            r = o.a,
                            a = o.x,
                            s = o.n,
                            l = "",
                            c = "",
                            p = "label-aqistation-title",
                            d = function(t) {
                                var e = ""
                                  , n = 0;
                                return t >= 0 && t < 50 ? (e = "0-50",
                                n = 1) : t >= 50 && t < 100 ? (e = "50-100",
                                n = 2) : t >= 100 && t < 150 ? (e = "100-150",
                                n = 3) : t >= 150 && t < 200 ? (e = "150-200",
                                n = 4) : t >= 200 && t < 300 ? (e = "200-300",
                                n = 5) : t >= 300 && (e = "300-500",
                                n = 6),
                                [e, n]
                            }
                            ,
                            u = function(t) {
                                var e = d(t);
                                e[0];
                                return "/images/emoticons/aqi-label-" + e[1] + ".svg"
                            }
                            ,
                            "placeholder" == r ? [3, 3] : ("-" != r ? (h = d(r),
                            f = h[0],
                            g = h[1],
                            "" != f ? (f = A.get("aqi-" + f).replace("<small>", "").replace("</small>", "").replace("<br>", " "),
                            b = Object(v.a)(r, "f", "aqi"),
                            w = Object(v.a)(r, "b", "aqi"),
                            y = Object(v.a)(r, "s", "aqi"),
                            c = "<table style='" + (";color:" + b + ";background-color:" + w + ";text-shadow: 1px 0px 1px " + y + ";") + "'><tr><td>" + ("<img src='/images/emoticons/aqi-label-" + g + ".svg' style='width:42px;height:42px'>") + "</td><td>" + (r + " - " + f) + "</td></tr></table>") : c += A.get("tooltip-aqi") + ": <b>" + Object(v.b)(r) + "</b><br>") : c += A.get("tooltip-nodata") + "<br>",
                            o.u ? (k = o.t,
                            q = o.u + k,
                            "<span class='label-info-small'>" + A.get("tooltip-updated", "<b>" + q + "</b>") + "</span>",
                            [4, A.momentAsync()]) : [3, 2]);
                        case 1:
                            C = S.sent(),
                            (z = C(q).utcOffset(k)).isValid() && ("-" == r ? l = "<div class='label-info-small'>" + A.get("tooltip-updated", "<b>" + z.fromNow() + "</b>") + "</div> " : C().diff(z) > 432e5 ? (l = "<div class='label-info-small'>" + A.get("tooltip-updated", "<b>" + z.format("LL") + "</b>") + "</div>",
                            l += z.format("h:mm a") + " " + k + "<br>",
                            l += "<div class='label-info-small'>(" + z.fromNow() + ")</div>") : (l = "<div class='label-info-small'>" + A.get("tooltip-updated", "<b>" + z.fromNow() + "</b>") + "</div>",
                            l += "<div class='label-info-xsmall'>(" + z.format("lll") + " " + k + ")</div>")),
                            S.label = 2;
                        case 2:
                            return [3, 4];
                        case 3:
                            T = o.x.split(":")[0].toLowerCase(),
                            c = "<img src='/images/flags/" + T + ".svg' style='width:150px'>",
                            p = "label-placeholder-title",
                            S.label = 4;
                        case 4:
                            return L = "<div class='" + p + "'>" + s + "</div>",
                            "" != c && (L += "<div style=\"border-top: 1px solid #888888;margin: 0px 0px 5px 0;\"></div><center class='label-aqistation-inner' style='white-space: normal;'>" + c + "</center>"),
                            L += '<div style="border-top: 1px solid #888888;margin: 5px 0px 5px 0;"></div>',
                            L += "<center>" + l + "</center>",
                            L += "<div id='graph-" + a + "'></div>",
                            L += "<div id='forecast-" + a + "'></div>",
                            o.historic && (L += "<div id='historic-" + a + "'><div style=\"border-top: 1px solid #888888;margin: 5px 0px 5px 0;\"></div><div class='label-info-small'><center>loading</center></div></div>",
                            this.histoViewer = x.create(o.x, "historic-" + o.x, t).specie(this.marker.specie).start(o.historic()).onUpdated(function() {
                                e && setTimeout(function() {
                                    return e()
                                }, 1)
                            })),
                            o.open && ((M = n(353)).default && (M = M.default),
                            t && (M = ""),
                            L += '<div style="border-top: 1px solid #888888;margin: 5px 0px 5px 0;"></div>',
                            L += "<center><div class='more-info'>" + M + "<span style='font-size:80%'>" + A.get("tooltip-more") + "</span>" + M + "</div></center>"),
                            L += "<div id='source-" + a + "'></div>",
                            "placeholder" != r && o.obs && (this.obsLoading = setTimeout(function() {
                                o.obs().subscribe({
                                    next: function(n) {
                                        return i.b(P, void 0, void 0, function() {
                                            var o, r, s, l, c, p, d, h, f, g, b, x;
                                            return i.c(this, function(i) {
                                                switch (i.label) {
                                                case 0:
                                                    return i.trys.push([0, 3, , 4]),
                                                    o = U.select("#graph-" + a).html(""),
                                                    r = new _(n),
                                                    s = !0,
                                                    l = o.append("center").append("table"),
                                                    c = 0,
                                                    [{
                                                        id: "pm25",
                                                        n: "Small particles",
                                                        p: "PM<sub>2.5</sub>"
                                                    }, {
                                                        id: "pm10",
                                                        n: "Large particles",
                                                        p: "PM<sub>10</sub>"
                                                    }, {
                                                        id: "o3",
                                                        p: "O<sub>3</sub>",
                                                        n: "Ozone"
                                                    }, {
                                                        id: "no2",
                                                        n: "Nitrogen Dioxyde",
                                                        p: "NO<sub>2</sub>"
                                                    }, {
                                                        id: "so2",
                                                        n: "Sulfur Dioxyde",
                                                        p: "SO<sub>2</sub>"
                                                    }, {
                                                        id: "co",
                                                        n: "Carbon Monxyde",
                                                        p: "CO"
                                                    }, {
                                                        id: "aqi",
                                                        p: "AQI",
                                                        n: "Pollution Index"
                                                    }].forEach(function(e) {
                                                        if (!(t && c >= 3) && r.hasData(e.id)) {
                                                            var n = r.getGraph(t ? 150 : 188, 20 + (s ? 10 : 0), e.id, s);
                                                            if (n) {
                                                                var o = l.append("tr");
                                                                o.append("td").append("small").style("font-familly", "'Arial Narrow'").html(e.p);
                                                                var i = o.append("td").node();
                                                                i && i.appendChild(n),
                                                                s = !1,
                                                                c++
                                                            }
                                                        }
                                                    }),
                                                    n.forecast && n.forecast.daily ? [4, A.momentAsync()] : [3, 2];
                                                case 1:
                                                    p = i.sent(),
                                                    (o = U.select("#forecast-" + a).html("")).append("div").style("border-top", "1px solid #888888").style("margin", "5px 0px 5px 0"),
                                                    d = Date.now() - 864e5,
                                                    h = (h = n.forecast.daily.pm25.filter(function(t) {
                                                        return new Date(t.day).getTime() > d
                                                    })).slice(0, t ? 5 : 7),
                                                    f = o.c("center").c("table", "forecast-daily"),
                                                    g = f.c("tr", "day"),
                                                    h.forEach(function(t) {
                                                        var e = p(t.day);
                                                        g.c("td").html("<small>" + e.format("Do") + "<small>")
                                                    }),
                                                    g = f.c("tr", "emoticon"),
                                                    h.forEach(function(t) {
                                                        p(t.day);
                                                        var e = "<img src='" + u(t.avg) + "' style='width:22px;height:22px;margin-top: 2px;padding: 0 2px;'>";
                                                        g.c("td").c("div").style("margin", "1px").style("padding", "3px").style("color", function(e) {
                                                            return Object(v.a)(t.avg, "f", "aqi")
                                                        }).style("background-color", function(e) {
                                                            return m(t.avg)
                                                        }).style("text-shadowx", function(e) {
                                                            return "1px 0px 1px " + Object(v.a)(t.avg, "s", "aqi")
                                                        }).html(e)
                                                    }),
                                                    g = f.c("tr", "aqi"),
                                                    h.forEach(function(t) {
                                                        g.c("td").html(t.min + "/" + t.max)
                                                    }),
                                                    i.label = 2;
                                                case 2:
                                                    return n.attributions && (o = U.select("#source-" + a).html(""),
                                                    (b = n.attributions.filter(function(t) {
                                                        return t.url.indexOf("wmo.int") < 0
                                                    }).filter(function(t) {
                                                        return t.url.indexOf("waqi.info") < 0
                                                    })).length > 0 && (o.append("div").style("border-top", "1px solid #888888").style("margin", "5px 0px 5px 0"),
                                                    o.append("center").append("small").style("white-space", "normal").style("line-height", 1.1).style("color", "#888").html("Source: " + b.map(function(t) {
                                                        return t.name
                                                    }).join(" & ")))),
                                                    e && setTimeout(function() {
                                                        return e()
                                                    }, 1),
                                                    [3, 4];
                                                case 3:
                                                    return x = i.sent(),
                                                    console.error("oops", x),
                                                    [3, 4];
                                                case 4:
                                                    return [2]
                                                }
                                            })
                                        })
                                    }
                                })
                            }, 50)),
                            [2, Promise.resolve({
                                label: L
                            })]
                        }
                    })
                })
            }
            ,
            t.prototype.popupContent = function() {
                var t = "marker-info-" + (new Date).getTime() + "-" + Math.random();
                return function(t) {
                    var e = a + "api/mapib/@cid/info.json";
                    return isNaN(t) ? u(e = e.replace("@cid", "!" + t.replace("/", ",").toLowerCase()), t) : u(e.replace("cid", function(t, e) {
                        return (1e15 + t + "").slice(-e)
                    }(t, 8)), t)
                }(this.marker.obj.x).then(function(e) {
                    var n = document.getElementById(t)
                      , o = e.content;
                    o = o.replace(/body\s*{[^}]*}/, ""),
                    n && (n.innerHTML = o)
                }).catch(function(e) {
                    var n = document.getElementById(t);
                    n && (n.innerHTML = "<center><br><br>Oops.. something went wrong...</center></div>")
                }),
                "<div style='height:300px;width:300px;overflow:scroll;' id='" + t + "'><center><br><br>Loading...</center></div>"
            }
            ,
            t
        }()
          , F = n(43)
          , H = window.L;
        function W(t) {
            var e = t.a || t;
            return !isNaN(parseFloat(e)) && isFinite(e) || (e = 0),
            e = e > 0 ? e : 1,
            Math.round(e)
        }
        /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
        window.devicePixelRatio;
        var X = function(t, e, n) {
            return function(t, e, n) {
                var o;
                if (e < 6) {
                    var i = .18 + e / 7 * .5
                      , r = 49
                      , a = 64;
                    o = {
                        url: P(t, 15, n),
                        size: [r * i, a * i],
                        anchor: [r * i / 2, 95 * a * i / 107]
                    }
                } else
                    i = 64 / 107 * (.25 + e / 7 * .5),
                    r = 83,
                    a = 107,
                    o = {
                        url: P(t, 30, n),
                        size: [r * i, a * i],
                        anchor: [r * i / 2, 95 * a * i / 107]
                    };
                return H.icon({
                    iconUrl: o.url,
                    iconSize: o.size,
                    iconAnchor: o.anchor
                })
            }(t, e, n)
        }
          , G = function() {
            function t(t, e) {
                this.specie = "aqi",
                this.marker = null,
                this.shown = !1,
                this.tooltip = null,
                this.obj = t,
                this.map = e
            }
            return t.prototype.compareTo = function(t) {
                return function(t, e) {
                    return "placeholder" == t.a ? -1 : "placeholder" == e.a ? 1 : "-" == t.a ? -1 : "-" == e.a ? 1 : t.t && !e.t ? 1 : !t.t && e.t ? -1 : t.a == e.a ? t.x > e.x ? 1 : -1 : 1 * t.a > 1 * e.a ? 1 : -1
                }(this.obj, t.obj)
            }
            ,
            t.prototype.getSize = function(t) {
                return t = t < 5 ? 2 : t >= 8 ? 8 : 5
            }
            ,
            t.prototype.create = function() {
                var e = this
                  , n = this.obj
                  , o = this.getSize(this.map.getZoom());
                this.currentZoom = o;
                var i = this.marker = H.marker(n.g, {
                    zIndexOffset: 1e4 + W(n),
                    icon: X(n.a, o, this.specie)
                });
                this.tooltip = new R(this,this.map);
                i.on("mouseover", function(n) {
                    T || (t.activeTooltip && t.activeTooltip.close(),
                    t.activeTooltip = e.tooltip,
                    E.a.view("marker", e.obj.n),
                    e.tooltip.open())
                }),
                i.on("mouseout", function(t) {
                    T || e.tooltip.close()
                }),
                i.on("click", function() {
                    var n = e.tooltip.isOpened();
                    T || n ? (e.tooltip.close(),
                    e.onClick()) : (t.activeTooltip && t.activeTooltip.close(),
                    t.activeTooltip = e.tooltip,
                    e.tooltip.open())
                })
            }
            ,
            t.prototype.onClick = function() {
                var t = this;
                if (T || "placeholder" == this.obj.a)
                    if ("placeholder" != this.obj.a) {
                        E.a.view("marker", this.obj.n);
                        var e = "marker-info-" + (new Date).getTime() + "-" + Math.floor(1e5 * Math.random())
                          , n = "<div style='min-width:180px;' id='" + e + "'><div style='text-align:center;padding:20px;'>Loading...</div></div>";
                        this.marker.unbindPopup().bindPopup(n, {
                            closeOnClick: !0
                        }).openPopup(),
                        setTimeout(function() {
                            t.tooltip.content().then(function(n) {
                                F.select("#" + e).html(n).on("click", function() {
                                    return t.tooltip.redirect()
                                })
                            })
                        }, 20)
                    } else {
                        E.a.view("marker", this.obj.n);
                        var o = "<div class='infoBubble'>" + this.tooltip.popupContent() + "</div>";
                        this.marker.unbindPopup().bindPopup(o, {
                            closeOnClick: !0
                        }).openPopup()
                    }
                else
                    this.tooltip.redirect()
            }
            ,
            t.prototype.updateAqi = function(t) {
                void 0 === t && (t = "aqi");
                var e = this.obj.a;
                this.marker && (this.marker.setZIndexOffset(1e4 + W(e)),
                this.marker.setIcon(X(e, this.currentZoom, this.specie)),
                this.needsUpdate = !1)
            }
            ,
            t.prototype.updateZoom = function(t) {
                (t = this.getSize(t)) != this.currentZoom && (this.currentZoom = t,
                this.marker && this.marker.setIcon(X(this.obj.a, t, this.specie)))
            }
            ,
            t.prototype.show = function() {
                this.marker || this.create(),
                this.shown || this.marker.addTo(this.map),
                this.needsUpdate && this.updateAqi(),
                this.shown = !0
            }
            ,
            t.prototype.hide = function() {
                return !!this.shown && (this.tooltip.isOpened() && this.tooltip.close(),
                this.marker.remove(),
                this.shown = !1,
                !0)
            }
            ,
            t.activeTooltip = null,
            t
        }()
          , V = n(6).default.get("worker", "yellow;color:black");
        var J = {
            sliced: function(t, e, n) {
                return new Promise(function(o, i) {
                    var r = Date.now()
                      , a = t.length
                      , s = 0;
                    setTimeout(function() {
                        return function i(l, c) {
                            try {
                                for (var p = Date.now(); l < a && Date.now() < p + 500; )
                                    e(t[l++]) && s++;
                                l < a ? setTimeout(function() {
                                    return i(l, c + 1)
                                }, 1) : n && (V.debug(n, "done in", Date.now() - r, "ms [n:", s, "/c:", c, "]"),
                                o())
                            } catch (t) {
                                E.a.error("Worker failed: " + n, t),
                                o()
                            }
                        }(0, 0)
                    }, 1)
                }
                )
            }
        }
          , Y = n(6).default.get("marker-cluster", "lightgreen;color:black");
        n(43);
        function Q(t, e, n, o, i, r, a) {
            var s = (e + n) / 2
              , l = function(t, e, n, o) {
                try {
                    var i = Math.ceil(e / o)
                      , r = Math.ceil(n / o)
                      , a = new Int32Array(i * r)
                      , s = 0;
                    return t.forEach(function(t) {
                        var e = t.point
                          , n = e[0]
                          , r = e[1]
                          , l = Math.floor(n / o) + Math.floor(r / o) * i;
                        a[l] || (a[l] = 1,
                        s++)
                    }),
                    s
                } catch (e) {
                    var l = 0
                      , c = {};
                    return t.forEach(function(t) {
                        var e = t.point
                          , n = e[0]
                          , i = e[1]
                          , r = "X" + Math.floor(n / o) + "Y" + Math.floor(i / o);
                        c[r] || (c[r] = 1,
                        l++)
                    }),
                    l
                }
            }(t, o, i, s);
            return a <= 0 || l == r ? {
                scale: s,
                iteration: a
            } : l > r ? Q(t, s, n, o, i, r, a - 1) : Q(t, e, s, o, i, r, a - 1)
        }
        var K = function() {
            function t(t, e) {
                this.map = t,
                this.usePixi = e,
                this.timeout = null
            }
            return t.prototype.clusterize = function(t, e) {
                var n = this;
                this.timeout && clearTimeout(this.timeout),
                this.timeout = setTimeout(function() {
                    n.timeout = null;
                    try {
                        var o = E.a.metric("clusterize", "compute");
                        n.process(t, e),
                        o.snap()
                    } catch (t) {
                        E.a.error("Failed to clusterize", t)
                    }
                }, 200)
            }
            ,
            t.prototype.process = function(t, e) {
                var n = this
                  , o = Date.now();
                Y.start().debug("Clusterzing..");
                var i = this.map
                  , r = i.getZoom();
                Math.pow(2, i.getZoom());
                if (!i.getBounds())
                    return null;
                window.devicePixelRatio;
                var a = document.getElementById("map_canvas")
                  , s = a.clientHeight
                  , l = a.clientWidth
                  , c = s > l ? 320 : 800
                  , p = Math.round(320 + (l - 320) / 2);
                c = Math.min(Math.max(p, 320), 800),
                c = Math.round(c / 1.8),
                this.usePixi && (c = 800);
                var d = i.latLngToContainerPoint([0, 180]).x - i.latLngToContainerPoint([0, -180]).x
                  , u = [];
                t.forEach(function(t) {
                    var o = t.obj
                      , a = i.latLngToContainerPoint(o.g)
                      , c = a.x
                      , p = a.y;
                    n.usePixi && l < d && (c > l && c - d > 0 && (o.z = !0,
                    o.g[1] -= 360,
                    c -= d),
                    c < 0 && c + d < l && (o.z = !0,
                    o.g[1] += 360,
                    c += d));
                    var h = c < 0 || p < 0 || c > l || p > s;
                    if ("nd" == o.a && (h = !0),
                    "placeholder" == o.a && "aqi" != e && (h = !0),
                    "-" == o.a && r < 7) {
                        var f = o.n;
                        f.indexOf("US Embassy") < 0 && f.indexOf("US Consulate") < 0 && (h = !0)
                    }
                    h ? t.hide() : (t.point = [c, p],
                    u.push(t))
                }),
                Y.debug("There are", u.length, "possible stations on the map"),
                u.sort(function(t, e) {
                    return e.compareTo(t)
                });
                var h = (new Date).getTime()
                  , f = Q(u, 5, 100, l, s, c, 10)
                  , m = f.scale
                  , v = f.iteration;
                Y.debug("Scale to ", m, "in", Date.now() - h, "[@", 10 - v, "iter]");
                var g = {}
                  , b = []
                  , x = 0
                  , w = 0;
                u.forEach(function(t) {
                    var e = t.point
                      , n = e[0]
                      , o = e[1]
                      , i = "x" + Math.floor(n / m) + "y" + Math.floor(o / m);
                    g[i] ? (t.hide() && w++,
                    x++) : (b.push(t),
                    g[i] = 1)
                }),
                u = b,
                Y.debug("There are", w, "stations newly hidden out of", x, "and", u.length, "visible"),
                J.sliced(u, function(t) {
                    return t.show()
                }, "Show " + u.length + " markers");
                var y = (new Date).getTime() - o
                  , k = "From " + t.length + " to " + u.length + " stations/" + c + " [time:" + y + "]";
                Y.debug(k),
                Y.stop()
            }
            ,
            t
        }()
          , $ = n(6).default.get("map-list")
          , tt = function() {
            function t(t, e) {
                void 0 === e && (e = !0),
                this.list = [],
                this.id2m = {},
                this.zoomRequest = 0,
                this.specie = "aqi",
                e && (this.pixi = new D(t)),
                this.clusterizer = new K(t,e),
                this.map = t
            }
            return t.prototype.add = function(t) {
                var e = new G(t,this.map);
                return this.list.push(e),
                this.id2m[t.x] = e,
                e
            }
            ,
            t.prototype.updateZoom = function(t) {
                var e = this;
                if (t != this.zoom) {
                    var n = function(t) {
                        e.zoomRequest = t,
                        J.sliced(e.list, function(e) {
                            return e.updateZoom(t)
                        }, "Update Zoom").then(function() {
                            e.zoomRequest != t ? n(e.zoomRequest) : e.zoomRequest = 0
                        })
                    };
                    this.zoomRequest ? this.zoomRequest = t : n(t)
                }
            }
            ,
            t.prototype.contains = function(t) {
                var e = t.x;
                if (e in this.id2m) {
                    var n = this.id2m[e]
                      , o = t.a != n.obj.a;
                    return n.obj = t,
                    o && n.updateAqi(this.specie),
                    !0
                }
                return !1
            }
            ,
            t.prototype.setLevel1 = function(t) {
                this.insert(t),
                this.clusterize("insert data")
            }
            ,
            t.prototype.clusterize = function(t) {
                if (this.clusterizer)
                    return this.clusterizer.clusterize(this.list, this.specie)
            }
            ,
            t.prototype.refresh = function(t) {
                var e = 0;
                for (var n in this.id2m) {
                    var o = this.id2m[n];
                    if (n in t) {
                        var i = t[n]
                          , r = o.obj.a != i.a;
                        r && (e += 1),
                        o.needsUpdate = r,
                        o.obj.a = i.a,
                        o.obj.u = i.u
                    }
                }
                $.debug("There are ", e, " updated markers"),
                e && this.clusterize("refresh")
            }
            ,
            t.prototype.setSpecie = function(t, e) {
                for (var n in this.specie = t,
                this.id2m) {
                    var o = this.id2m[n];
                    if (n in e) {
                        var i = e[n];
                        o.needsUpdate = o.obj.a != i.a || o.specie != t,
                        o.obj.a = i.a,
                        o.obj.u = i.u,
                        this.pixi && o.needsUpdate && o.updateAqi(t)
                    } else
                        "placeholder" != o.obj.a && (o.obj.a = "nd");
                    o.specie = t
                }
                this.clusterize("new specie")
            }
            ,
            t.prototype.insert = function(t) {
                var e = this;
                t.forEach(function(t) {
                    if (!e.contains(t)) {
                        var n = e.add(t);
                        e.pixi && e.pixi.add(n),
                        0
                    }
                })
            }
            ,
            t.prototype.update = function(t) {
                var e = this;
                t.forEach(function(t) {
                    var n = t.x;
                    if (e.id2m[n]) {
                        var o = e.id2m[n];
                        o.needsUpdate = o.obj.a != t.a,
                        o.obj.a = t.a,
                        o.obj.u = t.u
                    }
                }),
                this.clusterize("updated stations")
            }
            ,
            t.prototype.hereBoundingBox = function(t) {
                var e = [];
                if (this.list.forEach(function(n) {
                    var o = n.obj.g
                      , i = o[0] - t[0]
                      , r = o[1] - t[1]
                      , a = i * i + r * r;
                    e.push({
                        g: o,
                        d: a
                    })
                }),
                e.sort(function(t, e) {
                    return t.d > e.d ? 1 : -1
                }),
                e.length < 2)
                    throw "not enough points on the map";
                var n = L.latLngBounds([t, e[0].g, e[1].g])
                  , o = n.getCenter()
                  , i = 1 * (1 * t[1] - o.lng)
                  , r = 1 * (1 * t[0] - o.lat);
                return n.extend([1 * t[0] + r, 1 * t[1] + i]),
                n.extend([1 * t[0] - r, 1 * t[1] - i]),
                n
            }
            ,
            t
        }()
          , et = (n(354),
        n(356));
        var nt = n(35)
          , ot = n.n(nt);
        function it(t) {
            return !isNaN(t) && parseInt(Number(t)) == t && !isNaN(parseInt(t, 10))
        }
        var rt, at, st;
        n(360);
        var lt = 1e8;
        function ct(t, e, n) {
            var o, i, r = lt++;
            return e.uid = "u" + r,
            ot.a.create({
                start: function(a) {
                    var s = function(t, e, n) {
                        var o;
                        return (!at || st && st.readyState === WebSocket.CLOSED) && (rt = new Promise(function(t, e) {
                            return o = t
                        }
                        ),
                        at = ot.a.create({
                            start: function(e) {
                                st || ((st = new WebSocket(t)).onerror = function(t) {
                                    console.error("[wsock] Ooops.. web socket error:", t),
                                    e.error("web-socket failure"),
                                    at = null,
                                    st = null
                                }
                                ,
                                st.onmessage = function(t) {
                                    var n = JSON.parse(t.data);
                                    n.uid ? e.next(n) : console.log("[wsock] no uid - ", n)
                                }
                                ,
                                st.onclose = function() {
                                    console.log("[wsock] closed"),
                                    e.complete(),
                                    at = null,
                                    st = null
                                }
                                ,
                                st.onopen = function() {
                                    window.wsSock = st,
                                    o(st)
                                }
                                )
                            },
                            stop: function() {
                                e || (console.log("[wsock] stop!"),
                                at = null,
                                st && st.readyState !== WebSocket.CLOSED && st.close(),
                                st = null)
                            }
                        })),
                        rt.then(function(t) {
                            try {
                                n(t)
                            } catch (e) {
                                console.error("[wsock] Can not send", e),
                                at = null,
                                t = null
                            }
                        }),
                        at
                    }(t, n, function(t) {
                        t.send(JSON.stringify(e))
                    }).filter(function(t) {
                        return t.uid == "u" + r
                    });
                    o = s.subscribe({
                        next: function(t) {
                            "ok" == t.status ? (t.cached && "-" == t.cached[0] && (i = setTimeout(function() {
                                e.refresh = 1,
                                i = 0,
                                st.send(JSON.stringify(e))
                            }, 1e3)),
                            a.next(t.msg)) : "debug" == t.status ? console.log("[wsock] debug: ", t.msg) : "done" == t.status ? i || (o.unsubscribe(),
                            a.complete()) : "error" == t.status ? a.error(t.msg) : "nug" == t.status || console.log("[wsock] unknown:", t)
                        },
                        error: function(t) {
                            console.log("[wsock] Error! ", t),
                            a.error(t)
                        }
                    })
                },
                stop: function() {
                    i && clearTimeout(i),
                    o && o.unsubscribe()
                }
            })
        }
        var pt = n(117)
          , dt = function() {
            function t() {}
            return t.yd = function(e, n) {
                return void 0 === n && (n = {
                    keepAlive: !1
                }),
                t.get(e, "yd", n)
            }
            ,
            t.mh = function(e, n) {
                return void 0 === n && (n = {
                    keepAlive: !1
                }),
                t.get(e, "mh", n)
            }
            ,
            t.get = function(t, e, n) {
                void 0 === n && (n = {
                    keepAlive: !1
                });
                var o, i = pt.createInstance({
                    name: "lf-waqi-att-" + e
                });
                "@" == t[0] && (t = t.substr(1)),
                "S" == t[0] && it(t.substr(1)) && (t = 1 * t.substr(1)),
                o = ct("wss://api.waqi.info/api/attws", {
                    station: t,
                    mode: e + ".json"
                }, n.keepAlive).map(function(e) {
                    if ("error" == e.status)
                        throw e.reason;
                    try {
                        i.setItem("" + t, e)
                    } catch (t) {}
                    return e
                }).map(ht);
                var r = i.getItem("" + t).then(ht);
                return o = ot.a.merge(ot.a.fromPromise(r), o).filter(function(t) {
                    return null != t
                })
            }
            ,
            t
        }();
        function ut(t, e) {
            var n = 0
              , o = 0
              , i = 0
              , r = 1
              , a = [];
            function s(t, i) {
                for (0 == i && (i = 1); i > 0; i--)
                    n++,
                    o += t,
                    a.push({
                        t: e(n),
                        v: o * r
                    })
            }
            function l(e) {
                return t.charCodeAt(e)
            }
            function c(t) {
                return l(t) >= 48 && l(t) <= 57
            }
            for (var p = 0; p < t.length; p++) {
                var d = function() {
                    var t = 0
                      , e = 1;
                    for (45 == l(p + 1) && (e = -1,
                    p++); c(p + 1); )
                        t = 10 * t + (l(p + 1) - 48),
                        p++;
                    return 46 == l(p + 1) && p++,
                    e * t
                }
                  , u = l(p);
                if (0 == p && 42 == u)
                    r = 1 / d(),
                    p++;
                else if (36 == u)
                    n += 1;
                else if (37 == u)
                    n += 2;
                else if (39 == u)
                    n += 3;
                else if (47 == u)
                    r = d(),
                    p++;
                else if (33 == u)
                    s(d(), i),
                    i = 0;
                else if (124 == u)
                    n += d() - 1;
                else if (u >= 65 && u <= 90)
                    s(u - 65, i),
                    i = 0;
                else if (u >= 97 && u <= 122)
                    s(-(u - 97) - 1, i),
                    i = 0;
                else {
                    if (!(u >= 48 && u <= 57))
                        throw "decode: invalid character " + u + " (" + t.charAt(p) + ") at " + p;
                    i = 10 * i + u - 48
                }
            }
            return a
        }
        function ht(t) {
            if (!t)
                return null;
            try {
                var e, n, o = [], i = {
                    pm25: "PM<sub>2.5</sub>",
                    pm10: "PM<sub>10</sub>",
                    o3: "O<sub>3</sub>",
                    no2: "NO<sub>2</sub>",
                    so2: "SO<sub>2</sub>",
                    co: "CO"
                }, r = function() {
                    try {
                        e = [];
                        var r = t.ps[a];
                        if ("1" == r[0])
                            e = ut(r.substr(1), function(e) {
                                return {
                                    d: ft(new Date(3600 * (e * t.dh + t.st) * 1e3)),
                                    t: e
                                }
                            });
                        else if ("2" == r[0]) {
                            n = {};
                            var s = "w" == r[1];
                            for (var l in r.substr(3).split("/").forEach(function(e) {
                                ut(e, function(e) {
                                    if (s) {
                                        var n = e + t.st
                                          , o = n % 53;
                                        return {
                                            d: ft(function(t, e, n) {
                                                var o = 2 + n + 7 * (e - 1) - new Date(t,0,1).getDay();
                                                return new Date(t,0,o)
                                            }(a = (n - o) / 53, o, 0)),
                                            t: e
                                        }
                                    }
                                    var i = e + t.st
                                      , r = i % 12
                                      , a = (i - r) / 12;
                                    return {
                                        d: ft(new Date(a,r)),
                                        t: e
                                    }
                                }).forEach(function(t) {
                                    var e = t.t.t;
                                    n[e] = n[e] || {
                                        v: [],
                                        t: t.t
                                    },
                                    n[e].v.push(t.v)
                                })
                            }),
                            n)
                                e.push(n[l])
                        }
                        e.forEach(function(t, n) {
                            e[n].t.dh = n ? (t.t.d.getTime() - e[n - 1].t.d.getTime()) / 36e5 : 0
                        }),
                        o.push({
                            name: i[a] || a,
                            values: e,
                            pol: a
                        })
                    } catch (t) {
                        console.error("decode: Oopps...", t)
                    }
                };
                for (var a in t.ps)
                    r();
                return o.sort(function(t, e) {
                    var n = ["pm25", "pm10", "o3", "no2", "so2", "co"]
                      , o = n.indexOf(t.pol)
                      , i = n.indexOf(e.pol);
                    return i < 0 ? 1 : o < 0 ? -1 : o - i
                }),
                {
                    species: o,
                    dailyhours: t.dh,
                    source: t.meta.si
                }
            } catch (t) {
                return console.error("decode:", t),
                null
            }
        }
        function ft(t) {
            return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())
        }
        n(363),
        function() {
            function t() {}
            t.aqi = function(t, e) {
                void 0 === e && (e = {
                    keepAlive: !1
                });
                var n, o = pt.createInstance({
                    name: "lf-waqi-obs"
                });
                "@" == t[0] && (t = t.substr(1)),
                "S" == t[0] && it(t.substr(1)) && (t = 1 * t.substr(1)),
                n = ct("wss://api.waqi.info/api/attws", {
                    station: t,
                    mode: "aqi.json"
                }, e.keepAlive).map(function(e) {
                    try {
                        o.setItem("" + t, e)
                    } catch (t) {}
                    return e
                });
                var i = o.getItem("" + t);
                return n = ot.a.merge(ot.a.fromPromise(i), n).filter(function(t) {
                    return null != t
                })
            }
        }();
        n.d(e, "init", function() {
            return xt
        });
        var mt = n(9).getLogger("leaflet");
        mt.debug("markers loaded after ", Date.now() - waqiStartTime);
        var vt = !0;
        function gt(t) {
            var e = {
                x: t.x || t.idx,
                g: t.g || [t.lat, t.lon],
                a: t.aqi,
                n: t.name || t.city,
                u: t.t || t.utime,
                t: t.tz || ""
            };
            return vt || "placeholder" == e.a || (e.historic = function() {
                return dt.yd(e.x, {
                    keepAlive: !0
                })
            }
            ),
            e.obs = function() {
                return ot.a.fromPromise(function(t) {
                    return "@" == t[0] && (t = t.substr(1)),
                    "S" == t[0] && s(t.substr(1)) && (t = 1 * t.substr(1)),
                    u(a + "api/feed/@" + t + "/aqi.json", t)
                }(e.x))
            }
            ,
            e.open = function() {
                var t = e.x;
                if ("undefined" != typeof mapOnClickCityWidget)
                    mapOnClickCityWidget(null, t);
                else {
                    var n = "https://aqicn.org/city/@" + t + "/";
                    "en" != getLang() && (n += getLang() + "/"),
                    window.location.assign(n)
                }
            }
            ,
            e
        }
        (o || (o = fetch("https://api.waqi.info/mapq/here").then(function(t) {
            return t.json()
        })),
        o).then(function(t) {
            return vt = "CN" == t.Country.IsoCode
        });
        var bt = function() {
            function t(t, e, n) {
                var o = this;
                this.l2mLoadUrlTimer = null;
                var i = new tt(t);
                i.insert(e.map(gt)),
                i.clusterize("l1 stations"),
                this.updateMarkers(t, i),
                t.on("zoomend zoomlevelschange", function(e) {
                    i && (i.updateZoom(t.getZoom()),
                    o.updateMarkers(t, i))
                }),
                t.on("moveend", function(e) {
                    i && (i.clusterize("move end"),
                    o.updateMarkers(t, i))
                }),
                n()
            }
            return t.prototype.updateMarkers = function(t, e) {
                t.getZoom();
                var n = t.getBounds()
                  , o = n.getSouth() + "," + n.getWest() + "," + n.getNorth() + "," + n.getEast()
                  , i = new FormData;
                i.append("bounds", o.replace(/ /g, "")),
                i.append("inc", "placeholders"),
                i.append("viewer", "webgl");
                var r = function() {
                    fetch("https://api.waqi.info/mapq/bounds", {
                        method: "POST",
                        body: i
                    }).then(function(t) {
                        return t.json()
                    }).then(function(t) {
                        e.insert(t.map(gt)),
                        e.clusterize("update")
                    }).catch(function(t) {
                        mt.debug("Ooops ...", t)
                    }),
                    0
                };
                this.l2mLoadUrlTimer && clearInterval(this.l2mLoadUrlTimer),
                this.l2mLoadUrlTimer = setInterval(function() {
                    r()
                }, 6e4),
                r()
            }
            ,
            t
        }();
        function xt(t, e, n) {
            try {
                ["aqi-tooltip-1", "aqi-tooltip-2", "aqi-tooltip-3", "aqi-tooltip-4", "aqi-tooltip-5", "aqi-tooltip-6"].forEach(function(t, e) {
                    var n = document.getElementById(t)
                      , o = aqiLevelImpacts[e][1].replace(/<br>/g, " ").replace(/<small>/g, "").replace(/<\/small>/g, "");
                    o = "<div class='tooltip-header aqi-label-" + (e + 1) + "'>" + o + "</div><p>" + aqiLevelImpacts[e][0] + "</p>";
                    var i = document.createElement("div");
                    i.className = "popper";
                    var r, a = document.createElement("div");
                    i.appendChild(a),
                    a.innerHTML = o,
                    i.style.display = "none",
                    document.body.appendChild(i),
                    n.onmouseover = function() {
                        r = new et.a(n,i,{
                            placement: "top"
                        }),
                        i.style.display = "block"
                    }
                    ,
                    n.onmouseout = function() {
                        r && r.destroy(),
                        i.style.display = "none",
                        r = null
                    }
                })
            } catch (t) {
                console.error(t)
            }
            return new bt(t,e,n)
        }
    }
}]);
//# sourceMappingURL=map-markers.9a0c3c3718c6e1d12e14.js.map
