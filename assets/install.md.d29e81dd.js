import{_ as a,o as s,c as e,O as n}from"./chunks/framework.8d1f7aee.js";const u=JSON.parse('{"title":"Installation Guide","description":"","frontmatter":{},"headers":[],"relativePath":"install.md","filePath":"install.md"}'),l={name:"install.md"},o=n('<h1 id="installation-guide" tabindex="-1">Installation Guide <a class="header-anchor" href="#installation-guide" aria-label="Permalink to &quot;Installation Guide&quot;">​</a></h1><p>Every NW.js release includes a modified Node.js at a specific version. It is recommended to <a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noreferrer">install</a> a version greater than or equal to NW.js&#39;s Node version. Consult the <a href="https://nwjs.io/versions" target="_blank" rel="noreferrer">version manifest</a> on the version to install.</p><p>With the environment set up, install <code>nw-builder</code> using npm:</p><p>Using npm:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nw-builder</span></span></code></pre></div><blockquote><p>Note: We install as a dev dependency to prevent it from being packaged with your application code.</p></blockquote><p>You may use alternate package managers:</p><p>Enable <code>corepack</code>:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">corepack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span></span></code></pre></div><p>Or install it if your version does not include it:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">corepack</span></span></code></pre></div><p>Prepare yarn:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">corepack prepare yarn@x.y.z --activate</span></span></code></pre></div><p>Using yarn:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nw-builder</span></span></code></pre></div><p>Prepare yarn:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">corepack prepare pnpm@x.y.z --activate</span></span></code></pre></div><p>Using pnpm:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nw-builder</span></span></code></pre></div><p>For more information, refer to the official <a href="https://nodejs.org/api/corepack.html" target="_blank" rel="noreferrer">corepack documentation</a>.</p>',20),t=[o];function p(r,c,i,d,C,y){return s(),e("div",null,t)}const g=a(l,[["render",p]]);export{u as __pageData,g as default};
