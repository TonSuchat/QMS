import { FormGroup } from "@angular/forms";

export const setDirtyAndValidate = (formGroup: FormGroup) => {
  for (const i in formGroup.controls) {
    formGroup.controls[i].markAsDirty();
    formGroup.controls[i].updateValueAndValidity();
  }
};
