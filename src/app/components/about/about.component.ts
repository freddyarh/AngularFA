import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public web: String;

  constructor() { 
    this.title = "Fredy Aristizabal";
    this.subtitle = "Desarrollador web y Formador";
    this.web = "freddyarh@gmail.com";
  }

  ngOnInit(): void {
  }

}
