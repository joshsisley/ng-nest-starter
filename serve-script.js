const { LiveReloadCompiler } = require("@nestjs/ng-universal");

const compiler = new LiveReloadCompiler({
  projectName: "ng-nest-starter-demo"
});
compiler.run();
