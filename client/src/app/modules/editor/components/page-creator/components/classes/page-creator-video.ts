import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorVideo extends PageCreatorElement {

    constructor(options: { elementType?: string } = {}) {
        options.elementType = 'video';
        super(options);
    }

}
