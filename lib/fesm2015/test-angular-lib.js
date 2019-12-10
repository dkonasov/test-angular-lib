import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let TestLibComponent = class TestLibComponent {
    constructor() {
        this.title = 'Test lib test component';
    }
};
TestLibComponent = __decorate([
    Component({
        template: "{{title}}",
        selector: 'tlib-test-component'
    })
], TestLibComponent);

let TestLibModule = class TestLibModule {
};
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

/**
 * Generated bundle index. Do not edit.
 */

export { TestLibComponent, TestLibModule };
//# sourceMappingURL=test-angular-lib.js.map
