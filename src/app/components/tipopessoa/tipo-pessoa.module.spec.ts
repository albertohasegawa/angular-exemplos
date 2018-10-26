import { TipoPessoaModule } from './tipo-pessoa.module';

describe('TipoPessoaModule', () => {
  let tipoPessoaModule: TipoPessoaModule;

  beforeEach(() => {
    tipoPessoaModule = new TipoPessoaModule();
  });

  it('should create an instance', () => {
    expect(tipoPessoaModule).toBeTruthy();
  });
});
