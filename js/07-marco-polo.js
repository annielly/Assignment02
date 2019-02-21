/*eslint-env browser*/

for (var i = 1; i <= 100; i++) {
    if (i % 5 && i % 3 == 0) {
        document.write("Marco!<br>");
    } else if (i % 5 == 0) {
        document.write("Polo!<br>");
    } else if (i % 3 == 0) {
        document.write("Macro! Polo!<br>");
    } else {
        document.write(i + "<br>");
    }
};

//This got a bit mixed up and turned around. I don't really understand how Marco is working on the divisble by fives at the moment. And before I got turned about Marco Polo was working but another else if wasn't...