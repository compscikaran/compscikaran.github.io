$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get('tag');
    if(param != null)
        var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/posts?tags=' + param;
    else
        var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/posts';
    
    $.ajax(url, {
        success: function(data, status, xhr) {
            data.sort((a,b) => (a.modified > b.modified) ? -1: 1)
            data.forEach(node => {
                var id = node["slug"]
                var title = node["title"]["rendered"];
                var date = new Date(node["date"]).toISOString().split('T')[0];
                var content = node["excerpt"]["rendered"].replace(/<[^>]*>?/gm, '');

                var element = `<div class="row"><div class="col-lg-8 col-lg-offset-2 card"><a href="post.html?title=${id}"><h3>${title}</h3></a><br><p><i>${date}</i><br><br>${content}<p></div><div class="col-lg-2"></div></div><br><br>`;
                if(node != null) {
                    $("#content").append(element);
                }
            });
        }
    });

});