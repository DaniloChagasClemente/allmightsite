"use strict";

const Treino = use("App/Models/Treino");

class TreinoController {
  async index() {
    const treinos = await Treino.all();
    return treinos;
  }

  async store({ request, auth }) {
    const {finalidade, exercicio, repeticoes, user_id} = request.only([ "finalidade", "exercicio", "repeticoes", "user_id"]);
    const treinos = await Treino.create({finalidade, exercicio, repeticoes, user_id/*:auth.user.id*/});
    return treinos;
  }

  async show({ params, request, response, view }) {
    const treinos = await Treino.find(1); //FindOrFail
    return treinos;
  }

  async update({ params, request, response }) {
    const treinos = await Treino.find(1); //findOrFail
    const { finalidade, exercicio, repeticoes, user_id } = request.only([
      "finalidade",
      "exercicio",
      "repeticoes",
      "user_id"]);
    treinos.finalidade = finalidade;
    treinos.exercicio = exercicio;
    treinos.repeticoes = repeticoes;
    treinos.user_id = user_id;
    await treinos.save();
    return treinos;
  }

  async destroy({ params, request, response }) {
    const treinos = await Treino.find(1); //FindOrFail
    await treinos.delete();
    return treinos;
  }
}

module.exports = TreinoController;