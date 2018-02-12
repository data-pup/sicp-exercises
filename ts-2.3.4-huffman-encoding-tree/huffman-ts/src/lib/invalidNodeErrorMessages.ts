export class InvalidNodeErrorMessages {

    public static leafNodeHasInvalidWeight:string =
        'Leaf node must have a positive, non-zero weight!';

    public static leafNodeHasMultipleTokens:string =
        'Leaf node has multiple tokens!';

    public static parentNodeHasDuplicateTokens:string =
        'Parent node cannot have duplicate tokens!';

    public static parentNodeHasInvalidWeight:string =
        'Parent node\'s weight must match the sum of its children!';

    public static parentNodeIsExtraneous:string =
        'Extraneous parent node detected!';

    public static parentNodeIsMissingTokens:string =
        'Parent node must have a token array!';

}
