Ext.define('Chapter4Views.view.TabPanelDemo', {
    extend: 'Ext.Panel',
    xtype: 'tabpaneldemo',
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'tabpanel',
            layout: {
                // Possible values are: cover, cube, fade, flip, pop, reveal, scroll, slide
                // You can also specify "false" (boolean value) to disable all
                // animations
                animation: 'flip'
            },
            tabBarPosition: 'bottom',
            items: [{
                iconCls: 'user',
                iconMask: true,
                title: 'Profile',
                style: 'background-color: red; color: white',
                html: 'Your profile screen here'
            }, {
                iconCls: 'favorites',
                iconMask: true,
                title: 'Favorites',
                style: 'background-color: yellow',
                html: 'Your favorites here'
            }, {
                iconCls: 'search',
                iconMask: true,
                title: 'Search',
                style: 'background-color: green; color: white',
                html: 'Search engine here'
            }, {
                iconCls: 'action',
                iconMask: true,
                title: 'Action',
                style: 'background-color: blue; color: white',
                html: 'Do something here'
            }, {
                iconCls: 'more',
                iconMask: true,
                title: 'More',
                style: 'background-color: white',
                html: 'There is lots you can do here'
            }]
        }]
    }
});


