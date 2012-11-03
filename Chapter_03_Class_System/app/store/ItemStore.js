Ext.define('Chapter3ClassSystem.store.ItemStore', {
    extend: 'Ext.data.TreeStore',
    xtype: 'itemstore',
    config: {
        model: 'Chapter3ClassSystem.model.Item',
        defaultRootProperty: 'items',
        data: {
            items: [
                { text: 'Array', screen: 'arraydemo', leaf: true },
                { text: 'Dates', screen: 'datesdemo', leaf: true },
                { text: 'Delayed Task', screen: 'delayedtaskdemo', leaf: true },
                { text: 'DOM Manipulation', screen: 'dommanipdemo', leaf: true },
                { text: 'Ext Object', screen: 'extdemo', leaf: true },
                { text: 'Function', screen: 'functiondemo', leaf: true },
                { text: 'HashMap', screen: 'hashmapdemo', leaf: true },
                { text: 'Inflector', screen: 'inflectordemo', leaf: true },
                { text: 'Logger', screen: 'loggerdemo', leaf: true },
                { text: 'Number', screen: 'numberdemo', leaf: true },
                { text: 'Observable Mixin', screen: 'obsdemo', leaf: true },
                { text: 'String', screen: 'stringdemo', leaf: true },
                { text: 'Version', screen: 'versiondemo', leaf: true }
            ]
        }
    }
});
