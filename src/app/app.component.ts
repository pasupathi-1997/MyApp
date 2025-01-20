import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './component/display/display.component';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment.development';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'my-app';
  constructor(){
    // console.log(environment.Url);
  }
  ngOnInit(): void {
    const firebaseconfig ={
      apiKey: "AIzaSyB0S3xv_vbrKLVLfuWq7t4AF-A1GeGeb0c",
      authDomain: "student-form-b59a7.firebaseapp.com",
      projectId: "student-form-b59a7",
      storageBucket: "student-form-b59a7.firebasestorage.app",
      messagingSenderId: "4006920307",
      appId: "1:4006920307:web:05c0bded20bca32672aa06",
      measurementId: "G-MM6W4R9R5L"
    };
    const app = initializeApp(firebaseconfig);
    const auth = getAuth(app);
  }

}
