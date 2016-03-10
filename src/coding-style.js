
/**
 * Overiew Component
 */
 export class Component {
   heading = 'Coding Style';

   configureRouter(config, router) {
     config.map([
       { route: ['', 'overview'], name: 'cs-overview', moduleId: 'coding-style/overview', nav: true, title: 'Overview' },
       { route: 'code-demarcation',         name: 'cs-code-demarcation',         moduleId: 'coding-style/code-demarcation',         nav: true, title: 'Code Demarcation' },
       { route: 'control-statements',         name: 'cs-control-statements',         moduleId: 'coding-style/control-statements',         nav: true, title: 'Control Statements' },
       { route: 'strings',         name: 'cs-strings',         moduleId: 'coding-style/strings',         nav: true, title: 'Strings' },
       { route: 'arrays',         name: 'cs-arrays',         moduleId: 'coding-style/arrays',         nav: true, title: 'Arrays' },
       { route: 'classes',         name: 'cs-classes',         moduleId: 'coding-style/classes',         nav: true, title: 'Classes' },
       { route: 'class-methods',         name: 'cs-class-methods',         moduleId: 'coding-style/class-methods',         nav: true, title: 'Class Methods' },
       { route: 'inline-documentation',         name: 'cs-inline-documentation',         moduleId: 'coding-style/inline-documentation',         nav: true, title: 'Inline Documentation' }
     ]);

     this.router = router;
   }
 }
