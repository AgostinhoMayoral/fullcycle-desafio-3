import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (
      '<h1>Desafio3</h1>' +
      '<b>Funcionalidades:</b><p><p>' +
      '-GET  /categories - Consulta de categorias<p>' +
      '-POST /categories - Criação de categorias<p>'
    );
  }
}
