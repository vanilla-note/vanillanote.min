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
/**
 * CSS definitions applied to each Vanillanote instance.
 * - The styles are injected dynamically, scoped to each editor by index-based class selectors.
 * - Supports dynamic styling for states like mouseover, mouseout, focus, and more.
 * - Styles are defined as key-value objects, and custom styles can be set in `vanillanote_onBeforeCreate()`.
 */
export interface Csses {
	/**
	 * CSS for the h1 tag inserted into the [idx]th editor's textarea.
	 */
	"template h1" : Record<string, string>[];
	/**
	 * CSS for the h2 tag inserted into the [idx]th editor's textarea.
	 */
	"template h2" : Record<string, string>[];
	/**
	 * CSS for the h3 tag inserted into the [idx]th editor's textarea.
	 */
	"template h3" : Record<string, string>[];
	/**
	 * CSS for the h4 tag inserted into the [idx]th editor's textarea.
	 */
	"template h4" : Record<string, string>[];
	/**
	 * CSS for the h5 tag inserted into the [idx]th editor's textarea.
	 */
	"template h5" : Record<string, string>[];
	/**
	 * CSS for the h6 tag inserted into the [idx]th editor's textarea.
	 */
	"template h6" : Record<string, string>[];
	/**
	 * CSS for the ul tag inserted into the [idx]th editor's textarea.
	 */
	"textarea ul" : Record<string, string>[];
	/**
	 * CSS for the ol tag inserted into the [idx]th editor's textarea.
	 */
	"textarea ol" : Record<string, string>[];
	/**
	 * CSS for the li tag inserted into the [idx]th editor's textarea.
	 */
	"textarea li" : Record<string, string>[];
	/**
	 * CSS for the p tag inserted into the [idx]th editor's textarea.
	 */
	"textarea p" : Record<string, string>[];
	/**
	 * CSS for the div tag inserted into the [idx]th editor's textarea.
	 */
	"textarea div" : Record<string, string>[];
	/**
	 * CSS for the span tag inserted into the [idx]th editor's textarea.
	 */
	"textarea span" : Record<string, string>[];
	/**
	 * CSS for the a tag inserted into the [idx]th editor's textarea.
	 */
	"textarea a" : Record<string, string>[];
	/**
	 * CSS for the largest div that wraps both the toolbar and textarea of the [idx]th editor (template).
	 */
	"template" : Record<string, string>[];
	/**
	 * CSS for the [idx]th editor's textarea.
	 */
	"textarea" : Record<string, string>[];
	/**
	 * CSS for the [idx]th editor's toolbar.
	 */
	"tool" : Record<string, string>[];
	/**
	 * CSS for the icons of the [idx]th editor.
	 */
	"icon" : Record<string, string>[];
	/**
	 * CSS for the buttons on the toolbar of the [idx]th editor.
	 */
	"button" : Record<string, string>[];
	/**
	 * CSS for the combo button on the toolbar of the [idx]th editor.
	 */
	"select" : Record<string, string>[];
	/**
	 * CSS for the combo window of the [idx]th editor. font-family, paragraph-style.
	 */
	"select_box_a" : Record<string, string>[];
	/**
	 * CSS for the combo window of the [idx]th editor. text-align.
	 */
	"select_box_b" : Record<string, string>[];
	/**
	 * CSS for the combo window of the [idx]th editor. text-color, background-color.
	 */
	"select_box_c" : Record<string, string>[];
	/**
	 * CSS for the combo items of the [idx]th editor. font-family, paragraph-style.
	 */
	"select_list" : Record<string, string>[];
	/**
	 * CSS for the combo items of the [idx]th editor. text-align.
	 */
	"select_list_button" : Record<string, string>[];
	/**
	 * CSS for the button wrapping the small_input on the toolbar of the [idx]th editor. font-size, letter-spacing, line-height.
	 */
	"small_input_box" : Record<string, string>[];
	/**
	 * CSS for the small_input on the toolbar of the [idx]th editor. font-size, letter-spacing, line-height.
	 */
	"small_input" : Record<string, string>[];
	/**
	 * CSS for the small_input on the toolbar of the [idx]th editor when focused.
	 */
	"small_input:focus" : Record<string, string>[];
	/**
	 * CSS for the -webkit-inner-spin-button of the small_input on the toolbar of the [idx]th editor.
	 */
	"small_input::-webkit-inner-spin-button" : Record<string, string>[];
	/**
	 * CSS for the -webkit-outer-spin-button of the small_input on the toolbar of the [idx]th editor.
	 */
	"small_input::-webkit-outer-spin-button" : Record<string, string>[];
	/**
	 * CSS for the [type=number] of the small_input on the toolbar of the [idx]th editor.
	 */
	"small_input[type=number]" : Record<string, string>[];
	/**
	 * CSS for the general buttons of the [idx]th editor. Buttons at the bottom of each modal.
	 */
	"normal_button" : Record<string, string>[];
	/**
	 * CSS for the opacity buttons of the [idx]th editor. Image next, prev buttons in image attachment modal.
	 */
	"opacity_button" : Record<string, string>[];
	/**
	 * CSS for the span where text is inserted in the image tooltip of the [idx]th editor.
	 */
	"small_text_box" : Record<string, string>[];
	/**
	 * CSS for the modal background of the [idx]th editor.
	 */
	"modal_back" : Record<string, string>[];
	/**
	 * CSS for the modal body of the [idx]th editor.
	 */
	"modal_body" : Record<string, string>[];
	/**
	 * CSS for the modal header of the [idx]th editor.
	 */
	"modal_header" : Record<string, string>[];
	/**
	 * CSS for the modal footer of the [idx]th editor.
	 */
	"modal_footer" : Record<string, string>[];
	/**
	 * CSS for the modal explain (explanation text) of the [idx]th editor.
	 */
	"modal_explain" : Record<string, string>[];
	/**
	 * CSS for the modal long input of the [idx]th editor.
	 */
	"modal_input" : Record<string, string>[];
	/**
	 * CSS for the modal long input of the [idx]th editor when focused.
	 */
	"modal_input:focus" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(long input) readonly state css.
	 */
	"modal_input[readonly]" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(small input) css.
	 */
	"modal_small_input" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(small input) focus css.
	 */
	"modal_small_input:focus" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(small input) -webkit-inner-spin-button css.
	 */
	"modal_small_input::-webkit-inner-spin-button" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(small input) -webkit-outer-spin-button css.
	 */
	"modal_small_input::-webkit-outer-spin-button" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(small input) [type=number] css.
	 */
	"modal_small_input[type=number]" : Record<string, string>[];
	/**
	 * [idx]th editor's modal input(small input) readonly state css.
	 */
	"modal_small_input[readonly]" : Record<string, string>[];
	/**
	 * [idx]th editor's link attachment modal blank checkbox label css.
	 */
	"att_link_is_blank_label" : Record<string, string>[];
	/**
	 * [idx]th editor's link attachment modal validation checkbox css.
	 */
	"att_valid_checktext" : Record<string, string>[];
	/**
	 * [idx]th editor's input checkboxes css.
	 */
	"input_checkbox" : Record<string, string>[];
	/**
	 * [idx]th editor's input checkboxes focus css.
	 */
	"input_checkbox:focus" : Record<string, string>[];
	/**
	 * [idx]th editor's input checkboxes disabled state css.
	 */
	"input_checkbox[disabled]" : Record<string, string>[];
	/**
	 * [idx]th editor's small px input css for image tooltip.
	 */
	"smallpx_input" : Record<string, string>[];
	/**
	 * [idx]th editor's small px input focus css.
	 */
	"smallpx_input:focus" : Record<string, string>[];
	/**
	 * [idx]th editor's small px input -webkit-inner-spin-button css.
	 */
	"smallpx_input::-webkit-inner-spin-button" : Record<string, string>[];
	/**
	 * [idx]th editor's input radios css.
	 */
	"input_radio" : Record<string, string>[];
	/**
	 * [idx]th editor's input radios focus css.
	 */
	"input_radio:focus" : Record<string, string>[];
	/**
	 * [idx]th editor's input radios checked css.
	 */
	"input_radio:checked" : Record<string, string>[];
	/**
	 * [idx]th editor's input radios disabled state css.
	 */
	"input_radio[disabled]" : Record<string, string>[];
	/**
	 * [idx]th editor's modal file input css.
	 */
	"modal_input_file" : Record<string, string>[];
	/**
	 * [idx]th editor's modal file drag and drop div css.
	 */
	"drag_drop_div" : Record<string, string>[];
	/**
	 * [idx]th editor's modal image display div css.
	 */
	"image_view_div" : Record<string, string>[];
	/**
	 * [idx]th editor's color combo window color buttons css.
	 */
	"color_button" : Record<string, string>[];
	/**
	 * [idx]th editor's color combo window rgb, opacity input css.
	 */
	"color_input" : Record<string, string>[];
	/**
	 * [idx]th editor's color combo window rgb, opacity input focus css.
	 */
	"color_input:focus" : Record<string, string>[];
	/**
	 * [idx]th editor's color combo window rgb, opacity input -webkit-inner-spin-button css.
	 */
	"color_input::-webkit-inner-spin-button" : Record<string, string>[];
	/**
	 * [idx]th editor's color combo window rgb, opacity label text span css.
	 */
	"color_explain" : Record<string, string>[];
	/**
	 * [idx]th editor's tooltip css.
	 */
	"tooltip" : Record<string, string>[];
	/**
	 * [idx]th editor's tooltip button css.
	 */
	"tooltip_button" : Record<string, string>[];
	/**
	 * [idx]th editor's link tooltip href text css.
	 */
	"att_link_tooltip_href" : Record<string, string>[];
	/**
	 * [idx]th editor's modal help main body css.
	 */
	"help_main" : Record<string, string>[];
	/**
	 * [idx]th editor's placeholder css.
	 */
	"placeholder" : Record<string, string>[];
	/**
	 * [idx]th editor's button, combo etc. on state css.
	 */
	"on_button_on" : Record<string, string>[];
	/**
	 * [idx]th editor's button, combo etc. active state css.
	 */
	"on_active" : Record<string, string>[];
	/**
	 * [idx]th editor's button, combo etc. mouse over state css.
	 */
	"on_mouseover" : Record<string, string>[];
	/**
	 * [idx]th editor's button, combo etc. mouse out state css.
	 */
	"on_mouseout" : Record<string, string>[];
	/**
	 * [idx]th editor's display inline defined
	 */
	"on_display_inline" : Record<string, string>[];
	/**
	 * [idx]th editor's display inline block defined
	 */
	"on_display_inline_block" : Record<string, string>[];
	/**
	 * [idx]th editor's display block defined
	 */
	"on_display_block" : Record<string, string>[];
	/**
	 * [idx]th editor's display none defined
	 */
	"on_display_none" : Record<string, string>[];
}
/**
 * Color schemes for the editor's UI components.
 * - 20 predefined color sets, each defined as an array for multi-editor customization.
 * - Used for styling icons, backgrounds, text colors, borders, and modals.
 * - Can be customized per editor instance for unique appearances.
 */
export interface Colors {
	/**
	 * filled color(icon)
	 */
	color1 : string[];
	/**
	 * empty color(textarea)
	 */
	color2 : string[];
	/**
	 * toolbar color
	 */
	color3 : string[];
	/**
	 * button color
	 */
	color4 : string[];
	/**
	 * active color
	 */
	color5 : string[];
	/**
	 * border color(modal)
	 */
	color6 : string[];
	/**
	 * 	box-shadow color(button)
	 */
	color7 : string[];
	/**
	 * correct text color
	 */
	color8 : string[];
	/**
	 * notice or error text color
	 */
	color9 : string[];
	/**
	 * modal text color
	 */
	color10: string[];
	/**
	 * a tag color
	 */
	color11: string[];
	/**
	 * default of user custom textarea text color
	 */
	color12: string[];
	/**
	 * default of user custom textarea text background color
	 */
	color13: string[];
	/**
	 * textarea text and background color1
	 */
	color14: string[];
	/**
	 * textarea text and background color2
	 */
	color15: string[];
	/**
	 * textarea text and background color3
	 */
	color16: string[];
	/**
	 * textarea text and background color4
	 */
	color17: string[];
	/**
	 * textarea text and background color5
	 */
	color18: string[];
	/**
	 * textarea text and background color6
	 */
	color19: string[];
	/**
	 * textarea text and background color7
	 */
	color20: string[];
}
/**
 * Language set definitions for editor internationalization.
 * - Allows setting tooltip texts, button labels, modal messages, and other UI strings.
 * - New languages can be added and assigned using either the `language` attribute or by modifying `variables.languages[index]`.
 * 
 * @example
 * vn.languageSet.JPN = {
 *   Thanks: 'ありがとうございます！',
 *   boldTooltip: '太字',
 *   // ... other keys
 * };
 */
export interface LanguagePack {
	/**
	 * Title attribute to be inserted in textarea element.
	 */
	textareaTooltip: string;
	/**
	 * Text that appears when conditions are met (insertion of text and links).
	 */
	thanks: string;
	/**
	 * Title attribute to be inserted in paragraph-style button element.
	 */
	styleTooltip: string;
	/**
	 * Title attribute to be inserted in bold button element.
	 */
	boldTooltip: string;
	/**
	 * Title attribute to be inserted in underline button element.
	 */
	underlineTooltip: string;
	/**
	 * Title attribute to be inserted in italic button element.
	 */
	italicTooltip: string;
	/**
	 * Title attribute to be inserted in ul button element.
	 */
	ulTooltip: string;
	/**
	 * Title attribute to be inserted in ol button element.
	 */
	olTooltip: string;
	/**
	 * Title attribute to be inserted in text-align button element.
	 */
	textAlignTooltip: string;
	/**
	 * Title attribute to be inserted in link-attachment button element.
	 */
	attLinkTooltip: string;
	/**
	 * Title attribute to be inserted in file-attachment button element.
	 */
	attFileTooltip: string;
	/**
	 * Title attribute to be inserted in image-attachment button element.
	 */
	attImageTooltip: string;
	/**
	 * Title attribute to be inserted in You-tube video-attachment button element.
	 */
	attVideoTooltip: string;
	/**
	 * Title attribute to be inserted in font-size button element.
	 */
	fontSizeTooltip: string;
	/**
	 * Title attribute to be inserted in letter-spacing button element.
	 */
	letterSpacingTooltip: string;
	/**
	 * Title attribute to be inserted in line-height button element.
	 */
	lineHeightTooltip: string;
	/**
	 * Title attribute to be inserted in font-family button element.
	 */
	fontFamilyTooltip: string;
	/**
	 * Title attribute to be inserted in color text button element.
	 */
	colorTextTooltip: string;
	/**
	 * Title attribute to be inserted in color back button element.
	 */
	colorBackTooltip: string;
	/**
	 * Title attribute to be inserted in format clear button element.
	 */
	formatClearButtonTooltip: string;
	/**
	 * Title attribute to be inserted in undo button element.
	 */
	undoTooltip: string;
	/**
	 * Title attribute to be inserted in redo button element.
	 */
	redoTooltip: string;
	/**
	 * Title attribute to be inserted in help button element.
	 */
	helpTooltip: string;
	/**
	 * Title of link-attachment modal.
	 */
	attLinkModalTitle: string;
	/**
	 * Text input description in link-attachment modal.
	 */
	attLinkInTextExplain: string;
	/**
	 * Link input description in link-attachment modal.
	 */
	attLinkInLinkExplain: string;
	/**
	 * New window opening description in link-attachment modal.
	 */
	attLinkIsOpenExplain: string;
	/**
	 * Title attribute of text input in link-attachment modal.
	 */
	attLinkInTextTooltip: string;
	/**
	 * Title attribute of link input in link-attachment modal.
	 */
	attLinkInLinkTooltip: string;
	/**
	 * Title attribute of new window opening checkbox in link-attachment modal.
	 */
	attLinkIsOpenTooltip: string;
	/**
	 * Title attribute of file-attachment modal.
	 */
	attFileModalTitle: string;
	/**
	 * Description in file-attachment modal.
	 */
	attFileExplain1: string;
	/**
	 * Text of file upload button in file-attachment modal.
	 */
	attFileUploadButton: string;
	/**
	 * Text of drag and drop div in file-attachment modal.
	 */
	attFileUploadDiv: string;
	/**
	 * Title attribute of file elements in drag and drop div in file-attachment modal.
	 */
	attFileListTooltip: string;
	/**
	 * Title of image-attachment modal.
	 */
	attImageModalTitle: string;
	/**
	 * Text of upload button and view in image-attachment modal.
	 */
	attImageUploadButtonAndView: string;
	/**
	 * Description 1 in image-attachment modal.
	 */
	attImageExplain1: string;
	/**
	 * Description 2 in image-attachment modal.
	 */
	attImageExplain2: string;
	/**
	 * Title attribute of url input element in image-attachment modal.
	 */
	attImageURLTooltip: string;
	/**
	 * Alert text when file size is over upon attachment.
	 */
	attOverSize: string;
	/**
	 * Alert text when an invalid type is attached.
	 */
	attPreventType: string;
	/**
	 * Title of You-tube video-attachment modal.
	 */
	attVideoModalTitle: string;
	/**
	 * Description 1 in You-tube video-attachment modal.
	 */
	attVideoExplain1: string;
	/**
	 * Description 2 in You-tube video-attachment modal.
	 */
	attVideoExplain2: string;
	/**
	 * Title attribute of embed id input element in You-tube video-attachment modal.
	 */
	attVideoEmbedIdTooltip: string;
	/**
	 * Title attribute of width input element in You-tube video-attachment modal.
	 */
	attVideoWidthTooltip: string;
	/**
	 * Title attribute of height input element in You-tube video-attachment modal.
	 */
	attVideoHeightTooltip: string;
	/**
	 * Text description for width in image tooltip.
	 */
	attImageAndVideoTooltipWidthInput: string;
	/**
	 * Text description for float in image tooltip.
	 */
	attImageAndVideoTooltipFloatRadio: string;
	/**
	 * Text description for shape in image tooltip.
	 */
	attImageAndVideoTooltipShapeRadio: string;
	/**
	 * Title of help modal.
	 */
	helpModalTitle: string;
	/**
	 * Contents of the help modal. Inserted as an array. Inserted in the form { key (table left) : value (table right) }.
	 */
	helpContent : Record<string, string>[];
}
/**
 * Stores references to the editor's generated DOM elements.
 * - Used to quickly access textareas, toolbars, placeholders, buttons, and other editor parts without repeated DOM queries.
 * - These references are populated during `createVanillanote()` and can be customized in `vanillanote_onAfterCreate()`.
 */
export interface Elements {
	/**
	 * vanillanote element : VanillanoteElement
	 */
	notes : NodeListOf<VanillanoteElement>;
	/**
	 * vanillanote div
	 */
	templates : HTMLElement[];
	/**
	 * Tool Button List
	 */
	tools : HTMLElement[];
	/**
	 * Editor Window
	 */
	textareas : HTMLElement[];
	/**
	 * Tool List Toggle Button
	 */
	toolToggleButtons : HTMLElement[];
	/**
	 * Paragraph style select button
	 */
	paragraphStyleSelects : HTMLElement[];
	/**
	 * Paragraph style select button box
	 */
	paragraphStyleSelectBoxes : HTMLElement[];
	/**
	 * Bold button
	 */
	boldButtons : HTMLElement[];
	/**
	 * Underline button
	 */
	underlineButtons : HTMLElement[];
	/**
	 * Italic button
	 */
	italicButtons : HTMLElement[];
	/**
	 * UL button
	 */
	ulButtons : HTMLElement[];
	/**
	 * OL button
	 */
	olButtons : HTMLElement[];
	/**
	 * Text align button
	 */
	textAlignSelects : HTMLElement[];
	/**
	 * Text align button box
	 */
	textAlignSelectBoxes : HTMLElement[];
	/**
	 * Attach link button
	 */
	attLinkButtons : HTMLElement[];
	/**
	 * Attach file button
	 */
	attFileButtons : HTMLElement[];
	/**
	 * Attach image(video) button
	 */
	attImageButtons : HTMLElement[];
	/**
	 * Attach YouTube video button
	 */
	attVideoButtons : HTMLElement[];
	/**
	 * Font size adjustment button
	 */
	fontSizeInputBoxes : HTMLElement[];
	/**
	 * Font size input
	 */
	fontSizeInputs : HTMLElement[];
	/**
	 * Letter spacing adjustment button
	 */
	letterSpacingInputBoxes : HTMLElement[];
	/**
	 * Letter spacing input
	 */
	letterSpacingInputs : HTMLElement[];
	/**
	 * Line height adjustment button
	 */
	lineHeightInputBoxes : HTMLElement[];
	/**
	 * line height input
	 */
	lineHeightInputs : HTMLElement[];
	/**
	 * font family select button
	 */
	fontFamilySelects : HTMLElement[];
	/**
	 * font family select button box
	 */
	fontFamilySelectBoxes : HTMLElement[];
	/**
	 * color select
	 */
	colorTextSelects : HTMLElement[];
	/**
	 * color select box
	 */
	colorTextSelectBoxes : HTMLElement[];
	/**
	 * user custom text color button
	 */
	colorText0s : HTMLElement[];
	/**
	 * text color 1 button
	 */
	colorText1s : HTMLElement[];
	/**
	 * text color 2 button
	 */
	colorText2s : HTMLElement[];
	/**
	 * text color 3 button
	 */
	colorText3s : HTMLElement[];
	/**
	 * text color 4 button
	 */
	colorText4s : HTMLElement[];
	/**
	 * text color 5 button
	 */
	colorText5s : HTMLElement[];
	/**
	 * text color 6 button
	 */
	colorText6s : HTMLElement[];
	/**
	 * text color 7 button
	 */
	colorText7s : HTMLElement[];
	/**
	 * text color of 'Red' hex value input
	 */
	colorTextRInputs : HTMLElement[];
	/**
	 * text color of 'Green' hex value input
	 */
	colorTextGInputs : HTMLElement[];
	/**
	 * text color of 'Blue' hex value input
	 */
	colorTextBInputs : HTMLElement[];
	/**
	 * text color of 'Opacity' value input
	 */
	colorTextOpacityInputs : HTMLElement[];
	/**
	 * background color select
	 */
	colorBackSelects : HTMLElement[];
	/**
	 * background color select box
	 */
	colorBackSelectBoxes : HTMLElement[];
	/**
	 * user custom background color button
	 */
	colorBack0s : HTMLElement[];
	/**
	 * background color 1 button
	 */
	colorBack1s : HTMLElement[];
	/**
	 * background color 2 button
	 */
	colorBack2s : HTMLElement[];
	/**
	 * background color 3 button
	 */
	colorBack3s : HTMLElement[];
	/**
	 * background color 4 button
	 */
	colorBack4s : HTMLElement[];
	/**
	 * background color 5 button
	 */
	colorBack5s : HTMLElement[];
	/**
	 * background color 6 button
	 */
	colorBack6s : HTMLElement[];
	/**
	 * background color 7 button
	 */
	colorBack7s : HTMLElement[];
	/**
	 * background color of 'Red' hex value input
	 */
	colorBackRInputs : HTMLElement[];
	/**
	 * background color of 'Green' hex value input
	 */
	colorBackGInputs : HTMLElement[];
	/**
	 * background color of 'Blue' hex value input
	 */
	colorBackBInputs : HTMLElement[];
	/**
	 * background color of 'Opacity' value input
	 */
	colorBackOpacityInputs : HTMLElement[];
	/**
	 * Format reset button
	 */
	formatClearButtons : HTMLElement[];
	/**
	 * Undo button
	 */
	undoButtons : HTMLElement[];
	/**
	 * Redo button
	 */
	redoButtons : HTMLElement[];
	/**
	 * Help modal button
	 */
	helpButtons : HTMLElement[];
	/**
	 * Modal background
	 */
	backModals : HTMLElement[];
	/**
	 * Link attachment modal
	 */
	attLinkModals : HTMLElement[];
	/**
	 * Link href input
	 */
	attLinkHrefs : HTMLElement[];
	/**
	 * Link text input
	 */
	attLinkTexts : HTMLElement[];
	/**
	 * Link is blank checkbox input
	 */
	attLinkIsBlankCheckboxes : HTMLElement[];
	/**
	 * Link is blank checkbox input box
	 */
	attLinkValidCheckboxes : HTMLElement[];
	/**
	 * Link Attachment Validation Comment
	 */
	attLinkValidCheckTexts : HTMLElement[];
	/**
	 * Insert link button
	 */
	attLinkInsertButtons : HTMLElement[];
	/**
	 * File attachment modal
	 */
	attFileModals : HTMLElement[];
	/**
	 * File attachment layout
	 */
	attFilelayouts :HTMLElement[];
	/**
	 * File attachment drop area. Click to remove temporary files
	 */
	attFileUploadDivs : HTMLElement[];
	/**
	 * Attach file button
	 */
	attFileUploadButtons :HTMLElement[];
	/**
	 * File attachment input. Unvisible.
	 */
	attFileUploads  : HTMLElement[];
	/**
	 * Insert file button
	 */
	attFileInsertButtons   :HTMLElement[];
	/**
	 * Attachment tooltip for link and file. Opens when link or file is selected.
	 */
	attLinkTooltips : HTMLElement[];
	/**
	 * Preview of attached link or file
	 */
	attLinkTooltipHrefs : HTMLElement[];
	/**
	 * Edit button
	 */
	attLinkTooltipEditButtons : HTMLElement[];
	/**
	 * Unlink button
	 */
	attLinkTooltipUnlinkButtons : HTMLElement[];
	/**
	 * Image(video) attachment modal
	 */
	attImageModals : HTMLElement[];
	/**
	 * Image(video) drop area. Preview provided
	 */
	attImageUploadButtonAndViews : HTMLElement[];
	/**
	 * Image(video) file input. Unvisible.
	 */
	attImageUploads : HTMLElement[];
	/**
	 * Image URL input
	 */
	attImageURLs : HTMLElement[];
	/**
	 * Insert image(video) button
	 */
	attImageInsertButtons : HTMLElement[];
	/**
	 * View previous image(video)
	 */
	attImageViewPreButtions : HTMLElement[];
	/**
	 * View next image(video)
	 */
	attImageViewNextButtions : HTMLElement[];
	/**
	 * YouTube video attachment modal
	 */
	attVideoModals : HTMLElement[];
	/**
	 * YouTube embed id input
	 */
	attVideoEmbedIds : HTMLElement[];
	/**
	 * Input for iframe width to be inserted
	 */
	attVideoWidthes : HTMLElement[];
	/**
	 * Input for iframe height to be inserted
	 */
	attVideoHeights : HTMLElement[];
	/**
	 * Video Attachment Validation Comments
	 */
	attVideoValidCheckTexts : HTMLElement[];
	/**
	 * Video Attachment Validation Comments box
	 */
	attVideoValidCheckboxes : HTMLElement[];
	/**
	 * Insert YouTube video button
	 */
	attVideoInsertButtons : HTMLElement[];
	/**
	 * Tooltip for img, iframe. Opens when img, iframe is selected.
	 */
	attImageAndVideoTooltips : HTMLElement[];
	/**
	 * img, iframe width input
	 */
	attImageAndVideoTooltipWidthInputs : HTMLElement[];
	/**
	 * img, iframe float none radio input
	 */
	attImageAndVideoTooltipFloatRadioNones : HTMLElement[];
	/**
	 * img, iframe float left radio input
	 */
	attImageAndVideoTooltipFloatRadioLefts : HTMLElement[];
	/**
	 * img, iframe float right radio input
	 */
	attImageAndVideoTooltipFloatRadioRights : HTMLElement[];
	/**
	 * img, iframe shape square radio input
	 */
	attImageAndVideoTooltipShapeRadioSquares : HTMLElement[];
	/**
	 * img, iframe shape rounded square radio input
	 */
	attImageAndVideoTooltipShapeRadioRadiuses : HTMLElement[];
	/**
	 * img, iframe shape circle radio input
	 */
	attImageAndVideoTooltipShapeRadioCircles : HTMLElement[];
	/**
	 * help modal
	 */
	helpModals : HTMLElement[];
	/**
	 * placeholder div
	 */
	placeholders : HTMLElement[];
}
/**
 * Event handlers attached to editor HTML elements.
 * - Supports custom `onBefore` and `onAfter` functions for most editor actions.
 * - If the `onBefore` function returns `false`, the corresponding event will be prevented.
 *
 * @example
 * vn.elementEvents.boldButton_onBeforeClick = function(e) {
 *   if (e.target.getAttribute('data-note-index') === '0') {
 *     alert('Blocked for the first editor');
 *     return false;
 *   }
 * };
 */
export interface ElementEvents {
	/**
	 * Event occurring before textarea click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textarea_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after textarea click.
	 * 
	 * @param e - Event
	 */
    textarea_onAfterClick(e: Event): void;
	/**
	 * Event occurring before textarea focus.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textarea_onBeforeFocus(e: Event): boolean;
	/**
	 * Event occurring after textarea focus.
	 * 
	 * @param e - Event
	 */
    textarea_onAfterFocus(e: Event): void;
	/**
	 * Event occurring before textarea blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textarea_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after textarea blur.
	 * 
	 * @param e - Event
	 */
    textarea_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before paragraphStyleSelect click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    paragraphStyleSelect_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after paragraphStyleSelect click.
	 * 
	 * @param e - Event
	 */
    paragraphStyleSelect_onAfterClick(e: Event): void;
	/**
	 * Event occurring before toolToggleButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    toolToggleButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after toolToggleButton click.
	 * 
	 * @param e - Event
	 */
    toolToggleButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleNomal click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleNomal_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleNomal click.
	 * 
	 * @param e - Event
	 */
    styleNomal_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleHeader1 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleHeader1_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleHeader1 click.
	 * 
	 * @param e - Event
	 */
    styleHeader1_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleHeader2 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleHeader2_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleHeader2 click.
	 * 
	 * @param e - Event
	 */
    styleHeader2_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleHeader3 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleHeader3_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleHeader3 click.
	 * 
	 * @param e - Event
	 */
    styleHeader3_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleHeader4 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleHeader4_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleHeader4 click.
	 * 
	 * @param e - Event
	 */
    styleHeader4_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleHeader5 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleHeader5_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleHeader5 click.
	 * 
	 * @param e - Event
	 */
    styleHeader5_onAfterClick(e: Event): void;
	/**
	 * Event occurring before styleHeader6 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    styleHeader6_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after styleHeader6 click.
	 * 
	 * @param e - Event
	 */
    styleHeader6_onAfterClick(e: Event): void;
	/**
	 * Event occurring before boldButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    boldButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after boldButton click.
	 * 
	 * @param e - Event
	 */
    boldButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before underlineButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    underlineButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after underlineButton click.
	 * 
	 * @param e - Event
	 */
    underlineButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before italicButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    italicButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after italicButton click.
	 * 
	 * @param e - Event
	 */
    italicButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before ulButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    ulButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after ulButton click.
	 * 
	 * @param e - Event
	 */
    ulButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before olButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    olButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after olButton click.
	 * 
	 * @param e - Event
	 */
    olButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before textAlignSelect click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textAlignSelect_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after textAlignSelect click.
	 * 
	 * @param e - Event
	 */
    textAlignSelect_onAfterClick(e: Event): void;
	/**
	 * Event occurring before textAlignLeft click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textAlignLeft_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after textAlignLeft click.
	 * 
	 * @param e - Event
	 */
    textAlignLeft_onAfterClick(e: Event): void;
	/**
	 * Event occurring before textAlignCenter click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textAlignCenter_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after textAlignCenter click.
	 * 
	 * @param e - Event
	 */
    textAlignCenter_onAfterClick(e: Event): void;
	/**
	 * Event occurring before textAlignRight click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    textAlignRight_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after textAlignRight click.
	 * 
	 * @param e - Event
	 */
    textAlignRight_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attLinkButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attLinkButton click.
	 * 
	 * @param e - Event
	 */
    attLinkButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attFileButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attFileButton click.
	 * 
	 * @param e - Event
	 */
    attFileButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageButton click.
	 * 
	 * @param e - Event
	 */
    attImageButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attVideoButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attVideoButton click.
	 * 
	 * @param e - Event
	 */
    attVideoButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before fontSizeInputBox click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    fontSizeInputBox_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after fontSizeInputBox click.
	 * 
	 * @param e - Event
	 */
    fontSizeInputBox_onAfterClick(e: Event): void;
	/**
	 * Event occurring before fontSizeInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    fontSizeInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after fontSizeInput click.
	 * 
	 * @param e - Event
	 */
    fontSizeInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before fontSizeInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    fontSizeInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after fontSizeInput input.
	 * 
	 * @param e - Event
	 */
    fontSizeInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before fontSizeInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    fontSizeInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after fontSizeInput blur.
	 * 
	 * @param e - Event
	 */
    fontSizeInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before letterSpacingInputBox click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    letterSpacingInputBox_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after letterSpacingInputBox click.
	 * 
	 * @param e - Event
	 */
    letterSpacingInputBox_onAfterClick(e: Event): void;
	/**
	 * Event occurring before letterSpacingInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    letterSpacingInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after letterSpacingInput click.
	 * 
	 * @param e - Event
	 */
    letterSpacingInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before letterSpacingInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    letterSpacingInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after letterSpacingInput input.
	 * 
	 * @param e - Event
	 */
    letterSpacingInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before letterSpacingInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    letterSpacingInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after letterSpacingInput blur.
	 * 
	 * @param e - Event
	 */
    letterSpacingInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before lineHeightInputBox click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    lineHeightInputBox_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after lineHeightInputBox click.
	 * 
	 * @param e - Event
	 */
    lineHeightInputBox_onAfterClick(e: Event): void;
	/**
	 * Event occurring before lineHeightInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    lineHeightInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after lineHeightInput click.
	 * 
	 * @param e - Event
	 */
    lineHeightInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before lineHeightInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    lineHeightInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after lineHeightInput input.
	 * 
	 * @param e - Event
	 */
    lineHeightInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before lineHeightInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    lineHeightInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after lineHeightInput blur.
	 * 
	 * @param e - Event
	 */
    lineHeightInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before fontFamilySelect click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    fontFamilySelect_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after fontFamilySelect click.
	 * 
	 * @param e - Event
	 */
    fontFamilySelect_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextSelect click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextSelect_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorTextSelect click.
	 * 
	 * @param e - Event
	 */
    colorTextSelect_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextSelectBox click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextSelectBox_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorTextSelectBox click.
	 * 
	 * @param e - Event
	 */
    colorTextSelectBox_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText0 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText0_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText0 click.
	 * 
	 * @param e - Event
	 */
    colorText0_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText1 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText1_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText1 click.
	 * 
	 * @param e - Event
	 */
    colorText1_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText2 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText2_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText2 click.
	 * 
	 * @param e - Event
	 */
    colorText2_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText3 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText3_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText3 click.
	 * 
	 * @param e - Event
	 */
    colorText3_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText4 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText4_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText4 click.
	 * 
	 * @param e - Event
	 */
    colorText4_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText5 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText5_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText5 click.
	 * 
	 * @param e - Event
	 */
    colorText5_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText6 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText6_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText6 click.
	 * 
	 * @param e - Event
	 */
    colorText6_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorText7 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorText7_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorText7 click.
	 * 
	 * @param e - Event
	 */
    colorText7_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextRInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextRInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorTextRInput click.
	 * 
	 * @param e - Event
	 */
    colorTextRInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextRInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextRInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorTextRInput input.
	 * 
	 * @param e - Event
	 */
    colorTextRInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorTextRInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextRInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorTextRInput blur.
	 * 
	 * @param e - Event
	 */
    colorTextRInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorTextGInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextGInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorTextGInput click.
	 * 
	 * @param e - Event
	 */
    colorTextGInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextGInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextGInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorTextGInput input.
	 * 
	 * @param e - Event
	 */
    colorTextGInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorTextGInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextGInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorTextGInput blur.
	 * 
	 * @param e - Event
	 */
    colorTextGInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorTextBInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextBInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorTextBInput click.
	 * 
	 * @param e - Event
	 */
    colorTextBInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextBInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextBInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorTextBInput input.
	 * 
	 * @param e - Event
	 */
    colorTextBInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorTextBInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextBInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorTextBInput blur.
	 * 
	 * @param e - Event
	 */
    colorTextBInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorTextOpacityInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextOpacityInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorTextOpacityInput click.
	 * 
	 * @param e - Event
	 */
    colorTextOpacityInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorTextOpacityInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextOpacityInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorTextOpacityInput input.
	 * 
	 * @param e - Event
	 */
    colorTextOpacityInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorTextOpacityInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorTextOpacityInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorTextOpacityInput blur.
	 * 
	 * @param e - Event
	 */
    colorTextOpacityInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorBackSelect click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackSelect_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBackSelect click.
	 * 
	 * @param e - Event
	 */
    colorBackSelect_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBackSelectBox click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackSelectBox_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBackSelectBox click.
	 * 
	 * @param e - Event
	 */
    colorBackSelectBox_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack0 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack0_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack0 click.
	 * 
	 * @param e - Event
	 */
    colorBack0_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack1 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack1_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack1 click.
	 * 
	 * @param e - Event
	 */
    colorBack1_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack2 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack2_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack2 click.
	 * 
	 * @param e - Event
	 */
    colorBack2_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack3 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack3_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack3 click.
	 * 
	 * @param e - Event
	 */
    colorBack3_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack4 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack4_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack4 click.
	 * 
	 * @param e - Event
	 */
    colorBack4_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack5 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack5_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack5 click.
	 * 
	 * @param e - Event
	 */
    colorBack5_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack6 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack6_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack6 click.
	 * 
	 * @param e - Event
	 */
    colorBack6_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBack7 click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBack7_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBack7 click.
	 * 
	 * @param e - Event
	 */
    colorBack7_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBackRInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackRInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBackRInput click.
	 * 
	 * @param e - Event
	 */
    colorBackRInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBackRInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackRInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorBackRInput input.
	 * 
	 * @param e - Event
	 */
    colorBackRInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorBackRInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackRInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorBackRInput blur.
	 * 
	 * @param e - Event
	 */
    colorBackRInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorBackGInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackGInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBackGInput click.
	 * 
	 * @param e - Event
	 */
    colorBackGInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBackGInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackGInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorBackGInput input.
	 * 
	 * @param e - Event
	 */
    colorBackGInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorBackGInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackGInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorBackGInput blur.
	 * 
	 * @param e - Event
	 */
    colorBackGInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorBackBInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackBInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBackBInput click.
	 * 
	 * @param e - Event
	 */
    colorBackBInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBackBInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackBInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorBackBInput input.
	 * 
	 * @param e - Event
	 */
    colorBackBInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorBackBInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackBInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorBackBInput blur.
	 * 
	 * @param e - Event
	 */
    colorBackBInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before colorBackOpacityInput click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackOpacityInput_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after colorBackOpacityInput click.
	 * 
	 * @param e - Event
	 */
    colorBackOpacityInput_onAfterClick(e: Event): void;
	/**
	 * Event occurring before colorBackOpacityInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackOpacityInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after colorBackOpacityInput input.
	 * 
	 * @param e - Event
	 */
    colorBackOpacityInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before colorBackOpacityInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    colorBackOpacityInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after colorBackOpacityInput blur.
	 * 
	 * @param e - Event
	 */
    colorBackOpacityInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before formatClearButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    formatClearButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after formatClearButton click.
	 * 
	 * @param e - Event
	 */
    formatClearButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before undoButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    undoButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after undoButton click.
	 * 
	 * @param e - Event
	 */
    undoButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before redoButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    redoButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after redoButton click.
	 * 
	 * @param e - Event
	 */
    redoButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before helpButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    helpButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after helpButton click.
	 * 
	 * @param e - Event
	 */
    helpButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before modalBack click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    modalBack_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after modalBack click.
	 * 
	 * @param e - Event
	 */
    modalBack_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attLinkModal click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkModal_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attLinkModal click.
	 * 
	 * @param e - Event
	 */
    attLinkModal_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attLinkHref input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkText_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attLinkHref input.
	 * 
	 * @param e - Event
	 */
    attLinkText_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attLinkHref blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkText_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attLinkHref blur.
	 * 
	 * @param e - Event
	 */
    attLinkText_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attLinkHref input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkHref_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attLinkHref input.
	 * 
	 * @param e - Event
	 */
    attLinkHref_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attLinkHref blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkHref_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attLinkHref blur.
	 * 
	 * @param e - Event
	 */
    attLinkHref_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attLinkInsertButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkInsertButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attLinkInsertButton click.
	 * 
	 * @param e - Event
	 */
    attLinkInsertButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attFileModal click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileModal_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attFileModal click.
	 * 
	 * @param e - Event
	 */
    attFileModal_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attFileUploadButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileUploadButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attFileUploadButton click.
	 * 
	 * @param e - Event
	 */
    attFileUploadButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attFileUploadDiv Dragover.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileUploadDiv_onBeforeDragover(e: Event): boolean;
	/**
	 * Event occurring after attFileUploadDiv Dragover.
	 * 
	 * @param e - Event
	 */
    attFileUploadDiv_onAfterDragover(e: Event): void;
	/**
	 * Event occurring before attFileUploadDiv Drop.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileUploadDiv_onBeforeDrop(e: Event): boolean;
	/**
	 * Event occurring after attFileUploadDiv Drop.
	 * 
	 * @param e - Event
	 */
    attFileUploadDiv_onAfterDrop(e: Event): void;
	/**
	 * Event occurring before attFileUploadDiv click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileUploadDiv_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attFileUploadDiv click.
	 * 
	 * @param e - Event
	 */
    attFileUploadDiv_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attFileUpload input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileUpload_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attFileUpload input.
	 * 
	 * @param e - Event
	 */
    attFileUpload_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attFileUpload blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileUpload_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attFileUpload blur.
	 * 
	 * @param e - Event
	 */
    attFileUpload_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attFileInsertButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attFileInsertButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attFileInsertButton click.
	 * 
	 * @param e - Event
	 */
    attFileInsertButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attLinkTooltipEditButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkTooltipEditButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attLinkTooltipEditButton click.
	 * 
	 * @param e - Event
	 */
    attLinkTooltipEditButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attLinkTooltipUnlinkButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attLinkTooltipUnlinkButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attLinkTooltipUnlinkButton click.
	 * 
	 * @param e - Event
	 */
    attLinkTooltipUnlinkButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageModal click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageModal_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageModal click.
	 * 
	 * @param e - Event
	 */
    attImageModal_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageUploadButtonAndView Dragover.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageUploadButtonAndView_onBeforeDragover(e: Event): boolean;
	/**
	 * Event occurring after attImageUploadButtonAndView Dragover.
	 * 
	 * @param e - Event
	 */
    attImageUploadButtonAndView_onAfterDragover(e: Event): void;
	/**
	 * Event occurring before attImageUploadButtonAndView Drop.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageUploadButtonAndView_onBeforeDrop(e: Event): boolean;
	/**
	 * Event occurring after attImageUploadButtonAndView Drop.
	 * 
	 * @param e - Event
	 */
    attImageUploadButtonAndView_onAfterDrop(e: Event): void;
	/**
	 * Event occurring before attImageUploadButtonAndView click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageUploadButtonAndView_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageUploadButtonAndView click.
	 * 
	 * @param e - Event
	 */
    attImageUploadButtonAndView_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageViewPreButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageViewPreButtion_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageViewPreButton click.
	 * 
	 * @param e - Event
	 */
    attImageViewPreButtion_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageViewNextButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageViewNextButtion_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageViewNextButton click.
	 * 
	 * @param e - Event
	 */
    attImageViewNextButtion_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageUpload input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageUpload_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attImageUpload input.
	 * 
	 * @param e - Event
	 */
    attImageUpload_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attImageUpload blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageUpload_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attImageUpload blur.
	 * 
	 * @param e - Event
	 */
    attImageUpload_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attImageURL input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageURL_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attImageURL input.
	 * 
	 * @param e - Event
	 */
    attImageURL_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attImageURL blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageURL_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attImageURL blur.
	 * 
	 * @param e - Event
	 */
    attImageURL_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attImageInsertButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageInsertButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageInsertButton click.
	 * 
	 * @param e - Event
	 */
    attImageInsertButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attVideoModal click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoModal_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attVideoModal click.
	 * 
	 * @param e - Event
	 */
    attVideoModal_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attVideoEmbedId input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoEmbedId_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attVideoEmbedId input.
	 * 
	 * @param e - Event
	 */
    attVideoEmbedId_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attVideoEmbedId blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoEmbedId_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attVideoEmbedId blur.
	 * 
	 * @param e - Event
	 */
    attVideoEmbedId_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attVideoWidth input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoWidth_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attVideoWidth input.
	 * 
	 * @param e - Event
	 */
    attVideoWidth_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attVideoWidth blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoWidth_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attVideoWidth blur.
	 * 
	 * @param e - Event
	 */
    attVideoWidth_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attVideoHeight input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoHeight_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attVideoHeight input.
	 * 
	 * @param e - Event
	 */
    attVideoHeight_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attVideoHeight blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoHeight_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attVideoHeight blur.
	 * 
	 * @param e - Event
	 */
    attVideoHeight_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attVideoInsertButton click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attVideoInsertButton_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attVideoInsertButton click.
	 * 
	 * @param e - Event
	 */
    attVideoInsertButton_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipWidthInput input.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipWidthInput_onBeforeInput(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipWidthInput input.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipWidthInput_onAfterInput(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipWidthInput blur.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipWidthInput_onBeforeBlur(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipWidthInput blur.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipWidthInput_onAfterBlur(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipWidthInput Keyup.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipWidthInput_onBeforeKeyup(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipWidthInput Keyup.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipWidthInput_onAfterKeyup(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipFloatRadioNone click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipFloatRadioNone_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipFloatRadioNone click.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipFloatRadioNone_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipFloatRadioLeft click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipFloatRadioLeft_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipFloatRadioLeft click.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipFloatRadioLeft_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipFloatRadioRight click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipFloatRadioRight_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipFloatRadioRight click.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipFloatRadioRight_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipShapeRadioSquare click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipShapeRadioSquare_onBeforeClick(e: Event): void;
	/**
	 * Event occurring after attImageAndVideoTooltipShapeRadioSquare click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipShapeRadioSquare_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipShapeRadioRadius click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipShapeRadioRadius_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipShapeRadioRadius click.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipShapeRadioRadius_onAfterClick(e: Event): void;
	/**
	 * Event occurring before attImageAndVideoTooltipShapeRadioCircle click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    attImageAndVideoTooltipShapeRadioCircle_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after attImageAndVideoTooltipShapeRadioCircle click.
	 * 
	 * @param e - Event
	 */
    attImageAndVideoTooltipShapeRadioCircle_onAfterClick(e: Event): void;
	/**
	 * Event occurring before helpModal click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    helpModal_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after helpModal click.
	 * 
	 * @param e - Event
	 */
    helpModal_onAfterClick(e: Event): void;
	/**
	 * Event occurring before placeholder click.
	 * 
	 * @param e - Event
	 * @returns If `true`, proceed with the next action. Otherwise, block.
	 */
    placeholder_onBeforeClick(e: Event): boolean;
	/**
	 * Event occurring after placeholder click.
	 * 
	 * @param e - Event
	 */
    placeholder_onAfterClick(e: Event): void;
}
/**
 * Dedicated storage for CSS-related event handlers.
 * - Similar to `elementEvents` but focused solely on CSS transitions and UI effects.
 * - CSS event hooks do not interfere with element events but execute first.
 * - Runs before or after CSS transitions and animations.
 * - Returning `false` in a `before` handler will prevent the associated visual effect.
 */
export interface CssEvents {
	/**
	 * Event occurring before target click.
	 */
	target_onBeforeClick(e: any): boolean;
	/**
	 * Event occurring after target click.
	 */
	target_onAfterClick(e: any): void;
	/**
	 * Event occurring before target mouseover.
	 */
	target_onBeforeMouseover(e: any): boolean;
	/**
	 * Event occurring after target mouseover.
	 */
	target_onAfterMouseover(e: any): void;
	/**
	 * Event occurring before target mouseout.
	 */
	target_onBeforeMouseout(e: any): boolean;
	/**
	 * Event occurring after target mouseout.
	 */
	target_onAfterMouseout(e: any): void;
	/**
	 * Event occurring before target touchstart.
	 */
	target_onBeforeTouchstart(e: any): boolean;
	/**
	 * Event occurring after target touchstart.
	 */
	target_onAfterTouchstart(e: any): void;
	/**
	 * Event occurring before target touchend.
	 */
	target_onBeforeTouchend(e: any): boolean;
	/**
	 * Event occurring after target touchend.
	 */
	target_onAfterTouchend(e: any): void;
}
/**
 * Runtime variables and settings that manage editor creation and behavior.
 * - Includes per-instance configurations and global values.
 * - Properties with `[index]` support allow individual editor customization.
 *
 * @example
 * if (isMobileDevice) {
 *   vn.variables.attFileMaxSizes[0] = 50 * 1024 * 1024; // Increase max upload size on mobile
 * }
 */
export interface Variables {
	/**
	 * - A unique name assigned during the editor's creation. The name assigned to elements, CSS, etc., can be dynamically set through .noteName to be completely separated from the user's existing source.
	 * - For example, changing vn.variables.noteName to 'test' will set all element IDs to 'test_[idx]_[element]', e.g., 'test_0_textarea'.
	 */
	noteName: string;
	isCreated: boolean;
	/**
	 * - A mode to view Logs, used for development. When Logs are printed, the event and target information are displayed.
	 */
	logMode: LogMode.DEBUG | LogMode.ERROR | LogMode.INFO;
	observerOptions: {
		characterData: boolean,
		childList: boolean,
		subtree: boolean
	};
	/**
	 * - A value controlling the textarea scroll movement and height adjustment in the editor. This takes precedence over .activeModeByDevice for controlling scroll movement and height adjustment.
	 * - `true` : Default value. Scroll changes when the note is focused or blurred.
	 * - `false` : Scroll does not change when the note is focused or blurred.
	 */
	useMobileActiveMode: boolean[];
	lastActiveNote: number;
	recodeNotes: HTMLElement[][];
	recodeContings: number[];
	/**
	 * - The number of records for undo and redo actions.
	 */
	recodeLimit: number[];
	lastScreenHeight: number | null;
	mobileKeyboardExceptHeight: number | null;
	isSelectionProgress: boolean;
	preventChangeScroll: number;
	/**
	 * - Interval time for each event. There’s no need to change, but might be necessary in special situations like drawing more than 20 editors on one screen.
	 * - Interval of the window resize event. Default value is 50.
	 */
	resizeInterval: number;
	/**
	 * - Interval time for each event. There’s no need to change, but might be necessary in special situations like drawing more than 20 editors on one screen.
	 * - Interval of the textarea input event. Default value is 50.
	 */
	inputInterval: number;
	/**
	 * - Interval time for each event. There’s no need to change, but might be necessary in special situations like drawing more than 20 editors on one screen.
	 * - Interval given when loading the editor. Default value is 100. For arranging visual elements like converting text to icons and adjusting editor size before displaying.
	 */
	loadInterval: number;
	canEvents: boolean;
	toolPositions: string[];
	toolDefaultLines: number[];
	/**
	 * - Variables for dynamically setting the size of the textarea
	 * - Default width of the textarea. If not set, the value of textarea-width is inserted. Used for dynamically changing the width.
	 */
	textareaOriginWidths: string[];
	/**
	 * - Variables for dynamically setting the size of the textarea
	 * - Default height of the textarea. If not set, the value of textarea-height is inserted. Used for dynamically changing the height. Only insert css style in px units.(ex. 400px)
	 */
	textareaOriginHeights: string[];
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - `true` : Uses a placeholder.
	 * - `false` : Default value. Does not use a placeholder.
	 */
	placeholderIsVisible: boolean[];
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - Adjusts the vertical position of the placeholder. Negative values are possible. The unit is px. Default value is 0.
	 */
	placeholderAddTop: number[];
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - Adjusts the horizontal position of the placeholder. Negative values are possible. The unit is px. Default value is 0.
	 */
	placeholderAddLeft: number[];
	/**
	 * - Values related to placeholders. The attribute placeholder- can be used, but using these variables allows dynamic control of placeholders.
	 * - Sets the width of the placeholder. The default value is the size of the flexible textarea.
	 */
	placeholderWidth: string[];
	isIOS: boolean;
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
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - File types to block for file attachment. Written in MIME type (ex image/png). Default is [].
	 */
	attFilePreventTypes: string[][];
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - File types to allow for file attachment. Written in MIME type (ex image/png). Default is []. If present, only those files can be attached.
	 */
	attFileAcceptTypes: string[][];
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - Maximum size allowed for file attachment. Default is 20MB.
	 * 
	 * ```typescript
	 * vn.variables.attFileMaxSizes[0] = 50 * 1024 * 1024;
	 * ```
	 */
	attFileMaxSizes: number[];
	attTempFiles: Record<string, File>[];
	/**
	 * - Variables controlling file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attFiles[idx] contains all files attached by the user.
	 * - All files attached by the user so far through file attachment
	 */
	attFiles: Record<string, File>[];
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - File types to block for image attachment. Written in MIME type (ex image/png). Default is [].
	 */
	attImagePreventTypes: string[][];
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - File types to allow for image attachment. Written in MIME type (ex image/png). Default is []. If present, only those files can be attached.
	 */
	attImageAcceptTypes: string[][];
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - Maximum size allowed for image attachment. Default is 20MB.
	 * 
	 * ```typescript
	 * vn.variables.attImageMaxSizes[0] = 50 * 1024 * 1024;
	 * ```
	 */
	attImageMaxSizes: number[];
	attTempImages: Record<string, File>[];
	/**
	 * - Variables controlling image file attachments.
	 * - Data obtained from note.getNoteData() does not include files deleted by the user from the screen, but .attImages[idx] contains all image files attached by the user.
	 * - All image files attached by the user so far through image attachment
	 */
	attImages: Record<string, File>[];
	/**
	 * - The value set by the size-level attribute. (sizeLevel + 11) / 20. Defining .sizeRates[idx] itself is also possible (takes precedence).
	 * User-defined in vanillanote_onBeforeCreate(). This value allows making the editor smaller or larger than controlling via attributes.
	 */
	sizeRates: number[];
	defaultStyles: {
        "font-size": string
        "line-height": string
        "font-family": string
    }[];
	/**
	 * - Sets the language of the editor. Used in conjunction with .languageSet. An error occurs if a key not in .languageSet is entered.
	 * - `'ENG'` : Default value. Sets the language of the note to English.
	 * - `'KOR'` : Sets the language of the note to Korean.
	 * - `'...'` : Can be used after being defined in .languageSet.
	 */
	languages: string[];
}
/**
 * The core object of the Vanillanote editor project.
 *
 * - This object contains all configuration, styles, elements, and runtime data necessary for the creation and management of Vanillanote editors.
 * - Created via the `getVanillanote()` function and passed to `createVanillanote(vn)` to render editors on the page.
 * - All Vanillanote instances on a single page share this single object instance.
 * - Editors can be destroyed using `destroyVanillanote(vn)`.
 *
 * The `Vanillanote` object is composed of constants, CSS definitions, color schemes, language settings, references to DOM elements, event hooks, runtime variables, and utility methods.
 */
export interface Vanillanote {
    /**
     * Critical constants required for the editor’s internal logic.
     * Modifying these values may cause severe errors and is not recommended.
     */
	consts: Consts;
    /**
     * The editor's CSS definitions.
     * - The final CSS styles are dynamically inserted into the document’s header.
     * - CSS selectors are generated in the format: `.vanillanote_[index]_[css-key] { ... }`
     * - Values are defined as key-value pairs and can be customized before creation using `vanillanote_onBeforeCreate()`.
     */
	csses: Csses;
    /**
     * Keyframe animation definitions used within the editor’s UI.
     */
	keyframes: Keyframes;
	/**
	 * Color schemes for the editor's UI components.
	 * - 20 predefined color sets, each defined as an array for multi-editor customization.
	 * - Used for styling icons, backgrounds, text colors, borders, and modals.
	 * - Can be customized per editor instance for unique appearances.
	 */
	colors: Colors;
	/**
	 * Stores references to the editor's generated DOM elements.
	 * - Used to quickly access textareas, toolbars, placeholders, buttons, and other editor parts without repeated DOM queries.
	 * - These references are populated during `createVanillanote()` and can be customized in `vanillanote_onAfterCreate()`.
	 */
	elements: Elements;
	/**
	 * Runtime variables and settings that manage editor creation and behavior.
	 * - Includes per-instance configurations and global values.
	 * - Properties with `[index]` support allow individual editor customization.
	 *
	 * @example
	 * if (isMobileDevice) {
	 *   vn.variables.attFileMaxSizes[0] = 50 * 1024 * 1024; // Increase max upload size on mobile
	 * }
	 */
	variables: Variables;
	/**
	 * Language set definitions for editor internationalization.
	 * - Allows setting tooltip texts, button labels, modal messages, and other UI strings.
	 * - New languages can be added and assigned using either the `language` attribute or by modifying `variables.languages[index]`.
	 * 
	 * @example
	 * vn.languageSet.JPN = {
	 *   Thanks: 'ありがとうございます！',
	 *   boldTooltip: '太字',
	 *   // ... other keys
	 * };
	 */
	languageSet: LanguageSet;
	/**
	 * Event handlers attached to editor HTML elements.
	 * - Supports custom `onBefore` and `onAfter` functions for most editor actions.
	 * - If the `onBefore` function returns `false`, the corresponding event will be prevented.
	 *
	 * @example
	 * vn.elementEvents.boldButton_onBeforeClick = function(e) {
	 *   if (e.target.getAttribute('data-note-index') === '0') {
	 *     alert('Blocked for the first editor');
	 *     return false;
	 *   }
	 * };
	 */
	elementEvents: ElementEvents;
    /**
     * Dedicated storage for CSS-related event handlers.
     * - Similar to `elementEvents` but focused solely on CSS transitions and UI effects.
     * - CSS event hooks do not interfere with element events but execute first.
	 * - Runs before or after CSS transitions and animations.
	 * - Returning `false` in a `before` handler will prevent the associated visual effect.
     */
	cssEvents: CssEvents;
    /**
     * Stores registered event handlers, allowing runtime tracking and dynamic removal if necessary.
     */
	eventStore: EventStore;
	/**
	 * Retrieves a `VanillanoteElement` from the DOM by either its auto-assigned index or a custom `data-note-id` attribute.
	 *
	 * - When creating multiple editors on a single page, Vanillanote assigns each editor a sequential index based on DOM order.
	 * - Each editor element is automatically given:
	 *   - An `id` in the format: `${Vanillanote.variables.noteName}_[index]`
	 *   - A `data-note-index` attribute, which matches its creation index.
	 * - Alternatively, developers can specify a custom `data-note-id` attribute on the editor element in their HTML for more semantic selection.
	 *
	 * This utility function allows developers to easily retrieve a specific `VanillanoteElement` in two ways:
	 * 
	 * 1. **By `number` (auto-assigned index):**
	 *    - Pass an index number (starting from 0) to select the editor in DOM order.
	 *    - Internally uses `document.querySelectorAll('[data-vanillanote]')` and selects by the provided index.
	 *
	 * 2. **By `string` (custom ID):**
	 *    - Pass a `string` that represents the `data-note-id` attribute of the desired editor.
	 *    - This allows more explicit and meaningful references, especially useful in large applications with many editors.
	 *    - Example: `<div data-vanillanote data-note-id="my-editor"></div>`
	 *
	 * ### Why this function is useful:
	 * - It abstracts away the need for verbose DOM queries.
	 * - Ensures type safety by always returning a `VanillanoteElement`.
	 * - Allows convenient access to the editor’s programmatic API (`getNoteData()`, `getNoteIndex()`, `getNote()`) without manual casting.
	 *
	 * ### Example usage:
	 * ```ts
	 * // Using index (0-based):
	 * const vnEditorByIndex = Vanillanote.getVanillanoteElement(0);
	 * const editorData = vnEditorByIndex.getNoteData();
	 *
	 * // Using custom ID:
	 * const vnEditorById = Vanillanote.getVanillanoteElement('my-editor-id');
	 * console.log(vnEditorById.getNoteIndex());
	 * ```
	 *
	 * @param noteIndexOrId - Either a numeric index representing the editor’s creation order, or a string representing the `data-note-id` value.
	 * @returns The corresponding `VanillanoteElement` or null.
	 *
	 * @remarks
	 * - If a string is provided, the function will search for `[data-note-id='your-id']`.
	 * - If a number is provided, it will return the editor at that index from `document.querySelectorAll('[data-vanillanote]')`.
	 * - Ensure that the DOM contains an editor with the matching index or ID; otherwise, `undefined` may be returned.
	 */
	getVanillanoteElement(noteIndexOrId: number | string): VanillanoteElement | null;
    /**
     * A hook function called before displaying alert dialogs in the editor.
     * - Receives the alert message as a parameter.
     * - If this function returns `false`, the default `window.alert()` call will be prevented.
     * - Useful for customizing alert dialogs (e.g., replacing with custom modals or toast notifications).
     *
     * @param message - The alert message.
     * @returns `false` to suppress the default alert; `true` or undefined to allow it.
     *
     * @example
     * vn._beforeAlert = function(message) {
     *   // Custom alert logic here
     *   showCustomPopup(message);
     *   return false; // Prevent default alert
     * };
     */
	_beforeAlert(message: string): boolean;
}
export interface VanillanoteConstructor {
    new (): Vanillanote;
}
/**
 * Represents a DOM element rendered by Vanillanote.
 * 
 * - Multiple editors can be created on a single page, and each will be assigned an index automatically in the order they appear in the DOM.
 * - Each editor element will have an automatically assigned `id` following the pattern: `vanillanote_[index]`.
 * - You can retrieve editor elements using `document.querySelectorAll('[data-vanillanote]')` or by custom attributes like `data-note-id`.
 * - This interface extends `HTMLElement` and adds three utility methods that allow you to retrieve the editor's internal data and reference objects.
 */
export interface VanillanoteElement extends HTMLElement {
	/**
	 * Returns the data object of the current Vanillanote editor instance.
	 *
	 * - Retrieves the internal state for the specific editor this element represents.
	 * - Includes the `noteIndex` (the DOM order-based index of this editor),
	 *   the `textarea` (the `contenteditable="true"` div representing the editor's content),
	 *   and `files` (a collection of currently attached files and images used in the editor).
	 * - Only files and images currently present in the editor (not deleted by the user) are returned.
	 * - Can be used when submitting form data or exporting the editor state.
	 *
	 * @returns An object containing:
	 *  - `noteIndex`: The index number of this editor in the DOM.
	 *  - `textarea`: The HTML element representing the editable content.
	 *  - `files`: A `Record<string, File>` object of active attached files and images.
	 *
	 * @example
	 * const editorEl = document.querySelectorAll('[data-vanillanote]')[0];
	 * const data = editorEl.getNoteData();
	 * console.log(data.noteIndex); // 0
	 * console.log(data.files); // Object containing file UUID keys and File objects
	 * console.log(data.textarea); // The editor's contenteditable div element
	 */
	getNoteData(): {
	  noteIndex: number;
	  textarea: HTMLElement;
	  files: Record<string, File>;
	};
  
	/**
	 * Returns the automatically assigned index of this editor.
	 *
	 * - The index is assigned in the order the editor elements are created and inserted into the DOM.
	 * - This value matches the `data-note-index` attribute of the editor element.
	 * - Can be used for event handling or to easily access related editor controls by index.
	 *
	 * @returns The numeric index of this editor in the DOM.
	 *
	 * @example
	 * const editorEl = document.querySelectorAll('[data-vanillanote]')[0];
	 * const index = editorEl.getNoteIndex();
	 * console.log(index); // 0
	 */
	getNoteIndex(): number;
  
	/**
	 * Returns the global Vanillanote object used by all editor instances on the page.
	 *
	 * - The returned object is shared across all Vanillanote instances created on the same page.
	 * - Can be used for dynamic control, state inspection, or additional runtime interaction.
	 * - The same object is returned regardless of which editor element calls this method.
	 *
	 * @returns The global Vanillanote object instance.
	 *
	 * @example
	 * const editorEl = document.querySelectorAll('[data-vanillanote]')[0];
	 * const vanillanoteInstance = editorEl.getNote();
	 * console.log(vanillanoteInstance); // Shared Vanillanote object
	 */
	getNote(): Vanillanote;
}
