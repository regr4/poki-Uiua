C = _ => F(history.replaceState({}, document.title, location.pathname + (q.value ? "?q=" + encodeURIComponent(q.value) : "")))
F = _ => q.focus()
I = _ => {
    var s = new URLSearchParams(location.search)
    b.className = 0 == s.get("w") ? "w" : 0 == s.get("b") ? "b" : ""
    um.href = "quiz?" + b.className
    fetch("table.tsv").then(d => d.text()).then(d => {
        ps = d.replace(/[<>&'"]/g, x => ({
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            "'": '&apos;',
            '"': '&quot;'
        } [x])).split(/\r?\n/g).slice(1, -1).map(r => r.split("\t").filter(w => w != ""))
        c = ps.map(r => r[0])
        e = ps.map(r => r[1])
        isprim = ps.map(r => r[2] == "Primitive")
	rankpoly = ps.map(r => Object({true: "<span class=\"emoji\">✅</span> rank-polymorphic", false: "<span class=\"emoji\">❌</span> not polymorphic", irrelevant: "<span class=\"emoji\">➖</span> N/A"})[r[4]])
        p = d.split(/\r?\n/g).slice(1, -1).map(x => x.toLowerCase().replace(/http\S+\t/, "(>)").replace(/http\S+$/, "(?)"))
        r = ""
        for (var i = 0; i < c.length; i++) {
	    console.log(e[i])
            r += `<tr><td> ${c[i]} </td><td> <a href="https://www.uiua.org/docs/${c[i]}"/></td><td> ${e[i]} </td><td> ${rankpoly[i]} </td></tr>`
        }
        t.innerHTML = r
        F(Q(q.value = s.get("q")))
    })
}
Q = _ => {
    var f, l = q.value.toLowerCase().split(' '),
        r = t.rows,
        n = 0
    for (var i = 0; i < r.length; i++) {
        for (var j = 0; j < l.length; j++) {
            f = p[i].indexOf(l[j]) > -1;
            if (!f) break
        }
        n += !(r[i].hidden = !f)
    }
    z.textContent = "Showing " + n + " of " + r.length
}
W = x => {
    F(b.className = x ? x : "wbg" [1 + "wb".indexOf(b.className[0])]);
    um.href = "quiz?" + b.className
}
X = _ => F(Q(q.value = ""))
