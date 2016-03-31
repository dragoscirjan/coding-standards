
/**
 * Overiew Component
 */
 export class Component {

   /**
    * Page Heading
    * @type {String}
    */
   heading = 'Coding Style';

   configureRouter(config, router) {
     config.map([
       // { route: ['', 'overview'],        name: 'cs-overview',              moduleId: 'style/00.overview',              nav: true, title: 'Overview' },
       { route: ['', 'code-demarcation'],  name: 'cs-code-demarcation',      moduleId: 'style/05.code-demarcation',      nav: true, title: 'Code Demarcation' },
       { route: 'code-demarcation',        name: 'cs-code-demarcation',      moduleId: 'style/05.code-demarcation',      nav: true, title: 'Code Demarcation' },
       { route: 'control-statements',      name: 'cs-control-statements',    moduleId: 'style/10.control-statements',    nav: true, title: 'Control Statements' },
       { route: 'strings',                 name: 'cs-strings',               moduleId: 'style/15.strings',               nav: true, title: 'Strings' },
       { route: 'arrays',                  name: 'cs-arrays',                moduleId: 'style/20.arrays',                nav: true, title: 'Arrays' },
       { route: 'functions',               name: 'cs-functions',             moduleId: 'style/40.functions',             nav: true, title: 'Functions' },
       { route: 'classes',                 name: 'cs-classes',               moduleId: 'style/45.classes',               nav: true, title: 'Classes' },
       { route: 'class-methods',           name: 'cs-class-methods',         moduleId: 'style/50.class-methods',         nav: true, title: 'Class Methods' },
       { route: 'inline-documentation',    name: 'cs-inline-documentation',  moduleId: 'style/80.inline-documentation',  nav: true, title: 'Inline Documentation' }
     ]);

     this.router = router;
   }
 }
// "isagalaev/highlight.js": "github:isagalaev/highlight.js@9.2.0",\  \
