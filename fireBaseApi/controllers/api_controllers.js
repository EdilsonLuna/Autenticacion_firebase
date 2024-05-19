//import { Request, Response } from 'express';
import {auth} from '../firebase_config.js';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import ExcelJS from 'exceljs';

export const registerNewUser = async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password);
        return res.status(200).json({"status" : "ok","userCredentials":userCredentials});
    } catch (error) {
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
        return res.status(200).json({"status" : "ok","userCredentials":userCredentials});
    } catch (error) {
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
    let nombreArchivo = "Recibos.xlsx";
    
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Estudiantes');
    sheet.addRows(datos);
    const stream = await workbook.xlsx.writeBuffer();
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);

    // Enviar el contenido del archivo como respuesta
    res.send(stream);
}