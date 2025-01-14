// import fs, { write } from 'fs';
// import { readFile, writeFile } from 'fs/promises';
// import path from 'path';
import clientPromise from '../lib/mongodb.js';

export async function GET(request) {
  const client = await clientPromise;
  const db = client.db('carnatai');

  // Caminho para o arquivo JSON
  // const filePath = path.join(process.cwd(), 'lista.json');

  // let lista = JSON.parse(fs.readlinkSync('./api/lista.json'))
  // Ler o conteúdo do JSON
  // const lista = JSON.parse(await readFile(filePath, 'utf8'));

  const lista = await db.collection('convidados').find({}).toArray();
  // console.log("🚀 ~ GET ~ lista:", lista)

  return new Response(JSON.stringify(lista));
}