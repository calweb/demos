var albums = [
  {
    title: "diamondhead in hawaii"
  },
  {},
  {}
]












$(document).ready(function () {
  function renderPosts(dataArray, $target) {
    var blogStr = '';
    dataArray.forEach(function (item, index, arr) {

      blogStr += `<article data-idx="${index}">
                    <h3>${item.title}</h3>
                    <p>
                      ${item.content}
                    </p>
                    - ${item.author}
                    <button class="delete">Delete</button>
                  </article>`
    });
    $target.append(blogStr);
  }
  renderPosts(blogs, $('.blog'));


  $('nav a').on('click', function (event) {
    event.preventDefault();
    console.log($(this).attr('rel'));

    var relatedSection = "." + $(this).attr('rel');

    $(relatedSection).addClass('active');
    $(relatedSection).siblings().removeClass('active');
  });

  // create new blog post
  $('.sidebar button').on('click', function (event) {
    event.preventDefault();
    var newPost = {
      title: $('input[name="title"]').val(),
      author: $('input[name="author"]').val(),
      content: $('textarea[name="content"]').val()
    };

    blogs.push(newPost);
    $('.blog').html('');
    $('.sidebar input').val('');
    $('.sidebar textarea').val('');
    renderPosts(blogs, $('.blog'));

    // function renderPosts (data, $el) {
    //   // do stuff
    //   // mashing data together with the template
    //   // and appending to DOM
    // }

  });

  // delete post
  $('.blog').on('click', '.delete', function (event) {
    event.preventDefault();
    console.log(this);
    var idxOfPost = $(this).closest('article').data('idx');
    console.log(typeof idxOfPost);
    blogs.splice(idxOfPost, 1)
    $('.blog').html('');
    renderPosts(blogs, $('.blog'));
    // $(this).closest('article').remove();

  });


});
