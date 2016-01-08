<<<<<<< HEAD

=======
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae
(function($){

    var liItemCount = 1;

    $('.lang-ex').each(function(){
        var $this = $(this),
            $ul = $('<ul class="nav nav-tabs" role="tablist"></ul>'),
            $div = $('<div class="tab-content"></div>'),
            liFirstItem = liItemCount;


        $this.find('h5').each(function(){
            var $li = $('<li role="presentation"><a href="#li-item-' + liItemCount +
                    '" aria-controls="li-item-' + liItemCount + '" role="tab" data-toggle="tab"></a></li>'),
                $dv = $('<div role="tabpanel" class="tab-pane" id="li-item-' + (liItemCount++) + '"></div>'),
                $d = null,
                count = 0;
<<<<<<< HEAD

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
=======
            $li.find('a').html(this.innerHTML);
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae
            while (count < 50) {
                $d = ($d && $d.length) ? $d.next() : $(this).next();
                if (!$d || $d.prop('tagName') == 'H5') {
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
<<<<<<< HEAD
    });

    $('pre > code').each(function(i, block) {
        var $code = $(block);
        if ($code.hasClass('lang-cfml')) {
            $code.addClass('lang-xml');
        }

        hljs.highlightBlock(block);
    });

    $('.nav-tabs[role=tablist]').each(function(i, navtab) {
        $(navtab).find('a').not('.disabled').filter(':first').trigger('click');
=======
        // $ul.find('a').click(function(){
        //     $(this).tab('show');
        // }).filter(':first').tab('show');
>>>>>>> dcfa662cc3e1a0f5a06028b7278b83e14ce4d9ae
    });

})(jQuery);
