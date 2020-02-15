function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// select child object
function select(obj, path) {
    var child = obj;
    var paths = path.split("_");
    for (var i in paths) {
        var prop = paths[i];
        child = child[prop];
    }
    return child;
}

function defineConfig(path, basepath, config) {
    var config = (basepath? "base="+basepath+"|" : "") + config;
    var varname = "ROOFPIG_CONF_" + path;
    if (!(varname in window)) {
        console.log(path + ":" + config);
        window[varname] = config;
    }
}

function createPage(path) {
    return createManeuvers(select(maneuvers, path), path);
}

function createPanel(content, panelStyle, heading) {
    var panel = $('<div>').addClass("card mb-3").addClass(panelStyle);
    panel.append($('<div>').addClass("card-header").text(heading));
    panel.append($('<div class="card-body">').append(content));
    return panel;
}

function createManeuvers(obj, path) {
    if ("maneuvers" in obj) {
        return createCase(obj, path);
    }

    var $div = $("<div>");
    if (obj.note) {
        $div.append($("<div>").addClass("alert alert-info").html(obj.note.replace(/\n/g, "<br>")));
    }
    for (var x in obj) {
        var child = obj[x];
        if (child === null || typeof child !== 'object') continue;
        var childpath = (path == ""? x : path + "_" + x);
        $div.append(createManeuvers(child, childpath));
    }

    return $div;
}

function ensureRoofpigBaseConfigs(path) {
    var paths = path.split("_");
    var obj = maneuvers;
    var currentPath = "ROOT";
    var lastBase = "";

    for (var i in paths) {

        // check parent
        if (obj.roofpig_conf) {
            defineConfig(currentPath, lastBase, obj.roofpig_conf);
            lastBase = currentPath;
        }
 
        var prop = paths[i];
        obj = obj[prop];
        currentPath = currentPath + "_" + prop;
    }

    return lastBase;
}

// create a leaf case
function createCase(c, path) {
    // ensure all base configs are there
    var lastBase = ensureRoofpigBaseConfigs(path);
    var baseconf = lastBase? "base=" + lastBase + " | " : "";
    
    var $div = $("<div class='clearboth'>");
    if (c.description || c.note) {
        $div.append($("<p>")
                .append($("<span class='desc'>").text(c.description))
                .append($("<span class='note'>").text(c.note)));
    }

    for (var j in c.maneuvers) {
        var maneuver = c.maneuvers[j];
        $div.append($("<div>").addClass("roofpig").attr("data-config", baseconf + "alg=" + maneuver));
    }

    return createPanel($div, "border-info", path);
}

function createNav() {
    var $nav = $("<div class='nav' />");
    $nav.append(createListNode(maneuvers, ""));
    return $nav;
}

function getManeuverCount(obj) {
    if ("maneuvers" in obj) {
        return obj.maneuvers.length;
    }

    var count = 0;
    for (var x in obj) {
        var child = obj[x];
        if (child === null || typeof child !== 'object') continue;
        count += getManeuverCount(child);
    }
    return count;
}

// return an `ul` node
function createListNode(obj, path) {
    if ("maneuvers" in obj) {
        return null;
    }
    
    var $ul = $("<ul>");

    for (var x in obj) {
        var child = obj[x];
        if (child === null || typeof child !== 'object') continue;
        
        var name = x;
        if ("description" in child) {
            name = child.description;
        }

        var childpath = (path == ""? x : path + "_" + x);
        var $a = $("<a>").attr("href", "cube.html?case=" + childpath).text(name);

        var $cul = createListNode(child, childpath);
        var count = getManeuverCount(child);

        var $li = $("<li>");
        $li.append($a);
        if (count > 0) {
            $li.append($("<span>").addClass("note").text("(" + count + ")"));
        }
        if ($cul) {
            $li.append($cul);
        }
        $ul.append($li);
    }
    
    return $ul;
}

function main() {
    var path = getParameterByName("case");
    if (path === null) {
        $("body").append(createNav());
    }
    else {
        $("body").append(createPage(path));
    }
}

// workaround
//var ROOFPIG_CONF_F2L = maneuvers.F2L.roofpig_conf;
//window["ROOFPIG_CONF_F2L"] = maneuvers.F2L.roofpig_conf;
//var ROOFPIG_CONF_PLL = maneuvers.PLL.roofpig_conf;
//var ROOFPIG_CONF_ATOM = maneuvers.ATOM.roofpig_conf;

$(document).ready(function() {
    main();
});
