
// import * as hljs from 'isagalaev/highlight.js/src/highlight';
import * as hljs from 'highlight.js';
// import 'isagalaev/highlight.js/src/languages/javascript';

export class Component {

  attached() {
    let liItemCount = 1;

    // Within .lang-ex elements
    // create tabs from h5 elements, and the content after it
    $('.lang-ex').each(function() {
      let $this = $(this);
      let $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>');
      let $div = $('<div class="tab-content"></div>');
      // let liFirstItem = liItemCount;
      $this.find('h5').each(function() {
        let $li = $(`<li role="presentation"><a href="#li-item-${liItemCount}" aria-controls="li-item-${liItemCount}" role="tab" data-toggle="tab"></a></li>`);
        let $dv = $(`<div role="tabpanel" class="tab-pane example-pane" id="li-item-${liItemCount++}"></div>`);
        let $d = null;
        let count = 0;

        $li.find('a').html(this.innerHTML.replace(/\s*TODO\s*/, ''));

        while (count < 50) {
          $d = ($d && $d.length) ? $d.next() : $(this).next();
          if (!$d || $d.prop('tagName') === 'H5') {
            break;
          }
          $dv.append($d);
          count ++;
        }
        $ul.append($li);
        $div.append($dv);
      });

      $this.html('').append($ul).append($div);
      $ul.find('li:first').addClass('active');
      $div.find('div:first').addClass('active');
    });

    // Within .lang-ex elements
    // create tabs from h5 elements, and the content after it
    $('.lang-ex .example-pane').each(function() {
      let $this = $(this);
      let $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>');
      let $div = $('<div class="tab-content"></div>');

      if ($this.find('h6').length == 0) {
        return;
      }

      // let liFirstItem = liItemCount;
      $this.find('h6').each(function() {
        let $li = $(`<li role="presentation"><a href="#li-item-${liItemCount}" aria-controls="li-item-${liItemCount}" role="tab" data-toggle="tab"></a></li>`);
        let $dv = $(`<div role="tabpanel" class="tab-pane" id="li-item-${liItemCount++}"><div class="code-pane"></div></div>`);
        let $d = null;
        let count = 0;

        $li.find('a').html(this.innerHTML.replace(/\s*TODO\s*/, ''));

        while (count < 50) {
          $d = ($d && $d.length) ? $d.next() : $(this).next();
          if (!$d || $d.prop('tagName') === 'H6') {
            break;
          }
          $dv.find('.code-pane').append($d);
          count ++;
        }
        $ul.append($li);
        $div.append($dv);
      });

      $this.html('').append($ul).append($div);
      $ul.find('li:first').addClass('active');
      $div.find('div:first').addClass('active');
    });

    $('pre > code').each(function(i, block) {
      let $code = $(block);
      if ($code.hasClass('lang-cfml')) {
        $code.addClass('lang-xml');
      }

      hljs.highlightBlock(block);
    });

    $('.nav-tabs[role=tablist]').each(function(i, navtab) {
      $(navtab).find('a').not('.disabled').filter(':first').trigger('click');
    });
  }

}
