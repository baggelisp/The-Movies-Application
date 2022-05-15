import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() onChangeValue = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  changeInput(text: any){
    this.onChangeValue.emit((text?.target as HTMLTextAreaElement)?.value);
	}
}
