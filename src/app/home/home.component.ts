import {Component, OnInit} from '@angular/core';
import {TvShowsServices} from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = {}

  constructor(
    private TvShowsServices: TvShowsServices
  ) {
  }

  ngOnInit() {
    this.getAllShows();
  }

  getAllShows() {
    this.TvShowsServices.getAllShows()
      .subscribe((res) => {
        Object.keys(res).forEach((key) => {
          console.log(res[key].show.name);
          this.data[res[key].show.id] = res[key].show.name;
        });
      }, (err) => {
        console.log(err);
      });
  }
}
