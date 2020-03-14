$(document).ready(function() {
    getAllPosts();
});

function showPost(id) {
    $("#blogs").empty();
    $.ajax({
        type: "GET",
        url:  environment.get_post_by_id + id,
        headers: {'Authentication': token },
        dataType: "json",
        success: function(data, status, xhr) {
            
                var title = data["title"];
                var id = data["dataid"];
                var publishDate = data["date"];
                var content = data["content"];
                
                var result = "<div class=\"col-lg-8 col-lg-offset-2\"><h1>" + title + 
                "<br></h1><p>" + publishDate + "</p><br>" + 
                "<p>" + content + "</p><br><br>" + 
                "<button class=\"btn btn-primary\" onclick=\"javascript:getAllPosts();\">Go Back</button></div>";
                
                console.log(result);
                if(data != null)
                    $("#blogs").append(result);  
            
        },
        error: function() {
            console.log("Could not fetch post");
        }
    });
}

function getAllPosts() {
    $("#blogs").empty();
    $.ajax({
        type: "GET",
        url: environment.get_all_posts,
        headers: {'Authentication': token },
        dataType: "json",
        success: function(data, status, xhr) {
            data.forEach(post => {
                var title = post["title"];
                var id = post["postid"];
                var publishDate = post["date"];
                var content = post["content"].slice(0,150) + "...";
                
                var result = "<div class=\"col-lg-6\"><h1><a href=\"javascript:showPost('"+ 
                id + "');\">" + title + "</a><br></h1>" + 
                "<p style=\"text-align:center;\"><i>Published on: </i>" + publishDate + "</p><br>" + 
                "<p>" + content + "</p></div>";
                
                console.log(result);
                if(post != null)
                    $("#blogs").append(result);  
            });
        },
        error: function() {
            console.log("Could not fetch posts");
        }
    });
}