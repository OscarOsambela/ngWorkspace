import {of} from 'rxjs';

//1. creacion de observable
//creamos un observable que emite varios valores

const observable = of('hola', 'Oscar')

//2. creacion de observador
const observer = {
    next: (valor: string | number | any)=> console.log(`- ${valor}`),
    error: (error: any)=> console.error(`Error: ${error}`),
    complete: () => console.info(`Ejecucion terminada`)
    
}

observable.subscribe(observer)