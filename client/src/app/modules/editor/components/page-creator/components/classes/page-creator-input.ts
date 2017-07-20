import {PageCreatorElement} from "./page-creator-element";

export class PageCreatorInput extends PageCreatorElement {

    protected _inputType: string;

    constructor(options: { elementType?: string, inputType?: string } = {}) {
        options.elementType = 'input';
        super(options);

        this._inputType = options.inputType || 'text';
    }

}
