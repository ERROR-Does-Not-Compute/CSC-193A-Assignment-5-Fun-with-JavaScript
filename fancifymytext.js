/* Initial alert set to test whether we are running JS code */
// alert("Hello, world!");

/* Event listener to run "Hello, world!" alert and change the text area text size to 24pt. */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('biggerButton').onclick = function () {
        // Note: keeping the call to the alert function as instructions do not explicitly say to delete this.
        alert("Hello, world!");
        document.getElementById('textInput').style.fontSize = "24pt";
    };

    /* Event handler to ajust text area text styles */
    document.getElementById('fancyShmancy').onchange = applyTextStyle;
    document.getElementById('boringBetty').onchange = applyTextStyle;

    /* Function called by the onchange event handler used to pop up an alert and set the appropriate text style. */
    function applyTextStyle() {
        var textArea = document.getElementById('textInput');
        /* FancyShmancy sets: Bold, Blue, and Underline */
        if (document.getElementById('fancyShmancy').checked) {
            // Note: the original instructions say to add an alert to the function called by the onchange.
            // It then says to modify the new function to change text style to bold but does not explicity say to delete the alert.
            alert("Changing text style to 'FancyShmancy!'");
            textArea.style.fontWeight = 'bold';
            textArea.style.color = 'blue';
            textArea.style.textDecoration = 'underline';
            /* BoringBetty sets: Normal, Black, and none */
        } else if (document.getElementById('boringBetty').checked) {
            // Note: keeping alert for same reason stated above.
            alert("Changing text style to 'BoringBetty!'");
            textArea.style.fontWeight = 'normal';
            textArea.style.color = 'black';
            textArea.style.textDecoration = 'none';
        }
    }

    /* Event handler to capitalize each letter in the text area and add the suffix "-Moo" to the end of each sentence when the "Moo" button is pressed */
    document.getElementById('mooButton').onclick = function () {
        var textArea = document.getElementById('textInput');
        var text = textArea.value.toUpperCase();
        var sentences = text.split(".");
        for (var i = 0; i < sentences.length; i++) {
            if (sentences[i].trim().length > 0) {
                var words = sentences[i].split(" ");
                words[words.length - 1] += "-Moo";
                sentences[i] = words.join(" ");
            }
        }
        textArea.value = sentences.join(".").trim();
    };
});