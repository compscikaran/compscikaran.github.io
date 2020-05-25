$(document).ready(function () {
    var url = 'https://blog.karangupta.xyz/wp-json/wp/v2/tags';
    var x = []

    $.ajax(url, {
        success: function (data, status, xhr) {
            console.log(Math.round($(document).width()/100))
            var number = Math.round($(document).width()/100);
            data.slice(0,number/2).forEach(node => {
                
                var id = node["id"]
                var name = node["name"];
                var link = 'blog.html?tag=' + id; 
                var element = `<a class="nodec" href="${link}">${name}</a>&nbsp;&nbsp;`;
                if (name != null) {
                    $("#links").append(element);
                }
                
            });
        }
    });
});