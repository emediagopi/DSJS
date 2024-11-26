class Node{
    construcotr(value){
        this.value = value;
        this.next = null;
    }
}

export default class SinglyLinkedList{
    constructor(){
        this.head = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current = newNode
        }
    }
    display(){
        const nodes = [];
        let current = this.head
        while(current){
            nodes.push(current.data)
            current = current.next;
        }
        return nodes;
    }
}