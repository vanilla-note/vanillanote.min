const enum LogMode {
	DEBUG = "DEBUG",
	INFO = "INFO",
	ERROR = "ERROR"
}
type TagList = readonly string[];
interface ClassNames {
	template : {
		readonly id : string;
		readonly className : string;
	},
	textarea : {
		readonly id : string;
		readonly className : string;
	},
	tool : {
		readonly id : string;
		readonly className : string;
	},
	toolToggleButton : {
		readonly id : string;
		readonly className : string;
	},
	paragraphStyleSelect : {
		readonly id : string;
		readonly className : string;
	},
	paragraphStyleSelectBox : {
		readonly id : string;
		readonly className : string;
	},
	styleNomal : {
		readonly id : string;
		readonly className : string;
	},
	styleHeader1 : {
		readonly id : string;
		readonly className : string;
	},
	styleHeader2 : {
		readonly id : string;
		readonly className : string;
	},
	styleHeader3 : {
		readonly id : string;
		readonly className : string;
	},
	styleHeader4 : {
		readonly id : string;
		readonly className : string;
	},
	styleHeader5 : {
		readonly id : string;
		readonly className : string;
	},
	styleHeader6 : {
		readonly id : string;
		readonly className : string;
	},
	boldButton : {
		readonly id : string;
		readonly className : string;
	},
	underlineButton : {
		readonly id : string;
		readonly className : string;
	},
	italicButton : {
		readonly id : string;
		readonly className : string;
	},
	ulButton : {
		readonly id : string;
		readonly className : string;
	},
	olButton : {
		readonly id : string;
		readonly className : string;
	},
	textAlignSelect : {
		readonly id : string;
		readonly className : string;
	},
	textAlignSelectBox : {
		readonly id : string;
		readonly className : string;
	},
	textAlignLeft : {
		readonly id : string;
		readonly className : string;
	},
	textAlignCenter : {
		readonly id : string;
		readonly className : string;
	},
	textAlignRight : {
		readonly id : string;
		readonly className : string;
	},
	attLinkButton : {
		readonly id : string;
		readonly className : string;
	},
	attFileButton : {
		readonly id : string;
		readonly className : string;
	},
	attImageButton : {
		readonly id : string;
		readonly className : string;
	},
	attVideoButton : {
		readonly id : string;
		readonly className : string;
	},
	fontSizeInputBox : {
		readonly id : string;
		readonly className : string;
	},
	fontSizeInput : {
		readonly id : string;
		readonly className : string;
	},
	letterSpacingInputBox : {
		readonly id : string;
		readonly className : string;
	},
	letterSpacingInput : {
		readonly id : string;
		readonly className : string;
	},
	lineHeightInputBox : {
		readonly id : string;
		readonly className : string;
	},
	lineHeightInput : {
		readonly id : string;
		readonly className : string;
	},
	fontFamilySelect : {
		readonly id : string;
		readonly className : string;
	},
	fontFamilySelectBox : {
		readonly id : string;
		readonly className : string;
	},
	fontFamily : {
		readonly id : string;
		readonly className : string;
	},
	colorTextSelect : {
		readonly id : string;
		readonly className : string;
	},
	colorTextSelectBox : {
		readonly id : string;
		readonly className : string;
	},
	colorText0 : {
		readonly id : string;
		readonly className : string;
	},
	colorText1 : {
		readonly id : string;
		readonly className : string;
	},
	colorText2 : {
		readonly id : string;
		readonly className : string;
	},
	colorText3 : {
		readonly id : string;
		readonly className : string;
	},
	colorText4 : {
		readonly id : string;
		readonly className : string;
	},
	colorText5 : {
		readonly id : string;
		readonly className : string;
	},
	colorText6 : {
		readonly id : string;
		readonly className : string;
	},
	colorText7 : {
		readonly id : string;
		readonly className : string;
	},
	colorTextRInput : {
		readonly id : string;
		readonly className : string;
	},
	colorTextRExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorTextGInput : {
		readonly id : string;
		readonly className : string;
	},
	colorTextGExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorTextBInput : {
		readonly id : string;
		readonly className : string;
	},
	colorTextBExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorTextOpacityInput : {
		readonly id : string;
		readonly className : string;
	},
	colorTextOpacityExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorBackSelect : {
		readonly id : string;
		readonly className : string;
	},
	colorBackSelectBox : {
		readonly id : string;
		readonly className : string;
	},
	colorBack0 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack1 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack2 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack3 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack4 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack5 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack6 : {
		readonly id : string;
		readonly className : string;
	},
	colorBack7 : {
		readonly id : string;
		readonly className : string;
	},
	colorBackRInput : {
		readonly id : string;
		readonly className : string;
	},
	colorBackRExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorBackGInput : {
		readonly id : string;
		readonly className : string;
	},
	colorBackGExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorBackBInput : {
		readonly id : string;
		readonly className : string;
	},
	colorBackBExplain : {
		readonly id : string;
		readonly className : string;
	},
	colorBackOpacityInput : {
		readonly id : string;
		readonly className : string;
	},
	colorBackOpacityExplain : {
		readonly id : string;
		readonly className : string;
	},
	formatClearButton : {
		readonly id : string;
		readonly className : string;
	},
	undoButton : {
		readonly id : string;
		readonly className : string;
	},
	redoButton : {
		readonly id : string;
		readonly className : string;
	},
	helpButton : {
		readonly id : string;
		readonly className : string;
	},
	modalBack : {
		readonly id : string;
		readonly className : string;
	},
	attLinkModal : {
		readonly id : string;
		readonly className : string;
	},
	attLinkHeader : {
		readonly id : string;
		readonly className : string;
	},
	attLinkFooter : {
		readonly id : string;
		readonly className : string;
	},
	attLinkExplain1 : {
		readonly id : string;
		readonly className : string;
	},
	attLinkText : {
		readonly id : string;
		readonly className : string;
	},
	attLinkExplain2 : {
		readonly id : string;
		readonly className : string;
	},
	attLinkHref : {
		readonly id : string;
		readonly className : string;
	},
	attLinkIsBlankLabel : {
		readonly id : string;
		readonly className : string;
	},
	attLinkIsBlankCheckbox : {
		readonly id : string;
		readonly className : string;
	},
	attLinkValidCheckText : {
		readonly id : string;
		readonly className : string;
	},
	attLinkValidCheckbox : {
		readonly id : string;
		readonly className : string;
	},
	attLinkInsertButton : {
		readonly id : string;
		readonly className : string;
	},
	attLinkTooltip : {
		readonly id : string;
		readonly className : string;
	},
	attLinkTooltipHref : {
		readonly id : string;
		readonly className : string;
	},
	attLinkTooltipEditButton : {
		readonly id : string;
		readonly className : string;
	},
	attLinkTooltipUnlinkButton : {
		readonly id : string;
		readonly className : string;
	},
	attFileModal : {
		readonly id : string;
		readonly className : string;
	},
	attFileHeader : {
		readonly id : string;
		readonly className : string;
	},
	attFilelayout : {
		readonly id : string;
		readonly className : string;
	},
	attFileExplain1 : {
		readonly id : string;
		readonly className : string;
	},
	attFileUploadButton : {
		readonly id : string;
		readonly className : string;
	},
	attFileUploadDiv : {
		readonly id : string;
		readonly className : string;
	},
	attFileUpload : {
		readonly id : string;
		readonly className : string;
	},
	attFileInsertButton : {
		readonly id : string;
		readonly className : string;
	},
	attFileFooter : {
		readonly id : string;
		readonly className : string;
	},
	attImageModal : {
		readonly id : string;
		readonly className : string;
	},
	attImageHeader : {
		readonly id : string;
		readonly className : string;
	},
	attImageExplain1 : {
		readonly id : string;
		readonly className : string;
	},
	attImageExplain2 : {
		readonly id : string;
		readonly className : string;
	},
	attImageUploadButtonAndView : {
		readonly id : string;
		readonly className : string;
	},
	attImageViewPreButtion : {
		readonly id : string;
		readonly className : string;
	},
	attImageViewNextButtion : {
		readonly id : string;
		readonly className : string;
	},
	attImageUpload : {
		readonly id : string;
		readonly className : string;
	},
	attImageURL : {
		readonly id : string;
		readonly className : string;
	},
	attImageInsertButton : {
		readonly id : string;
		readonly className : string;
	},
	attImageFooter : {
		readonly id : string;
		readonly className : string;
	},
	attVideoModal : {
		readonly id : string;
		readonly className : string;
	},
	attVideoHeader : {
		readonly id : string;
		readonly className : string;
	},
	attVideoExplain1 : {
		readonly id : string;
		readonly className : string;
	},
	attVideoEmbedId : {
		readonly id : string;
		readonly className : string;
	},
	attVideoExplain2 : {
		readonly id : string;
		readonly className : string;
	},
	attVideoWidth : {
		readonly id : string;
		readonly className : string;
	},
	attVideoHeight : {
		readonly id : string;
		readonly className : string;
	},
	attVideoValidCheckText : {
		readonly id : string;
		readonly className : string;
	},
	attVideoValidCheckbox : {
		readonly id : string;
		readonly className : string;
	},
	attVideoInsertButton : {
		readonly id : string;
		readonly className : string;
	},
	attVideoFooter : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltip : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipWidthInput : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipFloatRadioNone : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipFloatRadioLeft : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipFloatRadioRight : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipShapeRadioSquare : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipShapeRadioRadius : {
		readonly id : string;
		readonly className : string;
	},
	attImageAndVideoTooltipShapeRadioCircle : {
		readonly id : string;
		readonly className : string;
	},
	helpModal : {
		readonly id : string;
		readonly className : string;
	},
	helpMain : {
		readonly id : string;
		readonly className : string;
	},
	helpHeader : {
		readonly id : string;
		readonly className : string;
	},
	helpFooter : {
		readonly id : string;
		readonly className : string;
	},
	placeholder : {
		readonly id : string;
		readonly className : string;
	},
}
interface Keyframes {
	readonly "@keyframes vanillanote-modal-input": string;
	readonly "@keyframes vanillanote-modal-small-input": string;
}
interface LanguageSet {
	[languageCode: string]: LanguagePack;
}
interface EventStore {
	selectionchange: null | ((e: any) => void);
	keydown: null | ((e: any) => void);
	resize: null | ((e: any) => void);
	resizeViewport: null | ((e: any) => void);
}
interface Consts {
	// Start possible tags
	readonly START_POSSIBLE_TAG : TagList;
	// Unit tags for edit
	readonly UNIT_TAG : TagList;
	// Tags with a double structure
	readonly DOUBLE_TAG : TagList;
	// Tags that are not single
	readonly NOT_SINGLE_TAG : TagList;
	// Specially managed tags
	readonly SPECIAL_TAG: TagList;
	// Tags that are automatically converted by the browser during style conversion
	readonly AUTO_MODIFY_TAG : TagList;
	// Tags that allow text whitespace (regularly delete the tag if the text is whitespace)
	readonly EMPTY_ABLE_TAG : TagList;
	// Keys (id, className) of elements
	readonly CLASS_NAMES : ClassNames;
}
/** */
export interface Csses {
	"template h1" : Record<string, string>[],
	"template h2" : Record<string, string>[],
	"template h3" : Record<string, string>[],
	"template h4" : Record<string, string>[],
	"template h5" : Record<string, string>[],
	"template h6" : Record<string, string>[],
	"textarea ul" : Record<string, string>[],
	"textarea ol" : Record<string, string>[],
	"textarea li" : Record<string, string>[],
	"textarea p" : Record<string, string>[],
	"textarea div" : Record<string, string>[],
	"textarea span" : Record<string, string>[],
	"textarea a" : Record<string, string>[],
	"template" : Record<string, string>[],
	"textarea" : Record<string, string>[],
	"tool" : Record<string, string>[],
	"icon" : Record<string, string>[],
	"button" : Record<string, string>[],
	"select" : Record<string, string>[],
	"select_box_a" : Record<string, string>[],
	"select_box_b" : Record<string, string>[],
	"select_box_c" : Record<string, string>[],
	"select_list" : Record<string, string>[],
	"select_list_button" : Record<string, string>[],
	"small_input_box" : Record<string, string>[],
	"small_input" : Record<string, string>[],
	"small_input:focus" : Record<string, string>[],
	"small_input::-webkit-inner-spin-button" : Record<string, string>[],
	"small_input::-webkit-outer-spin-button" : Record<string, string>[],
	"small_input[type=number]" : Record<string, string>[],
	"normal_button" : Record<string, string>[],
	"opacity_button" : Record<string, string>[],
	"small_text_box" : Record<string, string>[],
	"modal_back" : Record<string, string>[],
	"modal_body" : Record<string, string>[],
	"modal_header" : Record<string, string>[],
	"modal_footer" : Record<string, string>[],
	"modal_explain" : Record<string, string>[],
	"modal_input" : Record<string, string>[],
	"modal_input:focus" : Record<string, string>[],
	"modal_input[readonly]" : Record<string, string>[],
	"modal_small_input" : Record<string, string>[],
	"modal_small_input:focus" : Record<string, string>[],
	"modal_small_input::-webkit-inner-spin-button" : Record<string, string>[],
	"modal_small_input::-webkit-outer-spin-button" : Record<string, string>[],
	"modal_small_input[type=number]" : Record<string, string>[],
	"modal_small_input[readonly]" : Record<string, string>[],
	"att_link_is_blank_label" : Record<string, string>[],
	"att_valid_checktext" : Record<string, string>[],
	"input_checkbox" : Record<string, string>[],
	"input_checkbox:focus" : Record<string, string>[],
	"input_checkbox[disabled]" : Record<string, string>[],
	"smallpx_input" : Record<string, string>[],
	"smallpx_input:focus" : Record<string, string>[],
	"smallpx_input::-webkit-inner-spin-button" : Record<string, string>[],
	"input_radio" : Record<string, string>[],
	"input_radio:focus" : Record<string, string>[],
	"input_radio:checked" : Record<string, string>[],
	"input_radio[disabled]" : Record<string, string>[],
	"modal_input_file" : Record<string, string>[],
	"drag_drop_div" : Record<string, string>[],
	"image_view_div" : Record<string, string>[],
	"color_button" : Record<string, string>[],
	"color_input" : Record<string, string>[],
	"color_input:focus" : Record<string, string>[],
	"color_input::-webkit-inner-spin-button" : Record<string, string>[],
	"color_explain" : Record<string, string>[],
	"tooltip" : Record<string, string>[],
	"tooltip_button" : Record<string, string>[],
	"att_link_tooltip_href" : Record<string, string>[],
	"help_main" : Record<string, string>[],
	"placeholder" : Record<string, string>[],
	"on_button_on" : Record<string, string>[],
	"on_active" : Record<string, string>[],
	"on_mouseover" : Record<string, string>[],
	"on_mouseout" : Record<string, string>[],
	"on_display_inline" : Record<string, string>[],
	"on_display_inline_block" : Record<string, string>[],
	"on_display_block" : Record<string, string>[],
	"on_display_none" : Record<string, string>[],
}
/** */
export interface Colors {
	color1 : string[];	//filled
	color2 : string[];	//empty
	color3 : string[];	//toolbar
	color4 : string[];	//button
	color5 : string[];	//active
	color6 : string[];	//border
	color7 : string[];	//box-shadow
	color8 : string[];	//correct
	color9 : string[];	//notice
	color10: string[];	//modal text
	color11: string[];	//a tag color
	color12: string[];	//color 0 text color
	color13: string[];	//color 0 text background color
	color14: string[];	//color 1
	color15: string[];	//color 2
	color16: string[];	//color 3
	color17: string[];	//color 4
	color18: string[];	//color 5
	color19: string[];	//color 6
	color20: string[];	//color 7
}
/** */
export interface LanguagePack {
	textareaTooltip: string;
	thanks: string;
	styleTooltip: string;
	boldTooltip: string;
	underlineTooltip: string;
	italicTooltip: string;
	ulTooltip: string;
	olTooltip: string;
	textAlignTooltip: string;
	attLinkTooltip: string;
	attFileTooltip: string;
	attImageTooltip: string;
	attVideoTooltip: string;
	fontSizeTooltip: string;
	letterSpacingTooltip: string;
	lineHeightTooltip: string;
	fontFamilyTooltip: string;
	colorTextTooltip: string;
	colorBackTooltip: string;
	formatClearButtonTooltip: string;
	undoTooltip: string;
	redoTooltip: string;
	helpTooltip: string;
	attLinkModalTitle: string;
	attLinkInTextExplain: string;
	attLinkInLinkExplain: string;
	attLinkIsOpenExplain: string;
	attLinkInTextTooltip: string;
	attLinkInLinkTooltip: string;
	attLinkIsOpenTooltip: string;
	attFileModalTitle: string;
	attFileExplain1: string;
	attFileUploadButton: string;
	attFileUploadDiv: string;
	attFileListTooltip: string;
	attImageModalTitle: string;
	attImageUploadButtonAndView: string;
	attImageExplain1: string;
	attImageExplain2: string;
	attImageURLTooltip: string;
	attOverSize: string;
	attPreventType: string;
	attVideoModalTitle: string;
	attVideoExplain1: string;
	attVideoExplain2: string;
	attVideoEmbedIdTooltip: string;
	attVideoWidthTooltip: string;
	attVideoHeightTooltip: string;
	attImageAndVideoTooltipWidthInput: string;
	attImageAndVideoTooltipFloatRadio: string;
	attImageAndVideoTooltipShapeRadio: string;
	helpModalTitle: string;
	helpContent : Record<string, string>[];
}
/** */
export interface Elements {
	notes : NodeListOf<Element>;
	templates : HTMLElement[];
	tools : HTMLElement[];
	textareas : HTMLElement[];
	toolToggleButtons : HTMLElement[];
	paragraphStyleSelects : HTMLElement[];
	paragraphStyleSelectBoxes : HTMLElement[];
	boldButtons : HTMLElement[];
	underlineButtons : HTMLElement[];
	italicButtons : HTMLElement[];
	ulButtons : HTMLElement[];
	olButtons : HTMLElement[];
	textAlignSelects : HTMLElement[];
	textAlignSelectBoxes : HTMLElement[];
	attLinkButtons : HTMLElement[];
	attFileButtons : HTMLElement[];
	attImageButtons : HTMLElement[];
	attVideoButtons : HTMLElement[];
	fontSizeInputBoxes : HTMLElement[];
	fontSizeInputs : HTMLElement[];
	letterSpacingInputBoxes : HTMLElement[];
	letterSpacingInputs : HTMLElement[];
	lineHeightInputBoxes : HTMLElement[];
	lineHeightInputs : HTMLElement[];
	fontFamilySelects : HTMLElement[];
	fontFamilySelectBoxes : HTMLElement[];
	colorTextSelects : HTMLElement[];
	colorTextSelectBoxes : HTMLElement[];
	colorText0s : HTMLElement[];
	colorText1s : HTMLElement[];
	colorText2s : HTMLElement[];
	colorText3s : HTMLElement[];
	colorText4s : HTMLElement[];
	colorText5s : HTMLElement[];
	colorText6s : HTMLElement[];
	colorText7s : HTMLElement[];
	colorTextRInputs : HTMLElement[];
	colorTextGInputs : HTMLElement[];
	colorTextBInputs : HTMLElement[];
	colorTextOpacityInputs : HTMLElement[];
	colorBackSelects : HTMLElement[];
	colorBackSelectBoxes : HTMLElement[];
	colorBack0s : HTMLElement[];
	colorBack1s : HTMLElement[];
	colorBack2s : HTMLElement[];
	colorBack3s : HTMLElement[];
	colorBack4s : HTMLElement[];
	colorBack5s : HTMLElement[];
	colorBack6s : HTMLElement[];
	colorBack7s : HTMLElement[];
	colorBackRInputs : HTMLElement[];
	colorBackGInputs : HTMLElement[];
	colorBackBInputs : HTMLElement[];
	colorBackOpacityInputs : HTMLElement[];
	formatClearButtons : HTMLElement[];
	undoButtons : HTMLElement[];
	redoButtons : HTMLElement[];
	helpButtons : HTMLElement[];
	backModals : HTMLElement[];
	attLinkModals : HTMLElement[];
	attLinkHrefs : HTMLElement[];
	attLinkTexts : HTMLElement[];
	attLinkIsBlankCheckboxes : HTMLElement[];
	attLinkValidCheckboxes : HTMLElement[];
	attLinkValidCheckTexts : HTMLElement[];
	attLinkInsertButtons : HTMLElement[];
	attFileModals : HTMLElement[];
	attFilelayouts :HTMLElement[];
	attFileUploadDivs : HTMLElement[];
	attFileUploadButtons :HTMLElement[];
	attFileUploads  : HTMLElement[];
	attFileInsertButtons   :HTMLElement[];
	attLinkTooltips : HTMLElement[];
	attLinkTooltipHrefs : HTMLElement[];
	attLinkTooltipEditButtons : HTMLElement[];
	attLinkTooltipUnlinkButtons : HTMLElement[];
	attImageModals : HTMLElement[];
	attImageUploadButtonAndViews : HTMLElement[];
	attImageUploads : HTMLElement[];
	attImageURLs : HTMLElement[];
	attImageInsertButtons : HTMLElement[];
	attImageViewPreButtions : HTMLElement[];
	attImageViewNextButtions : HTMLElement[];
	attVideoModals : HTMLElement[];
	attVideoEmbedIds : HTMLElement[];
	attVideoWidthes : HTMLElement[];
	attVideoHeights : HTMLElement[];
	attVideoValidCheckTexts : HTMLElement[];
	attVideoValidCheckboxes : HTMLElement[];
	attVideoInsertButtons : HTMLElement[];
	attImageAndVideoTooltips : HTMLElement[];
	attImageAndVideoTooltipWidthInputs : HTMLElement[];
	attImageAndVideoTooltipFloatRadioNones : HTMLElement[];
	attImageAndVideoTooltipFloatRadioLefts : HTMLElement[];
	attImageAndVideoTooltipFloatRadioRights : HTMLElement[];
	attImageAndVideoTooltipShapeRadioSquares : HTMLElement[];
	attImageAndVideoTooltipShapeRadioRadiuses : HTMLElement[];
	attImageAndVideoTooltipShapeRadioCircles : HTMLElement[];
	helpModals : HTMLElement[];
	placeholders : HTMLElement[];
}
/** */
export interface ElementEvents {
    textarea_onBeforeClick(e: any): boolean;
    textarea_onAfterClick(e: any): void;
    textarea_onBeforeFocus(e: any): boolean;
    textarea_onAfterFocus(e: any): void;
    textarea_onBeforeBlur(e: any): boolean;
    textarea_onAfterBlur(e: any): void;
    paragraphStyleSelect_onBeforeClick(e: any): boolean;
    paragraphStyleSelect_onAfterClick(e: any): void;
    toolToggleButton_onBeforeClick(e: any): boolean;
    toolToggleButton_onAfterClick(e: any): void;
    styleNomal_onBeforeClick(e: any): boolean;
    styleNomal_onAfterClick(e: any): void;
    styleHeader1_onBeforeClick(e: any): boolean;
    styleHeader1_onAfterClick(e: any): void;
    styleHeader2_onBeforeClick(e: any): boolean;
    styleHeader2_onAfterClick(e: any): void;
    styleHeader3_onBeforeClick(e: any): boolean;
    styleHeader3_onAfterClick(e: any): void;
    styleHeader4_onBeforeClick(e: any): boolean;
    styleHeader4_onAfterClick(e: any): void;
    styleHeader5_onBeforeClick(e: any): boolean;
    styleHeader5_onAfterClick(e: any): void;
    styleHeader6_onBeforeClick(e: any): boolean;
    styleHeader6_onAfterClick(e: any): void;
    boldButton_onBeforeClick(e: any): boolean;
    boldButton_onAfterClick(e: any): void;
    underlineButton_onBeforeClick(e: any): boolean;
    underlineButton_onAfterClick(e: any): void;
    italicButton_onBeforeClick(e: any): boolean;
    italicButton_onAfterClick(e: any): void;
    ulButton_onBeforeClick(e: any): boolean;
    ulButton_onAfterClick(e: any): void;
    olButton_onBeforeClick(e: any): boolean;
    olButton_onAfterClick(e: any): void;
    textAlignSelect_onBeforeClick(e: any): boolean;
    textAlignSelect_onAfterClick(e: any): void;
    textAlignLeft_onBeforeClick(e: any): boolean;
    textAlignLeft_onAfterClick(e: any): void;
    textAlignCenter_onBeforeClick(e: any): boolean;
    textAlignCenter_onAfterClick(e: any): void;
    textAlignRight_onBeforeClick(e: any): boolean;
    textAlignRight_onAfterClick(e: any): void;
    attLinkButton_onBeforeClick(e: any): boolean;
    attLinkButton_onAfterClick(e: any): void;
    attFileButton_onBeforeClick(e: any): boolean;
    attFileButton_onAfterClick(e: any): void;
    attImageButton_onBeforeClick(e: any): boolean;
    attImageButton_onAfterClick(e: any): void;
    attVideoButton_onBeforeClick(e: any): boolean;
    attVideoButton_onAfterClick(e: any): void;
    fontSizeInputBox_onBeforeClick(e: any): boolean;
    fontSizeInputBox_onAfterClick(e: any): void;
    fontSizeInput_onBeforeClick(e: any): boolean;
    fontSizeInput_onAfterClick(e: any): void;
    fontSizeInput_onBeforeInput(e: any): boolean;
    fontSizeInput_onAfterInput(e: any): void;
    fontSizeInput_onBeforeBlur(e: any): boolean;
    fontSizeInput_onAfterBlur(e: any): void;
    letterSpacingInputBox_onBeforeClick(e: any): boolean;
    letterSpacingInputBox_onAfterClick(e: any): void;
    letterSpacingInput_onBeforeClick(e: any): boolean;
    letterSpacingInput_onAfterClick(e: any): void;
    letterSpacingInput_onBeforeInput(e: any): boolean;
    letterSpacingInput_onAfterInput(e: any): void;
    letterSpacingInput_onBeforeBlur(e: any): boolean;
    letterSpacingInput_onAfterBlur(e: any): void;
    lineHeightInputBox_onBeforeClick(e: any): boolean;
    lineHeightInputBox_onAfterClick(e: any): void;
    lineHeightInput_onBeforeClick(e: any): boolean;
    lineHeightInput_onAfterClick(e: any): void;
    lineHeightInput_onBeforeInput(e: any): boolean;
    lineHeightInput_onAfterInput(e: any): void;
    lineHeightInput_onBeforeBlur(e: any): boolean;
    lineHeightInput_onAfterBlur(e: any): void;
    fontFamilySelect_onBeforeClick(e: any): boolean;
    fontFamilySelect_onAfterClick(e: any): void;
    colorTextSelect_onBeforeClick(e: any): boolean;
    colorTextSelect_onAfterClick(e: any): void;
    colorTextSelectBox_onBeforeClick(e: any): boolean;
    colorTextSelectBox_onAfterClick(e: any): void;
    colorText0_onBeforeClick(e: any): boolean;
    colorText0_onAfterClick(e: any): void;
    colorText1_onBeforeClick(e: any): boolean;
    colorText1_onAfterClick(e: any): void;
    colorText2_onBeforeClick(e: any): boolean;
    colorText2_onAfterClick(e: any): void;
    colorText3_onBeforeClick(e: any): boolean;
    colorText3_onAfterClick(e: any): void;
    colorText4_onBeforeClick(e: any): boolean;
    colorText4_onAfterClick(e: any): void;
    colorText5_onBeforeClick(e: any): boolean;
    colorText5_onAfterClick(e: any): void;
    colorText6_onBeforeClick(e: any): boolean;
    colorText6_onAfterClick(e: any): void;
    colorText7_onBeforeClick(e: any): boolean;
    colorText7_onAfterClick(e: any): void;
    colorTextRInput_onBeforeClick(e: any): boolean;
    colorTextRInput_onAfterClick(e: any): void;
    colorTextRInput_onBeforeInput(e: any): boolean;
    colorTextRInput_onAfterInput(e: any): void;
    colorTextRInput_onBeforeBlur(e: any): boolean;
    colorTextRInput_onAfterBlur(e: any): void;
    colorTextGInput_onBeforeClick(e: any): boolean;
    colorTextGInput_onAfterClick(e: any): void;
    colorTextGInput_onBeforeInput(e: any): boolean;
    colorTextGInput_onAfterInput(e: any): void;
    colorTextGInput_onBeforeBlur(e: any): boolean;
    colorTextGInput_onAfterBlur(e: any): void;
    colorTextBInput_onBeforeClick(e: any): boolean;
    colorTextBInput_onAfterClick(e: any): void;
    colorTextBInput_onBeforeInput(e: any): boolean;
    colorTextBInput_onAfterInput(e: any): void;
    colorTextBInput_onBeforeBlur(e: any): boolean;
    colorTextBInput_onAfterBlur(e: any): void;
    colorTextOpacityInput_onBeforeClick(e: any): boolean;
    colorTextOpacityInput_onAfterClick(e: any): void;
    colorTextOpacityInput_onBeforeInput(e: any): boolean;
    colorTextOpacityInput_onAfterInput(e: any): void;
    colorTextOpacityInput_onBeforeBlur(e: any): boolean;
    colorTextOpacityInput_onAfterBlur(e: any): void;
    colorBackSelect_onBeforeClick(e: any): boolean;
    colorBackSelect_onAfterClick(e: any): void;
    colorBackSelectBox_onBeforeClick(e: any): boolean;
    colorBackSelectBox_onAfterClick(e: any): void;
    colorBack0_onBeforeClick(e: any): boolean;
    colorBack0_onAfterClick(e: any): void;
    colorBack1_onBeforeClick(e: any): boolean;
    colorBack1_onAfterClick(e: any): void;
    colorBack2_onBeforeClick(e: any): boolean;
    colorBack2_onAfterClick(e: any): void;
    colorBack3_onBeforeClick(e: any): boolean;
    colorBack3_onAfterClick(e: any): void;
    colorBack4_onBeforeClick(e: any): boolean;
    colorBack4_onAfterClick(e: any): void;
    colorBack5_onBeforeClick(e: any): boolean;
    colorBack5_onAfterClick(e: any): void;
    colorBack6_onBeforeClick(e: any): boolean;
    colorBack6_onAfterClick(e: any): void;
    colorBack7_onBeforeClick(e: any): boolean;
    colorBack7_onAfterClick(e: any): void;
    colorBackRInput_onBeforeClick(e: any): boolean;
    colorBackRInput_onAfterClick(e: any): void;
    colorBackRInput_onBeforeInput(e: any): boolean;
    colorBackRInput_onAfterInput(e: any): void;
    colorBackRInput_onBeforeBlur(e: any): boolean;
    colorBackRInput_onAfterBlur(e: any): void;
    colorBackGInput_onBeforeClick(e: any): boolean;
    colorBackGInput_onAfterClick(e: any): void;
    colorBackGInput_onBeforeInput(e: any): boolean;
    colorBackGInput_onAfterInput(e: any): void;
    colorBackGInput_onBeforeBlur(e: any): boolean;
    colorBackGInput_onAfterBlur(e: any): void;
    colorBackBInput_onBeforeClick(e: any): boolean;
    colorBackBInput_onAfterClick(e: any): void;
    colorBackBInput_onBeforeInput(e: any): boolean;
    colorBackBInput_onAfterInput(e: any): void;
    colorBackBInput_onBeforeBlur(e: any): boolean;
    colorBackBInput_onAfterBlur(e: any): void;
    colorBackOpacityInput_onBeforeClick(e: any): boolean;
    colorBackOpacityInput_onAfterClick(e: any): void;
    colorBackOpacityInput_onBeforeInput(e: any): boolean;
    colorBackOpacityInput_onAfterInput(e: any): void;
    colorBackOpacityInput_onBeforeBlur(e: any): boolean;
    colorBackOpacityInput_onAfterBlur(e: any): void;
    formatClearButton_onBeforeClick(e: any): boolean;
    formatClearButton_onAfterClick(e: any): void;
    undoButton_onBeforeClick(e: any): boolean;
    undoButton_onAfterClick(e: any): void;
    redoButton_onBeforeClick(e: any): boolean;
    redoButton_onAfterClick(e: any): void;
    helpButton_onBeforeClick(e: any): boolean;
    helpButton_onAfterClick(e: any): void;
    modalBack_onBeforeClick(e: any): boolean;
    modalBack_onAfterClick(e: any): void;
    attLinkModal_onBeforeClick(e: any): boolean;
    attLinkModal_onAfterClick(e: any): void;
    attLinkText_onBeforeInput(e: any): boolean;
    attLinkText_onAfterInput(e: any): void;
    attLinkText_onBeforeBlur(e: any): boolean;
    attLinkText_onAfterBlur(e: any): void;
    attLinkHref_onBeforeInput(e: any): boolean;
    attLinkHref_onAfterInput(e: any): void;
    attLinkHref_onBeforeBlur(e: any): boolean;
    attLinkHref_onAfterBlur(e: any): void;
    attLinkInsertButton_onBeforeClick(e: any): boolean;
    attLinkInsertButton_onAfterClick(e: any): void;
    attFileModal_onBeforeClick(e: any): boolean;
    attFileModal_onAfterClick(e: any): void;
    attFileUploadButton_onBeforeClick(e: any): boolean;
    attFileUploadButton_onAfterClick(e: any): void;
    attFileUploadDiv_onBeforeDragover(e: any): boolean;
    attFileUploadDiv_onAfterDragover(e: any): void;
    attFileUploadDiv_onBeforeDrop(e: any): boolean;
    attFileUploadDiv_onAfterDrop(e: any): void;
    attFileUploadDiv_onBeforeClick(e: any): boolean;
    attFileUploadDiv_onAfterClick(e: any): void;
    attFileUpload_onBeforeInput(e: any): boolean;
    attFileUpload_onAfterInput(e: any): void;
    attFileUpload_onBeforeBlur(e: any): boolean;
    attFileUpload_onAfterBlur(e: any): void;
    attFileInsertButton_onBeforeClick(e: any): boolean;
    attFileInsertButton_onAfterClick(e: any): void;
    attLinkTooltipEditButton_onBeforeClick(e: any): boolean;
    attLinkTooltipEditButton_onAfterClick(e: any): void;
    attLinkTooltipUnlinkButton_onBeforeClick(e: any): boolean;
    attLinkTooltipUnlinkButton_onAfterClick(e: any): void;
    attImageModal_onBeforeClick(e: any): boolean;
    attImageModal_onAfterClick(e: any): void;
    attImageUploadButtonAndView_onBeforeDragover(e: any): boolean;
    attImageUploadButtonAndView_onAfterDragover(e: any): void;
    attImageUploadButtonAndView_onBeforeDrop(e: any): boolean;
    attImageUploadButtonAndView_onAfterDrop(e: any): void;
    attImageUploadButtonAndView_onBeforeClick(e: any): boolean;
    attImageUploadButtonAndView_onAfterClick(e: any): void;
    attImageViewPreButtion_onBeforeClick(e: any): boolean;
    attImageViewPreButtion_onAfterClick(e: any): void;
    attImageViewNextButtion_onBeforeClick(e: any): boolean;
    attImageViewNextButtion_onAfterClick(e: any): void;
    attImageUpload_onBeforeInput(e: any): boolean;
    attImageUpload_onAfterInput(e: any): void;
    attImageUpload_onBeforeBlur(e: any): boolean;
    attImageUpload_onAfterBlur(e: any): void;
    attImageURL_onBeforeInput(e: any): boolean;
    attImageURL_onAfterInput(e: any): void;
    attImageURL_onBeforeBlur(e: any): boolean;
    attImageURL_onAfterBlur(e: any): void;
    attImageInsertButton_onBeforeClick(e: any): boolean;
    attImageInsertButton_onAfterClick(e: any): void;
    attVideoModal_onBeforeClick(e: any): boolean;
    attVideoModal_onAfterClick(e: any): void;
    attVideoEmbedId_onBeforeInput(e: any): boolean;
    attVideoEmbedId_onAfterInput(e: any): void;
    attVideoEmbedId_onBeforeBlur(e: any): boolean;
    attVideoEmbedId_onAfterBlur(e: any): void;
    attVideoWidth_onBeforeInput(e: any): boolean;
    attVideoWidth_onAfterInput(e: any): void;
    attVideoWidth_onBeforeBlur(e: any): boolean;
    attVideoWidth_onAfterBlur(e: any): void;
    attVideoHeight_onBeforeInput(e: any): boolean;
    attVideoHeight_onAfterInput(e: any): void;
    attVideoHeight_onBeforeBlur(e: any): boolean;
    attVideoHeight_onAfterBlur(e: any): void;
    attVideoInsertButton_onBeforeClick(e: any): boolean;
    attVideoInsertButton_onAfterClick(e: any): void;
    attImageAndVideoTooltipWidthInput_onBeforeInput(e: any): boolean;
    attImageAndVideoTooltipWidthInput_onAfterInput(e: any): void;
    attImageAndVideoTooltipWidthInput_onBeforeBlur(e: any): boolean;
    attImageAndVideoTooltipWidthInput_onAfterBlur(e: any): void;
    attImageAndVideoTooltipWidthInput_onBeforeKeyup(e: any): boolean;
    attImageAndVideoTooltipWidthInput_onAfterKeyup(e: any): void;
    attImageAndVideoTooltipFloatRadioNone_onBeforeClick(e: any): boolean;
    attImageAndVideoTooltipFloatRadioNone_onAfterClick(e: any): void;
    attImageAndVideoTooltipFloatRadioLeft_onBeforeClick(e: any): boolean;
    attImageAndVideoTooltipFloatRadioLeft_onAfterClick(e: any): void;
    attImageAndVideoTooltipFloatRadioRight_onBeforeClick(e: any): boolean;
    attImageAndVideoTooltipFloatRadioRight_onAfterClick(e: any): void;
    attImageAndVideoTooltipShapeRadioSquare_onAfterClick(e: any): void;
    attImageAndVideoTooltipShapeRadioRadius_onBeforeClick(e: any): boolean;
    attImageAndVideoTooltipShapeRadioRadius_onAfterClick(e: any): void;
    attImageAndVideoTooltipShapeRadioCircle_onBeforeClick(e: any): boolean;
    attImageAndVideoTooltipShapeRadioCircle_onAfterClick(e: any): void;
    helpModal_onBeforeClick(e: any): boolean;
    helpModal_onAfterClick(e: any): void;
    placeholder_onBeforeClick(e: any): boolean;
    placeholder_onAfterClick(e: any): void;
}
/** */
export interface CssEvents {
	target_onBeforeClick(e: any): boolean;
	target_onAfterClick(e: any): void;
	target_onBeforeMouseover(e: any): boolean;
	target_onAfterMouseover(e: any): void;
	target_onBeforeMouseout(e: any): boolean;
	target_onAfterMouseout(e: any): void;
	target_onBeforeTouchstart(e: any): boolean;
	target_onAfterTouchstart(e: any): void;
	target_onBeforeTouchend(e: any): boolean;
	target_onAfterTouchend(e: any): void;
}
/** */
export interface Variables {
	noteName: string;
	isCreated: boolean;
	logMode: LogMode.DEBUG | LogMode.ERROR | LogMode.INFO;
	observerOptions: {
		characterData: boolean,
		childList: boolean,
		subtree: boolean
	};
	useMobileActiveMode: boolean[];
	lastActiveNote: number;
	recodeNotes: HTMLElement[][];
	recodeContings: number[];
	recodeLimit: number[];
	lastScreenHeight: number | null;
	mobileKeyboardExceptHeight: number | null;
	isSelectionProgress: boolean;
	preventChangeScroll: number;
	resizeInterval: number;
	inputInterval: number;
	loadInterval: number;
	canEvents: boolean;
	toolPositions: string[];
	toolDefaultLines: number[];
	textareaOriginWidths: string[];
	textareaOriginHeights: string[];
	placeholderIsVisible: boolean[];
	placeholderAddTop: number[];
	placeholderAddLeft: number[];
	placeholderWidth: string[];
	isIOS: string;
	editSelections: (Selection | null)[];
	editRanges: (Range | null)[];
	startOffsets: (number | null)[];
	endOffsets: (number | null)[];
	editStartNodes: (Node | null)[];
	editEndNodes: (Node | null)[];
	editStartElements: (Element | Node | null)[];
	editEndElements: (Element | Node | null)[];
	editStartUnitElements: (Element | Node | null)[];
	editEndUnitElements: (Element | Node | null)[];
	editDragUnitElements: (Element | Node | null)[][];
	setEditStyleTagToggle: number;
	toolToggles: boolean[];
	boldToggles: boolean[];
	underlineToggles: boolean[];
	italicToggles: boolean[];
	ulToggles: boolean[];
	olToggles: boolean[];
	fontSizes: string[];
	letterSpacings: string[];
	lineHeights: string[];
	fontFamilies: string[];
	colorTextRs: string[];
	colorTextGs: string[];
	colorTextBs: string[];
	colorTextOs: string[];
	colorTextRGBs: string[];
	colorTextOpacitys: string[];
	colorBackRs: string[];
	colorBackGs: string[];
	colorBackBs: string[];
	colorBackOs: string[];
	colorBackRGBs: string[];
	colorBackOpacitys: string[];
	openedModals: any[];
	attFilePreventTypes: string[][];
	attFileAcceptTypes: string[][];
	attFileMaxSizes: number[];
	attTempFiles: Record<string, File>[];
	attFiles: Record<string, File>[];
	attImagePreventTypes: string[][];
	attImageAcceptTypes: string[][];
	attImageMaxSizes: number[];
	attTempImages: Record<string, File>[];
	attImages: Record<string, File>[];
	sizeRates: number[];
	defaultStyles: {
        "font-size": string
        "line-height": string
        "font-family": string
    }[];
	languages: string[];
}
/** */
export interface Vanillanote {
	consts: Consts;
	csses: Csses;
	keyframes: Keyframes;
	colors: Colors;
	elements: Elements;
	variables: Variables;
	languageSet: LanguageSet;
	elementEvents: ElementEvents;
	cssEvents: CssEvents;
	eventStore: EventStore;
	_beforeAlert(message: string): boolean;
}
/** */
export interface VanillanoteConstructor {
    new (): Vanillanote;
}
