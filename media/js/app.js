(function($) {
    var jQT = $.jQTouch({
        'icon': 'media/img/icon-iphone4.png',
        'addGlossToIcon': false,
        'startupScreen': 'media/img/startup-iphone.png',
        'statusBar': 'black',
        'preloadImages': [
            'media/js/lib/jQTouch/themes/jqt/img/back_button_clicked.png',
            'media/js/lib/jQTouch/themes/jqt/img/button_clicked.png'
        ],
        'useFastTouch': true
    });
    
    var scheduleRowTemplate = '<tr><th><time>{{ time }}</time></th><td><div class="talk"><div class="speakers">{{ attendee }}</div><div class="title">{{ title }}</div></div></td></tr>';
    
    $(document).ready(function() {
        $.each(scheduleData.events, function(i, event) {
            event.date = new Date(Date.parse(event.dtstart));
            event.time = event.date.strftime("%H:%M");
            
            var dayTarget;
            var trackTarget;
            var $target;
            
            if (event.date.getDate() == 25) dayTarget = 'day1';
            else if (event.date.getDate() == 26) dayTarget = 'day2';
            
            if (event.location == 'Theatre') trackTarget = 'theatre';
            else if (event.location == 'Music School') trackTarget = 'musicschool';
            
            $target = $('#' + dayTarget + ' .schedule.' + trackTarget);
            
            $target.append($.mustache(scheduleRowTemplate, event));
        });
    });
})(jQuery);
