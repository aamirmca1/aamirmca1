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

        public bool SearchNode(Leaf_Node node, int key)
        {
            if(node == null)
                return false;

            if(node.key == key)
                return true;

            if (key < node.key)
                return SearchNode(node.left, key);
            else if (key > node.key)
                return SearchNode(node.right, key);

            return false;
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
