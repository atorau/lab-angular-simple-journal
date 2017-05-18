import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers:[ApiService]
})
export class EntryListComponent implements OnInit {
  journals;
  constructor(private journal: ApiService,
  ) { }

  ngOnInit() {
    this.journal.getList()
      .subscribe((journals) => {
        this.journals = journals;
      });
  }

}
