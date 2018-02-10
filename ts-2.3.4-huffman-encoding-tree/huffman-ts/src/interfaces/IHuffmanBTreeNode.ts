export interface IHuffmanBTreeNode {
    readonly tokens:string[];
    readonly weight:number;
    readonly left:IHuffmanBTreeNode;
    readonly right:IHuffmanBTreeNode;
}
