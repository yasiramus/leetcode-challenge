// // // Find Elements in a Contaminated Binary Tree
// // Question:
// // Given a binary tree with the following rules:

// // root.val == 0
// // For any treeNode:
// // If treeNode.val has a value x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
// // If treeNode.val has a value x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
// // Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

// // Implement the FindElements class:

// // FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
// // bool find(int target) Returns true if the target value exists in the recovered binary tree.
 
// // Example 1:
// // Input
// // ["FindElements","find","find"]
// // [[[-1,null,-1]],[1],[2]]
// // Output
// // [null,false,true]
// // Explanation
// // FindElements findElements = new FindElements([-1,null,-1]); 
// // findElements.find(1); // return False 
// // findElements.find(2); // return True 
// // Example 2:


// // Input
// // ["FindElements","find","find","find"]
// // [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
// // Output
// // [null,true,true,false]
// // Explanation
// // FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
// // findElements.find(1); // return True
// // findElements.find(3); // return True
// // findElements.find(5); // return False
// // Example 3:


// // Input
// // ["FindElements","find","find","find","find"]
// // [[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
// // Output
// // [null,true,false,false,true]
// // Explanation
// // FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
// // findElements.find(2); // return True
// // findElements.find(3); // return False
// // findElements.find(4); // return False
// // findElements.find(5); // return True
 

// // Constraints:
// // TreeNode.val == -1
// // The height of the binary tree is less than or equal to 20
// // The total number of nodes is between [1, 104]
// // Total calls of find() is between [1, 104]
// // 0 <= target <= 106

// Approach 1: Tree Traversal (DFS)
// Intuition
// Our goal is to restore the original values of the tree before it was contaminated. The problem gives us three key rules that define how values are assigned to nodes based on their parent. If we carefully analyze these rules, we can see that the root node always has a value of0. From this starting point, we can apply the second rule to determine that the left child (if it exists) must have a value of0 * 2 + 1 = 1, and the third rule tells us that the right child must have a value of0 * 2 + 2 = 2. Once we establish these values, we can continue applying the same logic to the children of these nodes, propagating the correct values throughout the tree.

// This observation naturally leads to a recursive approach. Since each node's value is determined by its parent, we can traverse the tree while applying these rules at every step, ensuring that each node is assigned its correct value. To keep track of the values we recover, we store them in a set calledseen. This allows us to efficiently check whether a given value exists in the tree whenever needed.

// The best way to traverse the tree in this scenario isdepth-first search (DFS). DFS is particularly useful here because it allows us to fully process one branch of the tree before moving to the next, making it a straightforward way to assign values as we traverse. The DFS process follows a simple structure:

// If we reach anullnode, we stop and return immediately, as there’s nothing left to explore.
// For each valid node, we store its recovered value in ourseenset.
// We then move to the left child, using rule 2 (currentValue * 2 + 1) to compute its value before making a recursive DFS call.
// We move to the right child next, using rule 3 (currentValue * 2 + 2) before making another recursive DFS call.
// To implement this, we define a functionDFS(currentNode, currentValue), wherecurrentNoderepresents the node we are currently processing, andcurrentValueis its correct original value. This function will handle the recursive traversal and ensure each node gets assigned its correct value.

// Since we always know the parent’s value, we can immediately compute the child's values and pass them into the next recursive call. By the end of this process, we will have fully reconstructed the tree’s original values, and since all recovered values are stored inseen, checking for the existence of a number in the tree becomes a simple lookup operation.

// Algorithm
// Declare a HashSetseenas a member of theFindElementsclass
// ForFindElements(root)constructor:
// Initializeseento an empty set.
// Call the helper functiondfs(root, 0).
// For helper functiondfs(currentNode, currentValue, seen):
// If thecurrentNodeisnull, then we return.
// Otherwise, we process the value ofcurrentNodeby addingcurrentValuetoseen.
// We then recurse to the left and right children:
// For left child, we calldfs(currentNode.left, currentValue * 2 + 1, seen).
// For right child, we calldfs(currentNode.right, currentValue * 2 + 2, seen).
// Forfind(target)function:
// We return whether or notseencontainstarget: returnseen.contains(target).
// Implementation

// Complexity Analysis
// LetNbe the number of nodes inroot.

// Time Complexity:O(N)forFindElements,O(1)forfind

// For theFindElementsconstructor, traversing throughrootand processing all nodes takesO(N)time. Afterwards, each call offindlooks up a value in our set, which takesO(1)time.

// Space Complexity:O(N)

// After theFindElementsconstructor is called, our set contains the values of all the nodes ofroot, which takesO(N)space.

