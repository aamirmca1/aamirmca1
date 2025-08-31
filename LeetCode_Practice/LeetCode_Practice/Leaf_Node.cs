using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCode_Practice
{
    internal class Leaf_Node
    {
        public int key;
        public Leaf_Node left, right;
        public Leaf_Node(int key)
        {
            this.key = key;
            this.left = null;
            this.right = null;
        }
    }
}
