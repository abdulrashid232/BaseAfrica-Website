const fs = require('fs');
const path = require('path');

const envFolder = path.join(__dirname, '../src/environments');

// Helper function to strip unwanted quotes from the values
const cleanEnvVar = (val) => {
  if (!val) return '';
  // Removes leading/trailing single quotes, double quotes, and trailing commas
  return val.replace(/^['"\s]+|['"\s,]+$/g, '').trim();
};

const publicKeyClean = cleanEnvVar(process.env.PUBLIC_KEY);
const serviceIdClean = cleanEnvVar(process.env.SERVICE_ID);
const templateIdClean = cleanEnvVar(process.env.TEMPLATE_ID);

console.log('=== VERCEL ENVIRONMENT VARIABLE CHECK ===');
console.log('Is PUBLIC_KEY defined in Vercel?:', publicKeyClean ? '✅ YES' : '❌ NO');
console.log('Is SERVICE_ID defined in Vercel?:', serviceIdClean ? '✅ YES' : '❌ NO');
console.log('Is TEMPLATE_ID defined in Vercel?:', templateIdClean ? '✅ YES' : '❌ NO');
console.log('==========================================');

// Notice the clean inline formatting here
const devEnvContent = `export const environment = {
  production: false,
  publicKey: '${publicKeyClean}',
  serviceId: '${serviceIdClean}',
  templateId: '${templateIdClean}'
};
`;

const prodEnvContent = `export const environment = {
  production: true,
  publicKey: '${publicKeyClean}',
  serviceId: '${serviceIdClean}',
  templateId: '${templateIdClean}'
};
`;

if (!fs.existsSync(envFolder)) {
  fs.mkdirSync(envFolder, { recursive: true });
}

fs.writeFileSync(path.join(envFolder, 'environment.ts'), devEnvContent);
fs.writeFileSync(path.join(envFolder, 'environment.prod.ts'), prodEnvContent);

console.log('Angular environments generated successfully with clean string templates!');