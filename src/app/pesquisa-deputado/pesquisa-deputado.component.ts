import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deputado } from '../model/deputado';
import { DeputadoService } from '../model/deputado.service';

@Component({
  selector: 'app-pesquisa-deputado',
  templateUrl: './pesquisa-deputado.component.html',
  styleUrls: ['./pesquisa-deputado.component.css'],
})
export class PesquisaDeputadoComponent implements OnInit {
  deputados$: Observable<Deputado[]>;
  constructor(private service: DeputadoService) {}

  ngOnInit() {}

  pesquisarDeputado(nomeDeputado: string) {
    this.deputados$ = this.service.obterDeputadoPorNome(nomeDeputado).pipe(
      map(({ dados }) => {
        return dados;
      })
    );
  }
}
