// Debugging utility for deployment issues

export function logDeploymentInfo() {
  console.log('Deployment Information:');
  console.log('-------------------');
  console.log(`Angular Version: ${require('@angular/core/package.json').version}`);
  console.log(`Node Version: ${process.version}`);
  console.log(`Platform: ${process.platform}`);
  console.log(`Architecture: ${process.arch}`);
  console.log('-------------------');
}

// Call this function in main.ts or app.component.ts to log info
logDeploymentInfo();
