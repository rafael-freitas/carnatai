import fs, { write } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import clientPromise from '../lib/mongodb.js';

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db('carnatai');

  let url = new URL(request.url)

  let cel = url.searchParams.get('cel')
  let local = url.searchParams.get('local')

  // Caminho para o arquivo JSON
  // const filePath = path.join(process.cwd(), 'lista.json');


  const convidado = await db.collection('convidados').findOne({ cel: cel });
  

  // let lista = JSON.parse(fs.readlinkSync('./api/lista.json'))
  // Ler o conteúdo do JSON
  // const lista = JSON.parse(await readFile(filePath, 'utf8'));

  // let convidado = lista.find(row => row.cel === cel)
    
  // Enviar o conteúdo como resposta
  // console.log("🚀 ~ GET ~ lista:", lista)
  // console.log("🚀 ~ GET ~ lista:", lista, convidado)

  let response = {}

  if (convidado) {
    convidado.confirmado = true
    convidado.retirada = local
    // await writeFile(filePath, JSON.stringify(lista, null, 2))
    let result = await db.collection('convidados').updateOne({ cel: cel }, {
      $set: convidado
    });
    response.status = 'ok'
    response.data = convidado
  }
  else {
    response.status = 'error'
    response.error = 'Convidado não encontrado!'
  }
  return new Response(JSON.stringify(response));
}