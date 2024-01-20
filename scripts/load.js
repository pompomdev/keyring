$("#load-button").click(function() {
    var fileInput = $("<input>").attr({
        type: "file",
        accept: ".json",
    }).css("display", "none");

    fileInput.change(function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var fileContent = e.target.result;
            var masterPassword = prompt("Enter your master password:");

            if (masterPassword !== null) {
                try {
                    var decryptedContent = CryptoJS.AES.decrypt(fileContent, masterPassword).toString(CryptoJS.enc.Utf8);

                    if (decryptedContent !== null) {
                        passwords = JSON.parse(decryptedContent);
                        $("#buttons-container").hide();
                        $("#content-container").show();
                        renderPasswords();
                    } else {
                        alert("Incorrect master password!");
                    }
                } catch (error) {
                    alert("Error decrypting the file!");
                }
            }
        };

        reader.readAsText(file);
    });

    fileInput.click();
});

function decrypt(content, password) {
    try {
        var decryptedContent = CryptoJS.AES.decrypt(content, password).toString(CryptoJS.enc.Utf8);
        return decryptedContent;
    } catch (error) {
        return null;
    }
}
