import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export const handleError = (error: HttpErrorResponse) => {
  const errorMessage =
    error.error && error.error.message
      ? error.error.message
      : `Error code: ${error.status}\n Message: ${error.message}`;
  return throwError(errorMessage);
};
