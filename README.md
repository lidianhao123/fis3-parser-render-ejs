# fis3-parser-render-ejs
FIS3 ejs file parser plugin

# Install 
```shell
npm install -g fis3-parser-render-ejs
```

# Use
fis-conf.js
```js
fis.media("debug")
  .match('**.html', {
    parser: fis.plugin('render-ejs', {
      dataPath: 'data.json',
      //其他参数 具体参考 https://github.com/mde/ejs#options
    }),
  })
```

data.json
```json
 {
    "list":["img/1.jpg","img/2.jpg"]
 }
```


# License
MIT
