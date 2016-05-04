
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
       { route: ['', 'overview'],     name: 'csh-overview',     moduleId: 'style-html/00.overview',     nav: false, title: 'Overview' },
       { route: ['', 'specificity'],  name: 'csh-specificity',  moduleId: 'style-html/05.specificity',  nav: true, title: 'Specificity' },
       { route: 'formatting',         name: 'csh-formatting',   moduleId: 'style-html/10.formatting',   nav: true, title: 'Formatting' },
       { route: 'pseudo',             name: 'csh-pseudo',       moduleId: 'style-html/15.pseudo',       nav: true, title: 'Pseudo Elements and Classes' },
       { route: 'units',              name: 'csh-arrays',       moduleId: 'style-html/16.units',        nav: true, title: 'Units' },
       { route: 'nesting',            name: 'csh-nesting',      moduleId: 'style-html/20.nesting',      nav: true, title: 'Nesting' },
       { route: 'components',         name: 'csh-components',   moduleId: 'style-html/30.components',   nav: true, title: 'Components' },
       { route: 'utilities',          name: 'csh-utilities',    moduleId: 'style-html/40.utilities',    nav: true, title: 'Utilities' },
       { route: 'variables',          name: 'csh-variables',    moduleId: 'style-html/50.variables',    nav: true, title: 'Variables &\ Mixins' },
       { route: 'polyfills',          name: 'csh-polyfills',    moduleId: 'style-html/60.polyfills',    nav: true, title: 'Polyfills' },
       { route: 'folders',            name: 'csh-folders',      moduleId: 'style-html/70.folders',      nav: true, title: 'Folder Structure' }
     ]);

     this.router = router;
   }
 }
// "isagalaev/highlight.js": "github:isagalaev/highlight.js@9.2.0",\  \
