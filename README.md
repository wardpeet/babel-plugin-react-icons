# babel-plugin-react-icons

A simple transform to cherry-pick react-icons modules so you don’t have to.f

Currently, this plugin only works with a [pre-release of react-icons](https://github.com/react-icons/react-icons/releases/tag/3.11.1-snapshot.0).

## Install

```shell
$ npm i --save react-icons@3.11.1-snapshot.0
$ npm i --save-dev babel-plugin-react-icons
```

## Example

Transforms
```js
import { Fa500Px, FaAccessibleIcon, FaAccusoft } from "react-icons/fa";
```

roughly to
```js
import { FaAccusoft as _FaAccusoft } from "react-icons/fa/FaAccusoft.esm.js";
import { FaAccessibleIcon as _FaAccessibleIcon } from "react-icons/fa/FaAccessibleIcon.esm.js";
import { Fa500Px as _Fa500Px } from "react-icons/fa/Fa500Px.esm.js";
```

## Usage

###### .babelrc
```json
{
  "plugins": ["babel-plugin-react-icons"]
}
```