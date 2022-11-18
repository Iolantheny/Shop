import React from 'react'
import {ShoppingCartProvider} from './src/context'

export const wrapRootElement = ({ element }) => {
    return <ShoppingCartProvider>
        {element}
    </ShoppingCartProvider>
}