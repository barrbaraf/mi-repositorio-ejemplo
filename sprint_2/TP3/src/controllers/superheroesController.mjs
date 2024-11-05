import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroePorAtributo,
  obtenerSuperheroesMayoresDe30,
} from "../services/superheroesService.mjs";
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";

export async function obtenerSuperheroePorIdController(req, res) {
  const { id } = req.params;
  const superheroes = await obtenerSuperheroePorId(id);

  if (superheroes) {
    res.send(renderizarSuperheroe(superheroes));
  } else {
    res.status(404).json({ mensaje: "Superheroe no encontrado" });
  }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  const superheroes = await obtenerTodosLosSuperheroes();
  res.send(renderizarListaSuperheroes(superheroes));
}
export async function buscarSuperheroePorAtributoController(req, res) {
  const { atributo, valor } = req.params;
  const superheroes = await buscarSuperheroePorAtributo(atributo, valor);

  if (superheroes.length > 0) {
    res.send(renderizarListaSuperheroes(superheroes));
  } else {
    res
      .status(404)
      .send({ mensaje: "No se encontraron superheroes con ese atributo" });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  const superheroes = await obtenerSuperheroesMayoresDe30();
  res.send(renderizarListaSuperheroes(superheroes));
}
