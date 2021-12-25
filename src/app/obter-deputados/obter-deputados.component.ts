import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-obter-deputados',
  templateUrl: './obter-deputados.component.html',
  styleUrls: ['./obter-deputados.component.css'],
})
export class ObterDeputadosComponent implements OnInit {
  deputados: Deputado[];
  constructor(private ds: DeputadoService) {
    this.deputados = [];
  }

  ngOnInit() {
    this.ds.obterDeputados().subscribe((res) => {
      this.deputados = res.dados;
    });
  }
}
