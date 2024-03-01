const axios = require('axios');
const fs = require('fs');
const path = require('path');

const ignoredComponents = [
  'breakpoints',
  'typography',
  'colors',
  'icons',
  'avatar',
  'badge',
  'chip',
  'logo',
  'pillbutton',
  'pilloption',
  'switch',
  'textlink',
  'phonenumberinput'
];

const discoverFolder = '../../design-system/src/components';

const outputFolder = discoverFolder + '/stories';
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Figma API token (replace with your token)
const figmaApiToken = 'figd_nvMK2lhfw2vxgGhE-kzJikDMcI66GmCfX9wJaeOK';

// Figma file key (replace with your file key)
const figmaFileKey = 'l2mfmKnw7R89TAfSaz4p0O';

async function main() {
  // Endpoint to get the Figma file's components
  const figmaApiEndpoint = `https://api.figma.com/v1/files/${figmaFileKey}/components`;

  // Axios configuration
  const axiosConfig = {
    method: 'get',
    url: figmaApiEndpoint,
    headers: {
      'X-Figma-Token': figmaApiToken
    }
  };

  // Make the API request
  axios(axiosConfig)
    .then((response) => {
      const figResponse = response.data.meta.components;

      // Extract component names and embed URLs
      const figMapSource = figResponse
        .map((component) => ({
          name: component.name
            .replaceAll(/ /g, '')
            .replaceAll(/=/g, '')
            .replaceAll(/\//g, ''),
          embedUrl: `https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D${
            component.node_id.split(':')[0]
          }%253A${component.node_id.split(':')[1]}%26mode%3Ddev`,
          frame: component.containing_frame.name
        }))
        .filter(
          (component) =>
            component.frame === 'Components' &&
            !component.name.includes('State') &&
            !component.name.includes('Status')
        );

      let figmaMap = {};
      let flpMap = {};
      const unUsed = {};
      // Map components to their names, clip the name to any numeric value that appears in the name, then filter out any duplicate components. return unique component names
      figMapSource.forEach((component) => {
        let componentName = component.name;
        const numIndex = componentName.search(/[0-9]/g);
        if (numIndex === -1) {
          figmaMap[componentName.toLowerCase()] = false;
        } else {
          componentName = componentName.substring(0, numIndex).toLowerCase();
          if (componentName) {
            figmaMap[componentName] = false;
          }
        }
      });

      // Build components with Felpo Already
      const flpMapSource = fs
        .readFileSync(
          '/Users/aali/projects/ff/fanfix-frontend/libs/design-system/src/lib.tsx',
          (encoding = 'utf8')
        )
        .split('\n');
      flpMapSource.forEach((file) => {
        if (file.includes('//')) {
          // Ignore
          return;
        }
        const componentName = file
          .split('/')
          .slice(-1)[0]
          .replaceAll(/["';]/g, '');
        flpMap[componentName.toLowerCase()] = [];
      });
      Object.keys(flpMap).forEach((flpKey) => {
        // if Key includes any of the flp components keys. Mark the flp component as true and add the flp component to the figma component array
        Object.keys(figmaMap).forEach((figKey) => {
          if (figKey.includes(flpKey)) {
            flpMap[flpKey].push(figKey);
            figmaMap[figKey] = true;
          }
        });
        // Get the unused components
        let i = 0;
        Object.keys(figmaMap).forEach((figKey) => {
          if (!figmaMap[figKey] && !ignoredComponents.includes(figKey)) {
            unUsed[figKey] = 'dummy';
          }
        });
      });
      // Write to file in the current folder
      fs.writeFileSync(
        `figma-map.json`,
        JSON.stringify({ ...flpMap, unUsed: Object.keys(unUsed) }, null, 2)
      );
    })
    .catch((error) => {
      console.error('❌ Error fetching Figma components:', error);
    });
}

main();
