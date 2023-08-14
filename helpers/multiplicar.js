const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        const texto = 'tabla-'
        //const base = 5;
        const tabla = texto + base;
        let salida = '';    
        
        for (let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i }\n`;   
        }
        if ( listar ) {
            console.log(colors.trap("=============================================="));
            console.log(colors.red("================Tabla de :", base, "================="));
            console.log(colors.trap("=============================================="));
            console.log(salida.rainbow);            
        }        
    
        // fs.writeFile( `${ tabla }.txt`, salida, (err) => {
        //     if (err) throw err;
    
        //     console.log(`${ tabla }.txt creada`);
        // })
    
        fs.writeFileSync( `./exit/${ tabla }.txt`, salida);
    
        //console.log(`${ tabla }.txt creada`);
        return `${ tabla }.txt`;
        
    } catch (err) {
        throw err;
    }
}

module.exports = { crearArchivo }