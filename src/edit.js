/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,BlockControls,AlignmentToolbar,RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes,setAttributes}) {
	const {align,content} = attributes;
	const blockProps = useBlockProps({
		className: 'block-modify-content'
	})
	return (
		<>
		<BlockControls>
			<AlignmentToolbar
			value={align}
			onChange={(value)=>{setAttributes({ align:value})}}

			/>
		</BlockControls>
		<RichText
                { ...blockProps }
                tagName="div" // The tag here is the element output and editable in the admin
                value={ content } // Any existing content, either from the database or an attribute default
                allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
                placeholder={ __( 'Heading...' ) } // Display this text before any content has been added by the user
				style={{textAlign:align}}
            />
			</>
	);
}
