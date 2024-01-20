function download(content, fileName, contentType) {
    var a = $("<a>").attr({
        href: "data:" + contentType + ";charset=utf-8," + encodeURIComponent(content),
        download: fileName,
    }).appendTo("body");
    a[0].click();
    a.remove();
}
