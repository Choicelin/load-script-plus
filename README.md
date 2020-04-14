## API list

- loadScript
- unloadScript

## Usage

### loadScript

```javascript 1.6
import {loadScript, unloadScript} from 'load-script-plus';
// load your script tag, if you 
// don't need to set attributes on script tag.
// you can stop passing the second parameter
loadScript(
  'http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js',
  {
    'data-appid': 'APPID',
    'data-redirecturi': 'REDIRECTURI',
    'charset': 'utf-8'
  }
).then(() => {
  // do your logic
})

// generated script tag would be
// <script 
    type="text/javascript"
    async="" 
    src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" 
    data-appid="APPID" 
    data-redirecturi="REDIRECTURI" 
    charset="utf-8"></script>
```

### unloadScript

```javascript 1.6
// remove script tag from head
unloadScript('http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js');
```
