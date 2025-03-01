import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {

  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() lastname: string = '';

  @Output() viewDetail = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onViewDetail(){
    this.viewDetail.emit();
  }

  onEdit(){
    this.edit.emit();
  }

  onDelete(){
    this.delete.emit();
  }



  constructor() {}

}
