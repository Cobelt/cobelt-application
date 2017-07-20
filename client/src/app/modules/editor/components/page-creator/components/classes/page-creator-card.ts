import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorCard extends PageCreatorElement {

    constructor(options: { elementType?: string } = {}) {
        options.elementType = 'card';
        super(options);
    }

}
