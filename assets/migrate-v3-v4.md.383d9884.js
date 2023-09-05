import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.356f6f12.js";const h=JSON.parse('{"title":"Migrate from v3 to v4","description":"","frontmatter":{},"headers":[],"relativePath":"migrate-v3-v4.md","filePath":"migrate-v3-v4.md"}'),o={name:"migrate-v3-v4.md"},l=p(`<h1 id="migrate-from-v3-to-v4" tabindex="-1">Migrate from v3 to v4 <a class="header-anchor" href="#migrate-from-v3-to-v4" aria-label="Permalink to &quot;Migrate from v3 to v4&quot;">​</a></h1><h2 id="update-nw-builder" tabindex="-1">Update <code>nw-builder</code> <a class="header-anchor" href="#update-nw-builder" aria-label="Permalink to &quot;Update \`nw-builder\`&quot;">​</a></h2><p>With npm:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nw-builder@^4.2.3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nw-builder@^4.2.3</span></span></code></pre></div><p>With yarn:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upgrade</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nw-builder@^4.2.3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upgrade</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nw-builder@^4.2.3</span></span></code></pre></div><p>With pnpm:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nw-builder@^4.2.3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nw-builder@^4.2.3</span></span></code></pre></div><h2 id="update-options" tabindex="-1">Update options <a class="header-anchor" href="#update-options" aria-label="Permalink to &quot;Update options&quot;">​</a></h2><p>Let&#39;s take an example of v3 code and migrate it to v4.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NwBuilder</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;nw-builder&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">NwBuilder</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  files: [</span><span style="color:#9ECBFF;">&quot;./nwapp/**/*&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;./other/**/*.js&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  version: </span><span style="color:#9ECBFF;">&quot;latest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  flavor: </span><span style="color:#9ECBFF;">&quot;normal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  platforms: [</span><span style="color:#9ECBFF;">&quot;win32&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;win64&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;osx32&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;osx64&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;linux32&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;linux64&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  cacheDir: </span><span style="color:#9ECBFF;">&quot;./cache&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  buildDir: </span><span style="color:#9ECBFF;">&quot;./build&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  buildType: </span><span style="color:#9ECBFF;">&quot;versioned&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  forceDownload: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  appName: </span><span style="color:#9ECBFF;">&quot;nwdemo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  appVersion: </span><span style="color:#9ECBFF;">&quot;0.1.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  argv: </span><span style="color:#9ECBFF;">&quot;--nw-stderr-logging&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  macCredits: </span><span style="color:#9ECBFF;">&quot;./nwapp/credits.html&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  macIcns: </span><span style="color:#9ECBFF;">&quot;./nwapp/mac.icns&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  macPlist: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  winVersionString: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  winIco: </span><span style="color:#9ECBFF;">&quot;./nwapp/win.ico&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  zip: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  macZip: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mergeZip: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nw.</span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NwBuilder</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;nw-builder&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">NwBuilder</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  files: [</span><span style="color:#032F62;">&quot;./nwapp/**/*&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;./other/**/*.js&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  version: </span><span style="color:#032F62;">&quot;latest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  flavor: </span><span style="color:#032F62;">&quot;normal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  platforms: [</span><span style="color:#032F62;">&quot;win32&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;win64&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;osx32&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;osx64&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;linux32&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;linux64&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  cacheDir: </span><span style="color:#032F62;">&quot;./cache&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  buildDir: </span><span style="color:#032F62;">&quot;./build&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  buildType: </span><span style="color:#032F62;">&quot;versioned&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  forceDownload: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  appName: </span><span style="color:#032F62;">&quot;nwdemo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  appVersion: </span><span style="color:#032F62;">&quot;0.1.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  argv: </span><span style="color:#032F62;">&quot;--nw-stderr-logging&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  macCredits: </span><span style="color:#032F62;">&quot;./nwapp/credits.html&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  macIcns: </span><span style="color:#032F62;">&quot;./nwapp/mac.icns&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  macPlist: { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  winVersionString: { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  winIco: </span><span style="color:#032F62;">&quot;./nwapp/win.ico&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  zip: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  macZip: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  mergeZip: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nw.</span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Update the import path</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-const NwBuilder = require(&quot;nw-builder&quot;);</span></span>
<span class="line"><span style="color:#85E89D;">+const nwbuild = require(&quot;nw-builder&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-const NwBuilder = require(&quot;nw-builder&quot;);</span></span>
<span class="line"><span style="color:#22863A;">+const nwbuild = require(&quot;nw-builder&quot;);</span></span></code></pre></div><p>Replace the <code>NwBuilder</code> initialization with a function</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-const nw = new NwBuilder({</span></span>
<span class="line"><span style="color:#85E89D;">+await nwbuild({</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-const nw = new NwBuilder({</span></span>
<span class="line"><span style="color:#22863A;">+await nwbuild({</span></span></code></pre></div><p>The <code>files</code> property has been renamed to <code>srcDir</code>.S</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  files: [&quot;./nwapp/**/*&quot;, &quot;./other/**/*.js&quot;],</span></span>
<span class="line"><span style="color:#85E89D;">+  srcDir: &quot;./nwapp/**/* ./other/**/*.js&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  files: [&quot;./nwapp/**/*&quot;, &quot;./other/**/*.js&quot;],</span></span>
<span class="line"><span style="color:#22863A;">+  srcDir: &quot;./nwapp/**/* ./other/**/*.js&quot;,</span></span></code></pre></div><p>Add the <code>mode</code> option and remove the now redundant <code>nw.build</code> function call.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">+  mode: &quot;build&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;">-nw.build();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">+  mode: &quot;build&quot;,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;">-nw.build();</span></span></code></pre></div><p>The <code>platforms</code> option has been removed and replaced with <code>platform</code> and <code>arch</code>. Notice that one <code>nwbuild</code> function call now creates one build only. Refer to the <a href="./">documentation</a> for valid <code>platform</code> and <code>arch</code> values.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  platforms: [&quot;win32&quot;, &quot;win64&quot;, &quot;osx32&quot;, &quot;osx64&quot;, &quot;linux32&quot;, &quot;linux64&quot;],</span></span>
<span class="line"><span style="color:#85E89D;">+  platform: &quot;linux&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+  arch: &quot;x64&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  platforms: [&quot;win32&quot;, &quot;win64&quot;, &quot;osx32&quot;, &quot;osx64&quot;, &quot;linux32&quot;, &quot;linux64&quot;],</span></span>
<span class="line"><span style="color:#22863A;">+  platform: &quot;linux&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+  arch: &quot;x64&quot;,</span></span></code></pre></div><blockquote><p>If platform is Linux then even if Windows or MacOS specific <code>app.*</code> properties are defined, only the Linux <code>app.*</code> properties will be parsed. Multiple platform <code>app.*</code> properties have been shown in this guide to cater to all platforms.</p></blockquote><p>The <code>buildDir</code> option has been rename to <code>outDir</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  buildDir: &quot;./build&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+  outDir: &quot;./build&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  buildDir: &quot;./build&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+  outDir: &quot;./build&quot;,</span></span></code></pre></div><p>The <code>buildType</code> option has been removed.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  buildType: &quot;versioned&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  buildType: &quot;versioned&quot;,</span></span></code></pre></div><p>The <code>forceDownload</code> option has been changed to <code>cache</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  forceDownload: true,</span></span>
<span class="line"><span style="color:#85E89D;">+  cache: false,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  forceDownload: true,</span></span>
<span class="line"><span style="color:#22863A;">+  cache: false,</span></span></code></pre></div><p>The <code>appName</code> option has been changed to <code>app.name</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  appName: &quot;nwdemo&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+  app: { name: &quot;nwdemo&quot; },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  appName: &quot;nwdemo&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+  app: { name: &quot;nwdemo&quot; },</span></span></code></pre></div><p>The <code>appVersion</code> option has been removed. The <code>version</code> is automatically taken from <code>srcDir/package.json</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  appVersion: &quot;0.1.0&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  appVersion: &quot;0.1.0&quot;,</span></span></code></pre></div><p>The <code>macCredit</code> option has been removed.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  macCredits: &quot;./nwapp/credits.html&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  macCredits: &quot;./nwapp/credits.html&quot;,</span></span></code></pre></div><p>The <code>macIcns</code> option has been replaced with <code>icon</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  macIcns: &quot;./nwapp/mac.icns&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+  icon: &quot;./nwapp/mac.icns&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  macIcns: &quot;./nwapp/mac.icns&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+  icon: &quot;./nwapp/mac.icns&quot;,</span></span></code></pre></div><p>The <code>macPlist</code> option has been removed.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  macPlist: { ... },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  macPlist: { ... },</span></span></code></pre></div><p>The <code>winVersionString</code> option has been replaced with <code>app</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  winVersionString: {</span></span>
<span class="line"><span style="color:#FDAEB7;">-    &#39;CompanyName&#39;: &#39;Some Company&#39;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-    &#39;FileDescription&#39;: &#39;Process Name&#39;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-    &#39;ProductName&#39;: &#39;Some Product&#39;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-    &#39;LegalCopyright&#39;: &#39;Copyright 2017&#39;,</span></span>
<span class="line"><span style="color:#FDAEB7;">-  }</span></span>
<span class="line"><span style="color:#85E89D;">+  app: {</span></span>
<span class="line"><span style="color:#85E89D;">+    company: &quot;Some Company&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+    fileDescription: &quot;Process Name&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+    productName: &quot;Some Product&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+    legalCopyright: &quot;Copyright 2017&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  winVersionString: {</span></span>
<span class="line"><span style="color:#B31D28;">-    &#39;CompanyName&#39;: &#39;Some Company&#39;,</span></span>
<span class="line"><span style="color:#B31D28;">-    &#39;FileDescription&#39;: &#39;Process Name&#39;,</span></span>
<span class="line"><span style="color:#B31D28;">-    &#39;ProductName&#39;: &#39;Some Product&#39;,</span></span>
<span class="line"><span style="color:#B31D28;">-    &#39;LegalCopyright&#39;: &#39;Copyright 2017&#39;,</span></span>
<span class="line"><span style="color:#B31D28;">-  }</span></span>
<span class="line"><span style="color:#22863A;">+  app: {</span></span>
<span class="line"><span style="color:#22863A;">+    company: &quot;Some Company&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+    fileDescription: &quot;Process Name&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+    productName: &quot;Some Product&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+    legalCopyright: &quot;Copyright 2017&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+  }</span></span></code></pre></div><p>The <code>winIco</code> option has been replaced by <code>app.icon</code>.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  winIco: &quot;./nwapp/win.ico&quot;,</span></span>
<span class="line"><span style="color:#85E89D;">+  app: { icon: &quot;./nwapp/win.ico&quot; },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  winIco: &quot;./nwapp/win.ico&quot;,</span></span>
<span class="line"><span style="color:#22863A;">+  app: { icon: &quot;./nwapp/win.ico&quot; },</span></span></code></pre></div><p>The <code>macZip</code> option has been removed.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  macZip: false,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  macZip: false,</span></span></code></pre></div><p>The <code>mergeZip</code> option has been removed.</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;">-  mergeZip: false,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;">-  mergeZip: false,</span></span></code></pre></div><p>The final code should look like this.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">nwbuild</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;nw-builder&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">nwbuild</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  srcDir: </span><span style="color:#9ECBFF;">&quot;./nwapp/**/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;build&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  version: </span><span style="color:#9ECBFF;">&quot;latest&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  flavor: </span><span style="color:#9ECBFF;">&quot;normal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  platform: </span><span style="color:#9ECBFF;">&quot;linux&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  arch: </span><span style="color:#9ECBFF;">&quot;x64&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  outDir: </span><span style="color:#9ECBFF;">&quot;./build&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  cache: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;Some Product&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&quot;./nwapp/icon.png&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    company: </span><span style="color:#9ECBFF;">&quot;Some Company&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fileDescription: </span><span style="color:#9ECBFF;">&quot;Process Name&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    productName: </span><span style="color:#9ECBFF;">&quot;Some Product&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    legalCopyright: </span><span style="color:#9ECBFF;">&quot;Copyright 2017&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">nwbuild</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;nw-builder&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">nwbuild</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  srcDir: </span><span style="color:#032F62;">&quot;./nwapp/**/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&quot;build&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  version: </span><span style="color:#032F62;">&quot;latest&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  flavor: </span><span style="color:#032F62;">&quot;normal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  platform: </span><span style="color:#032F62;">&quot;linux&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  arch: </span><span style="color:#032F62;">&quot;x64&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  outDir: </span><span style="color:#032F62;">&quot;./build&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  cache: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  app: {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;Some Product&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&quot;./nwapp/icon.png&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    company: </span><span style="color:#032F62;">&quot;Some Company&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    fileDescription: </span><span style="color:#032F62;">&quot;Process Name&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    productName: </span><span style="color:#032F62;">&quot;Some Product&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    legalCopyright: </span><span style="color:#032F62;">&quot;Copyright 2017&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,48),e=[l];function t(c,r,i,d,u,y){return a(),n("div",null,e)}const q=s(o,[["render",t]]);export{h as __pageData,q as default};
