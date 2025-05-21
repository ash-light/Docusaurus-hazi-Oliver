const path = require('path');
const { generateDocs } = require('docusaurus-plugin-openapi-docs/lib/markdown');

generateDocs({
  openapiPath: path.resolve(__dirname, '../openapi/petstore-api.yaml'), // <-- fájlod helye
  outputDir: path.resolve(__dirname, '../docs/petstore'),           // <-- ide menti a .md fájlokat
  sidebarOptions: {
    groupPathsBy: 'tag',
    categoryLinkSource: 'info',
  },
});