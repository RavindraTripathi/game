import type { Config } from 'tailwindcss';
export default { content:['./app/**/*.tsx','./components/**/*.tsx'],
 theme:{extend:{colors:{ink:'#0b1020',panel:'#131b36',line:'#26325c',violet:'#8b5cf6',volt:'#4f8cff',sun:'#facc15'},
 fontFamily:{mono:['ui-monospace','SFMono-Regular','Menlo','monospace']}}},plugins:[]} satisfies Config;
