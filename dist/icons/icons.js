"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Facebook = Facebook;
exports.Github = Github;
exports.Instagram = Instagram;
exports.LinkedIn = LinkedIn;
exports.Twitter = Twitter;

var _react = _interopRequireDefault(require("react"));

require("./icons.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ig = '<?xml version="1.0" ?><svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x37__stroke"><g id="Instagram_1_"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><radialGradient cx="19.1111" cy="128.4444" gradientUnits="userSpaceOnUse" id="Instagram_2_" r="163.5519"><stop offset="0" style="stop-color:#FFB140"/><stop offset="0.2559" style="stop-color:#FF5445"/><stop offset="0.599" style="stop-color:#FC2B82"/><stop offset="1" style="stop-color:#8E40B7"/></radialGradient><path clip-rule="evenodd" d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z" fill="url(#Instagram_2_)" fill-rule="evenodd" id="Instagram"/></g></g></svg>';
var gh = '<?xml version="1.0" ?><svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x31__stroke"><g id="Github_1_"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path clip-rule="evenodd" d="M63.996,1.333C28.656,1.333,0,30.099,0,65.591    c0,28.384,18.336,52.467,43.772,60.965c3.2,0.59,4.368-1.394,4.368-3.096c0-1.526-0.056-5.566-0.088-10.927    c-17.804,3.883-21.56-8.614-21.56-8.614c-2.908-7.421-7.104-9.397-7.104-9.397c-5.812-3.988,0.44-3.907,0.44-3.907    c6.42,0.454,9.8,6.622,9.8,6.622c5.712,9.819,14.98,6.984,18.628,5.337c0.58-4.152,2.236-6.984,4.064-8.59    c-14.212-1.622-29.152-7.132-29.152-31.753c0-7.016,2.492-12.75,6.588-17.244c-0.66-1.626-2.856-8.156,0.624-17.003    c0,0,5.376-1.727,17.6,6.586c5.108-1.426,10.58-2.136,16.024-2.165c5.436,0.028,10.912,0.739,16.024,2.165    c12.216-8.313,17.58-6.586,17.58-6.586c3.492,8.847,1.296,15.377,0.636,17.003c4.104,4.494,6.58,10.228,6.58,17.244    c0,24.681-14.964,30.115-29.22,31.705c2.296,1.984,4.344,5.903,4.344,11.899c0,8.59-0.08,15.517-0.08,17.626    c0,1.719,1.152,3.719,4.4,3.088C109.68,118.034,128,93.967,128,65.591C128,30.099,99.344,1.333,63.996,1.333" fill="#3E75C3" fill-rule="evenodd" id="Github"/></g></g></svg>';
var fb = '<?xml version="1.0" ?><svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M21,23H3c-1.1045696,0-2-0.8954296-2-2V3c0-1.1045696,0.8954304-2,2-2h18c1.1045704,0,2,0.8954304,2,2v18   C23,22.1045704,22.1045704,23,21,23z" fill="#3C5A9A"/><path d="M21,1H3C1.8954468,1,1,1.8953857,1,3v0.25c0-1.1046143,0.8954468-2,2-2h18   c1.1045532,0,2,0.8953857,2,2V3C23,1.8953857,22.1045532,1,21,1z" fill="#FFFFFF" opacity="0.2"/><path d="M11,23v-8H9.020813v-3H11v-2c0-2.2091675,1.7908325-4,4-4h3v3h-3c-0.5523071,0-1,0.4476929-1,1v2h4l-0.5,3   H14v8H11z" fill="#FFFFFF"/><path d="M21,22.75H3c-1.1045532,0-2-0.8954468-2-2V21c0,1.1045532,0.8954468,2,2,2h18   c1.1045532,0,2-0.8954468,2-2v-0.25C23,21.8545532,22.1045532,22.75,21,22.75z" fill="#010101" opacity="0.1"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="12.5429001" x2="23.1642227" y1="11.0428696" y2="21.6641922"><stop offset="0" style="stop-color:#010101;stop-opacity:0.1"/><stop offset="1" style="stop-color:#010101;stop-opacity:0"/></linearGradient><path d="M18,6v3h-3c-0.5523071,0-1,0.4476929-1,1v2h4l-0.5,3H14v8h7c1.1045532,0,2-0.8954468,2-2V10.999939   L18,6z" fill="url(#SVGID_1_)"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="-0.6527924" x2="24.652792" y1="6.099906" y2="17.9000931"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M21,23H3c-1.1045696,0-2-0.8954296-2-2V3c0-1.1045696,0.8954304-2,2-2h18   c1.1045704,0,2,0.8954304,2,2v18C23,22.1045704,22.1045704,23,21,23z" fill="url(#SVGID_2_)"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>';
var li = '<?xml version="1.0" ?><svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M21,23H3c-1.1045696,0-2-0.8954296-2-2V3c0-1.1045696,0.8954304-2,2-2h18c1.1045704,0,2,0.8954304,2,2v18   C23,22.1045704,22.1045704,23,21,23z" fill="#0377BD"/><path d="M21,1H3C1.8954468,1,1,1.8953857,1,3v0.25c0-1.1046143,0.8954468-2,2-2h18   c1.1045532,0,2,0.8953857,2,2V3C23,1.8953857,22.1045532,1,21,1z" fill="#FFFFFF" opacity="0.2"/><path d="M21,22.75H3c-1.1045532,0-2-0.8954468-2-2V21c0,1.1045532,0.8954468,2,2,2h18   c1.1045532,0,2-0.8954468,2-2v-0.25C23,21.8545532,22.1045532,22.75,21,22.75z" fill="#010101" opacity="0.1"/><g><circle cx="6" cy="6" fill="#FFFFFF" r="2"/><rect fill="#FFFFFF" height="11" width="4" x="4" y="9"/><path d="M15.5,9c-1.0839844,0-1.8496094,0.3056641-2.5,0.8144531V9H9v11h4v-6c0-1.2524414,0.5605469-2,1.5-2    s1.5,0.7475586,1.5,2v6h4v-6C20,10.9624023,18.2333984,9,15.5,9z" fill="#FFFFFF"/></g><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="4.1468201" x2="20.5131149" y1="7.9490051" y2="24.3153"><stop offset="0" style="stop-color:#010101;stop-opacity:0.1"/><stop offset="1" style="stop-color:#010101;stop-opacity:0"/></linearGradient><path d="M18.8692017,10.4735718l-0.0125732,0.0002441C19.5835571,11.338501,20,12.5405884,20,14v6h-4v-6   c0-1.2524414-0.5605469-2-1.5-2S13,12.7475586,13,14v6H9V9h2.8217163l-4.362793-4.362793L7.4569702,4.638855   C7.7911987,4.99646,8,5.4729614,8,6c0,1.1030273-0.8969727,2-2,2C5.499939,8,5.0477905,7.8091431,4.6968384,7.5048218L6.1920166,9   H8v11H4l3,3h14c1.1045532,0,2-0.8954468,2-2v-6.3956299L18.8692017,10.4735718z" fill="url(#SVGID_1_)"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_2_" x1="-0.6527924" x2="24.652792" y1="6.099906" y2="17.9000931"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M21,23H3c-1.1045696,0-2-0.8954296-2-2V3c0-1.1045696,0.8954304-2,2-2h18   c1.1045704,0,2,0.8954304,2,2v18C23,22.1045704,22.1045704,23,21,23z" fill="url(#SVGID_2_)"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>';
var tw = '<?xml version="1.0" ?><svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M1.5652174,3.0521476C3.5744538,5.6257963,7.1718545,8.0542965,12,8.3153868   c-0.2662907-1.1175189-0.2919273-4.1507182,1.8132-5.4113107c0.9415512-0.5638697,1.8328362-0.9040537,2.8828506-0.9040537   c1.319294,0,2.402132,0.456198,3.5539494,1.5660632c0.9375267-0.1377044,2.6888733-0.8969233,3.1044006-1.195152   c-0.270546,1.0464852-1.3529453,2.390192-2.1349106,2.7092276C21.9375267,5.0779238,23.5162907,4.6453466,24,4.3897381   c-0.6711273,1.0879869-1.8430901,2.1302214-2.4843273,2.562798c0.742506,6.7045627-5.1815643,15.0391254-13.6895723,15.0474796   C5.3964334,22.0023994,2.7560391,21.482048,0,19.8945122c2.7187636,0.3211613,5.6317658-0.5671692,7.304348-2.1052952   c-2.1093822-0.0481014-4.2458277-1.4820061-5.2173915-3.684267c1.0568728,0.3320112,2.0312777,0.5002546,2.6086955,0   c-0.9843271-0.1114168-4.173913-1.8735428-4.173913-5.2862816c0.7329818,0.611783,1.7883321,1.2439327,2.6086955,1.0756903   C1.7880712,9.0925188-0.1627826,6.0387974,1.5652174,3.0521476z" fill="#1BA8E1" id="XMLID_2804_"/><path d="M12.0431519,8.5702085C12.0262451,8.4992247,12.0144653,8.400836,12,8.3153868   C7.1942749,8.0418882,3.5682983,5.6178365,1.5652466,3.0521626C1.0826416,3.8862691,0.894165,4.7239156,0.8920898,5.517983   c0.0391846-0.7186279,0.241272-1.4693604,0.6731567-2.2158203C3.5744629,5.875771,7.2150269,8.3091612,12.0431519,8.5702085z" fill="#FFFFFF" opacity="0.2"/><path d="M13.8131714,3.1540303c0.9415894-0.5638428,1.8328857-0.9040527,2.8828735-0.9040527   c1.3192749,0,2.4021606,0.4562378,3.5539551,1.5661011c0.8787231-0.1290894,2.4584961-0.7994995,2.9969482-1.1293335   c0.0409546-0.1067505,0.0809937-0.213562,0.1074219-0.3158569C22.9388428,2.669167,21.1874962,3.4283834,20.25,3.5660787   c-1.1517944-1.1098633-2.2346802-1.5661011-3.5539551-1.5661011c-1.0499878,0-1.9412842,0.34021-2.8828735,0.9040527   c-1.6166382,0.9681396-1.9730225,2.9749146-1.9324341,4.3633423C11.8895264,5.8967671,12.2913208,4.0654073,13.8131714,3.1540303z" fill="#FFFFFF" opacity="0.2"/><path d="M21.5038929,6.71102c0.0087891,0.0794678,0.0048218,0.1616211,0.0117798,0.2415161   C22.1591663,6.5157075,23.3325806,5.471807,24,4.3899589c-0.0628662,0.0332031-0.1456299,0.0695801-0.2412109,0.1074829   C23.0745239,5.4501395,22.0743275,6.3261933,21.5038929,6.71102z" fill="#010101" opacity="0.1"/><path d="M0.5369873,8.839551c-0.0048828-0.0040283-0.010437-0.0080566-0.0152588-0.012085   c0,3.1231689,2.6900363,4.9310303,4.1739235,5.2774839c0.107605-0.0473022,0.2098389-0.1038818,0.2994995-0.1815796   C4.0367775,13.8148499,0.6972656,12.0773439,0.5369873,8.839551z" fill="#010101" opacity="0.1"/><path d="M7.8261108,21.7500153c-2.2719727,0.0021973-4.7296753-0.4646606-7.2923584-1.8217163   C0.3556519,19.9174957,0.1768188,19.9154205,0,19.8945465c2.7560425,1.5875244,5.3964233,2.1078491,7.8261108,2.1054688   c8.0369873-0.0078735,13.7605591-7.4442148,13.7445679-13.9192514   C21.4407349,14.4955587,15.7595825,21.7422028,7.8261108,21.7500153z" fill="#010101" opacity="0.1"/><path d="M2.2434692,14.1600466c-0.0523071-0.015686-0.1036987-0.0296631-0.1564941-0.0462646   c0.9289551,2.1056509,2.9424639,3.5794134,5.2173729,3.6754351c0.0910645-0.074646,0.1921997-0.1432495,0.2770386-0.2213135   C5.5710716,17.5220661,3.2711182,16.1887321,2.2434692,14.1600466z" fill="#010101" opacity="0.1"/><linearGradient gradientUnits="userSpaceOnUse" id="XMLID_96_" x1="0.2437822" x2="19.6893921" y1="5.8361177" y2="14.9037552"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M1.5652174,3.0521476C3.5744538,5.6257963,7.1718545,8.0542965,12,8.3153868   c-0.2662907-1.1175189-0.2919273-4.1507182,1.8132-5.4113107c0.9415512-0.5638697,1.8328362-0.9040537,2.8828506-0.9040537   c1.319294,0,2.402132,0.456198,3.5539494,1.5660632c0.9375267-0.1377044,2.6888733-0.8969233,3.1044006-1.195152   c-0.270546,1.0464852-1.3529453,2.390192-2.1349106,2.7092276C21.9375267,5.0779238,23.5162907,4.6453466,24,4.3897381   c-0.6711273,1.0879869-1.8430901,2.1302214-2.4843273,2.562798c0.742506,6.7045627-5.1815643,15.0391254-13.6895723,15.0474796   C5.3964334,22.0023994,2.7560391,21.482048,0,19.8945122c2.7187636,0.3211613,5.6317658-0.5671692,7.304348-2.1052952   c-2.1093822-0.0481014-4.2458277-1.4820061-5.2173915-3.684267c1.0568728,0.3320112,2.0312777,0.5002546,2.6086955,0   c-0.9843271-0.1114168-4.173913-1.8735428-4.173913-5.2862816c0.7329818,0.611783,1.7883321,1.2439327,2.6086955,1.0756903   C1.7880712,9.0925188-0.1627826,6.0387974,1.5652174,3.0521476z" fill="url(#XMLID_96_)" id="XMLID_1016_"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>';

function Github(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "icon",
    dangerouslySetInnerHTML: {
      __html: gh
    }
  });
}

function Facebook(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "icon",
    dangerouslySetInnerHTML: {
      __html: fb
    }
  });
}

function LinkedIn(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "icon",
    dangerouslySetInnerHTML: {
      __html: li
    }
  });
}

function Twitter(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "icon",
    dangerouslySetInnerHTML: {
      __html: tw
    }
  });
}

function Instagram(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "icon",
    dangerouslySetInnerHTML: {
      __html: ig
    }
  });
}