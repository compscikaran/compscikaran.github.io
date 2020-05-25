$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get('input');
    if(param != null)
        var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/search?subtype=post&search=' + param;
    else
        v$(location).attr('href', 'blog.html')
    
    $.ajax(url, {
        success: function(data, status, xhr) {
            data.sort((a,b) => (a.modified > b.modified) ? -1: 1)
            data.forEach(node => {
                var id = node["id"]
                var title = node["title"];
                
                var element = `<div class="row"><div class="col-lg-8 col-lg-offset-2 card"><a href="post.html?id=${id}"><h3>${title}</h3></a></div><div class="col-lg-2"></div></div><br><br>`;
                if(node != null) {
                    $("#content").append(element);
                }
            });
        }
    });

});