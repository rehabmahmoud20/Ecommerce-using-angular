import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loadelValue: boolean = false;
  constructor(private _LoaderService: LoaderService,) { }

  ngOnInit(): void {
    this._LoaderService.laoderVal.subscribe((val) => (this.loadelValue = val));

  }

}
