import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public listOfWords: Array<string> = [];
  public word = '';
  public bad='';
  public text = '';
  public wordPlaceholder = 'word here...';
  public notCorrect = false; 
  public notCorrect2 = false; 
  public textPlaceholder = 'text here...';


  constructor() { }

  ngOnInit(): void {
    
  }

  addToList(bad:string): string{
    if(this.word == ''){
      this.wordPlaceholder = 'Please write a word!';
      this.notCorrect = true;
    }
    else{
      this.listOfWords.push(this.word);
      this.word = '';
      this.bad = (this.listOfWords).toString();
      this.wordPlaceholder = 'word here...';
      this.notCorrect = false;
    }
    
    
    return bad; 
  }
  reset(): void{
    this.bad = '';
    this.listOfWords = [];
    this.text = '';
    
  }
  censor(): void{
    if(this.text == ''){
      this.textPlaceholder = 'Please write a text!';
      this.notCorrect2 = true;
    }
    else{
      let newText = '';
      this.text.split(' ').map( el => {
        console.log(el);
        console.log();
        if(this.listOfWords.includes(el)){
          el = '*'.repeat(el.length);
          console.log(el);
          newText += `${el} `;
          
        }
        else newText += `${el} `;
      })
      this.textPlaceholder = 'text here...';
      this.notCorrect2 = false;
      this.text = newText;
    }

    
  }
}
