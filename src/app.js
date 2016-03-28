export class App {
  configureRouter(config, router) {
    config.title = 'Coding Standars';
    config.map([
      { route: ['', 'overview'], name: 'overview',    moduleId: 'overview',    nav: true, title: 'Overview' },
      { route: 'formating',      name: 'formating',   moduleId: 'formating',   nav: true, title: 'File Formating' },
      { route: 'naming',         name: 'naming',      moduleId: 'naming',      nav: true, title: 'Naming Convetions' },
      { route: 'style',          name: 'style',       moduleId: 'style',       nav: true, title: 'Coding Style' },
      { route: 'style-html',     name: 'style-html',  moduleId: 'style-html',  nav: true, title: 'Coding Style (HTML)' },
      { route: 'recommend',      name: 'recommend',   moduleId: 'recommend',   nav: true, title: 'Recommended Tools' }
    ]);

    this.router = router;
  }
}
