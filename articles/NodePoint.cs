using System.Collections.Generic;
using UnityEngine;
//using Sirenix;
//using Sirenix.OdinInspector;
#if UNITY_EDITOR
using UnityEditor;
#endif

//This is a simple node class that allows you to create linked node transforms in the editor.
//This class uses some Odin functionality, I've commented it out for now so you can try it out without needing Odin
//These nodes are ulitmately used by a NodeFollower class that pathfinds over them and moves from neighbour to neighbour.
public class NodePoint : MonoBehaviour {

    //Node Info
    public List<NodePoint> neighbours = new List<NodePoint>();
    public float radius = 1f;

    //Editor Gizmo Settings
    public bool drawGizmos = false;
    public bool drawSpheres = false;
    public bool streetNode = false;


    private void Awake() {
        RemoveNullNodes();
    }

    //The MakeNeighbour function creates a new node and links the new node and the old node together.
    //It has an OdinInspector [Button] tag that creates a button for this function in the editor;
    //[Button]
    [ContextMenu("MakeNeighbour")]
    public void MakeNeighbour() {
        NodePoint n = Instantiate(this, this.transform.parent);
        neighbours.Add(n);
        n.neighbours = new List<NodePoint>() { this };
        n.transform.position = transform.position + new Vector3(1, 0, 0);
        n.gameObject.name = "NodePoint";
#if UNITY_EDITOR
        Selection.activeObject = n.gameObject;
#endif
    }

    //This is an editor function that looks at all the currently selected gameobjects that have nodepoint scripts attached to them and connects them all together
    //This is used to easily connect two nodes that were not initially created as neighbours
    //Also uses an Odin button
    //[Button]
    [ContextMenu("Connect Selected Nodes")]
    public void ConnectSelectedNodes() {
#if UNITY_EDITOR
        NodePoint[] n = Selection.GetFiltered<NodePoint>(SelectionMode.Unfiltered);
        foreach (NodePoint n1 in n) {
            foreach (NodePoint n2 in n) {
                if (n1 != n2 && !n1.neighbours.Contains(n2)) n1.neighbours.Add(n2);
            }
        }
#endif
    }

    //This is a safety function that removes any null nodes in case I made a node in the editor and then deleted it.
    public void RemoveNullNodes() {
        neighbours.RemoveAll(t => t == null);
    }

    //This function is used by the node follower to pick a new starting node, it tries to avoid returning the node the follower last visited if possible
    public NodePoint NewStartingNode(NodePoint prevNode) {
        if (neighbours == null || neighbours.Count == 0) return null;
        if (prevNode == null) return neighbours.PickRandom();
        List<NodePoint> ns = new List<NodePoint>();
        foreach (NodePoint dd in neighbours) {
            if (dd != prevNode) {
                ns.Add(dd);
            }
        }
        if (ns.Count == 0) {
            return neighbours.PickRandom();
        }
        return ns.PickRandom();
    }

    //This draws lines between the nodes and spheres that show their location and size
    private void OnDrawGizmos() {

        if (!drawGizmos) return;
        if (drawSpheres) {
            Gizmos.color = Color.blue;
            Gizmos.DrawSphere(transform.position, radius);
        }

        foreach (NodePoint n in neighbours) {
            if (n != null) {
                if (n.GetInstanceID() > GetInstanceID()) {
                    Gizmos.color = Color.green;
                    Gizmos.DrawLine(transform.position, n.transform.position);
                }
            }
        }
    }

}


//Added list extension here. Normally this would be in a seperate class, but I included it here in case you want to run this to see if it works.
public static class ListExtensions {


    public static T PickRandom<T>(this List<T> list) {
        return list[UnityEngine.Random.Range(0, list.Count)];
    }
}