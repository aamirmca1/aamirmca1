using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCode_Practice.BST
{
    internal class BinarySearchTree
    {
        public Leaf_Node InsertBinaryTree(Leaf_Node node, int key)
        {
            if (node == null)
                return new Leaf_Node(key);

            if(node.key == key)
                return node;

            if (node.key > key)
            {
                node.left = InsertBinaryTree(node.left, key);
            }
            else
            {
                node.right = InsertBinaryTree(node.right, key);
            }
            return node;
        }
        public void InorderTraversal(Leaf_Node root)
        {
            if(root != null)
            {
                InorderTraversal(root.left);
                Console.WriteLine(root.key);
                InorderTraversal(root.right);
            }
        }
    }
}
