import fs from 'fs';
import xmlJs from 'xml-js';

export default async function handler(req, res) {
  const xmlData = fs.readFileSync('../data/mockData.xml', 'utf8');
  const jsonData = xmlJs.xml2js(xmlData, { compact: true, ignoreComment: true });
  res.json(jsonData);
}