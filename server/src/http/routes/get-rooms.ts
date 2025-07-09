import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';


export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
   
    return [
      {
        id: 'room1',
        title: 'Room 1',    }];
  });
};