$(document).ready(function() {
    $.ajax('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@compscikaran', {
        success: function(data, status, xhr) {
            data.items.forEach(element => {
                var title = element["title"];
                var date = element["pubDate"];
                var link = element["link"];
                var content = `<a href="${link}"><h4>${title}</h4></a><p>Published: <i>${date}</i></p>`;
                if(title != null && link != null && date != null) {
                    $("#bloglist").append(content)
                }
            });
        }
    });

});