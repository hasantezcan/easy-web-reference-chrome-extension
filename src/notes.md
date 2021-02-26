# Notes 
**TEST PAGE** = https://en.wikipedia.org/wiki/Grey_currawong

## Regex 

- [Regex Cheat Sheet](https://fireship.io/lessons/regex-cheat-sheet-js/) - fireship.io
- [Regex Explanation in 100 Seconds](https://www.youtube.com/watch?v=sXQxhojSdZM) - fireship.io 
- Community paterns you can [check out](https://regexr.com/) in future. - regexr.com
- [RegExp MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 

- [Quotes codes](https://github.com/findmentor-network/find-mentor/blob/master/generate.js#L34-L47) made from findmentor project

- [!! SitePoint Regex](https://www.sitepoint.com/learn-regex/) 

- [!! Regex with exercises](https://medium.com/factory-mind/regex-cookbook-most-wanted-regex-aa721558c3c1) - Jonny Fox - Mar 2019

> `!!` Mean good resource
---

- Q = Regular Expression to select everything before and up to a particular text 
  - https://stackoverflow.com/a/18413245/10694425

> **Regex alternative for this problem:**
- First one : `/^.*(?=(\#:~:text))/gim`
[**[try]**](https://regex101.com/r/lC1mqX/1)

- Second Solution : `/(https|http)?:\/\/(\w+(\.|\-|\/|\/\#))+\w+/gim`
[**[try]**](https://regex101.com/r/efamHO/1)


## Chrome extension Development

- [The activeTab permission](https://developer.chrome.com/docs/extensions/mv2/manifest/activeTab/)
- [chrome.contextMenus](https://developer.chrome.com/docs/extensions/reference/contextMenus/) (right click button)
  - [usage](https://www.youtube.com/watch?v=DH7QVll30XQ)
- [Declare permissions](https://developer.chrome.com/docs/extensions/mv2/declare_permissions/)


## js write to clipbord 

- Stackoverflow - [Copy to Clipboard in Chrome Extension](https://stackoverflow.com/a/18455088/10694425) - It works
- [Clipbord API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) 
  - [`Clipboard.writeText()`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)
    - https://stackoverflow.com/a/52605237/10694425
  - [`Clipboard.write()`](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/write)
  - [Old and new approach usage](https://www.youtube.com/watch?v=pLNCu8js--M)
  - [Copy to Clipboard using JavaScript](https://www.jasongaylord.com/blog/2020/05/21/copy-to-clipboard-using-javascript) - Jason N. Gaylord - May 2020 