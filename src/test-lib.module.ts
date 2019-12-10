import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLibComponent } from './components/test-lib/test-lib.component';
import { TEST_INJECTION_TOKEN } from './constants/test-injection-token';

@NgModule({
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
export class TestLibModule {}