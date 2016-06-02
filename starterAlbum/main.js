
$(document).ready(function () {
  var albumsStr = '';
  albums.forEach(function (item, idx, arr) {
    albumsStr += `<div class="album" data-id="${item.id}">
                  <h3>${item.title}</h3>
                  <img src="${item.cover}" alt="">
                </div>`;
  })

  $('.albums').html(albumsStr); // add albums

  $('.albums').on('click', '.album', function (event) {
      console.log($(this).data('id'));
      var albumId = $(this).data('id');
      var selectedAlbum = albums.filter(function (item, idx, arr) {
        return item.id === albumId;
      })
      var photosStr = '';
      selectedAlbum[0].pictures.forEach(function (item, idx, arr) {
        photosStr += `<div class="photo">
                        <h3>${item.caption}</h3>
                        <img src="${item.photo}" alt="">
                      </div>`
      });
      $('.albumDetail').addClass('active');
      $('.albumDetail').siblings().removeClass('active');
      $('.albumDetail').html(photosStr);

  })
})
