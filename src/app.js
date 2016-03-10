export class App {
  configureRouter(config, router) {
    config.title = 'Coding Standars';
    config.map([
      { route: ['', 'overview'],   name: 'overview',         moduleId: 'overview',         nav: true, title: 'Overview' },
      { route: 'file-formating',   name: 'file-formating',   moduleId: 'file-formating',   nav: true, title: 'File Formating' },
      { route: 'coding-style',     name: 'coding-style',     moduleId: 'coding-style',     nav: true, title: 'Coding Style' }
    ]);

    this.router = router;
  }
}
