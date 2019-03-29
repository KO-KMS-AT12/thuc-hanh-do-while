function nhap() {
    var number = null;
    do {
        number = parseInt(prompt("Nhap vao so tu 1->10"));
        alert("So vua nhap la " + number);
    } while (number < 1 || number > 10);
}

nhap();