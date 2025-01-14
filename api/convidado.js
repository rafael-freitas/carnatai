import { readFile, writeFile } from 'fs/promises';
import path from 'path';
// import { createBlob } from '@vercel/blob';
import clientPromise from '../lib/mongodb.js';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('carnatai');

    console.log('Conexão bem-sucedida!');

    let url = new URL(request.url)
    // console.log(request, url)

    let cel = url.searchParams.get('cel')
    // console.log("🚀 ~ GET ~ cel:", cel)

    const convidado = await db.collection('convidados').findOne({ cel: cel });

    // Caminho para o arquivo JSON
    // const filePath = path.join(process.cwd(), 'lista.json');

    // let lista = JSON.parse(fs.readlinkSync('./api/lista.json'))
    // Ler o conteúdo do JSON
    // const lista = JSON.parse(await readFile(filePath, 'utf8'));

    // let convidado = lista.find(row => row.cel === cel)
      
    // Enviar o conteúdo como resposta
    // console.log("🚀 ~ GET ~ lista:", lista)
    // console.log("🚀 ~ GET ~ lista:", lista, convidado)

    let response = {}

    if (convidado) {
      // convidado.confirmado = true
      // await writeFile(filePath, JSON.stringify(lista, null, 2))
      response.status = 'ok'
      response.data = convidado
    }
    else {
      response.status = 'error'
      response.error = 'Convidado não encontrado!'
    }
    return new Response(JSON.stringify(response));
    
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error);
    const response = {}
    response.status = 'error'
    response.error = error.message
    return new Response(JSON.stringify(response));
  }
  
}