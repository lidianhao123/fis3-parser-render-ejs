'use strict'
var ejs = require('ejs'),
  path = require('path');

module.exports = function(content, file, conf) {
  fis.log.info("fis-parser-render-ejs parser %s html file", file.toString().match(/^\S+\/(\S+)$/)[1]);
  var opts = fis.util.clone(conf),
    data = {},
    options = {};

  if(opts.dataPath){
    data = require(path.join(fis.project.getProjectPath(), opts.dataPath));
  }

  options.filename = file.toString();
  return ejs.render(content, data, options);
}
