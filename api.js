var FlickrApi = (function() {
    function FlickrApi(flickrApiKey) {
        this.flickrApiKey = flickrApiKey;
        this.baseUrl = 'https://api.flickr.com/services/rest/';
        this.apiSuffix = '&api_key=' + this.flickrApiKey;
    }

    FlickrApi.prototype.PhotoSearch = function(searchTerm) {
        searchTerm = searchTerm.replace(/\//g, ' ');
        var formattedText = searchTerm.replace(/ /g, "+"); //encodeURIComponent(searchTerm);
        var url = this.baseUrl + '?method=flickr.photos.search&tags=' + formattedText + '&text=' + formattedText + '&format=json&nojsoncallback=1' + this.apiSuffix;
        return $.get(url);
    }

    return FlickrApi;
})();
