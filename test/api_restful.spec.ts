import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';

describe('Restful-API - Gerenciamento de Dispositivos', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api.restful-api.dev';

  let objectId = '';

  p.request.setDefaultTimeout(60000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('Endpoints de Objetos / Dispositivos', () => {
    it('1. Deve criar um novo objeto tecnológico com sucesso (POST /objects)', async () => {
      objectId = await p
        .spec()
        .post(`${baseUrl}/objects`)
        .withJson({
          name: 'MacBook Pro M3 Test',
          data: {
            year: 2026,
            price: 1849.99,
            'CPU model': 'Apple M3',
            'Hard disk size': '1 TB'
          }
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonSchema({
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            createdAt: { type: 'number' },
            data: { type: 'object' }
          },
          required: ['id', 'name', 'data']
        })
        .returns('id');
    });

    it('2. Deve listar todos os objetos cadastrados (GET /objects)', async () => {
      await p
        .spec()
        .get(`${baseUrl}/objects`)
        .expectStatus(StatusCodes.OK)
        .expectJsonSchema({
          type: 'array'
        });
    });

    it('3. Deve buscar o objeto específico criado dinamicamente pelo ID (GET /objects/{id})', async () => {
      await p
        .spec()
        .get(`${baseUrl}/objects/${objectId}`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          id: objectId,
          name: 'MacBook Pro M3 Test'
        });
    });

    it('4. Deve atualizar o objeto existente utilizando o ID dinâmico (PUT /objects/{id})', async () => {
      await p
        .spec()
        .put(`${baseUrl}/objects/${objectId}`)
        .withJson({
          name: 'MacBook Pro M3 Atualizado',
          data: {
            year: 2026,
            price: 1999.99,
            'CPU model': 'Apple M3 Max',
            'Hard disk size': '2 TB',
            color: 'Silver'
          }
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          id: objectId,
          name: 'MacBook Pro M3 Atualizado'
        });
    });

    it('5. Deve excluir o objeto criado pelo ID (DELETE /objects/{id})', async () => {
      await p
        .spec()
        .delete(`${baseUrl}/objects/${objectId}`)
        .expectStatus(StatusCodes.OK);
    });
  });
});
