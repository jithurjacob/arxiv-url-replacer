chrome.storage.sync.get("action", value => {
    var val = value["action"];
    if(val == "none"){
        ;
    }else if(val == "pdf_to_abstract"){
        var anchorList = document.getElementsByTagName('a');
        for (var i = 0; i < anchorList.length; i ++) {
            var href_ = anchorList[i].href;
            if(href_.search(/http(s)?:\/\/[www.]?arxiv.org\/pdf\//)>=0)
                href_=href_.replace(".pdf","");
            anchorList[i].href = href_.replace("arxiv.org/pdf/", "arxiv.org/abs/");
        }
    }else if(val == "abstract_to_pdf"){
        var anchorList = document.getElementsByTagName('a');
        for (var i = 0; i < anchorList.length; i ++) {
            var href_ = anchorList[i].href;
            if(href_.search(/http(s)?:\/\/[www.]?arxiv.org\/abs\//)>=0)
                href_+=".pdf";
            anchorList[i].href = href_.replace("arxiv.org/abs/", "arxiv.org/pdf/");
        }
    }

});