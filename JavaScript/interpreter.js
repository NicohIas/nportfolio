function compileCode() { // this script compiles the javascript code
    var javascript = document.getElementById("js");
    var compiler = document.getElementById("code").contentWindow.document;
    //
    compiler.open();
    compiler.writeln (
        "<script>" + // puts the written code into script tags
        javascript.value +
        "</script>"
    );
    compiler.close(); // closes the compiler
};