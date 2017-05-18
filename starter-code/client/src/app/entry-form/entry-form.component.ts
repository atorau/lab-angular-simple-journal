import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [ ApiService ]
})
export class EntryFormComponent implements OnInit {
  title: string;
  content: string;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  save(){
    if (window.confirm('Journal Added')) {
      this.apiService.addEntry({title: this.title, content: this.content}).subscribe((journal) => {
      });
  }
}

}
