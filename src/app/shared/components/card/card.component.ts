import { DEFAULT_EXTENSIONS } from './../../../../../node_modules/@types/babel__core/index.d';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

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
  ngOnInit() {}

}
