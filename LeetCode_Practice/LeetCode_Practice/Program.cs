// See https://aka.ms/new-console-template for more information
using LeetCode_Practice;
using LeetCode_Practice.BST;

Console.WriteLine("Binary search Tree");

BinarySearchTree binarySearchTree = new BinarySearchTree();
Leaf_Node node = new Leaf_Node(10);

binarySearchTree.InsertBinaryTree(node, 30);
binarySearchTree.InsertBinaryTree(node, 20);
binarySearchTree.InsertBinaryTree(node, 40);
binarySearchTree.InsertBinaryTree(node, 70);
binarySearchTree.InsertBinaryTree(node, 60);

binarySearchTree.InorderTraversal(node);