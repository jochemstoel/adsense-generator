var main_id;
var obj, hiddenobj;
var pal_name = new Array('Default Google pallete', 'Open Air', 'Seaside', 'Shadow', 'Blue Mix', 'Ink', 'Graphite');
var border = new Array('FFFFFF', 'FFFFFF', '336699', '000000', '6699CC', '000000', 'CCCCCC', 'FFFFFF', 'FFFFFF', 'FFFFFF', '999999', 'FFFFFF');
var bgcolor = new Array('FFFFFF', 'FFFFFF', 'FFFFFF', 'F0F0F0', '003366', '000000', 'CCCCCC', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF', 'FFFFFF');
var linkcol = new Array('0000FF', '0000FF', '0000FF', '0000FF', 'FFFFFF', 'FFFFFF', '000000', '341473', '990000', '0066CC', '7F7F7F', 'CC6600');
var urlcolor = new Array('008000', '008000', '008000', '008000', 'AECCEB', '999999', '666666', '008000', 'CC0033', '063E3F', '063E3F', '008000');
var textcol = new Array('000000', '000000', '000000', '000000', 'AECCEB', 'CCCCCC', '333333', '000000', '000000', '000000', '000000', '000000');

function backtosingle() {
    g('multiple').style.visibility = 'hidden';
    g('single').style.visibility = 'visible';
}

function palletechanger(name) {
    var index;
    if (name != 'multi') {
        for (i = 0; i < 12; i++)
            if (pal_name[i] == name) {
                index = i;
                break;
            }
        document.form.codec0.value = border[i];
        document.form.hidden0.value = border[i];
        g('color0').style.backgroundColor = '#' + border[i];
        document.form.codec2.value = bgcolor[i];
        document.form.hidden1.value = border[i];
        g('color2').style.backgroundColor = '#' + bgcolor[i];
        document.form.codec1.value = linkcol[i];
        document.form.hidden2.value = border[i];
        g('color1').style.backgroundColor = '#' + linkcol[i];
        document.form.codec4.value = urlcolor[i];
        document.form.hidden3.value = border[i];
        g('color4').style.backgroundColor = '#' + urlcolor[i];
        document.form.codec3.value = textcol[i];
        document.form.hidden4.value = border[i];
        g('color3').style.backgroundColor = '#' + textcol[i];
    } else {
        g('multiple').style.visibility = 'visible';
        g('single').style.visibility = 'hidden';
    }
}

function getvalue(a) {
    if (a == undefined) {
        return null
    }
    if (a.value) {
        return a.value
    } else if (a.length) {
        if (a.options) {
            return a.options[a.selectedIndex].value
        } else {
            for (var b = 0; b < a.length; b++) {
                if (a[b].checked) {
                    return a[b].value
                }
            }
        }
    }
    return null
}

function g(id) {
    return document.getElementById(id)
}

function s() {
    g('colordiv').style.display = 'block';
}

function h() {
    g('colordiv').style.display = 'none';
}

function changepos(left, top) {
    g('colordiv').style.top = top + "px";
    g('colordiv').style.left = left + "px";
}

function idchanger(id) {
    mainid = id;
    if (mainid == 'color0') {
        obj = document.form.codec0;
        hiddenobj = document.form.hidden0;
    } else if (mainid == 'color1') {
        obj = document.form.codec1;
        hiddenobj = document.form.hidden1;
    } else if (mainid == 'color2') {
        obj = document.form.codec2;
        hiddenobj = document.form.hidden2;
    } else if (mainid == 'color3') {
        obj = document.form.codec3;
        hiddenobj = document.form.hidden3;
    } else if (mainid == 'color4') {
        obj = document.form.codec4;
        hiddenobj = document.form.hidden4;
    } else if (mainid == 'color5') {
        obj = document.form.codec5;
        hiddenobj = document.form.hidden5;
    }
}

function get_id() {
    return mainid;
}

function valuechanger(color) {
    obj.value = color;
    hiddenobj.value = color;
}

function truecolorkeyup(code) {
    if (code.length < 6) return;
    else {
        var l = 0;
        for (i = 0; i < 6; i++) {
            index = parseInt('0x' + code.charAt(i));
            if (index != 0)
                if (!index) {
                    l = 1;
                    break;
                }
        }
        if (l) {
            alert('Invalid color (e.g. "#FFCC99")');
            obj.value = hiddenobj.value;
        } else {
            g(mainid).style.backgroundColor = '#' + code;
            codechanger();
        }
    }
}

function truecoloronchange(code) {
    if (code.length < 6) {
        alert('Invalid color (e.g. "#FFCC99")');
        obj.value = hiddenobj.value;
    } else truecolorkeyup(code);
}

function whichvisible() {
    if (getvalue(document.form.adtype) == 'adunit') {
        if (getvalue(document.form.adtypeselect) == 'text' || getvalue(document.form.adtypeselect) == 'text_image') {
            g('format0').style.visibility = 'visible';
            g('format1').style.visibility = 'hidden';
            g('format2').style.visibility = 'hidden';
        } else {
            g('format0').style.visibility = 'hidden';
            g('format1').style.visibility = 'visible';
            g('format2').style.visibility = 'hidden';
        }
    } else {
        g('format0').style.visibility = 'hidden';
        g('format1').style.visibility = 'hidden';
        g('format2').style.visibility = 'visible';
    }
}

function clickedadd(index) {
    tf[index] = 1;
}

function clickedremove(index) {
    tf[index] = 0;
}

function check() {
    if (document.form._client_.value.length < 16) {
        alert('Please enter the 16 digit number');
        document.form._client_.value = document.form.hidden6.value;
    } else {
        document.form.hidden6.value = document.form._client_.value;
        codechanger();
    }
}

function getwidth(haritsaa) {
    var ret = '';
    for (i = 0; i < haritsaa.length; i++)
        if (haritsaa.substr(i, 1) != 'x') ret = ret + haritsaa.substr(i, 1);
        else break;
    return ret;
}

function getheight(haritsaa) {
    var ret = '';
    var lock = 0;
    for (i = 0; i < haritsaa.length; i++) {
        if (lock == 1) ret = ret + haritsaa.substr(i, 1);
        if (haritsaa.substr(i, 1) == 'x') lock = 1;
    }
    return ret;
}

function codechanger() {
    var code = '&lt;script type="text/javascript"&gt;\n';
    code = code + 'google_ad_client = "pub-' + g('client').value + '";\n';
    if (getvalue(document.form.more) != '') {
        if (getvalue(document.form.more) == 'urladdress') {
            code = code + 'google_alternate_ad_url = "' + g('geturl').value + '";\n';
        } else if (getvalue(document.form.more) == 'colors') {
            code = code + 'google_alternate_color = "' + g('codec5').value + '";\n';
        }
    }
    if (getvalue(document.form.adtype) == 'adunit') {
        if (getvalue(document.form.adtypeselect) == 'text' || getvalue(document.form.adtypeselect) == 'text_image') {
            code = code + 'google_ad_width = ' + getwidth(getvalue(document.form.size_0)) + ';\n';
            code = code + 'google_ad_height = ' + getheight(getvalue(document.form.size_0)) + ';\n';
            code = code + 'google_ad_format = "' + getvalue(document.form.size_0) + '_as";\n';
        } else if (getvalue(document.form.adtypeselect) == 'image') {
            code = code + 'google_ad_width = ' + getwidth(getvalue(document.form.size_1)) + ';\n';
            code = code + 'google_ad_height = ' + getheight(getvalue(document.form.size_1)) + ';\n';
            code = code + 'google_ad_format = "' + getvalue(document.form.size_1) + '_as";\n';
        }
        code = code + 'google_ad_type = "' + getvalue(document.form.adtypeselect) + '";\n';
    } else if (getvalue(document.form.adtype) == 'linkunit') {
        code = code + 'google_ad_width = ' + getwidth(getvalue(document.form.size_2)) + ';\n';
        code = code + 'google_ad_height = ' + getheight(getvalue(document.form.size_2)) + ';\n';
        code = code + 'google_ad_format = "' + getvalue(document.form.size_2) + '_0ads_al";\n';
    }
    code = code + 'google_color_border = "' + getvalue(document.form.codec0) + '";\n';
    code = code + 'google_color_bg = "' + getvalue(document.form.codec1) + '";\n';
    code = code + 'google_color_link = "' + getvalue(document.form.codec2) + '";\n';
    code = code + 'google_color_text = "' + getvalue(document.form.codec3) + '";\n';
    code = code + 'google_color_url = "' + getvalue(document.form.codec4) + '";\n';
    if (getvalue(document.form.cornerStyle) != '') code = code + 'google_ui_features = "rc:' + getvalue(document.form.cornerStyle) + '";\n';
    code = code + '&lt;/script&gt;&lt;script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"&gt;&lt;/script&gt;';
    g('mycode').innerHTML = code;
}

function linkcaller() {
    var code = '<script type="text/javascript"><br>';
    code = code + 'google_ad_client = "pub-' + g('client').value + '";<br>';
    if (getvalue(document.form.more) != '') {
        if (getvalue(document.form.more) == 'urladdress') {
            code = code + 'google_alternate_ad_url = "' + g('geturl').value + '";<br>';
        } else if (getvalue(document.form.more) == 'colors') {
            code = code + 'google_alternate_color = "' + g('codec5').value + '";<br>';
        }
    }
    if (getvalue(document.form.adtype) == 'adunit') {
        if (getvalue(document.form.adtypeselect) == 'text' || getvalue(document.form.adtypeselect) == 'text_image') {
            code = code + 'google_ad_width = ' + getwidth(getvalue(document.form.size_0)) + ';<br>';
            code = code + 'google_ad_height = ' + getheight(getvalue(document.form.size_0)) + ';<br>';
            code = code + 'google_ad_format = "' + getvalue(document.form.size_0) + '_as";<br>';
        } else if (getvalue(document.form.adtypeselect) == 'image') {
            code = code + 'google_ad_width = ' + getwidth(getvalue(document.form.size_1)) + ';<br>';
            code = code + 'google_ad_height = ' + getheight(getvalue(document.form.size_1)) + ';<br>';
            code = code + 'google_ad_format = "' + getvalue(document.form.size_1) + '_as";<br>';
        }
        code = code + 'google_ad_type = "' + getvalue(document.form.adtypeselect) + '";<br>';
    } else if (getvalue(document.fstyorm.adtype) == 'linkunit') {
        code = code + 'google_ad_width = ' + getwidth(getvalue(document.form.size_2)) + ';<br>';
        code = code + 'google_ad_height = ' + getheight(getvalue(document.form.size_2)) + ';<br>';
        code = code + 'google_ad_format = "' + getvalue(document.form.size_2) + '_0ads_al";<br>';
    }
    code = code + 'google_color_border = "' + getvalue(document.form.codec0) + '";<br>';
    code = code + 'google_color_bg = "' + getvalue(document.form.codec1) + '";<br>';
    code = code + 'google_color_link = "' + getvalue(document.form.codec2) + '";<br>';
    code = code + 'google_color_text = "' + getvalue(document.form.codec3) + '";<br>';
    code = code + 'google_color_url = "' + getvalue(document.form.codec4) + '";<br>';
    if (getvalue(document.form.cornerStyle) != '') code = code + 'google_ui_features = "rc:' + getvalue(document.form.cornerStyle) + '";<br>';
    code = code + '</';
    code = code + 'script><script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></';
    code = code + 'script>';
    g('googleadsense').innerHTML = code;
}