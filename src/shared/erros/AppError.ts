class AppError {
  public readonly mensagem: string;
  public readonly CodigoDoErro: number;

  constructor(mensagem: string, codigoDoErro: number) {
    this.mensagem = mensagem;
    this.CodigoDoErro = codigoDoErro;
  }
}

export default AppError;
