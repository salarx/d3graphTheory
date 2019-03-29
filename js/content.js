var contentData =
{
  "degree-of-vertex": {

    "content-title": "Degree of a Vertex",

    "theory-content": "<p><b>Degree<\/b> of a vertex is the number of edges falling on it. It tells us how many other vertices are adjacent to that vertex.<\/p><p> Degree of a vertex \\(v\\) is denoted by \\(deg(v)\\). The vertices with \\(deg(v)=0\\) are lone wolves &mdash; unattached to anyone. We have a special name for them. <\/p><p> The vertices having <b>zero degree<\/b> are called <b>isolated vertices.<\/b> They don't have any other vertex connected to them. <\/p><p> The minimum degree in a graph \\(G\\) is symbolized by \\(\\delta(G)\\). And the maximum one by \\(\\Delta(G)\\). To avoid confusion between them, remember that \\(\\delta\\) is the \"small delta\" and \\(\\Delta\\) is the \"big delta\". <\/p><div class=\"note\"> <span class=\"note-word\">Note:<\/span> Remember that \\(\\delta\\) and \\(\\Delta\\) are properties of a graph, whereas \\(deg\\) is property of a vertex. <\/div>",

    "interface-title": "App interface:",

    "interface-content": "<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

    "svg-output": "",

    "prev": "index.html",
    "next": "?graph-coloring",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "graph-coloring": {

    "content-title": "Graph Coloring",

    "theory-content": "<p><b>Graph coloring<\/b> is the assignment of colors to each vertex in a graph such that no two adjacent vertices get the same color.<\/p><p>Sometimes, this is also referred to as <b>proper coloring<\/b> of graph.<\/p><p>You can change color of a vertex by left-clicking on it. In this unit you have 10 colors available for each vertex.<\/p>",

    "interface-title": "App interface:",

    "interface-content": "<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button>",

    "svg-output": "",

    "prev": "?degree-of-vertex",
    "next": "?k-colorable",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "k-colorable": {

    "content-title": "k-Colorable Graph",

    "theory-content": "<p>A graph is said to be \\(k\\mbox{-}\\)<b>colorable<\/b> if it can be properly colored using \\(k\\) colors.<\/p><div class=\"result\"><span class=\"result-word\">Theorem: <\/span>A graph is bipartite if and only if it is \\(2\\mbox{-}\\)colorable.<\/div><p>Now, consider a graph that is \\(k\\mbox{-}\\)colored. Choose any one vertex of the graph and replace it's color by a new \\(\\left(k+1\\right)\\)<sup>th<\/sup> color. Clearly, the graph is still properly colored.<\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span>If a graph is \\(k\\mbox{-}\\)colorable, then it is also \\(\\left(k+n\\right)\\mbox{-}\\)colorable, \\(n \\geq 1\\).<\/div>",

    "interface-title": "App interface:",

    "interface-content": "<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

    "svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><\/ul> <\/div>",

    "prev": "?graph-coloring",
    "next": "?chromatic-number",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "chromatic-number": {

    "content-title": "Chromatic Number",

    "theory-content": "<p><b>Chromatic number<\/b> of a graph is the minimum value of \\(k\\) for which the graph is \\(k\\mbox{-}colorable\\).<\/p><p>In other words, it is the minimum number of colors needed for a proper-coloring of the graph.<\/p><p>Chromatic number of a graph \\(G\\) is denoted by \\(\\chi(G)\\). And a graph with \\(\\chi(G)=k\\) is called a <b>\\(k\\mbox{-}\\)chromatic<\/b> graph.<\/p><p>You might have noticed in the previous chapter (on <a href=\"?k-colorable\">k-Colorable Graphs<\/a>) that some of the problems involved chromatic coloring.<\/p><p>Now we take a look at some common types of graph and their chromatic numbers.<\/p><p><b><a href=\"javascript:setGraph(0);\">Empty Graph<\/a>:<\/b> It's a graph without any edges (\\(|E|=0\\)). All the vertices are isolated. \\(\\chi(G)=1\\).<\/p><p><b><a href=\"javascript:setGraph(1);\">Bipartite Graph<\/a>:<\/b> An empty bipartite graph has \\(\\chi(G)=1\\). A non-empty bipartite graph has \\(\\chi(G)=2\\). Using this, we arrive at the following result.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A graph \\(G\\) is bipartite if and only if \\(\\chi(G)\\leq2\\).<br><br><p>This can be easily established by observing that any graph with \\(\\chi(G)\\leq2\\) is \\(2\\mbox{-}\\)colorable, and hence bipartite. The converse, has already been established earlier.<\/p><\/div><p><b><a href=\"javascript:setGraph(2);\">Star Graph<\/a>:<\/b> A star graph of order \\(n+1\\), denoted by \\(S_{n+1}\\), is the complete bipartite graph \\(K_{1,n}\\), where \\(n\\geq0\\). So, it has same chromatic number as a bipartite graph.<\/p><p><b><a href=\"javascript:setGraph(3);\">Cycle graph<\/a>:<\/b> A cycle graph of order \\(n\\) is denoted by \\(C_n\\). A cycle of odd order has \\(\\chi(C_{2n+1})=3\\), and that of even order has \\(\\chi(C_{2n})=2\\). So, a cycle of even order is also bipartite.<\/p><p><b><a href=\"javascript:setGraph(5);\">Wheel graph<\/a>:<\/b> A wheel graph of order \\(n+1\\) is obtained from \\(C_n\\) by connecting all its vertices to a new vertex (called <em>hub<\/em>). Wheel graph of order \\(n\\) is denoted by \\(W_n\\). A wheel of odd order has \\(\\chi(W_{2n+1})=4\\), and that of even order has \\(\\chi(W_{2n})=3\\).<\/p><p><b><a href=\"javascript:setGraph(7);\">Complete Graph<\/a>:<\/b> Since each vertex is connected to every other vertex, we have \\(\\chi(K_n)=n\\).<\/p>",

    "interface-title": "App interface:",

    "interface-content": "<ul><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

    "svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><\/ul> <\/div>",

    "prev": "?k-colorable",
    "next": "",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  }

};
