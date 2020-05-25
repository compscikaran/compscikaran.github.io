$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    let param1 = searchParams.get('title');
    let param2 = searchParams.get('id');
    if(param1 != null) 
        var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/posts?slug=' + param1;
    else if(param2 != null)
        var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/posts?id=' + param2;
    else
        $(location).attr('href', 'blog.html')

    $.ajax(url, {
        success: function (data, status, xhr) {
            data.forEach(node => {
                var title = node["title"]["rendered"];
                var date = new Date(node["date"]).toISOString().split('T')[0];
                var content = node["content"]["rendered"];
                
                var tags = node["tags"];

                if (title != null) {
                    $("#title").append(title);
                }

                if (date != null) {
                    $("#date").append(date);
                }

                if (content != null) {
                    $('#content').append(content);
                }

                tags = tags.join(",");
                $.ajax('https://blog.karangupta.xyz/wp-json/wp/v2/tags?include=' + tags, {
                    success: function (tagData, status, xhr) {
                        tagData.forEach(node => {
                            var name = node["name"];
                            var id = node["id"];
                            var element = `<a class="nodec" href="blog.html?tag=${id}">${name}</a>&nbsp;&nbsp;&nbsp;`;
                            $("#links").append(element);
                        });
                    }
                });
            });

        }
    });
});