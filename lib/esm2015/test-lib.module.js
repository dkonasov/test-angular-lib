import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLibComponent } from './components/test-lib/test-lib.component';
import { TEST_INJECTION_TOKEN } from './constants/test-injection-token';
let TestLibModule = class TestLibModule {
};
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
export { TestLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdC1hbmd1bGFyLWxpYi8iLCJzb3VyY2VzIjpbInRlc3QtbGliLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFtQnhFLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7Q0FBRyxDQUFBO0FBQWhCLGFBQWE7SUFqQnpCLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLFlBQVk7U0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLGdCQUFnQjtTQUNuQjtRQUNELE9BQU8sRUFBRTtZQUNMLGdCQUFnQjtTQUNuQjtRQUNELFNBQVMsRUFBRTtZQUNQO2dCQUNJLE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCLFFBQVEsRUFBRSwwQkFBMEI7YUFDdkM7U0FDSjtLQUNKLENBQUM7R0FDVyxhQUFhLENBQUc7U0FBaEIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVGVzdExpYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXN0LWxpYi90ZXN0LWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVEVTVF9JTkpFQ1RJT05fVE9LRU4gfSBmcm9tICcuL2NvbnN0YW50cy90ZXN0LWluamVjdGlvbi10b2tlbic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUZXN0TGliQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRlc3RMaWJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBURVNUX0lOSkVDVElPTl9UT0tFTixcbiAgICAgICAgICAgIHVzZVZhbHVlOiAnRGVmYXVsdCB0ZXN0IHRva2VuIHZhbHVlJ1xuICAgICAgICB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXN0TGliTW9kdWxlIHt9Il19