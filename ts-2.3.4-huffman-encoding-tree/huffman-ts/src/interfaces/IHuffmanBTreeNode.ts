export interface IHuffmanBTreeNode {
    readonly childVals:string[];
    readonly nodeWeight:number;
    readonly left:IHuffmanBTreeNode;
    readonly right:IHuffmanBTreeNode;
}
