function renderPasswords() {
    var contentContainer = $("#content-container");
    contentContainer.html("");

    $.each(passwords, function(index, password) {
        var passwordEntry = $("<div>").addClass("password-entry");

        var passwordBox = $("<div>").addClass("password-box");

        var nameInput = $("<input>").attr({
            type: "text",
            value: password.name,
            readonly: true,
        });

        var passwordInput = $("<input>").attr({
            type: "password",
            value: password.password,
            readonly: true,
        });

        var copyButton = $("<button>").text("Copy");

        copyButton.click(function() {
            copyToClipboard(password.password);
        });

        passwordBox.append(nameInput, passwordInput, copyButton);
        passwordEntry.append(passwordBox);
        contentContainer.append(passwordEntry);
    });

    var addButton = $("<button>").attr("id", "add-button").text("Add");
    var exportButton = $("<button>").attr("id", "export-button").text("Export");

    addButton.click(function() {
        var name = prompt("Enter name:");
        var password = prompt("Enter password:");

        if (name !== null && password !== null) {
            passwords.push({
                name: name,
                password: password
            });
            renderPasswords();
        }
    });

    exportButton.click(function() {
        var masterPassword = prompt("Enter your master password:");

        if (masterPassword !== null) {
            var encryptedContent = CryptoJS.AES.encrypt(JSON.stringify(passwords), masterPassword).toString();
            download(encryptedContent, "passwords.json", "application/json");
        }
    });

    contentContainer.append(addButton, exportButton);

    if (passwords.length > 3) {
        contentContainer.addClass("more-than-three-passwords");
    } else {
        contentContainer.removeClass("more-than-three-passwords");
    }
}

function copyToClipboard(text) {
    var tempInput = $("<input>").val(text).appendTo("body").select();
    document.execCommand("copy");
    tempInput.remove();
    alert("Password copied to clipboard!");
}

function encrypt(content, password) {
    var encryptedContent = CryptoJS.AES.encrypt(content, password).toString();
    return encryptedContent;
}
