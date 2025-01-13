import fs, { write } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function GET(request) {
  let url = new URL(request.url)
  console.log(request, url)

  let cel = url.searchParams.get('cel')
  let local = url.searchParams.get('local')

  // Caminho para o arquivo JSON
  const filePath = path.join(process.cwd(), 'lista.json');

  // let lista = JSON.parse(fs.readlinkSync('./api/lista.json'))
  // Ler o conteúdo do JSON
  const lista = JSON.parse(await readFile(filePath, 'utf8'));

  let convidado = lista.find(row => row.cel === cel)
    
  // Enviar o conteúdo como resposta
  // console.log("🚀 ~ GET ~ lista:", lista)
  // console.log("🚀 ~ GET ~ lista:", lista, convidado)

  let response = {}

  if (convidado) {
    convidado.confirmado = true
    convidado.retirada = local
    await writeFile(filePath, JSON.stringify(lista, null, 2))
    response.status = 'ok'
    response.data = convidado
  }
  else {
    response.status = 'error'
    response.error = 'Convidado não encontrado!'
  }
  return new Response(JSON.stringify(response));
}