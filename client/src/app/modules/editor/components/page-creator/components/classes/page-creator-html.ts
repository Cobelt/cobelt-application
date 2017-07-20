import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorHtml extends PageCreatorElement {

    constructor(options: { elementType?: string } = {}) {
        options.elementType = 'html';
        super(options);
    }

}
