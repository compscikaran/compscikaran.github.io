$(document).ready(function () {
    var url = 'https://api.github.com/users/compscikaran/repos';
    
    $.ajax(url, {
        success: function (data, status, xhr) {
            data.sort((a, b) => (a.updated_at > b.updated_at) ? -1 : 1)
            data.slice(0, 13).forEach(node => {
                console.log(node);
                var name = node["name"];
                var title = name[0].toUpperCase() + name.slice(1);
                var desc = node["description"];
                var language = node["language"];
                var link = node["html_url"];
                var content = `<tr><td><a href="${link}" style="text-decoration:none">${title}</a></td><td>${desc}</td><td>${language}</td></tr>`;
                if (desc != null) {
                    $("#projectlist").append(content);
                }
            });
        }
    });
});