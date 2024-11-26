class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

export default class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Add a node at the end
    add(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode
        }
        this.size++;
    }

    // Remove a node by data
    remove(data){
        let current = this.head;
        let previous = null;
        while(current){
            if(current.data === data ){
                if(!previous){
                    this.head = current.next;
                }else{
                    previous.next = current.next
                }
                this.size --;
                return;
            }
            previous = current;
            current=current.next;
        }
    }

    // Display all nodes as an array
    display(){
        const nodes = [];
        let current = this.head;
        while(current){
            nodes.push(current.data);
            current = current.next;
        }
        return nodes;
    }
}