$('input#image_zone').on('change', function () {
    // console.log("iIMAGE CHANGE!!!");
    var file = $(this).prop('files')[0];
    $('p.image_zone_fileState').text(file.name);
});