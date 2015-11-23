module.exports = {
    codeToURL: function (imgurCode, type) {
        var url = '';

        switch(type) {
            case "thumbnail":
                url = "http://i.imgur.com/" + imgurCode + "h.jpg";
                break;
            case "full":
                url = "http://i.imgur.com/" + imgurCode + ".jpg";
                break;
            default:
                url = ''
        }

        return url;
    }
};
