import fs from 'fs';
import path from 'path';
import { isEmpty } from 'lodash';
import { Api } from './interface/route';
export default async function getRoutes() {
  const dirPath = path.join(__dirname, '../routes');
  const data: { [k: string]: Api[] } = {};
  fs.readdirSync(dirPath).forEach(async (route) => {
    const apiData: Api[] = [];
    const filePath = path.join(dirPath, route);
    fs.readdirSync(filePath).forEach(async (fileApi) => {
      const filePathApi = path.join(filePath, fileApi, '/api');
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const fileData: Api = require(filePathApi).default;
      if (!isEmpty(fileData)) {
        apiData.push(fileData);
      }
    });

    data[route] = apiData;
  });
  return data;
}
