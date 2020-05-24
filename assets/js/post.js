$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get('t');
    console.log(param);
    $.ajax('https://blog.karangupta.xyz/wp-json/wp/v2/posts?slug=' + param, {
        success: function(data, status, xhr) {
            data.sort((a,b) => (a.modified > b.modified) ? -1: 1)
            data.forEach(node => {
                var id = node["slug"];
                var title = node["title"]["rendered"];
                var date = new Date(node["date"]).toISOString().split('T')[0];
                var content = node["content"]["rendered"];
                console.log(title);
                console.log(date);
                console.log(content)
                
                if(title != null) {
                    $("#title").append(title);
                }

                if(date != null) {
                    $("#date").append(date);
                }

                if(content != null) {
                    $('#content').append(content);
                }
            });
        }
    });

});