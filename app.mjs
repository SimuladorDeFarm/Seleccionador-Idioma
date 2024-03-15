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

  let var_config;
  mongoose.connect(url, {

  })
    .then(()=> console.log('CONECTADO A MONGO 2'))
    .catch( (e)=> console.log('El error de conexion es: ' + e))

    const configSchema = mongoose.Schema({
    
      id: Number,
      config: String
     
  
  }, {versionKey: false})

  const configModel =  mongoose.model('confidiomas', configSchema)


  let configuracionArray = {}
  const mostrar_configuracion = async () => {
    try {
        const configuracion = await configModel.find();
        configuracionArray = configuracion.map(config1 => ({
        

    
            config: config1.config
            
        }));
        
        //imprimir();
        //console.log(configuracionArray[1].config);

    } catch (error) {
        console.error('Error al mostrar configuraciones:', error);
    }
};

const imprimir = async () =>{
  const confIdiomas = await configModel.find()
  console.log(confIdiomas)
}


    //editar
    const actualizar = async (id, var_config)=>{
      const confIdiomas = await configModel.updateOne({_id:id},
          {
            
              $set:{
                  config: var_config
                  
              }
              
          }
          
          )
  }




  //establece que idioma se usará, idiomasArray[i][idioma]
  // i es igual al id de la frase, identifica que frase debe colocar
  //idioma es la variable idioma y establace el idioma de la frase



  //await mostrar_configuracion();
  //await actualizar('65f11bdd31728073c0bcf3ef');
  //imprimir();

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


//esta funcion le pregunta al usario que idioma quiere usar 
//y al escojer modifica la base de datos colocando ese idioma como el ultimo escogido
async function menuTest(){

  await mostrar_configuracion();
  await mostrar();

  console.log('1.- Espannol')
  console.log('2.- Ingles')

  let variable_input = input();

  if(variable_input == 1){
    var_config = 'espannol'
    console.log('escogiste espannol')
  }
  if(variable_input == 2){
    var_config = 'ingles'
    console.log('escogiste ingles')
  }

 
  lineaSeparadora();
  await actualizar('65f11bdd31728073c0bcf3ef', var_config);
  
  imprimir();
}

// funcion menu() es la primera en ejecutarse
async function menu(){
  
  let on = true;
  while(on){
    
  
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
  console.log("4.- salir")
  console.log("\n")

  
  // llama la funcion input que devuelve el input del usuario
  let variable_input = input();

  //imprime una linea de -----
  lineaSeparadora();

  //en el caso de escojer la tercera opcion del menu -> 3.- Idiomas
  if(variable_input == 3){
    
    console.log("1.-"+ idiomasArray[4][idioma]);
    console.log("2.-" +idiomasArray[5][idioma]);

    // llama la funcion input que devuelve el input del usuario
    let variable_input2 = input();
    
    if(variable_input2 == 1){
      
    
      console.log('1.- Espannol')
      console.log('2.- Ingles')
    
      let variable_input3 = input();
    
      if(variable_input3 == 1){
        var_config = 'espannol'
        console.log('escogiste espannol')
      }
      if(variable_input3 == 2){
        var_config = 'ingles'
        console.log('escogiste ingles')
      }
    
     
      lineaSeparadora();
      await actualizar('65f11bdd31728073c0bcf3ef', var_config);
      
      
    }
    if(variable_input2 == 2){
      console.log('Apretaste actualizar lista de idiomas');
      
      
    }
  }
  if(variable_input == 4){

    process.exit();
  }
  }
 
}

//inicia el programa

menu();
//menuTest()
