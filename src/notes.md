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

## Chrome extension host permisson 
If you wannt to achive all sites on the chrome you can do it but you may be get your marketplace not ASAP. So google chrome extension managment center suggets to you use `activeTab` not `all-url`

- [Broad Narrow Host permmison video exp](https://www.youtube.com/watch?v=hGxTfxb1XQs)
- [ActiveTab permission video exp](https://i.ytimg.com/an_webp/giCc-8KP3Ak/mqdefault_6s.webp?du=3000&sqp=COKv5oEG&rs=AOn4CLAfjFiOJ5d_0ZGTiytYxGy2Kg-BVA)

[**`-> related commit`**](https://github.com/hasantezcan/easy-web-referance-chrome-extension/commit/6c0608b644fc8c8e8c8eec0f786dcdb9c8e1b95f) 

## Upgrade alert to notification
> https://developer.chrome.com/docs/extensions/reference/notifications/#property-NotificationOptions-iconUrl

Before I use ugly native alert notification to notice user about I copied the url your clipbord but user have to press okay button to close this alert.

With this solution we dont need to close something popUp. 

- [Chrome extension notification video exp](https://www.youtube.com/watch?v=IBVaHvCq81U)

[**`-> related commit`**](https://github.com/hasantezcan/easy-web-referance-chrome-extension/commit/a7226cd664293b22e73e55a0bb96fff43f79f793) 

### `ERROR` - Unable to download all specified images. 

The error is I cant show the app icon in notification box. The chrome cant read the image inside of the assets/images/logo directory.

[This is the solution](https://stackoverflow.com/a/44487435/10694425)

> **You have to accept manifest.json like referance while setting the image.** 

[**`-> related commit`**](https://github.com/hasantezcan/easy-web-referance-chrome-extension/commit/6c0608b644fc8c8e8c8eec0f786dcdb9c8e1b95f#diff-16f022ec89282b37542e3374910a5e4a4cf37596abf8f723f0d7f8ab1096f853L54-R53) 