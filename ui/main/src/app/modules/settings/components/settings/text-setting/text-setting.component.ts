

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BaseSettingComponent} from '../base-setting/base-setting.component';
import {AppState} from '@ofStore/index';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'of-text-setting',
    templateUrl: './text-setting.component.html'
})
export class TextSettingComponent extends BaseSettingComponent implements OnInit, OnDestroy {

    @Input() pattern: string;
    @Input() disabled: boolean;

    constructor(protected store: Store<AppState>) {
        super(store);
    }

    initFormGroup() {
        const validators = this.computeTextValidators();
        return new FormGroup({
            setting: new FormControl(null, validators)
        }, {updateOn: 'submit'});
    }

    protected computeTextValidators() {
        const validators = [];
        if (this.requiredField) {
            validators.push(Validators.required);
        }
        if (this.pattern) {
            validators.push(Validators.pattern(this.pattern));
        }
        return validators;
    }

    updateValue(value) {
        this.form.get('setting').setValue(value, {emitEvent: false});
    }

    protected isEqual(formA, formB): boolean {
        console.log('TextSettingComponent.isEqual called');
        return formA.setting === formB.setting;
    }

}
