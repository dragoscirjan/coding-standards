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
            $li.find('a').html(this.innerHTML);
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
        // $ul.find('a').click(function(){
        //     $(this).tab('show');
        // }).filter(':first').tab('show');
    });

})(jQuery);
