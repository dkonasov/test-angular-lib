import { __decorate, __param } from 'tslib';
import { InjectionToken, Inject, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const TEST_INJECTION_TOKEN = new InjectionToken('test token');

let TestLibComponent = class TestLibComponent {
    constructor(title) {
        this.title = title;
    }
};
TestLibComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [TEST_INJECTION_TOKEN,] }] }
];
TestLibComponent = __decorate([
    Component({
        template: "{{title}}",
        selector: 'tlib-test-component'
    }),
    __param(0, Inject(TEST_INJECTION_TOKEN))
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
        ],
        providers: [
            {
                provide: TEST_INJECTION_TOKEN,
                useValue: 'Default test token value'
            }
        ]
    })
], TestLibModule);

/**
 * Generated bundle index. Do not edit.
 */

export { TEST_INJECTION_TOKEN, TestLibComponent, TestLibModule };
//# sourceMappingURL=test-angular-lib.js.map
