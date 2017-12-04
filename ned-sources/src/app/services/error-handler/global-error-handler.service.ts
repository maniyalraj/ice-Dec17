import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error) {
    console.error("Something went wrong", error);
    //throw error;
  }
}
