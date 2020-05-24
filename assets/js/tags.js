$(document).ready(function () {
    var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/tags';
    
    $.ajax(url, {
        success: function (data, status, xhr) {
            data.forEach(node => {
                console.log(node)
                var id = node["id"]
                var name = node["name"];
                var link = 'blog.html?tag=' + id; 
                var element = `<div class="col-lg-2 col-xs-4 published"><a class="nodec" href="${link}">${name}</a></div>`;
                if (name != null) {
                    $("#links").append(element);
                }
                
            });
            $("#links").append(`<div class="col-lg-12"><hr></div>`)
        }
    });
});