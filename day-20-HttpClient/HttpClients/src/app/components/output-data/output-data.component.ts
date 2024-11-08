import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../../services/get/getdata.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-output-data',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './output-data.component.html',
  styleUrl: './output-data.component.scss'
})
export class OutputDataComponent implements OnInit {
  constructor(private getApi: GetdataService) { }

  posts: any[] = [];

  ngOnInit() {
    this.getApi.getPost().subscribe((res) => {
      console.log(res);
      this.posts = res;
    }, (error) => {
      console.error('Error fetching data', error);
    });
  }


}
