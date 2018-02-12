export class InvalidNodeErrorMessages {

    public static leafNodeHasMultipleTokens:string =
        'Leaf node has multiple tokens!';

    public static leafNodeHasInvalidWeight:string =
        'Leaf node must have a positive, non-zero weight!';

    public static parentNodeIsMissingTokens:string =
        'Parent node must have a token array!';

    public static parentNodeIsMissingWeight:string =
        'Parent node must have a non-zero weight!';

    public static parentNodeHasIncorrectWeight:string =
        'Parent node\'s weight must match the sum of its children!';

    public static parentNodeHasDuplicateTokens:string =
        'Parent node cannot have duplicate tokens!';

    public static parentNodeIsExtraneous:string =
        'Extraneous parent node detected!';

}
