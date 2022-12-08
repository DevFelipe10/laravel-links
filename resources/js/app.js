import axios from 'axios';
import './bootstrap';
import $ from 'jquery';

$('.user-link').click(function(e) {

    var linkId = $(this).data('link-id');
    var linkUrl = $(this).attr('href');

    // store the visit asynchronously without interrupting the link opening
    axios.post('/visit/' + linkId, {
        link: linkUrl
    })
        .then(response => console.log('response: ', response))
        .catch(error => console.error('error: ', error));

});
