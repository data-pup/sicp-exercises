import { INodeCheckResult } from '../HuffmanBTreeValidation/INodeCheckResult';

export interface IHuffmanBTreeNode {
    // Member variables.
    readonly tokens:string[];
    readonly weight:number;
    readonly left:IHuffmanBTreeNode;
    readonly right:IHuffmanBTreeNode;
    readonly checkResults:INodeCheckResult;

    // Public methods.
    hasChildren() : boolean;
    hasSingleToken() : boolean;
    hasTokens() : boolean;
    hasWeight() : boolean;
    isEmpty() : boolean;
    isLeaf() : boolean;
}
