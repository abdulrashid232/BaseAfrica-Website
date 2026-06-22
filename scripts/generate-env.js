const fs = require('fs');
const path = require('path');

const envFolder = path.join(__dirname, '../src/environments');

// 🔍 LOGGER: Check what keys Vercel is actually passing to the Node compiler
console.log('=== VERCEL ENVIRONMENT VARIABLE CHECK ===');
console.log('Is PUBLIC_KEY defined in Vercel?:', process.env.PUBLIC_KEY ? '✅ YES' : '❌ NO (Check Vercel Dashboard Settings)');
console.log('Is SERVICE_ID defined in Vercel?:', process.env.SERVICE_ID ? '✅ YES' : '❌ NO');
console.log('Is TEMPLATE_ID defined in Vercel?:', process.env.TEMPLATE_ID ? '✅ YES' : '❌ NO');
console.log('==========================================');

const commonFields = `
  publicKey: '${process.env.PUBLIC_KEY || ""}',
  serviceId: '${process.env.SERVICE_ID || ""}',
  templateId: '${process.env.TEMPLATE_ID || ""}',
`;

const devEnvContent = `export const environment = {
  production: false,${commonFields}};
`;

const prodEnvContent = `export const environment = {
  production: true,${commonFields}};
`;

if (!fs.existsSync(envFolder)) {
  fs.mkdirSync(envFolder, { recursive: true });
}

fs.writeFileSync(path.join(envFolder, 'environment.ts'), devEnvContent);
fs.writeFileSync(path.join(envFolder, 'environment.prod.ts'), prodEnvContent);

console.log('Angular environments generated successfully!');