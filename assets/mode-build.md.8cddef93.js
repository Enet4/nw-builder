import{_ as s,o as a,c as n,O as l}from"./chunks/framework.8d1f7aee.js";const A=JSON.parse('{"title":"Build NW.js applications","description":"","frontmatter":{},"headers":[],"relativePath":"mode-build.md","filePath":"mode-build.md"}'),o={name:"mode-build.md"},p=l(`<h1 id="build-nw-js-applications" tabindex="-1">Build NW.js applications <a class="header-anchor" href="#build-nw-js-applications" aria-label="Permalink to &quot;Build NW.js applications&quot;">​</a></h1><blockquote><p>Currently file globbing is broken and it is recommended to disable it.</p></blockquote><p>Module usage:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">nwbuild</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">glob</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>This is equivalent to:</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">nwbuild</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">latest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">flavor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">normal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">platform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">linux</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">arch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x64</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">downloadUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://dl.nwjs.io</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">manifestUrl</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://nwjs.io/versions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cacheDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./cache</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">outDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./out</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  srcDir: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ffmpeg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">glob</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>CLI usage:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nwbuild</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mode=build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--glob=false</span></span></code></pre></div><p>This is equivalent to:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nwbuild</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mode=build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version=latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--flavor=normal</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--platform=linux</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--arch=x64</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--downloadUrl=https://dl.nwjs.io</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--manifestUrl=https://nwjs.io/versions</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cacheDir=./cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--outDir=./out</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cache=true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ffmpeg=false</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--glob=false</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><p>Note: File permissions are incorrectly set for Linux or MacOS apps built on Windows platform.</p><blockquote><p><a href="https://www.geeksforgeeks.org/node-js-fs-chmod-method/" target="_blank" rel="noreferrer">The Windows platform only supports the changing of the write permission. It also does not support the distinction between the permissions of user, group, or others.</a></p></blockquote><p>When the <code>platform</code> and <code>arch</code> are not specified, they default to the host platform and arch. For this guide, we are assumed to be using Linux x64.</p>`,13),e=[p];function t(c,r,D,y,i,C){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};
