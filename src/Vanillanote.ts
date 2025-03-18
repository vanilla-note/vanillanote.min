import {
	Vanillanote,
	VanillanoteConstructor,
	VanillanoteElement
} from './index'

function getVanillanote(): Vanillanote {
	function VanillanoteInstance() {
		//cosnt
		this.consts = {
			// Start possible tags
			START_POSSIBLE_TAG : ["P","H1","H2","H3","H4","H5","H6","OL","UL","BR","DIV","PRE","BLOCKQUOTE","TABLE"],
			// Unit tags for edit
			UNIT_TAG : ["P","H1","H2","H3","H4","H5","H6","LI","DIV","PRE","BLOCKQUOTE","TH","TD"],
			// Tags with a double structure
			DOUBLE_TAG : ["UL","OL"],
			// Tags that are not single
			NOT_SINGLE_TAG : ["P","H1","H2","H3","H4","H5","H6","OL","UL","LI","DIV","PRE","BLOCKQUOTE"],
			// Specially managed tags
			SPECIAL_TAG: ["A","IMG","IFRAME"],
			// Tags that are automatically converted by the browser during style conversion
			AUTO_MODIFY_TAG : ["B","U"],
			// Tags that allow text whitespace (regularly delete the tag if the text is whitespace)
			EMPTY_ABLE_TAG : ["BR","IMG","IFRAME","INPUT","I"],
			// Keys (id, className) of elements
			CLASS_NAMES : {
				template : {
					id : "template",
					className : "template",
				},
				textarea : {
					id : "textarea",
					className : "textarea",
				},
				tool : {
					id : "tool",
					className : "tool",
				},
				toolToggleButton : {
					id : "toolToggleButton",
					className : "button",
				},
				paragraphStyleSelect : {
					id : "paragraphStyleSelect",
					className : "select",
				},
				paragraphStyleSelectBox : {
					id : "paragraphStyleSelectBox",
					className : "select_box_a",
				},
				styleNomal : {
					id : "styleNomal",
					className : "select_list",
				},
				styleHeader1 : {
					id : "styleHeader1",
					className : "select_list",
				},
				styleHeader2 : {
					id : "styleHeader2",
					className : "select_list",
				},
				styleHeader3 : {
					id : "styleHeader3",
					className : "select_list",
				},
				styleHeader4 : {
					id : "styleHeader4",
					className : "select_list",
				},
				styleHeader5 : {
					id : "styleHeader5",
					className : "select_list",
				},
				styleHeader6 : {
					id : "styleHeader6",
					className : "select_list",
				},
				boldButton : {
					id : "boldButton",
					className : "button",
				},
				underlineButton : {
					id : "underlineButton",
					className : "button",
				},
				italicButton : {
					id : "italicButton",
					className : "button",
				},
				ulButton : {
					id : "ulButton",
					className : "button",
				},
				olButton : {
					id : "olButton",
					className : "button",
				},
				textAlignSelect : {
					id : "textAlignSelect",
					className : "button",
				},
				textAlignSelectBox : {
					id : "textAlignSelectBox",
					className : "select_box_b",
				},
				textAlignLeft : {
					id : "textAlignLeft",
					className : "select_list_button",
				},
				textAlignCenter : {
					id : "textAlignCenter",
					className : "select_list_button",
				},
				textAlignRight : {
					id : "textAlignRight",
					className : "select_list_button",
				},
				attLinkButton : {
					id : "attLinkButton",
					className : "button",
				},
				attFileButton : {
					id : "attFileButton",
					className : "button",
				},
				attImageButton : {
					id : "attImageButton",
					className : "button",
				},
				attVideoButton : {
					id : "attVideoButton",
					className : "button",
				},
				fontSizeInputBox : {
					id : "fontSizeInputBox",
					className : "small_input_box",
				},
				fontSizeInput : {
					id : "fontSizeInput",
					className : "small_input",
				},
				letterSpacingInputBox : {
					id : "letterSpacingInputBox",
					className : "small_input_box",
				},
				letterSpacingInput : {
					id : "letterSpacingInput",
					className : "small_input",
				},
				lineHeightInputBox : {
					id : "lineHeightInputBox",
					className : "small_input_box",
				},
				lineHeightInput : {
					id : "lineHeightInput",
					className : "small_input",
				},
				fontFamilySelect : {
					id : "fontFamilySelect",
					className : "select",
				},
				fontFamilySelectBox : {
					id : "fontFamilySelectBox",
					className : "select_box_a",
				},
				fontFamily : {
					id : "fontFamily_",
					className : "select_list",
				},
				colorTextSelect : {
					id : "colorTextSelect",
					className : "button",
				},
				colorTextSelectBox : {
					id : "colorTextSelectBox",
					className : "select_box_c",
				},
				colorText0 : {
					id : "colorText0",
					className : "color_button",
				},
				colorText1 : {
					id : "colorText1",
					className : "color_button",
				},
				colorText2 : {
					id : "colorText2",
					className : "color_button",
				},
				colorText3 : {
					id : "colorText3",
					className : "color_button",
				},
				colorText4 : {
					id : "colorText4",
					className : "color_button",
				},
				colorText5 : {
					id : "colorText5",
					className : "color_button",
				},
				colorText6 : {
					id : "colorText6",
					className : "color_button",
				},
				colorText7 : {
					id : "colorText7",
					className : "color_button",
				},
				colorTextRInput : {
					id : "colorTextRInput",
					className : "color_input",
				},
				colorTextRExplain : {
					id : "colorTextRExplain",
					className : "color_explain",
				},
				colorTextGInput : {
					id : "colorTextGInput",
					className : "color_input",
				},
				colorTextGExplain : {
					id : "colorTextGExplain",
					className : "color_explain",
				},
				colorTextBInput : {
					id : "colorTextBInput",
					className : "color_input",
				},
				colorTextBExplain : {
					id : "colorTextBExplain",
					className : "color_explain",
				},
				colorTextOpacityInput : {
					id : "colorTextOpacityInput",
					className : "color_input",
				},
				colorTextOpacityExplain : {
					id : "colorTextOpacityExplain",
					className : "color_explain",
				},
				colorBackSelect : {
					id : "colorBackSelect",
					className : "button",
				},
				colorBackSelectBox : {
					id : "colorTextSelectBox",
					className : "select_box_c",
				},
				colorBack0 : {
					id : "colorBack0",
					className : "color_button",
				},
				colorBack1 : {
					id : "colorBack1",
					className : "color_button",
				},
				colorBack2 : {
					id : "colorBack2",
					className : "color_button",
				},
				colorBack3 : {
					id : "colorBack3",
					className : "color_button",
				},
				colorBack4 : {
					id : "colorBack4",
					className : "color_button",
				},
				colorBack5 : {
					id : "colorBack5",
					className : "color_button",
				},
				colorBack6 : {
					id : "colorBack6",
					className : "color_button",
				},
				colorBack7 : {
					id : "colorBack7",
					className : "color_button",
				},
				colorBackRInput : {
					id : "colorBackRInput",
					className : "color_input",
				},
				colorBackRExplain : {
					id : "colorBackRExplain",
					className : "color_explain",
				},
				colorBackGInput : {
					id : "colorBackGInput",
					className : "color_input",
				},
				colorBackGExplain : {
					id : "colorBackGExplain",
					className : "color_explain",
				},
				colorBackBInput : {
					id : "colorBackBInput",
					className : "color_input",
				},
				colorBackBExplain : {
					id : "colorBackBExplain",
					className : "color_explain",
				},
				colorBackOpacityInput : {
					id : "colorBackOpacityInput",
					className : "color_input",
				},
				colorBackOpacityExplain : {
					id : "colorBackOpacityExplain",
					className : "color_explain",
				},
				formatClearButton : {
					id : "formatClearButton",
					className : "button",
				},
				undoButton : {
					id : "undoButton",
					className : "button",
				},
				redoButton : {
					id : "redoButton",
					className : "button",
				},
				helpButton : {
					id : "helpButton",
					className : "button",
				},
				modalBack : {
					id : "modalBack",
					className : "modal_back",
				},
				attLinkModal : {
					id : "attLinkModal",
					className : "modal_body",
				},
				attLinkHeader : {
					id : "attLinkHeader",
					className : "modal_header",
				},
				attLinkFooter : {
					id : "attLinkFooter",
					className : "modal_footer",
				},
				attLinkExplain1 : {
					id : "attLinkExplain1",
					className : "modal_explain",
				},
				attLinkText : {
					id : "attLinkText",
					className : "modal_input",
				},
				attLinkExplain2 : {
					id : "attLinkExplain2",
					className : "modal_explain",
				},
				attLinkHref : {
					id : "attLinkHref",
					className : "modal_input",
				},
				attLinkIsBlankLabel : {
					id : "attLinkIsBlankLabel",
					className : "att_link_is_blank_label",
				},
				attLinkIsBlankCheckbox : {
					id : "attLinkIsBlankCheckbox",
					className : "input_checkbox",
				},
				attLinkValidCheckText : {
					id : "attLinkValidChecktext",
					className : "att_valid_checktext",
				},
				attLinkValidCheckbox : {
					id : "attLinkValidCheckbox",
					className : "input_checkbox",
				},
				attLinkInsertButton : {
					id : "attLinkInsertButton",
					className : "normal_button",
				},
				attLinkTooltip : {
					id : "attLinkTooltip",
					className : "tooltip",
				},
				attLinkTooltipHref : {
					id : "attLinkTooltipHref",
					className : "att_link_tooltip_href",
				},
				attLinkTooltipEditButton : {
					id : "attLinkTooltipEditButton",
					className : "tooltip_button",
				},
				attLinkTooltipUnlinkButton : {
					id : "attLinkTooltipUnlinkButton",
					className : "tooltip_button",
				},
				attFileModal : {
					id : "attFileModal",
					className : "modal_body",
				},
				attFileHeader : {
					id : "attFileHeader",
					className : "modal_header",
				},
				attFilelayout : {
					id : "attFilelayout",
					className : "modal_layout",
				},
				attFileExplain1 : {
					id : "attFileExplain1",
					className : "modal_explain",
				},
				attFileUploadButton : {
					id : "attFileUploadButton",
					className : "normal_button",
				},
				attFileUploadDiv : {
					id : "attFileUploadDiv",
					className : "drag_drop_div",
				},
				attFileUpload : {
					id : "attFileUpload",
					className : "modal_input_file",
				},
				attFileInsertButton : {
					id : "attFileInsertButton",
					className : "normal_button",
				},
				attFileFooter : {
					id : "attFileFooter",
					className : "modal_footer",
				},
				attImageModal : {
					id : "attImageModal",
					className : "modal_body",
				},
				attImageHeader : {
					id : "attImageHeader",
					className : "modal_header",
				},
				attImageExplain1 : {
					id : "attImageExplain1",
					className : "modal_explain",
				},
				attImageExplain2 : {
					id : "attImageExplain2",
					className : "modal_explain",
				},
				attImageUploadButtonAndView : {
					id : "attImageUploadButtonAndView",
					className : "image_view_div",
				},
				attImageViewPreButtion : {
					id : "attImageViewPreButtion",
					className : "opacity_button",
				},
				attImageViewNextButtion : {
					id : "attImageViewNextButtion",
					className : "opacity_button",
				},
				attImageUpload : {
					id : "attImageUpload",
					className : "modal_input_file",
				},
				attImageURL : {
					id : "attImageURL",
					className : "modal_input",
				},
				attImageInsertButton : {
					id : "attImageInsertButton",
					className : "normal_button",
				},
				attImageFooter : {
					id : "attImageFooter",
					className : "modal_footer",
				},
				attVideoModal : {
					id : "attVideoModal",
					className : "modal_body",
				},
				attVideoHeader : {
					id : "attVideoHeader",
					className : "modal_header",
				},
				attVideoExplain1 : {
					id : "attVideoExplain1",
					className : "modal_explain",
				},
				attVideoEmbedId : {
					id : "attVideoEmbedId",
					className : "modal_input",
				},
				attVideoExplain2 : {
					id : "attVideoExplain2",
					className : "modal_explain",
				},
				attVideoWidth : {
					id : "attVideoWidth",
					className : "modal_small_input",
				},
				attVideoHeight : {
					id : "attVideoHeight",
					className : "modal_small_input",
				},
				attVideoValidCheckText : {
					id : "attVideoValidCheckText",
					className : "att_valid_checktext",
				},
				attVideoValidCheckbox : {
					id : "attVideoValidCheckbox",
					className : "input_checkbox",
				},
				attVideoInsertButton : {
					id : "attVideoInsertButton",
					className : "normal_button",
				},
				attVideoFooter : {
					id : "attVideoFooter",
					className : "modal_footer",
				},
				attImageAndVideoTooltip : {
					id : "attImageAndVideoTooltip",
					className : "tooltip",
				},
				attImageAndVideoTooltipWidthInput : {
					id : "attImageAndVideoTooltipWidthInput",
					className : "smallpx_input",
				},
				attImageAndVideoTooltipFloatRadioNone : {
					id : "attImageAndVideoTooltipFloatRadioNone",
					className : "input_radio",
				},
				attImageAndVideoTooltipFloatRadioLeft : {
					id : "attImageAndVideoTooltipFloatRadioLeft",
					className : "input_radio",
				},
				attImageAndVideoTooltipFloatRadioRight : {
					id : "attImageAndVideoTooltipFloatRadioRight",
					className : "input_radio",
				},
				attImageAndVideoTooltipShapeRadioSquare : {
					id : "attImageAndVideoTooltipShapeRadioSquare",
					className : "input_radio",
				},
				attImageAndVideoTooltipShapeRadioRadius : {
					id : "attImageAndVideoTooltipShapeRadioRadius",
					className : "input_radio",
				},
				attImageAndVideoTooltipShapeRadioCircle : {
					id : "attImageAndVideoTooltipShapeRadioCircle",
					className : "input_radio",
				},
				helpModal : {
					id : "helpModal",
					className : "modal_body",
				},
				helpMain : {
					id : "helpMain",
					className : "help_main",
				},
				helpHeader : {
					id : "helpHeader",
					className : "modal_header",
				},
				helpFooter : {
					id : "helpFooter",
					className : "modal_footer",
				},
				placeholder : {
					id : "placeholder",
					className : "placeholder",
				},
			},
		};
		
		this.csses = {
			"template h1" : [],
			"template h2" : [],
			"template h3" : [],
			"template h4" : [],
			"template h5" : [],
			"template h6" : [],
			"textarea ul" : [],
			"textarea ol" : [],
			"textarea li" : [],
			"textarea p" : [],
			"textarea div" : [],
			"textarea span" : [],
			"textarea a" : [],
			"template" : [],
			"textarea" : [],
			"tool" : [],
			"icon" : [],
			"button" : [],
			"select" : [],
			"select_box_a" : [],
			"select_box_b" : [],
			"select_box_c" : [],
			"select_list" : [],
			"select_list_button" : [],
			"small_input_box" : [],
			"small_input" : [],
			"small_input:focus" : [],
			"small_input::-webkit-inner-spin-button" : [],
			"small_input::-webkit-outer-spin-button" : [],
			"small_input[type=number]" : [],
			"normal_button" : [],
			"opacity_button" : [],
			"small_text_box" : [],
			"modal_back" : [],
			"modal_body" : [],
			"modal_header" : [],
			"modal_footer" : [],
			"modal_explain" : [],
			"modal_input" : [],
			"modal_input:focus" : [],
			"modal_input[readonly]" : [],
			"modal_small_input" : [],
			"modal_small_input:focus" : [],
			"modal_small_input::-webkit-inner-spin-button" : [],
			"modal_small_input::-webkit-outer-spin-button" : [],
			"modal_small_input[type=number]" : [],
			"modal_small_input[readonly]" : [],
			"att_link_is_blank_label" : [],
			"att_valid_checktext" : [],
			"input_checkbox" : [],
			"input_checkbox:focus" : [],
			"input_checkbox[disabled]" : [],
			"smallpx_input" : [],
			"smallpx_input:focus" : [],
			"smallpx_input::-webkit-inner-spin-button" : [],
			"input_radio" : [],
			"input_radio:focus" : [],
			"input_radio:checked" : [],
			"input_radio[disabled]" : [],
	    	"modal_input_file" : [],
	    	"drag_drop_div" : [],
	    	"image_view_div" : [],
			"color_button" : [],
			"color_input" : [],
			"color_input:focus" : [],
			"color_input::-webkit-inner-spin-button" : [],
			"color_explain" : [],
			"tooltip" : [],
			"tooltip_button" : [],
			"att_link_tooltip_href" : [],
			"help_main" : [],
			"placeholder" : [],
			"on_button_on" : [],
			"on_active" : [],
			"on_mouseover" : [],
			"on_mouseout" : [],
			"on_display_inline" : [],
			"on_display_inline_block" : [],
			"on_display_block" : [],
			"on_display_none" : [],
		};
		
		this.keyframes = {
			"@keyframes vanillanote-modal-input" : "@keyframes vanillanote-modal-input {0%{width: 30%;}100%{width: 80%;}}\n",
			"@keyframes vanillanote-modal-small-input" : "@keyframes vanillanote-modal-small-input {0%{width: 0%;}100%{width: 20%;}}\n",
		};
		
		this.colors = {
			color1 : [],	//filled
			color2 : [],	//empty
			color3 : [],	//toolbar
			color4 : [],	//button
			color5 : [],	//active
			color6 : [],	//border
			color7 : [],	//box-shadow
			color8 : [],	//correct
			color9 : [],	//notice
			color10: [],  	//modal text
			color11: [],  	//a tag color
			color12: [],  	//color 0 text color
			color13: [],  	//color 0 text background color
			color14: [],  	//color 1
			color15: [],  	//color 2
			color16: [],  	//color 3
			color17: [],  	//color 4
			color18: [],  	//color 5
			color19: [],  	//color 6
			color20: [],  	//color 7
		};
		
		//Element storage(Stored in an array to create multiple notes on a single page)
		this.elements = {
			notes : [],
			templates : [],
			tools : [],
			textareas : [],
			toolToggleButtons : [],
			paragraphStyleSelects : [],
			paragraphStyleSelectBoxes : [],
			boldButtons : [],
			underlineButtons : [],
			italicButtons : [],
			ulButtons : [],
			olButtons : [],
			textAlignSelects : [],
			textAlignSelectBoxes : [],
			attLinkButtons : [],
			attFileButtons : [],
			attImageButtons : [],
			attVideoButtons : [],
			fontSizeInputBoxes : [],
			fontSizeInputs : [],
			letterSpacingInputBoxes : [],
			letterSpacingInputs : [],
			lineHeightInputBoxes : [],
			lineHeightInputs : [],
			fontFamilySelects : [],
			fontFamilySelectBoxes : [],
			colorTextSelects : [],
			colorTextSelectBoxes : [],
			colorText0s : [],
			colorText1s : [],
			colorText2s : [],
			colorText3s : [],
			colorText4s : [],
			colorText5s : [],
			colorText6s : [],
			colorText7s : [],
			colorTextRInputs : [],
			colorTextGInputs : [],
			colorTextBInputs : [],
			colorTextOpacityInputs : [],
			colorBackSelects : [],
			colorBackSelectBoxes : [],
			colorBack0s : [],
			colorBack1s : [],
			colorBack2s : [],
			colorBack3s : [],
			colorBack4s : [],
			colorBack5s : [],
			colorBack6s : [],
			colorBack7s : [],
			colorBackRInputs : [],
			colorBackGInputs : [],
			colorBackBInputs : [],
			colorBackOpacityInputs : [],
			formatClearButtons : [],
			undoButtons : [],
			redoButtons : [],
			helpButtons : [],
			backModals : [],
			attLinkModals : [],
			attLinkHrefs : [],
			attLinkTexts : [],
			attLinkIsBlankCheckboxes : [],
			attLinkValidCheckboxes : [],
			attLinkValidCheckTexts : [],
			attLinkInsertButtons : [],
			attFileModals : [],
			attFilelayouts :[],
			attFileUploadDivs : [],
		    attFileUploadButtons :[],
		    attFileUploads  : [],
		    attFileInsertButtons   :[],
		    attLinkTooltips : [],
		    attLinkTooltipHrefs : [],
		    attLinkTooltipEditButtons : [],
		    attLinkTooltipUnlinkButtons : [],
			attImageModals : [],
			attImageUploadButtonAndViews : [],
			attImageUploads : [],
			attImageURLs : [],
			attImageInsertButtons : [],
			attImageViewPreButtions : [],
			attImageViewNextButtions : [],
			attVideoModals : [],
			attVideoEmbedIds : [],
			attVideoWidthes : [],
			attVideoHeights : [],
			attVideoValidCheckTexts : [],
			attVideoValidCheckboxes : [],
			attVideoInsertButtons : [],
			attImageAndVideoTooltips : [],
			attImageAndVideoTooltipWidthInputs : [],
			attImageAndVideoTooltipFloatRadioNones : [],
			attImageAndVideoTooltipFloatRadioLefts : [],
			attImageAndVideoTooltipFloatRadioRights : [],
			attImageAndVideoTooltipShapeRadioSquares : [],
			attImageAndVideoTooltipShapeRadioRadiuses : [],
			attImageAndVideoTooltipShapeRadioCircles : [],
			helpModals : [],
			placeholders : [],
		};
		
		//Variable storage
		this.variables = {
			noteName : "vanillanote",
			isCreated : false,
			logMode : "ERROR", 	//DEBUG : Total log, INFO : infomation, ERROR : only error(default)
			observerOptions : {characterData: true, childList: true, subtree: true},
			useMobileActiveMode : [],
			lastActiveNote : 0,
			recodeNotes : [],
			recodeContings : [],
			recodeLimit : [],
			lastScreenHeight : null,
			isIOS : false,
			mobileKeyboardExceptHeight : null,
			isSelectionProgress : false,
			preventChangeScroll : 0,
			resizeInterval : 50,
			inputInterval : 50,
			loadInterval : 100,
			canEvents : true,
			toolPositions : [],
			toolDefaultLines : [],
			textareaOriginWidths : [],
			textareaOriginHeights : [],
			placeholderIsVisible : [],
			placeholderAddTop : [],
			placeholderAddLeft : [],
			placeholderWidth : [],
			editSelections: [],
			editRanges : [],
			startOffsets : [],
			endOffsets : [],
			editStartNodes : [],
			editEndNodes : [],
			editStartElements : [],
			editEndElements : [],
			editStartUnitElements : [],
			editEndUnitElements : [],
			editDragUnitElements : [],
			setEditStyleTagToggle : 0,
			toolToggles : [],
			boldToggles : [],
			underlineToggles : [],
			italicToggles : [],
			ulToggles : [],
			olToggles : [],
			fontSizes : [],
			letterSpacings : [],
			lineHeights : [],
			fontFamilies : [],
			colorTextRs : [],
			colorTextGs : [],
			colorTextBs : [],
			colorTextOs : [],
			colorTextRGBs : [],
			colorTextOpacitys : [],
			colorBackRs : [],
			colorBackGs : [],
			colorBackBs : [],
			colorBackOs : [],
			colorBackRGBs : [],
			colorBackOpacitys : [],
			openedModals : [],
			attFilePreventTypes : [],
			attFileAcceptTypes : [],
			attFileMaxSizes : [],
	    	attTempFiles : [],
	    	attFiles : [],
			attImagePreventTypes : [],
			attImageAcceptTypes : [],
			attImageMaxSizes : [],
	    	attTempImages : [],
	    	attImages : [],
			sizeRates : [],	// 1 ~ 10
			defaultStyles : [],	//font family, font size, line height
			languages : [],
		};
		
		//Language pack
		this.languageSet = {
			ENG : {
				textareaTooltip : "HELLO VANILLANOTE!",
				thanks : "Thank you!",
				styleTooltip : "Please let me know your style.",
				boldTooltip : "This is a bold button.",
				underlineTooltip : "This is a under line button.",
				italicTooltip : "This is a italic button.",
				ulTooltip : "This is a ul button.",
				olTooltip : "This is a ol button.",
				textAlignTooltip : "Select your text align.",
				attLinkTooltip : "This is a attach link button.",
				attFileTooltip : "This is a attach file button.",
				attImageTooltip : "This is a attach image button.",
				attVideoTooltip : "This is a attach video button.",
				fontSizeTooltip : "Please let me know the font size.",
				letterSpacingTooltip : "Please let me know the letter spacing.",
				lineHeightTooltip : "Please let me know the line height.",
				fontFamilyTooltip : "Please let me know your font family.",
				colorTextTooltip : "This is a text color button.",
				colorBackTooltip : "This is a background color button.",
				formatClearButtonTooltip : "clear your format.",
				undoTooltip : "undo",
				redoTooltip : "redo",
				helpTooltip : "What can i help you.",
				attLinkModalTitle : "INSERT LINK",
				attLinkInTextExplain : "Text to display",
				attLinkInLinkExplain : "To what URL should this link go?",
				attLinkIsOpenExplain : "   Open in new window",
				attLinkInTextTooltip : "Please let me know the text.",
				attLinkInLinkTooltip : "Please let me know the link.",
				attLinkIsOpenTooltip : "Does it open in a new window?",
				attFileModalTitle : "INSERT FILE",
				attFileExplain1 : "Please upload your file",
				attFileUploadButton : "file upload",
				attFileUploadDiv : "drop your files!",
				attFileListTooltip : "remove",
				attImageModalTitle : "INSERT IMAGE",
				attImageUploadButtonAndView : "Image upload",
				attImageExplain1 : "Please upload your image",
				attImageExplain2 : "URL",
				attImageURLTooltip : "Please let me know the URL.",
				attOverSize : "The file exceeds the allowed size.",
				attPreventType : "The file is not of an allowed type.",
				attVideoModalTitle : "INSERT YOUTUBE",
				attVideoExplain1 : "Youtube Embed Id",
				attVideoExplain2 : "Check your size",
				attVideoEmbedIdTooltip : "Please let me know the embed id.",
				attVideoWidthTooltip : "Please let me know the width percent.",
				attVideoHeightTooltip : "Please let me know the height pixel.",
				attImageAndVideoTooltipWidthInput : "width",
				attImageAndVideoTooltipFloatRadio : "float",
				attImageAndVideoTooltipShapeRadio : "Shape",
				helpModalTitle : "Help",
				helpContent : [
					{"ctrl + z" : "Undo the last command"},
					{"ctrl + y" : "Redo the last command"},
					{"ctrl + b" : "Set a bold style"},
					{"ctrl + u" : "Set a underline style"},
					{"ctrl + i" : "Set a italic style"},
					{"enter" : "Add new line as new block"},
					{"shift + enter" : "Add new line in now block"},
					{"etc1" : "On mobile, you can only change the style after dragging."},
					{"etc2" : "Uploading a video requires using the YouTube embed id."},
				],
			},
			KOR : {
				textareaTooltip : "",
				thanks : "감사합니다!",
				styleTooltip : "문단 스타일",
				boldTooltip : "굵게",
				underlineTooltip : "밑줄",
				italicTooltip : "기울게",
				ulTooltip : "목록",
				olTooltip : "번호 목록",
				textAlignTooltip : "수평 정렬",
				attLinkTooltip : "링크 첨부",
				attFileTooltip : "파일 첨부",
				attImageTooltip : "이미지 첨부",
				attVideoTooltip : "동영상 첨부",
				fontSizeTooltip : "글자 크기",
				letterSpacingTooltip : "자간",
				lineHeightTooltip : "수직 넓기",
				fontFamilyTooltip : "글씨체",
				colorTextTooltip : "글자 색상",
				colorBackTooltip : "배경 색상",
				formatClearButtonTooltip : "효과 제거",
				undoTooltip : "실행 취소",
				redoTooltip : "다시 실행",
				helpTooltip : "도움말",
				attLinkModalTitle : "링크 삽입",
				attLinkInTextExplain : "보여질 문장을 넣어주세요.",
				attLinkInLinkExplain : "이동할 링크를 넣어주세요.",
				attLinkIsOpenExplain : "   새창열기?",
				attLinkInTextTooltip : "문장을 넣어주세요.",
				attLinkInLinkTooltip : "링크를 넣어주세요.",
				attLinkIsOpenTooltip : "클릭 시 새로운 창에서 열립니다.",
				attFileModalTitle : "파일 삽입",
				attFileExplain1 : "파일을 업로드 해주세요.",
				attFileUploadButton : "파일 선택",
				attFileUploadDiv : "파일을 떨궈 주세요.",
				attFileListTooltip : "삭제",
				attImageModalTitle : "이미지 삽입",
				attImageUploadButtonAndView : "이미지 선택",
				attImageExplain1 : "이미지를 업로드 해주세요.",
				attImageExplain2 : "URL",
				attImageURLTooltip : "URL을 지정 해주세요.",
				attOverSize : "파일은 허용 용량을 초과했습니다.",
				attPreventType : "파일은 허용된 유형이 아닙니다.",
				attVideoModalTitle : "유튜브 삽입",
				attVideoExplain1 : "Youtube Embed Id",
				attVideoExplain2 : "프레임 크기",
				attVideoEmbedIdTooltip : "유튜브 embed id를 알려주세요.",
				attVideoWidthTooltip : "%",
				attVideoHeightTooltip : "PX",
				attImageAndVideoTooltipWidthInput : "가로",
				attImageAndVideoTooltipFloatRadio : "띄우기",
				attImageAndVideoTooltipShapeRadio : "모양",
				helpModalTitle : "질문",
				helpContent : [
					{"ctrl + z" : "실행취소"},
					{"ctrl + y" : "다시실행"},
					{"ctrl + b" : "굵게"},
					{"ctrl + u" : "밑줄"},
					{"ctrl + i" : "기울게"},
					{"enter" : "새로운 블럭에 새로운 라인은 추가합니다."},
					{"shift + enter" : "기존 블럭에 새로운 라인을 추가합니다."},
					{"etc1" : "모바일에서는 드래그 후 스타일 적용만 가능합니다."},
					{"etc2" : "동영상 업로드는 YouTube embed id를 활용해야 합니다."},
				],
			},
		};
		//==================================================================================
		//element public events
		//==================================================================================
		this.elementEvents = {
			//textarea event
			textarea_onBeforeClick : function(e: any) {return true;},
			textarea_onAfterClick : function(e: any) {},
			textarea_onBeforeFocus : function(e: any) {return true;},
			textarea_onAfterFocus : function(e: any) {},
			textarea_onBeforeBlur : function(e: any) {return true;},
			textarea_onAfterBlur : function(e: any) {},
			
			//paragraphStyleSelect event
			paragraphStyleSelect_onBeforeClick : function(e: any) {return true;},
			paragraphStyleSelect_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//toolToggleButton event
			toolToggleButton_onBeforeClick : function(e: any) {return true;},
			toolToggleButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleNomal event
			styleNomal_onBeforeClick : function(e: any) {return true;},
			styleNomal_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleHeader1 event
			styleHeader1_onBeforeClick : function(e: any) {return true;},
			styleHeader1_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleHeader2 event
			styleHeader2_onBeforeClick : function(e: any) {return true;},
			styleHeader2_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleHeader3 event
			styleHeader3_onBeforeClick : function(e: any) {return true;},
			styleHeader3_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleHeader4 event
			styleHeader4_onBeforeClick : function(e: any) {return true;},
			styleHeader4_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleHeader5 event
			styleHeader5_onBeforeClick : function(e: any) {return true;},
			styleHeader5_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//styleHeader6 event
			styleHeader6_onBeforeClick : function(e: any) {return true;},
			styleHeader6_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//boldButton event
			boldButton_onBeforeClick : function(e: any) {return true;},
			boldButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//underlineButton event
			underlineButton_onBeforeClick : function(e: any) {return true;},
			underlineButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//italicButton event
			italicButton_onBeforeClick : function(e: any) {return true;},
			italicButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//ulButton event
			ulButton_onBeforeClick : function(e: any) {return true;},
			ulButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//olButton event
			olButton_onBeforeClick : function(e: any) {return true;},
			olButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//textAlignSelect event
			textAlignSelect_onBeforeClick : function(e: any) {return true;},
			textAlignSelect_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//textAlignLeft event
			textAlignLeft_onBeforeClick : function(e: any) {return true;},
			textAlignLeft_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//textAlignCenter event
			textAlignCenter_onBeforeClick : function(e: any) {return true;},
			textAlignCenter_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//textAlignRight event
			textAlignRight_onBeforeClick : function(e: any) {return true;},
			textAlignRight_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//attLinkButton event
			attLinkButton_onBeforeClick : function(e: any) {return true;},
			attLinkButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//attFileButton event
			attFileButton_onBeforeClick : function(e: any) {return true;},
			attFileButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//attImageButton event
			attImageButton_onBeforeClick : function(e: any) {return true;},
			attImageButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//attVideoButton event
			attVideoButton_onBeforeClick : function(e: any) {return true;},
			attVideoButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//fontSizeInputBox event
			fontSizeInputBox_onBeforeClick : function(e: any) {return true;},
			fontSizeInputBox_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//fontSizeInput event
			fontSizeInput_onBeforeClick : function(e: any) {return true;},
			fontSizeInput_onAfterClick : function(e: any) {},
			fontSizeInput_onBeforeInput : function(e: any) {return true;},
			fontSizeInput_onAfterInput : function(e: any) {},
			fontSizeInput_onBeforeBlur : function(e: any) {return true;},
			fontSizeInput_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//letterSpacingInputBox event
			letterSpacingInputBox_onBeforeClick : function(e: any) {return true;},
			letterSpacingInputBox_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//letterSpacingInput event
			letterSpacingInput_onBeforeClick : function(e: any) {return true;},
			letterSpacingInput_onAfterClick : function(e: any) {},
			letterSpacingInput_onBeforeInput : function(e: any) {return true;},
			letterSpacingInput_onAfterInput : function(e: any) {},
			letterSpacingInput_onBeforeBlur : function(e: any) {return true;},
			letterSpacingInput_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//lineHeightInputBox event
			lineHeightInputBox_onBeforeClick : function(e: any) {return true;},
			lineHeightInputBox_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//lineHeightInput event
			lineHeightInput_onBeforeClick : function(e: any) {return true;},
			lineHeightInput_onAfterClick : function(e: any) {},
			lineHeightInput_onBeforeInput : function(e: any) {return true;},
			lineHeightInput_onAfterInput : function(e: any) {},
			lineHeightInput_onBeforeBlur : function(e: any) {return true;},
			lineHeightInput_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//fontFamilySelect event
			fontFamilySelect_onBeforeClick : function(e: any) {return true;},
			fontFamilySelect_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//color text select
			colorTextSelect_onBeforeClick : function(e: any) {return true;},
			colorTextSelect_onAfterClick : function(e: any) {},
			//color text select box
			colorTextSelectBox_onBeforeClick : function(e: any) {return true;},
			colorTextSelectBox_onAfterClick : function(e: any) {},
			//colorText0 button
			colorText0_onBeforeClick : function(e: any) {return true;},
			colorText0_onAfterClick : function(e: any) {},
			//colorText1 button
			colorText1_onBeforeClick : function(e: any) {return true;},
			colorText1_onAfterClick : function(e: any) {},
			//colorText2 button
			colorText2_onBeforeClick : function(e: any) {return true;},
			colorText2_onAfterClick : function(e: any) {},
			//colorText3 button
			colorText3_onBeforeClick : function(e: any) {return true;},
			colorText3_onAfterClick : function(e: any) {},
			//colorText4 button
			colorText4_onBeforeClick : function(e: any) {return true;},
			colorText4_onAfterClick : function(e: any) {},
			//colorText5 button
			colorText5_onBeforeClick : function(e: any) {return true;},
			colorText5_onAfterClick : function(e: any) {},
			//colorText6 button
			colorText6_onBeforeClick : function(e: any) {return true;},
			colorText6_onAfterClick : function(e: any) {},
			//colorText7 button
			colorText7_onBeforeClick : function(e: any) {return true;},
			colorText7_onAfterClick : function(e: any) {},
			//colorText R Input event
			colorTextRInput_onBeforeClick : function(e: any) {return true;},
			colorTextRInput_onAfterClick : function(e: any) {},
			colorTextRInput_onBeforeInput : function(e: any) {return true;},
			colorTextRInput_onAfterInput : function(e: any) {},
			colorTextRInput_onBeforeBlur : function(e: any) {return true;},
			colorTextRInput_onAfterBlur : function(e: any) {},
			//colorText G Input event
			colorTextGInput_onBeforeClick : function(e: any) {return true;},
			colorTextGInput_onAfterClick : function(e: any) {},
			colorTextGInput_onBeforeInput : function(e: any) {return true;},
			colorTextGInput_onAfterInput : function(e: any) {},
			colorTextGInput_onBeforeBlur : function(e: any) {return true;},
			colorTextGInput_onAfterBlur : function(e: any) {},
			//colorText B Input event
			colorTextBInput_onBeforeClick : function(e: any) {return true;},
			colorTextBInput_onAfterClick : function(e: any) {},
			colorTextBInput_onBeforeInput : function(e: any) {return true;},
			colorTextBInput_onAfterInput : function(e: any) {},
			colorTextBInput_onBeforeBlur : function(e: any) {return true;},
			colorTextBInput_onAfterBlur : function(e: any) {},
			//colorText Opacity Input event
			colorTextOpacityInput_onBeforeClick : function(e: any) {return true;},
			colorTextOpacityInput_onAfterClick : function(e: any) {},
			colorTextOpacityInput_onBeforeInput : function(e: any) {return true;},
			colorTextOpacityInput_onAfterInput : function(e: any) {},
			colorTextOpacityInput_onBeforeBlur : function(e: any) {return true;},
			colorTextOpacityInput_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//color background select
			colorBackSelect_onBeforeClick : function(e: any) {return true;},
			colorBackSelect_onAfterClick : function(e: any) {},
			//color back select box
			colorBackSelectBox_onBeforeClick : function(e: any) {return true;},
			colorBackSelectBox_onAfterClick : function(e: any) {},
			//colorBack0 button
			colorBack0_onBeforeClick : function(e: any) {return true;},
			colorBack0_onAfterClick : function(e: any) {},
			//colorBack1 button
			colorBack1_onBeforeClick : function(e: any) {return true;},
			colorBack1_onAfterClick : function(e: any) {},
			//colorBack2 button
			colorBack2_onBeforeClick : function(e: any) {return true;},
			colorBack2_onAfterClick : function(e: any) {},
			//colorBack3 button
			colorBack3_onBeforeClick : function(e: any) {return true;},
			colorBack3_onAfterClick : function(e: any) {},
			//colorBack4 button
			colorBack4_onBeforeClick : function(e: any) {return true;},
			colorBack4_onAfterClick : function(e: any) {},
			//colorBack5 button
			colorBack5_onBeforeClick : function(e: any) {return true;},
			colorBack5_onAfterClick : function(e: any) {},
			//colorBack6 button
			colorBack6_onBeforeClick : function(e: any) {return true;},
			colorBack6_onAfterClick : function(e: any) {},
			//colorBack7 button
			colorBack7_onBeforeClick : function(e: any) {return true;},
			colorBack7_onAfterClick : function(e: any) {},
			//colorBack R Input event
			colorBackRInput_onBeforeClick : function(e: any) {return true;},
			colorBackRInput_onAfterClick : function(e: any) {},
			colorBackRInput_onBeforeInput : function(e: any) {return true;},
			colorBackRInput_onAfterInput : function(e: any) {},
			colorBackRInput_onBeforeBlur : function(e: any) {return true;},
			colorBackRInput_onAfterBlur : function(e: any) {},
			//colorBack G Input event
			colorBackGInput_onBeforeClick : function(e: any) {return true;},
			colorBackGInput_onAfterClick : function(e: any) {},
			colorBackGInput_onBeforeInput : function(e: any) {return true;},
			colorBackGInput_onAfterInput : function(e: any) {},
			colorBackGInput_onBeforeBlur : function(e: any) {return true;},
			colorBackGInput_onAfterBlur : function(e: any) {},
			//colorBack B Input event
			colorBackBInput_onBeforeClick : function(e: any) {return true;},
			colorBackBInput_onAfterClick : function(e: any) {},
			colorBackBInput_onBeforeInput : function(e: any) {return true;},
			colorBackBInput_onAfterInput : function(e: any) {},
			colorBackBInput_onBeforeBlur : function(e: any) {return true;},
			colorBackBInput_onAfterBlur : function(e: any) {},
			//colorBack Opacity Input event
			colorBackOpacityInput_onBeforeClick : function(e: any) {return true;},
			colorBackOpacityInput_onAfterClick : function(e: any) {},
			colorBackOpacityInput_onBeforeInput : function(e: any) {return true;},
			colorBackOpacityInput_onAfterInput : function(e: any) {},
			colorBackOpacityInput_onBeforeBlur : function(e: any) {return true;},
			colorBackOpacityInput_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//formatClearButton event
			formatClearButton_onBeforeClick : function(e: any) {return true;},
			formatClearButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//undo event
			undoButton_onBeforeClick : function(e: any) {return true;},
			undoButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//redo event
			redoButton_onBeforeClick : function(e: any) {return true;},
			redoButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//help event
			helpButton_onBeforeClick : function(e: any) {return true;},
			helpButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal back event
			modalBack_onBeforeClick : function(e: any) {return true;},
			modalBack_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att link event
			attLinkModal_onBeforeClick : function(e: any) {return true;},
			attLinkModal_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att link text input event
			attLinkText_onBeforeInput : function(e: any) {return true;},
			attLinkText_onAfterInput : function(e: any) {},
			attLinkText_onBeforeBlur : function(e: any) {return true;},
			attLinkText_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att link href input event
			attLinkHref_onBeforeInput : function(e: any) {return true;},
			attLinkHref_onAfterInput : function(e: any) {},
			attLinkHref_onBeforeBlur : function(e: any) {return true;},
			attLinkHref_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att link insert button event
			attLinkInsertButton_onBeforeClick : function(e: any) {return true;},
			attLinkInsertButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att file event
			attFileModal_onBeforeClick : function(e: any) {return true;},
			attFileModal_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att file upload button event
			attFileUploadButton_onBeforeClick : function(e: any) {return true;},
			attFileUploadButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att file upload div event
			attFileUploadDiv_onBeforeDragover : function(e: any) {return true;},
			attFileUploadDiv_onAfterDragover : function(e: any) {},
			attFileUploadDiv_onBeforeDrop : function(e: any) {return true;},
			attFileUploadDiv_onAfterDrop : function(e: any) {},
			attFileUploadDiv_onBeforeClick : function(e: any) {return true;},
			attFileUploadDiv_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att file upload input event
			attFileUpload_onBeforeInput : function(e: any) {return true;},
			attFileUpload_onAfterInput : function(e: any) {},
			attFileUpload_onBeforeBlur : function(e: any) {return true;},
			attFileUpload_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att file insert button event
			attFileInsertButton_onBeforeClick : function(e: any) {return true;},
			attFileInsertButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att link tooltip edit button event
			attLinkTooltipEditButton_onBeforeClick : function(e: any) {return true;},
			attLinkTooltipEditButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att link tooltip unlink button event
			attLinkTooltipUnlinkButton_onBeforeClick : function(e: any) {return true;},
			attLinkTooltipUnlinkButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att image event
			attImageModal_onBeforeClick : function(e: any) {return true;},
			attImageModal_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att image upload button and view event
			attImageUploadButtonAndView_onBeforeDragover : function(e: any) {return true;},
			attImageUploadButtonAndView_onAfterDragover : function(e: any) {},
			attImageUploadButtonAndView_onBeforeDrop : function(e: any) {return true;},
			attImageUploadButtonAndView_onAfterDrop : function(e: any) {},
			attImageUploadButtonAndView_onBeforeClick : function(e: any) {return true;},
			attImageUploadButtonAndView_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att image view pre button event
			attImageViewPreButtion_onBeforeClick : function(e: any) {return true;},
			attImageViewPreButtion_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att image view next button event
			attImageViewNextButtion_onBeforeClick : function(e: any) {return true;},
			attImageViewNextButtion_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att image upload input event
			attImageUpload_onBeforeInput : function(e: any) {return true;},
			attImageUpload_onAfterInput : function(e: any) {},
			attImageUpload_onBeforeBlur : function(e: any) {return true;},
			attImageUpload_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att image url input event
			attImageURL_onBeforeInput : function(e: any) {return true;},
			attImageURL_onAfterInput : function(e: any) {},
			attImageURL_onBeforeBlur : function(e: any) {return true;},
			attImageURL_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att image insert button event
			attImageInsertButton_onBeforeClick : function(e: any) {return true;},
			attImageInsertButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att video event
			attVideoModal_onBeforeClick : function(e: any) {return true;},
			attVideoModal_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal att video embed id input event
			attVideoEmbedId_onBeforeInput : function(e: any) {return true;},
			attVideoEmbedId_onAfterInput : function(e: any) {},
			attVideoEmbedId_onBeforeBlur : function(e: any) {return true;},
			attVideoEmbedId_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att video width input event
			attVideoWidth_onBeforeInput : function(e: any) {return true;},
			attVideoWidth_onAfterInput : function(e: any) {},
			attVideoWidth_onBeforeBlur : function(e: any) {return true;},
			attVideoWidth_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att video height input event
			attVideoHeight_onBeforeInput : function(e: any) {return true;},
			attVideoHeight_onAfterInput : function(e: any) {},
			attVideoHeight_onBeforeBlur : function(e: any) {return true;},
			attVideoHeight_onAfterBlur : function(e: any) {},
			
			//==================================================================================
			//modal att video insert button event
			attVideoInsertButton_onBeforeClick : function(e: any) {return true;},
			attVideoInsertButton_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att image tooltip width input event
			attImageAndVideoTooltipWidthInput_onBeforeInput : function(e: any) {return true;},
			attImageAndVideoTooltipWidthInput_onAfterInput : function(e: any) {},
			attImageAndVideoTooltipWidthInput_onBeforeBlur : function(e: any) {return true;},
			attImageAndVideoTooltipWidthInput_onAfterBlur : function(e: any) {},
			attImageAndVideoTooltipWidthInput_onBeforeKeyup : function(e: any) {return true;},
			attImageAndVideoTooltipWidthInput_onAfterKeyup : function(e: any) {},
			
			//==================================================================================
			//att image tooltip float none radio input event
			attImageAndVideoTooltipFloatRadioNone_onBeforeClick : function(e: any) {return true;},
			attImageAndVideoTooltipFloatRadioNone_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att image tooltip float left radio input event
			attImageAndVideoTooltipFloatRadioLeft_onBeforeClick : function(e: any) {return true;},
			attImageAndVideoTooltipFloatRadioLeft_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att image tooltip float right radio input event
			attImageAndVideoTooltipFloatRadioRight_onBeforeClick : function(e: any) {return true;},
			attImageAndVideoTooltipFloatRadioRight_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att image tooltip shape square radio input event
			attImageAndVideoTooltipShapeRadioSquare_onBeforeClick : function(e: any) {return true;},
			attImageAndVideoTooltipShapeRadioSquare_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att image tooltip shape radius radio input event
			attImageAndVideoTooltipShapeRadioRadius_onBeforeClick : function(e: any) {return true;},
			attImageAndVideoTooltipShapeRadioRadius_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//att image tooltip shape circle radio input event
			attImageAndVideoTooltipShapeRadioCircle_onBeforeClick : function(e: any) {return true;},
			attImageAndVideoTooltipShapeRadioCircle_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//modal help event
			helpModal_onBeforeClick : function(e: any) {return true;},
			helpModal_onAfterClick : function(e: any) {},
			
			//==================================================================================
			//placeholder event
			placeholder_onBeforeClick : function(e: any) {return true;},
			placeholder_onAfterClick : function(e: any) {},
		};
		//==================================================================================
		//element public event for css controll
		//==================================================================================
		this.cssEvents = {
			target_onBeforeClick : function(e: any) {return true;},
			target_onAfterClick : function(e: any) {},
			target_onBeforeMouseover : function(e: any) {return true;},
			target_onAfterMouseover : function(e: any) {},
			target_onBeforeMouseout : function(e: any) {return true;},
			target_onAfterMouseout : function(e: any) {},
			target_onBeforeTouchstart : function(e: any) {return true;},
			target_onAfterTouchstart : function(e: any) {},
			target_onBeforeTouchend : function(e: any) {return true;},
			target_onAfterTouchend : function(e: any) {},
		};
		//==================================================================================
		//document, window event store
		//==================================================================================
		this.eventStore = {
			selectionchange : null,
			keydown : null,
			resize : null,
			resizeViewport : null,
		};
		//==================================================================================
		//public functions
		//==================================================================================
		this.getVanillanoteElement;
		this._beforeAlert = function(message: string) {return true;}
	}
	return new (VanillanoteInstance as unknown as VanillanoteConstructor)();
}
//==================================================================================
//create vanilla note
//==================================================================================
function createVanillanote(vn: Vanillanote) {
	//The logic for using document, window and navigator to use getVanillanote in an SSR environment is declared below.
	vn.variables.lastScreenHeight =  typeof window !== 'undefined' && window.visualViewport ? window.visualViewport.height : null;
	vn.variables.isIOS = typeof navigator !== 'undefined' ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;
	vn.getVanillanoteElement = function(noteIndexOrId: number | string): VanillanoteElement | null {
		var vanillanoteElement = null;
		if(typeof noteIndexOrId === 'string') {
			vanillanoteElement = document.querySelector(`[data-note-id='${noteIndexOrId}']`) as VanillanoteElement;
		}
		else {
			vanillanoteElement = document.querySelectorAll('[data-vanillanote]')[noteIndexOrId] as VanillanoteElement;
		}
		return vanillanoteElement;
	};

	//if there is no note, no create.
	vn.elements.notes = document.querySelectorAll('[data-vanillanote]');
	if(vn.elements.notes.length <= 0) return;
	
	//element,variable
	var note: any, template: any, tool: any, textarea: any;
	var toolToggleButton: any, paragraphStyleSelect: any, paragraphStyleSelectBox: any, boldButton: any, underlineButton: any, italicButton: any;
	var ulButton: any, olButton: any, textAlignSelect: any, textAlignSelectBox
	var attLinkButton: any, attFileButton: any, attImageButton: any, attVideoButton: any;
	var fontSizeInputBox: any, fontSizeInput: any, letterSpacingInputBox: any, letterSpacingInput: any, lineHeightInputBox: any, lineHeightInput: any;
	var fontFamilySelect: any, fontFamilySelectBox: any, colorTextSelect: any, colorBackSelect
	var undoButton: any, redoButton: any, helpButton: any, formatClearButton: any;
	var colorTextSelectBox: any, colorText0: any, colorText1: any, colorText2: any, colorText3: any, colorText4: any, colorText5: any, colorText6: any, colorText7: any;
	var colorTextRInput: any, colorTextGInput: any, colorTextBInput: any, colorTextOpacityInput: any;
	var colorBackSelectBox: any, colorBack0: any, colorBack1: any, colorBack2: any, colorBack3: any, colorBack4: any, colorBack5: any, colorBack6: any, colorBack7: any;
	var colorBackRInput: any, colorBackGInput: any, colorBackBInput: any, colorBackOpacityInput: any;
	var modalBack: any, attLinkModal: any, attFileModal: any, attImageModal: any, attVideoModal: any, helpModal: any, helpMain: any, placeholder: any, placeholderColor: any, placeholderBackgroundColor: any;
	var attLinkText: any, attLinkHref: any, attLinkIsBlankCheckbox: any, attLinkValidCheckText: any, attLinkValidCheckbox: any, attLinkInsertButton: any;
	 var attFilelayout: any, attFileUploadButton: any, attFileUploadDiv: any, attFileUpload: any, attFileInsertButton: any;
	 var attImageUploadButtonAndView: any, attImageViewPreButtion: any, attImageViewNextButtion: any, attImageUpload: any, attImageURL: any, attImageInsertButton: any;
	var attLinkTooltip: any, attLinkTooltipHref: any, attLinkTooltipEditButton: any, attLinkTooltipUnlinkButton: any;
	var attVideoEmbedId: any, attVideoWidth: any, attVideoHeight: any, attVideoValidCheckText: any, attVideoValidCheckbox: any, attVideoInsertButton: any;
	var attImageAndVideoTooltip: any, attImageAndVideoTooltipWidthInput: any;
	var attImageAndVideoTooltipFloatRadioNone: any, attImageAndVideoTooltipFloatRadioLeft: any, attImageAndVideoTooltipFloatRadioRight: any;
	var attImageAndVideoTooltipShapeRadioSquare: any, attImageAndVideoTooltipShapeRadioRadius: any, attImageAndVideoTooltipShapeRadioCircle: any;
	var header: any;
	//colors
	var mainColor: any, colorSet: any, invertColor: any;
	//css
	var styleElement: any, cssKeys: any;
	var cssText = "";
	//icons
	var linkElementGoogleIcons: any, googleIcons: any;
	//attributes
	var noteModeByDevice: any, isNoteByMobile: any;
	var defaultFontSize: any, defaultLineHeight: any;
	var tempFontFamiliy: any, defaultFontFamilies: any, addFontFamilies: any, removeFontFamilies: any, defaultFontFamiliy: any;
	var sizeLevel: any, sizeLevelDesktop: any, sizeLevelMobile: any, textareaMaxWidth: any, textareaMaxHeight: any, textareaHeightIsModify: any;
	var defaultModalFontFamily
	var defaultAttImageAcceptTypes: any, attImageAcceptTypes: any;
	var placeholderTitle: any, placeholderTextContent: any;
	var usingParagraphStyle: any, usingBold: any, usingUnderline: any, usingItalic: any;
	var usingUl: any, usingOl: any, usingTextAlign: any;
	var usingAttLink: any, usingAttFile: any, usingAttImage: any, usingAttVideo: any;
	var usingFontSize: any, usingLetterSpacing: any, usingLineHeight: any;
	var usingFontFamily: any, usingColorText: any, usingColorBack: any, usingFormatClear: any;
	var usingUndo: any, usingRedo: any, usingHelp: any;
	
	//etc variable
	var tempElement1: any, tempElement2: any, tempElement3: any, tempText: any;
	
	//==================================================================================
	//Functions to be used
	//==================================================================================
	/**
	* getId
	* @description Get the element id to be applied in Vanilla Note.
	* @param {String or Number} idx - note index
	* @param {String} id - element key(id)
	* @returns {String} element id.
	*/
	var getId = function(idx: string | number, id: string) {
		return vn.variables.noteName + "_" + idx + "_" + id;
	};
	
	/**
	 * getPublicClassName
	 * @description Get the element only public className to be applied in Vanilla Note.
	 * @param {String or Number} idx - note index
	 * @param {String} id - element key(id)
	 * @returns {String} element className.
	 */
	var getPublicClassName = function(idx: string, className: string) {
		return vn.variables.noteName + "_" + className;
	};
	
	/**
	* getClassName
	* @description Get the element className to be applied in Vanilla Note.
	* @param {String or Number} idx - note index
	* @param {String} id - element key(id)
	* @returns {String} element className.
	*/
	var getClassName = function(idx: string | number, className: string) {
		return vn.variables.noteName + "_" + className + " " + vn.variables.noteName + "_" + idx + "_" + className;
	};
	
	/**
	* getEventChildrenClassName
	* @description Get the className to be added to the children of the event target element.
	* @returns {String} className.
	*/
	var getEventChildrenClassName = function() {
		return vn.variables.noteName + "_eventChildren";
	};
	
	/**
	* getOnOverCssEventElementClassName
	* @description Get the className to be added to the event target element for mouse over, touch start, and end events.
	* @returns {String} className.
	*/
	var getOnOverCssEventElementClassName = function() {
		return vn.variables.noteName + "_eventOnOverCssElement";
	};
	
	/**
	* getClickCssEventElementClassName
	* @description Get the className to be added to the event target element for click events.
	* @returns {String} className.
	*/
	var getClickCssEventElementClassName = function() {
		return vn.variables.noteName + "_eventClickCssElement";
	};
	
	/**
	* getCssClassText
	* @description This function outputs a CSS declaration statement for a specified class.
	* @param {Number} idx - The index value that helps to generate a unique class identifier in conjunction with className.
	* @param {String} className - The base name of the class for which the CSS declaration is created.
	* @param {Object} cssObject - The CSS object which contains CSS properties to be converted into a text format.
	* @returns {String} Returns a CSS declaration string for the given class.
	*/
	var getCssClassText = function(idx: number, className: string, cssObject: Record<string, string>) {
		return "." + getId(idx, className) + " {" + getCssTextFromObject(cssObject) + "}";
	};
	
	/**
	* getUUID
	* @description Get a Universally Unique Identifier
	* @returns {String} Universally Unique Identifier.
	*/
	var getUUID = function() { // Public Domain/MIT
	    var d = new Date().getTime();
	    if (typeof performance !== "undefined" && typeof performance.now === "function"){
	        d += performance.now();
	    }
	    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
	        var r = (d + Math.random() * 16) % 16 | 0;
	        d = Math.floor(d / 16);
	        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
	    });
	};
	
	/**
	* getNoteIndex
	* @description Retrieves the note index by iterating from the current element to its parent until a note index is found (default is 0).
	* @param {Element} el - The element from which to start iterating.
	* @returns {Number|null} noteIndex - The note index retrieved from the element's attributes or null if not found.
	*/
	var getNoteIndex = function(el: any) {
		if(!el) return null;
		var noteIndex;
		var target = el instanceof Element ? el : (el as any).parentNode;
		while(!target.hasAttribute("data-note-index")) {
			target = target.parentNode;
			if(!target || !target.hasAttribute) break;
		}
		if(target && target.hasAttribute && target.hasAttribute("data-note-index")) {
			noteIndex = target.getAttribute("data-note-index");
		}
		return noteIndex;
	};
	
	/**
	* isMobileDevice
	* @description Checks if the user's device is mobile.
	* @returns {Boolean} If the user's device is mobile, return true.
	*/
	var isMobileDevice = function() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
	};
		
	/**
	* checkNumber
	* @description Check if it is number.
	* @returns {Boolean} number is true.
	*/
	var checkNumber = function(checkValue: any) {
		var regExp = /^[0-9]+$/;
		return regExp.test(checkValue);
	};
	
	/**
	* checkRealNumber
	* @description Check if it is real number.
	* @returns {Boolean} real number is true.
	*/
	var checkRealNumber = function(checkValue: any) {
		if(checkValue !== "-" && isNaN(checkValue)) {
			return false;
		}
		return true;
	};
	
	/**
	* checkAlphabetAndNumber
	* @description Check if it is composed of only alphabet and number.
	* @returns {Boolean} composed of only alphabet and number is true.
	*/
	var checkAlphabetAndNumber = function(checkValue: string) {
		var regExp = /^[A-Za-z0-9]+$/;
		return regExp.test(checkValue);
	};
	
	/**
	* checkHex
	* @description Checks if it is a hexadecimal number
	* @returns {Boolean} hexadecimal number is true.
	*/
	var checkHex = function(checkValue: string) {
	    var hexRegex = /^[0-9A-Fa-f]*$/;
	    return hexRegex.test(checkValue);
	};

	/**
	* extractNumber
	* @description Extracts the numerical part from a parameter composed of "real number + character".
	* @param {String or Number} composed of "real number + character"
	* @returns {Number} real number.
	*/
	var extractNumber = function(str: string) {
		var match = str.match(/-?\d+\.?\d*/);
		return match ? Number(parseFloat(match[0])) : null;
	};

	/**
	* extractUnit
	* @description Extracts the string part from a parameter composed of "real number + character".
	* @param {String or Number} composed of "real number + character"
	* @returns {string} unit word.
	*/
	var extractUnit = function(str: string) {
		var match = str.replace(/[-+]?[0-9]*\.?[0-9]+/g, "");
		return match ? match : null;
	};

	/**
	* compareObject
	* @description Performs a shallow comparison between two objects.
	* @param {Object}
	* @param {Object}
	* @returns {Boolean} if it is same.
	*/
	var compareObject = function(obj1: any, obj2: any) {
		var keys1 = Object.keys(obj1);
		var keys2 = Object.keys(obj2);
		
		if(keys1.length !== keys2.length) return false;
		for(var i = 0; i < keys1.length; i++) {
			if(keys2.includes(keys1[i])) {
				if(obj1[keys1[i]] !== obj2[keys1[i]]) return false;
			}
			else {
				return false;
			}
		}
		return true;
	};
	
	/**
	* deepCopyObject
	* @description This function makes a deep copy of an object.
	* @param {Object} obj - The object to be deep copied.
	* @returns {Object} Returns a new object that is a deep copy of the input object.
	*/
	var deepCopyObject = function(obj: any) {
		return JSON.parse(JSON.stringify(obj));
	};
	
	/**
	* mergeObjects
	* @description Merges two objects and returns a new object containing the properties of both.
	* @param {Object} obj1 - The first object to be merged
	* @param {Object} obj2 - The second object to be merged
	* @returns {Object} A new object containing the merged properties of both input objects
	*/
	function mergeObjects(obj1: any, obj2: any) {
		var mergedObj: any = {};
		for (var key in obj1) {
			if (obj1.hasOwnProperty(key)) {
				mergedObj[key] = obj1[key];
			}
		}
		for (var key in obj2) {
			if (obj2.hasOwnProperty(key)) {
				mergedObj[key] = obj2[key];
			}
		}
		return mergedObj;
	}
	
	/**
	* getCommaStrFromArr
	* @description This function receives an array and returns it as a string separated by commas.
	* @param {Array} arr - The array to be converted into a string.
	* @returns {String} Returns a string separated by commas, based on the input array.
	*/
	var getCommaStrFromArr = function(arr: any[]) {
		var str = "";
		for(var i = 0; i < arr.length; i++) {
			if(arr[i]) {
				str = str + arr[i].trim();
				if(i !== arr.length - 1) {
					str = str + ", ";
				}
			}
		}
		return str;
	};
	
	/**
	* getObjectFromCssText
	* @description This function converts a CSS text format into an object format.
	* @param {String} cssText - The CSS text to be converted into an object. 
	* @returns {Object} Returns an object with key-value pairs based on the input CSS text.
	* Example: "font-weight:bold;text-align:center;" > {"font-weight":"bold","text-align":"center"}
	*/
	var getObjectFromCssText = function(cssText: string) {
		var cssObject = new Object();
		if(!cssText) return cssObject;
		var csses;
		var css;
		csses = cssText.trim().split(";");
		for(var i = 0; i < csses.length; i++) {
			if(!csses[i]) continue;
			css = csses[i].split(":");
			if(css.length < 2) continue;
			(cssObject as any)[css[0].trim()] = css[1].trim();
		}
		
		return cssObject;
	};
	
	/**
	* getCssTextFromObject
	* @description This function converts an object in CSS format into a text format.
	* @param {Object} cssObject - The CSS object to be converted into a text. 
	* @returns {String} Returns a string in CSS text format based on the input CSS object.
	* Example: {"font-weight":"bold","text-align":"center"} > "font-weight:bold;text-align:center;"
	*/
	var getCssTextFromObject = function(cssObject: Record<string, string>) {
		var cssText = "";
		if(!cssObject || cssObject.constructor !== Object || Object.keys(cssObject).length === 0) return cssText;
		
		var csses = Object.entries(cssObject);
		for(var i = 0; i < csses.length; i++) {
			if(csses[i].length < 2) continue;
			cssText += csses[i][0].trim() + ":" + csses[i][1].trim() + ";";
		}
		
		return cssText;
	};
	
	/**
	* getAttributesObjectFromElement
	* @description This function converts an element's attributes into an object.
	* @param {HTMLElement} element - The HTML element whose attributes are to be converted.
	* @returns {Object} Returns an object where each key-value pair represents an attribute of the element and its corresponding value.
	*/
	var getAttributesObjectFromElement = function(element: any) {
		var attriesObject = new Object();
		if(!element.attributes) return attriesObject;
		
		for(var i = 0; i < element.attributes.length; i++) {
			(attriesObject as any)[element.attributes[i].nodeName] = element.attributes[i].nodeValue
		}
		return attriesObject;
	};
	
	/**
	* setAttributesObjectToElement
	* @description This function takes an object of attributes and inserts them into an element.
	* @param {HTMLElement} element - The element into which the attributes will be inserted.
	* @param {Object} attributes - The object containing the attributes to be inserted.
	* @returns {HTMLElement} Returns the element after the attributes have been inserted.
	*/
	var setAttributesObjectToElement = function(element: any, attributes: Record<string, string>) {
		if(!attributes || attributes.constructor !== Object) return element;
		var keys = Object.keys(attributes);
		for(var i = 0; i < keys.length; i++) {
			element.setAttribute(keys[i], attributes[keys[i]]);
		}
		return element;
	};
	
	/**
	* compareAttributesBetweenEl
	* @description This function checks if the attributes of two HTML elements are the same.
	* @param {HTMLElement} el1 - The first HTML element to compare.
	* @param {HTMLElement} el2 - The second HTML element to compare.
	* @returns {Boolean} Returns true if the attributes of both elements are the same, false otherwise.
	*/
	var compareAttributesBetweenEl = function(el1: any, el2: any) {
	    var attrs1 = getAttributesObjectFromElement(el1);
	    var attrs2 = getAttributesObjectFromElement(el2);
	
	    return compareObject(attrs1, attrs2);
	};
	
	/**
	* compareStylesBetweenEl
	* @description This function checks if the styles of two HTML elements are the same.
	* @param {HTMLElement} el1 - The first HTML element to compare.
	* @param {HTMLElement} el2 - The second HTML element to compare.
	* @returns {Boolean} Returns true if the styles of both elements are the same, false otherwise.
	*/
	var compareStylesBetweenEl = function(el1: any, el2: any) {
	    var style1 = (el1 as any).cssText;
	    var style2 = (el2 as any).cssText;
	    
	    return compareObject(getObjectFromCssText(style1), getObjectFromCssText(style2));
	};
	
	/**
	* getExtractColorValue
	* @description This function takes a hexadecimal color and a channel (R, G, or B) and returns the corresponding hexadecimal color value.
	* @param {String} hexColor - The hexadecimal color to extract from.
	* @param {String} channel - The color channel to extract (either "R", "G", or "B").
	* @returns {String} Returns a two-character string representing the hexadecimal color value. Returns "33" if hexColor or channel is invalid.
	*/
	var getExtractColorValue = function(hexColor: string, channel: string) {
		if(!hexColor || !channel) {
			return "33";
		}
		channel = channel.toUpperCase();
	    // Check if the hexColor starts with a "#" and add it if not
	    if (hexColor[0] !== "#") {
			hexColor = "#" + hexColor;
	    }
	    // Check if the hexColor is a valid hex color code
	    var hexColorRegex = /^#([0-9A-Fa-f]{6})$/;
	    if (!hexColorRegex.test(hexColor)) {
	        return "33";
	    }
	    // Get the start index based on the channel
	    var startIndex = channel === "R" ? 1 : channel === "G" ? 3 : 5;
	    // Extract the relevant 2-digit hex number
	    var colorValue = hexColor.substring(startIndex, startIndex + 2);
	    return colorValue;
	};
	
	/**
	* getRGBAFromHex
	* @description This function takes a hexadecimal color and an opacity value and returns the corresponding RGBA color value.
	* @param {String} hexColor - The hexadecimal color to convert to RGBA.
	* @param {Number} opacity - The opacity value for the RGBA color.
	* @returns {String} Returns a string representing the RGBA color value.
	*/
	var getRGBAFromHex = function(hexColor: string, opacity: number | string) {
		var red = parseInt(getExtractColorValue(hexColor,"R"), 16);		// Converts to decimal
		var green = parseInt(getExtractColorValue(hexColor,"G"), 16);	// Converts to decimal
		var blue = parseInt(getExtractColorValue(hexColor,"B"), 16);	// Converts to decimal
		var opacity = opacity;
	    return "rgba("+red+","+green+","+blue+","+opacity+")";
	};
	
	/**
	* getHexFromRGBA
	* @description This function converts an RGBA color expression to a hexadecimal color expression. e.g. rgba(255,255,255,1) > #ffffff
	* @param {String} color - The RGBA color to convert.
	* @returns {String} Returns the hexadecimal color string, if color was in RGBA format. Otherwise, returns null.
	*/
	var getHexFromRGBA = function(color: string) {
	    if (color.startsWith("#")) {
	        return color; // If color is already in hex format, return as is
	    }
	    
	    // Verify that the color is in rgba format
	    if (!color.startsWith("rgba")) {
	        return null;
	    }

	    // Extract the RGB values from the rgba color string
	    var rgba = (color as any).match(/\d+/g).map(Number); 

	    var r = rgba[0].toString(16),
	        g = rgba[1].toString(16),
	        b = rgba[2].toString(16);

	    if (r.length == 1)
	        r = "0" + r;
	    if (g.length == 1)
	        g = "0" + g;
	    if (b.length == 1)
	        b = "0" + b;

	    return "#" + r + g + b; 
	};
	
	/**
	* getOpacityFromRGBA
	* @description This function extracts the opacity value from a color string in rgba format.
	* @param {string} color - The color string in rgba format. 
	* @returns {string|null} The opacity value as a string, or null if the color string is not in rgba format or does not include an opacity value.
	*/
	var getOpacityFromRGBA = function(color: string) {
		if (!color) return null; 
	    if (color.startsWith("#")) {
	        return null; // If color is already in hex format, return null
	    }

	    // Extract the opacity from the rgba color string
	    var matches = color.match(/\d+/g);

	    if (!matches) {
	        return null; // If there are no numeric sequences in the color string, return null
	    }
	    var rgba = matches.map(Number);
	    if(rgba.length < 4) return "1";
	    
	    return rgba[3].toString();
	};
	
	/**
	* getHexColorFromColorName
	* @description Converts a named CSS color into its corresponding hexadecimal value.
	* @param {string} colorName - The name of the color (e.g. "red").
	* @returns {string} The hexadecimal value of the color (e.g. "#ff0000").
	*/
	var getHexColorFromColorName = function(colorName: string) {
		// If the input is already in hexadecimal format, return it as is
		if (/^#[0-9a-fA-F]{6}$/.test(colorName)) {
			return colorName;
		}
		
		var dummyDiv = document.createElement("div");
		dummyDiv.style.color = colorName;
		document.body.appendChild(dummyDiv);
		
		// Get the computed style
		var color = window.getComputedStyle(dummyDiv).color;
		document.body.removeChild(dummyDiv);
		
		// Convert the color from RGB format to hexadecimal
		var rgb: any = color.match(/\d+/g); 
		var hex = "#" + ((1 << 24) + (+rgb[0] << 16) + (+rgb[1] << 8) + +rgb[2]).toString(16).slice(1);
		
		return hex;
	};
	
	/**
	* getColorShade
	* @description Determines whether a hexadecimal color is of a light or dark shade.
	* @param {string} hexColor - The hexadecimal color code (e.g. "#ff0000").
	* @returns {string} "light" if the color is of a light shade, "dark" otherwise.
	*/
	var getColorShade = function(hexColor: string) {
		  var r = parseInt(hexColor.slice(1, 3), 16);
		  var g = parseInt(hexColor.slice(3, 5), 16);
		  var b = parseInt(hexColor.slice(5, 7), 16);

		  // Count how many of the R, G, B values are greater than or equal to 160 (0xa0)
		  var lightCount = 0;
		  if (r >= 0xa0) lightCount++;
		  if (g >= 0xa0) lightCount++;
		  if (b >= 0xa0) lightCount++;

		  // If at least two out of three values are considered "light", the color is categorized as "light"
		  return lightCount >= 2 ? "light" : "dark";
	};
	
	/**
	* getAdjustHexColor
	* @description Adjusts the given hex color by the specified 16-bit difference.
	* @param {string} color - The hex color code to adjust (e.g. "#ffffff").
	* @param {string} diff - The 16-bit difference to add or subtract to each RGB component (from "-f" to "f").
	* @returns {string} The adjusted hex color code.
	*/
	var getAdjustHexColor = function(color: string, diff: string) {
		if (color.startsWith("#")) {
			color = color.slice(1);
		}
		
		var diffValue = parseInt(diff, 16);
		if (diff.startsWith("-")) {
			diffValue = -parseInt(diff.slice(1), 16);
		}
		
		var r: any = parseInt(color.slice(0, 2), 16) + diffValue;
		var g: any = parseInt(color.slice(2, 4), 16) + diffValue;
		var b: any = parseInt(color.slice(4, 6), 16) + diffValue;
		
		r = (r < 0 ? 0 : r > 255 ? 255 : r).toString(16).padStart(2, "0");
		g = (g < 0 ? 0 : g > 255 ? 255 : g).toString(16).padStart(2, "0");
		b = (b < 0 ? 0 : b > 255 ? 255 : b).toString(16).padStart(2, "0");
		
		return "#" + r + g + b;
	};
	
	/**
	* getInvertColor
	* @description Inverts the given hexadecimal color.
	* @param {string} hex - The hexadecimal color to invert.
	* @returns {string} The inverted hexadecimal color.
	*/
	var getInvertColor = function(hex: string) {
		if (hex.startsWith("#")) {
			hex = hex.slice(1);
		}
		
		var r: any = 255 - parseInt(hex.slice(0, 2), 16);
		var g: any = 255 - parseInt(hex.slice(2, 4), 16);
		var b: any = 255 - parseInt(hex.slice(4, 6), 16);
		
		r = r < 127.5 ? r + 16 : r - 16;
		g = g < 127.5 ? g + 16 : g - 16;
		b = b < 127.5 ? b + 16 : b - 16;
		
		r = (r < 0 ? 0 : r > 255 ? 255 : r).toString(16).padStart(2, "0");
		g = (g < 0 ? 0 : g > 255 ? 255 : g).toString(16).padStart(2, "0");
		b = (b < 0 ? 0 : b > 255 ? 255 : b).toString(16).padStart(2, "0");
		
		return "#" + r + g + b;
	};
	
	/**
	* isCloserToRight
	* @description This function checks whether an HTML element is closer to the right or left side of the screen.
	* @param {HTMLElement} element - The HTML element to check.
	* @returns {Boolean} Returns true if the element is closer to the right side of the screen, and false if it's closer to the left.
	*/
	var isCloserToRight = function(element: any) {
		if(element.offsetParent === null) return false;
		var rect = element.getBoundingClientRect();
		var windowWidth = window.innerWidth;
		var distanceToLeft = rect.left;
		if (windowWidth/2 < distanceToLeft) {
			return true; // Element is closer to the left
		} else {
			return false; // Element is closer to the right
		}
	};
	
	/**
	* onEventDisable
	* @description This function temporarily disables user interaction for a specific note when an event occurs.
	* @param {Number} noteIndex - The index of the note for which the interaction should be disabled.
	*/
	var onEventDisable = function(type: string) {
		var interval
		if(type === "resize") {
			interval = vn.variables.resizeInterval;
		}
		else {
			interval = vn.variables.inputInterval;
		}
		// Temporarily block user input
		vn.variables.canEvents = false;
		
		// Allow user input again after 0.05 seconds
		setTimeout(function() {
			vn.variables.canEvents = true;
		}, interval);
	};
	
	/**
	* replaceDifferentBetweenElements
	* @description This function compares two given elements and replaces any differences between them. 
	*              If differences are found, it replaces the old element with the new one. 
	*              The function iterates recursively through all child elements. 
	*              Also, it resets the selection after the changes.
	* @param {Element} oldEl - The old HTML element.
	* @param {Element} newEl - The new HTML element.
	*/
	var replaceDifferentBetweenElements = function(oldEl: any, newEl: any) {
		var newStartNode: any;
		var newEndNode: any;
		var tempEl;
		
		// Compares the two elements and modifies the different parts.
		var replaceElements = function(el1: any, el2: any) {
			if (el1.tagName !== (vn.variables.noteName+"-textarea").toUpperCase()
				&& el2.tagName !== (vn.variables.noteName+"-textarea").toUpperCase()
				&& vn.consts.NOT_SINGLE_TAG.indexOf(el1.tagName) >= 0
				&& vn.consts.NOT_SINGLE_TAG.indexOf(el2.tagName) >= 0
				&& (el1.nodeType !== el2.nodeType || 
				el1.tagName !== el2.tagName ||
				!compareAttributesBetweenEl(el1, el2) ||
				!compareStylesBetweenEl(el1, el2))
				) {
				tempEl = el2.cloneNode(true);
				(el1 as any).parentNode.replaceChild(tempEl, el1);
				if(!newStartNode) newStartNode = tempEl;
				newEndNode = tempEl;
			}
			else if (el1.tagName !== (vn.variables.noteName+"-textarea").toUpperCase()
				&& el2.tagName !== (vn.variables.noteName+"-textarea").toUpperCase()
				&& vn.consts.NOT_SINGLE_TAG.indexOf(el1.tagName) < 0
				&& vn.consts.NOT_SINGLE_TAG.indexOf(el2.tagName) < 0
				&& (el1.nodeType !== el2.nodeType || 
					el1.tagName !== el2.tagName ||
					el1.textContent !== el2.textContent ||
					!compareAttributesBetweenEl(el1, el2) ||
					!compareStylesBetweenEl(el1, el2))
				) {
				tempEl = el2.cloneNode(true);
				(el1 as any).parentNode.replaceChild(tempEl, el1);
				if(!newStartNode) newStartNode = tempEl;
				newEndNode = tempEl;
			}
			else {
				var children1 = Array.prototype.slice.call(el1.childNodes);
				var children2 = Array.prototype.slice.call(el2.childNodes);
				
				// Iterates based on the element with more child elements among the two.
				var maxChildrenLength = Math.max(children1.length, children2.length);
				for(var i = 0; i < maxChildrenLength; i++) {
					var child1 = children1[i];
					var child2 = children2[i];
					
					if(!child1 && child2) { // Adds a child element that exists in el2 but not in el1.
						tempEl = child2.cloneNode(true);
						el1.appendChild(tempEl);
						if(!newStartNode) newStartNode = tempEl;
						newEndNode = tempEl;
					}
					else if(child1 && !child2) { // Removes a child element that exists in el1 but not in el2.
						el1.removeChild(child1);
					}
					else { // Compares and replaces child elements that exist in both elements.
						replaceElements(child1, child2);
					}
				}
			}
		};
		//==========
		replaceElements(oldEl, newEl);
		
		// Sets the new selection range.
		if(!newStartNode) return
		if(!newEndNode) newEndNode = newStartNode;
		var newEndOffset: any;
		if(newEndNode instanceof Element) {
			newEndOffset = newEndNode.childNodes.length;
		}
		else if(newEndNode.nodeType === 3){
			newEndOffset = newEndNode.textContent.length;
		}
		else {
			newEndOffset = 0;
		}
		// Sets the new selection range.
		setNewSelection(
				newStartNode,
				0,
				newEndNode,
				newEndOffset
				);
	};
	
	/**
	* replaceDifferentBetweenElements
	* @description This function Open tooltip according to the tag of the selected element.
	* @param {String or Number} noteIndex - The index of the note.
	*/
	var handleSpecialTagSelection = function(noteIndex: number) {
		closeAllTooltip(noteIndex);
		if(!vn.variables.editRanges[noteIndex]!.collapsed) return;
		var tagName = getSpecialTag(vn.variables.editStartNodes[noteIndex]);
		
		switch(tagName) {
			case "A":
				appearAttLinkToolTip(noteIndex);
				break;
	        case "IMG":
	        	appearAttImageAndVideoTooltip(noteIndex);
				break;
	        case "IFRAME":
	        	appearAttImageAndVideoTooltip(noteIndex);
				break;
			default :
				return;
				break;
		}
	};
	
	/**
	* isFontAvailable	(no use)
	* @description Checks if a specific font is available in the current browser.
	* @param {string} fontName - The name of the font to check.
	* @returns {boolean} Returns true if the font is available, false otherwise.
	*/
	var isFontAvailable = function(fontName: string) {
	    var canvas = document.createElement("canvas");
	    var context = canvas.getContext("2d");

	    var text = "abcdefghijklmnopqrstuvwxyz0123456789" + 
			        "あいうえおアイウエオ" + 
			        "안녕하세요" + 
			        "你好" + 
			        "Привет" + 
			        "שָׁלוֹם" + 
			        "مرحبا" + 
			        "Χαίρετε" + 
			        "नमस्ते";

	    if(!context) return false;
	    context.font = "72px monospace";
	    var size = context.measureText(text).width;
	    context.font = "72px '" + fontName + "', monospace";
	    var newSize = context.measureText(text).width;

	    // If the sizes are almost the same, the font is probably not available and the browser is using the fallback font
	    return size !== newSize;
	};

	/**
	* setNewSelection
	* @description Sets the new selection range in the document.
	* @param {Node} startNode - The starting node of the selection.
	* @param {Number} startOffset - The offset within the starting node where the selection should begin.
	* @param {Node} endNode - The ending node of the selection.
	* @param {Number} endOffset - The offset within the ending node where the selection should end.
	* @returns {Selection|null} newSelection - The newly created selection or null if nodes are not present in the document.
	*/
	var setNewSelection = function(startNode: Node, startOffset: number, endNode: Node, endOffset: number) {
		if(!document.contains(startNode) || !document.contains(endNode)) {
			return;
		}
		var newRange = document.createRange();
		var newSelection = window.getSelection();
		newRange.setStart(startNode, startOffset);
		newRange.setEnd(endNode, endOffset);
		newSelection!.removeAllRanges();
		newSelection!.addRange(newRange);
		
		return newSelection;
	};
	
	/**
	* setOriginEditSelection
	* @description Moves the selection back to the original edit point for a specific note.
	* @param {Number} noteIndex - The index of the note to set the original edit selection for.
	*/
	var setOriginEditSelection = function(noteIndex: number) {
		if(vn.variables.editRanges[noteIndex]) {
			vn.variables.setEditStyleTagToggle = 2;	// The 'selectiononchange' event usually occurs twice (once when removed and once when added back).
		    var selection = window.getSelection();
		    selection!.removeAllRanges();
		    selection!.addRange(vn.variables.editRanges[noteIndex]);
		}
	};
	
	/**
	* setEditSelection
	* @description Records the selection for a specific note and performs additional operations based on the selected elements.
	* @param {Number} noteIndex - The index of the note for which the selection is being recorded.
	* @param {Selection} selection - The selection object to be recorded.
	* @returns {Boolean} - Returns true if the selection was recorded and additional operations were performed, otherwise returns false.
	*/
	var setEditSelection = function(noteIndex: number, selection: Selection) {
		// If the selection range count is less than 1 or not within a textarea, return false.
		if(selection.rangeCount < 1) return false;
		if(!isInTextarea()) return false;
		
		vn.variables.editSelections[noteIndex] = selection;
		vn.variables.editRanges[noteIndex] = vn.variables.editSelections[noteIndex].getRangeAt(0);
		
		vn.variables.startOffsets[noteIndex] = vn.variables.editRanges[noteIndex].startOffset;
		vn.variables.endOffsets[noteIndex] = vn.variables.editRanges[noteIndex].endOffset;
		
		vn.variables.editStartNodes[noteIndex] = vn.variables.editRanges[noteIndex].startContainer;
		vn.variables.editEndNodes[noteIndex] = vn.variables.editRanges[noteIndex].endContainer;
		
		// If the start node is an element, find the first text node within the element.
		if(vn.variables.editStartNodes[noteIndex] instanceof Element) {
			while(vn.variables.editStartNodes[noteIndex] instanceof Element) {
				if(!vn.variables.editStartNodes[noteIndex].firstChild) break;
				if((vn.variables.editStartNodes[noteIndex] as any).firstChild.tagName === "BR") break;	//no br
				vn.variables.editStartNodes[noteIndex] = vn.variables.editStartNodes[noteIndex].firstChild;
				if(vn.variables.editStartNodes[noteIndex].nodeType === 3) break;
			}
			vn.variables.startOffsets[noteIndex] = 0;
		}
		// If the end node is an element, find the first text node within the element.
		if(vn.variables.editEndNodes[noteIndex] instanceof Element) {
			while(vn.variables.editEndNodes[noteIndex] instanceof Element) {
				if(!vn.variables.editEndNodes[noteIndex].firstChild) break;
				if((vn.variables.editEndNodes[noteIndex] as any).firstChild.tagName === "BR") break;	//no br
				vn.variables.editEndNodes[noteIndex] = vn.variables.editEndNodes[noteIndex].firstChild;
				if(vn.variables.editEndNodes[noteIndex].nodeType === 3) break;
			}
			vn.variables.endOffsets[noteIndex] = 0;
		}
		
		vn.variables.editStartElements[noteIndex] = vn.variables.editRanges[noteIndex].startContainer instanceof Element ?
													vn.variables.editRanges[noteIndex].startContainer : vn.variables.editRanges[noteIndex].startContainer.parentNode;
		vn.variables.editEndElements[noteIndex] = vn.variables.editRanges[noteIndex].endContainer instanceof Element ?
													vn.variables.editRanges[noteIndex].endContainer : vn.variables.editRanges[noteIndex].endContainer.parentNode;
		
		// If the start element is a unit element, find the deepest child unit element.
		if(vn.consts.UNIT_TAG.indexOf((vn.variables.editStartElements[noteIndex] as any).tagName) > 0) {
			while(vn.consts.UNIT_TAG.indexOf((vn.variables.editStartElements[noteIndex] as any).tagName) > 0) {
				vn.variables.editStartElements[noteIndex] = (vn.variables.editStartElements[noteIndex] as any).firstChild;
			}
		}
		// If the end element is a unit element, find the deepest child unit element.
		if(vn.consts.UNIT_TAG.indexOf((vn.variables.editEndElements[noteIndex] as any).tagName) > 0) {
			while(vn.consts.UNIT_TAG.indexOf((vn.variables.editEndElements[noteIndex] as any).tagName) > 0) {
				vn.variables.editEndElements[noteIndex] = (vn.variables.editEndElements[noteIndex] as any).lastChild;
			}
		}
		// If the start element is a <br> tag, update it to the parent node.
		if(vn.variables.editStartElements[noteIndex] instanceof Element &&
				vn.variables.editStartElements[noteIndex].tagName === "BR") {
			vn.variables.editStartElements[noteIndex] = vn.variables.editStartElements[noteIndex].parentNode;
		}
		// If the end element is a <br> tag, update it to the parent node.
		if(vn.variables.editEndElements[noteIndex] instanceof Element &&
				vn.variables.editEndElements[noteIndex].tagName === "BR") {
			vn.variables.editEndElements[noteIndex] = vn.variables.editEndElements[noteIndex].parentNode;
		}
		//If the start element is textarea, be start element to null
		if((vn.variables.editStartElements[noteIndex] as any).tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
			vn.variables.editStartElements[noteIndex] = null;
		}
		//If the end element is textarea, be end element to null
		if((vn.variables.editEndElements[noteIndex] as any).tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
			vn.variables.editEndElements[noteIndex] = null;
		}
		// Get the parent unit elements of the start and end elements.
		vn.variables.editStartUnitElements[noteIndex] = getParentUnitTagElemnt(vn.variables.editStartElements[noteIndex]);
		vn.variables.editEndUnitElements[noteIndex] = getParentUnitTagElemnt(vn.variables.editEndElements[noteIndex]);
		// Clear and populate the array with all unit elements within the selection.
		vn.variables.editDragUnitElements[noteIndex].splice(0, vn.variables.editDragUnitElements[noteIndex].length); //initial array
		
		var dragElements = modifySeletedElements(noteIndex);
		var unitElement
		for(var i = 0; i < dragElements.length; i++) {
			unitElement = getParentUnitTagElemnt(dragElements[i]);
			if(vn.variables.editDragUnitElements[noteIndex].includes(unitElement)) continue;
			vn.variables.editDragUnitElements[noteIndex].push(unitElement);
		}
		// Set style and tag based on the selected elements.
		setEditStyleTag(noteIndex);
		
		// Perform additional actions based on the selected element's tag.
		handleSpecialTagSelection(noteIndex);
		
		return true;
	};
	
	/**
	 * isValidSelection
	 * @description check that now selection is valid
	 * @returns {Boolean} - if vaild, return true
	 */
	var isValidSelection =  function(noteIndex: number) {
		if(!vn.variables.editRanges[noteIndex]) return false;
		if(!vn.variables.editStartElements[noteIndex]) return false;
		if(!vn.variables.editStartUnitElements[noteIndex]) return false;
		return true;
	} 
	
	/**
	* getParentUnitTagElemnt
	* @description Finds the parent element of the given element (el) that belongs to the top-level editor unit tags.
	* @param {Element} el - The element for which to find the parent editor unit tag.
	* @returns {Element|null} - The parent element that belongs to the top-level editor unit tags, or null if not found.
	*/
	var getParentUnitTagElemnt = function(el: any) {
		var element = el;
		while(element) {
			//p, h1, h2, h3, h4, h5, h6, li
			if(vn.consts.UNIT_TAG.indexOf(element.tagName) >= 0) {
				break;	
			}
 			// If the element's tag name is  'ul' or 'ol'
			if(vn.consts.DOUBLE_TAG.indexOf(element.tagName) >= 0) {
				element = element.lastElementChild!;
				break;	
			}
			if(element.tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
				return null;
			}
			element = element.parentNode!;
		}
		return element;
	};
	
	/**
	* getParentTagName
	* @description Retrieves the tag name of the parent element of the given element (el).
	* @param {Element} el - The element for which to find the parent element's tag name.
	* @returns {String} tagName - The tag name of the parent element or "span" if not found or not applicable.
	*/
	var getParentTagName = function(el: any) {
		var tagName = "span";
		if(!el) return tagName;
		if(!el.parentNode) return tagName;
		if(!el.parentNode.tagName) return tagName;
		if(vn.consts.UNIT_TAG.indexOf(el.parentNode.tagName) >= 0) return tagName;
		if(vn.consts.AUTO_MODIFY_TAG.indexOf(el.parentNode.tagName) >= 0) return tagName;
		return el.parentNode.tagName;
	};
	
	/**
	* getObjectEditElementAttributes
	* @description Retrieves attributes of the editing element (including all attributes up to the unit element) and returns them as an object. (*Attributes with the same key will be replaced.)
	* @param {Element} el - The element whose attributes to retrieve.
	* @returns {Object} attributesObject - An object containing the attributes of the editing element and its ancestors up to the unit element.
	*/
	var getObjectEditElementAttributes = function(el: any) {
		var attributesObject: any = getAttributesObjectFromElement(el); 
		// Helper function to check and add attributes from the element.
		var chkElementAttributes = function(element: any) {
			if(element.getAttribute) {
				var cssTempObject: any = getAttributesObjectFromElement(element);
				var cssTempObjectKeys = Object.keys(cssTempObject);
				for(var i = 0; i < cssTempObjectKeys.length; i++) {
					if(cssTempObject[cssTempObjectKeys[i]] && cssTempObjectKeys[i] !== "style" && !attributesObject[cssTempObjectKeys[i]]) { //Empty value property, style is not imported!, Existing inserted properties are not imported!
						attributesObject[cssTempObjectKeys[i]] = cssTempObject[cssTempObjectKeys[i]];
					}
				}
			}
		}
		
		// Iterate up to the unit element (e.g., <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <li>) to retrieve its attributes and those of its ancestors.
		while(el) {
			//p, h1, h2, h3, h4, h5, h6, li
			if(vn.consts.UNIT_TAG.indexOf(el.tagName) >= 0) {
				break;
			}
			chkElementAttributes(el);
			el = el.parentNode;
		}
		return attributesObject;
	};
	
	/**
	* getObjectEditElementCss
	* @description Retrieves the styles of the editing element (including all styles up to the unit element) and returns them as an object.
	* @param {Element} el - The element whose styles to retrieve.
	* @returns {Object} cssObject - An object containing the styles of the editing element and its ancestors up to the unit element.
	*/
	var getObjectEditElementCss = function(el: any) {
		var cssObject: any = getObjectFromCssText(document.contains(el) && el.getAttribute ? el.getAttribute("style") : ""); 
		
		var chkElementStyle = function(element: any) {
			if(element.getAttribute) {
				var cssTempObject: any = getObjectFromCssText(element.getAttribute("style"));
				var cssTempObjectKeys = Object.keys(cssTempObject);
				for(var i = 0; i < cssTempObjectKeys.length; i++) {
					if(!cssObject[cssTempObjectKeys[i]]) cssObject[cssTempObjectKeys[i]] = cssTempObject[cssTempObjectKeys[i]];
				}
			}
		}
		
		// Iterate up to the unit element (e.g., <p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <li>) to retrieve its attributes and those of its ancestors.
		while(el) {
			//p, h1, h2, h3, h4, h5, h6, li
			if(vn.consts.UNIT_TAG.indexOf(el.tagName) >= 0) {
				break;
			}
			switch(el.tagName) {
				case "B" :
					cssObject["font-weight"] = "bold";
					break;
				case "STRONG" :
					cssObject["font-weight"] = "bold";
					break;
				case "U" :
					cssObject["text-decoration"] = "underline";
					break;
				case "I" :
					cssObject["font-style"] = "italic";
					break;
				default :
					break;
			}
			chkElementStyle(el);
			el = el.parentNode;
		}
		return cssObject;
	};
	
	/**
	* getEditElementTag
	* @description Retrieves the tag name of the editing unit element.
	* @param {Number} noteIndex - The index of the note.
	* @returns {String} rtnTagName - The tag name of the editing unit element. If there are multiple different tag names, an empty string is returned.
	*/
	var getEditElementTag = function(noteIndex: number) {
		var rtnTagName = "";
		var tempTagName = "";
		for(var i = 0; i < vn.variables.editDragUnitElements[noteIndex].length; i++) {
			if((vn.variables.editDragUnitElements as any)[noteIndex][i].tagName === "LI") {
				tempTagName = (vn.variables.editDragUnitElements as any)[noteIndex][i].parentNode.tagName;
			}
			else {
				tempTagName = (vn.variables.editDragUnitElements as any)[noteIndex][i].tagName;
			}
			
			if(rtnTagName && rtnTagName !== tempTagName) {
				return "";
			}
			rtnTagName = tempTagName;
		}
		return rtnTagName;
	};
	
	/**
	* getSpecialTag
	* @description Checks if there are any parent elements of the editing element (up to the unit element) that contain a special tag (e.g., <a>, <img>, etc.).
	* @param {Element} el - The element whose parent elements will be checked.
	* @returns {String} tagName - The tag name of the first encountered special tag, or "SPAN" if none is found.
	*/
	var getSpecialTag = function(el: any) {
		var element = el;
		var tagName = element.tagName;
		while(element && vn.consts.UNIT_TAG.indexOf(tagName) < 0) {
			if(vn.consts.SPECIAL_TAG.indexOf(tagName) >= 0) return tagName;
			element = element.parentNode;
			if(!element) break;
			tagName = element.tagName;
		}
		return "SPAN";
	};
	
	/**
	* getPreviousElementsUntilNotTag
	* @description Retrieves the elements preceding the start element until an element with a different tag and attributes is encountered.
	* @param {Element} startEl - The element from which to start retrieving the previous elements.
	* @param {String} tag - The tag name to compare against while retrieving the previous elements.
	* @returns {Array} previouses - An array containing the elements preceding the start element until a different tag and attributes are encountered.
	*/
	var getPreviousElementsUntilNotTag = function(startEl: any, tag: string) {
		var previouses = [];
	    var previous = startEl;
	    var attributes = getAttributesObjectFromElement(startEl);
	    previouses.push(previous);
	    
	    while (previous) {
	        while (previous.previousSibling) {
	        	previous = previous.previousSibling;
	            if (previous.tagName && vn.consts.DOUBLE_TAG.indexOf(previous.tagName) > 0) {
	            	while(previous.lastChild) {
	            		previous = previous.lastChild
	            	}
	            }
	            else if (previous.tagName && vn.consts.UNIT_TAG.indexOf(previous.tagName) > 0) {
	            	while(previous.lastChild) {
	            		previous = previous.lastChild
	            	}
	            }
	            if(previous.nodeType === 3) previous = previous.parentNode;
	            if (vn.consts.UNIT_TAG.indexOf(previous.tagName) > 0
	            	|| !previous.tagName || previous.tagName !== tag.toUpperCase()
	            	|| !compareObject(attributes, getAttributesObjectFromElement(previous))) {
	                return previouses;
	            }
	            previouses.push(previous);
	        }
	        previous = previous.parentNode;
	    }
	    return previouses;
	};
	
	/**
	* getNextElementsUntilNotTag
	* @description Retrieves the elements following the start element until an element with a different tag and attributes is encountered.
	* @param {Element} startEl - The element from which to start retrieving the following elements.
	* @param {String} tag - The tag name to compare against while retrieving the following elements.
	* @returns {Array} nexts - An array containing the elements following the start element until a different tag and attributes are encountered.
	*/
	var getNextElementsUntilNotTag = function(startEl: any, tag: string) {
		var nexts = [];
	    var next = startEl;
	    var attributes = getAttributesObjectFromElement(startEl);
	    nexts.push(next);
	    
	    while (next) {
	        while (next.nextSibling) {
	        	next = next.nextSibling;
	            if (next.tagName && vn.consts.DOUBLE_TAG.indexOf(next.tagName) > 0) {
	            	while(next.firstChild) {
	            		next = next.firstChild
	            	}
	            }
	            else if (next.tagName && vn.consts.UNIT_TAG.indexOf(next.tagName) > 0) {
	            	while(next.firstChild) {
	            		next = next.firstChild
	            	}
	            }
	            if(next.nodeType === 3) next = next.parentNode;
	            if (vn.consts.UNIT_TAG.indexOf(next.tagName) > 0
	            	|| !next.tagName || next.tagName !== tag.toUpperCase()
	            	|| !compareObject(attributes, getAttributesObjectFromElement(next))) {
	                return nexts;
	            }
	            nexts.push(next);
	        }
	        next = next.parentNode;
	    }
	    return nexts;
	};
	
	/**
	* setVariableButtonTogle
	* @description Changes the note's style variables based on the provided CSS object.
	* @param {Number} noteIndex - The index of the note.
	* @param {Object} cssObject - The CSS object containing style properties.
	*/
	var setVariableButtonTogle = function(noteIndex: number, cssObject: Record<string, string>) {
		//bold
		if(cssObject["font-weight"] === "bold") {
			vn.variables.boldToggles[noteIndex] = true;
		}
		else {
			vn.variables.boldToggles[noteIndex] = false;
		}
		//underline
		if(cssObject["text-decoration"] === "underline" || cssObject["text-decoration-line"] === "underline") {
			vn.variables.underlineToggles[noteIndex] = true;
		}
		else {
			vn.variables.underlineToggles[noteIndex] = false;
		}
		//italic
		if(cssObject["font-style"] === "italic") {
			vn.variables.italicToggles[noteIndex] = true;
		}
		else {
			vn.variables.italicToggles[noteIndex] = false;
		}
		//color
		if(cssObject["color"]) {
			vn.variables.colorTextRGBs[noteIndex] = getHexFromRGBA(cssObject["color"])!;
			vn.variables.colorTextOpacitys[noteIndex] = getOpacityFromRGBA(cssObject["color"])!;
			// If color is not in rgba format, use the default color and opacity
			if(!vn.variables.colorTextRGBs[noteIndex]) {
				vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color12[noteIndex]);
				vn.variables.colorTextOpacitys[noteIndex] = "1";
			}
			else {
				// If opacity is not present in rgba format, use 1 as default opacity
				if(!vn.variables.colorTextOpacitys[noteIndex]) {
					if(cssObject["opacity"]) {
						vn.variables.colorTextOpacitys[noteIndex] = cssObject["opacity"];
					}
					else {
						vn.variables.colorTextOpacitys[noteIndex] = "1";
					}
				}
			}
			
		}
		else {
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color12[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
		}
		//background color
		if(cssObject["background-color"]) {
			vn.variables.colorBackRGBs[noteIndex] = getHexFromRGBA(cssObject["background-color"])!;
			vn.variables.colorBackOpacitys[noteIndex] = getOpacityFromRGBA(cssObject["background-color"])!;
			// If background-color is not in rgba format, use the default color and opacity
			if(!vn.variables.colorTextRGBs[noteIndex]) {
				vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color12[noteIndex]);
				vn.variables.colorTextOpacitys[noteIndex] = "1";
			}
			else {
				// If opacity is not present in rgba format, use 0 as default opacity
				if(!vn.variables.colorBackOpacitys[noteIndex]) {
					if(cssObject["opacity"]) {
						vn.variables.colorBackOpacitys[noteIndex] = cssObject["opacity"];
					}
					else {
						vn.variables.colorBackOpacitys[noteIndex] = "0";
					}
				}
			}
		}
		else {
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color13[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "0";
		}
		/* Do not toggle font family and font size, etc.
		//font family
		if(cssObject["font-family"]) {
			vn.variables.fontFamilies[noteIndex] = cssObject["font-family"];
		}
		else {
			vn.variables.fontFamilies[noteIndex] = vn.variables.defaultStyles[noteIndex]["font-family"];
		}
		//font size
		if(cssObject["font-size"]) {
			vn.variables.fontSizes[noteIndex] = extractNumber(cssObject["font-size"]);
		}
		else {
			vn.variables.fontSizes[noteIndex] = extractNumber(vn.variables.defaultStyles[noteIndex]["font-size"]);
		}
		//letter spacing
		if(cssObject["letter-spacing"]) {
			vn.variables.letterSpacings[noteIndex] = extractNumber(cssObject["letter-spacing"]);
		}
		else {
			vn.variables.letterSpacings[noteIndex] = 0;
		}
		//line height
		if(cssObject["line-height"]) {
			vn.variables.lineHeights[noteIndex] = extractNumber(cssObject["line-height"]);
		}
		else {
			vn.variables.lineHeights[noteIndex] = extractNumber(vn.variables.defaultStyles[noteIndex]["line-height"]);
		}
		*/
	};
	
	/**
	* setTagToggle
	* @description Changes the note's tag variables based on the provided tag.
	* @param {Number} noteIndex - The index of the note.
	* @param {String} tag - The tag to set for the note.
	*/
	var setTagToggle = function(noteIndex: number, tag: string) {
		if(tag === "UL") {
			vn.variables.ulToggles[noteIndex] = true;
		}
		else {
			vn.variables.ulToggles[noteIndex] = false;
		}
		
		if(tag === "OL") {
			vn.variables.olToggles[noteIndex] = true;
		}
		else {
			vn.variables.olToggles[noteIndex] = false;
		}
	};
	
	/**
	* button_onToggle
	* @description Toggles the button on or off based on the 'toggle' parameter.
	* @param {HTMLElement} target - The target button to be toggled.
	* @param {Boolean} toggle - If true, the button is toggled on, otherwise it is toggled off.
	*/
	var button_onToggle = function(target: any, toggle: boolean) {
		// If a child element is selected, event is controlled
		if(target.classList.contains(getEventChildrenClassName())) {
			target = target.parentNode;
		}
		if(toggle) {
			var noteIndex = getNoteIndex(target);
			if(!noteIndex) return;
			target.classList.add(getId(noteIndex, "on_button_on"));
		} else {
			var noteIndex = getNoteIndex(target);
			if(!noteIndex) return;
			target.classList.remove(getId(noteIndex, "on_button_on"));
		}
	};
	
	/**
	* allButtonToggle
	* @description Toggles all buttons of a specific note.
	* @param {number} noteIndex - The index of the note whose buttons need to be toggled.
	*/
	var allButtonToggle = function(noteIndex: number) {
		//format
		button_onToggle(vn.elements.boldButtons[noteIndex], vn.variables.boldToggles[noteIndex]);
		button_onToggle(vn.elements.underlineButtons[noteIndex], vn.variables.underlineToggles[noteIndex]);
		button_onToggle(vn.elements.italicButtons[noteIndex], vn.variables.italicToggles[noteIndex]);
		button_onToggle(vn.elements.ulButtons[noteIndex], vn.variables.ulToggles[noteIndex]);
		button_onToggle(vn.elements.olButtons[noteIndex], vn.variables.olToggles[noteIndex]);
		//color
		(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
		= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex] === "0" ? "1" : vn.variables.colorTextOpacitys[noteIndex]);
		(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
		 = getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex] === "0" ? "1" : vn.variables.colorBackOpacitys[noteIndex]);
		/*Do not toggle font family and font size, etc.
		//font family
		vn.elements.fontFamilySelects[noteIndex].firstChild.textContent = vn.variables.fontFamilies[noteIndex].length > 12 ? vn.variables.fontFamilies[noteIndex].substr(0,12) + "..." : vn.variables.fontFamilies[noteIndex];
		vn.elements.fontFamilySelects[noteIndex].style.fontFamily = vn.variables.fontFamilies[noteIndex];
		//size
		vn.elements.fontSizeInputs[noteIndex].value = vn.variables.fontSizes[noteIndex];
		vn.elements.letterSpacingInputs[noteIndex].value = vn.variables.letterSpacings[noteIndex];
		vn.elements.lineHeightInputs[noteIndex].value = vn.variables.lineHeights[noteIndex];
		*/
	};
	
	/**
	* initToggleButtonVariables
	* @description Initializes the toggle button variables (Bold, Underline, Italic, Unordered List, Ordered List) for the note editor to false. Then, triggers the `button_onToggle` function for each of them to update their state.
	* @param {number} noteIndex - The index of the note editor where the toggle buttons will be initialized.
	*/
	var initToggleButtonVariables = function(noteIndex: number) {
		vn.variables.boldToggles[noteIndex] = false;
		vn.variables.underlineToggles[noteIndex] = false;
		vn.variables.italicToggles[noteIndex] = false;
		vn.variables.ulToggles[noteIndex] = false;
		vn.variables.olToggles[noteIndex] = false;
		//format
		button_onToggle(vn.elements.boldButtons[noteIndex], vn.variables.boldToggles[noteIndex]);
		button_onToggle(vn.elements.underlineButtons[noteIndex], vn.variables.underlineToggles[noteIndex]);
		button_onToggle(vn.elements.italicButtons[noteIndex], vn.variables.italicToggles[noteIndex]);
		button_onToggle(vn.elements.ulButtons[noteIndex], vn.variables.ulToggles[noteIndex]);
		button_onToggle(vn.elements.olButtons[noteIndex], vn.variables.olToggles[noteIndex]);
		/*Do not toggle color, font family and font size, etc.
		//color
		vn.elements.colorTextSelects[noteIndex].querySelector("."+getEventChildrenClassName()).style.color = vn.colors.color12[noteIndex];
		vn.elements.colorBackSelects[noteIndex].querySelector("."+getEventChildrenClassName()).style.color = vn.colors.color13[noteIndex];
		//font family
		vn.elements.fontFamilySelects[noteIndex].firstChild.textContent = vn.variables.defaultStyles[noteIndex]["font-family"].length > 12 ? vn.variables.defaultStyles[noteIndex]["font-family"].substr(0,12) + "..." : vn.variables.defaultStyles[noteIndex]["font-family"];
		vn.elements.fontFamilySelects[noteIndex].style.fontFamily = vn.variables.defaultStyles[noteIndex]["font-family"];
		//size
		vn.elements.fontSizeInputs[noteIndex].value = vn.variables.defaultStyles[noteIndex]["font-size"];
		vn.elements.letterSpacingInputs[noteIndex].value = vn.variables.defaultStyles[noteIndex]["letter-spacing"];
		vn.elements.lineHeightInputs[noteIndex].value = vn.variables.defaultStyles[noteIndex]["line-height"];
		*/
	};
	
	/**
	* selectToggle
	* @description Toggles a select box's visibility and adjusts its position based on the viewport's available space.
	* @param {HTMLElement} target - The select box to be toggled.
	*/
	var selectToggle = function(target: any) {
		// If a child element is selected, event is controlled
		if(target.classList.contains(getEventChildrenClassName())) {
			target = target.parentNode;
		}
		var select = target;
		var isClickBox = false;
		// If select box is selected
		while(select && select.getAttribute("type") !== "select") {
			isClickBox = true;
			select = select.parentNode;
		}
		if(!select.getAttribute("data-note-index")) return;
		var noteIndex = select.getAttribute("data-note-index");
		var selectId = select.getAttribute("id");
		var selectBox: any;
		
		if(selectId.includes("paragraphStyleSelect")) {
			selectBox = vn.elements.paragraphStyleSelectBoxes[noteIndex];
		}
		else if(selectId.includes("textAlignSelect")) {
			selectBox = vn.elements.textAlignSelectBoxes[noteIndex];
		}
		else if(selectId.includes("fontFamilySelect")) {
			selectBox = vn.elements.fontFamilySelectBoxes[noteIndex];
		}
		else if(selectId.includes("colorTextSelect")) {
			if(isClickBox) return; // Checks if the select box is currently visible
			selectBox = vn.elements.colorTextSelectBoxes[noteIndex];
		}
		else if(selectId.includes("colorBackSelect")) {
			if(isClickBox) return; // Checks if the select box is currently visible
			selectBox = vn.elements.colorBackSelectBoxes[noteIndex];
		}
		
		var displayBlock = getId(noteIndex, "on_display_block");
		var displayNone = getId(noteIndex, "on_display_none");
		var isOpened = selectBox.classList.contains(displayBlock);
		
		closeAllSelectBoxes(noteIndex);	//Close all other select boxes
		
		if(isOpened) {
			selectBox.classList.remove(displayBlock);
			selectBox.classList.add(displayNone);
		}
		else {
			selectBox.classList.remove(displayNone);
			selectBox.classList.add(displayBlock);
		}
		
		//If the select box is already opened, it closes. If it's closed, it opens.
		if(isCloserToRight(select)) {
			//closer right
			selectBox.style.removeProperty("left");
			selectBox.style.right = "0%";
			
			if(selectBox.offsetParent === null) return;
			var selectBoxRect = selectBox.getBoundingClientRect();
			if(selectBoxRect.top === 0) return
			
			if(vn.elements.tools[noteIndex].offsetParent === null) return;
			var toolRect = vn.elements.tools[noteIndex].getBoundingClientRect();
			
			if(toolRect.left > selectBoxRect.left) {
				selectBox.style.right = selectBoxRect.left - 1 + "px";
			}
		}
		else {
			//closer left
			selectBox.style.removeProperty("right");
			selectBox.style.left = "0%";
			
			if(selectBox.offsetParent === null) return;
			var selectBoxRect = selectBox.getBoundingClientRect();
			if(selectBoxRect.top === 0) return
			
			if(vn.elements.tools[noteIndex].offsetParent === null) return;
			var toolRect = vn.elements.tools[noteIndex].getBoundingClientRect();
			
			if(toolRect.right < selectBoxRect.right) {
				selectBox.style.left = toolRect.right - (selectBoxRect.right + 1) + "px";
			}
		}
	};
	
	/**
	* closeAllSelectBoxes
	* @description Closes all select boxes in the provided noteIndex.
	* @param {Number} noteIndex - The index of the note containing the select boxes to be closed.
	*/
	var closeAllSelectBoxes = function(noteIndex: number) {
		var displayBlock = getId(noteIndex, "on_display_block");
		var displayNone = getId(noteIndex, "on_display_none");
		
		vn.elements.paragraphStyleSelectBoxes[noteIndex].classList.remove(displayBlock);
		vn.elements.paragraphStyleSelectBoxes[noteIndex].classList.add(displayNone);
		vn.elements.textAlignSelectBoxes[noteIndex].classList.remove(displayBlock);
		vn.elements.textAlignSelectBoxes[noteIndex].classList.add(displayNone);
		vn.elements.fontFamilySelectBoxes[noteIndex].classList.remove(displayBlock);
		vn.elements.fontFamilySelectBoxes[noteIndex].classList.add(displayNone);
		vn.elements.colorTextSelectBoxes[noteIndex].classList.remove(displayBlock);
		vn.elements.colorTextSelectBoxes[noteIndex].classList.add(displayNone);
		vn.elements.colorBackSelectBoxes[noteIndex].classList.remove(displayBlock);
		vn.elements.colorBackSelectBoxes[noteIndex].classList.add(displayNone);
	};
	
	/**
	* fontFamilySelectList_onClick
	* @description Handles the click event on the font family select list.
	* @param {Event} e - The click event.
	*/
	var fontFamilySelectList_onClick = function(e: any) {
		if(!e.target) return;
		var selectLsit = e.target;
		var noteIndex = selectLsit.getAttribute("data-note-index");
		var fontFamily = selectLsit.getAttribute("data-font-family");
		var oldStyleObject: any = getObjectFromCssText((vn.elements.fontFamilySelects[noteIndex] as any).getAttribute("style"));
		oldStyleObject["font-family"] = fontFamily;
		// Change the font family in the variables and the displayed select list option.
		vn.variables.fontFamilies[noteIndex] = fontFamily;
		(vn.elements.fontFamilySelects[noteIndex] as any).firstChild.textContent = fontFamily.length > 12 ? fontFamily.substr(0,12) + "..." : fontFamily;
		(vn.elements.fontFamilySelects[noteIndex] as any).style.fontFamily = fontFamily;
	};
	
	/**
	* getObjectNoteCss
	* @description Creates and returns a style object based on the note's style toggles.
	* @param {Number} noteIndex - The index of the note.
	* @returns {Object} cssObject - The style object representing the note's styles.
	*/
	var getObjectNoteCss = function(noteIndex: number) {
		var cssObject: any = new Object();
		
		if(vn.variables.boldToggles[noteIndex]) {
			cssObject["font-weight"] = "bold";
		}
		if(vn.variables.underlineToggles[noteIndex]){
			cssObject["text-decoration"] = "underline";
		}
		if(vn.variables.italicToggles[noteIndex]){
			cssObject["font-style"] = "italic";
		}
		cssObject["font-size"] = vn.variables.fontSizes[noteIndex] + "px";
		cssObject["line-height"] = vn.variables.lineHeights[noteIndex] + "px";
		// Add letter-spacing to the style object only if it's not 0
		if(vn.variables.letterSpacings[noteIndex] !== "0"){
			cssObject["letter-spacing"] = vn.variables.letterSpacings[noteIndex] + "px";
		}
		if(vn.variables.fontFamilies[noteIndex]){
			cssObject["font-family"] = vn.variables.fontFamilies[noteIndex];
		}
		// Add text color to the style object if it's different from the default color and opacity
		if(getHexColorFromColorName(vn.colors.color12[noteIndex]) !== vn.variables.colorTextRGBs[noteIndex]
			|| vn.variables.colorTextOpacitys[noteIndex] !== "1") {
			cssObject["color"] = getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
		}
		// Add background color to the style object if it's different from the default color and opacity
		if(getHexColorFromColorName(vn.colors.color13[noteIndex]) !== vn.variables.colorBackRGBs[noteIndex]
			|| vn.variables.colorBackOpacitys[noteIndex] !== "0") {
			cssObject["background-color"] = getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
		}
		
		return cssObject;
	};
	
	/**
	* setEditStyleTag
	* @description Sets buttons and variables based on the selected element's styles and tags.
	* @param {Number} noteIndex - The index of the note.
	*/
	var setEditStyleTag = function(noteIndex: number) {
		if(vn.variables.setEditStyleTagToggle > 0) {
			vn.variables.setEditStyleTagToggle--;
			return;
		}
		var tempEl: any = vn.variables.editStartUnitElements[noteIndex];
		var textarea = tempEl;
		while(tempEl) {
			if(tempEl.tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
				textarea = tempEl;
				break;
			}
			tempEl = tempEl.parentNode;
		}
		if(!textarea) {
			for(var i = 0; i < vn.elements.notes.length; i++) {
				initToggleButtonVariables(i);
			}
			return;
		}
		
		// Get styles of the selected element
		var cssObjectEl = getObjectEditElementCss(vn.variables.editStartElements[noteIndex]);
		// If multiple elements are selected, check if all tags have the same styles
	    // If not, clear the cssObjectEl
		if(vn.variables.editStartNodes[noteIndex] !== vn.variables.editEndNodes[noteIndex]) {
			var tempCssObjectEl = cssObjectEl;
			var isCheck = false;
			var isEnd = false;
			var getCheckAllStyle = function(element: any) {
				for(var i = 0; i < element.childNodes.length; i++) {
					if(isEnd) break;
					if(vn.variables.editStartNodes[noteIndex] === element.childNodes[i]) {
						isCheck = true;
					}
					if(isCheck && element.childNodes[i].nodeType === 3 && element.childNodes[i].textContent) {
						tempCssObjectEl = getObjectEditElementCss(element.childNodes[i]);
					}
					if(!compareObject(cssObjectEl, tempCssObjectEl)) {
						cssObjectEl = {};
						isEnd = true;
					}
					if(vn.variables.editEndNodes[noteIndex] === element.childNodes[i]) {
						isEnd = true;
					}
					if(element.childNodes[i].childNodes) {
						getCheckAllStyle(element.childNodes[i]);
					}
				}
			};
			for(var i = 0; i < vn.variables.editDragUnitElements[noteIndex].length; i++) {
				getCheckAllStyle(vn.variables.editDragUnitElements[noteIndex][i]);
			}
		}
		// Change the note's style variables
		setVariableButtonTogle(noteIndex, cssObjectEl);
		// Get the current selected tag
		var nowTag = getEditElementTag(noteIndex);
		// Change the note's tag variables (toggle)
		setTagToggle(noteIndex, nowTag);
		// Toggle buttons for the note
		allButtonToggle(noteIndex);
	};
	
	/**
	* isInNote
	* @description Checks if the given element is a child of the note.
	* @param {Element} el - The element to check.
	* @returns {boolean} Returns true if the element is a child of the note, otherwise false.
	*/
	var isInNote = function(el: any) {
		while(el) {
			if(el && el instanceof Element && el.hasAttribute("data-vanillanote")) return true;
			el = el.parentNode;
		}
		return false;
	};
	
	/**
	* isInTextarea
	* @description Checks if the current selection is within the textarea of the note.
	* @returns {boolean} Returns true if the selection is within the textarea of the note, otherwise false.
	*/
	var isInTextarea = function() {
		var selection = window.getSelection();
		if (!selection || selection.rangeCount < 1) return false;
		
		var range = selection.getRangeAt(0);
		var textarea: any = range.startContainer.parentNode;
		var isTextarea = false;
		
		while(textarea) {
			if(textarea.tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
				isTextarea = true;
				break;
			}
			else {
				textarea = textarea.parentNode;
			}
		}
		return isTextarea;
	};
	
	/**
	* getElementReplaceTag
	* @description Replaces the tag of the given element and returns the new element.
	* @param {Element} element - The element whose tag needs to be replaced.
	* @param {string} tag - The new tag to be assigned to the element.
	* @returns {Element} Returns the new element with the replaced tag.
	*/
	var getElementReplaceTag = function(element: any, tag: string) {
		var tempEl = document.createElement(tag);
		var childNodes = element.childNodes;
		var csses: any;
		var newCssText;
		while(childNodes[0]) {
			if(childNodes[0].getAttribute) {
				csses = getObjectFromCssText(childNodes[0].getAttribute("style"));
				if (tempEl && tempEl.tagName.substring(0, 1) === "H") {
					delete csses["font-size"];
					delete csses["letter-spacing"];
					delete csses["line-height"];
				}
				newCssText = getCssTextFromObject(csses);
			}
			if(newCssText && childNodes[0].setAttribute) {
				childNodes[0].setAttribute("style", newCssText);
			}
			tempEl.append(childNodes[0]);
		}
		// Copy element's attributes to the new element.
		tempEl = setAttributesObjectToElement(tempEl, (getAttributesObjectFromElement(element) as any));
		return tempEl;
	};
	
	/**
	* removeDoubleTag
	* @description Removes the <ul> or <ol> tag and replaces it with <p> tags for each list item.
	* @param {number} noteIndex - The index of the note.
	* @param {Element} element - The element containing the <ul> or <ol> tag.
	*/
	var removeDoubleTag = function(noteIndex: number, element: any) {
		if(vn.consts.DOUBLE_TAG.indexOf(element.tagName) < 0) return;
		var tempEl;
		var childNodes = element.childNodes;
		for(var i = 0; i < childNodes.length; i++) {
			tempEl = getElementReplaceTag(childNodes[i], "P");
			element.insertAdjacentElement("beforebegin", tempEl);
			for(var j = 0; j < vn.variables.editDragUnitElements[noteIndex].length; j++) {
				if(vn.variables.editDragUnitElements[noteIndex][j] === childNodes[i]) {
					vn.variables.editDragUnitElements[noteIndex][j] = tempEl;
					break;
				}
			}
		}
		element.remove();
	};
	
	/**
	* getElement
	* @description Returns a styled span element with the given text, tag name, CSS text, and attributes.
	* @param {string} text - The text to be included inside the element. Newlines represented by "<br>" will be converted to "\n".
	* @param {string} tagName - The desired tag name for the element. If it's an invalid tag name or one of the UNIT_TAG or AUTO_MODIFY_TAG, "span" will be used as the default.
	* @param {string} cssText - The CSS text to apply to the element.
	* @param {object} attributes - An object containing the attributes and their values to apply to the element.
	* @returns {Element} - The styled span element.
	*/
	var getElement = function(text: string, tagName: string, cssText: string, attributes: Record<string, string>) {
		text = text.replace(/<br\s*\/?>/gm, "\n");
		if(!tagName || vn.consts.UNIT_TAG.indexOf(tagName) >= 0 || vn.consts.AUTO_MODIFY_TAG.indexOf(tagName) >= 0) {
			tagName = "span"
		}
		var tempEl = document.createElement(tagName);
		tempEl.innerText = text;
		if(attributes) {
			tempEl = setAttributesObjectToElement(tempEl, attributes);
		}
		if(cssText) {
			tempEl.setAttribute("style",cssText);
		}
		
		return tempEl;
	};
	
	/**
	* setEditNodeAndElement
	* @description Prevents empty edit unit tags (p, h1, h2, li, etc.) from being replaced by the edit node when setElement is one of them. Compares setElement with the current edit elements saved in the noteIndex to update them if necessary.
	* @param {number} noteIndex - The index of the note to be updated.
	* @param {Element} setElement - The element to be set.
	* @param {Element} compareElement - The element to compare with the current edit elements.
	* @returns {boolean} - Returns true if at least one of the edit elements has changed; otherwise, returns false.
	*/
	var setEditNodeAndElement = function(noteIndex: number, setElement: any, compareElement: any) {
		var isChange = false;
		if(vn.variables.editStartNodes[noteIndex] === compareElement) {
			vn.variables.editStartNodes[noteIndex] = setElement;
			isChange = true;
		}
		if(vn.variables.editEndNodes[noteIndex] === compareElement) {
			vn.variables.editEndNodes[noteIndex] = setElement;
			isChange = true;
		}
		if(vn.variables.editStartElements[noteIndex] === compareElement) {
			vn.variables.editStartElements[noteIndex] = setElement;
			isChange = true;
		}
		if(vn.variables.editEndElements[noteIndex] === compareElement) {
			vn.variables.editEndElements[noteIndex] = setElement;
			isChange = true;
		}
		if(vn.variables.editStartUnitElements[noteIndex] === compareElement) {
			vn.variables.editStartUnitElements[noteIndex] = setElement;
			isChange = true;
		}
		if(vn.variables.editEndUnitElements[noteIndex] === compareElement) {
			vn.variables.editEndUnitElements[noteIndex] = setElement;
			isChange = true;
		}
		return isChange;
	};
	
	/**
	* modifySeletedElements
	* @description Returns an array containing all elements from the start to the end of the selected range. It includes selected unit tags, br tags, and text nodes.
	* @param {number} noteIndex - The index of the note.
	* @returns {Array} - An array containing the selected elements.
	*/
	var modifySeletedElements = function(noteIndex: number) {
		var isEnd = false;
		var element = vn.variables.editStartNodes[noteIndex];
		var selectedNodes: any[] = [];
		if(!vn.variables.editStartUnitElements[noteIndex] || !vn.variables.editEndUnitElements[noteIndex]) return selectedNodes;
		
		var lastNode = vn.variables.editEndUnitElements[noteIndex].lastChild;
		while(lastNode) {
			if(!lastNode.lastChild) break;
			lastNode = lastNode.lastChild;
		}
		
		// Recursive function to get all child nodes
		var getChildNodes = function(node: any){
			if(node === lastNode) {
				selectedNodes.push(node);
				isEnd = true;
			}
			if(isEnd) return;
			if(vn.consts.UNIT_TAG.indexOf(node.tagName) >= 0
				|| vn.consts.EMPTY_ABLE_TAG.indexOf(node.tagName) >= 0
				|| node.nodeType === 3) {
				selectedNodes.push(node);
			}
			
			if(node && node.childNodes && node.childNodes.length) {
				for (var i = 0; i < node.childNodes.length; i++) {
					getChildNodes(node.childNodes[i]);	// Recursive call
				}
			}
		}
		// Get all sibling nodes
		while(element) {
			if(isEnd) break;
			getChildNodes(element);
			if(element.nextSibling) {
				element = element.nextSibling;
			}
			else {
				while(element && !element.nextSibling) {
					element = element.parentNode;
				}
				if(element) element = element.nextSibling;
			}
		}
		return selectedNodes;
	};
	
	/**
	* modifySelectedUnitElementTag
	* @description Changes the tag of the selected unit element.
	* @param {Element} target - The target element whose tag needs to be changed.
	*/
	var modifySelectedUnitElementTag = function(target: any) {
		var noteIndex = getNoteIndex(target);
		if(!noteIndex) return;
		if(!isValidSelection(noteIndex)) return;
		var tag = target.getAttribute("data-tag-name")
		var tempEl;
		
		if(vn.consts.DOUBLE_TAG.indexOf(tag) >= 0) { // ul or ol
			var tempDoubleElement = document.createElement(tag);
			for(var i = 0; i < vn.variables.editDragUnitElements[noteIndex].length; i++) {
				if((vn.variables.editDragUnitElements[noteIndex] as any)[i].tagName === "LI") {
					// Remove ul or ol tag
					removeDoubleTag(noteIndex, (vn.variables.editDragUnitElements[noteIndex] as any)[i].parentNode);
				}
				if(tag === "UL" && vn.variables.ulToggles[noteIndex]) {
					break;
				}
				if(tag === "OL" && vn.variables.olToggles[noteIndex]) {
					break;
				}
				// Recreate ul or ol tag
				if(i === 0) {
					(vn.variables.editDragUnitElements[noteIndex] as any)[0].insertAdjacentElement("beforebegin", tempDoubleElement);
				}
				tempEl = getElementReplaceTag(vn.variables.editDragUnitElements[noteIndex][i], "LI");
				// Prevents the edit Node from being replaced with a unit tag when there's an empty edit unit tag (p, h1, h2, li, etc.).
				setEditNodeAndElement(noteIndex, tempEl, vn.variables.editDragUnitElements[noteIndex][i]);
				
				(vn.variables.editDragUnitElements[noteIndex] as any)[i].remove();
				vn.variables.editDragUnitElements[noteIndex][i] = tempEl;
				tempDoubleElement.append(tempEl);
			}
		} else {
			for(var i = 0; i < vn.variables.editDragUnitElements[noteIndex].length; i++) {
				if((vn.variables.editDragUnitElements[noteIndex] as any)[i].tagName === "LI") {
					// Remove ul or ol tag
					removeDoubleTag(noteIndex, (vn.variables.editDragUnitElements[noteIndex] as any)[i].parentNode);
				}
				// Create new tag
				tempEl = getElementReplaceTag(vn.variables.editDragUnitElements[noteIndex][i], tag);
				
				// Prevents the edit Node from being replaced with a unit tag when there's an empty edit unit tag (p, h1, h2, li, etc.).
				setEditNodeAndElement(noteIndex, tempEl, vn.variables.editDragUnitElements[noteIndex][i]);
				
				(vn.variables.editDragUnitElements[noteIndex] as any)[i].replaceWith(tempEl);
				vn.variables.editDragUnitElements[noteIndex][i] = tempEl;
			}
		}
		
		// Sets the new selection range.
		var newStartOffset = 0
		var newEndOffset = vn.variables.editEndElements[noteIndex] ? (vn.variables.editEndElements[noteIndex] as any).textContent.length : 0
		if(vn.variables.editStartElements[noteIndex] === vn.variables.editEndElements[noteIndex]) {
			newStartOffset = newEndOffset;
		}
		// Sets the new selection range.
		setNewSelection(
				vn.variables.editStartNodes[noteIndex]!,
				newStartOffset,
				vn.variables.editEndNodes[noteIndex]!,
				newEndOffset
				);
	};
	
	/**
	* modifySelectedUnitElementStyle
	* @description Changes the style of the selected unit element.
	* @param {Element} target - The target element whose style needs to be changed.
	*/
	var modifySelectedUnitElementStyle = function(target: any) {
		var noteIndex = getNoteIndex(target);
		if(!noteIndex) return;
		if(!isValidSelection(noteIndex)) return;
		
		var tagCssText = target.getAttribute("data-tag-style");
		var nowCssText;
		var newCssText;
		var tagCssObject = getObjectFromCssText(tagCssText);
		var nowCssObject;
		var tempEl
		
		for(var i = 0; i < vn.variables.editDragUnitElements[noteIndex].length; i++) {
			nowCssText = (vn.variables.editDragUnitElements[noteIndex] as any)[i].getAttribute("style");
			// Convert style text to an object
			nowCssObject = getObjectFromCssText(nowCssText);
			
			// Merge the style objects and than Convert the style object back to text
			newCssText = getCssTextFromObject(mergeObjects(nowCssObject, tagCssObject));
			
			// Perform mutation to trigger the changes by removing and recreating the element
			tempEl = (vn.variables.editDragUnitElements[noteIndex] as any)[i].cloneNode(true);
			tempEl.setAttribute("style",newCssText);
			(vn.variables.editDragUnitElements[noteIndex] as any)[i].parentNode.replaceChild(tempEl, (vn.variables.editDragUnitElements[noteIndex] as any)[i]);
			vn.variables.editDragUnitElements[noteIndex][i] = tempEl;
		}
		
		// Sets the new selection range.
		var newStartOffset = 0
		var newEndOffset = (vn.variables.editEndElements[noteIndex] as any).childNodes ? (vn.variables.editEndElements[noteIndex] as any).childNodes.length : 0
		// Sets the new selection range.
		setNewSelection(
				(vn.variables.editDragUnitElements[noteIndex] as any)[0],
				0,
				(vn.variables.editDragUnitElements[noteIndex] as any)[vn.variables.editDragUnitElements[noteIndex].length - 1],
				1
				);
	};
	
	/**
	 * modifySelectedSingleElement
	 * @description Changes the selected individual element by modifying its style, tag, or attributes.
	 * @param {number} noteIndex - The index of the note where modifications are applied.
	 * @param {object} csses - An object representing the style properties to be applied to the selected element.
	 * @param {string} tagName - A string representing the new tag name to be used for the selected element.
	 * @param {object} attributes - An object representing the attributes to be applied to the selected element.
	 */
	var modifySelectedSingleElement = function(noteIndex: number, csses: Record<string, string> | null, tagName?: string, attributes?: Record<string, string>) {
		if(!isValidSelection(noteIndex)) return;
		var tempEl, positionEl, tempUnitEl;
		var newTagName, newCssText, newAttributes;
		var selectedNodes, newStartNode, newEndNode, newEndOffset;
		
		if(!csses) {
			newCssText = "";
		}
		else {
			newCssText = getCssTextFromObject(csses);
		}
		if(!tagName) {
			newTagName = "";
		}
		else {
			newTagName = tagName;
		}
		if(!attributes) {
			newAttributes = null;
		}
		else {
			newAttributes = attributes;
		}
		// SelectedNodes is an array containing all the selected elements and text nodes.
		selectedNodes = modifySeletedElements(noteIndex);
		
		// Text content before the starting node of the selection.
		var sS =( vn.variables.editStartNodes[noteIndex] as any).textContent.slice(0,vn.variables.startOffsets[noteIndex]);
		// Text content after the starting node of the selection.
		var sE =( vn.variables.editStartNodes[noteIndex] as any).textContent.slice(vn.variables.startOffsets[noteIndex],vn.variables.editStartNodes[noteIndex]!.textContent!.length);
		// Text content before the ending node of the selection.
		var eS = (vn.variables.editEndNodes[noteIndex] as any).textContent.slice(0,vn.variables.endOffsets[noteIndex]);
		// Text content after the ending node of the selection.
		var eE = (vn.variables.editEndNodes[noteIndex] as any).textContent.slice(vn.variables.endOffsets[noteIndex],vn.variables.editEndNodes[noteIndex]!.textContent!.length);
		
		// An internal function used for inserting nodes.
		var insertSelectedNode = function(tempEl: any, tempUnitEl: any) {
			if(!tempEl) return;
			if(tempUnitEl) {
				tempUnitEl.insertBefore(tempEl, null);
			}
			else {
				(vn.variables.editStartUnitElements[noteIndex] as any).insertBefore(tempEl, null);
			}
		}
		// A condition indicating that the end node of the selection has been reached.
		var isEnd = false;
		// A check to determine if the starting node and ending node of the selection are the same.
		var isStartNodeEqualEndNode = vn.variables.editStartNodes[noteIndex] === vn.variables.editEndNodes[noteIndex];
		for(var i = 0; i < selectedNodes.length; i++) {
			if(selectedNodes[i].nodeType === 3) {	// A comment indicating that the subsequent code handles text nodes in the selection.
				if(!attributes) newAttributes = getObjectEditElementAttributes(selectedNodes[i]);	// If no attributes are provided for the new element, use the existing attributes of the node being replaced.
				if(!tagName) newTagName = getSpecialTag(selectedNodes[i]);	// If no tag name is provided for the new element, use the existing tag name of the node being replaced.
				if(!csses) newCssText = getCssTextFromObject(getObjectEditElementCss(selectedNodes[i]));	// If no style is provided for the new element, use the existing style of the node being replaced.
				
				// An exception for headers where the font size should be ignored.
				tempEl = getParentUnitTagElemnt(selectedNodes[i]);
				if (tempEl && tempEl.tagName.substring(0, 1) === "H") {
					csses = (getObjectFromCssText(newCssText) as Record<string, string>);
					delete csses["font-size"];
					delete csses["letter-spacing"];
					delete csses["line-height"];
					newCssText = getCssTextFromObject(csses);
				}

				if(selectedNodes[i] === vn.variables.editStartNodes[noteIndex]) { // Indicates the starting node of the selection.
					if(isStartNodeEqualEndNode) {	// If the starting node and ending node are the same, remove the text before the starting point up to the ending point.
						sE = sE.slice(0, sE.length - eE.length);
					}
					// Insert text before the starting node.
					tempEl = getElement(sS,
							getParentTagName(vn.variables.editStartNodes[noteIndex]),
							getCssTextFromObject(getObjectEditElementCss(vn.variables.editStartNodes[noteIndex])),
							getObjectEditElementAttributes(vn.variables.editStartNodes[noteIndex]));
					insertSelectedNode(tempEl, tempUnitEl);
					// Insert text after the starting node.
					tempEl = getElement(sE, newTagName, newCssText, newAttributes);
					insertSelectedNode(tempEl, tempUnitEl);
					// Reset the starting node.
					newStartNode = tempEl.firstChild;
					
					if(isStartNodeEqualEndNode) {	//If the starting and ending nodes are the same, insert text after the ending point and finish.
						// Reset the ending node (same as the starting point).
						newEndNode = tempEl.firstChild;
						tempEl = getElement(eE,
								getParentTagName(vn.variables.editEndNodes[noteIndex]),
								getCssTextFromObject(getObjectEditElementCss(vn.variables.editEndNodes[noteIndex])),
								getObjectEditElementAttributes(vn.variables.editEndNodes[noteIndex]));
						insertSelectedNode(tempEl, tempUnitEl);
						// Set the "isEnd" boolean variable to true.
						isEnd = true;
					}
					// Remove the starting node.
					selectedNodes[i].remove();
				}
				else if(!isStartNodeEqualEndNode && selectedNodes[i] === vn.variables.editEndNodes[noteIndex]) {	// For the case where the starting and ending nodes are different, and the current node is the ending node.
					// Insert text before the ending node.
					tempEl = getElement(eS, newTagName, newCssText, newAttributes);
					insertSelectedNode(tempEl, tempUnitEl);
					// Reset the ending node.
					newEndNode = tempEl.firstChild;
					// Insert text after the ending node.
					tempEl = getElement(eE,
							getParentTagName(vn.variables.editEndNodes[noteIndex]),
							getCssTextFromObject(getObjectEditElementCss(vn.variables.editEndNodes[noteIndex])),
							getObjectEditElementAttributes(vn.variables.editEndNodes[noteIndex]));
					insertSelectedNode(tempEl, tempUnitEl);
					// Set the "isEnd" boolean variable to true.
					isEnd = true;
					selectedNodes[i].remove();
				}
				else {	// For the rest of the selected nodes that are not starting or ending nodes.
					if(isEnd) {	// If "isEnd" is true, apply the existing attributes and styles to nodes until the end of the edit unit.
						tempEl = getElement(selectedNodes[i].textContent,
								getParentTagName(selectedNodes[i]),
								getCssTextFromObject(getObjectEditElementCss(selectedNodes[i])),
								getObjectEditElementAttributes(selectedNodes[i]));
					}
					else {	// If "isEnd" is false, apply new attributes and styles to selected nodes.
						tempEl = getElement(selectedNodes[i].textContent, newTagName, newCssText, newAttributes);
					}
					insertSelectedNode(tempEl, tempUnitEl);
					selectedNodes[i].remove();
				}
			}
			else if(vn.consts.EMPTY_ABLE_TAG.indexOf(selectedNodes[i].tagName) >= 0) {	// For empty able tags, copy them as they are.
				tempEl = selectedNodes[i].cloneNode();
				insertSelectedNode(tempEl, tempUnitEl);
				selectedNodes[i].remove();
			}
			else if(vn.consts.UNIT_TAG.indexOf(selectedNodes[i].tagName) >= 0) {	// For unit tags, set the insert position.
				tempUnitEl = selectedNodes[i];
			}
		}
		
		// Clean up the target elements for editing.
		for(var i = 0; i < vn.variables.editDragUnitElements[noteIndex].length; i++) {
			removeEmptyElment(vn.variables.editDragUnitElements[noteIndex][i]);
		}
		
		if(!newStartNode) {
			newStartNode = vn.variables.editStartUnitElements[noteIndex];	
		}
		
		if(!newEndNode) {
			newEndNode = vn.variables.editEndUnitElements[noteIndex];
			newEndOffset = 0;
		}
		else {
			newEndOffset = newEndNode!.textContent!.length;
		}
		
		// Sets the new selection range.
		setNewSelection(
				newStartNode!,
				0,
				newEndNode!,
				newEndOffset
				);
	};
	
	/**
	* textarea_onBeforeinputSpelling
	* @description Handles the event when text is input in the editNote.
	* @param {Event} e - The input event.
	*/
	var textarea_onBeforeinputSpelling = function(e: any) {
	    var noteIndex = getNoteIndex(e.target);
	    if(!noteIndex) return;
	 	// A delay of 0.05 seconds is applied for textarea_onBeforeinputSpelling event to avoid errors when inputting a large number of characters at once.
		if(!vn.variables.canEvents) return;
		onEventDisable("input");
		
		// If no specific range is selected, return.
	    if(!isValidSelection(noteIndex)) return;
	    
	 	// Get the current set style.
		var cssText = "";
		var cssObject = getObjectNoteCss(noteIndex);
		// Style check is only required for the starting element when inputting.
		var cssObjectEl = getObjectEditElementCss(vn.variables.editStartElements[noteIndex]);
		
		// Ignore font size when inputting in a header.
		if ((vn.variables.editStartUnitElements[noteIndex] as any).tagName.substring(0, 1) === "H") {
			delete cssObject["font-size"];
			delete cssObject["letter-spacing"];
			delete cssObject["line-height"];
		}
		else {	// If it is not a header, if there are any child elements with missing font-size and line-height, put them back.
			if(vn.variables.editStartElements[noteIndex] instanceof Element
				&& vn.consts.UNIT_TAG.indexOf((vn.variables.editStartElements[noteIndex] as any).tagName) < 0
				&& (!cssObjectEl["font-size"] || !cssObjectEl["line-height"])) {
				cssObjectEl = cssObject;
				setAttributesObjectToElement(vn.variables.editStartElements[noteIndex], {"style" : getCssTextFromObject(cssObjectEl)});
			}
		}
		
		// If the style is the same, exit.
		if(compareObject(cssObject,cssObjectEl)) {
			return;
		}
		else {
			cssText = getCssTextFromObject(cssObject);
		}
		
		// Create the edit point.
		var selectElement = document.createElement("span");
		selectElement.setAttribute("class",vn.variables.noteName + "-point");
		selectElement.appendChild(document.createTextNode("!"));
		// Execute only when the starting point is a single point.
		if((vn.variables.editRanges[noteIndex] as any).collapsed) {
			(vn.variables.editRanges[noteIndex] as any).insertNode(selectElement);
			// Modify the style of the selected element.
			try {
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
			catch (err){}
			
			// Retrieve the edit point.
			var newSelectElements = document.getElementsByClassName(vn.variables.noteName + "-point");
			var newSelectElement = newSelectElements[0];
			
			if(cssText) {
				newSelectElement.setAttribute("style",cssText);	
			} else {
				newSelectElement.removeAttribute("style");
			}
			// Remove the class of all edit points.
			for(var i = 0; i < newSelectElements.length; i++) {
				newSelectElements[i].removeAttribute("class");	
			}
			// Sets the new selection range.
			setNewSelection((newSelectElement.firstChild as any), 0, (newSelectElement.firstChild as any), (newSelectElement.firstChild as any).length);
		}
		else {
			// Modify the style of the selected element.
			modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
		}
	};

	/**
	* textarea_onKeydownEnter
	* @description Handles the event when the enter key is pressed in the editNote.
	* @param {Element} target - The target element where the enter key was pressed.
	*/
	var textarea_onKeydownEnter = function(target: any) {
		var noteIndex = getNoteIndex(target);
		if(!noteIndex) return;
		if(!isValidSelection(noteIndex)) return;
		if(vn.variables.editStartUnitElements[noteIndex] && (vn.variables.editStartUnitElements[noteIndex] as any).textContent) {
			return;
		}
		// Ignore if it is an empty-able tag (except BR, img, input).
		if(vn.variables.editStartNodes[noteIndex] instanceof Element
			&& vn.consts.EMPTY_ABLE_TAG.indexOf((vn.variables.editStartNodes[noteIndex] as any).tagName) >= 0
			&& (vn.variables.editStartNodes[noteIndex] as any).tagName !== "BR") {
			return;
		}
		var tempEl1;
		var tempEl2;
		var tagName = (vn.variables.editStartUnitElements[noteIndex] as any).tagName;
		tempEl1 = document.createElement(tagName);
		tempEl2 = document.createElement("BR");
		tempEl1.appendChild(tempEl2);
		tempEl1 = setAttributesObjectToElement(tempEl1, (getAttributesObjectFromElement((vn.variables.editStartUnitElements[noteIndex] as any)) as any));
		
		(vn.variables.editStartUnitElements[noteIndex] as any).replaceWith(tempEl1);
		
		// Sets the new selection range.
		setNewSelection(tempEl1, 0, tempEl1, 0);
	};
	
	/**
	* initTextarea
	* @description Initializes the edit note by setting its content to a default state (<p><br></p>).
	* @param {HTMLTextAreaElement} textarea - The textarea element representing the edit note.
	*/
	var initTextarea = function(textarea: any) {
		// Remove all existing child elements of the textarea.
		while(textarea.firstChild) {
			textarea.removeChild(textarea.firstChild);
		}
 		var tempEl1 = document.createElement("P");
 		var tempEl2 = document.createElement("BR");
 		tempEl1.appendChild(tempEl2);
 		textarea.appendChild(tempEl1);
 		// Sets the new selection range.
 		setNewSelection(tempEl1, 0, tempEl1, 0);
	};
	
	/**
	* removeEmptyElment
	* @description Removes empty elements from the given element (el) and its descendants.
	* @param {Element} el - The element from which to start checking and removing empty elements.
	*/
	var removeEmptyElment = function(el: any) {
		var childrens = el.querySelectorAll("*");
		for(var i = childrens.length - 1; i >= 0; i--) {
			if(!(childrens[i].hasChildNodes()) && vn.consts.EMPTY_ABLE_TAG.indexOf(childrens[i].tagName) < 0) {
				childrens[i].remove();
			}
		}
	};
	
	/**
	* editUnitCheck
	* @description Checks and surrounds elements that are not already within unit tags with a new unit tag in the editor.
	* @param {Element} textarea - The textarea element representing the editor.
	*/
	var editUnitCheck = function(textarea: any) {
		var childrens = textarea.childNodes;
		var tempNewUnitElement = document.createElement("P");
		var removeElements = [];
		var isFirstToggle = true;
		for(var i = 0; i < childrens.length; i++) {
			// If the parent is not a unit tag or a double tag
			if(vn.consts.UNIT_TAG.indexOf(childrens[i].tagName) < 0 && vn.consts.DOUBLE_TAG.indexOf(childrens[i].tagName) < 0) {
				if(isFirstToggle) {
					textarea.insertBefore(tempNewUnitElement, childrens[i]);
					isFirstToggle = false;
				}
				else {
					tempNewUnitElement.append(childrens[i].cloneNode(true));
					removeElements.push(childrens[i]);
				}
			}
			else {
				tempNewUnitElement = document.createElement("P"); //init
				isFirstToggle = true;
			}
		}
		for(var i = 0; i < removeElements.length; i++) {
			removeElements[i].remove();
		}
	};
	
	/**
	* doEditUnitCheck
	* @description do editUnitCheck.
	* @param {Element} textarea - The textarea element representing the editor.
	*/
	var doEditUnitCheck = function(noteIndex: number) {
		//Disconnect the observer.
		elementsEvent["note_observer"].disconnect();
		// In the editor, elements not surrounded by unit tags are recreated, wrapped with unit tags.
		editUnitCheck(vn.elements.textareas[noteIndex]);
		// Reconnect the observer.
		connectObserver();
	}
	
	/**
	* connectObserver
	* @description Connects the observer to all note textareas.
	*/
	var connectObserver = function() {
		for(var i = 0; i < vn.elements.textareas.length; i++) {
			elementsEvent["note_observer"].observe(vn.elements.textareas[i], vn.variables.observerOptions);
		}
	};
	
	/**
	* setElementScroll
	* @description Animates the scrolling of the parent element to bring the child element into view.
	* @param {Element} parentElement - The parent element to be scrolled.
	* @param {Element} childElement - The child element to bring into view.
	*/
	var setElementScroll = function(parentElement: any, childElement: any) {
		if(!parentElement || !childElement) return;
		if(childElement.nodeType === 3) childElement = childElement.parentNode;
	    var start: any = null;
	    var target = childElement.offsetTop - Math.round(vn.variables.mobileKeyboardExceptHeight! / 2) + Math.round(childElement.offsetHeight / 2);
	    var firstPosition = parentElement.scrollTop;
	    var difference = target - firstPosition;
	    var duration = 500; // Animation duration in milliseconds
	    
	    function step(timestamp: any) {
	        if (!start) start = timestamp;
	        var progress = timestamp - start;
	        var percent = Math.min(progress / duration, 1);
	        parentElement.scrollTop = firstPosition + difference * percent;

	     	// Continue the animation as long as it's not finished
	        if (progress < duration) {
	            window.requestAnimationFrame(step);
	        }
	    }
	    
	    window.requestAnimationFrame(step);
	};
	
	/**
	* decreaseTextareaHeight
	* @description Decreases the height of the textarea to the mobileKeyboardExceptHeight value.
	* @param {HTMLTextAreaElement} textarea - The textarea element to be resized.
	*/
	var decreaseTextareaHeight = function(textarea: any, noteIndex: number) {
		if(extractUnit(vn.variables.textareaOriginHeights[noteIndex]) !== 'px') return;
		if(vn.variables.mobileKeyboardExceptHeight! < extractNumber(vn.variables.textareaOriginHeights[noteIndex])!
			&& vn.variables.mobileKeyboardExceptHeight! < textarea.offsetHeight) {
			textarea.style.height = vn.variables.mobileKeyboardExceptHeight + "px";
		}
	};
	
	/**
	* increaseTextareaHeight
	* @description Increases the height of the textarea to its original height.
	* @param {HTMLTextAreaElement} textarea - The textarea element to be resized.
	*/
	var increaseTextareaHeight = function(textarea: any) {
		var noteIndex = textarea.getAttribute("data-note-index");
		textarea.style.height = vn.variables.textareaOriginHeights[noteIndex];
	};
	
	/**
	* getCheckSelectBoxesOpened
	* @description Checks if any select box is in open state. Returns true if at least one select box is open.
	* @param {Number} noteIndex - The index of the note where the select boxes are located.
	* @returns {Boolean} - Returns true if any select box is open, false otherwise.
	*/
	var getCheckSelectBoxesOpened = function(noteIndex: number) {
		var displayBlock = getId(noteIndex, "on_display_block");
		
		if(vn.elements.paragraphStyleSelectBoxes[noteIndex].classList.contains(displayBlock)) return true;
		if(vn.elements.textAlignSelectBoxes[noteIndex].classList.contains(displayBlock)) return true;
		if(vn.elements.fontFamilySelectBoxes[noteIndex].classList.contains(displayBlock)) return true;
		if(vn.elements.colorTextSelectBoxes[noteIndex].classList.contains(displayBlock)) return true;
		if(vn.elements.colorBackSelectBoxes[noteIndex].classList.contains(displayBlock)) return true;
		
		return false;
	};
	
	/**
	* closeAllModal
	* @description Closes all modals and initializes attachment link, file, and image modals.
	* @param {Number} noteIndex - The index of the note where the modals are located.
	*/
	var closeAllModal = function(noteIndex: number) {
		var displayBlock = getId(noteIndex, "on_display_block");
		var displayNone = getId(noteIndex, "on_display_none");
		
		vn.elements.backModals[noteIndex].classList.remove(displayBlock);
		vn.elements.backModals[noteIndex].classList.add(displayNone);
		vn.elements.attLinkModals[noteIndex].classList.remove(displayBlock);
		vn.elements.attLinkModals[noteIndex].classList.add(displayNone);
		vn.elements.attFileModals[noteIndex].classList.remove(displayBlock);
		vn.elements.attFileModals[noteIndex].classList.add(displayNone);
		vn.elements.attImageModals[noteIndex].classList.remove(displayBlock);
		vn.elements.attImageModals[noteIndex].classList.add(displayNone);
		vn.elements.attVideoModals[noteIndex].classList.remove(displayBlock);
		vn.elements.attVideoModals[noteIndex].classList.add(displayNone);
		vn.elements.helpModals[noteIndex].classList.remove(displayBlock);
		vn.elements.helpModals[noteIndex].classList.add(displayNone);
		
		//Initialize attachment link modal
		initAttLink(noteIndex);
		//Initialize attachment file modal
		initAttFile(noteIndex);
		//Initialize attachment image modal
		initAttImage(noteIndex);
	};
	
	/**
	* openAttLinkModal
	* @description Opens the attachment link modal for a specific note. It also handles closing all other modals,
	* adjusting modal size, and setting focus based on whether the range is collapsed or not.
	* @param {String or Number} noteIndex - The index of the note for which the attachment link modal should be opened.
	*/
	var openAttLinkModal = function(noteIndex: number) {
		// Restore the note size.
		doIncreaseTextareaHeight();
		
		// Close all modals
		closeAllModal(noteIndex);
		// Close all selects
		closeAllSelectBoxes(noteIndex);
		// Adjust modal size
		setAllModalSize(noteIndex);
		// Open modal background
		var displayBlock = getId(noteIndex, "on_display_block");
		var displayNone = getId(noteIndex, "on_display_none");
		vn.elements.backModals[noteIndex].classList.remove(displayNone);
		vn.elements.backModals[noteIndex].classList.add(displayBlock);
		vn.elements.attLinkModals[noteIndex].classList.remove(displayNone);
		vn.elements.attLinkModals[noteIndex].classList.add(displayBlock);
		
		if(!isValidSelection(noteIndex)) {
			validCheckAttLink(noteIndex);
			return;	
		}
		
		var attLinkText: any = vn.elements.attLinkTexts[noteIndex];
		var attLinkHref: any = vn.elements.attLinkHrefs[noteIndex];
		attLinkText.value = vn.variables.editRanges[noteIndex]!.toString();
		attLinkHref.value = "";
		
		if(!vn.variables.editRanges[noteIndex]!.collapsed) {
			attLinkText.setAttribute("readonly","true");
			attLinkHref.focus();
		}
		else {
			attLinkText.removeAttribute("readonly");
			attLinkText.focus();
		}
		
		validCheckAttLink(noteIndex);
	};
	
	/**
	* openPlaceholder
	* @description Opens the placeholder if it is visible and the associated textarea contains no text or a single character.
	* @param {Number} noteIndex - The index of the note where the placeholder is located.
	*/
	var openPlaceholder = function(noteIndex: number) {
		if(vn.variables.placeholderIsVisible[noteIndex]
			&& vn.elements.textareas[noteIndex].innerText.length <= 1
			&& vn.elements.textareas[noteIndex].textContent!.length < 1
			&& vn.elements.textareas[noteIndex].childNodes.length <= 1
			&& vn.elements.textareas[noteIndex].childNodes[0]
			&& vn.elements.textareas[noteIndex].childNodes[0].childNodes.length <= 1
			&& vn.elements.textareas[noteIndex].childNodes[0].childNodes[0]
			&& (vn.elements.textareas[noteIndex].childNodes[0].childNodes[0] as any).tagName === "BR"
		) {
			vn.elements.placeholders[noteIndex].classList.remove(getId(noteIndex, "on_display_none"));
			vn.elements.placeholders[noteIndex].classList.add(getId(noteIndex, "on_display_block"));
		}
	};
	
	/**
	* closePlaceholder
	* @description Closes the placeholder if it is visible and the associated textarea contains no text or a single character.
	* @param {Number} noteIndex - The index of the note where the placeholder is located.
	*/
	var closePlaceholder = function(noteIndex: number) {
		if(vn.variables.placeholderIsVisible[noteIndex]) {
			vn.elements.placeholders[noteIndex].classList.remove(getId(noteIndex, "on_display_block"));
			vn.elements.placeholders[noteIndex].classList.add(getId(noteIndex, "on_display_none"));
		}
	};
	
	/**
	* setAllModalSize
	* @description Controls the size of all modals. It adjusts the size of modals to match the height of the textarea. 
	*              It uses setTimeout to adjust the height according to the textarea's dynamic size change.
	* @param {Number} noteIndex - The index of the note where the modals are located.
	*/
	var setAllModalSize = function(noteIndex: number) {
		if(vn.elements.templates[noteIndex].offsetParent === null) return
		// Use setTimeout to adjust size according to the dynamic change in textarea's size.
		setTimeout(function() {
			vn.elements.backModals[noteIndex].style.width = vn.elements.templates[noteIndex].clientWidth + "px";
			vn.elements.backModals[noteIndex].style.height = vn.elements.templates[noteIndex].clientHeight + "px";
			vn.elements.attLinkModals[noteIndex].style.width = vn.elements.textareas[noteIndex].clientWidth*0.8 + "px"
			vn.elements.attLinkModals[noteIndex].style.marginTop = vn.elements.templates[noteIndex].clientHeight*0.1 + "px"
			vn.elements.attFileModals[noteIndex].style.width = vn.elements.textareas[noteIndex].clientWidth*0.8 + "px"
			vn.elements.attFileModals[noteIndex].style.marginTop = vn.elements.templates[noteIndex].clientHeight*0.1 + "px"
			vn.elements.attImageModals[noteIndex].style.width = vn.elements.textareas[noteIndex].clientWidth*0.8 + "px"
			vn.elements.attImageModals[noteIndex].style.marginTop = vn.elements.templates[noteIndex].clientHeight*0.1 + "px"
			vn.elements.attVideoModals[noteIndex].style.width = vn.elements.textareas[noteIndex].clientWidth*0.8 + "px"
			vn.elements.attVideoModals[noteIndex].style.marginTop = vn.elements.templates[noteIndex].clientHeight*0.1 + "px"
			vn.elements.helpModals[noteIndex].style.width = vn.elements.textareas[noteIndex].clientWidth*0.8 + "px"
			vn.elements.helpModals[noteIndex].style.marginTop = vn.elements.templates[noteIndex].clientHeight*0.1 + "px"
		},500);
	};
	
	/**
	* setPlaceholderSize
	* @description Controls the size and position of the placeholder for the specified note.
	* @param {number} noteIndex - The index of the note for which to set the placeholder size.
	*/
	var setPlaceholderSize = function(noteIndex: number) {
		// Use setTimeout to adjust size according to the dynamic change in textarea's size.
		setTimeout(function() {
			if(!vn.variables.placeholderIsVisible[noteIndex]) return;
			closePlaceholder(noteIndex);
			if(vn.elements.textareas[noteIndex].offsetParent === null) return
			vn.elements.placeholders[noteIndex].style.top = (vn.elements.textareas[noteIndex].offsetTop + vn.variables.placeholderAddTop[noteIndex]) + "px";
			vn.elements.placeholders[noteIndex].style.left = (vn.elements.textareas[noteIndex].offsetLeft + vn.variables.placeholderAddLeft[noteIndex]) + "px";
			vn.elements.placeholders[noteIndex].style.width = vn.variables.placeholderWidth[noteIndex] ? vn.variables.placeholderWidth[noteIndex] : vn.elements.textareas[noteIndex].clientWidth + "px";
			openPlaceholder(noteIndex);
		},100);
	};
	
	/**
	* setAllToolTipPosition
	* @description Adjusts the position of tooltips based on the toolPositions value for the specified note.
	* @param {number} noteIndex - The index of the note for which to adjust tooltip positions.
	*/
	var setAllToolTipPosition = function(noteIndex: number) {
		if(vn.variables.toolPositions[noteIndex] === "BOTTOM") {
			vn.elements.attLinkTooltips[noteIndex].style.bottom = vn.elements.tools[noteIndex].style.height;
			vn.elements.attImageAndVideoTooltips[noteIndex].style.bottom = vn.elements.tools[noteIndex].style.height;
		}
	};
	
	/**
	* closeAllTooltip
	* @description Closes all the tooltips associated with the specified note.
	* @param {number} noteIndex - The index of the note for which to close all tooltips.
	*/
	var closeAllTooltip = function(noteIndex: number) {
		vn.elements.attLinkTooltips[noteIndex].style.opacity = "0";
		vn.elements.attLinkTooltips[noteIndex].style.height  = "0";
		vn.elements.attImageAndVideoTooltips[noteIndex].style.opacity = "0";
		vn.elements.attImageAndVideoTooltips[noteIndex].style.height  = "0";
	};
	
	/**
	* appearAttLinkToolTip
	* @description Displays the tooltip for the selected <a> tag in the editor.
	* @param {number} noteIndex - The index of the note in which the tooltip should appear.
	*/
	var appearAttLinkToolTip = function(noteIndex: number) {
        var a: any = vn.variables.editStartNodes[noteIndex]!.parentElement;

		var href = a.getAttribute("href");
        var download = a.getAttribute("download");

		var displayInlineBlock = getId(noteIndex, "on_display_inline_block");
		var displayNone = getId(noteIndex, "on_display_none");

        vn.elements.attLinkTooltipEditButtons[noteIndex].classList.remove(displayNone);
        vn.elements.attLinkTooltipUnlinkButtons[noteIndex].classList.remove(displayNone);
        vn.elements.attLinkTooltipEditButtons[noteIndex].classList.add(displayInlineBlock);
        vn.elements.attLinkTooltipUnlinkButtons[noteIndex].classList.add(displayInlineBlock);

		if(href) {
			vn.elements.attLinkTooltipHrefs[noteIndex].setAttribute("href",href);
			vn.elements.attLinkTooltipHrefs[noteIndex].textContent = href.length > 25 ? href.substr(0,25) + "..." : href;
		}
        if(download) {
            vn.elements.attLinkTooltipHrefs[noteIndex].setAttribute("download",download);
            vn.elements.attLinkTooltipHrefs[noteIndex].textContent = "download : " + download;

            vn.elements.attLinkTooltipEditButtons[noteIndex].classList.remove(displayInlineBlock);
            vn.elements.attLinkTooltipUnlinkButtons[noteIndex].classList.remove(displayInlineBlock);
            vn.elements.attLinkTooltipEditButtons[noteIndex].classList.add(displayNone);
            vn.elements.attLinkTooltipUnlinkButtons[noteIndex].classList.add(displayNone);
        }

		vn.elements.attLinkTooltips[noteIndex].style.opacity = "0.95";
		vn.elements.attLinkTooltips[noteIndex].style.height  = vn.variables.sizeRates[noteIndex] * 54 * 0.8 + "px";
		vn.elements.attLinkTooltips[noteIndex].style.lineHeight  = vn.variables.sizeRates[noteIndex] * 54 * 0.8 + "px";
	};
	
	/**
	* appearAttImageAndVideoTooltip
	* @description Displays the tooltip for the selected <img> or <iframe> tag in the editor.
	* @param {number} noteIndex - The index of the note in which the tooltip should appear.
	*/
	var appearAttImageAndVideoTooltip = function(noteIndex: number) {
		var img = vn.variables.editStartNodes[noteIndex];
		var cssObj: any = getObjectFromCssText((getAttributesObjectFromElement(img) as any)["style"]);
		//width
		if(cssObj["width"]) {
			(vn.elements.attImageAndVideoTooltipWidthInputs[noteIndex] as any).value = extractNumber(cssObj["width"]);
		}
		//float
		switch(cssObj["float"]) {
        case "left":
        	(vn.elements.attImageAndVideoTooltipFloatRadioLefts[noteIndex] as any).checked = true;
			break;
        case "right":
        	(vn.elements.attImageAndVideoTooltipFloatRadioRights[noteIndex] as any).checked = true;
			break;
		default :
			(vn.elements.attImageAndVideoTooltipFloatRadioNones[noteIndex] as any).checked = true;
			break;
		}
		//shape
		(vn.elements.attImageAndVideoTooltipShapeRadioSquares[noteIndex] as any).checked = true;
		if(cssObj["border-radius"]) {
			var borderRadius: any = extractNumber(cssObj["border-radius"]);
			if(borderRadius > 0) {
				(vn.elements.attImageAndVideoTooltipShapeRadioRadiuses[noteIndex] as any).checked = true;
			}
			else if(borderRadius >= 50) {
				(vn.elements.attImageAndVideoTooltipShapeRadioCircles[noteIndex] as any).checked = true;
			}
		}
		
		vn.elements.attImageAndVideoTooltips[noteIndex].style.opacity = "0.9";
		vn.elements.attImageAndVideoTooltips[noteIndex].style.height  = vn.variables.sizeRates[noteIndex] * 54 * 0.8 * 2 + "px";
		vn.elements.attImageAndVideoTooltips[noteIndex].style.lineHeight  = vn.variables.sizeRates[noteIndex] * 54 * 0.7 + "px";
	};
	
	/**
	* setImageAndVideoWidth
	* @description Sets the width of an image or video (iframe) element based on the percentage value provided in the input element.
	* @param {HTMLInputElement} el - The input element containing the width percentage value.
	*/
	var setImageAndVideoWidth = function(el: any) {
		if(!el.value) el.value = 100;
		var widthPer = el.value;
		var noteIndex = getNoteIndex(el);
		if(!noteIndex) return;
		var imgNode: any = vn.variables.editStartNodes[noteIndex];
		if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
		
		if(widthPer < 10) widthPer = 10;
		if(widthPer > 100) widthPer = 100;
		el.value = widthPer;
		imgNode.style.width = widthPer + "%";
		(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
		vn.variables.editStartNodes[noteIndex] = imgNode;
	};
	
	/**
	* isElementInParentBounds
	* @description Checks whether a child element is fully contained within the bounds of its parent element.
	* @param {HTMLElement} parent - The parent element.
	* @param {HTMLElement} child - The child element to check.
	* @returns {boolean} Returns true if the child element is fully contained within the bounds of its parent, otherwise false.
	*/
	var isElementInParentBounds = function(parent: any, child: any) {
		if(parent.offsetParent === null) return false;
	    var parentRect = parent.getBoundingClientRect();
	    
	    if(child.offsetParent === null) return false;
	    var childRect = child.getBoundingClientRect();

	    var childAbsoluteTop = childRect.top + window.pageYOffset;
	    var childAbsoluteBottom = childRect.bottom + window.pageYOffset;

	    var parentAbsoluteTop = parentRect.top + window.pageYOffset;
	    var parentAbsoluteBottom = parentRect.bottom + window.pageYOffset;

	    return (
	        childAbsoluteTop >= parentAbsoluteTop &&
	        childAbsoluteBottom <= parentAbsoluteBottom
	    );
	};
	
	/**
	* setAllToolSize
	* @description Adjusts the size of the toolbar based on certain conditions and element positions.
	* @param {number} noteIndex - The index of the note (assumed to be a unique identifier).
	*/
	var setAllToolSize = function(noteIndex: number) {
		var toolButtons: any =  vn.elements.tools[noteIndex].childNodes;
		
		var displayInlineBlock = getId(noteIndex, "on_display_inline_block");
		var displayNone = getId(noteIndex, "on_display_none");
		
		// Display all buttons (reset their display style)
		for(var i = toolButtons.length - 1; i >= 0; i--) {
			toolButtons[i].classList.add(displayInlineBlock);
			toolButtons[i].classList.remove(displayNone);
		}
		
		if(vn.elements.tools[noteIndex].offsetParent === null) return;
		
		// Control toolbar size based on toggle state
		if(!vn.variables.toolToggles[noteIndex]) {	// Toggle false state: Resize the toolbar based on the last visible button.
			var toolAbsoluteTop;
			var lastButton;
			var lastButtonAbsoluteTop;
			var differ;
			
			for(var i = toolButtons.length - 1; i >= 0; i--) {
				if(toolButtons[i].offsetParent !== null) {	// Find the last visible button on the screen.
					lastButton = toolButtons[i];
					break;
				}
			}
			
			if(vn.elements.tools[noteIndex].offsetParent === null) return;
			toolAbsoluteTop = window.pageYOffset + vn.elements.tools[noteIndex].getBoundingClientRect().top;
			lastButtonAbsoluteTop = window.pageYOffset + lastButton.getBoundingClientRect().top;
			differ = lastButtonAbsoluteTop - toolAbsoluteTop + (vn.variables.sizeRates[noteIndex] * 52);
			
			vn.elements.tools[noteIndex].style.height = (differ) + "px";	// Set the height of the toolbar accordingly.
		}
		else {// Toggle true state: Keep the size to default lines and hide overflowing buttons.
			vn.elements.tools[noteIndex].style.height = (vn.variables.toolDefaultLines[noteIndex] * (vn.variables.sizeRates[noteIndex] * 52)) + "px";
			// Hide buttons that are not within the bounds of the toolbar.
			for(var i = toolButtons.length - 1; i >= 0; i--) {
				if(!isElementInParentBounds(vn.elements.tools[noteIndex],toolButtons[i])) {
					toolButtons[i].classList.remove(displayInlineBlock);
					toolButtons[i].classList.add(displayNone);
				}
			}
		}
	};
	
	/**
	* initAttLink
	* @description Initializes attLinkText, attLinkHref, and attLinkCheckbox in the specified note.
	* @param {number} noteIndex - The index of the note where the elements need to be initialized.
	*/
	var initAttLink = function(noteIndex: number) {
		(vn.elements.attLinkTexts[noteIndex] as any).value = "";
		(vn.elements.attLinkHrefs[noteIndex] as any).value = "";
		(vn.elements.attLinkIsBlankCheckboxes[noteIndex] as any).checked = false;
	};
	
	/**
	* validCheckAttLink
	* @description Validates the link attachment in the specified note.
	* @param {number} noteIndex - The index of the note where the link attachment needs to be validated.
	*/
	var validCheckAttLink = function(noteIndex: number) {
		if(!(vn.elements.attLinkTexts[noteIndex] as any).value) {
			(vn.elements.attLinkValidCheckboxes[noteIndex] as any).checked = false;
			vn.elements.attLinkValidCheckTexts[noteIndex].style.color = getHexColorFromColorName(vn.colors.color9[noteIndex]);
			vn.elements.attLinkValidCheckTexts[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attLinkInTextTooltip;	//COMMENT
			return;
		}
		
		if(!(vn.elements.attLinkHrefs[noteIndex] as any).value) {
			(vn.elements.attLinkValidCheckboxes[noteIndex] as any).checked = false;
			vn.elements.attLinkValidCheckTexts[noteIndex].style.color = getHexColorFromColorName(vn.colors.color9[noteIndex]);
			vn.elements.attLinkValidCheckTexts[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attLinkInLinkTooltip;	//COMMENT
			return;
		}
		
		(vn.elements.attLinkValidCheckboxes[noteIndex] as any).checked = true;
		vn.elements.attLinkValidCheckTexts[noteIndex].style.color = getHexColorFromColorName(vn.colors.color8[noteIndex]);
		vn.elements.attLinkValidCheckTexts[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].thanks;	//COMMENT
	};

	/**
	* validCheckAttVideo
	* @description Validates the video attachment in the specified note.
	* @param {number} noteIndex - The index of the note where the video attachment needs to be validated.
	*/
	var validCheckAttVideo = function(noteIndex: number) {
		if(!(vn.elements.attVideoEmbedIds[noteIndex] as any).value) {
			(vn.elements.attVideoValidCheckboxes[noteIndex] as any).checked = false;
			vn.elements.attVideoValidCheckTexts[noteIndex].style.color = getHexColorFromColorName(vn.colors.color9[noteIndex]);
			vn.elements.attVideoValidCheckTexts[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attVideoEmbedIdTooltip;	//COMMENT
			return;
		}
		
		(vn.elements.attVideoValidCheckboxes[noteIndex] as any).checked = true;
		vn.elements.attVideoValidCheckTexts[noteIndex].style.color = getHexColorFromColorName(vn.colors.color8[noteIndex]);
		vn.elements.attVideoValidCheckTexts[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].thanks;	//COMMENT
	};
	
	/**
	* setAttTempFileValid
	* @description Filters and keeps only valid files in the attTempFiles object of the specified note.
	* @param {number} noteIndex - The index of the note where the attTempFiles object needs to be filtered.
	*/
	var setAttTempFileValid = function(noteIndex: number) {
		var newAttTempFiles: any = new Object;
		var keys = Object.keys(vn.variables.attTempFiles[noteIndex]);
		for(var i = 0; i < keys.length; i++) {
			if(vn.variables.attFileAcceptTypes[noteIndex].length > 0) {
				if(vn.variables.attFileAcceptTypes[noteIndex].includes(vn.variables.attTempFiles[noteIndex][keys[i]].type)) {
					newAttTempFiles[keys[i]] = vn.variables.attTempFiles[noteIndex][keys[i]];
				}
			}
			else {
				newAttTempFiles[keys[i]] = vn.variables.attTempFiles[noteIndex][keys[i]];
			}
			
			if(!newAttTempFiles[keys[i]]) continue;
			
			if(vn.variables.attFilePreventTypes[noteIndex].includes(newAttTempFiles[keys[i]].type)) {
				showAlert("[" + newAttTempFiles[keys[i]].name + "] " + vn.languageSet[vn.variables.languages[noteIndex]].attPreventType);
				delete newAttTempFiles[keys[i]];
			}
			else if(newAttTempFiles[keys[i]].size >= vn.variables.attFileMaxSizes[noteIndex]) {
				showAlert("[" + newAttTempFiles[keys[i]].name + "] " + vn.languageSet[vn.variables.languages[noteIndex]].attOverSize);
				delete newAttTempFiles[keys[i]];
			}
		}
		vn.variables.attTempFiles[noteIndex] = newAttTempFiles;
	};
	
	/**
	* setAttFileUploadDiv
	* @description Sets up the attFileUploadDiv for the specified note.
	* @param {number} noteIndex - The index of the note for which the attFileUploadDiv needs to be set up.
	*/
	var setAttFileUploadDiv = function(noteIndex: number) {
		if((vn.variables.attTempFiles[noteIndex] as any).length <= 0) {
        	vn.elements.attFileUploadDivs[noteIndex].style.removeProperty("line-height");
        	vn.elements.attFileUploadDivs[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attFileUploadDiv;
        	return;
        } else {
        	vn.elements.attFileUploadDivs[noteIndex].style.lineHeight = "unset";
        }
		vn.elements.attFileUploadDivs[noteIndex].replaceChildren();
		
		var keys = Object.keys(vn.variables.attTempFiles[noteIndex]);
		var tempEl;
		for(var i = 0; i < keys.length; i++) {
			tempEl = getElement(
				vn.variables.attTempFiles[noteIndex][keys[i]].name,
				"P",
				"display:block;padding:0.5em 0;",
				{
					"title":vn.languageSet[vn.variables.languages[noteIndex]].attFileListTooltip,
					"uuid":keys[i]
				}
			);
			vn.elements.attFileUploadDivs[noteIndex].appendChild(tempEl);
		}
	};
	
	/**
	* setAttTempImageValid
	* @description Filters the attTempImages to keep only valid image files.
	* @param {number} noteIndex - The index of the note for which the attTempImages need to be filtered.
	*/
	var setAttTempImageValid = function(noteIndex: number) {
		var newAttTempImages: any = new Object;
		var keys = Object.keys(vn.variables.attTempImages[noteIndex]);
		for(var i = 0; i < keys.length; i++) {
			if(vn.variables.attImageAcceptTypes[noteIndex].length > 0) {
				if(vn.variables.attImageAcceptTypes[noteIndex].includes(vn.variables.attTempImages[noteIndex][keys[i]].type)) {
					newAttTempImages[keys[i]] = vn.variables.attTempImages[noteIndex][keys[i]];
				}
			}
			else {
				newAttTempImages[keys[i]] = vn.variables.attTempImages[noteIndex][keys[i]];
			}
			
			if(!newAttTempImages[keys[i]]) continue;
			
			if(vn.variables.attImagePreventTypes[noteIndex].includes(newAttTempImages[keys[i]].type)) {
				showAlert("[" + newAttTempImages[keys[i]].name + "] " + vn.languageSet[vn.variables.languages[noteIndex]].attPreventType);
				delete newAttTempImages[keys[i]];
			}
			else if(newAttTempImages[keys[i]].size >= vn.variables.attImageMaxSizes[noteIndex]) {
				showAlert("[" + newAttTempImages[keys[i]].name + "] " + vn.languageSet[vn.variables.languages[noteIndex]].attOverSize);
				delete newAttTempImages[keys[i]];
			}
		}
		vn.variables.attTempImages[noteIndex] = newAttTempImages;
	};

	/**
	* setAttImageUploadAndView
	* @description Sets up the attImageUploadAndView for the specified note.
	* @param {number} noteIndex - The index of the note for which the attImageUploadAndView needs to be set up.
	*/
	var setAttImageUploadAndView = function(noteIndex: number) {
		var keys = Object.keys(vn.variables.attTempImages[noteIndex]);
		if(keys.length <= 0) return;
		var file;
        var tempEl;
        
       	vn.elements.attImageUploadButtonAndViews[noteIndex].replaceChildren();
		for(var i = 0; i < keys.length; i++) {
			file = vn.variables.attTempImages[noteIndex][keys[i]];
        	tempEl = document.createElement("img");
        	tempEl.src = URL.createObjectURL(file);
        	tempEl.style.width = "auto";
        	tempEl.style.height = "100%";
        	tempEl.style.display = "inline-block";
        	tempEl.style.margin = "0 5px"
        	
	       	vn.elements.attImageUploadButtonAndViews[noteIndex].appendChild(tempEl);
		}
	    
	    (vn.elements.attImageURLs[noteIndex] as any).value = "";
	    vn.elements.attImageURLs[noteIndex].setAttribute("readonly","true");
	};
	
	/**
	* initAttFile
	* @description Initializes the attTempFiles and attFileUploadDiv for the specified note.
	* @param {number} noteIndex - The index of the note for which the attTempFiles and attFileUploadDiv need to be initialized.
	*/
	var initAttFile = function(noteIndex: number) {
		delete vn.variables.attTempFiles[noteIndex];
		(vn.variables.attTempFiles[noteIndex] as any) = new Object;
		vn.elements.attFileUploadDivs[noteIndex].replaceChildren();
		vn.elements.attFileUploadDivs[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attFileUploadDiv;
		vn.elements.attFileUploadDivs[noteIndex].style.lineHeight = vn.variables.sizeRates[noteIndex] * 130 + "px";
		(vn.elements.attFileUploads[noteIndex] as any).value = "";
	};
	
	/**
	* initAttImage
	* @description Initializes the attTempImages, attImageUploadButtonAndViews, and attImageURLs for the specified note.
	* @param {number} noteIndex - The index of the note for which the attTempImages, attImageUploadButtonAndViews, and attImageURLs need to be initialized.
	*/
	var initAttImage = function(noteIndex: number) {
		delete vn.variables.attTempImages[noteIndex];
		(vn.variables.attTempImages[noteIndex] as any) = new Object;
		vn.elements.attImageUploadButtonAndViews[noteIndex].replaceChildren();
		vn.elements.attImageUploadButtonAndViews[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attImageUploadButtonAndView;
		(vn.elements.attImageUploads[noteIndex] as any).value = "";
		(vn.elements.attImageURLs[noteIndex] as any).value = "";
		vn.elements.attImageURLs[noteIndex].removeAttribute("readonly");
	};
	
	/**
	 * consoleLog
	 * @description Custom logging function based on the logMode defined in vn.variables.
	 * - In "DEBUG" mode, it logs all the provided arguments.
	 * - In "INFO" mode, it logs only the first argument.
	 * - In other modes, the function does nothing.
	 * @param {...*} arguments - The arguments to be logged. Can be of any type.
	 */
	var consoleLog = function(...params: any[]) {
		if(vn.variables.logMode === "DEBUG") {
			for(var i = 0; i < arguments.length; i++) {
				console.log(arguments[i]);
			}
		} else if(vn.variables.logMode === "INFO") {
			console.log(arguments[0]);
		} else {
			return;
		}
	};
	
	//==================================================================================
	//user using function
	var showAlert = function(message: string) {
		consoleLog("vn._beforeAlert", "params :" , "(message)", message);
		if(!vn._beforeAlert(message)) return;
		consoleLog("window.alert", "params :" , "(message)", message);
		alert(message);
	};
	var getNoteData = function() {
		var noteIndex = getNoteIndex(this);
		var textarea = vn.elements.textareas[noteIndex];
		
		var fileEls = textarea.querySelectorAll("[uuid]");
		
		var attFiles: any = {};
		for (var key in vn.variables.attFiles[noteIndex]) {
			if (vn.variables.attFiles[noteIndex].hasOwnProperty(key)) {
				attFiles[key] = vn.variables.attFiles[noteIndex][key];
			}
		}
		for (var key in vn.variables.attImages[noteIndex]) {
			if (vn.variables.attImages[noteIndex].hasOwnProperty(key)) {
				attFiles[key] = vn.variables.attImages[noteIndex][key];
			}
		}
		var attFileKeys = Object.keys(attFiles);
		var attFileKeysLength = attFileKeys.length;
		var returnAttFiles: any = {};
		var chkCnt;
		
		//Add only the files in the current note
		for(var i = 0; i < attFileKeysLength; i++) {
			chkCnt = 0;
			for(var j = 0; j < fileEls.length; j++) {
				if(attFileKeys[i] === fileEls[j].getAttribute("uuid")) chkCnt++;
			}
			if(chkCnt > 0) {
				returnAttFiles[attFileKeys[i]] =  attFiles[attFileKeys[i]];
			}
		}
		//Add only the images in the current note
		
		var noteData = {
				"noteIndex" : noteIndex,
				"textarea" : textarea,
				"files" : returnAttFiles,
			}
		
		return noteData;
	};
	var getNote = function() {return vn;};
	//==================================================================================
	//css events
	var target_onClick = function(e: any) {
		var target = e.target;
		// If a child element is selected, event is controlled
		if(target.classList.contains(vn.variables.noteName + "_eventChildren")) {
			target = target.parentNode;
		}
		var noteIndex = target.getAttribute("data-note-index");
		if(!noteIndex) return;
		// Add active CSS
		target.classList.add(vn.variables.noteName + "_" + noteIndex + "_" + "on_active");
		// Remove active CSS after 0.1 seconds
		setTimeout(function() {
			target.classList.remove(vn.variables.noteName + "_" + noteIndex + "_" + "on_active");
		}, 100);
	};
	var target_onMouseover = function(e: any) {
		var target = e.target;
		// If a child element is selected, event is controlled
		if(target.classList.contains(vn.variables.noteName + "_eventChildren")) {
			target = target.parentNode;
		}
		var noteIndex = target.getAttribute("data-note-index");
		if(!noteIndex) return;
		target.classList.add(vn.variables.noteName + "_" + noteIndex + "_" + "on_mouseover");
	}
	var target_onMouseout = function(e: any) {
		var target = e.target;
		// If a child element is selected, event is controlled
		if(target.classList.contains(vn.variables.noteName + "_eventChildren")) {
			target = target.parentNode;
		}
		var noteIndex = target.getAttribute("data-note-index");
		if(!noteIndex) return;
		target.classList.remove(vn.variables.noteName + "_" + noteIndex + "_" + "on_mouseover");
	};
	var target_onTouchstart = function(e: any) {
		var target = e.target;
		// If a child element is selected, event is controlled
		if(target.classList.contains(vn.variables.noteName + "_eventChildren")) {
			target = target.parentNode;
		}
		var noteIndex = target.getAttribute("data-note-index");
		if(!noteIndex) return;
		target.classList.add(vn.variables.noteName + "_" + noteIndex + "_" + "on_mouseover");
		target.classList.remove(vn.variables.noteName + "_" + noteIndex + "_" + "on_mouseout");
	};
	var target_onTouchend = function(e: any) {
		var target = e.target;
		// If a child element is selected, event is controlled
		if(target.classList.contains(vn.variables.noteName + "_eventChildren")) {
			target = target.parentNode;
		}
		var noteIndex = target.getAttribute("data-note-index");
		if(!noteIndex) return;
		target.classList.add(vn.variables.noteName + "_" + noteIndex + "_" + "on_mouseout");
		target.classList.remove(vn.variables.noteName + "_" + noteIndex + "_" + "on_mouseover");
	};
	var doDecreaseTextareaHeight = function(textarea: any, noteIndex: number) {
		// Stop if not in auto-scroll mode.
		if(!vn.variables.useMobileActiveMode[noteIndex]) return;
		textarea.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		setTimeout(function() {
			decreaseTextareaHeight(textarea, noteIndex);
		}, 100);
	};
	var doIncreaseTextareaHeight = function() {
		// Restore the note size.
		for(var i = 0; i < vn.elements.textareas.length; i++) {
			// Stop if not in auto-scroll mode.
			if(!vn.variables.useMobileActiveMode[i]) continue;
			increaseTextareaHeight(vn.elements.textareas[i]);
		}
	};
	var modifyTextareaScroll = function(textarea: any, noteIndex: number) {
		// Stop if not in auto-scroll mode.
		if(!vn.variables.useMobileActiveMode[noteIndex]) return;
		
		if(vn.variables.preventChangeScroll > 0) {
			vn.variables.preventChangeScroll--;
			return;	
		}
		if(vn.variables.isSelectionProgress) return;
		vn.variables.isSelectionProgress = true;
		// 0.05 seconds time out.
		setTimeout(function() {
			vn.variables.isSelectionProgress = false;
			
			//If there is unvalid selection, return.
			if(!isValidSelection(noteIndex)) return;
			
			// The number of the middle element from the currently dragged elements.
			var indexMiddleUnit = checkNumber(vn.variables.editDragUnitElements[noteIndex].length / 2) ?
			vn.variables.editDragUnitElements[noteIndex].length / 2 - 1 : Math.floor(vn.variables.editDragUnitElements[noteIndex].length / 2);
			// The total height of the currently dragged elements.
			var heightSumDragUnitElements = (vn.variables.editDragUnitElements[noteIndex] as any)[(vn.variables.editDragUnitElements[noteIndex] as any).length - 1].offsetTop
			- (vn.variables.editDragUnitElements[noteIndex] as any)[0].offsetTop
			+ (vn.variables.editDragUnitElements[noteIndex] as any)[(vn.variables.editDragUnitElements[noteIndex] as any).length - 1].offsetHeight;
			// If the total height of the currently dragged elements is larger than the current textarea's height, do not scroll. (With a margin of about 30px).
			if(heightSumDragUnitElements > textarea.offsetHeight - 30) return;
			// If any select box is open, do not scroll.
			if(getCheckSelectBoxesOpened(noteIndex)) return;
			if((vn.variables.editRanges[noteIndex] as any).collapsed) {
				setElementScroll(textarea, vn.variables.editStartElements[noteIndex]);
			}
			else {
				setElementScroll(textarea, vn.variables.editDragUnitElements[noteIndex][indexMiddleUnit]);
			}
					
		}, 50);
	}
	//==================================================================================	
	var elementsEvent = {
		//==================================================================================
		//textarea
		//==================================================================================
		note_observer : new MutationObserver(function(mutations) {
			var mutationEl;
			mutations.forEach(function(mutation) {
				mutationEl = mutation.target;
			});
			var noteIndex = getNoteIndex(mutationEl);
			if(!noteIndex) return;
			vn.variables.lastActiveNote = Number(noteIndex);
			
			// Does not record more than the recodeLimit number.
			if(vn.variables.recodeNotes[noteIndex].length >= vn.variables.recodeLimit[noteIndex]) {
				vn.variables.recodeNotes[noteIndex].shift();
				vn.variables.recodeNotes[noteIndex].push((vn.elements.textareas[noteIndex] as any).cloneNode(true));
			}
			else {
				vn.variables.recodeContings[noteIndex] = vn.variables.recodeContings[noteIndex] + 1;
				// If a new change occurs in the middle of undoing, subsequent records are deleted.
				if(vn.variables.recodeContings[noteIndex] < vn.variables.recodeNotes[noteIndex].length) {
					vn.variables.recodeNotes[noteIndex].splice(vn.variables.recodeContings[noteIndex]);
				}
				vn.variables.recodeNotes[noteIndex].push((vn.elements.textareas[noteIndex] as any).cloneNode(true));
			}
		}),
		// Adjust note size according to window change.
		window_onResize : function(e: any) {
		 	// A delay of 0.05 second
			if(!vn.variables.canEvents) return;
			onEventDisable("resize");
			
			for(var i = 0; i < vn.elements.tools.length; i++) {
				// Adjust toolbar size.
				setAllToolSize(i);
				// Adjust the position of the tooltip.
				setAllToolTipPosition(i);
				// Control modal size.
				setAllModalSize(i);
				// Control placeholder size.
				setPlaceholderSize(i);
			}
		},
		window_resizeViewport : function(e: any) {
			if(!window.visualViewport) return;
			//only height
			if(vn.variables.lastScreenHeight === window.visualViewport.height) return;
			//useMobileActive
			var useMobileActiveConunt = 0;
			for(var i = 0; i < vn.variables.useMobileActiveMode.length; i++) {
				// Stop if not in auto-scroll mode.
				if(vn.variables.useMobileActiveMode[i]) useMobileActiveConunt++;
			}
			if(useMobileActiveConunt === 0) return;
			
			var textarea: any = document.activeElement;
			var isTextarea = false;
			
			while(textarea) {
				if(textarea.tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
					isTextarea = true;
					break;
				}
				else {
					textarea = textarea.parentNode;
				}
			}
			
			if(isTextarea && vn.variables.lastScreenHeight! > window.visualViewport.height) {
				var noteIndex = getNoteIndex(textarea);
				var toolHeight = extractNumber(vn.elements.tools[noteIndex].style.height) ? extractNumber(vn.elements.tools[noteIndex].style.height) : 93.6;
				vn.variables.mobileKeyboardExceptHeight = window.visualViewport.height - (toolHeight! / 2);
				doDecreaseTextareaHeight(textarea, noteIndex);
			}
			if(vn.variables.lastScreenHeight! < window.visualViewport.height) {
				doIncreaseTextareaHeight();
			}
			
			vn.variables.lastScreenHeight = window.visualViewport.height;
		},
		//==================================================================================
		//note event
		//==================================================================================
		//toolToggleButton event
		toolToggleButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var icon: any = vn.elements.toolToggleButtons[noteIndex].firstChild;
			//toggle
			vn.variables.toolToggles[noteIndex] = !vn.variables.toolToggles[noteIndex];
			if(!vn.variables.toolToggles[noteIndex]) { //in case of open
				icon.textContent = "arrow_drop_up";
				// Adjust toolbar size.
				setAllToolSize(noteIndex);
				// Adjust the position of the tooltip.
				setAllToolTipPosition(noteIndex);
			}
			else {	// In case of closing
				icon.textContent = "arrow_drop_down";
				// Adjust toolbar size.
				setAllToolSize(noteIndex);
				// Adjust the position of the tooltip.
				setAllToolTipPosition(noteIndex);
			}
			vn.variables.preventChangeScroll = 2;
			// It's too inconvenient if the cursor is caught again on mobile..
			if(!isMobileDevice()) {
				setOriginEditSelection(noteIndex);
			}
		},
		
		//==================================================================================
		//paragraphStyleSelect event
		paragraphStyleSelect_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			selectToggle(e.target);
			// It's too inconvenient if the cursor is caught again on mobile..
			if(!isMobileDevice()) {
				setOriginEditSelection(noteIndex);
			}
		},
		
		//==================================================================================
		//styleNomal event
		styleNomal_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		
		//==================================================================================
		//styleHeader1 event
		styleHeader1_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		//==================================================================================
		//styleHeader2 event
		styleHeader2_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		//==================================================================================
		//styleHeader3 event
		styleHeader3_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		//==================================================================================
		//styleHeader4 event
		styleHeader4_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		//==================================================================================
		//styleHeader5 event
		styleHeader5_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		//==================================================================================
		//styleHeader6 event
		styleHeader6_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
			selectToggle(target);
		},
		
		//==================================================================================
		//boldButton event
		boldButton_onClick : function(e: any) {
			// Toggle the button
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.boldToggles[noteIndex] = !vn.variables.boldToggles[noteIndex];
			if(!isMobileDevice()) {
				button_onToggle(vn.elements.boldButtons[noteIndex], vn.variables.boldToggles[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		
		//==================================================================================
		//underlineButton event
		underlineButton_onClick : function(e: any) {
			// Toggle the button
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.underlineToggles[noteIndex] = !vn.variables.underlineToggles[noteIndex];
			if(!isMobileDevice()) {
				button_onToggle(vn.elements.underlineButtons[noteIndex], vn.variables.underlineToggles[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		
		//==================================================================================
		//italic
		italicButton_onClick : function(e: any) {
			// Toggle the button
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.italicToggles[noteIndex] = !vn.variables.italicToggles[noteIndex];
			if(!isMobileDevice()) {
				button_onToggle(vn.elements.italicButtons[noteIndex], vn.variables.italicToggles[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		
		//==================================================================================
		//ul
		ulButton_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
		},
		
		
		//==================================================================================
		//ol
		olButton_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the tag
			modifySelectedUnitElementTag(target);
		},
		
		//==================================================================================
		//text-align
		textAlignSelect_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			selectToggle(e.target);
			// It's too inconvenient if the cursor is caught again on mobile..
			if(!isMobileDevice()) {
				setOriginEditSelection(noteIndex);
			}
		},
		
		//==================================================================================
		//text-align-left
		textAlignLeft_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the text-align
			modifySelectedUnitElementStyle(target);
			selectToggle(target);
		},
		
		//==================================================================================
		//text-align-center
		textAlignCenter_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the text-align
			modifySelectedUnitElementStyle(target);
			selectToggle(target);
		},
		
		//==================================================================================
		//text-align-right
		textAlignRight_onClick : function(e: any) {
			// If a child element is selected, event is controlled
			var target = e.target;
			if(target.classList.contains(getEventChildrenClassName())) {
				target = target.parentNode;
			}
			// Changing the text-align
			modifySelectedUnitElementStyle(target);
			selectToggle(target);
		},
		
		//==================================================================================
		//att link
		attLinkButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			//att madal open
			openAttLinkModal(noteIndex);
		},
		
		//==================================================================================
		//modal att link
		attLinkModal_onClick : function(e: any) {
		},
		//modal att link text
		attLinkText_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			validCheckAttLink(noteIndex);
		},
		attLinkText_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			validCheckAttLink(noteIndex);
		},
		//modal att link href
		attLinkHref_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			validCheckAttLink(noteIndex);
		},
		attLinkHref_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			validCheckAttLink(noteIndex);
		},
		//modal att link insert
		attLinkInsertButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!isValidSelection(noteIndex)) {
				closeAllModal(noteIndex);
				return;
			}
			var attLinkValidCheckbox: any = vn.elements.attLinkValidCheckboxes[noteIndex];
			if(!attLinkValidCheckbox.checked) {
				return;
			}
			var attLinkText: any = vn.elements.attLinkTexts[noteIndex];
			var attLinkHref: any = vn.elements.attLinkHrefs[noteIndex];
			var attIsblank: any = vn.elements.attLinkIsBlankCheckboxes[noteIndex];
			
			//No dragging > insert, dragging > modify
			if((vn.variables.editRanges as any)[noteIndex].collapsed) {
				var tempEl = document.createElement("A");
				var tempNode = document.createTextNode(attLinkText.value);
				tempEl.append(tempNode);
				tempEl.setAttribute("href", attLinkHref.value);
				tempEl.setAttribute("class", getClassName(noteIndex, "linker"));
				tempEl.setAttribute("style", getCssTextFromObject(getObjectNoteCss(noteIndex)));
				if(attIsblank.checked) tempEl.setAttribute("target","_blank");
				(vn.variables.editRanges as any)[noteIndex].insertNode(tempEl);
                setNewSelection(
                    tempEl,
                    1,
                    tempEl,
                    1
                    );
			}
			else {
				var attributes: any = new Object();
				attributes["href"] = attLinkHref.value;
				attributes["class"] = getClassName(noteIndex, "linker");
				if(attIsblank.checked) attributes["target"] = "_blank";
				modifySelectedSingleElement(noteIndex, null, "a", attributes);
			}
			
			closeAllModal(noteIndex);
		},
		
		//==================================================================================
		//att link tooltip
		//edit button
		attLinkTooltipEditButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var previousElements = getPreviousElementsUntilNotTag(vn.variables.editStartElements[noteIndex], "A");
			var nextElements = getNextElementsUntilNotTag(vn.variables.editStartElements[noteIndex], "A");
			var startEl = previousElements[previousElements.length - 1];
			var endEl = nextElements[nextElements.length - 1];
			
			// Sets the new selection range.
			var newSelection = setNewSelection(
					startEl.firstChild,
					0,
					endEl.firstChild,
					endEl.firstChild.length,
					);
			
			setEditSelection(noteIndex, newSelection!);
			//att madal open
			openAttLinkModal(noteIndex);
		},
		
		//unlink button
		attLinkTooltipUnlinkButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var previousElements = getPreviousElementsUntilNotTag(vn.variables.editStartElements[noteIndex], "A");
			var nextElements = getNextElementsUntilNotTag(vn.variables.editStartElements[noteIndex], "A");
			var startEl = previousElements[previousElements.length - 1];
			var endEl = nextElements[nextElements.length - 1];
			
			// Sets the new selection range.
			var newSelection = setNewSelection(
					startEl.firstChild,
					0,
					endEl.firstChild,
					endEl.firstChild.length,
					);
			
			setEditSelection(noteIndex, newSelection!);
			
			modifySelectedSingleElement(noteIndex, null, "SPAN", {});
		},

		//==================================================================================
		//att file
		attFileButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			
			// Restore the note size.
			doIncreaseTextareaHeight();
			// Close all modals
			closeAllModal(noteIndex);
			// Close all selects
			closeAllSelectBoxes(noteIndex);
			// Adjust modal size
			setAllModalSize(noteIndex);
			// Open modal background
			var displayBlock = getId(noteIndex, "on_display_block");
			var displayNone = getId(noteIndex, "on_display_none");
			vn.elements.backModals[noteIndex].classList.remove(displayNone);
			vn.elements.backModals[noteIndex].classList.add(displayBlock);
			vn.elements.attFileModals[noteIndex].classList.remove(displayNone);
			vn.elements.attFileModals[noteIndex].classList.add(displayBlock);
		},
    	//==================================================================================
		//modal att file
    	attFileModal_onClick : function(e: any) {
		},
	    //modal att file upload button
	    attFileUploadButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.elements.attFileUploads[noteIndex].click();
	    },
	    //modal att file upload div
	    attFileUploadDiv_onDragover : function(e: any) {
	        e.stopPropagation();
	        e.preventDefault();
	        e.dataTransfer.dropEffect = "copy";
	    },
	    attFileUploadDiv_onDrop : function(e: any) {
	        e.preventDefault();
	        var noteIndex = getNoteIndex(e.target);
	        if(!noteIndex) return;
	        var files = Array.from(e.dataTransfer.files);
			files.sort(function(a: any, b: any) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
	        for(var i = 0; i < files.length; i++){
	            (vn.variables.attTempFiles as any)[noteIndex][getUUID()] = files[i];
	        }
	      	// Leave attTempFiles with only valid files.
	        setAttTempFileValid(noteIndex);
	      	// Set attFileUploadDiv.
	        setAttFileUploadDiv(noteIndex);
	    },
	    attFileUploadDiv_onClick : function(e: any) {
			var uuid = e.target.getAttribute("uuid");
			if(!uuid) return;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
	    	delete vn.variables.attTempFiles[noteIndex][uuid]
			e.target.remove();
	    	
	    	if(vn.elements.attFileUploadDivs[noteIndex].childNodes.length <= 0) {
	    		vn.elements.attFileUploadDivs[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attFileUploadDiv;
	    		vn.elements.attFileUploadDivs[noteIndex].style.lineHeight = vn.variables.sizeRates[noteIndex] * 130 + "px";
	    	}
	    },
		//modal att file upload
		attFileUpload_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var files = Array.from(e.target.files);
			files.sort(function(a: any, b: any) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
			});
	        for(var i = 0; i < files.length; i++){
	            (vn.variables.attTempFiles as any)[noteIndex][getUUID()] = files[i];
	        }
	      	// Leave attTempFiles with only valid files.
	        setAttTempFileValid(noteIndex);
	      	// Set attFileUploadDiv.
			setAttFileUploadDiv(noteIndex);
		},
		attFileUpload_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
		},
		//modal att file insert
		attFileInsertButton_onClick : function(e: any) {
			/*
			If there's a range
			    Insert <p><input file></p> at startElement
			    Clear attTempFiles, attFileUploadDiv and then close the modal
			If there's no range
			    Clear attTempFiles, attFileUploadDiv and then close the modal
			*/
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!isValidSelection(noteIndex)) {
				closeAllModal(noteIndex);
				return;
			}
			if(!vn.variables.editStartUnitElements[noteIndex]) {
				closeAllModal(noteIndex);
				return;
			}
			var keys = Object.keys(vn.variables.attTempFiles[noteIndex]);
			if(keys.length <= 0) {
				closeAllModal(noteIndex);
				return;
			}
			var editStartUnitElements: any = vn.variables.editStartUnitElements[noteIndex];
			var tempEl1;
			var tempEl2;
			var selectEl;
			
			for(var i = keys.length - 1; i >= 0; i--) {
				tempEl1 = document.createElement(editStartUnitElements.tagName);
				tempEl2 = getElement(
						"",
						"a",
						"",
						{
                            "class" : getClassName(noteIndex, "downloader"),
							"uuid" : keys[i],
							"data-note-index" : noteIndex,
							"href" : URL.createObjectURL(vn.variables.attTempFiles[noteIndex][keys[i]]),
							"download" : vn.variables.attTempFiles[noteIndex][keys[i]].name,
							"style" : getCssTextFromObject(getObjectNoteCss(noteIndex)),
						}
					);
				tempEl2.innerText = "download : "+vn.variables.attTempFiles[noteIndex][keys[i]].name;
				tempEl1.appendChild(tempEl2)
				editStartUnitElements.parentNode.insertBefore(tempEl1, editStartUnitElements.nextSibling);
				
				// Save attach file object
				vn.variables.attFiles[noteIndex][keys[i]] = vn.variables.attTempFiles[noteIndex][keys[i]];
				if(i === keys.length - 1) selectEl = tempEl1;
			}
			closeAllModal(noteIndex);
			// Sets the new selection range.
			setNewSelection(
				selectEl,
				1,
				selectEl,
				1
				);
		},
		//==================================================================================
		//att image
		attImageButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			
			// Restore the note size.
			doIncreaseTextareaHeight();
			// Close all modals
			closeAllModal(noteIndex);
			// Close all selects
			closeAllSelectBoxes(noteIndex);
			// Adjust modal size
			setAllModalSize(noteIndex);
			// Open modal background
			var displayBlock = getId(noteIndex, "on_display_block");
			var displayNone = getId(noteIndex, "on_display_none");
			vn.elements.backModals[noteIndex].classList.remove(displayNone);
			vn.elements.backModals[noteIndex].classList.add(displayBlock);
			vn.elements.attImageModals[noteIndex].classList.remove(displayNone);
			vn.elements.attImageModals[noteIndex].classList.add(displayBlock);
		},
    	//==================================================================================
		//modal att image
    	attImageModal_onClick : function(e: any) {
		},
		//modalatt image uplaod button and view
	    attImageUploadButtonAndView_onDragover : function(e: any) {
	        e.stopPropagation();
	        e.preventDefault();
	        e.dataTransfer.dropEffect = "copy";
	    },
	    attImageUploadButtonAndView_onDrop : function(e: any) {
	        e.preventDefault();
	        var noteIndex = getNoteIndex(e.target);
	        if(!noteIndex) return;
	        var files = Array.from(e.dataTransfer.files);
	        for(var i = 0; i < files.length; i++){
	            (vn.variables.attTempImages as any)[noteIndex][getUUID()] = files[i];
	        }
	      	// Leave attTempImages with only valid files.
	        setAttTempImageValid(noteIndex);
	      	// Set attImageUploadAndView.
	        setAttImageUploadAndView(noteIndex);
	    },
	    attImageUploadButtonAndView_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.elements.attImageUploads[noteIndex].click();
	    },
		//modal att image view pre button
		attImageViewPreButtion_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var scrollAmount = vn.elements.attImageUploadButtonAndViews[noteIndex].offsetWidth / 1.5 + 10;
			vn.elements.attImageUploadButtonAndViews[noteIndex].scrollLeft -= scrollAmount;
		},
		//modal att image view next button
		attImageViewNextButtion_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var scrollAmount = vn.elements.attImageUploadButtonAndViews[noteIndex].offsetWidth / 1.5 + 10;
			vn.elements.attImageUploadButtonAndViews[noteIndex].scrollLeft += scrollAmount;
		},
		//modal att image upload
		attImageUpload_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var files = Array.from(e.target.files);
	        for(var i = 0; i < files.length; i++){
	            (vn.variables.attTempImages as any)[noteIndex][getUUID()] = files[i];
	        }
	      	// Leave attTempImages with only valid files.
	        setAttTempImageValid(noteIndex);
	      	// Set attImageUploadAndView.
	        setAttImageUploadAndView(noteIndex);
		},
		attImageUpload_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
		},
		//modal att image url
		attImageURL_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var url = e.target.value;
			if(url) {
		       	vn.elements.attImageUploadButtonAndViews[noteIndex].replaceChildren();
	        	const tempEl = document.createElement("img");
	        	tempEl.src = url;
	        	tempEl.style.width = "auto";
	        	tempEl.style.height = "100%";
	        	tempEl.style.display = "inline-block";
	        	tempEl.style.margin = "0 5px"
		       	vn.elements.attImageUploadButtonAndViews[noteIndex].appendChild(tempEl);
			}
			else {
		    	vn.elements.attImageUploadButtonAndViews[noteIndex].textContent = vn.languageSet[vn.variables.languages[noteIndex]].attImageUploadButtonAndView;
			}
		},
		attImageURL_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
		},
		//modal att image insert
		attImageInsertButton_onClick : function(e: any) {
			/*
			In case of having a range:
				Sequentially insert <img url/> into startElement
				Reset attTempImages, attImageUploadButtonAndView, attImageURL and close modal
				If it's uload method:
					Store files in vn.variables.attImages
			If there is no range:
				Reset attTempImages, attImageUploadButtonAndView, attImageURL and close modal
			*/
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!isValidSelection(noteIndex)) {
				closeAllModal(noteIndex);
				return;
			}
			if(!vn.variables.editStartUnitElements[noteIndex]) {
				closeAllModal(noteIndex);
				return;
			}
			
			if((vn.elements.attImageURLs[noteIndex] as any).value) {
				var url = (vn.elements.attImageURLs[noteIndex] as any).value;
				var editStartUnitElements: any = vn.variables.editStartUnitElements[noteIndex];
				var tempEl1;
				var tempEl2;
				var viewerStyle = "width: 100%; overflow:hidden;"
			
				tempEl1 = document.createElement(editStartUnitElements.tagName);
				tempEl2 = getElement(
						"",
						"img",
						"",
						{
							"class" : getClassName(noteIndex, "image_viewer"),
							"data-note-index" : noteIndex,
							"src" : url,
							"style" : viewerStyle,
							"title" : "",
						}
					);
				tempEl1.appendChild(tempEl2)
				editStartUnitElements.parentNode.insertBefore(tempEl1, editStartUnitElements.nextSibling);
				
				closeAllModal(noteIndex);
				// Sets the new selection range.
				setNewSelection(
					tempEl1,
					0,
					tempEl1,
					0
					);
				return;
			}
			
			var keys = Object.keys(vn.variables.attTempImages[noteIndex]);
			if(keys.length > 0) {
				var editStartUnitElements: any = vn.variables.editStartUnitElements[noteIndex];
				var tempEl1;
				var tempEl2;
				var tempFile;
				var viewerStyle = "width: 100%; overflow:hidden;"
				var selectEl;
				
				for(var i = keys.length - 1; i >= 0; i--) {
					// Save image file object
					vn.variables.attImages[noteIndex][keys[i]] = vn.variables.attTempImages[noteIndex][keys[i]];
					
					tempEl1 = document.createElement(editStartUnitElements.tagName);
					tempEl2 = getElement(
							"",
							"img",
							"",
							{
								"class" : getClassName(noteIndex, "image_viewer"),
								"uuid" : keys[i],
								"data-note-index" : noteIndex,
								"src" : URL.createObjectURL(vn.variables.attImages[noteIndex][keys[i]]),
								"style" : viewerStyle,
								"title" : "",
							}
						);
					tempEl1.appendChild(tempEl2)
					editStartUnitElements.parentNode.insertBefore(tempEl1, editStartUnitElements.nextSibling);
					
					if(i === 0) selectEl = tempEl1;
				}
				    
				closeAllModal(noteIndex);
				// Sets the new selection range.
				setNewSelection(
					selectEl,
					0,
					selectEl,
					0
					);
				return;
			}
			
			closeAllModal(noteIndex);
			return;
		},

		//==================================================================================
		//att video
		attVideoButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			
			// Restore the note size.
			doIncreaseTextareaHeight();
			
			closeAllModal(noteIndex);
			
			var displayBlock = getId(noteIndex, "on_display_block");
			var displayNone = getId(noteIndex, "on_display_none");
			vn.elements.backModals[noteIndex].classList.remove(displayNone);
			vn.elements.backModals[noteIndex].classList.add(displayBlock);
			vn.elements.attVideoModals[noteIndex].classList.remove(displayNone);
			vn.elements.attVideoModals[noteIndex].classList.add(displayBlock);

			//modal setting
			(vn.elements.attVideoEmbedIds[noteIndex] as any).value = "";
			(vn.elements.attVideoWidthes[noteIndex] as any).value = 100;
			(vn.elements.attVideoHeights[noteIndex] as any).value = 500;

			validCheckAttVideo(noteIndex);
		},
    	//==================================================================================
		//modal att video
    	attVideoModal_onClick : function(e: any) {
		},
		//modal att video embed id
		attVideoEmbedId_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			validCheckAttVideo(noteIndex);
		},
		attVideoEmbedId_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			validCheckAttVideo(noteIndex);
		},
		//modal att video width
		attVideoWidth_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			if(!checkNumber(inputValue)) {
				e.target.value = "";
				return;
			}
		},
		attVideoWidth_onBlur : function(e: any) {
			if(!e.target.value) e.target.value = 100;
			var widthPer = e.target.value;
			if(widthPer < 10) widthPer = 10;
			if(widthPer > 100) widthPer = 100;
			e.target.value = widthPer;
		},
		//modal att video height
		attVideoHeight_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			if(!checkNumber(inputValue)) {
				e.target.value = "";
				return;
			}
		},
		attVideoHeight_onBlur : function(e: any) {
			if(!e.target.value) e.target.value = 500;
			var height = e.target.value;
			if(height < 50) height = 50;
			if(height > 1000) height = 1000;
			e.target.value = height;
		},
		//modal att video insert
		attVideoInsertButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!isValidSelection(noteIndex)) {
				closeAllModal(noteIndex);
				return;
			}
			var attVideoValidCheckbox: any = vn.elements.attVideoValidCheckboxes[noteIndex];
			if(!attVideoValidCheckbox.checked) {
				return;
			}

			if(!vn.variables.editStartUnitElements[noteIndex]) {
				closeAllModal(noteIndex);
				return;
			}

			if((vn.elements.attVideoEmbedIds[noteIndex] as any).value) {
				var src = "https://www.youtube.com/embed/" + (vn.elements.attVideoEmbedIds[noteIndex] as any).value;
				var editStartUnitElements: any = vn.variables.editStartUnitElements[noteIndex];
				var tempEl1;
				var tempEl2;
				var viewerStyle = "overflow:hidden;"
									+ "width:" + (vn.elements.attVideoWidthes[noteIndex] as any).value + "%;"
									+ "height:" + (vn.elements.attVideoHeights[noteIndex] as any).value + "px;";
			
				tempEl1 = document.createElement(editStartUnitElements.tagName);
				tempEl2 = getElement(
						"",
						"iframe",
						"",
						{
							"class" : getClassName(noteIndex, "video_viewer"),
							"data-note-index" : noteIndex,
							"src" : src,
							"title" : "YouTube video player",
							"frameborder" : "0",
							"allow" : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
							"allowfullscreen" : "",
							"style" : viewerStyle,
						}
					);
				tempEl1.appendChild(tempEl2)
				editStartUnitElements.parentNode.insertBefore(tempEl1, editStartUnitElements.nextSibling);
				
				closeAllModal(noteIndex);
				// Sets the new selection range.
				setNewSelection(
					tempEl1,
					0,
					tempEl1,
					0
					);
				return;
			}

			closeAllModal(noteIndex);
		},

		//==================================================================================
		//att image tooltip width input event
		attImageAndVideoTooltipWidthInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			if(!checkNumber(inputValue)) {
				e.target.value = "";
				return;
			}
		},
		attImageAndVideoTooltipWidthInput_onBlur : function(e: any) {
			setImageAndVideoWidth(e.target);
		},
		attImageAndVideoTooltipWidthInput_onKeyup : function(e: any) {
			if(e.key === "Enter") {
				setImageAndVideoWidth(e.target);
			}
		},
		//att image tooltip float radio none input event
		attImageAndVideoTooltipFloatRadioNone_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var imgNode: any = (vn.variables.editStartNodes[noteIndex] as any).cloneNode(true);
			if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
			imgNode.style.float = "none";
			(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
			vn.variables.editStartNodes[noteIndex] = imgNode;
		},
		//att image tooltip float radio left input event
		attImageAndVideoTooltipFloatRadioLeft_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var imgNode: any = (vn.variables.editStartNodes[noteIndex] as any).cloneNode(true);
			if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
			imgNode.style.float = "left";
			(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
			vn.variables.editStartNodes[noteIndex] = imgNode;
		},
		//att image tooltip float radio right input event
		attImageAndVideoTooltipFloatRadioRight_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var imgNode: any = (vn.variables.editStartNodes[noteIndex] as any).cloneNode(true);
			if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
			imgNode.style.float = "right";
			(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
			vn.variables.editStartNodes[noteIndex] = imgNode;
		},
		//att image tooltip shape square radio input event
		attImageAndVideoTooltipShapeRadioSquare_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var imgNode: any = vn.variables.editStartNodes[noteIndex];
			if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
			imgNode.style.removeProperty("border-radius");
			(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
			vn.variables.editStartNodes[noteIndex] = imgNode;
		},
		//att image tooltip shape radius radio input event
		attImageAndVideoTooltipShapeRadioRadius_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var imgNode: any = vn.variables.editStartNodes[noteIndex];
			if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
			imgNode.style.borderRadius = "5%";
			(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
			vn.variables.editStartNodes[noteIndex] = imgNode;
		},
		//att image tooltip shape circle radio input event
		attImageAndVideoTooltipShapeRadioCircle_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			var imgNode: any = vn.variables.editStartNodes[noteIndex];
			if(imgNode.tagName !== "IMG" && imgNode.tagName !== "IFRAME") return;
			imgNode.style.borderRadius = "50%";
			(vn.variables.editStartNodes[noteIndex] as any).parentNode.replaceChild(imgNode, (vn.variables.editStartNodes[noteIndex] as any));
			vn.variables.editStartNodes[noteIndex] = imgNode;
		},
		
		//==================================================================================
		//fontSizeInputBox event
		fontSizeInputBox_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//fontSizeInput event
		fontSizeInput_onClick : function(e: any) {
		},
		fontSizeInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkNumber(inputValue)) {
				e.target.value = "";
				return;
			}
			vn.variables.fontSizes[noteIndex] = inputValue;
		},
		fontSizeInput_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!e.target.value) {
				e.target.value = vn.variables.fontSizes[noteIndex];
			}
			var inputValueNum = Number(e.target.value);
			if(inputValueNum > 120) {
				e.target.value = "120";
				vn.variables.fontSizes[noteIndex] = e.target.value;
				return;
			}
			if(inputValueNum < 6) {
				e.target.value = "6";
				vn.variables.fontSizes[noteIndex] = e.target.value;
				return;
			}
			vn.variables.fontSizes[noteIndex] = e.target.value;
		},
		
		//==================================================================================
		//letterSpacingInputBox event
		letterSpacingInputBox_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//letterSpacingInput event
		letterSpacingInput_onClick : function(e: any) {
		},
		letterSpacingInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkRealNumber(inputValue)) {
				e.target.value = "";
				return;
			}
			vn.variables.letterSpacings[noteIndex] = inputValue;
		},
		letterSpacingInput_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!e.target.value) {
				e.target.value = "0";
				vn.variables.letterSpacings[noteIndex] = e.target.value;
				return;
			}
			var inputValueNum = Number(e.target.value);
			if(inputValueNum > 30) {
				e.target.value = "30";
				vn.variables.letterSpacings[noteIndex] = e.target.value;
				return;
			}
			if(inputValueNum < -5) {
				e.target.value = "-5";
				vn.variables.letterSpacings[noteIndex] = e.target.value;
				return;
			}
			vn.variables.letterSpacings[noteIndex] = e.target.value;
		},
		
		//==================================================================================
		//lineHeightInputBox event
		lineHeightInputBox_onClick : function(e: any) {
		},
		lineHeightInputBox_onInput : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//lineHeightInput event
		lineHeightInput_onClick : function(e: any) {
		},
		lineHeightInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkNumber(inputValue)) {
				e.target.value = "";
				return;
			}
			vn.variables.lineHeights[noteIndex] = e.target.value;
		},
		lineHeightInput_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!e.target.value) {
				e.target.value = vn.variables.lineHeights[noteIndex];
			}
			var inputValueNum = Number(e.target.value);
			if(inputValueNum > 150) {
				e.target.value = "150";
				vn.variables.lineHeights[noteIndex] = e.target.value;
				return;
			}
			if(inputValueNum < 6) {
				e.target.value = "6";
				vn.variables.lineHeights[noteIndex] = e.target.value;
				return;
			}
			vn.variables.lineHeights[noteIndex] = e.target.value;
		},
		
		//==================================================================================
		//fontFamilySelect event
		fontFamilySelect_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			selectToggle(e.target);
			// It's too inconvenient if the cursor is caught again on mobile..
			if(!isMobileDevice()) {
				setOriginEditSelection(noteIndex);
			}
		},
		//==================================================================================
		//color text select
		colorTextSelect_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			selectToggle(e.target);
			// It's too inconvenient if the cursor is caught again on mobile..
			if(!isMobileDevice()) {
				setOriginEditSelection(noteIndex);
			}
		},
		//color text select box
		colorTextSelectBox_onClick : function(e: any) {
		},
		//colorText R Input event
		colorTextRInput_onClick : function(e: any) {
		},
		colorTextRInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(inputValue)) {
				inputValue = vn.variables.colorTextRs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length !== 2) return;
			vn.variables.colorTextRs[noteIndex] = inputValue;
			vn.elements.colorText0s[noteIndex].style.backgroundColor = "#" + vn.variables.colorTextRs[noteIndex] +  vn.variables.colorTextGs[noteIndex] +  vn.variables.colorTextBs[noteIndex];
		},
		colorTextRInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(value)) {
				e.target.value = vn.variables.colorTextRs[noteIndex];
				return;
			}
			if(value.length !== 2) {
				e.target.value = vn.variables.colorTextRs[noteIndex];
			}
		},
		//colorText G Input event
		colorTextGInput_onClick : function(e: any) {
		},
		colorTextGInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(inputValue)) {
				inputValue = vn.variables.colorTextGs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length !== 2) return;
			vn.variables.colorTextGs[noteIndex] = inputValue;
			vn.elements.colorText0s[noteIndex].style.backgroundColor = "#" + vn.variables.colorTextRs[noteIndex] +  vn.variables.colorTextGs[noteIndex] +  vn.variables.colorTextBs[noteIndex];
		},
		colorTextGInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(value)) {
				e.target.value = vn.variables.colorTextGs[noteIndex];
				return;
			}
			if(value.length !== 2) {
				e.target.value = vn.variables.colorTextGs[noteIndex];
			}
		},
		//colorText B Input event
		colorTextBInput_onClick : function(e: any) {
		},
		colorTextBInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(inputValue)) {
				inputValue = vn.variables.colorTextBs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length !== 2) return;
			vn.variables.colorTextBs[noteIndex] = inputValue;
			vn.elements.colorText0s[noteIndex].style.backgroundColor = "#" + vn.variables.colorTextRs[noteIndex] +  vn.variables.colorTextGs[noteIndex] +  vn.variables.colorTextBs[noteIndex];
		},
		colorTextBInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(value)) {
				e.target.value = vn.variables.colorTextBs[noteIndex];
				return;
			}
			if(value.length !== 2) {
				e.target.value = vn.variables.colorTextBs[noteIndex];
			}
		},
		//colorText Opacity Input event
		colorTextOpacityInput_onClick : function(e: any) {
		},
		colorTextOpacityInput_onInput : function(e: any) {
			if(e.target.value === "01" || e.target.value === "10") {
				e.target.value = e.data;
			} 
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkRealNumber(inputValue)) {
				inputValue = vn.variables.colorTextOs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length >= 3 && inputValue < 0.1) {
				inputValue = 0.1;
			}
			if (inputValue > 1) {
				inputValue = 1;
			}
			if(inputValue >= 0.1 && inputValue <= 1) {
				// Round to the nearest tenth.
				e.target.value = Math.round(inputValue * 10) / 10;
			}
			
			vn.variables.colorTextOs[noteIndex] = inputValue;
			vn.elements.colorText0s[noteIndex].style.opacity = vn.variables.colorTextOs[noteIndex];
		},
		colorTextOpacityInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkRealNumber(value)) {
				e.target.value = vn.variables.colorTextOs[noteIndex];
			}
		},
		//colorText0 event
		colorText0_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = "#" + vn.variables.colorTextRs[noteIndex] +  vn.variables.colorTextGs[noteIndex] +  vn.variables.colorTextBs[noteIndex];
			vn.variables.colorTextOpacitys[noteIndex] = vn.variables.colorTextOs[noteIndex];
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
				 = getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex] === "0" ? 1 : vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText1 event
		colorText1_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color14[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText2 event
		colorText2_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color15[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText3 event
		colorText3_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color16[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText4 event
		colorText4_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color17[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText5 event
		colorText5_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color18[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText6 event
		colorText6_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color19[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorText7 event
		colorText7_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorTextRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color20[noteIndex]);
			vn.variables.colorTextOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorTextSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorTextRGBs[noteIndex], vn.variables.colorTextOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		
		//==================================================================================
		//color background select
		colorBackSelect_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			selectToggle(e.target);
			// It's too inconvenient if the cursor is caught again on mobile..
			if(!isMobileDevice()) {
				setOriginEditSelection(noteIndex);
			}
		},
		//color background select box
		colorBackSelectBox_onClick : function(e: any) {
		},
		//colorBack R Input event
		colorBackRInput_onClick : function(e: any) {
		},
		colorBackRInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(inputValue)) {
				inputValue = vn.variables.colorBackRs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length !== 2) return;
			vn.variables.colorBackRs[noteIndex] = inputValue;
			vn.elements.colorBack0s[noteIndex].style.backgroundColor = "#" + vn.variables.colorBackRs[noteIndex] +  vn.variables.colorBackGs[noteIndex] +  vn.variables.colorBackBs[noteIndex];
		},
		colorBackRInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(value)) {
				e.target.value = vn.variables.colorBackRs[noteIndex];
				return;
			}
			if(value.length !== 2) {
				e.target.value = vn.variables.colorBackRs[noteIndex];
			}
		},
		//colorBack G Input event
		colorBackGInput_onClick : function(e: any) {
		},
		colorBackGInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(inputValue)) {
				inputValue = vn.variables.colorBackGs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length !== 2) return;
			vn.variables.colorBackGs[noteIndex] = inputValue;
			vn.elements.colorBack0s[noteIndex].style.backgroundColor = "#" + vn.variables.colorBackRs[noteIndex] +  vn.variables.colorBackGs[noteIndex] +  vn.variables.colorBackBs[noteIndex];
		},
		colorBackGInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(value)) {
				e.target.value = vn.variables.colorBackGs[noteIndex];
				return;
			}
			if(value.length !== 2) {
				e.target.value = vn.variables.colorBackGs[noteIndex];
			}
		},
		//colorBack B Input event
		colorBackBInput_onClick : function(e: any) {
		},
		colorBackBInput_onInput : function(e: any) {
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(inputValue)) {
				inputValue = vn.variables.colorBackBs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length !== 2) return;
			vn.variables.colorBackBs[noteIndex] = inputValue;
			vn.elements.colorBack0s[noteIndex].style.backgroundColor = "#" + vn.variables.colorBackRs[noteIndex] +  vn.variables.colorBackGs[noteIndex] +  vn.variables.colorBackBs[noteIndex];
		},
		colorBackBInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkHex(value)) {
				e.target.value = vn.variables.colorBackBs[noteIndex];
				return;
			}
			if(value.length !== 2) {
				e.target.value = vn.variables.colorBackBs[noteIndex];
			}
		},
		//colorBack Opacity Input event
		colorBackOpacityInput_onClick : function(e: any) {
		},
		colorBackOpacityInput_onInput : function(e: any) {
			if(e.target.value === "01" || e.target.value === "10") {
				e.target.value = e.data;
			} 
			if(!e.target.value) return;
			var inputValue = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkRealNumber(inputValue)) {
				inputValue = vn.variables.colorBackOs[noteIndex];
				e.target.value = inputValue;
				return;
			}
			if(inputValue.length >= 3 && inputValue < 0.1) {
				inputValue = 0.1;
			}
			if (inputValue > 1) {
				inputValue = 1;
			}
			if(inputValue >= 0.1 && inputValue <= 1) {
				// Round to the nearest tenth.
				e.target.value = Math.round(inputValue * 10) / 10;
			}
			
			vn.variables.colorBackOs[noteIndex] = inputValue;
			vn.elements.colorBack0s[noteIndex].style.opacity = vn.variables.colorBackOs[noteIndex];
		},
		colorBackOpacityInput_onBlur : function(e: any) {
			var value = e.target.value;
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			if(!checkRealNumber(value)) {
				e.target.value = vn.variables.colorBackOs[noteIndex];
			}
		},
		//colorBack0 event
		colorBack0_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = "#" + vn.variables.colorBackRs[noteIndex] +  vn.variables.colorBackGs[noteIndex] +  vn.variables.colorBackBs[noteIndex];
			vn.variables.colorBackOpacitys[noteIndex] = vn.variables.colorBackOs[noteIndex];
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
				 = getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex] === "0" ? 1 : vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack1 event
		colorBack1_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color14[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack2 event
		colorBack2_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color15[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack3 event
		colorBack3_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color16[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack4 event
		colorBack4_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color17[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack5 event
		colorBack5_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color18[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack6 event
		colorBack6_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color19[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		//colorBack7 event
		colorBack7_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			vn.variables.colorBackRGBs[noteIndex] = getHexColorFromColorName(vn.colors.color20[noteIndex]);
			vn.variables.colorBackOpacitys[noteIndex] = "1";
			if(!isMobileDevice()) {
				(vn.elements.colorBackSelects[noteIndex] as any).querySelector("."+getEventChildrenClassName()).style.color
					= getRGBAFromHex(vn.variables.colorBackRGBs[noteIndex], vn.variables.colorBackOpacitys[noteIndex]);
			}
			
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		},
		
		//==================================================================================
		//formatClearButton
		formatClearButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			// If the selection is a single point
			if (vn.variables.editRanges[noteIndex] && (vn.variables.editRanges[noteIndex] as any).collapsed) {
				// Reset all styles and reposition to the original selection point.
				initToggleButtonVariables(noteIndex);
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
		        modifySelectedSingleElement(noteIndex, vn.variables.defaultStyles[noteIndex]);
			}
		},
		
		//==================================================================================
		//undo
		undoButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) noteIndex = vn.variables.lastActiveNote;
			// Disconnect the observer.
			elementsEvent["note_observer"].disconnect();
			if(vn.variables.recodeContings[noteIndex] <= 0) return;
			vn.variables.recodeContings[noteIndex] = vn.variables.recodeContings[noteIndex] - 1;
			replaceDifferentBetweenElements(vn.elements.textareas[noteIndex], vn.variables.recodeNotes[noteIndex][vn.variables.recodeContings[noteIndex]]);
			
			// Reconnect the observer.
			connectObserver();
		},
		
		//==================================================================================
		//redo
		redoButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) noteIndex = vn.variables.lastActiveNote;
			// Disconnect the observer.
			elementsEvent["note_observer"].disconnect();
			if(vn.variables.recodeContings[noteIndex] >= vn.variables.recodeNotes[noteIndex].length - 1) return;
			vn.variables.recodeContings[noteIndex] = vn.variables.recodeContings[noteIndex] + 1;
			replaceDifferentBetweenElements(vn.elements.textareas[noteIndex], vn.variables.recodeNotes[noteIndex][vn.variables.recodeContings[noteIndex]]);
			
			// Reconnect the observer.
			connectObserver();
		},
		
		//==================================================================================
		//help
		helpButton_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			
			// Restore the note size.
			doIncreaseTextareaHeight();
			
			// Close all modals
			closeAllModal(noteIndex);
			// Close all selects
			closeAllSelectBoxes(noteIndex);
			// Adjust modal size
			setAllModalSize(noteIndex);
			// Open modal background
			var displayBlock = getId(noteIndex, "on_display_block");
			var displayNone = getId(noteIndex, "on_display_none");
			vn.elements.backModals[noteIndex].classList.remove(displayNone);
			vn.elements.backModals[noteIndex].classList.add(displayBlock);
			vn.elements.helpModals[noteIndex].classList.remove(displayNone);
			vn.elements.helpModals[noteIndex].classList.add(displayBlock);
		},
		helpModal_onClick : function(e: any) {},
		
		//==================================================================================
		//modal back
		modalBack_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			closeAllModal(noteIndex);
		},
		
		//==================================================================================
		//placeholder
		placeholder_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			if(!noteIndex) return;
			closePlaceholder(noteIndex);
			vn.elements.textareas[noteIndex].focus();
		},
		
		//==================================================================================
		//textarea
		//==================================================================================
		textarea_onClick : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
			closeAllSelectBoxes(noteIndex);
		},
		textarea_onFocus : function(e: any) {
 			var noteIndex = getNoteIndex(e.target);
 			if(!noteIndex) return;
 			// Close placeholder.
 			closePlaceholder(noteIndex);
			// In the editor, elements not surrounded by unit tags are recreated, wrapped with unit tags.
			doEditUnitCheck(noteIndex)
		},
		textarea_onBlur : function(e: any) {
			var noteIndex = getNoteIndex(e.target);
 			if(!noteIndex) return;
			// Open placeholder.
 			openPlaceholder(noteIndex);
 			// Disconnect the observer.
			elementsEvent["note_observer"].disconnect();
			// Clean up the target element.
			removeEmptyElment(e.target);
			// Reconnect the observer.
			connectObserver();
		},
		textarea_onKeydown : function(e: any) {
			var textarea = e.target;
			if(e.key === "Enter") {
				if(!e.shiftKey) {
					textarea_onKeydownEnter(textarea);
				}
			}
			if((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
				e.preventDefault();
				elementsEvent["undoButton_onClick"](e)
			}
			if((e.ctrlKey || e.metaKey) && (e.key === "y" || e.key === "Y")) {
				e.preventDefault();
				elementsEvent["redoButton_onClick"](e)
			}
		},
		textarea_onKeyup : function(e: any) {
			var textarea = e.target;
			var noteIndex = getNoteIndex(textarea);
			// Open placeholder.
 			closePlaceholder(noteIndex);
 			// Disconnect the observer.
			elementsEvent["note_observer"].disconnect();
			// If all rows are deleted, insert one p tag and br tag.
			if(!textarea.firstChild) {
				initTextarea(textarea);
				return;
			}
			// In the editor, elements not surrounded by unit tags are recreated, wrapped with unit tags.
			if((e.ctrlKey || e.metaKey) && (e.key === "v" || e.key === "V")) {
				e.preventDefault();
				// In the editor, elements not surrounded by unit tags are recreated, wrapped with unit tags.
				doEditUnitCheck(noteIndex)
			}
 			// Reconnect the observer.
			connectObserver();
		},
	    textarea_onBeforeinput: function(e: any) {
	    	// Only proceeds for non-mobile devices && when inputting possible characters
			if (!isMobileDevice() && e.data) {
				// Disconnect the observer.
				elementsEvent["note_observer"].disconnect();
				textarea_onBeforeinputSpelling(e);
				// Reconnect the observer.
				connectObserver();
			}
	    },
		document_onSelectionchange : function(e: any) {
			var selection = window.getSelection();
			if (!selection || selection.rangeCount < 1) return;
			var range = selection.getRangeAt(0);
			
		    // Check if it's inside the note.
			var textarea: any = range.startContainer;
			var note: any = range.startContainer;
			var isTextarea = false;
			var isVanillanote = false;
			
			while(note) {
				if(textarea.tagName === (vn.variables.noteName+"-textarea").toUpperCase()) {
					isTextarea = true;
				}
				else {
					textarea = textarea.parentNode;
				}
				
				if(note instanceof Element && note.hasAttribute("data-vanillanote")) {
					isVanillanote = true;
					break;
				}
				else {
					note = note.parentNode;
				}
			}
			
			// In case it's not inside the note.
			if(!isVanillanote) {
				for(var i = 0; i < vn.elements.notes.length; i++) {
					initToggleButtonVariables(i);
				}
				return;
			}
			
			// Execute only when inside the textarea.
			if(!isTextarea) {
				return;
			}
			var noteIndex = textarea.getAttribute("data-note-index");
		    // Save the current selection.
			if(!setEditSelection(noteIndex, selection)) return;	// Exit if the save was unsuccessful
//			setEditSelection(noteIndex, selection);
			//textarea scrolling
			modifyTextareaScroll(textarea, noteIndex);
		},
	};
	
	//==================================================================================
	//using function
	//==================================================================================
	/**
	* createElement
	* @description Creates an HTML element with provided parameters. If a text or an icon is provided in the appendNodeSetObject, appends a text node or an icon span to the created element.
	* @param {Element} element - The HTML Element that will be created.
	* @param {string} elementTag - The type of the HTML element to be created.
	* @param {string} id - The ID attribute for the HTML element.
	* @param {string} className - The class name for the HTML element.
	* @param {number} idx - Index to use when creating the real class name and real ID.
	* @param {object} appendNodeSetObject - Object containing information about a text node or an icon to be appended to the created element.
	* @returns {Element} The created HTML element.
	*/
	var createElement = function(element: any, elementTag: string, id: string, className: string, idx: number, appendNodeSetObject?: any) {
		var element: any = document.createElement(elementTag);
		if(id !== "") {
			element.setAttribute("id", getId(idx, id));
		}
		element.setAttribute("data-note-index",idx);
		element.setAttribute("class", getClassName(idx, className));
		if(appendNodeSetObject && typeof appendNodeSetObject === "object" && Object.keys(appendNodeSetObject).length !== 0) {
			var textNode;
			if(appendNodeSetObject["isIcon"]) {	//google icon
				var iconNode = document.createElement("span");
				iconNode.setAttribute("class","material-symbols-rounded " + getEventChildrenClassName() + " " + getClickCssEventElementClassName() + " " + getOnOverCssEventElementClassName() + " " + getId(idx, "icon"));
				textNode = document.createTextNode(appendNodeSetObject["text"]);
				iconNode.appendChild(textNode);
				if(appendNodeSetObject["iconStyle"]) {
					iconNode.setAttribute("style",appendNodeSetObject["iconStyle"]);
				}
				iconNode.setAttribute("data-note-index",(idx as any));
				element.appendChild(iconNode);
			}
			else {	//just text node
				textNode = document.createTextNode(appendNodeSetObject["text"]);
				element.appendChild(textNode);
			}
		}
		return element;
	};
	
	/**
	* addClickEvent
	* @description Adds a click event listener to an HTML element.
	* @param {Element} element - The HTML element to which the event listener will be added.
	* @param {string} id - The identifier used to refer to specific functions within the click event.
	*/
	var addClickEvent = function(element: any, id: string) {
		element.addEventListener("click", function(event: any) {
			consoleLog("vn.cssEvents.target_onBeforeClick", "params :" , "(event)", event, "(target)", event.target);
			if(vn.cssEvents.target_onBeforeClick(event) && event.target.classList.contains(getClickCssEventElementClassName())) {
				
				consoleLog("target_onClick", "params :" , "(event)", event, "(target)", event.target);
				target_onClick(event);
				
				consoleLog("vn.cssEvents.target_onAfterClick", "params :" , "(event)", event, "(target)", event.target);
				vn.cssEvents.target_onAfterClick(event);
			}
			
			consoleLog("vn.elementEvents."+id+"_onBeforeClick", "params :" , "(event)", event, "(target)", event.target);
			if(!(vn.elementEvents as any)[id+"_onBeforeClick"](event)) return;
			
			consoleLog(id+"_onClick", "params :" , "(event)", event, "(target)", event.target);
			(elementsEvent as any)[id+"_onClick"](event);
			
			consoleLog("vn.elementEvents."+id+"_onAfterClick", "params :" , "(event)", event, "(target)", event.target);
			(vn.elementEvents as any)[id+"_onAfterClick"](event);
			
			event.stopImmediatePropagation();
		});
	}
	
	/**
	* addMouseoverEvent
	* @description Adds a mouseover event listener to an HTML element.
	* @param {Element} element - The HTML element to which the event listener will be added.
	* @param {string} id - The identifier used to refer to specific functions within the mouseover event.
	*/
	var addMouseoverEvent = function(element: any, id: string) {
		element.addEventListener("mouseover", function(event: any) {
			consoleLog("vn.cssEvents.target_onBeforeMouseover", "params :" , "(event)", event, "(target)", event.target);
			if(!vn.cssEvents.target_onBeforeMouseover(event)) return;
			if(!event.target.classList.contains(getOnOverCssEventElementClassName())) return;
			
			consoleLog("target_onMouseover", "params :" , "(event)", event, "(target)", event.target);
			target_onMouseover(event);
			
			consoleLog("vn.cssEvents.target_onAfterMouseover", "params :" , "(event)", event, "(target)", event.target);
			vn.cssEvents.target_onAfterMouseover(event);
			
			event.stopImmediatePropagation();
		});
	}
	
	/**
	* addMouseoutEvent
	* @description Adds a mouseout event listener to an HTML element.
	* @param {Element} element - The HTML element to which the event listener will be added.
	* @param {string} id - The identifier used to refer to specific functions within the mouseout event.
	*/
	var addMouseoutEvent = function(element: any, id: string) {
		element.addEventListener("mouseout", function(event: any) {
			consoleLog("vn.cssEvents.target_onBeforeMouseout", "params :" , "(event)", event, "(target)", event.target);
			if(!vn.cssEvents.target_onBeforeMouseout(event)) return;
			if(!event.target.classList.contains(getOnOverCssEventElementClassName())) return;
			
			consoleLog("target_onMouseout", "params :" , "(event)", event, "(target)", event.target);
			target_onMouseout(event);
			
			consoleLog("vn.cssEvents.target_onAfterMouseout", "params :" , "(event)", event, "(target)", event.target);
			vn.cssEvents.target_onAfterMouseout(event);
			
			event.stopImmediatePropagation();
		});
	}
	
	/**
	* addTouchstartEvent
	* @description Adds a touchstart event listener to a specified element.
	* @param {Element} element - The element to attach the touchstart event listener to.
	* @param {string} id - The id associated with the element.
	*/
	var addTouchstartEvent = function(element: any, id: string) {
		element.addEventListener("touchstart", function(event: any) {
			consoleLog("vn.cssEvents.target_onBeforeTouchstart", "params :" , "(event)", event, "(target)", event.target);
			if(!vn.cssEvents.target_onBeforeTouchstart(event)) return;
			if(!event.target.classList.contains(getOnOverCssEventElementClassName())) return;
			
			consoleLog("target_onTouchstart", "params :" , "(event)", event, "(target)", event.target);
			target_onTouchstart(event);
			
			consoleLog("vn.cssEvents.target_onAfterTouchstart", "params :" , "(event)", event, "(target)", event.target);
			vn.cssEvents.target_onAfterTouchstart(event);
			
			event.stopImmediatePropagation();
		});
	}
	
	/**
	* addTouchendEvent
	* @description Adds a touchend event listener to a specified element.
	* @param {Element} element - The element to attach the touchend event listener to.
	* @param {string} id - The id associated with the element.
	*/
	var addTouchendEvent = function(element: any, id: string) {
		element.addEventListener("touchend", function(event: any) {
			consoleLog("vn.cssEvents.target_onBeforeTouchend", "params :" , "(event)", event, "(target)", event.target);
			if(!vn.cssEvents.target_onBeforeTouchend(event)) return;
			if(!event.target.classList.contains(getOnOverCssEventElementClassName())) return;
			
			consoleLog("target_onTouchend", "params :" , "(event)", event, "(target)", event.target);
			target_onTouchend(event);
			
			consoleLog("vn.cssEvents.target_onAfterTouchend", "params :" , "(event)", event, "(target)", event.target);
			vn.cssEvents.target_onAfterTouchend(event);
			
			event.stopImmediatePropagation();
		});
	}
	
	var createElementBasic = function(element: any, elementTag: string, id: string, className: string, idx: number, appendNodeSetObject?: any) {
		element = createElement(element, elementTag, id, className, idx, appendNodeSetObject);
		addClickEvent(element, id);
		return element;
	};
	
	var createElementSelect = function(element: any, elementTag: string, id: string, className: string, idx: number, appendNodeSetObject?: any) {
		element = createElement(element, elementTag, id, className, idx, appendNodeSetObject);
		element.classList.add(getClickCssEventElementClassName());
		element.classList.add(getOnOverCssEventElementClassName());
		element.setAttribute("type","select");
		addClickEvent(element, id);
		addMouseoverEvent(element, id);
		addMouseoutEvent(element, id);
		addTouchstartEvent(element, id);
		addTouchendEvent(element, id);
		return element;
	};
	
	var createElementSelectBox = function(element: any, elementTag: string, id: string, className: string, idx: number) {
		return createElement(element, elementTag, id, className, idx);
	};
	
	var createElementButton = function(element: any, elementTag: string, id: string, className: string, idx: number, appendNodeSetObject?: any) {
		element = createElement(element, elementTag, id, className, idx, appendNodeSetObject);
		element.classList.add(getClickCssEventElementClassName());
		element.classList.add(getOnOverCssEventElementClassName());
		addClickEvent(element, id);
		addMouseoverEvent(element, id);
		addMouseoutEvent(element, id);
		addTouchstartEvent(element, id);
		addTouchendEvent(element, id);
		return element;
	};
	
	var createElementInput = function(element: any, id: string, className: string, idx: number) {
		element = createElement(element, "input", id, className, idx);
		element.setAttribute("name", getId(idx, id));
		element.setAttribute("autocapitalize", "none");
		element.setAttribute("placeholder","");
		
		element.addEventListener("input", function(event: any) {
			consoleLog("vn.elementEvents."+id+"_onBeforeInput", "params :" , "(event)", event, "(target)", event.target);
			if(!(vn.elementEvents as any)[id+"_onBeforeInput"](event)) return;
			
			consoleLog(id+"_onInput", "params :" , "(event)", event, "(target)", event.target);
			(elementsEvent as any)[id+"_onInput"](event);
			
			consoleLog("vn.elementEvents."+id+"_onAfterInput", "params :" , "(event)", event, "(target)", event.target);
			(vn.elementEvents as any)[id+"_onAfterInput"](event);
			
			event.stopImmediatePropagation();
		});
		element.addEventListener("blur", function(event: any) {
			consoleLog("vn.elementEvents."+id+"_onBeforeBlur", "params :" , "(event)", event, "(target)", event.target);
			if(!(vn.elementEvents as any)[id+"_onBeforeBlur"](event)) return;
			
			consoleLog(id+"_onBlur", "params :" , "(event)", event, "(target)", event.target);
			(elementsEvent as any)[id+"_onBlur"](event);
			
			consoleLog("vn.elementEvents."+id+"_onAfterBlur", "params :" , "(event)", event, "(target)", event.target);
			(vn.elementEvents as any)[id+"_onAfterBlur"](event);
			
			event.stopImmediatePropagation();
		});
		return element;
	};
	
	var createElementInputCheckbox = function(element: any, id: string, className: string, idx: number) {
		element = createElement(element, "input", id, className, idx);
		element.setAttribute("name", getId(idx, id));
		element.setAttribute("placeholder","");
		element.setAttribute("type","checkbox");
		return element;
	};
	
	var createElementInputRadio = function(element: any, id: string, className: string, name: string, idx: number) {
		element = createElement(element, "input", id, className, idx);
		element.setAttribute("name", name);
		element.setAttribute("placeholder","");
		element.setAttribute("type","radio");
		addClickEvent(element, id);
		return element;
	};
	
	var createElementRadioLabel = function(forId: string, iconName: string) {
		var tempEl1;
		var tempEl2;
		tempEl1 = document.createElement("label");
		tempEl1.setAttribute("for", forId);
		tempEl1.setAttribute("style", "display:inline-block;width:30px;position:relative;margin-left:3px;;margin-left:3px;");
		tempEl2 = document.createElement("span");
		tempEl2.setAttribute("class","material-symbols-rounded");
		tempEl2.setAttribute("style","font-size:1.3em;position:absolute;bottom:-6px;cursor:pointer;color:" + getHexColorFromColorName(vn.colors.color1[i]));
		tempEl2.textContent = iconName;
		tempEl1.appendChild(tempEl2);
		return tempEl1;
	};
	
	var createElementFontFamiliySelect = function(element: any, elementTag: string, id: string, className: string, idx: number, appendNodeSetObject: any) {
		element = createElement(element, elementTag, id, className, idx, appendNodeSetObject);
		// The font event is dynamically generated
		(vn.elementEvents as any)[id+"_onBeforeClick"] = function(event: any) {return true;};
		(elementsEvent as any)[id+"_onClick"] = function(event: any) {
			fontFamilySelectList_onClick(event);
			selectToggle(event.target);
			var noteIndex = event.target.getAttribute("data-note-index");
			// If the selection is a single point
			if(vn.variables.editRanges[noteIndex] && (vn.variables.editRanges as any)[noteIndex].collapsed) {
				// Re-move to the original selection point
				setOriginEditSelection(noteIndex);
			}
			else {	// Dragging
				// Specify style for dragged characters
				modifySelectedSingleElement(noteIndex, getObjectNoteCss(noteIndex));
			}
		};
		(vn.elementEvents as any)[id+"_onAfterClick"] = function(event: any) {};
		element.classList.add(getClickCssEventElementClassName());
		element.classList.add(getOnOverCssEventElementClassName());
		addClickEvent(element, id);
		addMouseoverEvent(element, id);
		addMouseoutEvent(element, id);
		addTouchstartEvent(element, id);
		addTouchendEvent(element, id);
		
		return element;
	};
	
	var setColor = function(mainColor: string) {
		mainColor = getHexColorFromColorName(mainColor);
		var type = getColorShade(mainColor);
		
		if(type === "light") {
			vn.colors.color1[i] = "#333333";	//filled
			vn.colors.color2[i] = "#ffffff";	//empty
			vn.colors.color3[i] = getAdjustHexColor(mainColor,"18");	//toolbar
			vn.colors.color4[i] = mainColor;	//button
			vn.colors.color5[i] = getAdjustHexColor(mainColor,"-18");	//active
			vn.colors.color6[i] = getAdjustHexColor(mainColor,"-1f");	//border
			vn.colors.color7[i] = getAdjustHexColor(mainColor,"-2f");	//box-shadow
			vn.colors.color8[i] = "#609966";	//correct
			vn.colors.color9[i] = "#df2e38";	//notice
			vn.colors.color10[i] = "#333333";	//modal text
			vn.colors.color11[i] = "#666666";	//a tag color
			vn.colors.color12[i] = "#333333";	//color 0 text color
			vn.colors.color13[i] = "#ffffff";	//color 0 text background color
			vn.colors.color14[i] = "#ff7f7f";	//color 1
			vn.colors.color15[i] = "#ffad66";	//color 2
			vn.colors.color16[i] = "#ffff66";	//color 3
			vn.colors.color17[i] = "#99ff99";	//color 4
			vn.colors.color18[i] = "#99ccff";	//color 5
			vn.colors.color19[i] = "#6699cc";	//color 6
			vn.colors.color20[i] = "#cc99cc";	//color 7
		}
		else {
			vn.colors.color1[i] = "#ffffff";	//filled
			vn.colors.color2[i] = "#ffffff";	//empty
			vn.colors.color3[i] = getAdjustHexColor(mainColor,"18");	//toolbar
			vn.colors.color4[i] = mainColor;	//button
			vn.colors.color5[i] = getAdjustHexColor(mainColor,"-18");	//active
			vn.colors.color6[i] = getAdjustHexColor(mainColor,"-1f");	//border
			vn.colors.color7[i] = getAdjustHexColor(mainColor,"-2f");	//box-shadow
			vn.colors.color8[i] = "#609966";	//correct
			vn.colors.color9[i] = "#df2e38";	//notice
			vn.colors.color10[i] = "#333333";	//modal text
			vn.colors.color11[i] = "#666666";	//a tag color
			vn.colors.color12[i] = "#333333";	//color 0 text color
			vn.colors.color13[i] = "#ffffff";	//color 0 text background color
			vn.colors.color14[i] = "#b70404";	//color 1
			vn.colors.color15[i] = "#e55807";	//color 2
			vn.colors.color16[i] = "#f1c93b";	//color 3
			vn.colors.color17[i] = "#1a5d1a";	//color 4
			vn.colors.color18[i] = "#068fff";	//color 5
			vn.colors.color19[i] = "#0c134f";	//color 6
			vn.colors.color20[i] = "#5c469c";	//color 7
		}
	}
	//==================================================================================
	//document, window event
	vn.eventStore.selectionchange = function(event: any) {
		elementsEvent["document_onSelectionchange"](event);
	};
	vn.eventStore.keydown = function(event) {
		if ((event.ctrlKey || event.metaKey) && (event.key === "z" || event.key === "Z")) {
			event.preventDefault();
			elementsEvent["undoButton_onClick"](event);
		}
		if ((event.ctrlKey || event.metaKey) && (event.key === "y" || event.key === "Y")) {
			event.preventDefault();
			elementsEvent["redoButton_onClick"](event);
		}
	};
	vn.eventStore.resize = function(event) {
		elementsEvent["window_onResize"](event);
	};
	vn.eventStore.resizeViewport = function(event) {
		elementsEvent["window_resizeViewport"](event);
	};
	document.addEventListener("selectionchange", vn.eventStore.selectionchange);
	document.addEventListener("keydown", vn.eventStore.keydown);
	window.addEventListener("resize", vn.eventStore.resize);
	if(window.visualViewport) window.visualViewport.addEventListener("resize", vn.eventStore.resizeViewport);
	
	//reset css
    cssText = cssText + vn.keyframes["@keyframes vanillanote-modal-input"];
	cssText = cssText + vn.keyframes["@keyframes vanillanote-modal-small-input"];
	
	//==================================================================================
	//create logic (for-statement is used to create multiple note on one page.)
	//==================================================================================
	for(var i = 0; i < vn.elements.notes.length; i++) {
		//note
		note = vn.elements.notes[i];
		note.setAttribute("id", vn.variables.noteName + "_" + i);
		note.setAttribute("class", vn.variables.noteName + "_" + i + " " + vn.variables.noteName);
		note.setAttribute("data-note-index",i);
		note.getNote = getNote;
		note.getNoteData = getNoteData;
		note.getNoteIndex = function () {
			return getNoteIndex(this);
		};
		
		//==================================================================================
		//attribute params
		//==================================================================================
		//note mode by device
		noteModeByDevice = note.getAttribute("note-mode-by-device") ? note.getAttribute("note-mode-by-device").toUpperCase() : "ADAPTIVE";
		if(["ADAPTIVE","MOBILE","DESKTOP"].indexOf(noteModeByDevice) < 0) noteModeByDevice = "ADAPTIVE";
		if(noteModeByDevice === "MOBILE") {
			isNoteByMobile = true;
		}
		else if (noteModeByDevice === "DESKTOP") {
			isNoteByMobile = false;
		}
		else {
			if(isMobileDevice()) {
				isNoteByMobile = true;
			}
			else {
				isNoteByMobile = false;
			}
		}
		
		//font size, line height
		defaultFontSize = note.getAttribute("default-font-size") ? note.getAttribute("default-font-size") : (isNoteByMobile ? "18" : "16");
		defaultLineHeight = note.getAttribute("default-line-height") ? note.getAttribute("default-line-height") : (isNoteByMobile ? "18" : "16");
		
		//==================================================================================
		//font style
		defaultFontFamilies = ["Arial","Arial Black","Arial Narrow","Comic Sans MS","Courier","Georgia","Impact"];
		addFontFamilies = note.getAttribute("add-font-family") ? note.getAttribute("add-font-family").split(",") : "";
		removeFontFamilies = note.getAttribute("remove-font-family") ? note.getAttribute("remove-font-family").split(",") : "";
		//add font
		for(var addFontIdx = 0; addFontIdx < addFontFamilies.length; addFontIdx++) {
			tempFontFamiliy = addFontFamilies[addFontIdx];
			if(!addFontFamilies[addFontIdx]) continue;
			
			if(!defaultFontFamilies.includes(addFontFamilies[addFontIdx])) {
				// If the comment is already in English, add the translation in italics after the English version.
				if(checkAlphabetAndNumber(addFontFamilies[addFontIdx])) {
					defaultFontFamilies.splice(7 + addFontIdx, 0, addFontFamilies[addFontIdx]);
				}
				else {	// For other comments, add the translation at the end.
					defaultFontFamilies.push(addFontFamilies[addFontIdx]);
				}
			}
		}
		//remove font
		for(var removeFontIdx = 0; removeFontIdx < removeFontFamilies.length; removeFontIdx++) {
			if(!removeFontFamilies[removeFontIdx]) continue;
			defaultFontFamilies = defaultFontFamilies.filter(function(fontFamily: string) {
				return fontFamily !== removeFontFamilies[removeFontIdx];
			})
		}
		// The default font-family is set to Georgia.
		defaultFontFamiliy = note.getAttribute("default-font-family") ? note.getAttribute("default-font-family") : "Georgia";
		// If the default font-family is not set, insert it.
		if(!defaultFontFamilies.includes(defaultFontFamiliy)) {
			defaultFontFamilies.splice(0,0,defaultFontFamiliy);
		}
		// if there is no this font in the current browser, remove (no use)
//		for(var defaultFontIdx = 0; defaultFontIdx < defaultFontFamilies.length; defaultFontIdx++) {
//			if(!isFontAvailable(defaultFontFamilies[defaultFontIdx])) {
//				if(defaultFontFamilies[defaultFontIdx] === "Georgia") defaultFontFamiliy = "Arial";
//				defaultFontFamilies.splice(defaultFontIdx, 1);
//				defaultFontIdx--;
//			}
//		}
		
		vn.variables.defaultStyles[i] = {
			"font-size" : defaultFontSize + "px",
			"line-height" : defaultLineHeight + "px",
			"font-family" : defaultFontFamiliy,
		};
		
		//==================================================================================
		//att file accept and prevent types 
		vn.variables.attFilePreventTypes[i] =  note.getAttribute("att-file-prevent-types") ? note.getAttribute("att-file-prevent-types").split(",") : [];
		vn.variables.attFileAcceptTypes[i] =  note.getAttribute("att-file-accept-types") ? note.getAttribute("att-file-accept-types").split(",") : [];
		vn.variables.attFileMaxSizes[i] =  note.getAttribute("att-file-max-size") && checkNumber(note.getAttribute("att-file-max-size")) ? note.getAttribute("att-file-max-size") : 20 * 1024 * 1024; //20MB
		
		//==================================================================================
		//att image accept and prevent types 
		defaultAttImageAcceptTypes = [
			"image/png", "image/jpeg", "image/bmp", "image/gif", "image/svg+xml",
			"image/tiff", "image/x-icon", "image/vnd.microsoft.icon", "image/webp","image/heif",
			"image/heic", "image/jp2", "image/avif", "video/mp4", "video/webm",
			"video/ogg", "video/avi", "video/mpeg", "video/quicktime", "video/x-ms-wmv",
			"video/x-flv", "video/3gpp", "video/3gpp2", "video/x-matroska"
			];
		vn.variables.attImagePreventTypes[i] =  note.getAttribute("att-image-prevent-types") ? note.getAttribute("att-image-prevent-types").split(",") : [];
		vn.variables.attImageAcceptTypes[i] =  note.getAttribute("att-image-accept-types") ? note.getAttribute("att-image-accept-types").split(",") : defaultAttImageAcceptTypes;
		vn.variables.attImageMaxSizes[i] =  note.getAttribute("att-image-max-size") && checkNumber(note.getAttribute("att-image-max-size")) ? note.getAttribute("att-image-max-size") : 20 * 1024 * 1024; //20MB
		
		//==================================================================================
		//note size
		sizeLevelDesktop = checkNumber(note.getAttribute("size-level-desktop")) ? Number(note.getAttribute("size-level-desktop")) : 3;
		sizeLevelMobile = checkNumber(note.getAttribute("size-level-mobile")) ? Number(note.getAttribute("size-level-mobile")) : 7;
		sizeLevel = isNoteByMobile ? sizeLevelMobile : sizeLevelDesktop;
		
		//min, max
		if(sizeLevel < 1) sizeLevel = 1;
		if(sizeLevel > 9) sizeLevel = 9;
		
		vn.variables.sizeRates[i] = vn.variables.sizeRates[i] ? vn.variables.sizeRates[i] : (sizeLevel + 11) / 20;
		
		//==================================================================================
		//text area size
		if(!vn.variables.textareaOriginWidths[i]) vn.variables.textareaOriginWidths[i] = note.getAttribute("textarea-width") ? note.getAttribute("textarea-width") : "100%";
		textareaMaxWidth = note.getAttribute("textarea-max-width") ? note.getAttribute("textarea-max-width") : "100%";
		if(!vn.variables.textareaOriginHeights[i]) vn.variables.textareaOriginHeights[i] = note.getAttribute("textarea-height") ? note.getAttribute("textarea-height") : (isNoteByMobile ? "350px" : "500px");
		textareaMaxHeight = note.getAttribute("textarea-max-height") ? note.getAttribute("textarea-max-height") : "900px";
		textareaHeightIsModify = note.getAttribute("textarea-height-isModify") ? note.getAttribute("textarea-height-isModify") : "false";
		
		//==================================================================================
		//tool position
		vn.variables.toolPositions[i] = note.getAttribute("tool-position") &&
			["BOTTOM", "TOP"].indexOf(note.getAttribute("tool-position")) >= 0 ? note.getAttribute("tool-position") : (isNoteByMobile ? "BOTTOM" : "TOP");
		
		//==================================================================================
		//tool toogle
		vn.variables.toolToggles[i] = note.getAttribute("tool-toggle") ? note.getAttribute("tool-toggle") === "true" : (isNoteByMobile ? true : false);
		vn.variables.toolDefaultLines[i] = note.getAttribute("tool-default-line") && checkNumber(note.getAttribute("tool-default-line")) ?
														Number(note.getAttribute("tool-default-line")) : (isNoteByMobile ? 2 : 1);
		if(!vn.variables.toolToggles[i]) vn.variables.toolDefaultLines[i] = 1;
		
		//==================================================================================
		//default-tool-font-family
		var defaultToolFontFamily = note.getAttribute("default-tool-font-family") ? note.getAttribute("default-tool-font-family") : "Georgia" 
		
		//==================================================================================
		//recode
		vn.variables.recodeLimit[i] = note.getAttribute("recode-limit") && checkNumber(note.getAttribute("recode-limit"))? Number(note.getAttribute("recode-limit")) : 100;
		
		//==================================================================================
		//placeholder
		vn.variables.placeholderIsVisible[i] = note.getAttribute("placeholder-is-visible") ? note.getAttribute("placeholder-is-visible") === "true" : false;
		vn.variables.placeholderAddTop[i] = note.getAttribute("placeholder-add-top") && checkRealNumber(note.getAttribute("placeholder-add-top"))? Number(note.getAttribute("placeholder-add-top")) : 0;
		vn.variables.placeholderAddLeft[i] = note.getAttribute("placeholder-add-left") && checkRealNumber(note.getAttribute("placeholder-add-top"))? Number(note.getAttribute("placeholder-add-left")) : 0;
		vn.variables.placeholderWidth[i] = note.getAttribute("placeholder-width") ? note.getAttribute("placeholder-width") : "";
		placeholderColor = note.getAttribute("placeholder-color") ? note.getAttribute("placeholder-color") : "";
		placeholderBackgroundColor = note.getAttribute("placeholder-background-color") ? note.getAttribute("placeholder-background-color") : "";
		placeholderTitle = note.hasAttribute("placeholder-title") ? note.getAttribute("placeholder-title") : "HELLO VANILLANOTE";
		placeholderTextContent = note.hasAttribute("placeholder-text-content") ? note.getAttribute("placeholder-text-content").replace(/<\/*br>/g, "\n") : "This is a placeholder";
		
		//==================================================================================
		//colors
		vn.colors.color1[i] = vn.colors.color1[i] ? getHexColorFromColorName(vn.colors.color1[i]) : "#333333"; //filled
		vn.colors.color2[i] = vn.colors.color2[i] ? getHexColorFromColorName(vn.colors.color2[i]) : "#ffffff"; //empty
		vn.colors.color3[i] = vn.colors.color3[i] ? getHexColorFromColorName(vn.colors.color3[i]) : "#f8f8f8"; //toolbar
		vn.colors.color4[i] = vn.colors.color4[i] ? getHexColorFromColorName(vn.colors.color4[i]) : "#f4f4f4"; //button
		vn.colors.color5[i] = vn.colors.color5[i] ? getHexColorFromColorName(vn.colors.color5[i]) : "#cbcbcb"; //active
		vn.colors.color6[i] = vn.colors.color6[i] ? getHexColorFromColorName(vn.colors.color6[i]) : "#cfcfcf"; //border
		vn.colors.color7[i] = vn.colors.color7[i] ? getHexColorFromColorName(vn.colors.color7[i]) : "#6f6f6f"; //box-shadow
		vn.colors.color8[i] = vn.colors.color8[i] ? getHexColorFromColorName(vn.colors.color8[i]) : "#609966"; //correct
		vn.colors.color9[i] = vn.colors.color9[i] ? getHexColorFromColorName(vn.colors.color9[i]) : "#ea5455"; //notice
		vn.colors.color10[i] = vn.colors.color10[i] ? getHexColorFromColorName(vn.colors.color10[i]) : "#333333"; //modal text
		vn.colors.color11[i] = vn.colors.color11[i] ? getHexColorFromColorName(vn.colors.color11[i]) : "#666666"; //a tag color
		vn.colors.color12[i] = vn.colors.color12[i] ? getHexColorFromColorName(vn.colors.color12[i]) : "#333333"; //color 0 text color
		vn.colors.color13[i] = vn.colors.color13[i] ? getHexColorFromColorName(vn.colors.color13[i]) : "#ffffff"; //color 0 text background color
		vn.colors.color14[i] = vn.colors.color14[i] ? getHexColorFromColorName(vn.colors.color14[i]) : "#ff7f7f"; //color 1
		vn.colors.color15[i] = vn.colors.color15[i] ? getHexColorFromColorName(vn.colors.color15[i]) : "#ffad66"; //color 2
		vn.colors.color16[i] = vn.colors.color16[i] ? getHexColorFromColorName(vn.colors.color16[i]) : "#ffff66"; //color 3
		vn.colors.color17[i] = vn.colors.color17[i] ? getHexColorFromColorName(vn.colors.color17[i]) : "#99ff99"; //color 4
		vn.colors.color18[i] = vn.colors.color18[i] ? getHexColorFromColorName(vn.colors.color18[i]) : "#99ccff"; //color 5
		vn.colors.color19[i] = vn.colors.color19[i] ? getHexColorFromColorName(vn.colors.color19[i]) : "#6699cc"; //color 6
		vn.colors.color20[i] = vn.colors.color20[i] ? getHexColorFromColorName(vn.colors.color20[i]) : "#cc99cc"; //color 7
		//==================================================================================
		//colors attribute
		mainColor = note.getAttribute("main-color");
		colorSet = note.getAttribute("color-set") ? note.getAttribute("color-set").toLowerCase() : "";
		invertColor = note.getAttribute("invert-color") === "true";
		
		if(mainColor) {
			setColor(mainColor);
		}
		else {
			switch(colorSet) {
		      	case "skyblue":
					setColor("#91c8e4");
					break;
		        case "blue":
		        	setColor("#4682a9");
					break;
				case "light-red" :
					setColor("#fdd2bf");
					break;
				case "red" :
		        	setColor("#b61919");
					break;
				case "light-green" :
					setColor("#a4be7b");
					break;
				case "green" :
		        	setColor("#285430");
					break;
				case "orange" :
		        	setColor("#f79327");
					break;
				case "yellow" :
					setColor("#ffe569");
					break;
				case "purple" :
		        	setColor("#804674");
					break;
				case "brown" :
		        	setColor("#675d50");
					break;
				case "black" :
		        	setColor("#272829");
					break;
				default :
					break;
			}
		}
		
		if(invertColor) {
			vn.colors.color1[i] = getInvertColor(vn.colors.color1[i]);
			vn.colors.color2[i] = getInvertColor(vn.colors.color2[i]);
			vn.colors.color3[i] = getInvertColor(vn.colors.color3[i]);
			vn.colors.color4[i] = getInvertColor(vn.colors.color4[i]);
			vn.colors.color5[i] = getInvertColor(vn.colors.color5[i]);
			vn.colors.color6[i] = getInvertColor(vn.colors.color6[i]);
			vn.colors.color7[i] = getInvertColor(vn.colors.color7[i]);
			vn.colors.color10[i] = getInvertColor(vn.colors.color10[i]);
			vn.colors.color11[i] = getInvertColor(vn.colors.color11[i]);
			vn.colors.color12[i] = getInvertColor(vn.colors.color12[i]);
			vn.colors.color13[i] = getInvertColor(vn.colors.color13[i]);
		}
		
		//==================================================================================
		//language
		if(!vn.variables.languages[i]) vn.variables.languages[i] = note.getAttribute("language") ? note.getAttribute("language").toUpperCase() : "ENG"; 
		if(!vn.languageSet.hasOwnProperty(vn.variables.languages[i])) vn.variables.languages[i] = "ENG";
		
		//==================================================================================
		//using note function
		usingParagraphStyle = note.getAttribute("using-paragraph-style") === "false" ? false : true;
		usingBold = note.getAttribute("using-bold") === "false" ? false : true;
		usingUnderline = note.getAttribute("using-underline") === "false" ? false : true;
		usingItalic = note.getAttribute("using-italic") === "false" ? false : true;
		usingUl = note.getAttribute("using-ul") === "false" ? false : true;
		usingOl = note.getAttribute("using-ol") === "false" ? false : true;
		usingTextAlign = note.getAttribute("using-text-align") === "false" ? false : true;
		usingAttLink = note.getAttribute("using-att-link") === "false" ? false : true;
		usingAttFile = note.getAttribute("using-att-file") === "false" ? false : true;
		usingAttImage = note.getAttribute("using-att-image") === "false" ? false : true;
		usingAttVideo = note.getAttribute("using-att-video") === "false" ? false : true;
		usingFontSize = note.getAttribute("using-font-size") === "false" ? false : true;
		usingLetterSpacing = note.getAttribute("using-letter-spacing") === "false" ? false : true;
		usingLineHeight = note.getAttribute("using-line-height") === "false" ? false : true;
		usingFontFamily = note.getAttribute("using-font-family") === "false" ? false : true;
		usingColorText = note.getAttribute("using-color-text") === "false" ? false : true;
		usingColorBack = note.getAttribute("using-color-back") === "false" ? false : true;
		usingFormatClear = note.getAttribute("using-format-clear") === "false" ? false : true;
		usingUndo = note.getAttribute("using-undo") === "false" ? false : true;
		usingRedo = note.getAttribute("using-redo") === "false" ? false : true;
		usingHelp = note.getAttribute("using-help") === "false" ? false : true;
		
		if(note.getAttribute("using-paragraph-all-style") === "false") {
			usingParagraphStyle = false;
			usingUl = false;
			usingOl = false;
			usingTextAlign = false;
		}
		if(note.getAttribute("using-character-style") === "false") {
			usingBold = false;
			usingUnderline = false;
			usingItalic = false;
			usingFontFamily = false;
			usingColorText = false;
			usingColorBack = false;
			usingFormatClear = false;
		}
		if(note.getAttribute("using-character-size") === "false") {
			usingFontSize = false;
			usingLetterSpacing = false;
			usingLineHeight = false;
		}
		if(note.getAttribute("using-attach-file") === "false") {
			usingAttLink = false;
			usingAttFile = false;
			usingAttImage = false;
			usingAttVideo = false;
		}
		if(note.getAttribute("using-do") === "false") {
			usingUndo = false;
			usingRedo = false;
		}
		
		//==================================================================================
		//set style
		//==================================================================================
		vn.csses["template h1"][i] = vn.csses["template h1"][i] ? vn.csses["template h1"][i] : {
			"display" : "block",
			"font-size" : "2em",
			"line-height" : "1.2em",
			"font-weight" : "bold",
			"margin" : "1em 0",
			"padding" : "0 10px",
			};
			
		vn.csses["template h2"][i] = vn.csses["template h2"][i] ? vn.csses["template h2"][i] : {
			"display" : "block",
			"font-size" : "1.8em",
			"line-height" : "1.2em",
			"font-weight" : "bold",
			"margin" : "1em 0",
			"padding" : "0 10px",
			};
			
		vn.csses["template h3"][i] = vn.csses["template h3"][i] ? vn.csses["template h3"][i] : {
			"display" : "block",
			"font-size" : "1.6em",
			"line-height" : "1.2em",
			"font-weight" : "bold",
			"margin-top" : "1em",
			"margin-bottom" : "1em",
			"padding" : "0 10px",
			};
			
		vn.csses["template h4"][i] = vn.csses["template h4"][i] ? vn.csses["template h4"][i] : {
			"display" : "block",
			"font-size" : "1.4em",
			"line-height" : "1.2em",
			"font-weight" : "bold",
			"margin" : "1em 0",
			"padding" : "0 10px",
			};
			
		vn.csses["template h5"][i] = vn.csses["template h5"][i] ? vn.csses["template h5"][i] : {
			"display" : "block",
			"font-size" : "1.2em",
			"line-height" : "1.2em",
			"font-weight" : "bold",
			"margin" : "1em 0",
			"padding" : "0 10px",
			};
			
		vn.csses["template h6"][i] = vn.csses["template h6"][i] ? vn.csses["template h6"][i] : {
			"display" : "block",
			"font-size" : "1em",
			"line-height" : "1.2em",
			"font-weight" : "bold",
			"margin" : "1em 0",
			"padding" : "0 10px",
			};
			
		vn.csses["textarea ul"][i] = vn.csses["textarea ul"][i] ? vn.csses["textarea ul"][i] : {
			"display" : "block",
			"list-style-type" : "disc",
			"padding-left" : "40px",
			"margin" : "1em 0",
			};
			
		vn.csses["textarea ol"][i] = vn.csses["textarea ol"][i] ? vn.csses["textarea ol"][i] : {
			"display" : "block",
			"list-style-type" : "decimal",
			"padding-left" : "40px",
			"margin" : "1em 0",
			};
			
		vn.csses["textarea li"][i] = vn.csses["textarea li"][i] ? vn.csses["textarea li"][i] : {
			"display" : "list-item",
			"margin-top" : "0.5em",
			"margin-bottom" : "0.5em",
			"padding" : "0 10px",
			};
			
		vn.csses["textarea p"][i] = vn.csses["textarea p"][i] ? vn.csses["textarea p"][i] : {
			"display" : "block",
			"margin-top" : "1em",
			"margin-bottom" : "1em",
			"padding" : "0 10px",
			};
			
		vn.csses["textarea div"][i] = vn.csses["textarea div"][i] ? vn.csses["textarea div"][i] : {
			"display" : "block",
			"margin-top" : "1em",
			"margin-bottom" : "1em",
			"padding" : "0 10px",
			};
			
		vn.csses["textarea span"][i] = vn.csses["textarea span"][i] ? vn.csses["textarea span"][i] : {
			"display" : "inline",
			};
			
		vn.csses["textarea a"][i] = vn.csses["textarea a"][i] ? vn.csses["textarea a"][i] : {
			"display" : "inline",
			"color" : vn.colors.color11[i],
			"text-decoration" : "underline",
			};
			
		vn.csses["template"][i] = vn.csses["template"][i] ? vn.csses["template"][i] : {
			"width" : "100%",
			"height" : "100%",
			"position" : "relative",
			};
	
		vn.csses["textarea"][i] = vn.csses["textarea"][i] ? vn.csses["textarea"][i] : {
			"width" : vn.variables.textareaOriginWidths[i],
			"height" : vn.variables.textareaOriginHeights[i],
			"display" : "block",
			"margin" : "0 auto",
			"outline" : "none",
			"cursor" : "text",
			"text-align" : "left",
			"overflow" : "auto",
			"word-wrap" : "break-word",
			"resize": textareaHeightIsModify === "false" ? "none" : "vertical",
			"max-width" : textareaMaxWidth,
			"max-height" : textareaMaxHeight,
			"box-shadow" : "0 0.5px 1px 0.5px " + vn.colors.color7[i],
			"background-color" : vn.colors.color2[i],
			"font-size" : defaultFontSize + "px",
			"line-height" : defaultLineHeight + "px",
			"font-family" : defaultFontFamiliy,
			"color" : vn.colors.color12[i],
			"transition": "height 0.5s",
			};
		if(vn.variables.toolPositions[i] === "BOTTOM") {vn.csses["textarea"][i]["border-top"] = "0.5px solid " + vn.colors.color6[i]}
	
		vn.csses["tool"][i] = vn.csses["tool"][i] ? vn.csses["tool"][i] : {
			"width" : vn.variables.textareaOriginWidths[i],
			"height" : (vn.variables.toolDefaultLines[i] * (vn.variables.sizeRates[i] * 50)) + "px",
			"padding" : "2px 0",
			"max-width" : textareaMaxWidth,
			"display" : "block",
			"line-height" : (vn.variables.sizeRates[i] * 50) + "px",
			"margin" : "0 auto",
			"text-align" : "left",
			"vertical-align" : "middle",
			"box-shadow" : "0.25px 0.25px 1px 0.5px " + vn.colors.color7[i],
			"font-size" : (vn.variables.sizeRates[i] * (isNoteByMobile ? 18 : 16)) + "px",
			"background-color" : vn.colors.color3[i],
			"font-family" : defaultToolFontFamily,
			};
	
		vn.csses["icon"][i] = vn.csses["icon"][i] ? vn.csses["icon"][i] : {
			"font-size" : "1.3em",
			"-webkit-user-select" : "none",
			"-moz-user-select" : "none",
			"-ms-user-select" : "none",
			"user-select" : "none",
			"color" : vn.colors.color1[i],
			};
		
		vn.csses["button"][i] = vn.csses["button"][i] ? vn.csses["button"][i] : {
			"width" : (vn.variables.sizeRates[i] * 50) + "px",
			"height" : (vn.variables.sizeRates[i] * 45) + "px",
			"float" : "left",
			"display" : "inline-block",
			"cursor" : "pointer",
			"text-align" : "center",
			"margin" : "2px 2px",
			"border-radius" : "5px",
			"box-shadow" : "0.25px 0.25px 2px 0.25px " + vn.colors.color7[i],
			"background-color" : vn.colors.color4[i],
			"font-family" : defaultToolFontFamily,
			"position" : "relative",
			};
	
		vn.csses["select"][i] = vn.csses["select"][i] ? vn.csses["select"][i] : {
			"width" : (vn.variables.sizeRates[i] * 150) + "px",
			"height" : (vn.variables.sizeRates[i] * 45) + "px",
			"background-color" : vn.colors.color4[i],
			"float" : "left",
			"display" : "inline-block",
			"cursor" : "pointer",
			"text-align" : "center",
			"margin" : "2px 2px",
			"border-radius" : "5px",
			"box-shadow" : "0.25px 0.25px 2px 0.25px " + vn.colors.color7[i],
			"color" : vn.colors.color1[i],
			"position" : "relative",
			};
	
		vn.csses["select_box_a"][i] = vn.csses["select_box_a"][i] ? vn.csses["select_box_a"][i] : {
			"min-width" : (vn.variables.sizeRates[i] * 150) + "px",
			"background-color" : vn.colors.color4[i],
			"display" : "none",
			"float" : "left",
			"position" : "absolute",
			"cursor" : "pointer",
			"border-radius" : "5px",
			"box-shadow" : "0.25px 0.25px 0.1em " + vn.colors.color7[i], 
			"opacity" : "0.85",
			"z-index" : "200",
			};
		if(vn.variables.toolPositions[i] === "BOTTOM") {vn.csses["select_box_a"][i]["bottom"] = "110%"}
	
		vn.csses["select_box_b"][i] = vn.csses["select_box_b"][i] ? vn.csses["select_box_b"][i] : {
			"width" : (vn.variables.sizeRates[i] * 50) + "px",
			"display" : " none",
			"float" : "left",
			"position" : "absolute",
			"cursor" : "pointer",
			"border-radius" : "5px",
			"z-index" : "200",
			};
		if(vn.variables.toolPositions[i] === "BOTTOM") {vn.csses["select_box_b"][i]["bottom"] = "100%"}
		
		vn.csses["select_box_c"][i] = vn.csses["select_box_c"][i] ? vn.csses["select_box_c"][i] : {
			"width" : (vn.variables.sizeRates[i] * 220 + 30) + "px",
			"display" : "none",
			"padding" : "0 " + (vn.variables.sizeRates[i] * 10) + "px",
			"float" : "left",
			"position" : "absolute",
			"border-radius" : "5px",
			"box-shadow" : "0.25px 0.25px 0.1em " + vn.colors.color7[i],
			"background-color" : vn.colors.color4[i],
			"opacity" : "0.95",
			"cursor" : "text",
			"text-align" : "left",
			"z-index" : "200",
			};
		if(vn.variables.toolPositions[i] === "BOTTOM") {vn.csses["select_box_c"][i]["bottom"] = "110%"}
			
		vn.csses["select_list"][i] = vn.csses["select_list"][i] ? vn.csses["select_list"][i] : {
			"display" : "block",
			"height" : (vn.variables.sizeRates[i] * 45) + "px",
			"margin" : "0 !important",
			"line-height" : (vn.variables.sizeRates[i] * 45) + "px !important",
			"padding" : "3px 5px", 
			"cursor" : "pointer",
			"text-align" : "left",
			"overflow" : "hidden",
			};
		
		vn.csses["select_list_button"][i] = vn.csses["select_list_button"][i] ? vn.csses["select_list_button"][i] : {
			"width" : (vn.variables.sizeRates[i] * 50) + "px",
			"height" : (vn.variables.sizeRates[i] * 45) + "px",
			"background-color" : vn.colors.color4[i],
			"display" : "inline-block",
			"cursor" : "pointer",
			"border-radius" : "5px",
			"box-shadow" : "0px 0.25px 0.1em " + vn.colors.color7[i],
			};
		
		vn.csses["small_input_box"][i] = vn.csses["small_input_box"][i] ? vn.csses["small_input_box"][i] : {
			"width" : (vn.variables.sizeRates[i] * 120) + "px",
			"height" : (vn.variables.sizeRates[i] * 45) + "px",
			"background-color" : vn.colors.color4[i],
			"float" : "left",
			"overflow" : "hidden",
			"cursor" : "pointer",
			"display" : "inline-block",
			"text-align" : "center",
			"margin" : "2px 2px",
			"border-radius" : "5px",
			"box-shadow" : "0.25px 0.25px 2px 0.25px " + vn.colors.color7[i],
			};
	
		vn.csses["small_input"][i] = vn.csses["small_input"][i] ? vn.csses["small_input"][i] : {
			"width" : "30%",
			"background-color" : "rgba(0,0,0,0)",
			"color" : vn.colors.color1[i],
			"border" : "none",
			"border-radius" : "0",
			"text-align" : "right",
			"display" : "inline-block",
			"position" : "relative",
			"top" : "-4px",
			"margin-left" : "5px",
			"font-family" : defaultToolFontFamily,
			"cursor" : "text",
			"font-size" : "0.8em!important",
			};
		vn.csses["small_input:focus"][i] = vn.csses["small_input:focus"][i] ? vn.csses["small_input:focus"][i] : {
			"outline" : "none",
			};
		vn.csses["small_input::-webkit-inner-spin-button"][i] = vn.csses["small_input::-webkit-inner-spin-button"][i] ? vn.csses["small_input::-webkit-inner-spin-button"][i] : {
			"-webkit-appearance" : "none",
			"margin" : "0",
			};
		vn.csses["small_input::-webkit-outer-spin-button"][i] = vn.csses["small_input::-webkit-outer-spin-button"][i] ? vn.csses["small_input::-webkit-outer-spin-button"][i] : {
			"-webkit-appearance" : "none",
			"margin" : "0",
			};
		vn.csses["small_input[type=number]"][i] = vn.csses["small_input[type=number]"][i] ? vn.csses["small_input[type=number]"][i] : {
			"-moz-appearance" : "textfield",
			};
	
		vn.csses["placeholder"][i] = vn.csses["placeholder"][i] ? vn.csses["placeholder"][i] : {
			"width" : vn.variables.textareaOriginWidths[i],
			"padding" : "10px",
			"background-color" : placeholderBackgroundColor ? placeholderBackgroundColor : getRGBAFromHex(vn.colors.color3[i], 0.8),
			"color" : placeholderColor ? placeholderColor : vn.colors.color1[i],
			"display" : "none",
			"position" : "absolute",
			"z-index" : "100",
			"font-family" : defaultToolFontFamily,
			};
			
		vn.csses["help_main"][i] = vn.csses["help_main"][i] ? vn.csses["help_main"][i] : {
			"max-height" : vn.variables.textareaOriginHeights[i],
			"color" : vn.colors.color10[i],
			"overflow-y" : "auto",
			};
	
		vn.csses["modal_back"][i] = vn.csses["modal_back"][i] ? vn.csses["modal_back"][i] : {
			"background-color" : "rgba(0,0,0,0.5)",
			"display" : "none",
			"position" : "absolute",
			"z-index" : "300",
			"font-family" : defaultToolFontFamily,
			"color" : vn.colors.color1[i],
			"font-size" : (vn.variables.sizeRates[i] * (isNoteByMobile ? 18 : 16)) + "px",
			};
			
		vn.csses["modal_body"][i] = vn.csses["modal_body"][i] ? vn.csses["modal_body"][i] : {
			"width" : "80%",
			"margin" : "0 auto",
			"display" : "none",
			"text-align" : "left",
			"border" : "solid 1px " + vn.colors.color6[i],
			"border-radius" : "20px",
			"background-color" : vn.colors.color2[i],
			"" : "",
			};
		
		vn.csses["modal_header"][i] = vn.csses["modal_header"][i] ? vn.csses["modal_header"][i] : {
			"text-align" : "left",
			"padding-top" : (vn.variables.sizeRates[i] * 20) + "px",
			"padding-right" : (vn.variables.sizeRates[i] * 10) + "px",
			"padding-bottom" : (vn.variables.sizeRates[i] * 20) + "px",
			"padding-left" : (vn.variables.sizeRates[i] * 20) + "px",
			"margin-bottom" : (vn.variables.sizeRates[i] * 10) + "px",
			"background-color" : vn.colors.color4[i],
			"border-radius" : "20px 20px 0 0",
			"font-weight" : "bold",
			"font-size" : "1.05em",
			};
		
		vn.csses["modal_footer"][i] = vn.csses["modal_footer"][i] ? vn.csses["modal_footer"][i] : {
			"text-align" : "right",
			"margin-top" : (vn.variables.sizeRates[i] * 10) + "px",
			"padding-top" : (vn.variables.sizeRates[i] * 10) + "px",
			"padding-right" : (vn.variables.sizeRates[i] * 10) + "px",
			"padding-bottom" : (vn.variables.sizeRates[i] * 10) + "px",
			"padding-left" : (vn.variables.sizeRates[i] * 10) + "px",
			"border-top" : "1px solid " + vn.colors.color6[i],
			};
			
		vn.csses["modal_explain"][i] = vn.csses["modal_explain"][i] ? vn.csses["modal_explain"][i] : {
			"font-size" : "0.95em",
			"text-align" : "left",
			"padding-top" : (vn.variables.sizeRates[i] * 20) + "px",
			"padding-bottom" : (vn.variables.sizeRates[i] * 10) + "px",
			"padding-left" : (vn.variables.sizeRates[i] * 20) + "px",
			"display" : "inline-block",
			"color": vn.colors.color10[i],
			"font-family" : defaultToolFontFamily,
			};
	
		vn.csses["modal_input"][i] = vn.csses["modal_input"][i] ? vn.csses["modal_input"][i] : {
			"display" : "block",
			"width" : "80%",
			"background-color" : "rgba(0,0,0,0)",
			"font-family" : defaultToolFontFamily,
		    "color": vn.colors.color10[i],
			"border" : "none",
			"border-radius" : "0",
			"border-bottom" : "1px solid " + vn.colors.color6[i],
			"margin-bottom" : (vn.variables.sizeRates[i] * 10) + "px",
			"margin-left" : (vn.variables.sizeRates[i] * 20) + "px",
			"font-size" : "1.05em",
			"animation" : "vanillanote-modal-input 0.7s forwards"
			};
		vn.csses["modal_input:focus"][i] = vn.csses["modal_input:focus"][i] ? vn.csses["modal_input:focus"][i] : {
			"outline" : "none",
			};
		vn.csses["modal_input[readonly]"][i] = vn.csses["modal_input[readonly]"][i] ? vn.csses["modal_input[readonly]"][i] : {
			"background-color": "rgba(0,0,0,0.1)",
			};

		vn.csses["modal_small_input"][i] = vn.csses["modal_small_input"][i] ? vn.csses["modal_small_input"][i] : {
			"display" : "inline-block",
			"width" : "20%",
			"background-color" : "rgba(0,0,0,0)",
			"font-family" : defaultToolFontFamily,
		    "color": vn.colors.color10[i],
			"border" : "none",
		    "border-radius" : "0",
			"border-bottom" : "1px solid " + vn.colors.color6[i],
			"margin-bottom" : (vn.variables.sizeRates[i] * 10) + "px",
			"margin-left" : (vn.variables.sizeRates[i] * 20) + "px",
			"font-size" : "1.05em",
			"animation" : "vanillanote-modal-small-input 1s forwards"
			};
		vn.csses["modal_small_input:focus"][i] = vn.csses["modal_small_input:focus"][i] ? vn.csses["modal_small_input:focus"][i] : {
			"outline" : "none",
			};
		vn.csses["modal_small_input::-webkit-inner-spin-button"][i] = vn.csses["modal_small_input::-webkit-inner-spin-button"][i] ? vn.csses["modal_small_input::-webkit-inner-spin-button"][i] : {
			"appearance" : "none",
			"-moz-appearance" : "none",
			"-webkit-appearance" : "none",
			};
		vn.csses["modal_small_input::-webkit-outer-spin-button"][i] = vn.csses["modal_small_input::-webkit-outer-spin-button"][i] ? vn.csses["modal_small_input::-webkit-outer-spin-button"][i] : {
			"-webkit-appearance" : "none",
			"margin" : "0",
			};
		vn.csses["modal_small_input[type=number]"][i] = vn.csses["modal_small_input[type=number]"][i] ? vn.csses["modal_small_input[type=number]"][i] : {
			"-moz-appearance" : "textfield",
			};
		vn.csses["modal_small_input[readonly]"][i] = vn.csses["modal_small_input[readonly]"][i] ? vn.csses["modal_small_input[readonly]"][i] : {
			"background-color": vn.colors.color4[i],
			};
			
		vn.csses["modal_input_file"][i] = vn.csses["modal_input_file"][i] ? vn.csses["modal_input_file"][i] : {
			"display" : "none!important",
			};

		vn.csses["att_valid_checktext"][i] = vn.csses["att_valid_checktext"][i] ? vn.csses["att_valid_checktext"][i] : {
			"padding-right" : "10px",
			"font-size" : "0.7em",
			};
		
		vn.csses["att_link_is_blank_label"][i] = vn.csses["att_link_is_blank_label"][i] ? vn.csses["att_link_is_blank_label"][i] : {
			"font-size" : "0.95em",
			"text-align" : "left",
			"display" : "inline-block",
			"height" : "25px",
			"cursor" : "pointer",
			"margin-top" : (vn.variables.sizeRates[i] * 10) + "px",
			"margin-bottom" : (vn.variables.sizeRates[i] * 10) + "px",
			"margin-left" : (vn.variables.sizeRates[i] * 15) + "px",
			"color": vn.colors.color10[i],
			};
		
		vn.csses["input_checkbox"][i] = vn.csses["input_checkbox"][i] ? vn.csses["input_checkbox"][i] : {
			"cursor" : "pointer",
			"display": "inline-block",
		    "width" : "12px",
		    "height" : "12px",
		    "border-radius" : "3px",
		    "border" : "solid "+vn.colors.color6[i],
		    "border-width" : "1px 2px 2px 1px",
		    "transform" : "rotate(0deg)",
		    "transition": "transform 0.3s",
			};
		vn.csses["input_checkbox:focus"][i] = vn.csses["input_checkbox:focus"][i] ? vn.csses["input_checkbox:focus"][i] : {
			"outline" : "none!important",
			};
		vn.csses["input_checkbox[disabled]"][i] = vn.csses["input_checkbox[disabled]"][i] ? vn.csses["input_checkbox[disabled]"][i] : {
			"background-color": vn.colors.color4[i],
			};
			
		vn.csses["smallpx_input"][i] = vn.csses["smallpx_input"][i] ? vn.csses["smallpx_input"][i] : {
			"width" : "40px",
			"background-color" : "rgba(0,0,0,0)",
			"color" : vn.colors.color1[i],
			"border" : "none",
			"border-radius" : "5px",
			"text-align" : "right",
			"font-size" : "0.9em!important",
			"display" : "inline-block",
			"margin-left" : "5px",
			"font-family" : defaultToolFontFamily,
			};
		vn.csses["smallpx_input:focus"][i] = vn.csses["smallpx_input:focus"][i] ? vn.csses["smallpx_input:focus"][i] : {
			"outline" : "none",
			};
		vn.csses["smallpx_input::-webkit-inner-spin-button"][i] = vn.csses["smallpx_input::-webkit-inner-spin-button"][i] ? vn.csses["smallpx_input::-webkit-inner-spin-button"][i] : {
			"appearance" : "none",
			"-moz-appearance" : "none",
			"-webkit-appearance" : "none",
			};
			
		vn.csses["input_radio"][i] = vn.csses["input_radio"][i] ? vn.csses["input_radio"][i] : {
			"cursor" : "pointer",
			"display": "inline-block",
		    "width" : "12px",
		    "height" : "12px",
		    "border-radius" : "50%",
		    "border" : "solid 1px "+vn.colors.color6[i],
		    "transition": "transform 0.4s, background-color 0.6s;",
			};
		vn.csses["input_radio:focus"][i] = vn.csses["input_radio:focus"][i] ? vn.csses["input_radio:focus"][i] : {
			"outline" : "none!important",
			};
		vn.csses["input_radio:checked"][i] = vn.csses["input_radio:checked"][i] ? vn.csses["input_radio:checked"][i] : {
		    "background-color": vn.colors.color5[i],
		    "transform": "rotateY( 180deg )",
		    "transition": "transform 0.3s, background-color 0.5s;",
			};
		vn.csses["input_radio[disabled]"][i] = vn.csses["input_radio[disabled]"][i] ? vn.csses["input_radio[disabled]"][i] : {
			"background-color": vn.colors.color4[i],
			};
			
		vn.csses["drag_drop_div"][i] = vn.csses["drag_drop_div"][i] ? vn.csses["drag_drop_div"][i] : {
			"width" : "100%",
			"height" : vn.variables.sizeRates[i] * 120 + "px",
			"display" : "inline-block",
			"margin-top" : "10px",
			"border-radius" : "5px",
			"background-color" : vn.colors.color4[i],
			"border" : "solid 1px"+vn.colors.color6[i],
			"line-height" : vn.variables.sizeRates[i] * 130 + "px",
			"font-size" : "0.8em",
			"color" : getRGBAFromHex(vn.colors.color1[i], 0.8),
			"overflow-y" : "scroll",
			"cursor" : "pointer",
			};
			
		vn.csses["image_view_div"][i] = vn.csses["image_view_div"][i] ? vn.csses["image_view_div"][i] : {
			"width" : "80%",
			"height" : vn.variables.sizeRates[i] * 120 + "px",
			"display" : "inline-block",
			"margin-top" : "10px",
			"border-radius" : "5px",
			"background-color" : vn.colors.color4[i],
			"border" : "solid 1px"+vn.colors.color6[i],
			"line-height" : vn.variables.sizeRates[i] * 130 + "px",
			"font-size" : "0.8em",
			"color" : getRGBAFromHex(vn.colors.color1[i], 0.8),
			"cursor" : "pointer",
			"overflow" : "hidden",
			"white-space" : "nowrap",
			"scroll-behavior" : "smooth",
			};
			
		vn.csses["color_button"][i] = vn.csses["color_button"][i] ? vn.csses["color_button"][i] : {
			"width" : (vn.variables.sizeRates[i] * 50) * 0.5 + "px",
			"height" : (vn.variables.sizeRates[i] * 45) * 0.5 + "px",
			"float" : "left",
			"display" : "inline-block",
			"cursor" : "pointer",
			"text-align" : "center",
			"border-radius" : "5px",
			"margin-right" : "3px",
			"margin-bottom" : "5%",
			"border" : "1px solid " + vn.colors.color1[i],
			"box-shadow" : "0.25px 0.25px 2px 0.25px " + vn.colors.color7[i],
			"position" : "relative",
			};
			
		vn.csses["color_input"][i] = vn.csses["color_input"][i] ? vn.csses["color_input"][i] : {
			"display" : "inline-block",
			"background-color" : "rgba(0,0,0,0)",
			"width" : (vn.variables.sizeRates[i] * 25) + "px",
			"height" : (vn.variables.sizeRates[i] * 40) + "px",
			"font-size" : "0.7em!important",
		    "color": vn.colors.color1[i],
			"border" : "none",
			"border-radius" : "5px",
			"text-align" : "right",
			"margin-right" : (vn.variables.sizeRates[i] * 8) + "px",
			"margin-left" : (vn.variables.sizeRates[i] * 2) + "px",
			"font-family" : defaultToolFontFamily,
			};
		vn.csses["color_input:focus"][i] = vn.csses["color_input:focus"][i] ? vn.csses["color_input:focus"][i] : {
			"outline" : "none",
			};
		vn.csses["color_input::-webkit-inner-spin-button"][i] = vn.csses["color_input::-webkit-inner-spin-button"][i] ? vn.csses["color_input::-webkit-inner-spin-button"][i] : {
			"appearance" : "none",
			"-moz-appearance" : "none",
			"-webkit-appearance" : "none",
			};
			
		vn.csses["color_explain"][i] = vn.csses["color_explain"][i] ? vn.csses["color_explain"][i] : {
			"display" : "inline-block",
			"height" : (vn.variables.sizeRates[i] * 25) + "px",
			"color": vn.colors.color1[i],
			"font-family" : defaultToolFontFamily,
			"font-size" : "0.7em",
			};
		
		vn.csses["normal_button"][i] = vn.csses["normal_button"][i] ? vn.csses["normal_button"][i] : {
			"min-width" : (vn.variables.sizeRates[i] * 50) + "px",
			"height" : (vn.variables.sizeRates[i] * 45) + "px",
			"font-size" : "0.8em",
			"padding" : "0 15px",
			"display" : "inline-block",
			"cursor" : "pointer",
			"text-align" : "center",
			"border-radius" : "5px",
			"border" : "none",
			"box-shadow" : "0.25px 0.25px 2px 0.25px " + vn.colors.color7[i],
			"color" : vn.colors.color1[i],
			"font-family" : defaultToolFontFamily,
			"background-color" : vn.colors.color4[i],
			};
			
		vn.csses["opacity_button"][i] = vn.csses["opacity_button"][i] ? vn.csses["opacity_button"][i] : {
			"min-width" : (vn.variables.sizeRates[i] * 40) + "px",
			"height" : (vn.variables.sizeRates[i] * 40) + "px",
			"font-size" : "0.7em",
			"display" : "inline-block",
			"cursor" : "pointer",
			"text-align" : "center",
			"border-radius" : "5px",
			"border" : "none",
			"color" : vn.colors.color1[i],
			"font-family" : defaultToolFontFamily,
			"background-color" : getRGBAFromHex(vn.colors.color4[i], 0.5),
			};
			
		vn.csses["small_text_box"][i] = vn.csses["small_text_box"][i] ? vn.csses["small_text_box"][i] : {
			"display" : "inline-block",
			"padding" : "0 10px",
			"font-size" : "0.8em",
			"color" : vn.colors.color1[i],
			},
			
		vn.csses["tooltip"][i] = vn.csses["tooltip"][i] ? vn.csses["tooltip"][i] : {
			"width" : vn.variables.textareaOriginWidths[i],
			"max-width" : textareaMaxWidth,
			"margin" : "0 auto",
			"padding" : "2px 0",
			"background-color" : vn.colors.color3[i],
			"border" : "solid 1px " + vn.colors.color5[i],
			"height": "0",
			"overflow" : "hidden",
			"opacity" : "0",
			"transition": "opacity 0.6s, height 0.6s",
			"position" : "absolute",
		    "left": "50%",
		    "transform": "translateX(-50%)",
			"z-index" : "100",
			"text-align" : "left",
			"font-family" : defaultToolFontFamily,
			"font-size" : "0.9em",
			},
		vn.csses["tooltip_button"][i] = vn.csses["tooltip_button"][i] ? vn.csses["tooltip_button"][i] : {
			"width" : (vn.variables.sizeRates[i] * 50) * 0.7 + "px",
			"height" : (vn.variables.sizeRates[i] * 45) * 0.7 + "px",
			"float" : "left",
			"display" : "inline-block",
			"cursor" : "pointer",
			"text-align" : "center",
			"margin" : "2px 2px",
			"border-radius" : "5px",
			"box-shadow" : "0.25px 0.25px 2px 0.25px " + vn.colors.color7[i],
			"background-color" : vn.colors.color4[i],
			"position" : "relative",
			};
		vn.csses["att_link_tooltip_href"][i] = vn.csses["att_link_tooltip_href"][i] ? vn.csses["att_link_tooltip_href"][i] : {
			"cursor" : "pointer",
			"float" : "left",
			"padding" : "0 10px",
			"color" : vn.colors.color11[i],
			"text-decoration" : "underline",
			"font-size" : "0.9em",
			"line-height" : (vn.variables.sizeRates[i] * 45) * 0.8 + "px",
			},
			
		vn.csses["on_button_on"][i] = vn.csses["on_button_on"][i] ? vn.csses["on_button_on"][i] : {
			"background-color" : vn.colors.color5[i] + "!important",
			"box-shadow" : "0.25px 0.25px 0.25px 0.25px " + vn.colors.color7[i],
			},
			
		vn.csses["on_active"][i] = vn.csses["on_active"][i] ? vn.csses["on_active"][i] : {
			"background-color" : vn.colors.color5[i] + "!important",
			"box-shadow" : "0.25px 0.25px 0.25px 0.25px " + vn.colors.color7[i],
			},
			
		vn.csses["on_mouseover"][i] = vn.csses["on_mouseover"][i] ? vn.csses["on_mouseover"][i] : {
			"background-color" : vn.colors.color5[i] + "!important",
			},
			
		vn.csses["on_mouseout"][i] = vn.csses["on_mouseout"][i] ? vn.csses["on_mouseout"][i] : {
			"background-color" : vn.colors.color4[i] + "!important",
			},
			
		vn.csses["on_display_inline"][i] = vn.csses["on_display_inline"][i] ? vn.csses["on_display_inline"][i] : {
			"display":"inline"
			},
			
		vn.csses["on_display_inline_block"][i] = vn.csses["on_display_inline_block"][i] ? vn.csses["on_display_inline_block"][i] : {
			"display":"inline-block"
			},
			
		vn.csses["on_display_block"][i] = vn.csses["on_display_block"][i] ? vn.csses["on_display_block"][i] : {
			"display":"block"
			},
			
		vn.csses["on_display_none"][i] = vn.csses["on_display_none"][i] ? vn.csses["on_display_none"][i] : {
			"display":"none"
			},
			
		//==================================================================================
		//create element css text
		//element css
  		cssKeys = Object.keys(vn.csses);
  		for(var j = 0; j < cssKeys.length; j++) {
			cssText = cssText + getCssClassText(i, cssKeys[j], (vn.csses as any)[cssKeys[j]][i]) + "\n";
  		}
  		
		//==================================================================================
		//template
		template = createElement(template, "div", vn.consts.CLASS_NAMES.template.id, vn.consts.CLASS_NAMES.template.className, i);
		template.style.display = "none";
		//==================================================================================
 		//textarea
		textarea = createElementBasic(textarea, vn.variables.noteName+"-textarea", vn.consts.CLASS_NAMES.textarea.id, vn.consts.CLASS_NAMES.textarea.className, i);
		textarea.setAttribute("contenteditable",true);
		textarea.setAttribute("role","textbox");
		textarea.setAttribute("aria-multiline",true);
		textarea.setAttribute("spellcheck",true);
		textarea.setAttribute("autocorrect",true);
		textarea.setAttribute("name",getId(i, vn.consts.CLASS_NAMES.textarea.id));
		textarea.setAttribute("title",vn.languageSet[vn.variables.languages[i]].textareaTooltip);	//COMMENT
		
 		textarea.addEventListener("click", function(event: any) {
 			consoleLog("vn.elementEvents." + "textarea_onBeforeClick", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.textarea_onBeforeClick(event)) return;
 			
 			consoleLog("textarea_onClick", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["textarea_onClick"](event);
 			
 			consoleLog("vn.elementEvents." + "textarea_onAfterClick", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.textarea_onAfterClick(event);
 			event.stopImmediatePropagation();
 		});
 		textarea.addEventListener("focus", function(event: any) {
 			consoleLog("vn.elementEvents." + "textarea_onBeforeFocus", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.textarea_onBeforeFocus(event)) return;
 			
 			consoleLog("textarea_onFocus", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["textarea_onFocus"](event);
 			
 			consoleLog("vn.elementEvents." + "textarea_onAfterFocus", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.textarea_onAfterFocus(event);
 			event.stopImmediatePropagation();
 		});
 		textarea.addEventListener(vn.variables.isIOS ? "mouseout" : "blur", function(event: any) {
 			consoleLog("vn.elementEvents." + "textarea_onBeforeBlur", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.textarea_onBeforeBlur(event)) return;
 			
 			consoleLog("textarea_onBlur", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["textarea_onBlur"](event);
 			
 			consoleLog("vn.elementEvents." + "textarea_onAfterBlur", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.textarea_onAfterBlur(event);
 			event.stopImmediatePropagation();
 		});
 		textarea.addEventListener("keydown", function(event: any) {
 			consoleLog("textarea_onKeydown", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["textarea_onKeydown"](event);
 			event.stopImmediatePropagation();
		});
 		textarea.addEventListener("keyup", function(event: any) {
 			consoleLog("textarea_onKeyup", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["textarea_onKeyup"](event);
 			event.stopImmediatePropagation();
		});
 	    textarea.addEventListener("beforeinput", function(event: any) {
 	       	consoleLog("textarea_onBeforeinput", "params :" , "(event)", event, "(target)", event.target);
 	       	elementsEvent["textarea_onBeforeinput"](event);
 	       	event.stopImmediatePropagation();
 	    });

 		elementsEvent["note_observer"].observe(textarea, vn.variables.observerOptions);
 		
 		//Create the first <p> tag
 		initTextarea(textarea);
 		
		//==================================================================================
		//tool
		//==================================================================================
		tool = createElement(tool, "div", vn.consts.CLASS_NAMES.tool.id, vn.consts.CLASS_NAMES.tool.className, i);
		//==================================================================================
		//tool toggle
		toolToggleButton = createElementButton(toolToggleButton, "span", vn.consts.CLASS_NAMES.toolToggleButton.id, vn.consts.CLASS_NAMES.toolToggleButton.className, i, {"isIcon":true, "text":"arrow_drop_down"});
		//==================================================================================
		//paragraph style
		paragraphStyleSelect = createElementSelect(paragraphStyleSelect, "span", vn.consts.CLASS_NAMES.paragraphStyleSelect.id, vn.consts.CLASS_NAMES.paragraphStyleSelect.className, i, {"isIcon":true, "text":"auto_fix_high"});
		paragraphStyleSelect.setAttribute("title",vn.languageSet[vn.variables.languages[i]].styleTooltip);	//COMMENT
		paragraphStyleSelectBox = createElementSelectBox(paragraphStyleSelectBox, "div", vn.consts.CLASS_NAMES.paragraphStyleSelectBox.id, vn.consts.CLASS_NAMES.paragraphStyleSelectBox.className, i);
		paragraphStyleSelect.appendChild(paragraphStyleSelectBox);
		tempElement1 = createElementButton(tempElement1, "div", vn.consts.CLASS_NAMES.styleNomal.id, vn.consts.CLASS_NAMES.styleNomal.className, i, {"isIcon":false, "text":"Normal"});
		tempElement1.setAttribute("data-tag-name","p");
		paragraphStyleSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "h1", vn.consts.CLASS_NAMES.styleHeader1.id, vn.consts.CLASS_NAMES.styleHeader1.className, i, {"isIcon":false, "text":"Header1"});
		tempElement1.setAttribute("data-tag-name","H1");
		paragraphStyleSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "h2", vn.consts.CLASS_NAMES.styleHeader2.id, vn.consts.CLASS_NAMES.styleHeader2.className, i, {"isIcon":false, "text":"Header2"});
		tempElement1.setAttribute("data-tag-name","H2");
		paragraphStyleSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "h3", vn.consts.CLASS_NAMES.styleHeader3.id, vn.consts.CLASS_NAMES.styleHeader3.className, i, {"isIcon":false, "text":"Header3"});
		tempElement1.setAttribute("data-tag-name","H3");
		paragraphStyleSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "h4", vn.consts.CLASS_NAMES.styleHeader4.id, vn.consts.CLASS_NAMES.styleHeader4.className, i, {"isIcon":false, "text":"Header4"});
		tempElement1.setAttribute("data-tag-name","H4");
		paragraphStyleSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "h5", vn.consts.CLASS_NAMES.styleHeader5.id, vn.consts.CLASS_NAMES.styleHeader5.className, i, {"isIcon":false, "text":"Header5"});
		tempElement1.setAttribute("data-tag-name","H5");
		paragraphStyleSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "h6", vn.consts.CLASS_NAMES.styleHeader6.id, vn.consts.CLASS_NAMES.styleHeader6.className, i, {"isIcon":false, "text":"Header6"});
		tempElement1.setAttribute("data-tag-name","H6");
		paragraphStyleSelectBox.appendChild(tempElement1);
		//==================================================================================
		//bold
		boldButton = createElementButton(boldButton, "span", vn.consts.CLASS_NAMES.boldButton.id, vn.consts.CLASS_NAMES.boldButton.className, i, {"isIcon":true, "text":"format_bold"});
		boldButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].boldTooltip);	//COMMENT
		//==================================================================================
		//under-line
		underlineButton = createElementButton(underlineButton, "span", vn.consts.CLASS_NAMES.underlineButton.id, vn.consts.CLASS_NAMES.underlineButton.className, i, {"isIcon":true, "text":"format_underlined"});
		underlineButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].underlineTooltip);	//COMMENT
		//==================================================================================
		//italic
		italicButton = createElementButton(italicButton, "span", vn.consts.CLASS_NAMES.italicButton.id, vn.consts.CLASS_NAMES.italicButton.className, i, {"isIcon":true, "text":"format_italic"});
		italicButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].italicTooltip);
		//==================================================================================
		//ul
		ulButton = createElementButton(italicButton, "span", vn.consts.CLASS_NAMES.ulButton.id, vn.consts.CLASS_NAMES.ulButton.className, i, {"isIcon":true, "text":"format_list_bulleted"});
		ulButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].ulTooltip);
		ulButton.setAttribute("data-tag-name","UL");
		//==================================================================================
		//ol
		olButton = createElementButton(ulButton, "span", vn.consts.CLASS_NAMES.olButton.id, vn.consts.CLASS_NAMES.olButton.className, i, {"isIcon":true, "text":"format_list_numbered"});
		olButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].olTooltip);
		olButton.setAttribute("data-tag-name","OL");
		//==================================================================================
		//text-align
		textAlignSelect = createElementSelect(textAlignSelect, "span",  vn.consts.CLASS_NAMES.textAlignSelect.id, vn.consts.CLASS_NAMES.textAlignSelect.className, i, {"isIcon":true, "text":"notes"});
		textAlignSelect.setAttribute("title",vn.languageSet[vn.variables.languages[i]].textAlignTooltip);	//COMMENT
		textAlignSelectBox = createElementSelectBox(textAlignSelectBox, "div", vn.consts.CLASS_NAMES.textAlignSelectBox.id, vn.consts.CLASS_NAMES.textAlignSelectBox.className, i);
		textAlignSelect.appendChild(textAlignSelectBox);
		tempElement1 = createElementButton(tempElement1, "span", vn.consts.CLASS_NAMES.textAlignLeft.id, vn.consts.CLASS_NAMES.textAlignLeft.className, i, {"isIcon":true, "text":"format_align_left"});
		tempElement1.setAttribute("data-tag-style","text-align:left;");
		textAlignSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "span", vn.consts.CLASS_NAMES.textAlignCenter.id, vn.consts.CLASS_NAMES.textAlignCenter.className, i, {"isIcon":true, "text":"format_align_center"});
		tempElement1.setAttribute("data-tag-style","text-align:center;");
		textAlignSelectBox.appendChild(tempElement1);
		tempElement1 = createElementButton(tempElement1, "span", vn.consts.CLASS_NAMES.textAlignRight.id, vn.consts.CLASS_NAMES.textAlignRight.className, i, {"isIcon":true, "text":"format_align_right"});
		tempElement1.setAttribute("data-tag-style","text-align:right;");
		textAlignSelectBox.appendChild(tempElement1);
		//==================================================================================
		//att link
		attLinkButton = createElementButton(attLinkButton, "span", vn.consts.CLASS_NAMES.attLinkButton.id, vn.consts.CLASS_NAMES.attLinkButton.className, i, {"isIcon":true, "text":"link"});
		attLinkButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attLinkTooltip);	//COMMENT
		//==================================================================================
		//att file
		attFileButton = createElementButton(attFileButton, "span", vn.consts.CLASS_NAMES.attFileButton.id, vn.consts.CLASS_NAMES.attFileButton.className, i, {"isIcon":true, "text":"attach_file"});
		attFileButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attFileTooltip);	//COMMENT
		//==================================================================================
		//att image
		attImageButton = createElementButton(attImageButton, "span", vn.consts.CLASS_NAMES.attImageButton.id, vn.consts.CLASS_NAMES.attImageButton.className, i, {"isIcon":true, "text":"image"});
		attImageButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attImageTooltip);	//COMMENT
		//==================================================================================
		//att video
		attVideoButton = createElementButton(attVideoButton, "span", vn.consts.CLASS_NAMES.attVideoButton.id, vn.consts.CLASS_NAMES.attVideoButton.className, i, {"isIcon":true, "text":"videocam"});
		attVideoButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attVideoTooltip);	//COMMENT
		//==================================================================================
		//font size
		fontSizeInputBox = createElementButton(fontSizeInputBox, "span", vn.consts.CLASS_NAMES.fontSizeInputBox.id, vn.consts.CLASS_NAMES.fontSizeInputBox.className, i, {"isIcon":true, "text":"format_size"});
		fontSizeInput = createElementInput(fontSizeInput, vn.consts.CLASS_NAMES.fontSizeInput.id, vn.consts.CLASS_NAMES.fontSizeInput.className, i);
		fontSizeInput.setAttribute("type","number");
		fontSizeInput.setAttribute("title",vn.languageSet[vn.variables.languages[i]].fontSizeTooltip);	//COMMENT
		addClickEvent(fontSizeInput, vn.consts.CLASS_NAMES.fontSizeInput.id);
		fontSizeInputBox.appendChild(fontSizeInput);
		//==================================================================================
		//letter spacing
		letterSpacingInputBox = createElementButton(letterSpacingInputBox, "span", vn.consts.CLASS_NAMES.letterSpacingInputBox.id, vn.consts.CLASS_NAMES.letterSpacingInputBox.className, i, {"isIcon":true, "text":"swap_horiz"});
		letterSpacingInput = createElementInput(letterSpacingInput, vn.consts.CLASS_NAMES.letterSpacingInput.id, vn.consts.CLASS_NAMES.letterSpacingInput.className, i);
		letterSpacingInput.setAttribute("type","number");
		letterSpacingInput.setAttribute("title",vn.languageSet[vn.variables.languages[i]].letterSpacingTooltip);	//COMMENT
		addClickEvent(letterSpacingInput, vn.consts.CLASS_NAMES.letterSpacingInput.id);
		letterSpacingInputBox.appendChild(letterSpacingInput);
		//==================================================================================
		//line height
		lineHeightInputBox = createElementButton(lineHeightInputBox, "span", vn.consts.CLASS_NAMES.lineHeightInputBox.id, vn.consts.CLASS_NAMES.lineHeightInputBox.className, i, {"isIcon":true, "text":"height"});
		lineHeightInput = createElementInput(lineHeightInput, vn.consts.CLASS_NAMES.lineHeightInput.id, vn.consts.CLASS_NAMES.lineHeightInput.className, i);
		lineHeightInput.setAttribute("type","number");
		lineHeightInput.setAttribute("title",vn.languageSet[vn.variables.languages[i]].lineHeightTooltip);	//COMMENT
		addClickEvent(lineHeightInput, vn.consts.CLASS_NAMES.lineHeightInput.id);
		lineHeightInputBox.appendChild(lineHeightInput);
		//==================================================================================
		//font style(font family)
		fontFamilySelect = createElementSelect(fontFamilySelect, "span", vn.consts.CLASS_NAMES.fontFamilySelect.id, vn.consts.CLASS_NAMES.fontFamilySelect.className, i, {"isIcon":false, "text":defaultFontFamiliy.length > 12 ? defaultFontFamiliy.substr(0,12) + "..." : defaultFontFamiliy});
		fontFamilySelect.setAttribute("style","font-family:" + defaultFontFamiliy + ";");
		fontFamilySelect.setAttribute("title",vn.languageSet[vn.variables.languages[i]].fontFamilyTooltip);	//COMMENT
		fontFamilySelectBox = createElementSelectBox(fontFamilySelectBox, "div", vn.consts.CLASS_NAMES.fontFamilySelectBox.id, vn.consts.CLASS_NAMES.fontFamilySelectBox.className, i);
		fontFamilySelect.appendChild(fontFamilySelectBox);
		
		for(var fontIdx = 0; fontIdx < defaultFontFamilies.length; fontIdx++) {
			tempElement1 = createElementFontFamiliySelect(tempElement1, "div", vn.consts.CLASS_NAMES.fontFamily.id + fontIdx, vn.consts.CLASS_NAMES.fontFamily.className, i, {"isIcon":false, "text":defaultFontFamilies[fontIdx]});
			tempElement1.setAttribute("data-font-family",defaultFontFamilies[fontIdx]);
			tempElement1.setAttribute("style", "font-family:" + defaultFontFamilies[fontIdx] + ";");
			fontFamilySelectBox.appendChild(tempElement1);
		}
		//==================================================================================
		//color text select
		colorTextSelect = createElementSelect(colorTextSelect, "span", vn.consts.CLASS_NAMES.colorTextSelect.id, vn.consts.CLASS_NAMES.colorTextSelect.className, i, {"isIcon":true, "text":"format_color_text", "iconStyle" : "-webkit-text-stroke: 0.5px black; font-size: 1.1em"});
		colorTextSelect.setAttribute("title",vn.languageSet[vn.variables.languages[i]].colorTextTooltip);	//COMMENT
		colorTextSelectBox = createElementSelectBox(colorTextSelectBox, "div", vn.consts.CLASS_NAMES.colorTextSelectBox.id, vn.consts.CLASS_NAMES.colorTextSelectBox.className, i);
		colorTextSelect.appendChild(colorTextSelectBox);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorTextRExplain.id, vn.consts.CLASS_NAMES.colorTextRExplain.className, i, {"isIcon":false, "text":"R"});	//COMMENT
		tempElement1.style.paddingLeft = (vn.variables.sizeRates[i] * 8) + "px";
		colorTextSelectBox.appendChild(tempElement1);
		colorTextRInput = createElementInput(colorTextRInput, vn.consts.CLASS_NAMES.colorTextRInput.id, vn.consts.CLASS_NAMES.colorTextRInput.className, i);
		colorTextRInput.setAttribute("maxlength", "2");
		addClickEvent(colorTextRInput, vn.consts.CLASS_NAMES.colorTextRInput.id);
		colorTextSelectBox.appendChild(colorTextRInput);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorTextGExplain.id, vn.consts.CLASS_NAMES.colorTextGExplain.className, i, {"isIcon":false, "text":"G"});	//COMMENT
		colorTextSelectBox.appendChild(tempElement1);
		colorTextGInput = createElementInput(colorTextGInput, vn.consts.CLASS_NAMES.colorTextGInput.id, vn.consts.CLASS_NAMES.colorTextGInput.className, i);
		colorTextGInput.setAttribute("maxlength", "2");
		addClickEvent(colorTextGInput, vn.consts.CLASS_NAMES.colorTextGInput.id);
		colorTextSelectBox.appendChild(colorTextGInput);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorTextBExplain.id, vn.consts.CLASS_NAMES.colorTextBExplain.className, i, {"isIcon":false, "text":"B"});	//COMMENT
		colorTextSelectBox.appendChild(tempElement1);
		colorTextBInput = createElementInput(colorTextBInput, vn.consts.CLASS_NAMES.colorTextBInput.id, vn.consts.CLASS_NAMES.colorTextBInput.className, i);
		colorTextBInput.setAttribute("maxlength", "2");
		addClickEvent(colorTextBInput, vn.consts.CLASS_NAMES.colorTextBInput.id);
		colorTextSelectBox.appendChild(colorTextBInput);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorTextOpacityExplain.id, vn.consts.CLASS_NAMES.colorTextOpacityExplain.className, i, {"isIcon":false, "text":"Opacity"});	//COMMENT
		colorTextSelectBox.appendChild(tempElement1);
		colorTextOpacityInput = createElementInput(colorTextOpacityInput, vn.consts.CLASS_NAMES.colorTextOpacityInput.id, vn.consts.CLASS_NAMES.colorTextOpacityInput.className, i);
		colorTextOpacityInput.setAttribute("type","number");
		colorTextOpacityInput.setAttribute("maxlength", "3");
		addClickEvent(colorTextOpacityInput, vn.consts.CLASS_NAMES.colorTextOpacityInput.id);
		colorTextSelectBox.appendChild(colorTextOpacityInput);
		tempElement1 = document.createElement("br");
		colorTextSelectBox.appendChild(tempElement1);
		colorText0 = createElementBasic(colorText0, "div", vn.consts.CLASS_NAMES.colorText0.id, vn.consts.CLASS_NAMES.colorText0.className, i);
		colorText0.style.backgroundColor = vn.colors.color12[i];
		colorTextSelectBox.appendChild(colorText0);
		colorText1 = createElementBasic(colorText1, "div", vn.consts.CLASS_NAMES.colorText1.id, vn.consts.CLASS_NAMES.colorText1.className, i);
		colorText1.style.backgroundColor = vn.colors.color14[i];
		colorTextSelectBox.appendChild(colorText1);
		colorText2 = createElementBasic(colorText2, "div", vn.consts.CLASS_NAMES.colorText2.id, vn.consts.CLASS_NAMES.colorText2.className, i);
		colorText2.style.backgroundColor = vn.colors.color15[i];
		colorTextSelectBox.appendChild(colorText2);
		colorText3 = createElementBasic(colorText3, "div", vn.consts.CLASS_NAMES.colorText3.id, vn.consts.CLASS_NAMES.colorText3.className, i);
		colorText3.style.backgroundColor = vn.colors.color16[i];
		colorTextSelectBox.appendChild(colorText3);
		colorText4 = createElementBasic(colorText4, "div", vn.consts.CLASS_NAMES.colorText4.id, vn.consts.CLASS_NAMES.colorText4.className, i);
		colorText4.style.backgroundColor = vn.colors.color17[i];
		colorTextSelectBox.appendChild(colorText4);
		colorText5 = createElementBasic(colorText5, "div", vn.consts.CLASS_NAMES.colorText5.id, vn.consts.CLASS_NAMES.colorText5.className, i);
		colorText5.style.backgroundColor = vn.colors.color18[i];
		colorTextSelectBox.appendChild(colorText5);
		colorText6 = createElementBasic(colorText6, "div", vn.consts.CLASS_NAMES.colorText6.id, vn.consts.CLASS_NAMES.colorText6.className, i);
		colorText6.style.backgroundColor = vn.colors.color19[i];
		colorTextSelectBox.appendChild(colorText6);
		colorText7 = createElementBasic(colorText7, "div", vn.consts.CLASS_NAMES.colorText7.id, vn.consts.CLASS_NAMES.colorText7.className, i);
		colorText7.style.backgroundColor = vn.colors.color20[i];
		colorTextSelectBox.appendChild(colorText7);
		//==================================================================================
		//color background select
		colorBackSelect = createElementSelect(colorBackSelect, "span", vn.consts.CLASS_NAMES.colorBackSelect.id, vn.consts.CLASS_NAMES.colorBackSelect.className, i, {"isIcon":true, "text":"format_color_fill", "iconStyle" : "font-size: 1.1em; -webkit-text-stroke: 0.5px " + vn.colors.color1[i]+";"});
		colorBackSelect.setAttribute("title",vn.languageSet[vn.variables.languages[i]].colorBackTooltip);	//COMMENT
		colorBackSelectBox = createElementSelectBox(colorBackSelectBox, "div", vn.consts.CLASS_NAMES.colorBackSelectBox.id, vn.consts.CLASS_NAMES.colorBackSelectBox.className, i);
		colorBackSelect.appendChild(colorBackSelectBox);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorBackRExplain.id, vn.consts.CLASS_NAMES.colorBackRExplain.className, i, {"isIcon":false, "text":"R"});	//COMMENT
		tempElement1.style.paddingLeft = (vn.variables.sizeRates[i] * 8) + "px";
		colorBackSelectBox.appendChild(tempElement1);
		colorBackRInput = createElementInput(colorBackRInput, vn.consts.CLASS_NAMES.colorBackRInput.id, vn.consts.CLASS_NAMES.colorBackRInput.className, i);
		colorBackRInput.setAttribute("maxlength", "2");
		addClickEvent(colorBackRInput, vn.consts.CLASS_NAMES.colorBackRInput.id);
		colorBackSelectBox.appendChild(colorBackRInput);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorBackGExplain.id, vn.consts.CLASS_NAMES.colorBackGExplain.className, i, {"isIcon":false, "text":"G"});	//COMMENT
		colorBackSelectBox.appendChild(tempElement1);
		colorBackGInput = createElementInput(colorBackGInput, vn.consts.CLASS_NAMES.colorBackGInput.id, vn.consts.CLASS_NAMES.colorBackGInput.className, i);
		colorBackGInput.setAttribute("maxlength", "2");
		addClickEvent(colorBackGInput, vn.consts.CLASS_NAMES.colorBackGInput.id);
		colorBackSelectBox.appendChild(colorBackGInput);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorBackBExplain.id, vn.consts.CLASS_NAMES.colorBackBExplain.className, i, {"isIcon":false, "text":"B"});	//COMMENT
		colorBackSelectBox.appendChild(tempElement1);
		colorBackBInput = createElementInput(colorBackBInput, vn.consts.CLASS_NAMES.colorBackBInput.id, vn.consts.CLASS_NAMES.colorBackBInput.className, i);
		colorBackBInput.setAttribute("maxlength", "2");
		addClickEvent(colorBackBInput, vn.consts.CLASS_NAMES.colorBackBInput.id);
		colorBackSelectBox.appendChild(colorBackBInput);
		tempElement1 = createElement(tempElement1, "span", vn.consts.CLASS_NAMES.colorBackOpacityExplain.id, vn.consts.CLASS_NAMES.colorBackOpacityExplain.className, i, {"isIcon":false, "text":"Opacity"});	//COMMENT
		colorBackSelectBox.appendChild(tempElement1);
		colorBackOpacityInput = createElementInput(colorBackOpacityInput, vn.consts.CLASS_NAMES.colorBackOpacityInput.id, vn.consts.CLASS_NAMES.colorBackOpacityInput.className, i);
		colorBackOpacityInput.setAttribute("type","number");
		colorBackOpacityInput.setAttribute("maxlength", "3");
		addClickEvent(colorBackOpacityInput, vn.consts.CLASS_NAMES.colorBackOpacityInput.id);
		colorBackSelectBox.appendChild(colorBackOpacityInput);
		tempElement1 = document.createElement("br");
		colorBackSelectBox.appendChild(tempElement1);
		colorBack0 = createElementBasic(colorBack0, "div", vn.consts.CLASS_NAMES.colorBack0.id, vn.consts.CLASS_NAMES.colorBack0.className, i);
		colorBack0.style.backgroundColor = vn.colors.color13[i];
		colorBackSelectBox.appendChild(colorBack0);
		colorBack1 = createElementBasic(colorBack1, "div", vn.consts.CLASS_NAMES.colorBack1.id, vn.consts.CLASS_NAMES.colorBack1.className, i);
		colorBack1.style.backgroundColor = vn.colors.color14[i];
		colorBackSelectBox.appendChild(colorBack1);
		colorBack2 = createElementBasic(colorBack2, "div", vn.consts.CLASS_NAMES.colorBack2.id, vn.consts.CLASS_NAMES.colorBack2.className, i);
		colorBack2.style.backgroundColor = vn.colors.color15[i];
		colorBackSelectBox.appendChild(colorBack2);
		colorBack3 = createElementBasic(colorBack3, "div", vn.consts.CLASS_NAMES.colorBack3.id, vn.consts.CLASS_NAMES.colorBack3.className, i);
		colorBack3.style.backgroundColor = vn.colors.color16[i];
		colorBackSelectBox.appendChild(colorBack3);
		colorBack4 = createElementBasic(colorBack4, "div", vn.consts.CLASS_NAMES.colorBack4.id, vn.consts.CLASS_NAMES.colorBack4.className, i);
		colorBack4.style.backgroundColor = vn.colors.color17[i];
		colorBackSelectBox.appendChild(colorBack4);
		colorBack5 = createElementBasic(colorBack5, "div", vn.consts.CLASS_NAMES.colorBack5.id, vn.consts.CLASS_NAMES.colorBack5.className, i);
		colorBack5.style.backgroundColor = vn.colors.color18[i];
		colorBackSelectBox.appendChild(colorBack5);
		colorBack6 = createElementBasic(colorBack6, "div", vn.consts.CLASS_NAMES.colorBack6.id, vn.consts.CLASS_NAMES.colorBack6.className, i);
		colorBack6.style.backgroundColor = vn.colors.color19[i];
		colorBackSelectBox.appendChild(colorBack6);
		colorBack7 = createElementBasic(colorBack7, "div", vn.consts.CLASS_NAMES.colorBack7.id, vn.consts.CLASS_NAMES.colorBack7.className, i);
		colorBack7.style.backgroundColor = vn.colors.color20[i];
		colorBackSelectBox.appendChild(colorBack7);
		//==================================================================================
		//formatClearButton
		//==================================================================================
		formatClearButton = createElementButton(formatClearButton, "span", vn.consts.CLASS_NAMES.formatClearButton.id, vn.consts.CLASS_NAMES.formatClearButton.className, i, {"isIcon":true, "text":"format_clear"});
		formatClearButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].formatClearButtonTooltip);	//COMMENT
		//==================================================================================
		//undo
		//==================================================================================
		undoButton = createElementButton(undoButton, "span", vn.consts.CLASS_NAMES.undoButton.id, vn.consts.CLASS_NAMES.undoButton.className, i, {"isIcon":true, "text":"undo"});
		undoButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].undoTooltip);	//COMMENT
		//==================================================================================
		//redo
		//==================================================================================
		redoButton = createElementButton(redoButton, "span", vn.consts.CLASS_NAMES.redoButton.id, vn.consts.CLASS_NAMES.redoButton.className, i, {"isIcon":true, "text":"redo"});
		redoButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].redoTooltip);	//COMMENT
		//==================================================================================
		//help
		//==================================================================================
		helpButton = createElementButton(helpButton, "span", vn.consts.CLASS_NAMES.helpButton.id, vn.consts.CLASS_NAMES.helpButton.className, i, {"isIcon":true, "text":"help"});
		helpButton.setAttribute("title",vn.languageSet[vn.variables.languages[i]].helpTooltip);	//COMMENT
		//==================================================================================
		//modal
		//==================================================================================
		modalBack = createElementBasic(modalBack, "div", vn.consts.CLASS_NAMES.modalBack.id, vn.consts.CLASS_NAMES.modalBack.className, i);
		//==================================================================================
		//modal att link
		attLinkModal = createElementBasic(attLinkModal, "div", vn.consts.CLASS_NAMES.attLinkModal.id, vn.consts.CLASS_NAMES.attLinkModal.className, i);
		
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attLinkHeader.id, vn.consts.CLASS_NAMES.attLinkHeader.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attLinkModalTitle});	//COMMENT
		attLinkModal.appendChild(tempElement1);
		
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attLinkExplain1.id, vn.consts.CLASS_NAMES.attLinkExplain1.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attLinkInTextExplain});	//COMMENT
		attLinkModal.appendChild(tempElement1);
		
		attLinkText = createElementInput(attLinkText, vn.consts.CLASS_NAMES.attLinkText.id, vn.consts.CLASS_NAMES.attLinkText.className, i);
		attLinkText.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attLinkInTextTooltip);	//COMMENT
		attLinkModal.appendChild(attLinkText);
		
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attLinkExplain2.id, vn.consts.CLASS_NAMES.attLinkExplain2.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attLinkInLinkExplain});	//COMMENT
		attLinkModal.appendChild(tempElement1);
		
		attLinkHref = createElementInput(attLinkHref, vn.consts.CLASS_NAMES.attLinkHref.id, vn.consts.CLASS_NAMES.attLinkHref.className, i);
		attLinkHref.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attLinkInLinkTooltip);	//COMMENT
		attLinkModal.appendChild(attLinkHref);
		
		attLinkIsBlankCheckbox = createElementInputCheckbox(attLinkIsBlankCheckbox, vn.consts.CLASS_NAMES.attLinkIsBlankCheckbox.id, vn.consts.CLASS_NAMES.attLinkIsBlankCheckbox.className, i);
		attLinkIsBlankCheckbox.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attLinkIsOpenTooltip);	//COMMENT
		tempElement1 = createElement(tempElement1, "label", vn.consts.CLASS_NAMES.attLinkIsBlankLabel.id, vn.consts.CLASS_NAMES.attLinkIsBlankLabel.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attLinkIsOpenExplain});
		tempElement1.insertBefore(attLinkIsBlankCheckbox, tempElement1.firstChild);
		attLinkModal.appendChild(tempElement1);
		
		attLinkValidCheckText = createElement(attLinkValidCheckText, "span", vn.consts.CLASS_NAMES.attLinkValidCheckText.id, vn.consts.CLASS_NAMES.attLinkValidCheckText.className, i);
		attLinkValidCheckbox = createElementInputCheckbox(attLinkIsBlankCheckbox, vn.consts.CLASS_NAMES.attLinkValidCheckbox.id, vn.consts.CLASS_NAMES.attLinkValidCheckbox.className, i);
		attLinkValidCheckbox.style.display = "none";
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attLinkFooter.id, vn.consts.CLASS_NAMES.attLinkFooter.className, i);
		attLinkInsertButton = createElementButton(attLinkInsertButton, "button", vn.consts.CLASS_NAMES.attLinkInsertButton.id, vn.consts.CLASS_NAMES.attLinkInsertButton.className, i, {"isIcon":true, "text":"add_link"});
		tempElement1.appendChild(attLinkValidCheckText);
		tempElement1.appendChild(attLinkValidCheckbox);
		tempElement1.appendChild(attLinkInsertButton);
		
		attLinkModal.appendChild(tempElement1);
		//==================================================================================
		//modal att file
		attFileModal = createElementBasic(attFileModal, "div", vn.consts.CLASS_NAMES.attFileModal.id, vn.consts.CLASS_NAMES.attFileModal.className, i);
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attFileHeader.id, vn.consts.CLASS_NAMES.attFileHeader.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attFileModalTitle});	//COMMENT
	    attFileModal.appendChild(tempElement1);
	    
		//layout : upload file
	    attFilelayout = createElement(attFilelayout, "div", vn.consts.CLASS_NAMES.attFilelayout.id, vn.consts.CLASS_NAMES.attFilelayout.className, i);
	    
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attFileExplain1.id, vn.consts.CLASS_NAMES.attFileExplain1.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attFileExplain1});	//COMMENT
	    attFilelayout.appendChild(tempElement1);
	    tempElement1 = document.createElement("br");
	    attFilelayout.appendChild(tempElement1);
	    
	    tempElement1 = document.createElement("div");
	    tempElement1.setAttribute("style","width:90%;text-align:center;margin:0 auto;");
	    attFileUploadDiv = createElementButton(attFileUploadDiv, "div", vn.consts.CLASS_NAMES.attFileUploadDiv.id, vn.consts.CLASS_NAMES.attFileUploadDiv.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attFileUploadDiv});
	    attFileUploadDiv.addEventListener("dragover", function(event: any) {
 			consoleLog("vn.elementEvents." + "attFileUploadDiv_onBeforeDragover", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.attFileUploadDiv_onBeforeDragover(event)) return;
 			
 			consoleLog("attFileUploadDiv_onDragover", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["attFileUploadDiv_onDragover"](event);
 			
 			consoleLog("vn.elementEvents." + "attFileUploadDiv_onAfterDragover", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.attFileUploadDiv_onAfterDragover(event);
 			event.stopImmediatePropagation();
 		});
	    attFileUploadDiv.addEventListener("drop", function(event: any) {
 			consoleLog("vn.elementEvents." + "attFileUploadDiv_onBeforeDrop", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.attFileUploadDiv_onBeforeDrop(event)) return;
 			
 			consoleLog("attFileUploadDiv_onDrop", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["attFileUploadDiv_onDrop"](event);
 			
 			consoleLog("vn.elementEvents." + "attFileUploadDiv_onAfterDrop", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.attFileUploadDiv_onAfterDrop(event);
 			event.stopImmediatePropagation();
 		});
		tempElement1.appendChild(attFileUploadDiv);
		attFilelayout.appendChild(tempElement1);
		
	    tempElement1 = document.createElement("div");
	    tempElement1.setAttribute("style","width:90%;text-align:right;margin:5px auto 20px auto;");
	    attFileUploadButton = createElementButton(attFileUploadButton, "button", vn.consts.CLASS_NAMES.attFileUploadButton.id, vn.consts.CLASS_NAMES.attFileUploadButton.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attFileUploadButton});
	    tempElement1.appendChild(attFileUploadButton);
	    attFilelayout.appendChild(tempElement1);

	    attFileUpload = createElementInput(attFileUpload, vn.consts.CLASS_NAMES.attFileUpload.id, vn.consts.CLASS_NAMES.attFileUpload.className, i);
	    attFileUpload.setAttribute("type","file");
	    attFileUpload.setAttribute("multiple","");
	    attFilelayout.appendChild(tempElement1);
	    attFilelayout.appendChild(attFileUpload);
	    attFileModal.appendChild(attFilelayout);
	    
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attFileFooter.id, vn.consts.CLASS_NAMES.attFileFooter.className, i);
	    attFileInsertButton = createElementButton(attFileInsertButton, "button", vn.consts.CLASS_NAMES.attFileInsertButton.id, vn.consts.CLASS_NAMES.attFileInsertButton.className, i, {"isIcon":true, "text":"attach_file"});
	    tempElement1.appendChild(attFileInsertButton);
	    attFileModal.appendChild(tempElement1);
		//==================================================================================
		//modal att image
		attImageModal = createElementBasic(attImageModal, "div", vn.consts.CLASS_NAMES.attImageModal.id, vn.consts.CLASS_NAMES.attImageModal.className, i);
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attImageHeader.id, vn.consts.CLASS_NAMES.attImageHeader.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attImageModalTitle});	//COMMENT
		attImageModal.appendChild(tempElement1);
		
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attImageExplain1.id, vn.consts.CLASS_NAMES.attImageExplain1.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attImageExplain1});	//COMMENT
	    attImageModal.appendChild(tempElement1);
	    tempElement1 = document.createElement("br");
	    attImageModal.appendChild(tempElement1);
	    
	    tempElement1 = document.createElement("div");
	    tempElement1.setAttribute("style","width:90%;text-align:center;margin:0 auto;position:relative;");
	    attImageViewPreButtion = createElementButton(attImageInsertButton, "button", vn.consts.CLASS_NAMES.attImageViewPreButtion.id, vn.consts.CLASS_NAMES.attImageViewPreButtion.className, i, {"isIcon":true, "text":"navigate_before"});
	    attImageViewPreButtion.setAttribute("style","position:absolute;top:50%;transform:translateY(-50%) translateX(1%);");
	    tempElement1.appendChild(attImageViewPreButtion);
	    
	    attImageUploadButtonAndView = createElementBasic(attImageUploadButtonAndView, "div", vn.consts.CLASS_NAMES.attImageUploadButtonAndView.id, vn.consts.CLASS_NAMES.attImageUploadButtonAndView.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attImageUploadButtonAndView});
	    attImageUploadButtonAndView.addEventListener("dragover", function(event: any) {
 			consoleLog("vn.elementEvents." + "attImageUploadButtonAndView_onBeforeDragover", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.attImageUploadButtonAndView_onBeforeDragover(event)) return;
 			
 			consoleLog("attImageUploadButtonAndView_onDragover", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["attImageUploadButtonAndView_onDragover"](event);
 			
 			consoleLog("vn.elementEvents." + "attImageUploadButtonAndView_onAfterDragover", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.attImageUploadButtonAndView_onAfterDragover(event);
 			event.stopImmediatePropagation();
 		});
	    attImageUploadButtonAndView.addEventListener("drop", function(event: any) {
 			consoleLog("vn.elementEvents." + "attImageUploadButtonAndView_onBeforeDrop", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.attImageUploadButtonAndView_onBeforeDrop(event)) return;
 			
 			consoleLog("attImageUploadButtonAndView_onDrop", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["attImageUploadButtonAndView_onDrop"](event);
 			
 			consoleLog("vn.elementEvents." + "attImageUploadButtonAndView_onAfterDrop", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.attImageUploadButtonAndView_onAfterDrop(event);
 			event.stopImmediatePropagation();
 		});
	    tempElement1.appendChild(attImageUploadButtonAndView);
	    
	    attImageViewNextButtion = createElementButton(attImageInsertButton, "button", vn.consts.CLASS_NAMES.attImageViewNextButtion.id, vn.consts.CLASS_NAMES.attImageViewNextButtion.className, i, {"isIcon":true, "text":"navigate_next"});
	    attImageViewNextButtion.setAttribute("style","position:absolute;top:50%;transform:translateY(-50%) translateX(-101%);");
	    tempElement1.appendChild(attImageViewNextButtion);
	    
	    attImageModal.appendChild(tempElement1);
	    
	    attImageUpload = createElementInput(attImageUpload, vn.consts.CLASS_NAMES.attImageUpload.id, vn.consts.CLASS_NAMES.attImageUpload.className, i);
	    attImageUpload.setAttribute("type","file");
	    attImageUpload.setAttribute("multiple","");
	    attImageAcceptTypes = getCommaStrFromArr(vn.variables.attImageAcceptTypes[i])
	    attImageUpload.setAttribute("accept",attImageAcceptTypes);	    
	    attImageModal.appendChild(attImageUpload);
	    
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attImageExplain2.id, vn.consts.CLASS_NAMES.attImageExplain2.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attImageExplain2});	//COMMENT
	    attImageModal.appendChild(tempElement1);
	    tempElement1 = document.createElement("br");
	    attImageModal.appendChild(tempElement1);
	    
	    attImageURL = createElementInput(attLinkHref, vn.consts.CLASS_NAMES.attImageURL.id, vn.consts.CLASS_NAMES.attImageURL.className, i);
	    attImageURL.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attImageURLTooltip);	//COMMENT
	    attImageModal.appendChild(attImageURL);
		
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attImageFooter.id, vn.consts.CLASS_NAMES.attImageFooter.className, i);
	    attImageInsertButton = createElementButton(attImageInsertButton, "button", vn.consts.CLASS_NAMES.attImageInsertButton.id, vn.consts.CLASS_NAMES.attImageInsertButton.className, i, {"isIcon":true, "text":"image"});
	    tempElement1.appendChild(attImageInsertButton);
	    attImageModal.appendChild(tempElement1);
		//==================================================================================
		//modal att video
		attVideoModal = createElementBasic(attVideoModal, "div", vn.consts.CLASS_NAMES.attVideoModal.id, vn.consts.CLASS_NAMES.attVideoModal.className, i);
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attVideoHeader.id, vn.consts.CLASS_NAMES.attVideoHeader.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attVideoModalTitle});	//COMMENT
		attVideoModal.appendChild(tempElement1);
		
	    tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attVideoExplain1.id, vn.consts.CLASS_NAMES.attVideoExplain1.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attVideoExplain1});	//COMMENT
	    attVideoModal.appendChild(tempElement1);

		attVideoEmbedId = createElementInput(attVideoEmbedId, vn.consts.CLASS_NAMES.attVideoEmbedId.id, vn.consts.CLASS_NAMES.attVideoEmbedId.className, i);
		attVideoEmbedId.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attVideoEmbedIdTooltip);	//COMMENT
		attVideoModal.appendChild(attVideoEmbedId);

		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attVideoExplain2.id, vn.consts.CLASS_NAMES.attVideoExplain2.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].attVideoExplain2});	//COMMENT
	    attVideoModal.appendChild(tempElement1);

		tempElement1 = document.createElement("div");
		tempElement1.setAttribute("style","padding-left:20px;color:" + vn.colors.color10[i]);
		tempElement2 = createElement(tempElement2, "span", "", "modal_att_video_icon", i, {"isIcon":true, "text":"width", "iconStyle":"color:" + vn.colors.color10[i]});
		tempElement1.appendChild(tempElement2);
		attVideoWidth  = createElementInput(attVideoWidth, vn.consts.CLASS_NAMES.attVideoWidth.id, vn.consts.CLASS_NAMES.attVideoWidth.className, i);
		attVideoWidth.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attVideoWidthTooltip);	//COMMENT
		attVideoWidth.setAttribute("type", "number");
		attVideoWidth.setAttribute("style","text-align:right;");
		tempElement1.appendChild(attVideoWidth);
		tempElement2 = createElement(tempElement2, "span", "", "modal_att_video_icon", i, {"isIcon":false, "text":"%"});
		tempElement2.setAttribute("style","padding-left:10px;font-size:0.8em");
		tempElement1.appendChild(tempElement2);
		attVideoModal.appendChild(tempElement1);

		tempElement1 = document.createElement("div");
		tempElement1.setAttribute("style","padding-left:20px;color:" + vn.colors.color10[i]);
		tempElement2 = createElement(tempElement2, "span", "", "modal_att_video_icon", i, {"isIcon":true, "text":"height", "iconStyle":"color:" + vn.colors.color10[i]});
		tempElement1.appendChild(tempElement2);
		attVideoHeight = createElementInput(attVideoHeight, vn.consts.CLASS_NAMES.attVideoHeight.id, vn.consts.CLASS_NAMES.attVideoHeight.className, i);
		attVideoHeight.setAttribute("title",vn.languageSet[vn.variables.languages[i]].attVideoHeightTooltip);	//COMMENT
		attVideoHeight.setAttribute("type", "number");
		attVideoHeight.setAttribute("style","text-align:right;");
		tempElement1.appendChild(attVideoHeight);
		tempElement2 = createElement(tempElement2, "span", "", "modal_att_video_icon", i, {"isIcon":false, "text":"px"});
		tempElement2.setAttribute("style","padding-left:10px;font-size:0.8em");
		tempElement1.appendChild(tempElement2);
		attVideoModal.appendChild(tempElement1);

		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attVideoFooter.id, vn.consts.CLASS_NAMES.attVideoFooter.className, i);

		attVideoValidCheckText = createElement(attVideoValidCheckText, "span", vn.consts.CLASS_NAMES.attVideoValidCheckText.id, vn.consts.CLASS_NAMES.attVideoValidCheckText.className, i);
		attVideoValidCheckbox = createElementInputCheckbox(attVideoValidCheckbox, vn.consts.CLASS_NAMES.attVideoValidCheckbox.id, vn.consts.CLASS_NAMES.attVideoValidCheckbox.className, i);
		attVideoValidCheckbox.style.display = "none";
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.attVideoFooter.id, vn.consts.CLASS_NAMES.attVideoFooter.className, i);
		attVideoInsertButton = createElementButton(attVideoInsertButton, "button", vn.consts.CLASS_NAMES.attVideoInsertButton.id, vn.consts.CLASS_NAMES.attVideoInsertButton.className, i, {"isIcon":true, "text":"videocam"});
		tempElement1.appendChild(attVideoValidCheckText);
		tempElement1.appendChild(attVideoValidCheckbox);
	    tempElement1.appendChild(attVideoInsertButton);
	    attVideoModal.appendChild(tempElement1);
		//==================================================================================
		//att link tooltip
		attLinkTooltip = createElement(attLinkTooltip, "div", vn.consts.CLASS_NAMES.attLinkTooltip.id, vn.consts.CLASS_NAMES.attLinkTooltip.className, i);
		attLinkTooltipHref = createElement(attLinkTooltipHref, "a", vn.consts.CLASS_NAMES.attLinkTooltipHref.id, vn.consts.CLASS_NAMES.attLinkTooltipHref.className, i);
		attLinkTooltipHref.setAttribute("target","_blank");
		attLinkTooltipEditButton = createElementButton(attLinkTooltipEditButton, "span", vn.consts.CLASS_NAMES.attLinkTooltipEditButton.id, vn.consts.CLASS_NAMES.attLinkTooltipEditButton.className, i, {"isIcon":true, "text":"add_link", "iconStyle":"font-size:0.9em"});
		attLinkTooltipUnlinkButton = createElementButton(attLinkTooltipUnlinkButton, "span", vn.consts.CLASS_NAMES.attLinkTooltipUnlinkButton.id, vn.consts.CLASS_NAMES.attLinkTooltipUnlinkButton.className, i, {"isIcon":true, "text":"link_off", "iconStyle":"font-size:0.9em"});
		
		attLinkTooltip.appendChild(attLinkTooltipEditButton);
		attLinkTooltip.appendChild(attLinkTooltipUnlinkButton);
		attLinkTooltip.appendChild(attLinkTooltipHref);
		
		//==================================================================================
		//att image tooltip
		attImageAndVideoTooltip = createElement(attImageAndVideoTooltip, "div", vn.consts.CLASS_NAMES.attImageAndVideoTooltip.id, vn.consts.CLASS_NAMES.attImageAndVideoTooltip.className, i);
		
		tempElement1 = document.createElement("div");
		
		tempElement2 = document.createElement("span");
		tempElement2.setAttribute("class",getClassName(i, "small_text_box"));
		tempElement2.setAttribute("style","padding: 0 0 0 10px;");
		tempElement2.textContent = vn.languageSet[vn.variables.languages[i]].attImageAndVideoTooltipWidthInput;	//COMMENT
		tempElement1.appendChild(tempElement2);
		
		attImageAndVideoTooltipWidthInput = createElementInput(attImageAndVideoTooltipWidthInput, vn.consts.CLASS_NAMES.attImageAndVideoTooltipWidthInput.id, vn.consts.CLASS_NAMES.attImageAndVideoTooltipWidthInput.className, i);
		attImageAndVideoTooltipWidthInput.addEventListener("keyup", function(event: any) {
 			consoleLog("vn.elementEvents." + "attImageAndVideoTooltipWidthInput_onBeforeKeyup", "params :" , "(event)", event, "(target)", event.target);
 			if(!vn.elementEvents.attImageAndVideoTooltipWidthInput_onBeforeKeyup(event)) return;
 			
 			consoleLog("attImageAndVideoTooltipWidthInput_onKeyup", "params :" , "(event)", event, "(target)", event.target);
 			elementsEvent["attImageAndVideoTooltipWidthInput_onKeyup"](event);
 			
 			consoleLog("vn.elementEvents." + "attImageAndVideoTooltipWidthInput_onAfterKeyup", "params :" , "(event)", event, "(target)", event.target);
 			vn.elementEvents.attImageAndVideoTooltipWidthInput_onAfterKeyup(event);
 			event.stopImmediatePropagation();
 		});
		attImageAndVideoTooltipWidthInput.setAttribute("type","number");
		tempElement1.appendChild(attImageAndVideoTooltipWidthInput);
		
		tempElement2 = document.createElement("span");
		tempElement2.setAttribute("class",getClassName(i, "small_text_box"));
		tempElement2.setAttribute("style","padding: 0;");
		tempElement2.textContent = "%";
		tempElement1.appendChild(tempElement2);
		
		tempElement2 = document.createElement("span");
		tempElement2.setAttribute("class",getClassName(i, "small_text_box"));
		tempElement2.textContent = vn.languageSet[vn.variables.languages[i]].attImageAndVideoTooltipFloatRadio;	//COMMENT
		tempElement1.appendChild(tempElement2);
		
		attImageAndVideoTooltipFloatRadioNone = createElementInputRadio(
												attImageAndVideoTooltipFloatRadioNone,
												vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioNone.id,
												vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioNone.className,
												getId(i, "attImageAndVideoTooltipFloatRadio"),
												i
											);
		tempElement1.appendChild(attImageAndVideoTooltipFloatRadioNone);
		tempElement2 = createElementRadioLabel(getId(i, vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioNone.id), "close");
		tempElement1.appendChild(tempElement2);
		attImageAndVideoTooltipFloatRadioLeft = createElementInputRadio(
												attImageAndVideoTooltipFloatRadioLeft,
												vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioLeft.id,
												vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioLeft.className,
												getId(i, "attImageAndVideoTooltipFloatRadio"),
												i
											);
		tempElement1.appendChild(attImageAndVideoTooltipFloatRadioLeft);
		tempElement2 = createElementRadioLabel(getId(i, vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioLeft.id), "art_track");
		tempElement1.appendChild(tempElement2);
		attImageAndVideoTooltipFloatRadioRight = createElementInputRadio(
												attImageAndVideoTooltipFloatRadioRight,
												vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioRight.id,
												vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioRight.className,
												getId(i, "attImageAndVideoTooltipFloatRadio"),
												i
											);
		tempElement1.appendChild(attImageAndVideoTooltipFloatRadioRight);
		tempElement2 = createElementRadioLabel(getId(i, vn.consts.CLASS_NAMES.attImageAndVideoTooltipFloatRadioRight.id), "burst_mode");
		tempElement1.appendChild(tempElement2);
		attImageAndVideoTooltip.appendChild(tempElement1);
		
		tempElement1 = document.createElement("div");
		
		tempElement2 = document.createElement("span");
		tempElement2.setAttribute("class",getClassName(i, "small_text_box"));
		tempElement2.textContent = vn.languageSet[vn.variables.languages[i]].attImageAndVideoTooltipShapeRadio;	//COMMENT
		tempElement1.appendChild(tempElement2);
		
		attImageAndVideoTooltipShapeRadioSquare = createElementInputRadio(
													attImageAndVideoTooltipShapeRadioSquare,
													vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioSquare.id,
													vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioSquare.className,
													getId(i, "attImageAndVideoTooltipShapeRadio"),
													i
												);
		tempElement1.appendChild(attImageAndVideoTooltipShapeRadioSquare);
		tempElement2 = createElementRadioLabel(getId(i, vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioSquare.id), "crop_5_4");
		tempElement1.appendChild(tempElement2);
		attImageAndVideoTooltipShapeRadioRadius = createElementInputRadio(
													attImageAndVideoTooltipShapeRadioRadius,
													vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioRadius.id,
													vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioRadius.className,
													getId(i, "attImageAndVideoTooltipShapeRadio"),
													i
												);
		tempElement1.appendChild(attImageAndVideoTooltipShapeRadioRadius);
		tempElement2 = createElementRadioLabel(getId(i, vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioRadius.id), "aspect_ratio");
		tempElement1.appendChild(tempElement2);
		attImageAndVideoTooltipShapeRadioCircle = createElementInputRadio(
													attImageAndVideoTooltipShapeRadioCircle,
													vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioCircle.id,
													vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioCircle.className,
													getId(i, "attImageAndVideoTooltipShapeRadio"),
													i
												);
		tempElement1.appendChild(attImageAndVideoTooltipShapeRadioCircle);
		tempElement2 = createElementRadioLabel(getId(i, vn.consts.CLASS_NAMES.attImageAndVideoTooltipShapeRadioCircle.id), "circle");
		tempElement1.appendChild(tempElement2);
		
		attImageAndVideoTooltip.appendChild(tempElement1);
		
		//==================================================================================
		//modal help
		helpModal = createElementBasic(helpModal, "div", vn.consts.CLASS_NAMES.helpModal.id, vn.consts.CLASS_NAMES.helpModal.className, i);
		
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.helpHeader.id, vn.consts.CLASS_NAMES.helpHeader.className, i, {"isIcon":false, "text":vn.languageSet[vn.variables.languages[i]].helpModalTitle});	//COMMENT
		helpModal.appendChild(tempElement1);
		
		helpMain = createElement(helpMain, "div", vn.consts.CLASS_NAMES.helpMain.id, vn.consts.CLASS_NAMES.helpMain.className, i);
		tempElement1 = document.createElement("table");
		var tempKeys;
		for(var j = 0; j < vn.languageSet[vn.variables.languages[i]].helpContent.length; j++) {
			tempElement2 = document.createElement("tr");
			tempKeys = Object.keys(vn.languageSet[vn.variables.languages[i]].helpContent[j]);
			for(var k = 0; k < tempKeys.length; k++) {
				tempElement3 = document.createElement("td");
				tempElement3.textContent = tempKeys[k];
				tempElement3.setAttribute("style","width:30%;padding:0 0 6px 12px;border:none;");
				tempElement2.appendChild(tempElement3);
				tempElement3 = document.createElement("td");
				tempElement3.setAttribute("style","width:70%;padding:0 12px 6px 12px;border:none;");
				tempElement3.textContent = vn.languageSet[vn.variables.languages[i]].helpContent[j][tempKeys[k]];
				tempElement2.appendChild(tempElement3);
			}
			tempElement1.appendChild(tempElement2);
		}
		helpMain.appendChild(tempElement1);
		helpModal.appendChild(helpMain);
		
		tempElement1 = createElement(tempElement1, "div", vn.consts.CLASS_NAMES.helpFooter.id, vn.consts.CLASS_NAMES.helpFooter.className, i);
		tempElement1.setAttribute("style","height:25px;");
		helpModal.appendChild(tempElement1);
		
		//==================================================================================
		//placeholder
		//==================================================================================
		if(!vn.elements.placeholders[i]) {
			placeholder = createElementBasic(placeholder, "div", vn.consts.CLASS_NAMES.placeholder.id, vn.consts.CLASS_NAMES.placeholder.className, i);
			
			if(placeholderTitle) {
				tempElement1 = document.createElement("h5");
				tempElement1.innerText = placeholderTitle;
				placeholder.appendChild(tempElement1);
			}
			if(placeholderTextContent) {
				tempElement1 = document.createElement("p");
				tempElement1.innerText = placeholderTextContent;
				placeholder.appendChild(tempElement1);
			}
			
			vn.elements.placeholders[i] = placeholder;
		}
		else {
			placeholder = vn.elements.placeholders[i];
		}
		
		//==================================================================================
		//append child
		//==================================================================================
		modalBack.appendChild(attLinkModal);
		modalBack.appendChild(attFileModal);
		modalBack.appendChild(attImageModal);
		modalBack.appendChild(attVideoModal);
		modalBack.appendChild(helpModal);
		template.appendChild(modalBack);
		template.appendChild(placeholder);
		if(vn.variables.toolToggles[i]) {
			tool.appendChild(toolToggleButton);
		}
		tool.appendChild(paragraphStyleSelect);
		tool.appendChild(boldButton);
		tool.appendChild(underlineButton);
		tool.appendChild(italicButton);
		tool.appendChild(ulButton);
		tool.appendChild(olButton);
		tool.appendChild(textAlignSelect);
		tool.appendChild(attLinkButton);
		tool.appendChild(attFileButton);
		tool.appendChild(attImageButton);
		tool.appendChild(attVideoButton);
		tool.appendChild(fontSizeInputBox);
		tool.appendChild(letterSpacingInputBox);
		tool.appendChild(lineHeightInputBox);
		tool.appendChild(fontFamilySelect);
		tool.appendChild(colorTextSelect);
		tool.appendChild(colorBackSelect);
		tool.appendChild(formatClearButton);
		tool.appendChild(undoButton);
		tool.appendChild(redoButton);
		tool.appendChild(helpButton);
		if(vn.variables.toolPositions[i] === "BOTTOM") {
			template.appendChild(textarea);
			template.appendChild(attLinkTooltip);
			template.appendChild(attImageAndVideoTooltip);
			template.appendChild(tool);
		}
		else {
			template.appendChild(tool);
			template.appendChild(attLinkTooltip);
			template.appendChild(attImageAndVideoTooltip);
			template.appendChild(textarea);
		}
		
		note.appendChild(template);
		//==================================================================================
		//push elements
		//==================================================================================
		vn.elements.templates.push(template);
		vn.elements.tools.push(tool);
		vn.elements.textareas.push(textarea);
		vn.elements.paragraphStyleSelects.push(paragraphStyleSelect);
		vn.elements.toolToggleButtons.push(toolToggleButton);
		vn.elements.paragraphStyleSelectBoxes.push(paragraphStyleSelectBox);
		vn.elements.boldButtons.push(boldButton);
		vn.elements.underlineButtons.push(underlineButton);
		vn.elements.italicButtons.push(italicButton);
		vn.elements.ulButtons.push(ulButton);
		vn.elements.olButtons.push(olButton);
		vn.elements.textAlignSelects.push(textAlignSelect);
		vn.elements.textAlignSelectBoxes.push(textAlignSelectBox);
		vn.elements.attLinkButtons.push(attLinkButton);
		vn.elements.attFileButtons.push(attFileButton);
		vn.elements.attImageButtons.push(attImageButton);
		vn.elements.attVideoButtons.push(attVideoButton);
		vn.elements.fontFamilySelects.push(fontFamilySelect);
		vn.elements.fontFamilySelectBoxes.push(fontFamilySelectBox);
		
		vn.elements.colorTextSelects.push(colorTextSelect);
		vn.elements.colorTextSelectBoxes.push(colorTextSelectBox);
		vn.elements.colorText0s.push(colorText0);
		vn.elements.colorText1s.push(colorText1);
		vn.elements.colorText2s.push(colorText2);
		vn.elements.colorText3s.push(colorText3);
		vn.elements.colorText4s.push(colorText4);
		vn.elements.colorText5s.push(colorText5);
		vn.elements.colorText6s.push(colorText6);
		vn.elements.colorText7s.push(colorText7);
		vn.elements.colorTextRInputs.push(colorTextRInput);
		vn.elements.colorTextGInputs.push(colorTextGInput);
		vn.elements.colorTextBInputs.push(colorTextBInput);
		vn.elements.colorTextOpacityInputs.push(colorTextOpacityInput);
		
		vn.elements.colorBackSelects.push(colorBackSelect);
		vn.elements.colorBackSelectBoxes.push(colorBackSelectBox);
		vn.elements.colorBack0s.push(colorBack0);
		vn.elements.colorBack1s.push(colorBack1);
		vn.elements.colorBack2s.push(colorBack2);
		vn.elements.colorBack3s.push(colorBack3);
		vn.elements.colorBack4s.push(colorBack4);
		vn.elements.colorBack5s.push(colorBack5);
		vn.elements.colorBack6s.push(colorBack6);
		vn.elements.colorBack7s.push(colorBack7);
		vn.elements.colorBackRInputs.push(colorBackRInput);
		vn.elements.colorBackGInputs.push(colorBackGInput);
		vn.elements.colorBackBInputs.push(colorBackBInput);
		vn.elements.colorBackOpacityInputs.push(colorBackOpacityInput);
		vn.elements.formatClearButtons.push(formatClearButton);
		vn.elements.undoButtons.push(undoButton);
		vn.elements.redoButtons.push(redoButton);
		vn.elements.helpButtons.push(helpButton);
		vn.elements.fontSizeInputBoxes.push(fontSizeInputBox);
		vn.elements.fontSizeInputs.push(fontSizeInput);
		vn.elements.letterSpacingInputBoxes.push(letterSpacingInputBox);
		vn.elements.letterSpacingInputs.push(letterSpacingInput);
		vn.elements.lineHeightInputBoxes.push(lineHeightInputBox);
		vn.elements.lineHeightInputs.push(lineHeightInput);
		vn.elements.backModals.push(modalBack);
		
		vn.elements.attLinkModals.push(attLinkModal);
		vn.elements.attLinkTexts.push(attLinkText);
		vn.elements.attLinkHrefs.push(attLinkHref);
		vn.elements.attLinkIsBlankCheckboxes.push(attLinkIsBlankCheckbox);
		vn.elements.attLinkValidCheckTexts.push(attLinkValidCheckText);
		vn.elements.attLinkValidCheckboxes.push(attLinkValidCheckbox);
		vn.elements.attLinkInsertButtons.push(attLinkInsertButton);
		vn.elements.attLinkTooltips.push(attLinkTooltip);
		vn.elements.attLinkTooltipHrefs.push(attLinkTooltipHref);
		vn.elements.attLinkTooltipEditButtons.push(attLinkTooltipEditButton);
		vn.elements.attLinkTooltipUnlinkButtons.push(attLinkTooltipUnlinkButton);
		
		vn.elements.attFileModals.push(attFileModal);
	    vn.elements.attFilelayouts.push(attFilelayout);
	    vn.elements.attFileUploadButtons.push(attFileUploadButton);
	    vn.elements.attFileUploads.push(attFileUpload);
	    vn.elements.attFileUploadDivs.push(attFileUploadDiv);
	    vn.elements.attFileInsertButtons.push(attFileInsertButton);
	    
		vn.elements.attImageModals.push(attImageModal);
		vn.elements.attImageUploadButtonAndViews.push(attImageUploadButtonAndView);
		vn.elements.attImageViewPreButtions.push(attImageViewPreButtion);
		vn.elements.attImageViewNextButtions.push(attImageViewNextButtion);
		vn.elements.attImageUploads.push(attImageUpload);
		vn.elements.attImageURLs.push(attImageURL);
		vn.elements.attImageInsertButtons.push(attImageInsertButton);

		vn.elements.attVideoModals.push(attVideoModal);
		vn.elements.attVideoEmbedIds.push(attVideoEmbedId);
		vn.elements.attVideoWidthes.push(attVideoWidth);
		vn.elements.attVideoHeights.push(attVideoHeight);
		vn.elements.attVideoValidCheckTexts.push(attVideoValidCheckText);
		vn.elements.attVideoValidCheckboxes.push(attVideoValidCheckbox);
		vn.elements.attVideoInsertButtons.push(attVideoInsertButton);
		
		vn.elements.attImageAndVideoTooltips.push(attImageAndVideoTooltip);
		vn.elements.attImageAndVideoTooltipWidthInputs.push(attImageAndVideoTooltipWidthInput);
		vn.elements.attImageAndVideoTooltipFloatRadioNones.push(attImageAndVideoTooltipFloatRadioNone);
		vn.elements.attImageAndVideoTooltipFloatRadioLefts.push(attImageAndVideoTooltipFloatRadioLeft);
		vn.elements.attImageAndVideoTooltipFloatRadioRights.push(attImageAndVideoTooltipFloatRadioRight);
		vn.elements.attImageAndVideoTooltipShapeRadioSquares.push(attImageAndVideoTooltipShapeRadioSquare);
		vn.elements.attImageAndVideoTooltipShapeRadioRadiuses.push(attImageAndVideoTooltipShapeRadioRadius);
		vn.elements.attImageAndVideoTooltipShapeRadioCircles.push(attImageAndVideoTooltipShapeRadioCircle);
		
		vn.elements.helpModals.push(helpModal);
		
		//==================================================================================
		//push variables
		//==================================================================================
		vn.variables.useMobileActiveMode.push(isMobileDevice());
		
		vn.variables.boldToggles.push(false);
		vn.variables.underlineToggles.push(false);
		vn.variables.italicToggles.push(false);
		vn.variables.ulToggles.push(false);
		vn.variables.olToggles.push(false);
		
		vn.variables.fontSizes.push(defaultFontSize);
		vn.variables.letterSpacings.push("0");
		vn.variables.lineHeights.push(defaultLineHeight);
		vn.variables.fontFamilies.push(defaultFontFamiliy);
		
		vn.variables.colorTextRs.push(getExtractColorValue(vn.colors.color12[i],"R"));
		vn.variables.colorTextGs.push(getExtractColorValue(vn.colors.color12[i],"G"));
		vn.variables.colorTextBs.push(getExtractColorValue(vn.colors.color12[i],"B"));
		vn.variables.colorTextOs.push("1");
		vn.variables.colorTextRGBs.push(vn.colors.color12[i]);
		vn.variables.colorTextOpacitys.push("1");
		
		vn.variables.colorBackRs.push(getExtractColorValue(vn.colors.color13[i],"R"));
		vn.variables.colorBackGs.push(getExtractColorValue(vn.colors.color13[i],"G"));
		vn.variables.colorBackBs.push(getExtractColorValue(vn.colors.color13[i],"B"));
		vn.variables.colorBackOs.push("0");
		vn.variables.colorBackRGBs.push(vn.colors.color13[i]);
		vn.variables.colorBackOpacitys.push("0");
		
    	vn.variables.attTempFiles.push((new Object as any));
    	vn.variables.attFiles.push((new Object as any));
    	vn.variables.attTempImages.push((new Object as any));
    	vn.variables.attImages.push((new Object as any));
		vn.variables.editDragUnitElements.push([]);
		//An incomprehensible error...
// 		vn.variables.recodeContings.push(0);
// 		vn.variables.recodeNotes.push([vn.elements.textareas[i].cloneNode(true)]);
		vn.variables.recodeContings.push(-1);
		vn.variables.recodeNotes.push([]);
		
		//==================================================================================
		//set input values
		//==================================================================================
		(vn.elements.fontSizeInputs[i] as any).value = defaultFontSize;
		(vn.elements.letterSpacingInputs[i] as any).value = "0";
		(vn.elements.lineHeightInputs[i] as any).value = defaultLineHeight;

		(vn.elements.colorTextRInputs[i] as any).value = vn.variables.colorTextRs[i];
		(vn.elements.colorTextGInputs[i] as any).value = vn.variables.colorTextGs[i];
		(vn.elements.colorTextBInputs[i] as any).value = vn.variables.colorTextBs[i];
		(vn.elements.colorTextOpacityInputs[i] as any).value = vn.variables.colorTextOs[i];

		(vn.elements.colorBackRInputs[i] as any).value = vn.variables.colorBackRs[i];
		(vn.elements.colorBackGInputs[i] as any).value = vn.variables.colorBackGs[i];
		(vn.elements.colorBackBInputs[i] as any).value = vn.variables.colorBackBs[i];
		(vn.elements.colorBackOpacityInputs[i] as any).value = vn.variables.colorBackOs[i];
		
		//==================================================================================
		//set no using note function
		//==================================================================================
		if(!usingParagraphStyle) vn.elements.paragraphStyleSelects[i].style.display = "none";
		if(!usingBold) vn.elements.boldButtons[i].style.display = "none";
		if(!usingUnderline) vn.elements.underlineButtons[i].style.display = "none";
		if(!usingItalic) vn.elements.italicButtons[i].style.display = "none";
		if(!usingUl) vn.elements.ulButtons[i].style.display = "none";
		if(!usingOl) vn.elements.olButtons[i].style.display = "none";
		if(!usingTextAlign) vn.elements.textAlignSelects[i].style.display = "none";
		if(!usingAttLink) vn.elements.attLinkButtons[i].style.display = "none";
		if(!usingAttFile) vn.elements.attFileButtons[i].style.display = "none";
		if(!usingAttImage) vn.elements.attImageButtons[i].style.display = "none";
		if(!usingAttVideo) vn.elements.attVideoButtons[i].style.display = "none";
		if(!usingFontSize) vn.elements.fontSizeInputBoxes[i].style.display = "none";
		if(!usingLetterSpacing) vn.elements.letterSpacingInputBoxes[i].style.display = "none";
		if(!usingLineHeight) vn.elements.lineHeightInputBoxes[i].style.display = "none";
		if(!usingFontFamily) vn.elements.fontFamilySelects[i].style.display = "none";
		if(!usingColorText) vn.elements.colorTextSelects[i].style.display = "none";
		if(!usingColorBack) vn.elements.colorBackSelects[i].style.display = "none";
		if(!usingFormatClear) vn.elements.formatClearButtons[i].style.display = "none";
		if(!usingUndo) vn.elements.undoButtons[i].style.display = "none";
		if(!usingRedo) vn.elements.redoButtons[i].style.display = "none";
		if(!usingHelp) vn.elements.helpButtons[i].style.display = "none";
	}
	
	//==================================================================================
    //Create style element
    styleElement = document.createElement("style");
    styleElement.setAttribute("id", vn.variables.noteName + "_styles-sheet");
    styleElement.type = "text/css";
    
    if (styleElement.styleSheet) {
    	styleElement.styleSheet.cssText = cssText;
    }
    else {
    	styleElement.appendChild(document.createTextNode(cssText));
    }
    // Create google icons link cdn
    linkElementGoogleIcons = document.createElement("link");
    linkElementGoogleIcons.setAttribute("id", vn.variables.noteName + "_icons-link")
    linkElementGoogleIcons.setAttribute("rel","stylesheet");
    linkElementGoogleIcons.setAttribute("href","https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0");
  	//==================================================================================
    // Append style to the head element
    header = document.getElementsByTagName("head")[0];
    header.appendChild(linkElementGoogleIcons);
    header.appendChild(styleElement);
  	//==================================================================================
  	// To prevent the Google icon from initially displaying as text, it is shown after a delay of 0.1 seconds. 
  	setTimeout(function() {
		for(var i = 0; i < vn.elements.templates.length; i++) {
			vn.elements.templates[i].removeAttribute("style");
		}
		// Resize the size.
		elementsEvent["window_onResize"](event);
	}, vn.variables.loadInterval);
  	
  	vn.variables.isCreated = true;
}

function destroyVanillanote(vn: Vanillanote) {
	//Only created Vanillanote works
	if(!vn.variables.isCreated) return;
	
	//styles sheet remove
	var stylesSheet = document.getElementById(vn.variables.noteName + "_styles-sheet");
	stylesSheet!.remove();
	
	//google icons link remove
	var iconsLink = document.getElementById(vn.variables.noteName + "_icons-link");
	iconsLink!.remove();
	
	//document, window evnet remove
	document.removeEventListener("selectionchange", (vn.eventStore as any).selectionchange);
	document.removeEventListener("keydown", (vn.eventStore as any).keydown);
	window.removeEventListener("resize", (vn.eventStore as any).resize);
	if(window.visualViewport) window.visualViewport.removeEventListener("resize", (vn.eventStore as any).resizeViewport);
	
	//html elements remove
	var removeAllChildNodes = function(parent: any) {
	    while (parent.firstChild) {
	        parent.removeChild(parent.firstChild);
	    }
	}
	var notes = document.querySelectorAll('[data-vanillanote]');
	for(var i = 0; i < notes.length; i++) {
		removeAllChildNodes(notes[i]);
	}
	
	//object remove
	(vn as any) = null;
}

export { getVanillanote, createVanillanote, destroyVanillanote };
