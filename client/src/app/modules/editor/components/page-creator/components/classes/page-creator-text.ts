import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorText extends PageCreatorElement {

    constructor(options: { elementType?: string } = {}) {
        options.elementType = 'text';
        super(options);
    }

}
