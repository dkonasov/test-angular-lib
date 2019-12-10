import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLibComponent } from './components/test-lib/test-lib.component';
import { TEST_INJECTION_TOKEN } from './constants/test-injection-token';
var TestLibModule = /** @class */ (function () {
    function TestLibModule() {
    }
    TestLibModule = tslib_1.__decorate([
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
export { TestLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdC1hbmd1bGFyLWxpYi8iLCJzb3VyY2VzIjpbInRlc3QtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFtQnhFO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixhQUFhO1FBakJ6QixRQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsWUFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdCQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxnQkFBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsUUFBUSxFQUFFLDBCQUEwQjtpQkFDdkM7YUFDSjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUc7SUFBRCxvQkFBQztDQUFBLEFBQTdCLElBQTZCO1NBQWhCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRlc3RMaWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVzdC1saWIvdGVzdC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IFRFU1RfSU5KRUNUSU9OX1RPS0VOIH0gZnJvbSAnLi9jb25zdGFudHMvdGVzdC1pbmplY3Rpb24tdG9rZW4nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVGVzdExpYkNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUZXN0TGliQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogVEVTVF9JTkpFQ1RJT05fVE9LRU4sXG4gICAgICAgICAgICB1c2VWYWx1ZTogJ0RlZmF1bHQgdGVzdCB0b2tlbiB2YWx1ZSdcbiAgICAgICAgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVGVzdExpYk1vZHVsZSB7fSJdfQ==