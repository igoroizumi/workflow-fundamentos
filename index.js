const core = require{'@actions/core'}

try {
  const meuInout = core.getInput{'my-input'}
  console.log('Hello ${meuinput}')
  core.setOutput("my-output", 'Hello ${meuInput}!');
} cath (error) {
  core.setFailed('Ação falhou com erro: ${error.message}');
}
