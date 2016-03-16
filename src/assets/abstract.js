
import 'isagalaev/highlight.js/src/highlight';

export class Component {

  attached() {
    let liItemCount = 1;

    $('.lang-ex').each(function() {
      let $this = $(this);
      let $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>');
      let $div = $('<div class="tab-content"></div>');
      // let liFirstItem = liItemCount;

      $this.find('h5').each(function() {
        let $li = $(`<li role="presentation"><a href="#li-item-$[liItemCount]" aria-controls="li-item-${liItemCount}" role="tab" data-toggle="tab"></a></li>`);
        let $dv = $(`<div role="tabpanel" class="tab-pane" id="li-item-${liItemCount++}"></div>`);
        let $d = null;
        let count = 0;

        if (!this.innerHTML.match(/TODO/)) {
          $li.find('a').html(this.innerHTML);
        } else {
          $li.find('a')
          .addClass('disabled')
          .attr('data-toggle', '')
          .tooltip({
            title: 'Content not available. Care to help designing it?'
          })
          .html(this.innerHTML.replace(/\s*TODO\s*/, ''));
        }
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

      $this.html('');
      $this.append($ul);
      $this.append($div);

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
