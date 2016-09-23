function startTime() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    if(dd<10) {
    dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;
    document.getElementById('clock').innerHTML =
    h + ':' + m ;
    document.getElementById('date').innerHTML =
    '<span class="m-t-0">' + today + '</span>'
    var t = setTimeout(startTime, 10000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


//Random Quote API Request
function getQuote(data) {
  var quote  = data.quoteText;
  var author = data.quoteAuthor;
  $('#quote').html('<p class="lead m-b-0">' + '"' + quote + '"' + '</p>' + '<p class="m-t-0 pull-lg-right"><strong>' + '— ' + author +'</strong></p>');
}
$.ajax({
  url: "http://api.forismatic.com/api/1.0/?method=getQuote&&lang=en&format=jsonp&jsonp=?",
  dataType: "jsonp",
  jsonpCallback: "getQuote"
});
//Leaving this here because FUCKING CORS
// var quoteAPI = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
//  $.getJSON(quoteAPI , function(data) {
//    var quote  = data.quoteText;
//    var author = data.quoteAuthor;
//   $('#quote').html('<p class="lead m-b-0">' + '"' + quote + '"' + '</p>' + '<p class="m-t-0 pull-lg-right"><strong>' + '— ' + author +'</strong></p>');
// });


//Refresh The Page Every XX Hours

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(6,05,0); //Will refresh the page at 3:35pm
