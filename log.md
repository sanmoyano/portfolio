# CLEAN ARCHITECTURE / CLEAN CODE
Conceptos básicos: 
1. Usar nombres descriptivos:
  - Usar nombres descriptivos para variables, funciones y clases para que sea más fácil entender qué hace cada una. Los nombres deben ser claros y descriptivos, evitar nombres genéricos o abreviaturas poco comunes.
	- Los nombres deben revelar nuestras inteciones. 
2. Dividir el código en funciones pequeñas: 
  - Divide el código en funciones pequeñas y cohesivas (union estrecha entre las partes del código) para que sea más fácil de leer y entender. Cada función debe tener una tarea clara y definida y no debería hacer demasiado.
3. Reduce la complejidad: 
  - Reduce la complejidad del código utilizando estructuras de control simples y evitando anidaciones profundas. Cuanto más simple sea el código, más fácil será de entender y mantener. 
4. Comenta tu código: 
  - Agrega comentarios útiles (sólo si es necesario) para que otros puedan entender lo que esta sucediendo dentro del código. Comentarios claros y descriptivos, ni largos ni redundantes.
5. Separar la lógica del diseño:
  - Separar la lógica del diseño para que el código sea más fácil de mantener y actualizar. La lógica debe estar en una capa separada, y el diseño debe ser manejado por una capa diferente.
6. Pruebas unitarias:
  - Haz pruebas unitarias para asegurarte de que el código funciona como debería y que no hay errores o problemas de rendimiento. Las pruebas pueden ayudar a encontrar y corregir errores temprano, lo que puede ahorrarte mucho tiempo en el futuro.
7. Utiliza el principio de KISS: 
  - "Keep It Simple, Stupid". Intenta mantener el código simple y fácil de entender , y evita agregar funcionalidades innecesarias. 
8. Sigue las convenciones de código: 
  - Seguir las convenciones de programación establecidas en tus proyectos o comunidad. Esto puede incluir el uso de tabulaciones en lugar de espacios, estilo de los comentarios y la longitud máxima de las lineas de código. 
9. Evita la repetición de código: 
	- Evita la repetición de código siempre que sea posible. Utiliza funciones o clases reutilizables para evitar duplicar código en diferentes partes del programa.
10. Revisa y refactoriza el código: 
	- Revisa regularmente el código y busca formas de mejorarlo. La refactorización es el proceso de mejorar el código existente sin cambiar su comportamiento, y puede ayudarte a mejorar la legibilidad y mantenibilidad del código.

# NOTAS CLEAN CODE
- Concepto del código limpio, nada de duplicados, un objetivo, expresividad y pequeñas abstracciones.
## Nombres 
- Nombres de variables, funciones y clases tienen que ser significativos y pronunciables. 
- Si hay variables del mismo tipo, utilizar el mismo vocabulario
- Nombres buscables por ejemplo:
  * Mal:
  ```js
  // Para qué rayos sirve 86400000? 
  setTimeout(hastaLaInfinidadYMasAlla, 86400000);
  ```
  * Bien: 
  ```js
  // Decláralos como variables globales de 'const'.
  const MILISEGUNDOS_EN_UN_DIA = 8640000;
  setTimeout(hastaLaInfinidadYMasAlla, MILISEGUNDOS_EN_UN_DIA);
  ```
- Utilizar variables explicativas
- Evitar mapeo mental, hacer mapeos explícitos.
  ```js
  const ubicaciones = ["cordoba", "bs as", "santa fe",...]
  ubicaciones.map((ubicacion) => ubicacion)
  ```
- No incluir contexto innecesario, si el nombre de tu objeto te dice algo, no lo repitas de nuevo en el nombre de la variable.
 * Mal:
    ```js
    const Coche = {
      cocheMarca: 'Honda',
      cocheModelo: 'Accord',
      cocheColor: 'Blue'
    };

    function pintarCoche(coche) {
      coche.cocheColor = 'Red';
    }require 'redcarpet'
    markdown = Redcarpet.new("Hello World!")
    puts markdown.to_html
    ```
  * Bien:
    ```js
    const Coche = {
    marca: 'Honda',
    modelo: 'Accord',
    color: 'Blue'
  };

  function pintarCoche(coche) {
    coche.color = 'Red';
  }
    ```
- Utiliza argumentos predefinidos en vez de utilizar condiciones
  * Los argumentos predefinidos muchas veces son más organizados que utilizar los condicionales. Se consciente que si tu los usas, tu función solo tendra valores para los argumentos de ```undefined```. Los demas valores de ```falso``` como ```'', "", false, null, 0 y NaN``` no se reemplazan con un valor predefinido.
  * Mal:
  ```js
  function crearMicroCerveceria(nombre) {
    const nombreDelMicroCerveceria = nombre || 'Hipster Brew Co.';
  // ...
  }
  ```
  * Bien:
  ```js
    function crearMicroCerveceria(nombreDelMicroCerveceria = 'Hipster Brew Co.') {
    // ...
  }
  ```