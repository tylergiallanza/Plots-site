var questions = ['columns','numcat','rel','comp','dist','trend','end'];
var selected = [];
var csv_data = {};
var id_to_names = {};
var qid = 0;
$('body').on('click','button',function(event) {
    console.log('clicked '+event.target.id + ' ' + event.target.className);
    if(event.target.className=='fullButton-6') {
        if(event.target.id.split('-')[1]%2==0) {
            selected.push($('#'+event.target.id).text());
            selected.push(selected[selected.length-2]-$('#'+event.target.id).text());
        } else {
            selected.push(selected[selected.length-1]-$('#'+event.target.id).text());
            selected.push($('#'+event.target.id).text());
        }
    } else {
        selected.push($('#'+event.target.id).text());
    }
    qid = qid + 1;
    if($('#'+event.target.id).text()=='>4') {
        questions[qid] = 'numcat-binary';
    }
    showQuestion();
});

function make2Button(titles) {
    for(var i=0;i<2;i++) {
        var btn = $('<button/>',
            {
            text:titles[i],
            id:'button-'+i,
            class:'fullButton-2'
            }
        );
        $('#placeholder').append(btn);
    }
}
function make3Button(titles) {
    for(var i=0;i<2;i++) {
        var btn = $('<button/>',
            {
            text:titles[i],
            id:'button-'+i,
            class:'fullButton-3'
            }
        );
        $('#placeholder').append(btn);
    }
    $('#placeholder').append(btn);
    var btn = $('<button/>',
        {
        text:titles[2],
        id:'button-2',
        class:'fullButton-3-last'
        }
    );
    $('#placeholder').append(btn);
}
function make5Button(titles) {
    for(var i=0;i<4;i++) {
        var btn = $('<button/>',
            {
            text:titles[i],
            id:'button-'+i,
            class:'fullButton-5'
            }
        );
        $('#placeholder').append(btn);
    }
    var btn = $('<button/>',
        {
        text:titles[4],
        id:'button-4',
        class:'fullButton-5-last'
        }
    );
    $('#placeholder').append(btn);
}
function make6Button(titles) {
    var enabledNum = selected[selected.length-1]*2;
    for(var i=0;i<6;i++) {
        var btn = $('<button/>',
            {
            text:titles[i],
            id:'button-'+i,
            class:'fullButton-6',
            disabled:i>=enabledNum
            }
        );
        $('#placeholder').append(btn);
    }
}
function makeTitle(title) {
    var t = $('<div/>',
        {
        text:title,
        class:'title'
        }
    );
    $('#placeholder').append(t);
}
function makeTitleSplit(title0,title1,title2) {
    var t0 = $('<div/>',
        {
        text:title0,
        class:'title'
        }
    );
    var t1 = $('<div/>',
        {
        text:title1,
        class:'title-split'
        }
    );
    var t2 = $('<div/>',
        {
        text:title2,
        class:'title-split'
        }
    );
    $('#placeholder').append(t0);
    $('#placeholder').append(t1);
    $('#placeholder').append(t2);
}
function clearScreen() {
    $('#placeholder').empty();
}
function showQuestion() {
    clearScreen();
    if(questions[qid]=='columns') {
        makeTitle('How many columns are you plotting?');
        make5Button(['1','2','3','4','>4']);
    } else if(questions[qid]=='numcat') {
        makeTitleSplit('How many columns are:','categorical?','numerical?');
        make6Button(['1','1','2','2','3','3']);
    } else if(questions[qid]=='numcat-binary') {
        makeTitle('Are your columns all categorical, all numerical, or mixed?');
        make3Button(['categorical','numerical','mixed']);
    } else if(questions[qid]=='rel') {
        makeTitle('Are you trying to find relationships in your data?');
        make3Button(['yes','no','maybe']);
    } else if(questions[qid]=='comp') {
        makeTitle('Are you trying to compare individual data points?');
        make3Button(['yes','no','maybe']);
    } else if(questions[qid]=='dist') {
        makeTitle('Are you trying to analyze the distribution of your data?');
        make3Button(['yes','no','maybe']);
    } else if(questions[qid]=='trend') {
        makeTitle('Are you trying to find trends in your data?');
        make3Button(['yes','no','maybe']);
    } else if(questions[qid]=='end') {
        showResults();
    }
}

function search(terms) {
    console.log(terms);
    console.log('matches:');
    results = [];
    $.each(csv_data, function(key, value) {
        if(value.toString() == terms.toString()) {
            console.log(key);
            results.push(key);
        }
    })
    return results;
}

function showResults() {
    var results = [];
    var selectedQueue = [];
    selectedQueue.push(selected);
    while(selectedQueue.length > 0) {
        var s = selectedQueue.shift();
        var firstMaybeIndex = s.indexOf('maybe');
        if(firstMaybeIndex >= 0) {
            var s2 = s.slice(0);
            s[firstMaybeIndex] = 'yes';
            s2[firstMaybeIndex] = 'no';
            selectedQueue.push(s);
            selectedQueue.push(s2);
            continue;
        }
        results = results.concat(search(s));
    }
    results.forEach((r,index) => {
        var keyDiv = $('<div/>',
            {
            text:id_to_names[r],
            class:'plotdisplay',
            id:'plotdisplay-'+r
            }
        );
        $('#placeholder').append(keyDiv);
    });
    if(results.length == 0) {
        var keyDiv = $('<div/>',
            {
            text:'Sorry - no matching plots found! Try loosening the restrictions next time.',
            class:'sorrydisplay'
            }
        );
        $('#placeholder').append(keyDiv);
    }
}
function processCSV(data) {
    var lines = data.split(/r\r\n|\n/);
    lines.forEach((line,index) => {
        split_data = line.split(',');
        csv_data[split_data[0]] = split_data.splice(1);
    });
}
function processCSVNames(data) {
    var lines = data.split(/r\r\n|\n/);
    lines.forEach((line,index) => {
        split_data = line.split(',');
        id_to_names[split_data[0]] = split_data[1];
    });
}
function loadCSV() {
    $.ajax({
        type:'GET',
        url:'theme/js/plots.csv',
        dataType:'text',
        success: function(data) {processCSV(data);}
    });
    $.ajax({
        type:'GET',
        url:'theme/js/plot-names.csv',
        dataType:'text',
        success: function(data) {processCSVNames(data);}
    });
}
$(document).ready(function(){
    console.log('js loaded');
    loadCSV();
    showQuestion();
})
