export class PageCreatorElement {

    protected _elementType: string;

    constructor(options: {
        elementType?: string,

    } = {}) {
        this._elementType = options.elementType;
    }

}
