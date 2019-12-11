import fs from 'fs';

export const readLines = (path) => {
  const content = fs.readFileSync(`./src/${path}`).toString('utf8');

  return content.split('\n');
};
