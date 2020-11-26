const { addNamed } = require('@babel/helper-module-imports');

const PACKAGE_NAME = '@react-icons/all-files';

module.exports = function reactIcons() {
  const visitor = {
    ImportDeclaration(path) {
      const source = path.get('source').node.value;

      if (
        source.startsWith('react-icons') &&
        /^react-icons\/[^/]+$/.test(source)
      ) {
        const parent = path.parentPath;
        const specifiers = path.get('specifiers');
        const specifierCount = specifiers.length;
        const imports = [];
        for (const specifier of specifiers) {
          if (specifier.isImportSpecifier()) {
            const importedName = specifier.node.imported.name;
            const localName = specifier.node.local.name;
            const newImportPath = `${PACKAGE_NAME}/${importedName}.esm.js`;

            if (newImportPath) {
              imports.push({
                binding: specifier.scope.bindings[localName],
                newImportName: addNamed(parent, importedName, newImportPath, {
                  nameHint: localName,
                }).name,
              });

              specifier.remove();
            }
          }
        }

        if (imports.length === specifierCount) {
          path.remove();
        }

        // replace all references with new importName
        imports.forEach(({ binding, newImportName }) => {
          binding.referencePaths.forEach((reference) => {
            // eslint-disable-next-line no-param-reassign
            reference.node.name = newImportName;
            reference.replaceWith(reference);
          });
        });
      }
    },
  };

  return { visitor };
};
