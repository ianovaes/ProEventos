import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any;

  constructor(private http: HttpClient) { } 

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get<any>('https://localhost:7022/api/Eventos').subscribe(
      (response: any) => this.eventos = response,
      (error: any) => console.log(error)
    );
  }
}
