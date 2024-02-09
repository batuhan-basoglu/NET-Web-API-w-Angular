import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private http: HttpClient) {
  }
  loadPosts() {
    this.http.get("https://api.hatchways.io/assessment/blog/posts?tag=tech").subscribe((response)=>{
      alert(JSON.stringify(response));
    })
  }
}