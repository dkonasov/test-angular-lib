import { __decorate, __param } from 'tslib';
import { InjectionToken, Inject, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var TEST_INJECTION_TOKEN = new InjectionToken('test token');

var TestLibComponent = /** @class */ (function () {
    function TestLibComponent(title) {
        this.title = title;
    }
    TestLibComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [TEST_INJECTION_TOKEN,] }] }
    ]; };
    TestLibComponent = __decorate([
        Component({
            template: "{{title}}",
            selector: 'tlib-test-component'
        }),
        __param(0, Inject(TEST_INJECTION_TOKEN))
    ], TestLibComponent);
    return TestLibComponent;
}());

var TestLibModule = /** @class */ (function () {
    function TestLibModule() {
    }
    TestLibModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                TestLibComponent
            ],
            exports: [
                TestLibComponent
            ],
            providers: [
                {
                    provide: TEST_INJECTION_TOKEN,
                    useValue: 'Default test token value'
                }
            ]
        })
    ], TestLibModule);
    return TestLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { TEST_INJECTION_TOKEN, TestLibComponent, TestLibModule };
//# sourceMappingURL=test-angular-lib.js.map
