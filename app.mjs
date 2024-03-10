//permite el uso de readline-sync para input asyncrono
import readlineSync from 'readline-sync'
import mongoose from 'mongoose'

const url = 'mongodb://localhost/idiomas_db'

//BASE DE DATOS IDIOMA
//-------------------------------------------------------------------


mongoose.connect(url, {

})
    .then(()=> console.log('CONECTADO A MONGO'))
    .catch( (e)=> console.log('El error de conexion es: ' + e))


    const idiomaSchema = mongoose.Schema({
        id: String,
        espannol: String,
        ingles: String
    
    }, {versionKey: false})

    
    const IdiomaModel =  mongoose.model('idiomas', idiomaSchema)

    let idiomasArray = {}
    const mostrar = async () => {
      try {
          const idiomas = await IdiomaModel.find();
          idiomasArray = idiomas.map(idioma => ({
              
              id: idioma.id,
              espannol: idioma.espannol,
              ingles: idioma.ingles
          }));
          //
          //console.log(idiomasArray);
      } catch (error) {
          console.error('Error al mostrar idiomas:', error);
      }
  };

// BASE DE DATOS CONFIGURACION 
//-----------------------------------------------------------------------  

  mongoose.connect(url, {

  })
    .then(()=> console.log('CONECTADO A MONGO 2'))
    .catch( (e)=> console.log('El error de conexion es: ' + e))

    const configSchema = mongoose.Schema({
    
      config: String
     
  
  }, {versionKey: false})

  const configModel =  mongoose.model('juans', configSchema)


  let configuracionArray = {}
  const mostrar_configuracion = async () => {
    try {
        const configuracion = await configModel.find();
        configuracionArray = configuracion.map(config1 => ({
            
    
            config: config1.config
            
        }));
        
        console.log(configuracionArray[1].config);

    } catch (error) {
        console.error('Error al mostrar configuraciones:', error);
    }
};

















  //establece que idioma se usará, idiomasArray[i][idioma]
  // i es igual al id de la frase, identifica que frase debe colocar
  //idioma es la variable idioma y establace el idioma de la frase







// INTERFAZ
//-------------------------------------------------------------------------

//se llama esta funcion cad vez que se quiera colocar un imput
//la funcion devuelve el imput
function input(){
  const x = readlineSync.question();
  return x;
}

//inserta una linea separadora para visulizar
//mejor la visual en la consola
function lineaSeparadora(){
  console.log("--------------------");
}




// funcion menu() es la primera en ejecutarse
async function menu(){
  
  await mostrar_configuracion();
  await mostrar();

  let idiomaDB = configuracionArray[0].config
  let idioma = idiomaDB


  console.log("Menu:");

  //imprime una linea de -----
  lineaSeparadora();


  //muestra las 3 opciones del menu y hay qyue escoger una
  console.log("1.-" +idiomasArray[1][idioma])
  console.log("2.-" +idiomasArray[2][idioma])
  console.log("3.-" +idiomasArray[3][idioma])
  console.log("\n")


  // llama la funcion input que devuelve el input del usuario
  let variable_input = input();

  //imprime una linea de -----
  lineaSeparadora();

  //en el caso de escojer la tercera opcion del menu -> 3.- Idiomas
  if(variable_input == 3)
    
    console.log("1.-"+ idiomasArray[4][idioma]);
    console.log("2.-" +idiomasArray[5][idioma]);

    // llama la funcion input que devuelve el input del usuario
    let variable_inputinput = input();

    if(variable_inputinput == 1){
      console.log('Apretaste seleccionar idioma');
      
      
    }
    if(variable_inputinput == 2){
      console.log('Apretaste actualizar lista de idiomas');
      
      
    }

  

}

//inicia el programa
menu();
