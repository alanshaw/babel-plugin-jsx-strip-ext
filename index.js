module.exports = function (babel) {
  var t = babel.types
  var regex = new RegExp('^(.*)\\.jsx$')

  const sourceVisitor = {
    Literal (path) {
      if (regex.test(path.node.value)) {
        var replacement = path.node.value.replace(regex, '$1')
        path.replaceWith(t.stringLiteral(replacement))
      }
    }
  }

  return {
    visitor: {
      ImportDeclaration: function (path) {
        path.traverse(sourceVisitor)
      }
    }
  }
}
