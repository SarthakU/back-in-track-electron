var search = instantsearch({
    appId: 'TXGVGBOTBE',
    apiKey: 'a102cb5036e8ec37181cfe9255fb8a82',
    indexName: 'backing-tracks',
    urlSync: true
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search backing tracks'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 6,
        templates: {
            empty: 'No results',
            item: '<div class="key">{{key}}</div><div class="name">{{name}}</div><div class="over" onclick="if(PLAYED){changevid(\'{{video_id}}\');}else{playTheVideo(\'{{video_id}}\');PLAYED=true;}"></div>'
        }
    })
);

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination-container'
    })
);

search.start();

