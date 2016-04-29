
/**
 * Overiew Component
 */
 export class Component {

   /**
    * Page Heading
    * @type {String}
    */
   heading = 'Coding Style (HTML/CSS)';

   configureRouter(config, router) {
     config.map([
       // { route: ['', 'overview'],        name: 'csh-overview',              moduleId: 'style-html/00.overview',              nav: true, title: 'Overview' },
       { route: ['', 'code-demarcation'],  name: 'csh-code-demarcation',      moduleId: 'style-html/05.code-demarcation',      nav: true, title: 'Code Demarcation' },
       // { route: 'code-demarcation',        name: 'csh-code-demarcation',      moduleId: 'style-html/05.code-demarcation',      nav: true, title: 'Code Demarcation' },
       { route: 'control-statements',      name: 'csh-control-statements',    moduleId: 'style-html/10.control-statements',    nav: true, title: 'Control Statements' },
       { route: 'strings',                 name: 'csh-strings',               moduleId: 'style-html/15.strings',               nav: true, title: 'Strings' },
       { route: 'arrays',                  name: 'csh-arrays',                moduleId: 'style-html/20.arrays',                nav: true, title: 'Arrays' },
       // { route: 'functions',               name: 'csh-functions',             moduleId: 'style-html/40.functions',             nav: true, title: 'Functions' },
       { route: 'classes',                 name: 'csh-classes',               moduleId: 'style-html/45.classes',               nav: true, title: 'Classes' },
       { route: 'methods',                 name: 'csh-class-methods',         moduleId: 'style-html/50.class-methods',         nav: true, title: 'Functions & Methods' },
       { route: 'inline-documentation',    name: 'csh-inline-documentation',  moduleId: 'style-html/80.inline-documentation',  nav: true, title: 'Inline Documentation' } 
     ]);

     this.router = router;
   }
 }
// "isagalaev/highlight.js": "github:isagalaev/highlight.js@9.2.0",\  \
