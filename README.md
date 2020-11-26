# babel-plugin-react-icons

A simple transform to cherry-pick react-icons modules so you don’t have to.

## Install

```shell
$ npm i --save @react-icons/all-files
$ npm i --save-dev babel-plugin-react-icons
```

## Example

Transforms

```js
import { Fa500Px, FaAccessibleIcon, FaAccusoft } from 'react-icons/fa';
```

roughly to

```js
import { FaAccusoft as _FaAccusoft } from '@react-icons/all-files/fa/FaAccusoft.esm.js';
import { FaAccessibleIcon as _FaAccessibleIcon } from '@react-icons/all-files/fa/FaAccessibleIcon.esm.js';
import { Fa500Px as _Fa500Px } from '@react-icons/all-files/fa/Fa500Px.esm.js';
```

## Usage

###### .babelrc

```json
{
  "plugins": ["babel-plugin-react-icons"]
}
```
