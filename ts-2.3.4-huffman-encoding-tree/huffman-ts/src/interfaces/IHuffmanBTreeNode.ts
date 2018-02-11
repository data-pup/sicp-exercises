export interface IHuffmanBTreeNode {
    readonly tokens:string[];
    readonly weight:number;
    readonly left:IHuffmanBTreeNode;
    readonly right:IHuffmanBTreeNode;
    hasChildren() : boolean;
    hasSingleToken() : boolean;
    hasTokens() : boolean;
    hasWeight() : boolean;
    isEmpty() : boolean;
    isLeaf() : boolean;
}
