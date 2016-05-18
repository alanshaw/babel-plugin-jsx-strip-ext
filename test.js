const test = require('tape')
const babel = require('babel-core')

test('Should replace correctly', (t) => {
  t.plan(1)

  const input = "import Foo from './Foo.jsx'"

  const opts = {
    presets: ['es2015'],
    plugins: ['jsx-strip-ext']
  }

  const result = babel.transform(input, opts)

  t.ok(result.code.indexOf("'./Foo'") > -1, 'Foo was renamed')
  t.end()
})
