$(document).ready(function() {
    $("form").submit(function (e) { 
        var title = $("#title").val().toString();
        var content = quill.root.innerHTML.toString();
        if(title != null && content != null && title.length != 0 && content.length != 0) {
            var data = {
                "title": title,
                "content": content
            };
            console.log(data);
            $.ajax({
                type: "POST",
                url: 'http://localhost:8080/api/posts/new',
                data: JSON.stringify(data),
                headers: {'Authentication': 'e907d158-8127-42b0-8617-2adb42e3b59c'},
                dataType: "json",
                contentType: 'application/json',
                success: function(resp) {
                    console.log("Post Added Successfully");
                    console.log(resp);
                },
                error: function() {
                    console.log("Post could not be added");
                }
            });
        }     
    });
});
