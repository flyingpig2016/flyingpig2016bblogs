import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'clearfix:after': {
    'content': '""',
    'display': 'table'
  },
  'clearfix:before': {
    'content': '""',
    'display': 'table'
  },
  'clearfix:after': {
    'clear': 'both'
  },
  'left-colshow': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.75)' }]
  },
  'mid-col': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'mid-colshow article': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'tools-col': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'tools-col tools-section search-tagtagcloud article-tag-list': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'tools-col tools-section search-ul search-tag span:hover': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'tools-col tools-section search-ul search-time span:hover': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'tools-col tools-section search-ul search-title:hover': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'tools-col tools-section search-wrap icon': {
    'transition': 'all .2s ease-in',
    'MsTransition': 'all .2s ease-in'
  },
  'mid-colshow': {
    'WebkitAnimationDuration': '.8s',
    'animationDuration': '.8s',
    'WebkitAnimationFillMode': 'both',
    'animationFillMode': 'both',
    'WebkitAnimationName': 'leftIn',
    'animationName': 'leftIn'
  },
  'mid-colhide': {
    'WebkitAnimationDuration': '.8s',
    'animationDuration': '.8s',
    'WebkitAnimationName': 'leftOut',
    'animationName': 'leftOut'
  },
  'tools-colshow': {
    'WebkitAnimationDuration': '.8s',
    'animationDuration': '.8s',
    'WebkitAnimationFillMode': 'both',
    'animationFillMode': 'both',
    'WebkitAnimationName': 'smallLeftIn',
    'animationName': 'smallLeftIn'
  },
  'tools-colhide': {
    'WebkitAnimationDuration': '.8s',
    'animationDuration': '.8s',
    'WebkitAnimationFillMode': 'both',
    'animationFillMode': 'both',
    'WebkitAnimationName': 'smallleftOut',
    'animationName': 'smallleftOut'
  },
  'html': {
    'MsTextSizeAdjust': '100%',
    'WebkitTextSizeAdjust': '100%',
    'WebkitTapHighlightColor': 'transparent',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontFamily': 'Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#333',
    'backgroundColor': '#fff',
    'minHeight': [{ 'unit': '%V', 'value': 1 }]
  },
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'details': {
    'display': 'block'
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'hgroup': {
    'display': 'block'
  },
  'main': {
    'display': 'block'
  },
  'menu': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'summary': {
    'display': 'block'
  },
  'audio': {
    'display': 'inline-block'
  },
  'canvas': {
    'display': 'inline-block'
  },
  'progress': {
    'display': 'inline-block'
  },
  'video': {
    'display': 'inline-block'
  },
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'progress': {
    'verticalAlign': 'baseline'
  },
  '[hidden]': {
    'display': 'none'
  },
  'template': {
    'display': 'none'
  },
  'a': {
    'background': 'transparent',
    'textDecoration': 'none',
    'color': '#08c'
  },
  'a:active': {
    'outline': '0'
  },
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }]
  },
  'b': {
    'fontWeight': '700'
  },
  'strong': {
    'fontWeight': '700'
  },
  'dfn': {
    'fontStyle': 'italic'
  },
  'mark': {
    'background': '#ff0',
    'color': '#000'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  'pre': {
    'overflow': 'auto',
    'whiteSpace': 'pre',
    'whiteSpace': 'pre-wrap',
    'wordWrap': 'break-word'
  },
  'code': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace,monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'button': {
    'color': 'inherit',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'input': {
    'color': 'inherit',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'optgroup': {
    'color': 'inherit',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'select': {
    'color': 'inherit',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'textarea': {
    'color': 'inherit',
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle'
  },
  'button': {
    'overflow': 'visible'
  },
  'input': {
    'overflow': 'visible'
  },
  'select': {
    'overflow': 'visible'
  },
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  'button': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer'
  },
  'html input[type=button]': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer'
  },
  'input[type=reset]': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer'
  },
  'input[type=submit]': {
    'WebkitAppearance': 'button',
    'cursor': 'pointer'
  },
  '[disabled]': {
    'cursor': 'default'
  },
  'button::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input::-moz-focus-inner': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input': {
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'input[type=checkbox]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type=radio]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type=number]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'input[type=number]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'input[type=search]': {
    'WebkitAppearance': 'textfield',
    'boxSizing': 'border-box'
  },
  'input[type=search]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  'input[type=search]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'silver' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'legend': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'overflow': 'auto',
    'resize': 'vertical',
    'verticalAlign': 'top'
  },
  'optgroup': {
    'fontWeight': '700'
  },
  'button': {
    'outline': '0'
  },
  'input': {
    'outline': '0'
  },
  'select': {
    'outline': '0'
  },
  'textarea': {
    'outline': '0'
  },
  'input': {
    'WebkitUserModify': 'read-write-plaintext-only'
  },
  'textarea': {
    'WebkitUserModify': 'read-write-plaintext-only'
  },
  'input::-ms-clear': {
    'display': 'none'
  },
  'input::-ms-reveal': {
    'display': 'none'
  },
  'input::-moz-placeholder': {
    'color': '#999'
  },
  'textarea::-moz-placeholder': {
    'color': '#999'
  },
  'input:-ms-input-placeholder': {
    'color': '#999'
  },
  'textarea:-ms-input-placeholder': {
    'color': '#999'
  },
  'input::-webkit-input-placeholder': {
    'color': '#999'
  },
  'textarea::-webkit-input-placeholder': {
    'color': '#999'
  },
  'placeholder': {
    'color': '#999'
  },
  'table': {
    'borderCollapse': 'collapse',
    'borderSpacing': '0'
  },
  'td': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'th': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blockquote': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'figure': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'form': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dd': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dl': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ol': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ol': {
    'listStyle': 'none outside none'
  },
  'ul': {
    'listStyle': 'none outside none'
  },
  'h1': {
    'lineHeight': [{ 'unit': 'px', 'value': 2 }],
    'fontWeight': '400'
  },
  'h2': {
    'lineHeight': [{ 'unit': 'px', 'value': 2 }],
    'fontWeight': '400'
  },
  'h3': {
    'lineHeight': [{ 'unit': 'px', 'value': 2 }],
    'fontWeight': '400'
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'i': {
    'fontStyle': 'normal'
  },
  '*': {
    'boxSizing': 'border-box'
  },
  'fontFace': {
    'fontFamily': 'iconfont',
    'src': 'url(./fonts/iconfont.3a9902.eot)',
    'src': 'url(./fonts/iconfont.3a9902.eot#iefix) format("embedded-opentype"),url(./fonts/iconfont.6e162c.woff) format("woff"),url(./fonts/iconfont.d0da7e.ttf) format("truetype"),url(./fonts/iconfont.9abe9f.svg#iconfont) format("svg")'
  },
  '[class*=" icon-"]': {
    'fontFamily': 'iconfont!important',
    'speak': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontStyle': 'normal',
    'fontWeight': '400',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  '[class^=icon-]': {
    'fontFamily': 'iconfont!important',
    'speak': 'none',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontStyle': 'normal',
    'fontWeight': '400',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'icon-twitter:before': {
    'content': '"\E600"'
  },
  'icon-facebook:before': {
    'content': '"\E601"'
  },
  'icon-clock:before': {
    'content': '"\E602"'
  },
  'icon-mail:before': {
    'content': '"\E609"'
  },
  'icon-link:before': {
    'content': '"\E6AB"'
  },
  'icon-search:before': {
    'content': '"\E65B"'
  },
  'icon-smile:before': {
    'content': '"\E64A"'
  },
  'icon-roundrightfill:before': {
    'content': '"\E65A"'
  },
  'icon-list:before': {
    'content': '"\E682"'
  },
  'icon-book:before': {
    'content': '"\E6FE"'
  },
  'icon-home:before': {
    'content': '"\E6BB"'
  },
  'icon-share:before': {
    'content': '"\E618"'
  },
  'icon-back:before': {
    'content': '"\E625"'
  },
  'icon-qq:before': {
    'content': '"\E62D"'
  },
  'icon-weibo:before': {
    'content': '"\E619"'
  },
  'icon-segmentfault:before': {
    'content': '"\E603"'
  },
  'icon-sort:before': {
    'content': '"\E700"'
  },
  'icon-jianshu:before': {
    'content': '"\E613"'
  },
  'icon-circle-left:before': {
    'content': '"\E71F"'
  },
  'icon-circle-right:before': {
    'content': '"\E720"'
  },
  'icon-loading:before': {
    'content': '"\E614"'
  },
  'icon-acfun:before': {
    'content': '"\E604"'
  },
  'icon-close:before': {
    'content': '"\E60C"'
  },
  'icon-tumblr:before': {
    'content': '"\E6B0"'
  },
  'icon-calendar:before': {
    'content': '"\E667"'
  },
  'icon-rss:before': {
    'content': '"\E877"'
  },
  'icon-price-tags:before': {
    'content': '"\E6F9"'
  },
  'icon-quo-left:before': {
    'content': '"\E7F5"'
  },
  'icon-quo-right:before': {
    'content': '"\E7F6"'
  },
  'icon-back1:before': {
    'content': '"\E64E"'
  },
  'icon-github:before': {
    'content': '"\E735"'
  },
  'icon-film:before': {
    'content': '"\E7B7"'
  },
  'icon-weixin:before': {
    'content': '"\E61F"'
  },
  'icon-qzone:before': {
    'content': '"\E680"'
  },
  'icon-douban:before': {
    'content': '"\E64C"'
  },
  'icon-roundleftfill:before': {
    'content': '"\E799"'
  },
  'icon-tuding:before': {
    'content': '"\E651"'
  },
  'icon-zhihu:before': {
    'content': '"\E61B"'
  },
  'icon-linkedin:before': {
    'content': '"\E6D4"'
  },
  'icon-google:before': {
    'content': '"\E635"'
  },
  'icon-bilibili:before': {
    'content': '"\E622"'
  },
  'body': {
    'color': '#1a1a1a',
    'fontFamily': 'lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.75 }]
  },
  'button': {
    'color': '#1a1a1a',
    'fontFamily': 'lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.75 }]
  },
  'input': {
    'color': '#1a1a1a',
    'fontFamily': 'lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.75 }]
  },
  'select': {
    'color': '#1a1a1a',
    'fontFamily': 'lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.75 }]
  },
  'textarea': {
    'color': '#1a1a1a',
    'fontFamily': 'lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.75 }]
  },
  'body': {
    'overflowY': 'hidden',
    'background': '#eaeaea'
  },
  '#container': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'screen&&<w800': {
      'height': [{ 'unit': 'string', 'value': 'auto' }],
      'overflowX': 'hidden',
      'overflowY': 'auto'
    }
  },
  'body': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'screen&&<w800': {
      'height': [{ 'unit': 'string', 'value': 'auto' }],
      'overflowX': 'hidden',
      'overflowY': 'auto'
    }
  },
  'html': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'screen&&<w800': {
      'height': [{ 'unit': 'string', 'value': 'auto' }],
      'overflowX': 'hidden',
      'overflowY': 'auto'
    }
  },
  '#mobile-nav': {
    'display': 'none'
  },
  '#container': {
    'position': 'relative',
    'minHeight': [{ 'unit': '%V', 'value': 1 }]
  },
  '#container anm-canvas': {
    'display': 'none'
  },
  '#containershow anm-canvas': {
    'display': 'block',
    'position': 'fixed'
  },
  'body-wrap': {
    'marginBottom': [{ 'unit': 'px', 'value': 80 }]
  },
  'mid-col': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'background': '#eaeaea',
    'left': [{ 'unit': 'px', 'value': 300 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'mid-colshow': {
    'background': 'none',
    'opacity': '.9'
  },
  'mid-colshow article': {
    'background': 'hsla(0,0%,100%,.3)'
  },
  'left-col': {
    'background': '#fff',
    'width': [{ 'unit': 'px', 'value': 300 }],
    'position': 'fixed',
    'opacity': '1',
    'transition': 'all .2s ease-in',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '999'
  },
  'left-col overlay': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 180 }],
    'position': 'absolute'
  },
  'left-col intrude-less': {
    'width': [{ 'unit': '%H', 'value': 0.76 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 112 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'left-col #header': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 300 }],
    'position': 'relative',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'color-border' }]
  },
  'left-col #header a': {
    'color': '#696969'
  },
  'left-col #header a:hover': {
    'color': '#b0a0aa'
  },
  'left-col #header header-subtitle': {
    'textAlign': 'center',
    'color': '#999',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'display': '-webkit-box',
    'WebkitLineClamp': '2',
    'WebkitBoxOrient': 'vertical'
  },
  'left-col #header header-menu': {
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 31 }],
    'textTransform': 'uppercase',
    'float': 'none',
    'minHeight': [{ 'unit': 'px', 'value': 150 }],
    'marginLeft': [{ 'unit': 'px', 'value': -12 }],
    'textAlign': 'center',
    'display': '-webkit-box',
    'WebkitBoxOrient': 'horizontal',
    'WebkitBoxPack': 'center',
    'WebkitBoxAlign': 'center'
  },
  'left-col #header header-menu li': {
    'cursor': 'default'
  },
  'left-col #header header-menu li a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'minWidth': [{ 'unit': 'px', 'value': 300 }]
  },
  'left-col #header header-smart-menu': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'left-col #header header-smart-menu a:after': {
    'content': '"/"'
  },
  'left-col #header header-smart-menu a:last-child:after': {
    'content': '""'
  },
  'left-col #header profilepic': {
    'display': 'block',
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '300px',
    'width': [{ 'unit': 'px', 'value': 128 }],
    'height': [{ 'unit': 'px', 'value': 128 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'overflow': 'hidden',
    'background': '#88acdb',
    'WebkitTransition': 'all .2s ease-in',
    'display': '-webkit-box',
    'WebkitBoxOrient': 'horizontal',
    'WebkitBoxPack': 'center',
    'WebkitBoxAlign': 'center',
    'textAlign': 'center'
  },
  'left-col #header profilepic img': {
    'borderRadius': '300px',
    'opacity': '1',
    'WebkitTransition': 'all .2s ease-in'
  },
  'left-col #header profilepic imgshow': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'opacity': '1'
  },
  'left-col #header header-author': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'Roboto,serif',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'transition': '.3s'
  },
  '::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }]
  },
  '::-webkit-scrollbar-button': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  '::-webkit-scrollbar-button:end:decrement': {
    'display': 'none'
  },
  '::-webkit-scrollbar-button:start:increment': {
    'display': 'none'
  },
  '::-webkit-scrollbar-corner': {
    'display': 'block'
  },
  '::-webkit-scrollbar-thumb': {
    'borderRadius': '8px',
    'backgroundColor': 'rgba(0,0,0,.2)'
  },
  '::-webkit-scrollbar-thumb:hover': {
    'borderRadius': '8px',
    'backgroundColor': 'rgba(0,0,0,.5)'
  },
  '::-webkit-scrollbar-thumb': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  '::-webkit-scrollbar-track': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  '::-webkit-scrollbar-track:hover': {
    'backgroundColor': 'rgba(0,0,0,.15)'
  },
  '::-webkit-scrollbar-button:start': {
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'background': 'url(./img/scrollbar_arrow.png) no-repeat 0 0'
  },
  '::-webkit-scrollbar-button:start:hover': {
    'background': 'url(./img/scrollbar_arrow.png) no-repeat -15px 0'
  },
  '::-webkit-scrollbar-button:start:active': {
    'background': 'url(./img/scrollbar_arrow.png) no-repeat -30px 0'
  },
  '::-webkit-scrollbar-button:end': {
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'background': 'url(./img/scrollbar_arrow.png) no-repeat 0 -18px'
  },
  '::-webkit-scrollbar-button:end:hover': {
    'background': 'url(./img/scrollbar_arrow.png) no-repeat -15px -18px'
  },
  '::-webkit-scrollbar-button:end:active': {
    'background': 'url(./img/scrollbar_arrow.png) no-repeat -30px -18px'
  },
  'article-entry highlight': {
    'background': '#272822',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'overflow': 'auto',
    'color': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22.400000000000002 }]
  },
  'article-entry pre': {
    'background': '#272822',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'overflow': 'auto',
    'color': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22.400000000000002 }]
  },
  'article-entry gist gist-file gist-data line-numbers': {
    'color': '#666'
  },
  'article-entry highlight gutter pre': {
    'color': '#666'
  },
  'article-entry highlight gutter pre line': {
    'color': '#666'
  },
  'article-entry code': {
    'fontFamily': 'Source Code Pro,Consolas,Monaco,Menlo,monospace'
  },
  'article-entry pre': {
    'fontFamily': 'Source Code Pro,Consolas,Monaco,Menlo,monospace'
  },
  'article-entry code': {
    'background': '#eee',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.3 }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'article-entry pre code': {
    'background': 'none',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#fff'
  },
  'article-entry highlight': {
    'borderRadius': '4px'
  },
  'article-entry highlight pre': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry highlight table': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'article-entry highlight td': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry highlight figcaption': {
    'color': 'highlight-comment',
    'lineHeight': [{ 'unit': 'em', 'value': 1 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'article-entry highlight figcaption:after': {
    'content': '""',
    'display': 'table'
  },
  'article-entry highlight figcaption:before': {
    'content': '""',
    'display': 'table'
  },
  'article-entry highlight figcaption:after': {
    'clear': 'both'
  },
  'article-entry highlight figcaption a': {
    'float': 'right'
  },
  'article-entry highlight gutter pre': {
    'textAlign': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'article-entry highlight gutter pre line': {
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'article-entry highlight line': {
    'color': '#fff',
    'minHeight': [{ 'unit': 'px', 'value': 19 }]
  },
  'article-entry gist': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -20 }],
    'borderStyle': 'solid',
    'borderColor': '#ddd',
    'borderWidth': '1px 0',
    'background': '#272822',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry gist gist-file': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'fontFamily': 'Source Code Pro,Consolas,Monaco,Menlo,monospace',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry gist gist-file gist-data': {
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'article-entry gist gist-file gist-data line-numbers': {
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry gist gist-file gist-data line-data': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry gist gist-file highlight': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'article-entry gist gist-file gist-meta': {
    'background': '#272822',
    'color': 'highlight-comment',
    'font': [{ 'unit': 'em', 'value': 0.85 }, { 'unit': 'string', 'value': 'Helvetica' }, { 'unit': 'string', 'value': 'Neue,Helvetica,Arial,sans-serif' }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'article-entry gist gist-file gist-meta a': {
    'color': '#258fb8',
    'fontWeight': '400'
  },
  'article-entry gist gist-file gist-meta a:hover': {
    'textDecoration': 'underline'
  },
  'pre comment': {
    'color': '#75715e'
  },
  'pre class params': {
    'color': '#66d9ef'
  },
  'pre function keyword': {
    'color': '#66d9ef'
  },
  'pre keyword': {
    'color': '#66d9ef'
  },
  'pre css value': {
    'color': '#fff'
  },
  'pre doctype': {
    'color': '#fff'
  },
  'pre function': {
    'color': '#fff'
  },
  'pre params': {
    'color': '#fff'
  },
  'pre tag': {
    'color': '#fff'
  },
  'pre at_rule': {
    'color': '#f92672'
  },
  'pre at_rule keyword': {
    'color': '#f92672'
  },
  'pre css~* tag': {
    'color': '#f92672'
  },
  'pre preprocessor': {
    'color': '#f92672'
  },
  'pre preprocessor keyword': {
    'color': '#f92672'
  },
  'pre title': {
    'color': '#f92672'
  },
  'pre attribute': {
    'color': '#a6e22e'
  },
  'pre built_in': {
    'color': '#a6e22e'
  },
  'pre class': {
    'color': '#a6e22e'
  },
  'pre css~* class': {
    'color': '#a6e22e'
  },
  'pre function title': {
    'color': '#a6e22e'
  },
  'pre string': {
    'color': '#e6db74'
  },
  'pre value': {
    'color': '#e6db74'
  },
  'pre number': {
    'color': '#7163d7'
  },
  'pre css~* id': {
    'color': '#fd971f'
  },
  'pre id': {
    'color': '#fd971f'
  },
  '#header tagcloud a': {
    'color': '#fff'
  },
  'tagcloud a': {
    'display': 'inline-block',
    'textDecoration': 'none',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'color': '#fff',
    'height': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'borderRadius': '0 5px 5px 0',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }],
    'fontFamily': 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace'
  },
  'tagcloud a:hover': {
    'opacity': '.8'
  },
  'tagcloud a:before': {
    'content': '" "',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -18 }],
    'border': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'tagcloud a:after': {
    'content': '" "',
    'width': [{ 'unit': 'px', 'value': 4 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': '#fff',
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.3)' }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 7 }],
    'left': [{ 'unit': 'px', 'value': 2 }]
  },
  'tagcloud acolor1': {
    'background': '#ff945c'
  },
  'tagcloud acolor1:before': {
    'borderRightColor': '#ff945c'
  },
  'tagcloud acolor2': {
    'background': '#cc8167'
  },
  'tagcloud acolor2:before': {
    'borderRightColor': '#cc8167'
  },
  'tagcloud acolor3': {
    'background': '#ba8f6c'
  },
  'tagcloud acolor3:before': {
    'borderRightColor': '#ba8f6c'
  },
  'tagcloud acolor4': {
    'background': '#94635c'
  },
  'tagcloud acolor4:before': {
    'borderRightColor': '#94635c'
  },
  'tagcloud acolor5': {
    'background': '#7b5d5f'
  },
  'tagcloud acolor5:before': {
    'borderRightColor': '#7b5d5f'
  },
  'article-tag-list article-tag-list-item': {
    'float': 'left'
  },
  'article-pop-out icon-tuding': {
    'color': '#999',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'article-category': {
    'float': 'left'
  },
  'article-category article-tag-list': {
    'float': 'left'
  },
  'article-tag': {
    'float': 'left'
  },
  'article-tag article-tag-list': {
    'float': 'left'
  },
  'article-category icon': {
    'color': '#999',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'article-tag icon': {
    'color': '#999',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 6 }]
  },
  'article-pop-out': {
    'float': 'left'
  },
  'archive-article-date': {
    'color': '#999',
    'marginRight': [{ 'unit': '%H', 'value': 0.076923 }],
    'float': 'right'
  },
  'archive-article-date icon': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'glass': {
    'backgroundColor': 'rgba(54,70,93,.9)',
    'zIndex': '998',
    'transition': 'opacity .15s',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'none'
  },
  'glass': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '1',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'tagcloud-ctn': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '1',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'tagcloud-ctn': {
    'zIndex': '90120',
    'backgroundSize': '100% 100%'
  },
  'tagcloud-ctn tagcloud-global': {
    'position': 'fixed',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -115 }],
    'marginLeft': [{ 'unit': 'px', 'value': -315 }],
    'width': [{ 'unit': 'px', 'value': 630 }]
  },
  'tagcloud-ctn tagcloud-global a': {
    'width': [{ 'unit': 'px', 'value': 80 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'borderRadius': '50%',
    'background': '#f2992e',
    'color': '#fff',
    'display': 'block',
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 80 }],
    'textAlign': 'center'
  },
  'tagcloud-ctn tagcloud-global tab-post-types tab-post-type:first-child post-type-icon': {
    'background': '#f2992e'
  },
  'tagcloud-ctn tagcloud-global tab-post-types tab-post-type:nth-child(2) post-type-icon': {
    'background': '#56bc8a'
  },
  'tagcloud-ctn tagcloud-global tab-post-types tab-post-type:nth-child(3) post-type-icon': {
    'background': '#4aa8d8'
  },
  'tagcloud-ctn tagcloud-global tab-post-types tab-post-type:nth-child(4) post-type-icon': {
    'background': '#a77dc2'
  },
  'tagcloud-ctn tagcloud-global tab-post-types tab-post-type:nth-child(5) post-type-icon': {
    'background': '#dd765d'
  },
  '#header header-nav': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'transition': '-webkit-transform .3s ease-in',
    'transition': 'transform .3s ease-in',
    'transition': 'transform .3s ease-in,-webkit-transform .3s ease-in'
  },
  '#header header-nav social': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'MsFlexWrap': 'wrap',
    'flexWrap': 'wrap',
    'WebkitBoxPack': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center'
  },
  '#header header-nav social a': {
    'borderRadius': '50%',
    'display': '-moz-inline-stack',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    '*verticalAlign': 'auto',
    'zoom': '1',
    '*display': 'inline',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 8 }],
    'transition': '.3s',
    'textAlign': 'center',
    'color': '#fff',
    'opacity': '.7',
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 28 }],
    'lineHeight': [{ 'unit': 'px', 'value': 26 }]
  },
  '#header header-nav social a:hover': {
    'opacity': '1'
  },
  '#header header-nav social aweibo': {
    'background': '#aaf',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaf' }]
  },
  '#header header-nav social aweibo:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaf' }]
  },
  '#header header-nav social asegmentfault': {
    'background': '#009a61',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#009a61' }]
  },
  '#header header-nav social asegmentfault:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#009a61' }]
  },
  '#header header-nav social arss': {
    'background': '#ef7522',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ef7522' }]
  },
  '#header header-nav social arss:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cf5d0f' }]
  },
  '#header header-nav social agithub': {
    'background': '#afb6ca',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#afb6ca' }]
  },
  '#header header-nav social agithub:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#909ab6' }]
  },
  '#header header-nav social afacebook': {
    'background': '#3b5998',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#3b5998' }]
  },
  '#header header-nav social afacebook:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2d4373' }]
  },
  '#header header-nav social agoogle': {
    'background': '#c83d20',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c83d20' }]
  },
  '#header header-nav social agoogle:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9c3019' }]
  },
  '#header header-nav social atwitter': {
    'background': '#55cff8',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#55cff8' }]
  },
  '#header header-nav social atwitter:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#24c1f6' }]
  },
  '#header header-nav social alinkedin': {
    'background': '#005a87',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#005a87' }]
  },
  '#header header-nav social alinkedin:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#006b98' }]
  },
  '#header header-nav social aacfun': {
    'background': '#fd4c5d',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fd4c5d' }]
  },
  '#header header-nav social aacfun:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fd4c5d' }]
  },
  '#header header-nav social abilibili': {
    'background': '#e15280',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e15280' }]
  },
  '#header header-nav social abilibili:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e15280' }]
  },
  '#header header-nav social azhihu': {
    'background': '#0078d8',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0078d8' }]
  },
  '#header header-nav social azhihu:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0078d8' }]
  },
  '#header header-nav social adouban': {
    'background': '#06c611',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#06c611' }]
  },
  '#header header-nav social adouban:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#06c611' }]
  },
  '#header header-nav social amail': {
    'background': '#005a87',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#005a87' }]
  },
  '#header header-nav social amail:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#006b98' }]
  },
  '#header header-nav social ajianshu': {
    'background': '#ff5722',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff5722' }]
  },
  '#header header-nav social ajianshu:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff5722' }]
  },
  '#header header-nav social aweixin': {
    'background': '#4caf50',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4caf50' }]
  },
  '#header header-nav social aweixin:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4caf50' }]
  },
  '#header header-nav social aqq': {
    'background': '#34baad',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#34baad' }]
  },
  '#header header-nav social aqq:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#34baad' }]
  },
  '#page-nav': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  '#page-nav page-number': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'background': '#4d4d4d',
    'display': 'inline-block',
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '2px'
  },
  '#page-nav page-number:hover': {
    'background': '#5e5e5e'
  },
  '#page-nav current': {
    'background': '#88acdb',
    'cursor': 'default'
  },
  '#page-nav current:hover': {
    'background': '#88acdb'
  },
  '#page-nav extend': {
    'color': '#4d4d4d',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 27 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 27 }],
    'opacity': '1'
  },
  '#page-nav extend:hover': {
    'color': '#5e5e5e'
  },
  '#page-nav:hover extend': {
    'opacity': '1'
  },
  'archives-wrap': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'paddingRight': [{ 'unit': 'px', 'value': 60 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'background': '#fff'
  },
  'archives-wrap:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'archives-wrap:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 80 }]
  },
  'archives-wrap archive-year-wrap': {
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'position': 'absolute',
    'paddingTop': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.8 }],
    'zIndex': '1'
  },
  'archives-wrap archive-year-wrap a': {
    'color': '#666',
    'fontWeight': '700',
    'paddingLeft': [{ 'unit': 'px', 'value': 48 }]
  },
  'archives': {
    'position': 'relative'
  },
  'archives article-info': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'archives archive-article': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'position': 'relative'
  },
  'archives archive-article:first-child': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }]
  },
  'archives archive-article:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'archives archive-article-title': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#333',
    'transition': 'color .3s'
  },
  'archives archive-article-title:hover': {
    'color': '#657b83'
  },
  'archives archive-article-title span': {
    'display': 'block',
    'color': '#a8a8a8',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'lineHeight': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 7 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 2 }]
  },
  'archives archive-article-title span:before': {
    'display': 'inline-block',
    'content': '"\201C"',
    'fontFamily': 'serif',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -12 }],
    'color': '#c8c8c8'
  },
  'archive-article-inner icon-clock': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'archive-article-inner archive-article-header': {
    'position': 'relative',
    'minHeight': [{ 'unit': 'px', 'value': 36 }]
  },
  'archive-article-inner article-meta': {
    'position': 'relative',
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'color': '#555',
    'background': 'none',
    'textAlign': 'right',
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'archive-article-inner article-meta article-date time': {
    'color': '#aaa'
  },
  'archive-article-inner article-meta archive-article-date': {
    'marginRight': [{ 'unit': 'px', 'value': 30 }],
    'display': '-moz-inline-stack',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'zoom': '1',
    'color': '#666',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'archive-article-inner article-meta article-tag-list': {
    'marginRight': [{ 'unit': 'px', 'value': 30 }],
    'display': '-moz-inline-stack',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'zoom': '1',
    'color': '#666',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'archive-article-inner article-meta archive-article-date': {
    'cursor': 'default',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'archive-article-inner article-meta article-category:before': {
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 15 }]
  },
  'archive-article-inner article-meta article-category article-category-link': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 83 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'archive-article-inner article-meta article-tag-list': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'archive-article-inner article-meta article-tag-list:before': {
    'left': [{ 'unit': 'px', 'value': 15 }]
  },
  'archive-article-inner article-meta article-tag-list article-tag-list-item': {
    'display': 'inline-block',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 83 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'tools-col': {
    'width': [{ 'unit': 'px', 'value': 360 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'fixed',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '998',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0',
    'WebkitOverflowScrolling': 'touch',
    'overflowScrolling': 'touch'
  },
  'tools-colshow': {
    'opacity': '1'
  },
  'tools-colhide': {
    'zIndex': '0'
  },
  'tools-col tools-nav': {
    'display': 'none'
  },
  'tools-col tools-section': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': '#e5e5e5',
    'width': [{ 'unit': 'px', 'value': 360 }],
    'overflow': 'hidden',
    'overflowY': 'auto'
  },
  'tools-col tools-wrap': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': '#e5e5e5',
    'width': [{ 'unit': 'px', 'value': 360 }],
    'overflow': 'hidden',
    'overflowY': 'auto'
  },
  'tools-col tools-section ::-webkit-scrollbar': {
    'display': 'none'
  },
  'tools-col tools-wrap ::-webkit-scrollbar': {
    'display': 'none'
  },
  'tools-col tools-section search-wrap': {
    'width': [{ 'unit': 'px', 'value': 310 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'position': 'relative'
  },
  'tools-col tools-section search-wrap search-ipt': {
    'width': [{ 'unit': 'px', 'value': 310 }],
    'color': '#fff',
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'fontFamily': 'Roboto,serif'
  },
  'tools-col tools-section search-wrap icon': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 7 }],
    'color': '#fff',
    'cursor': 'pointer'
  },
  'tools-col tools-section search-wrap icon:hover': {
    'WebkitTransform': 'scale(1.2)',
    'transform': 'scale(1.2)'
  },
  'tools-col tools-section search-wrap ::-webkit-input-placeholder': {
    'color': '#ededed'
  },
  'tools-col tools-section search-tagtagcloud': {
    'textAlign': 'center',
    'position': 'relative'
  },
  'tools-col tools-section search-tagtagcloud search-tag-wording': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 75 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tools-col tools-section search-tagtagcloud search-switch': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'display': 'block'
  },
  'tools-col tools-section search-tagtagcloud search-switch input': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 30 }],
    'zIndex': '2',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': '0 0',
    'WebkitAppearance': 'none',
    'outline': '0'
  },
  'tools-col tools-section search-tagtagcloud search-switch input:before': {
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bdcabc' }],
    'backgroundColor': '#fdfdfd',
    'borderRadius': '20px',
    'cursor': 'pointer',
    'display': 'inline-block',
    'position': 'relative',
    'verticalAlign': 'middle',
    'boxSizing': 'content-box',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#dfdfdf' }],
    'transition': 'border .4s,box-shadow .4s',
    'backgroundClip': 'content-box'
  },
  'tools-col tools-section search-tagtagcloud search-switch input:checked:before': {
    'borderColor': '#64bd63',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.16 }, { 'unit': 'string', 'value': '#64bd63' }],
    'backgroundColor': '#64bd63',
    'transition': 'border .4s,box-shadow .4s,background-color 1.2s'
  },
  'tools-col tools-section search-tagtagcloud search-switch input:checked:after': {
    'left': [{ 'unit': 'px', 'value': 27 }],
    'background': '#fff'
  },
  'tools-col tools-section search-tagtagcloud search-switch input:after': {
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 16 }],
    'left': [{ 'unit': 'px', 'value': 2 }],
    'WebkitTransform': 'translateY(-50%)',
    'borderRadius': '100%',
    'backgroundColor': '#91c0f1',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.4)' }],
    'transition': 'left .2s',
    'cursor': 'pointer'
  },
  'tools-col tools-section search-tagtagcloud article-tag-list': {
    'display': 'none',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'background': 'hsla(0,0%,100%,.2)'
  },
  'tools-col tools-section search-tagtagcloud article-tag-listshow': {
    'display': 'block'
  },
  'tools-col tools-section search-tagtagcloud a': {
    'float': 'none'
  },
  'tools-col tools-section search-ul': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'color': 'rgba(77,77,77,.75)',
    'WebkitOverflowScrolling': 'touch',
    'overflowScrolling': 'touch',
    'overflowY': 'auto'
  },
  'tools-col tools-section search-ul search-li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#dcdcdc' }]
  },
  'tools-col tools-section search-ul search-li:hover': {
    'background': 'hsla(0,0%,100%,.2)'
  },
  'tools-col tools-section search-ul search-title': {
    'overflow': 'hidden',
    'whiteSpace': 'nowrap',
    'textOverflow': 'ellipsis',
    'display': 'block',
    'color': '#fffff8',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(77,77,77,.25)' }, { 'unit': 'px', 'value': 1 }]
  },
  'tools-col tools-section search-ul search-title icon': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'color': '#fffdd8'
  },
  'tools-col tools-section search-ul search-title:hover': {
    'color': '#fff'
  },
  'tools-col tools-section search-ul search-tag': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#fffdd8',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'tools-col tools-section search-ul search-time': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#fffdd8',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'tools-col tools-section search-ul search-tag icon': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'tools-col tools-section search-ul search-time icon': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'tools-col tools-section search-ul search-tag span': {
    'cursor': 'pointer'
  },
  'tools-col tools-section search-ul search-time span': {
    'cursor': 'pointer'
  },
  'tools-col tools-section search-ul search-tag span:hover': {
    'color': '#fff'
  },
  'tools-col tools-section search-ul search-time span:hover': {
    'color': '#fff'
  },
  'tools-col tools-section search-ul search-time': {
    'float': 'left'
  },
  'tools-col tools-section search-ul search-tag span': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'tools-col tools-section-friends': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'tools-col aboutme-wrap': {
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitBoxAlign': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'WebkitBoxPack': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'color': '#fffdd8',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(77,77,77,.45)' }, { 'unit': 'px', 'value': 1 }]
  },
  'body-wrap>article': {
    'position': 'relative'
  },
  'article': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'background': '#fff',
    'transition': 'all .2s ease-in'
  },
  'article img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'article-inner h1article-title': {
    'color': '#696969',
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'transition': 'color .3s'
  },
  'article-title': {
    'color': '#696969',
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 26 }],
    'transition': 'color .3s'
  },
  'article-header': {
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4d4d4d' }],
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.076923 }]
  },
  'article-meta': {
    'width': [{ 'unit': 'px', 'value': 150 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'right',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 23 }],
    'textAlign': 'center',
    'zIndex': '1'
  },
  'article-meta time': {
    'color': '#aaa'
  },
  'article-meta time icon-clock': {
    'marginRight': [{ 'unit': 'px', 'value': 8 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'article-more-link': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'left',
    'float': 'right'
  },
  'article-more-link a': {
    'background': '#4d4d4d',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '2px',
    'transition': 'background .3s'
  },
  'article-more-link a:hover': {
    'background': '#3c3c3c'
  },
  'article-more-link ahidden': {
    'visibility': 'hidden'
  },
  'article-infoinfo-on-right': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'right'
  },
  'article-info-indexarticle-info': {
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': '%H', 'value': 0.076923 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.076923 }],
    'minHeight': [{ 'unit': 'px', 'value': 72 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'article-info-postarticle-info': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'margin': [{ 'unit': 'px', 'value': -30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': '%H', 'value': 0.076923 }]
  },
  'article-inner p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1.75 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-inner': {
    'borderColor': '#d1d1d1'
  },
  'article-inner h1': {
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'marginTop': [{ 'unit': 'em', 'value': 2 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1 }]
  },
  'article-inner h2': {
    'fontSize': [{ 'unit': 'px', 'value': 23 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.4375 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.2173913043 }],
    'marginTop': [{ 'unit': 'em', 'value': 2.4347826087 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.2173913043 }]
  },
  'article-inner h3': {
    'fontSize': [{ 'unit': 'px', 'value': 19 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.1875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.1052631579 }],
    'marginTop': [{ 'unit': 'em', 'value': 2.9473684211 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.4736842105 }]
  },
  'article-inner h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.3125 }],
    'marginTop': [{ 'unit': 'em', 'value': 3.5 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.75 }]
  },
  'article-inner h5': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.3125 }],
    'marginTop': [{ 'unit': 'em', 'value': 3.5 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.75 }]
  },
  'article-inner h6': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.3125 }],
    'marginTop': [{ 'unit': 'em', 'value': 3.5 }],
    'marginBottom': [{ 'unit': 'em', 'value': 1.75 }]
  },
  'article-inner h4': {
    'letterSpacing': [{ 'unit': 'em', 'value': 0.140625 }],
    'textTransform': 'uppercase'
  },
  'article-inner h6': {
    'fontStyle': 'italic'
  },
  'article-inner h1': {
    'fontWeight': '900'
  },
  'article-inner h2': {
    'fontWeight': '900'
  },
  'article-inner h3': {
    'fontWeight': '900'
  },
  'article-inner h4': {
    'fontWeight': '900'
  },
  'article-inner h5': {
    'fontWeight': '900'
  },
  'article-inner h6': {
    'fontWeight': '900'
  },
  'article-inner h1:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-inner h2:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-inner h3:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-inner h4:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-inner h5:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-inner h6:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-inner h1:first-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'display': 'inline'
  },
  'article-entry': {
    'lineHeight': [{ 'unit': 'em', 'value': 1.8 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.076923 }],
    'paddingLeft': [{ 'unit': '%H', 'value': 0.076923 }]
  },
  'article-entry p': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'article-entry li code': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }],
    'background': '#ddd',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'fontFamily': 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace',
    'wordWrap': 'break-word',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'article-entry p code': {
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }],
    'background': '#ddd',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'fontFamily': 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace',
    'wordWrap': 'break-word',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'article-entry blockquote': {
    'background': '#ddd',
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#657b83' }],
    'background': '#f6f6f6'
  },
  'article-entry blockquote p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'article-entry em': {
    'fontStyle': 'italic'
  },
  'article-entry ul li:before': {
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 6 }],
    'height': [{ 'unit': 'px', 'value': 6 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#999' }],
    'borderRadius': '10px',
    'background': '#aaa',
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'article-entry ol': {
    'counterReset': 'item'
  },
  'article-entry ol li:before': {
    'counterIncrement': 'item',
    'content': 'counter(item) "."',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'article-entry ol': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry ul': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry li ol': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'article-entry li ul': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'article-entry li ol li:before': {
    'content': '""',
    'background': '#dedede'
  },
  'article-entry li ul li:before': {
    'content': '""',
    'background': '#dedede'
  },
  'article-entry h1': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'article-entry h2': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'color': '#574c4c',
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'article-entry h3': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'color': '#574c4c',
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'article-entry h4': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'color': '#574c4c',
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'article-entry h5': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'color': '#574c4c',
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'article-entry h6': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': '700',
    'color': '#574c4c',
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'article-entry video': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'article-entry strong': {
    'fontWeight': '700'
  },
  'article-entry caption': {
    'display': 'block',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'color': '#aaa'
  },
  'article-entry hr': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderRight': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'article-entry pre': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'overflowX': 'auto',
    'color': '#657b83',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#444' }, { 'unit': 'px', 'value': 1 }],
    'fontFamily': 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace'
  },
  'article-entry pre code': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'article-entry table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'borderCollapse': 'collapse'
  },
  'article-entry table td': {
    'height': [{ 'unit': 'px', 'value': 35 }]
  },
  'article-entry table tr': {
    'height': [{ 'unit': 'px', 'value': 35 }]
  },
  'article-entry table thead tr': {
    'background': '#f8f8f8'
  },
  'article-entry table tbody tr:hover': {
    'background': '#efefef'
  },
  'article-entry table td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'article-entry table th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#dedede' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'article-entry figure table': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article-entry figure table tbody tr:hover': {
    'background': 'none'
  },
  '#article-nav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 32 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 32 }],
    'minHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  '#article-nav article-nav-link-wrap': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  '#article-nav article-nav-link-wrap article-nav-title': {
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'transition': 'color .3s'
  },
  '#article-nav article-nav-link-wrap:hover article-nav-title': {
    'color': '#4d4d4d'
  },
  '#article-nav article-nav-link-wrap:hover i': {
    'color': '#4d4d4d'
  },
  '#article-nav #article-nav-older': {
    'float': 'right'
  },
  '#disqus_thread': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  '#SOHUCS': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'cloud-tie-wrapper': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'duoshuo': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  '#SOHUCS #SOHU_MAIN module-cmt-list block-cont-gw': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#c8c8c8!important' }]
  },
  'share-wrap': {
    'minHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'share-btn': {
    'float': 'right',
    'position': 'relative'
  },
  'share-icons': {
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitBoxPack': 'center',
    'MsFlexPack': 'center',
    'justifyContent': 'center',
    'WebkitBoxAlign': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'MsFlexWrap': 'wrap',
    'flexWrap': 'wrap'
  },
  'share-icons a': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50%',
    'display': '-moz-inline-stack',
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'zoom': '1',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'transition': '.3s',
    'textAlign': 'center',
    'color': '#fff',
    'opacity': '.7',
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 28 }],
    'lineHeight': [{ 'unit': 'px', 'value': 26 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#509eb7' }]
  },
  'share-icons a:active': {
    'color': '#fff'
  },
  'share-icons a:hover': {
    'WebkitTransform': 'scale(1.2)',
    'transform': 'scale(1.2)'
  },
  'share-icons ashare-outer': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'background': '#4d4d4d',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'page-modal': {
    'position': 'fixed',
    'top': [{ 'unit': '%V', 'value': 0.24 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'zIndex': '1001',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'color': '#727272',
    'background': '#fff',
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),0' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }],
    'opacity': '0',
    'WebkitTransform': 'translate(-50%,-200%)',
    'transform': 'translate(-50%,-200%)'
  },
  'page-modal p': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'page-modalready': {
    'visibility': 'hidden',
    'display': 'block',
    'WebkitTransform': 'translate(-50%,-100%)',
    'transform': 'translate(-50%,-100%)',
    'transition': '.3s'
  },
  'page-modalin': {
    'visibility': 'visible',
    'opacity': '1',
    'WebkitTransform': 'translate(-50%)',
    'transform': 'translate(-50%)'
  },
  'page-modal close': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 15 }],
    'color': 'rgba(0,0,0,.2)',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'page-modal close:active': {
    'color': 'rgba(0,0,0,.4)'
  },
  'page-modal close:hover': {
    'color': 'rgba(0,0,0,.4)'
  },
  'mask': {
    'visibility': 'hidden',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1000',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'background': '#000',
    'opacity': '0',
    'filter': 'alpha(opacity=0)',
    'pointerEvents': 'none',
    'transition': '.3s ease-in-out'
  },
  'maskin': {
    'visibility': 'visible',
    'pointerEvents': 'auto',
    'opacity': '.3'
  },
  'page-reward': {
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'page-reward page-reward-btn': {
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'color': '#fff',
    'background': '#f44336',
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.16),0' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.12)' }],
    'transition': '.4s ease-in-out'
  },
  'page-reward page-reward-btn:active': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2),0' }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'page-reward page-reward-btn:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2),0' }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.2)' }]
  },
  'page-reward page-reward-btn tooltip-item': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }]
  },
  'page-reward reward-box': {
    'display': '-webkit-box',
    'display': '-ms-flexbox',
    'display': 'flex',
    'MsFlexPack': 'distribute',
    'justifyContent': 'space-around'
  },
  'page-reward reward-p': {
    'color': '#fff',
    'fontWeight': '700',
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#45b9e0' }]
  },
  'page-reward reward-p icon': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'color': '#ddd'
  },
  'page-reward reward-type': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'display': 'block',
    'color': '#4d4d4d',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-reward reward-img': {
    'width': [{ 'unit': 'px', 'value': 130 }],
    'height': [{ 'unit': 'px', 'value': 130 }],
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '3px'
  },
  'tooltip-left tooltip': {
    'position': 'absolute',
    'zIndex': '999',
    'cursor': 'pointer',
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 28 }],
    'top': [{ 'unit': 'px', 'value': -10 }],
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  'tooltip-left tooltip:hover ashare-outer': {
    'background': '#24c1f6'
  },
  'tooltip-left tooltip-content': {
    'position': 'absolute',
    'background': 'rgba(36,193,246,.9)',
    'zIndex': '9999',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'bottom': [{ 'unit': '%V', 'value': 0.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': -10 }],
    'borderRadius': '20px',
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }],
    'textAlign': 'center',
    'color': '#fff',
    'opacity': '0',
    'cursor': 'default',
    'pointerEvents': 'none',
    'WebkitFontSmoothing': 'antialiased',
    'transition': 'opacity .3s,-webkit-transform .3s',
    'transition': 'opacity .3s,transform .3s',
    'transition': 'opacity .3s,transform .3s,-webkit-transform .3s'
  },
  'tooltip-left tooltip-west tooltip-content': {
    'left': [{ 'unit': 'em', 'value': 3.5 }],
    'WebkitTransformOrigin': '-2em 50%',
    'transformOrigin': '-2em 50%',
    'WebkitTransform': 'translate3d(0,50%,0) rotate3d(1,1,1,30deg)',
    'transform': 'translate3d(0,50%,0) rotate3d(1,1,1,30deg)'
  },
  'tooltip-left tooltip-east tooltip-content': {
    'right': [{ 'unit': 'em', 'value': 3.5 }],
    'WebkitTransformOrigin': 'calc(100% + 2em) 50%',
    'transformOrigin': 'calc(100% + 2em) 50%',
    'WebkitTransform': 'translate3d(0,50%,0) rotate3d(1,1,1,-30deg)',
    'transform': 'translate3d(0,50%,0) rotate3d(1,1,1,-30deg)'
  },
  'tooltip-left tooltip:hover tooltip-content': {
    'opacity': '1',
    'WebkitTransform': 'translate3d(0,50%,0) rotate3d(0,0,0,0)',
    'transform': 'translate3d(0,50%,0) rotate3d(0,0,0,0)',
    'pointerEvents': 'auto'
  },
  'tooltip-left tooltip-content:after': {
    'content': '""',
    'position': 'absolute'
  },
  'tooltip-left tooltip-content:before': {
    'content': '""',
    'position': 'absolute'
  },
  'tooltip-left tooltip-content:before': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'em', 'value': 3 }]
  },
  'tooltip-left tooltip-content:after': {
    'width': [{ 'unit': 'em', 'value': 2 }],
    'height': [{ 'unit': 'em', 'value': 2 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'margin': [{ 'unit': 'em', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': 'url(./fonts/tooltip.4004ff.svg) no-repeat 50%',
    'backgroundSize': '100%'
  },
  'tooltip-left tooltip-west tooltip-content:after': {
    'right': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'tooltip-left tooltip-west tooltip-content:before': {
    'right': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'tooltip-left tooltip-east tooltip-content:after': {
    'left': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'tooltip-left tooltip-east tooltip-content:before': {
    'left': [{ 'unit': '%H', 'value': 0.99 }]
  },
  'tooltip-left tooltip-east tooltip-content:after': {
    'WebkitTransform': 'scaleX(-1)',
    'transform': 'scaleX(-1)'
  },
  'tooltip-top tooltip': {
    'display': 'inline',
    'position': 'relative',
    'zIndex': '999'
  },
  'tooltip-top tooltip:after': {
    'content': '""',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'pointerEvents': 'none',
    'WebkitTransform': 'translateX(-50%)',
    'transform': 'translateX(-50%)'
  },
  'tooltip-top tooltip:hover:after': {
    'pointerEvents': 'auto'
  },
  'tooltip-top tooltip-content': {
    'position': 'absolute',
    'zIndex': '9999',
    'width': [{ 'unit': 'px', 'value': 370 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.4 }],
    'textAlign': 'center',
    'fontWeight': '400',
    'color': '#4d4d4d',
    'background': 'transparent',
    'opacity': '0',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -10 }, { 'unit': 'px', 'value': -185 }],
    'cursor': 'default',
    'pointerEvents': 'none',
    'fontFamily': 'Satisfy,cursive',
    'WebkitFontSmoothing': 'antialiased',
    'transition': 'opacity .3s .3s',
    'paddingBottom': [{ 'unit': 'px', 'value': 80 }]
  },
  'tooltip-top tooltip:hover tooltip-content': {
    'opacity': '1',
    'pointerEvents': 'auto',
    'transitionDelay': '0s'
  },
  'tooltip-top tooltip-content span': {
    'display': 'block'
  },
  'tooltip-top tooltip-text': {
    'borderBottom': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4d4d4d' }],
    'overflow': 'hidden',
    'WebkitTransform': 'scaleX(0)',
    'transform': 'scaleX(0)',
    'transition': '-webkit-transform .3s .3s',
    'transition': 'transform .3s .3s',
    'transition': 'transform .3s .3s,-webkit-transform .3s .3s'
  },
  'tooltip-top tooltip:hover tooltip-text': {
    'transitionDelay': '0s',
    'WebkitTransform': 'scaleX(1)',
    'transform': 'scaleX(1)'
  },
  'tooltip-top tooltip-inner': {
    'background': 'rgba(36,193,246,.9)',
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
    'WebkitTransform': 'translate3d(0,100%,0)',
    'transform': 'translate3d(0,100%,0)',
    'webkitTransition': '-webkit-transform .3s',
    'transition': '-webkit-transform .3s',
    'transition': 'transform .3s',
    'transition': 'transform .3s,-webkit-transform .3s'
  },
  'tooltip-top tooltip:hover tooltip-inner': {
    'transitionDelay': '.3s',
    'WebkitTransform': 'translateZ(0)',
    'transform': 'translateZ(0)'
  },
  'tooltip-top tooltip-content:after': {
    'content': '""',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'pointerEvents': 'none',
    'borderColor': 'transparent',
    'borderTopColor': '#4d4d4d',
    'borderWidth': '10px',
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  '#footer': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontFamily': 'Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff' }, { 'unit': 'px', 'value': 1 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 30 }],
    'opacity': '.6',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  '#footer outer': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }]
  },
  'footer-left': {
    'float': 'left'
  },
  'footer-right': {
    'float': 'right'
  },
  // ! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license
  'pswp__button': {
    'width': [{ 'unit': 'px', 'value': 44 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'position': 'relative',
    'background': 'none',
    'cursor': 'pointer',
    'overflow': 'visible',
    'WebkitAppearance': 'none',
    'display': 'block',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'right',
    'opacity': '.75',
    'transition': 'opacity .2s',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'pswp__button:focus': {
    'opacity': '1'
  },
  'pswp__button:hover': {
    'opacity': '1'
  },
  'pswp__button:active': {
    'outline': 'none',
    'opacity': '.9'
  },
  'pswp__button::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__ui--over-close pswp__button--close': {
    'opacity': '1'
  },
  'pswp__button': {
    'background': 'url(./img/default-skin.png) 0 0 no-repeat',
    'backgroundSize': '264px 88px',
    'width': [{ 'unit': 'px', 'value': 44 }],
    'height': [{ 'unit': 'px', 'value': 44 }]
  },
  'pswp__button--arrow--left:before': {
    'background': 'url(./img/default-skin.png) 0 0 no-repeat',
    'backgroundSize': '264px 88px',
    'width': [{ 'unit': 'px', 'value': 44 }],
    'height': [{ 'unit': 'px', 'value': 44 }]
  },
  'pswp__button--arrow--right:before': {
    'background': 'url(./img/default-skin.png) 0 0 no-repeat',
    'backgroundSize': '264px 88px',
    'width': [{ 'unit': 'px', 'value': 44 }],
    'height': [{ 'unit': 'px', 'value': 44 }]
  },
  'pswp__button--close': {
    'backgroundPosition': '0 -44px'
  },
  'pswp__button--share': {
    'backgroundPosition': '-44px -44px'
  },
  'pswp__button--fs': {
    'display': 'none'
  },
  'pswp--supports-fs pswp__button--fs': {
    'display': 'block'
  },
  'pswp--fs pswp__button--fs': {
    'backgroundPosition': '-44px 0'
  },
  'pswp__button--zoom': {
    'display': 'none',
    'backgroundPosition': '-88px 0'
  },
  'pswp--zoom-allowed pswp__button--zoom': {
    'display': 'block'
  },
  'pswp--zoomed-in pswp__button--zoom': {
    'backgroundPosition': '-132px 0'
  },
  'pswp--touch pswp__button--arrow--left': {
    'visibility': 'hidden'
  },
  'pswp--touch pswp__button--arrow--right': {
    'visibility': 'hidden'
  },
  'pswp__button--arrow--left': {
    'background': 'none',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -50 }],
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'position': 'absolute'
  },
  'pswp__button--arrow--right': {
    'background': 'none',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -50 }],
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'position': 'absolute'
  },
  'pswp__button--arrow--left': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__button--arrow--right': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__button--arrow--left:before': {
    'content': '""',
    'top': [{ 'unit': 'px', 'value': 35 }],
    'backgroundColor': 'rgba(0,0,0,.3)',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'position': 'absolute'
  },
  'pswp__button--arrow--right:before': {
    'content': '""',
    'top': [{ 'unit': 'px', 'value': 35 }],
    'backgroundColor': 'rgba(0,0,0,.3)',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 32 }],
    'position': 'absolute'
  },
  'pswp__button--arrow--left:before': {
    'left': [{ 'unit': 'px', 'value': 6 }],
    'backgroundPosition': '-138px -44px'
  },
  'pswp__button--arrow--right:before': {
    'right': [{ 'unit': 'px', 'value': 6 }],
    'backgroundPosition': '-94px -44px'
  },
  'pswp__counter': {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'pswp__share-modal': {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'pswp__share-modal': {
    'display': 'block',
    'background': 'rgba(0,0,0,.5)',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'position': 'absolute',
    'zIndex': '1600',
    'opacity': '0',
    'transition': 'opacity .25s ease-out',
    'WebkitBackfaceVisibility': 'hidden',
    'willChange': 'opacity'
  },
  'pswp__share-modal--hidden': {
    'display': 'none'
  },
  'pswp__share-tooltip': {
    'zIndex': '1620',
    'position': 'absolute',
    'background': '#fff',
    'top': [{ 'unit': 'px', 'value': 56 }],
    'borderRadius': '2px',
    'display': 'block',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'right': [{ 'unit': 'px', 'value': 44 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0,0,0,.25)' }],
    'WebkitTransform': 'translateY(6px)',
    'transform': 'translateY(6px)',
    'transition': '-webkit-transform .25s',
    'transition': 'transform .25s',
    'transition': 'transform .25s,-webkit-transform .25s',
    'WebkitBackfaceVisibility': 'hidden',
    'willChange': 'transform'
  },
  'pswp__share-tooltip a': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }]
  },
  'pswp__share-tooltip a': {
    'color': '#000',
    'textDecoration': 'none'
  },
  'pswp__share-tooltip a:hover': {
    'color': '#000',
    'textDecoration': 'none'
  },
  'pswp__share-tooltip a:first-child': {
    'borderRadius': '2px 2px 0 0'
  },
  'pswp__share-tooltip a:last-child': {
    'borderRadius': '0 0 2px 2px'
  },
  'pswp__share-modal--fade-in': {
    'opacity': '1'
  },
  'pswp__share-modal--fade-in pswp__share-tooltip': {
    'WebkitTransform': 'translateY(0)',
    'transform': 'translateY(0)'
  },
  'pswp--touch pswp__share-tooltip a': {
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 12 }]
  },
  'apswp__share--facebook:before': {
    'content': '""',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -12 }],
    'right': [{ 'unit': 'px', 'value': 15 }],
    'border': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderBottomColor': '#fff',
    'WebkitPointerEvents': 'none',
    'MozPointerEvents': 'none',
    'pointerEvents': 'none'
  },
  'apswp__share--facebook:hover': {
    'background': '#3e5c9a',
    'color': '#fff'
  },
  'apswp__share--facebook:hover:before': {
    'borderBottomColor': '#3e5c9a'
  },
  'apswp__share--twitter:hover': {
    'background': '#55acee',
    'color': '#fff'
  },
  'apswp__share--pinterest:hover': {
    'background': '#ccc',
    'color': '#ce272d'
  },
  'apswp__share--download:hover': {
    'background': '#ddd'
  },
  'pswp__counter': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 44 }],
    'color': '#fff',
    'opacity': '.75',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'pswp__caption': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 44 }]
  },
  'pswp__caption small': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'color': '#bbb'
  },
  'pswp__caption__center': {
    'textAlign': 'left',
    'maxWidth': [{ 'unit': 'px', 'value': 420 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ccc'
  },
  'pswp__caption--empty': {
    'display': 'none'
  },
  'pswp__caption--fake': {
    'visibility': 'hidden'
  },
  'pswp__preloader': {
    'width': [{ 'unit': 'px', 'value': 44 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -22 }],
    'opacity': '0',
    'transition': 'opacity .25s ease-out',
    'willChange': 'opacity',
    'direction': 'ltr',
    'screen&&<w1024': {
      'position': 'relative',
      'left': [{ 'unit': 'string', 'value': 'auto' }],
      'top': [{ 'unit': 'string', 'value': 'auto' }],
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
      'float': 'right'
    }
  },
  'pswp__preloader__icn': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }]
  },
  'pswp__preloader--active': {
    'opacity': '1'
  },
  'pswp__preloader--active pswp__preloader__icn': {
    'background': 'url(./img/preloader.gif) 0 0 no-repeat'
  },
  'pswp--css_animation pswp__preloader--active': {
    'opacity': '1'
  },
  'pswp--css_animation pswp__preloader--active pswp__preloader__icn': {
    'WebkitAnimation': 'clockwise .5s linear infinite',
    'animation': 'clockwise .5s linear infinite'
  },
  'pswp--css_animation pswp__preloader--active pswp__preloader__donut': {
    'WebkitAnimation': 'donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite',
    'animation': 'donut-rotate 1s cubic-bezier(.4,0,.22,1) infinite'
  },
  'pswp--css_animation pswp__preloader__icn': {
    'background': 'none',
    'opacity': '.75',
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'pswp--css_animation pswp__preloader__cut': {
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 7 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'overflow': 'hidden'
  },
  'pswp--css_animation pswp__preloader__donut': {
    'boxSizing': 'border-box',
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50%',
    'borderLeftColor': 'transparent',
    'borderBottomColor': 'transparent',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'background': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'pswp__ui': {
    'WebkitFontSmoothing': 'auto',
    'visibility': 'visible',
    'opacity': '1',
    'zIndex': '1550'
  },
  'pswp__top-bar': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'pswp--has_mouse pswp__button--arrow--left': {
    'WebkitBackfaceVisibility': 'hidden',
    'willChange': 'opacity',
    'transition': 'opacity 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp--has_mouse pswp__button--arrow--right': {
    'WebkitBackfaceVisibility': 'hidden',
    'willChange': 'opacity',
    'transition': 'opacity 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp__caption': {
    'WebkitBackfaceVisibility': 'hidden',
    'willChange': 'opacity',
    'transition': 'opacity 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp__top-bar': {
    'WebkitBackfaceVisibility': 'hidden',
    'willChange': 'opacity',
    'transition': 'opacity 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp--has_mouse pswp__button--arrow--left': {
    'visibility': 'visible'
  },
  'pswp--has_mouse pswp__button--arrow--right': {
    'visibility': 'visible'
  },
  'pswp__caption': {
    'backgroundColor': 'rgba(0,0,0,.5)'
  },
  'pswp__top-bar': {
    'backgroundColor': 'rgba(0,0,0,.5)'
  },
  'pswp__ui--fit pswp__caption': {
    'backgroundColor': 'rgba(0,0,0,.3)'
  },
  'pswp__ui--fit pswp__top-bar': {
    'backgroundColor': 'rgba(0,0,0,.3)'
  },
  'pswp__ui--idle pswp__button--arrow--left': {
    'opacity': '0'
  },
  'pswp__ui--idle pswp__button--arrow--right': {
    'opacity': '0'
  },
  'pswp__ui--idle pswp__top-bar': {
    'opacity': '0'
  },
  'pswp__ui--hidden pswp__button--arrow--left': {
    'opacity': '.001'
  },
  'pswp__ui--hidden pswp__button--arrow--right': {
    'opacity': '.001'
  },
  'pswp__ui--hidden pswp__caption': {
    'opacity': '.001'
  },
  'pswp__ui--hidden pswp__top-bar': {
    'opacity': '.001'
  },
  'pswp__ui--one-slide pswp__button--arrow--left': {
    'display': 'none'
  },
  'pswp__ui--one-slide pswp__button--arrow--right': {
    'display': 'none'
  },
  'pswp__ui--one-slide pswp__counter': {
    'display': 'none'
  },
  'pswp__element--disabled': {
    'display': 'none!important'
  },
  'pswp--minimal--dark pswp__top-bar': {
    'background': 'none'
  },
  // ! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license
  'pswp': {
    'display': 'none',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'MsTouchAction': 'none',
    'touchAction': 'none',
    'zIndex': '1500',
    'WebkitTextSizeAdjust': '100%',
    'WebkitBackfaceVisibility': 'hidden',
    'outline': 'none'
  },
  'pswp *': {
    'boxSizing': 'border-box'
  },
  'pswp img': {
    'maxWidth': [{ 'unit': 'string', 'value': 'none' }]
  },
  'pswp--animate_opacity': {
    'opacity': '.001',
    'willChange': 'opacity',
    'transition': 'opacity 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp--open': {
    'display': 'block'
  },
  'pswp--zoom-allowed pswp__img': {
    'cursor': 'zoom-in'
  },
  'pswp--zoomed-in pswp__img': {
    'cursor': '-webkit-grab',
    'cursor': 'grab'
  },
  'pswp--dragging pswp__img': {
    'cursor': '-webkit-grabbing',
    'cursor': 'grabbing'
  },
  'pswp__bg': {
    'background': '#000',
    'opacity': '0',
    'WebkitTransform': 'translateZ(0)',
    'transform': 'translateZ(0)',
    'WebkitBackfaceVisibility': 'hidden'
  },
  'pswp__bg': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'pswp__scroll-wrap': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'pswp__scroll-wrap': {
    'overflow': 'hidden'
  },
  'pswp__container': {
    'MsTouchAction': 'none',
    'touchAction': 'none',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__zoom-wrap': {
    'MsTouchAction': 'none',
    'touchAction': 'none',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__container': {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'WebkitTapHighlightColor': 'transparent',
    'WebkitTouchCallout': 'none'
  },
  'pswp__img': {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'WebkitTapHighlightColor': 'transparent',
    'WebkitTouchCallout': 'none'
  },
  'pswp__zoom-wrap': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitTransformOrigin': 'left top',
    'transformOrigin': 'left top',
    'transition': '-webkit-transform 333ms cubic-bezier(.4,0,.22,1)',
    'transition': 'transform 333ms cubic-bezier(.4,0,.22,1)',
    'transition': 'transform 333ms cubic-bezier(.4,0,.22,1),-webkit-transform 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp__bg': {
    'willChange': 'opacity',
    'transition': 'opacity 333ms cubic-bezier(.4,0,.22,1)'
  },
  'pswp--animated-in pswp__bg': {
    'transition': 'none'
  },
  'pswp--animated-in pswp__zoom-wrap': {
    'transition': 'none'
  },
  'pswp__container': {
    'WebkitBackfaceVisibility': 'hidden'
  },
  'pswp__zoom-wrap': {
    'WebkitBackfaceVisibility': 'hidden'
  },
  'pswp__item': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'pswp__img': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__item': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__img': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'pswp__img--placeholder': {
    'WebkitBackfaceVisibility': 'hidden'
  },
  'pswp__img--placeholder--blank': {
    'background': '#222'
  },
  'pswp--ie pswp__img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto!important' }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'pswp__error-msg': {
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'marginTop': [{ 'unit': 'px', 'value': -8 }],
    'color': '#ccc'
  },
  'pswp__error-msg a': {
    'color': '#ccc',
    'textDecoration': 'underline'
  },
  // 新添加的
  '#container show-toc-btn': {
    'display': 'block'
  },
  '#container toc-article': {
    'display': 'block'
  },
  'toc-article': {
    'zIndex': '100',
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'maxWidth': [{ 'unit': 'px', 'value': 250 }],
    'minWidth': [{ 'unit': 'px', 'value': 150 }],
    'maxHeight': [{ 'unit': 'px', 'value': 500 }],
    'overflowY': 'auto',
    'WebkitBoxShadow': '5px 5px 2px #ccc',
    'boxShadow': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#ccc' }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 35 }],
    'top': [{ 'unit': 'px', 'value': 129 }]
  },
  'toc-article toc-close': {
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer',
    'float': 'right',
    'color': '#ccc'
  },
  'toc-article toc-close:hover': {
    'color': '#000'
  },
  'toc-article toc': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  },
  'toc-article toc toc-number': {
    'color': '#333'
  },
  'toc-article toc toc-text:hover': {
    'textDecoration': 'underline',
    'color': '#2a6496'
  },
  'toc-article li': {
    'listStyleType': 'none'
  },
  'toc-article toc-level-1': {
    'margin': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }]
  },
  'toc-article toc-child': {
  },
  'show-toc-btn': {
    'display': 'none',
    'zIndex': '10',
    'width': [{ 'unit': 'px', 'value': 30 }],
    'minHeight': [{ 'unit': 'px', 'value': 14 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 5 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderRight': [{ 'unit': 'string', 'value': 'none' }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'backgroundColor': '#f9f9f9'
  },
  'show-toc-btn btn-bg': {
    'marginTop': [{ 'unit': 'px', 'value': 2 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'background': 'url(http://7xtawy.com1.z0.glb.clouddn.com/show.png) no-repeat',
    'WebkitBackgroundSize': '100%',
    'MozBackgroundSize': '100%',
    'backgroundSize': '100%'
  },
  'show-toc-btn btn-text': {
    'color': '#999',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'show-toc-btn:hover': {
    'cursor': 'pointer'
  },
  'show-toc-btn:hover btn-bg': {
    'backgroundPosition': '0 -16px'
  },
  'show-toc-btn:hover btn-text': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#ea8010'
  },
  'toc-article li ol': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'toc-article li ul': {
    'marginLeft': [{ 'unit': 'px', 'value': 30 }]
  },
  'toc-article ol': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'toc-article ul': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  }
});
