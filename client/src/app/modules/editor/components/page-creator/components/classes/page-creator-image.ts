import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorImage extends PageCreatorElement {

    constructor(options: { elementType?: string } = {}) {
        options.elementType = 'image';
        super(options);
    }

}
