import mongoose from 'mongoose'

const url = 'mongodb://localhost/idiomas_db'

//BASE DE DATOS IDIOMA
//-------------------------------------------------------------------



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
      
      console.log(configuracion);

  } catch (error) {
      console.error('Error al mostrar configuraciones:', error);
  }
};

mostrar_configuracion();





