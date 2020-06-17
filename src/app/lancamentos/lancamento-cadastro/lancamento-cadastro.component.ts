import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../../categorias/categoria.service';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {PessoaService} from '../../pessoas/pessoa.service';
import {Lancamento} from '../../core/model';
import {NgForm} from '@angular/forms';
import {LancamentoService} from '../lancamento.service';
import {MessageService} from 'primeng/api';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['codigo']);
    this.carregarCategorias();
    this.carregarPessoas();
  }

  carregarCategorias(){
    return this.categoriaService.listarTodos()
      .then(categorias => {
        this.categorias = categorias.map(c => ({label: c.nome, value: c.codigo}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas() {
    return this.pessoaService.listarTodos()
      .then(pessoas => {
        this.pessoas = pessoas.map(p => ({label: p.nome, value: p.codigo}));
      })
      .catch(erro => this.errorHandler.handle(erro));

  }

  salvar(form: NgForm) {
    this.lancamentoService.adicionar(this.lancamento).then(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successo',
        detail: 'Lançamento adicionado com sucesso.'
      });
      form.reset();
      this.lancamento = new Lancamento();
    }).catch(erro => this.errorHandler.handle(erro));
  }
}
