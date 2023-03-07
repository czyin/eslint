/*expected
initial->s1_1->s1_2->s1_3->s1_4->s1_5->s1_6->s1_7->s1_8->s1_4;
s1_2->s1_10;
s1_4->s1_9->s1_2;
s1_5->s1_8;
s1_6->s1_9;
s1_10->final;
*/
while (a) {
    while (b) {
        if (c) {
            break;
        }
        foo();
    }
}

/*DOT
digraph {
    node[shape=box,style="rounded,filled",fillcolor=white];
    initial[label="",shape=circle,style=filled,fillcolor=black,width=0.25,height=0.25];
    final[label="",shape=doublecircle,style=filled,fillcolor=black,width=0.25,height=0.25];
    s1_1[label="Program\nWhileStatement"];
    s1_2[label="Identifier (a)"];
    s1_3[label="BlockStatement\nWhileStatement"];
    s1_4[label="Identifier (b)"];
    s1_5[label="BlockStatement\nIfStatement\nIdentifier (c)"];
    s1_6[label="BlockStatement\nBreakStatement"];
    s1_7[style="rounded,dashed,filled",fillcolor="#FF9800",label="<<unreachable>>\nBlockStatement:exit"];
    s1_8[label="ExpressionStatement\nCallExpression\nIdentifier (foo)"];
    s1_10[label="WhileStatement:exit\nProgram:exit"];
    s1_9[label="WhileStatement:exit\nBlockStatement:exit"];
    initial->s1_1->s1_2->s1_3->s1_4->s1_5->s1_6->s1_7->s1_8->s1_4;
    s1_2->s1_10;
    s1_4->s1_9->s1_2;
    s1_5->s1_8;
    s1_6->s1_9;
    s1_10->final;
}
*/
