import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'http://localhost:8000/final_project/';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public inputName: string;
  public course1: string;
  public course2: string;

  public apiResponse: {name: string, course_1: string, course_2: string};
  public apiError;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  clickHandler(){
    this.apiResponse = null;
    this.apiError = null;

    this.http.post(API_URL, {
      name: this.inputName,
      course_1: this.course1,
      course_2: this.course2,
    }).subscribe(
      (result: {name: string, course_1: string, course_2: string}) => {
        this.apiResponse = result;
      },
      error => {
        console.log(error);
        this.apiError = error;
      }
    );
  }
}
