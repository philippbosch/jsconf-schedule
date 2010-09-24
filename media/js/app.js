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
        var $target;
        if (event.location == 'Theatre') $target = $('#day1-theatre');
        else if (event.location == 'Music School') $target = $('#day1-musicschool');
        
        var date = new Date(Date.parse(event.dtstart));
        
        event.time = date.strftime("%H:%M");
        
        $target.append($.mustache(scheduleRowTemplate, event));
    });
});