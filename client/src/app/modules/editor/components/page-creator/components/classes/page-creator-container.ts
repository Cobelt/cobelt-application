import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorContainer extends PageCreatorElement {

    constructor(options: { elementType?: string } = {}) {
        options.elementType = 'container';
        super(options);
    }

}
