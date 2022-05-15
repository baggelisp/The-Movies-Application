import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  inputValue: string = '';
  @Output() onChangeValue = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  changeInput(errors: any, text: any){
    console.log(errors)
    if (errors !== null) return;
    this.onChangeValue.emit((text?.target as HTMLTextAreaElement)?.value);
	}
}
