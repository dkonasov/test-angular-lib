import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { TEST_INJECTION_TOKEN } from '../../constants/test-injection-token';
var TestLibComponent = /** @class */ (function () {
    function TestLibComponent(title) {
        this.title = title;
    }
    TestLibComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [TEST_INJECTION_TOKEN,] }] }
    ]; };
    TestLibComponent = tslib_1.__decorate([
        Component({
            template: "{{title}}",
            selector: 'tlib-test-component'
        }),
        tslib_1.__param(0, Inject(TEST_INJECTION_TOKEN))
    ], TestLibComponent);
    return TestLibComponent;
}());
export { TestLibComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGVzdC1hbmd1bGFyLWxpYi8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVzdC1saWIvdGVzdC1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU01RTtJQUNJLDBCQUFpRCxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7OzZDQUFyRCxNQUFNLFNBQUMsb0JBQW9COztJQUQvQixnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1AscUJBQXdDO1lBQ3hDLFFBQVEsRUFBRSxxQkFBcUI7U0FDbEMsQ0FBQztRQUVlLG1CQUFBLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO09BRGhDLGdCQUFnQixDQUU1QjtJQUFELHVCQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRFU1RfSU5KRUNUSU9OX1RPS0VOIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Rlc3QtaW5qZWN0aW9uLXRva2VuJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rlc3QtbGliLmNvbXBvbmVudC5odG1sJyxcbiAgICBzZWxlY3RvcjogJ3RsaWItdGVzdC1jb21wb25lbnQnXG59KVxuZXhwb3J0IGNsYXNzIFRlc3RMaWJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoVEVTVF9JTkpFQ1RJT05fVE9LRU4pIHB1YmxpYyB0aXRsZTogc3RyaW5nKSB7fVxufVxuIl19