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
        
        public int DepthOfTree(Leaf_Node root)
        {
            if(root == null)
                return 0;

            int heightLeft = DepthOfTree(root.left);
            int heightRight = DepthOfTree(root.right);

            return Math.Max(heightLeft, heightRight) + 1;

        }
        public bool SameTree(Leaf_Node p, Leaf_Node q)
        {
            if (p == null && q == null)
                return true;
            if(p== null || q == null) return false;

            return (p.key == q.key && SameTree(p.left, q.left) && SameTree(q.right, p.right));

        }
    }
}
