import {Component, OnInit} from '@angular/core';
import {Contato, Pessoa} from '../../core/model';
import {NgForm} from '@angular/forms';
import {PessoaService} from '../pessoa.service';
import {MessageService} from 'primeng/api';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();
  exibindoFormularioContato = false;
  contato: Contato;

  constructor(private pessoaService: PessoaService,
              private messageService: MessageService,
              private errorHandler: ErrorHandlerService,
              private router: Router,
              private title: Title,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title.setTitle('Nova pessoa');
    const codigoPessoa = this.route.snapshot.params['codigo'];
    if (codigoPessoa){
      this.carregarPessoa(codigoPessoa);
    }
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa();
    }
  }

  atualizarPessoa(form: NgForm) {
    this.pessoaService.atualizar(this.pessoa)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.messageService.add({
          severity: 'success',
          summary: 'Successo',
          detail: 'Pessoa alterada com sucesso.'});
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando(){
    return Boolean(this.pessoa.codigo);
  }

  private adicionarPessoa() {
    this.pessoaService.adicionar(this.pessoa).then(pessoaAdicionado => {
      this.messageService.add({
        severity: 'success',
        summary: 'Successo',
        detail: 'Pessoa adicionada com sucesso.'
      });
      this.router.navigate(['/pessoas', pessoaAdicionado.codigo]);
    }).catch(erro => this.errorHandler.handle(erro));
  }

  private atualizarTituloEdicao() {
    this.title.setTitle(`Edição de pessoa: ${this.pessoa.nome}`);
  }

  private carregarPessoa(codigo: any) {
    this.pessoaService.buscarPorCodigo(codigo)
      .then(pessoa => {
        this.pessoa = pessoa;
        this.atualizarTituloEdicao();
      }).catch(erro => this.errorHandler.handle(erro));
  }

  prepararNovoContato() {
    this.exibindoFormularioContato = true;
    this.contato = new Contato();
  }
}

