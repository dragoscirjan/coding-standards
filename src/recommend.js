
/**
 * Overiew Component
 */
 export class Component {

   /**
    * Page Heading
    * @type {String}
    */
   heading = 'Recommended Tools';

   configureRouter(config, router) {
     config.map([
       { route: ['', 'overview'],  name: 'rec-overview',     moduleId: 'recommend/00.overview',     nav: true, title: 'Overview' },
       { route: ['ide'],           name: 'rec-ide',          moduleId: 'recommend/05.ide',          nav: true, title: 'IDEs' },
       { route: ['ide-plugins'],   name: 'rec-ide-plugins',  moduleId: 'recommend/06.ide-plugins',  nav: true, title: 'IDEs / Plugins' },
       { route: ['fwk'],           name: 'rec-fwk',          moduleId: 'recommend/10.fwk',          nav: true, title: 'Frameworks' },
       { route: ['fwk-ut'],        name: 'rec-fwk-ut',       moduleId: 'recommend/11.fwk-ut',       nav: true, title: 'Frameworks / Unit Testing' },
       { route: ['ci'],            name: 'rec-ci',           moduleId: 'recommend/20.ci',           nav: true, title: 'Continious Integration' },
       { route: ['design'],        name: 'rec-design',       moduleId: 'recommend/30.design',       nav: true, title: 'Design' },
       { route: ['design-repo'],   name: 'rec-design-repo',  moduleId: 'recommend/31.design-repo',  nav: true, title: 'Design / Image Repository' }
     ]);

     this.router = router;
   }
 }
// "isagalaev/highlight.js": "github:isagalaev/highlight.js@9.2.0",\  \
