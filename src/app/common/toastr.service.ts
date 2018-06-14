import { Injectable } from '@angular/core';

declare let toastr: any; // this is letting typeScript compiler know that toastr is an object that we know about and it is global scope

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.sucess(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.suerrorcess(message, title);
  }
}
