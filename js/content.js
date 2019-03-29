var contentData =
{
  "degree-of-vertex": {

    "content-title": "Degree of a Vertex",

    "theory-content": "<p><b>Degree<\/b> of a vertex is the number of edges falling on it. It tells us how many other vertices are adjacent to that vertex.<\/p><p> In the diagram, each vertex is labelled by its degree. Make some changes and see how degree of vertices change. <\/p><p> Degree of a vertex \\(v\\) is denoted by \\(deg(v)\\). The vertices with \\(deg(v)=0\\) are lone wolves &mdash; unattached to anyone. We have a special name for them. <\/p><p> The vertices having <b>zero degree<\/b> are called <b>isolated vertices.<\/b> They don't have any other vertex connected to them. <\/p><p> The minimum degree in a graph \\(G\\) is symbolized by \\(\\delta(G)\\). And the maximum one by \\(\\Delta(G)\\). To avoid confusion between them, remember that \\(\\delta\\) is the \"small delta\" and \\(\\Delta\\) is the \"big delta\". <\/p><div class=\"note\"> <span class=\"note-word\">Note:<\/span> Remember that \\(\\delta\\) and \\(\\Delta\\) are properties of a graph, whereas \\(deg\\) is property of a vertex. <\/div>",

    "interface-title": "App interface:",

    "interface-content": "<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All</button>",

    "svg-output": "",

    "prev": "index.html",
    "next": "?havel-hakimi",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "havel-hakimi": {

    "content-title": "Havel-Hakimi Algorithm",

    "theory-content": "<p>It is a difficult task to determine whether a sequence is graphic or not. The Havel-Hakimi Theorem makes the task a lot easier. <\/p><p>Go through the theorem or you can skip it and jump on to the algorithm at the bottom.<\/p><div class=\"result\"> <span class=\"result-word\">Havel-Hakimi Th: <\/span> The nonincreasing sequence \\[(d_1, d_2, ..., d_n)\\] is graphic if and only if the sequence \\[ (d_2-1, d_3-1, ..., d_{d_1+1}-1, \\\\d_{d_1+2}, d_{d_1+3}, ..., d_n) \\] is also graphic. <\/div><p> See how the second sequence was built? The first sequence was nonincreasing, which means the highest degree in it is \\(d_1\\). We took the vertex having highest degree (\\(d_1\\)) and connected it to next \\(d_1\\) vertices with highest degrees. In the new degree sequence, we have exhausted first term of the previous sequence and decreased next \\(d_1\\) terms by one.<\/p><p> Now, the theorem says that either both the sequences are graphic or both are non-graphic. We can again apply the theorem on the new sequence to obtain yet another sequence. We can repeat this process till the problem reduces to an easy one. Thus all of the sequences obtained in this process will be graphic or none them would be.<\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> The sequence obtained after applying theorem might not be nonincreasing. In such a case, you will have to rearrange it in nonincreasing order before re-applying the theorem. <\/div><p> You can check this <a href=\"https:\/\/en.wikipedia.org\/wiki\/Havel%E2%80%93Hakimi_algorithm\" target=\"_blank\">Wikipedia link<\/a> for more information. You can search the internet for proof of the theorem. <\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span> A sequence with all zeroes is graphic since we can always draw that many isolated vertices.<\/div><p>Your task now is to draw a graph for the each of the given graphic sequences. For this task, you can <b>use the following algorithm<\/b> which is based on the above theorem.<\/p><div class=\"result\"> <span class=\"result-word\">Algorithm: <\/span> <p><\/p><ol> <li>Pick the vertex with highest target degree. Lets call this value \\(k\\).<\/li><li>Connect this vertex to next \\(k\\) vertices having highest degree. Now this vertex has been exhausted.<\/li><li>Repeat steps 1 and 2 till you exhaust all the vertices.<\/li><li>If all the vertices get exhausted, then the sequence has reduced to all zeroes and hence the sequence is graphic.<\/li><li>If you end up with non-zero vertices that can't be exhausted further, then the sequence isn't graphic.<\/li><\/ol> <\/div><p>It is guaranteed that all the sequences in this exercise are graphic.<\/p>",

    "interface-title": "App interface:",

    "interface-content": "<ul> <li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete an edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-edges\" class=\"btn btn-default\">Reset Edges<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

    "svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a>1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><li><a>11<\/a><\/li><li><a>12<\/a><\/li><\/ul> <\/div>",

    "prev": "?degree-of-vertex",
    "next": "?graph-coloring",
    "script": "app.js",
    "star": "y",
    "style": "app.css"
  },

  "graph-coloring": {

    "content-title": "Graph Coloring",

    "theory-content": "<p><b>Graph coloring<\/b> is the assignment of colors to each vertex in a graph such that no two adjacent vertices get the same color.<\/p><p>Sometimes, this is also referred to as <b>proper coloring<\/b> of graph.<\/p><p>You can change color of a vertex by left-clicking on it. In this unit you have 10 colors available for each vertex.<\/p><p>Try your hands on the graph and see it for yourself!<\/p>",

    "interface-title": "App interface:",

    "interface-content": "<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

    "svg-buttons": "<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button>",

    "svg-output": "",

    "prev": "?havel-hakimi",
    "next": "?k-colorable",
    "script": "app.js",
    "star": "n",
    "style": "app.css"
  },

  "k-colorable": {

    "content-title": "k-Colorable Graph",

    "theory-content": "<p>A graph is said to be \\(k\\mbox{-}\\)<b>colorable<\/b> if it can be properly colored using \\(k\\) colors.<\/p><p>For example, a <a href=\"?bipartite\">bipartite graph<\/a> is \\(2\\mbox{-}\\)colorable. To see this, just assign two different colors to the two disjoint sets in a bipartite graph.<\/p><p>Conversely, if a graph is \\(2\\mbox{-}\\)colorable, then the vertices having same color can be taken as disjoint sets. Hence, we arrive at the following result:<\/p><div class=\"result\"><span class=\"result-word\">Theorem: <\/span>A graph is bipartite if and only if it is \\(2\\mbox{-}\\)colorable.<\/div><p>Now, consider a graph that is \\(k\\mbox{-}\\)colored. Choose any one vertex of the graph and replace it's color by a new \\(\\left(k+1\\right)\\)<sup>th<\/sup> color. Clearly, the graph is still properly colored.<\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span>If a graph is \\(k\\mbox{-}\\)colorable, then it is also \\(\\left(k+n\\right)\\mbox{-}\\)colorable, \\(n \\geq 1\\).<\/div><p>Another thing worth noticing is that a graph is \\(1\\mbox{-}\\)colorable if and only if it is totally disconnected, that is all its vertices are isolated.<\/p><p>In each of the following excercises, you're given a graph and a limited number of colors. Your task is to color the graphs (properly). Try to <b>minimize<\/b> the number of colors you use.<\/p>",

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

    "theory-content": "<p><b>Chromatic number<\/b> of a graph is the minimum value of \\(k\\) for which the graph is \\(k\\mbox{-}colorable\\).<\/p><p>In other words, it is the minimum number of colors needed for a proper-coloring of the graph.<\/p><p>Chromatic number of a graph \\(G\\) is denoted by \\(\\chi(G)\\). And a graph with \\(\\chi(G)=k\\) is called a <b>\\(k\\mbox{-}\\)chromatic<\/b> graph.<\/p><p>You might have noticed in the previous chapter (on <a href=\"?k-colorable\">k-Colorable Graphs<\/a>) that some of the problems involved chromatic coloring.<\/p><p>Now we take a look at some common types of graph and their chromatic numbers.<\/p><p><b><a href=\"javascript:setGraph(0);\">Empty Graph<\/a>:<\/b> It's a graph without any edges (\\(|E|=0\\)). All the vertices are isolated. \\(\\chi(G)=1\\). Note that an empty graph is also <a href=\"?bipartite\">bipartite<\/a>.<\/p><p><b><a href=\"javascript:setGraph(1);\">Bipartite Graph<\/a>:<\/b> An empty bipartite graph has \\(\\chi(G)=1\\). A non-empty bipartite graph has \\(\\chi(G)=2\\). Using this, we arrive at the following result.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A graph \\(G\\) is bipartite if and only if \\(\\chi(G)\\leq2\\).<br><br><p>This can be easily established by observing that any graph with \\(\\chi(G)\\leq2\\) is \\(2\\mbox{-}\\)colorable, and hence bipartite. The converse, has already been established earlier.<\/p><\/div><p><b><a href=\"javascript:setGraph(2);\">Star Graph<\/a>:<\/b> A star graph of order \\(n+1\\), denoted by \\(S_{n+1}\\), is the complete bipartite graph \\(K_{1,n}\\), where \\(n\\geq0\\). So, it has same chromatic number as a bipartite graph.<\/p><p><b><a href=\"javascript:setGraph(3);\">Cycle graph<\/a>:<\/b> A cycle graph of order \\(n\\) is denoted by \\(C_n\\). A cycle of odd order has \\(\\chi(C_{2n+1})=3\\), and that of even order has \\(\\chi(C_{2n})=2\\). So, a cycle of even order is also bipartite.<\/p><p><b><a href=\"javascript:setGraph(5);\">Wheel graph<\/a>:<\/b> A wheel graph of order \\(n+1\\) is obtained from \\(C_n\\) by connecting all its vertices to a new vertex (called <em>hub<\/em>). Wheel graph of order \\(n\\) is denoted by \\(W_n\\). A wheel of odd order has \\(\\chi(W_{2n+1})=4\\), and that of even order has \\(\\chi(W_{2n})=3\\).<\/p><p><b><a href=\"javascript:setGraph(7);\">Complete Graph<\/a>:<\/b> Since each vertex is connected to every other vertex, we have \\(\\chi(K_n)=n\\).<\/p>",

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
