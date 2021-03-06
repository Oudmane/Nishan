module.exports = [
  "api/index",
  "api/globals",
  {
    "type": "category",
    "label": "Modules",
    "items": [
      "api/modules/_nishan_",
      "api/modules/_api_block_",
      "api/modules/_api_cache_",
      "api/modules/_api_collection_",
      "api/modules/_api_collectionblock_",
      "api/modules/_api_collectionview_",
      "api/modules/_api_collectionviewpage_",
      "api/modules/_api_data_",
      "api/modules/_api_getters_",
      "api/modules/_api_notionuser_",
      "api/modules/_api_page_",
      "api/modules/_api_rootpage_",
      "api/modules/_api_space_",
      "api/modules/_api_spaceview_",
      "api/modules/_api_usersettings_",
      "api/modules/_api_view_",
      "api/modules/_types_api_",
      "api/modules/_types_block_",
      "api/modules/_types_function_",
      "api/modules/_types_types_",
      "api/modules/_utils_chunk_",
      "api/modules/_utils_createtransaction_",
      "api/modules/_utils_createviews_",
      "api/modules/_utils_inlineblocks_",
      "api/modules/_utils_logs_",
      "api/modules/_utils_pluckkeys_"
    ]
  },
  {
    "type": "category",
    "label": "Classes",
    "items": [
      "api/classes/_nishan_.nishan",
      "api/classes/_api_block_.block",
      "api/classes/_api_cache_.cache",
      "api/classes/_api_collection_.collection",
      "api/classes/_api_collectionblock_.collectionblock",
      "api/classes/_api_collectionview_.collectionview",
      "api/classes/_api_collectionviewpage_.collectionviewpage",
      "api/classes/_api_data_.data",
      "api/classes/_api_getters_.getters",
      "api/classes/_api_notionuser_.notionuser",
      "api/classes/_api_page_.page",
      "api/classes/_api_rootpage_.rootpage",
      "api/classes/_api_space_.space",
      "api/classes/_api_spaceview_.spaceview",
      "api/classes/_api_usersettings_.usersettings",
      "api/classes/_api_view_.view",
      "api/classes/_utils_inlineblocks_.colors",
      "api/classes/_utils_inlineblocks_.chunk"
    ]
  },
  {
    "type": "category",
    "label": "Interfaces",
    "items": [
      "api/interfaces/_types_api_.blockdata",
      "api/interfaces/_types_api_.collectiondata",
      "api/interfaces/_types_api_.collectionviewdata",
      "api/interfaces/_types_api_.collectionviewpagedata",
      "api/interfaces/_types_api_.createspaceparams",
      "api/interfaces/_types_api_.createspaceresult",
      "api/interfaces/_types_api_.deletespacetaskparams",
      "api/interfaces/_types_api_.duplicateblocktaskparams",
      "api/interfaces/_types_api_.enqueuetaskparams",
      "api/interfaces/_types_api_.enqueuetaskresult",
      "api/interfaces/_types_api_.exportblocktaskparams",
      "api/interfaces/_types_api_.finduserresult",
      "api/interfaces/_types_api_.getbacklinksforblockresult",
      "api/interfaces/_types_api_.getgenericembedblockdataparams",
      "api/interfaces/_types_api_.getgenericembedblockdataresult",
      "api/interfaces/_types_api_.getgoogledriveaccountsresult",
      "api/interfaces/_types_api_.getpublicpagedataparams",
      "api/interfaces/_types_api_.getpublicpagedataresult",
      "api/interfaces/_types_api_.getpublicspacedataparams",
      "api/interfaces/_types_api_.getpublicspacedataresult",
      "api/interfaces/_types_api_.getspacesresult",
      "api/interfaces/_types_api_.getsubscriptiondataparams",
      "api/interfaces/_types_api_.getsubscriptiondataresult",
      "api/interfaces/_types_api_.getuploadfileurlparams",
      "api/interfaces/_types_api_.getuploadfileurlresult",
      "api/interfaces/_types_api_.getusersharepagesresult",
      "api/interfaces/_types_api_.inotionuser",
      "api/interfaces/_types_api_.ispace",
      "api/interfaces/_types_api_.ispaceview",
      "api/interfaces/_types_api_.iusersettings",
      "api/interfaces/_types_api_.iusersettingssettings",
      "api/interfaces/_types_api_.initializegoogledriveblockparams",
      "api/interfaces/_types_api_.initializegoogledriveblockresult",
      "api/interfaces/_types_api_.initializepagetemplateparams",
      "api/interfaces/_types_api_.initializepagetemplateresult",
      "api/interfaces/_types_api_.invitegueststospaceparams",
      "api/interfaces/_types_api_.loadblocksubtreeparams",
      "api/interfaces/_types_api_.loadblocksubtreeresult",
      "api/interfaces/_types_api_.loadpagechunkparams",
      "api/interfaces/_types_api_.loadpagechunkresult",
      "api/interfaces/_types_api_.loadusercontentresult",
      "api/interfaces/_types_api_.notionuserdata",
      "api/interfaces/_types_api_.querycollectionparams",
      "api/interfaces/_types_api_.querycollectionresult",
      "api/interfaces/_types_api_.recordmap",
      "api/interfaces/_types_api_.removeusersfromspaceparams",
      "api/interfaces/_types_api_.removeusersfromspaceresult",
      "api/interfaces/_types_api_.setbookmarkmetadataparams",
      "api/interfaces/_types_api_.spacedata",
      "api/interfaces/_types_api_.spacedataresult",
      "api/interfaces/_types_api_.spaceviewdata",
      "api/interfaces/_types_api_.syncrecordvaluesparams",
      "api/interfaces/_types_api_.syncrecordvaluesresult",
      "api/interfaces/_types_api_.userroot",
      "api/interfaces/_types_api_.userrootdata",
      "api/interfaces/_types_api_.usersettingsdata",
      "api/interfaces/_types_api_.viewdata",
      "api/interfaces/_types_block_.codeformat",
      "api/interfaces/_types_block_.codeprops",
      "api/interfaces/_types_block_.fileformat",
      "api/interfaces/_types_block_.fileprops",
      "api/interfaces/_types_block_.iaudio",
      "api/interfaces/_types_block_.iaudioinput",
      "api/interfaces/_types_block_.ibreadcrumb",
      "api/interfaces/_types_block_.ibreadcrumbinput",
      "api/interfaces/_types_block_.ibulletedlist",
      "api/interfaces/_types_block_.ibulletedlistinput",
      "api/interfaces/_types_block_.icallout",
      "api/interfaces/_types_block_.icalloutinput",
      "api/interfaces/_types_block_.icode",
      "api/interfaces/_types_block_.icodeinput",
      "api/interfaces/_types_block_.icodepen",
      "api/interfaces/_types_block_.icodepeninput",
      "api/interfaces/_types_block_.icollection",
      "api/interfaces/_types_block_.icollectionblock",
      "api/interfaces/_types_block_.icollectionview",
      "api/interfaces/_types_block_.icollectionviewpage",
      "api/interfaces/_types_block_.icommontextinput",
      "api/interfaces/_types_block_.icredit",
      "api/interfaces/_types_block_.idivider",
      "api/interfaces/_types_block_.idividerinput",
      "api/interfaces/_types_block_.idrive",
      "api/interfaces/_types_block_.idriveinput",
      "api/interfaces/_types_block_.iequation",
      "api/interfaces/_types_block_.iequationinput",
      "api/interfaces/_types_block_.ifactory",
      "api/interfaces/_types_block_.ifactoryinput",
      "api/interfaces/_types_block_.ifigma",
      "api/interfaces/_types_block_.ifigmainput",
      "api/interfaces/_types_block_.ifile",
      "api/interfaces/_types_block_.ifileinput",
      "api/interfaces/_types_block_.igist",
      "api/interfaces/_types_block_.igistinput",
      "api/interfaces/_types_block_.iheader",
      "api/interfaces/_types_block_.iheaderinput",
      "api/interfaces/_types_block_.iimage",
      "api/interfaces/_types_block_.iimageinput",
      "api/interfaces/_types_block_.imaps",
      "api/interfaces/_types_block_.imapsinput",
      "api/interfaces/_types_block_.imediainput",
      "api/interfaces/_types_block_.imember",
      "api/interfaces/_types_block_.inumberedlist",
      "api/interfaces/_types_block_.inumberedlistinput",
      "api/interfaces/_types_block_.ipage",
      "api/interfaces/_types_block_.ipageinput",
      "api/interfaces/_types_block_.ipublicpermission",
      "api/interfaces/_types_block_.iquote",
      "api/interfaces/_types_block_.iquoteinput",
      "api/interfaces/_types_block_.irootpage",
      "api/interfaces/_types_block_.isubheader",
      "api/interfaces/_types_block_.isubheaderinput",
      "api/interfaces/_types_block_.isubsubheader",
      "api/interfaces/_types_block_.isubsubheaderinput",
      "api/interfaces/_types_block_.itoc",
      "api/interfaces/_types_block_.itocinput",
      "api/interfaces/_types_block_.itext",
      "api/interfaces/_types_block_.itextinput",
      "api/interfaces/_types_block_.itodo",
      "api/interfaces/_types_block_.itodoinput",
      "api/interfaces/_types_block_.itoggle",
      "api/interfaces/_types_block_.itoggleinput",
      "api/interfaces/_types_block_.itweet",
      "api/interfaces/_types_block_.itweetinput",
      "api/interfaces/_types_block_.ivideo",
      "api/interfaces/_types_block_.ivideoinput",
      "api/interfaces/_types_block_.iwebbookmark",
      "api/interfaces/_types_block_.iwebbookmarkinput",
      "api/interfaces/_types_block_.mediaformat",
      "api/interfaces/_types_block_.mediaprops",
      "api/interfaces/_types_block_.pageformat",
      "api/interfaces/_types_block_.pageprops",
      "api/interfaces/_types_block_.todoprops",
      "api/interfaces/_types_block_.webbookmarkformat",
      "api/interfaces/_types_block_.webbookmarkprops",
      "api/interfaces/_types_function_.blockrepostionarg",
      "api/interfaces/_types_function_.createblockarg",
      "api/interfaces/_types_function_.createrootpageargs",
      "api/interfaces/_types_function_.userviewarg",
      "api/interfaces/_types_types_.account",
      "api/interfaces/_types_types_.block",
      "api/interfaces/_types_types_.boardview",
      "api/interfaces/_types_types_.calendarview",
      "api/interfaces/_types_types_.createprops",
      "api/interfaces/_types_types_.cursor",
      "api/interfaces/_types_types_.date",
      "api/interfaces/_types_types_.galleryview",
      "api/interfaces/_types_types_.googledrivefile",
      "api/interfaces/_types_types_.googledrivefileuser",
      "api/interfaces/_types_types_.icache",
      "api/interfaces/_types_types_.idate",
      "api/interfaces/_types_types_.idaterange",
      "api/interfaces/_types_types_.idatereminder",
      "api/interfaces/_types_types_.idatetime",
      "api/interfaces/_types_types_.idatetimerange",
      "api/interfaces/_types_types_.lasteditedprops",
      "api/interfaces/_types_types_.listview",
      "api/interfaces/_types_types_.nishanarg",
      "api/interfaces/_types_types_.node",
      "api/interfaces/_types_types_.operation",
      "api/interfaces/_types_types_.parentprops",
      "api/interfaces/_types_types_.permission",
      "api/interfaces/_types_types_.request",
      "api/interfaces/_types_types_.schema",
      "api/interfaces/_types_types_.schemaunit",
      "api/interfaces/_types_types_.stack",
      "api/interfaces/_types_types_.tableview",
      "api/interfaces/_types_types_.token",
      "api/interfaces/_types_types_.transaction",
      "api/interfaces/_types_types_.valuearg",
      "api/interfaces/_types_types_.viewaggregations",
      "api/interfaces/_types_types_.viewfilters",
      "api/interfaces/_types_types_.viewformatproperties",
      "api/interfaces/_types_types_.viewsorts"
    ]
  }
];