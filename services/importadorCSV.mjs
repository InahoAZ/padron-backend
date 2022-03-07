/**
*Servicio que importa los datos de votantes de una unidad academica y claustro a partir de un archivo .csv 
*lo registra en la base de datos y se guarda en el filesystem para ser procesado posteriormente.
**/

import express from "express";
import multer from "multer";
import loteImportacionDb from '../db/loteImportacionDb.mjs'

//Se establece el "controlador" del filesystem estableciendo el directorio y patron de los nombres de archivos
let csv_storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, '/lote_importacion')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname);
    }
})

//Guarda archivo recibido en el filesystem y crea un registro en la bd
async function save_csv(){
    //Guardo el archivo recibido en el filesystem

    //Registro en la base de datos..
}

export default save_csv;