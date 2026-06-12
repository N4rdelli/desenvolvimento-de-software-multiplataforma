import AVLTree from "./AVLTree.js";

const arvoreTesteAula = new AVLTree();

let valores = [30, 40, 20, 25, 10, 5, 6]

arvoreTesteAula.insert(30);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();

arvoreTesteAula.insert(40);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();

arvoreTesteAula.insert(20);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();

arvoreTesteAula.insert(25);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();

arvoreTesteAula.insert(10);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();

arvoreTesteAula.insert(5);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();

arvoreTesteAula.insert(6);
arvoreTesteAula.inOrder();
arvoreTesteAula.print();