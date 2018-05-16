var tour = {
    id: "hello-hopscotch",
    steps: [
        {
            title: "My Header",
            content: "This is the header of my page.",
            target: "header",
            placement: "right"
        },
        {
            title: "My content",
            content: "Here is where I put my content.",
            target: document.querySelector("#content p"),
            placement: "bottom"
        }
    ]
};

var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
        [5, 2, 4, 2, 0]
    ]
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data);
var el = document.getElementById('items');
var sortable = Sortable.create(el);
