import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var TestLibComponent = /** @class */ (function () {
    function TestLibComponent() {
        this.title = 'Test lib test component';
    }
    TestLibComponent = __decorate([
        Component({
            template: "{{title}}"
        })
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
            ]
        })
    ], TestLibModule);
    return TestLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { TestLibComponent, TestLibModule };
//# sourceMappingURL=test-angular-lib.js.map
