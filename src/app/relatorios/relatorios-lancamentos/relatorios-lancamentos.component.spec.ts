import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosLancamentosComponent } from './relatorios-lancamentos.component';

describe('RelatoriosLancamentosComponent', () => {
  let component: RelatoriosLancamentosComponent;
  let fixture: ComponentFixture<RelatoriosLancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosLancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriosLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
