C = _ => F(history.replaceState({}, document.title, location.pathname + (q.value ? "?q=" + encodeURIComponent(q.value) : "")))
F = _ => q.focus()
R = {d:/[=≠≤≥+\-×*÷◿∨ⁿ↧↥∠ℂ≍⊟⊂⊏⊡↯↙↘↻⤸▽⌕⦷∊⨂⊥⍤]|&(gt|lt);/.source,m:/[¬±¯⌵⨪√ₑ∿⌊⌈⁅⧻△⇡⊢⊣⇌♭¤⋯⍆⍏⍖⊚◴⊛⧆⋕]/.source}
highlight = c => 
    c.replace(new RegExp(String.raw`
        (?<s>@(&.*?;|\\.|.))|(?<n>¯?[0-9.ηπτ∞]+)|
        (?<mf>□(?!₂)|(${R.m}|${R.d})[₋₀-₉]+|${R.m})|(?<df>□₂|${R.d})|
        (?<tra>⍉[₋₀-₉]*)|(?<bot>∩[₋₀-₉]*)|
        (?<mm>[˙˜⊙⋅⟜⊸⤙⤚◠◡∧\/\\≡⍚⊞⧅⧈⍥⊕⊜⧋◇∪⌅°⌝⍩⩜∂∫][₋₀-₉]*)|(?<dm>[⊃⊓⍜⍢⬚⨬⍣][₋₀-₉]*|path)`.replace(/\s/g,""),"g"),
        (m,...g)=>`<span class="noinv tk-${Object.entries(g.at(-1)).find(e=>e[1])[0]}">${m}</span>`
    )
I = _ => {
    var s = new URLSearchParams(location.search)
    b.className = 0 == s.get("w") ? "w" : 0 == s.get("b") ? "b" : ""
    um.href = "quiz?" + b.className
    fetch("table.tsv").then(d => d.text()).then(d => {
        ent = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            "'": '&apos;',
            '"': '&quot;',
        }
        ps = d.replace(/[<>&'"]/g, x => ent[x]).split(/\r?\n/g).slice(1, -1).map(r => r.split("\t").filter(w => w != ""))
        c = ps.map(r => r[0])
        h = c.map(highlight)
        e = ps.map(r => r[1])
        isprim = ps.map(r => r[2] == "Primitive")
        rankpoly = ps.map(r => Object({true: "<span class=\"noinv\">✅</span> rank-polymorphic", false: "<span class=\"noinv\">❌</span> not polymorphic", irrelevant: "<span class=\"noinv\">➖</span> N/A"})[r[4]])
        experimental = ps.map(r => r[8] == "true" ? "<span class=\"noinv\">🧪</span> experimental" : "")
        p = d.split(/\r?\n/g).slice(1, -1).map(x => x.toLowerCase().replace(/http\S+\t/, "(>)").replace(/http\S+$/, "(?)"))
        r = ""
        for (var i = 0; i < c.length; i++) {
            r += `<tr><td>${h[i]}</td><td><a href="https://www.uiua.org/docs/${encodeURIComponent(c[i].replace(/&.*?;/g,s=>Object.entries(ent).find(kv=>kv[1]==s)[0]))}"/></td><td>${e[i]}</td><td>${rankpoly[i]}</td><td>${experimental[i]}</td></tr>`
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
