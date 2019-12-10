import { Component, Inject } from '@angular/core';
import { TEST_INJECTION_TOKEN } from '../../constants/test-injection-token';

@Component({
    templateUrl: './test-lib.component.html',
    selector: 'tlib-test-component'
})
export class TestLibComponent {
    constructor(@Inject(TEST_INJECTION_TOKEN) public title: string) {}
}
