import mongoose from "mongoose";
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroeRepository extends IRepository {
  async obtenerPorId(id) {
    try {
      return await SuperHero.findById(id);
    } catch (e) {
      return;
    }
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    let query = {};

    try {
      const atributoType = SuperHero.schema.path(atributo);
      if (atributoType instanceof mongoose.Schema.Types.Number) {
        query = { [atributo]: { $eq: valor } };
      } else {
        query = { [atributo]: { $regex: new RegExp(valor, "i") } };
      }

      return await SuperHero.find(query);
    } catch (e) {
      return [];
    }
  }

  async obtenerMayoresDe30() {
    try {
      return await SuperHero.find({
        edad: { $gt: 30 },
        planetaOrigen: "Tierra",
        "poderes.2": { $exists: true },
      });
    } catch (e) {
      return [];
    }
  }
}

export default new SuperHeroeRepository();
