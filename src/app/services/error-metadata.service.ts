import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetadataService implements ErrorHandler {

  public handleError(error: any): void {
    console.error("Hello from error metadata service");
  }

}
