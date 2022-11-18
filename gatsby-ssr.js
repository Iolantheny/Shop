const React = require("react")
const ShoppingCartProvider = require('./src/context')

exports.wrapRootElement = ({ element }) => {
  return (
    <ShoppingCartProvider>
      {element}
    </ShoppingCartProvider>
  )
}