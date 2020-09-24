(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('weather', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.weather = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var WeatherService = /** @class */ (function () {
        function WeatherService() {
        }
        return WeatherService;
    }());
    WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(); };
    WeatherService.ɵprov = i0.ɵɵdefineInjectable({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WeatherService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var WeatherComponent = /** @class */ (function () {
        function WeatherComponent() {
        }
        WeatherComponent.prototype.ngOnInit = function () {
        };
        return WeatherComponent;
    }());
    WeatherComponent.ɵfac = function WeatherComponent_Factory(t) { return new (t || WeatherComponent)(); };
    WeatherComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WeatherComponent, selectors: [["lib-weather"]], decls: 2, vars: 0, template: function WeatherComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, "weather works!");
                i0.ɵɵelementEnd();
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WeatherComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-weather',
                        templateUrl: './weather.component.html',
                        styleUrls: ['./weather.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var WeatherModule = /** @class */ (function () {
        function WeatherModule() {
        }
        return WeatherModule;
    }());
    WeatherModule.ɵmod = i0.ɵɵdefineNgModule({ type: WeatherModule });
    WeatherModule.ɵinj = i0.ɵɵdefineInjector({ factory: function WeatherModule_Factory(t) { return new (t || WeatherModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WeatherModule, { declarations: [WeatherComponent], exports: [WeatherComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(WeatherModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [WeatherComponent],
                        imports: [],
                        exports: [WeatherComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of weather
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.WeatherComponent = WeatherComponent;
    exports.WeatherModule = WeatherModule;
    exports.WeatherService = WeatherService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=weather.umd.js.map
