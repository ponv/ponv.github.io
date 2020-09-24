import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class WeatherService {
    constructor() { }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(); };
WeatherService.ɵprov = ɵɵdefineInjectable({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WeatherService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class WeatherComponent {
    constructor() { }
    ngOnInit() {
    }
}
WeatherComponent.ɵfac = function WeatherComponent_Factory(t) { return new (t || WeatherComponent)(); };
WeatherComponent.ɵcmp = ɵɵdefineComponent({ type: WeatherComponent, selectors: [["lib-weather"]], decls: 2, vars: 0, template: function WeatherComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "weather works!");
        ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WeatherComponent, [{
        type: Component,
        args: [{
                selector: 'lib-weather',
                templateUrl: './weather.component.html',
                styleUrls: ['./weather.component.css']
            }]
    }], function () { return []; }, null); })();

class WeatherModule {
}
WeatherModule.ɵmod = ɵɵdefineNgModule({ type: WeatherModule });
WeatherModule.ɵinj = ɵɵdefineInjector({ factory: function WeatherModule_Factory(t) { return new (t || WeatherModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WeatherModule, { declarations: [WeatherComponent], exports: [WeatherComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(WeatherModule, [{
        type: NgModule,
        args: [{
                declarations: [WeatherComponent],
                imports: [],
                exports: [WeatherComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of weather
 */

/**
 * Generated bundle index. Do not edit.
 */

export { WeatherComponent, WeatherModule, WeatherService };
//# sourceMappingURL=weather.js.map
