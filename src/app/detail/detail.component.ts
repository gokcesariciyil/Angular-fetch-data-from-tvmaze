import {Component, OnInit} from '@angular/core';
import {TvShowsServices} from '../service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: number;
  data = {};

  constructor(
    private route: ActivatedRoute,
    private TvShowsServices: TvShowsServices
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: {id: string}) => {
        this.id = +params.id;
      }
    );

    this.getShow();
  }

  getShow() {
    this.TvShowsServices.getShow(this.id)
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      }, (err) => {
        console.log(err);
      });
  }
}
