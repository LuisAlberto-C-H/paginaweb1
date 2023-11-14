
    // Definir una lista de URLs de imágenes
    var imagenes = array (
        ['imagenes/bear1.jpg'],

        ['imagenes/gorilla.jpg'],
    );

    var contador=0;

    /**

     * Funcion para cambiar la imagen y link

     */

    function rotarImagenes()

    {

        // cambiamos la imagen y la url

        contador++

        document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];

        // document.getElementById("link").href=imagenes[contador%imagenes.length][1];

    }



    /**

     * Función que se ejecuta una vez cargada la página

     */

    onload=function()

    {

        // Cargamos una imagen aleatoria

        rotarImagenes();

 

        // Indicamos que cada 5 segundos cambie la imagen

        setInterval(rotarImagenes,5000);


