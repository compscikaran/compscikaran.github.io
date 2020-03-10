$(document).ready(function() {
    $.ajax('https://api.github.com/users/compscikaran/repos', {
        success: function(data, status, xhr) {
            data.sort((a,b) => (a.updated_at > b.updated_at) ? -1: 1)
            data.slice(0,14).forEach(node => {
                var name = node["name"];
                var title = name[0].toUpperCase() +  name.slice(1);
                var desc = node["description"]
                var link = node["html_url"];
                var content = "<div class=\"col-lg-3 card\">" + 
                "<a href=\"" + link + "\" + style=\"text-decoration:none;\">" + 
                "<h3>" + title + "</h3></a><br><p>" + desc + "</p>";
                if(desc != null) {
                    $("#projectlist").append(content);
                }
            });
        }
    });
});