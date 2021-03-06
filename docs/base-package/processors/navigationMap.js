module.exports = function navigationMap(customDocs) {
  return {
    name: 'navigationMap',
    $runAfter: ['adding-navigation'],
    $runBefore: ['navigation-added'],
    $process(docs) {
      const TocDoc = customDocs.getDoc('TocDoc');
      const types = ['class', 'interface', 'type-alias', 'markdown', 'const'];
      const contents = docs.filter(d => types.indexOf(d.docType) !== -1 && !d.ignore);
      docs.push(new TocDoc(contents));
    },
  };
};
