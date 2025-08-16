import { Controller, Get } from '@nestjs/common';

@Controller()
export class CommonsController {
  @Get()
  swagger() {
    return `<div style="text-align: center; margin-top: 5rem;">
      <h1>Auth Botia microservice</h1>
      <p>Documentation API: <a href="/api-doc">SwaggerUI</a></p>
      </div>`;
  }
}
