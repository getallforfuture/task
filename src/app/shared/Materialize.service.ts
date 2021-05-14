import {ElementRef} from '@angular/core';


declare var M: any;


export interface MaterialInstance {
  open(): void;
  close(): void;
  destroy(): void;
}
export class MaterializeService {

  static initModal(ref: ElementRef): MaterialInstance{
    return  M.Modal.init(ref.nativeElement);
  }

  static toast(message: string): void{
    M.toast({html: message});
  }

  static updateTextInputs(): void{
    M.updateTextFields();
  }
}
