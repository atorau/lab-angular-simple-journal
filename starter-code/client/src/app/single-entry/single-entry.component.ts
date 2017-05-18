import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [ApiService]
})
export class SingleEntryComponent implements OnInit {
  journal: any = {};

  constructor(private route: ActivatedRoute, private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalEntry(params['id']);
  });
}
  getJournalEntry(id) {
   this.apiService.get(id)
     .subscribe((journal) => {
       this.journal = journal;
     });
 }
 deleteJournal() {
  if (window.confirm('Are you sure?')) {
    this.apiService.remove(this.journal._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}


}
