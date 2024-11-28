import {strict as assert}  from 'assert';
import {sumarDosNumeros} from '../function.js'

describe('Prueba funcion que suma dos numeros', () => {
    it('Deberia retornar que suma dos numeros', () => {
        assert.strictEqual(sumarDosNumeros(2, 3), 5)
    })

    it ('Deberia retornar -1 cuando sumamos 1 y -2', () => {
        assert.strictEqual(sumarDosNumeros(1, -2), -1)
    })

    it ('Deberia arrojar un error al sumar 2 y a', () => {
        assert.throws(() => sumarDosNumeros(2, 'a'), Error)
    })
    it('Debería arrojar un error al sumar 2 númerico y "9" como string', () => {
        assert.throws(() => sumarDosNumeros(2, "9"), Error);
    });

})






/* Tipo de Testing 

1. Manual -> Testeo bruto o de fuerza de bruta

//Mocha parte de aqui:

Testing programado:

//Aplican para cualquier estructura de codigo (salvo vista)

1. Test Unitarios -> Probar las funcionalidades aislados, por modulo

2. Test de Integración -> Probar las funcionalidades en conjunto

//Exclusiva de backend
3. Test de Estres de Servidor -> Prueba la resistencia, velocidad y eficiencia de un servidor. Awui no sirve ni Mocha ni Jest

//Exclusiva de frontend
4. e2e - End to End - Extremo a Extremo evalua interaccion de usuario y pagina. Pesan asi que no deben ser mas del 20% del proyecto, por eso se debe probar los puntos criticos

*/

