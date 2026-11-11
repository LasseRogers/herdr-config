// Usage panel for the typecraft layout: what this window is running right now —
// spaces, tabs, terminals, and agents by status, program and machine.

import { View, div } from "gpui-kit";
import { v_flex, h_flex } from "gpui-base";
import { spaces, agents, panes, theme } from "herdr";

const ORDER = ["working", "blocked", "done", "idle"];

export default class Usage extends View {
  render() {
    const t = theme();
    const sp = spaces();
    const ag = agents();
    const ps = panes();
    const tabCount = sp.reduce((n, s) => n + (s.tabs?.length ?? 0), 0);
    const termCount = ps.filter((p) => p.terminal).length;
    const count = (list, key) => {
      const m = new Map();
      for (const x of list) m.set(key(x), (m.get(key(x)) ?? 0) + 1);
      return [...m.entries()].sort((a, b) => b[1] - a[1]);
    };
    const section = (title) => h_flex().pt(14).pb(6).gap(6).items_center().text_size(10.5).font_bold().text_color(t.dim)
      .child(div().flex_none().child(title)).child(div().flex_1().h(1).bg(t.input));
    const line = (label, value, color) => h_flex().h(22).items_center().text_size(12)
      .child(div().flex_1().min_w(0).truncate().text_color(t.muted).child(label))
      .child(div().flex_none().font_bold().text_color(color ?? t.foreground).child(String(value)));
    const bar = (n, total, color) => div().h(6).w_full().bg(t.raised).child(div().h(6).bg(color).w(total ? Math.max(2, (n / total) * 300) : 0).max_w_full());
    const tile = (label, value) => v_flex().flex_1().p(8).gap(2).border(1).border_color(t.input).bg(t.popover)
      .child(div().text_size(18).font_bold().text_color(t.accent).child(String(value)))
      .child(div().text_size(10.5).text_color(t.dim).child(label));

    return v_flex().size_full().min_h(0).bg(t.chrome).border(1).border_color(t.border).rounded(4).p(12).text_size(12)
      .child(h_flex().gap(7).items_center().text_size(11).font_bold().text_color(t.foreground).child("USAGE"))
      .child(v_flex().id("usage-scroll").flex_1().min_h(0).overflow_y_scrollbar()
        .child(h_flex().pt(12).gap(6).child(tile("SPACES", sp.length)).child(tile("TABS", tabCount)).child(tile("TERMS", termCount)).child(tile("AGENTS", ag.length)))
        .child(section("AGENT STATUS"))
        .children(ORDER.map((s) => {
          const n = ag.filter((a) => a.status === s).length;
          return v_flex().gap(3).pb(6).child(line(s.toUpperCase(), n, n ? (t[s] ?? t.foreground) : t.dim)).child(bar(n, ag.length, t[s] ?? t.dim));
        }))
        .child(section("BY PROGRAM"))
        .children(ag.length ? count(ag, (a) => a.program?.name ?? "Agent").map(([k, n]) => line(k, n)) : [div().text_color(t.dim).child("No agents yet.")])
        .child(section("BY MACHINE"))
        .children(count(sp, (s) => s.machine ?? "This machine").map(([k, n]) => line(k, `${n} space${n === 1 ? "" : "s"}`))));
  }
}
