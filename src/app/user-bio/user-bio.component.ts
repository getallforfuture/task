import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from '../shared/interfaces';
import {MaterialInstance, MaterializeService} from '../shared/Materialize.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.sass']
})
export class UserBioComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modal') modalRef!: ElementRef;
  @Input() user?: User;
  form!: FormGroup;
  modal!: MaterialInstance;

  constructor(
    private usersService: UsersService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.user?.first_name],
      company: [this.user?.company],
      job: [this.user?.job_title],
    });

  }

  // tslint:disable-next-line:typedef
  get getControl() {
    return this.form.controls;
  }


  ngAfterViewInit(): void {
    this.modal = MaterializeService.initModal(this.modalRef);
  }

  ngOnDestroy(): void {
    if (this.modal) {
    this.modal.destroy();
    }
  }

  open(): void{
    if (this.modal) {
      this.modal.open();
      MaterializeService.updateTextInputs();
    }
  }

  onCancel(): void{
    if (this.modal) {
      this.modal.close();
    }
  }
  onSubmit(): void {
    console.log('there');
    /*this.form.disable();
    const newPosition: Position = {
      name: this.form.value.name,
      cost: this.form.value.company,
      category: this.categoryId
    };

      this.positionsService.update(newPosition).subscribe(
        position => {
          const idx = this.positions.findIndex(p => p._id === position._id)
          this.positions[idx] = position
          MaterialService.toast('Position has been changed')
        },
        error => MaterialService.toast(error.error.message),
        () => {
          this.modal.close();
          this.form.reset({name: '', cost: 1});
          this.form.enable();
        }
      );*/
  }
}
