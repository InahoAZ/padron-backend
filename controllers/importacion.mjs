import {saveCSV} from '../services/importadorCSV.mjs'

function test(req, res){
    return res.send('Hola');
}

function importData(req, res){
    console.log('ARCHIVO RECIBIDO');
    //validar la request
    //Si los datos provienen de un archivo .csv uso el servicio importadorCSV
    saveCSV(req)
    
    return res.status(200);
}


export default {importData};