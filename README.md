# Contexto

Aplicación de angular centrada en aparición y captura de pokemon gracias a la API de pokemons, basicamente la aplicación comienza con la aparición de un pokemon salvaje y al hacerle click en catch aparecerá una pokeball, se espera un momento y en la consola del navegador aparecerá si el pokemon se capturo o no, tienes 3 intentos para capturarlo sino huirá y aparecera otro aleatoriamente.

Además gracias al uso de la store de Angular se puede almacenar tus pokemons capturados y de esta forma se podrá ver un listado de ellos.

# Partes interesantes

Principalmente lo más interesante fue el uso de la store para lograr almacenar los pokemons capturados

En el siguiente codigo se observa que en el estado se almacenará un arreglo de Pokemon 

```
import { Pokemon } from './../../types/pokemon';

export class Catch {
  static readonly type = '[Pokemon[]] Catch';
  constructor(public pokemon: Pokemon) {}
}
```
Acá se observa que el estado default de myPokemons es una arreglo vacío y se observan que posee un selector, que es principalmente para obtener el estado actual como se puede observar y una Action que es Catch que basicamente se obtiene el estado actual y se setea por un nuevo arreglo que contiene todo lo anterior mas un nuevo pokemon que se esta recibiendo.

```
import { Selector, State, Action, StateContext } from '@ngxs/store';
import { Pokemon } from './../../types/pokemon';
import { Catch } from  './myPokemons.action';

@State<Pokemon[]>({
  name: 'myPokemons',
  defaults: [],
})

export class MyPokemons {
  @Selector()
  static getMyPokemons(state: Pokemon[]) {
    return state;
  }

  @Action(Catch)
  catch(ctx: StateContext<Pokemon[]>, { pokemon }: Catch) {
    const state = ctx.getState();
    ctx.setState([...state, pokemon]);
  }
}
```

Finalmente para ejecutar las Action en el componente de catch se utiliza un dispatch de la siguiente forma `this.store.dispatch(new Catch(pokemon));` dandole la action Catch que recibe el pokemon actual que se logro capturar

# Instalar las dependencias
Se requiere instalar las dependencias con `npm install`

# Para ejecutar
Para ejecutar el codigo se necesita correr ` npm start` y finalmente se abrira la aplicacion en `http://localhost:4200/`
