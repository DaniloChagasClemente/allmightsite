'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post("/register", "AuthController.register");
Route.post("/authenticate", "AuthController.authenticate");

/*Route.group(() => {
  Route.resource("treino", "TreinoController").apiOnly();
}).middleware(["auth"]);*/

Route.post("/store", "TreinoController.store");
Route.get("/show:id", "TreinoController.show");
Route.get("/index", "TreinoController.index");
Route.put("/update:id", "TreinoController.update");
Route.delete("/destroy:id", "TreinoController.destroy");
