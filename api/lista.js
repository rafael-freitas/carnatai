import fs, { write } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function GET(request) {
  // Caminho para o arquivo JSON
  const filePath = path.join(process.cwd(), 'lista.json');

  // let lista = JSON.parse(fs.readlinkSync('./api/lista.json'))
  // Ler o conteúdo do JSON
  const lista = JSON.parse(await readFile(filePath, 'utf8'));

  return new Response(JSON.stringify(lista));
}