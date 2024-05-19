//import { Request, Response } from 'express';
import {auth} from '../firebase_config.js';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import ExcelJS from 'exceljs';
import fs from 'fs';

export const registerNewUser = async(req,res)=>{
    console.log("entra en el endpoint del api");
    console.log("cuerpo de la peticion",req.body.password, req.body.email);
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
        console.log("credenciales",userCredentials);
        return res.status(200).json({"status" : "ok","userCredentials":userCredentials});
    } catch (error) {
        console.log("error", error.code);
        const errorJson = {
            "status" : "error",
            "errorcode": "404",
            "error" : "Bad request",
            "message" : error
        }
        return res.status(400).json(errorJson);
    }
}

export const loginUser = async (req,res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userCredentials = await signInWithEmailAndPassword(auth,email,password);
        console.log("credenciales",userCredentials);
        return res.status(200).json({"status" : "ok","userCredentials":userCredentials});
    } catch (error) {
        console.log("error", error.code);
        const errorJson = {
            "status" : "error",
            "errorcode": "404",
            "error" : "Bad request",
            "message" : error
        }
        return res.status(400).json(errorJson);
    }
}

export const downloadExcel = async(req,res) =>{
    let datos = [["NUM RECIBO", "NOMBRE", "CEDULA", "VALOR"]];
    datos.push(["1057","Mariana Dueñas", "1095109510","1500000"]);
    datos.push(["1058","Fernando Esparza", "1095109510","117000"]);
    datos.push(["1059","Martin Wilches", "1095109510","143000"]);

     console.log(datos)
    let nombreArchivo = "Empenos.xlsx";
    
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Estudiantes');
    sheet.addRows(datos);
    // Escribir el archivo en un stream
    const stream = await workbook.xlsx.writeBuffer();
    // Establecer los encabezados de la respuesta para que el navegador reconozca el tipo de archivo
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);

    // Enviar el contenido del archivo como respuesta
    res.send(stream);
    // await workbook.xlsx.writeFile(nombreArchivo);
    //return res.status(200).json({"status":"ok"});
}