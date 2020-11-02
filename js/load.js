$.getJSON("../json/content.json", function(data){
    switch(document.documentElement.lang){
    case 'ja':
	var content = data.ja;
	break;
    case 'en':
	var content = data.en;
	break;
    default:
	var content = data.en;
    }
    document.getElementById('title').textContent = content.title;
});

$(function() {
    $("#main").load("../main.html");
});
