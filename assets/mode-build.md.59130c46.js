import{_ as t,o as e,c as o,Q as d}from"./chunks/framework.d91cf673.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"mode-build.md","filePath":"mode-build.md"}'),r={name:"mode-build.md"},i=d(`<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><dl><dt><a href="#build">build(files, nwDir, outDir, platform, zip, app)</a> ⇒ <code>Promise.&lt;undefined&gt;</code></dt><dd><p>Generate NW build artifacts</p><p>Note: File permissions are incorrectly set for Linux or MacOS apps built on Windows platform. For more info: <a href="https://www.geeksforgeeks.org/node-js-fs-chmod-method">https://www.geeksforgeeks.org/node-js-fs-chmod-method</a></p><p>Note: To edit Windows executable resources, we use <a href="https://github.com/electron/node-rcedit"><code>rcedit</code></a>. To use rcedit on non-Windows platforms, you will have to install <a href="https://www.winehq.org/">Wine</a>.</p><p>Note: We recursively glob the file patterns given by the user. The first <code>package.json</code> parsed is taken to be the NW.js manifest file. If you have multiple manifest files, the first glob pattern should be the path to the NW.js manifest. Choosing a Node manifest at <code>./package.json</code> is the most convenient option.</p><p>Note: If you are using the MacOS ARM unofficial builds, you will need to <a href="https://github.com/corwin-of-amber/nw.js/releases/tag/nw-v0.75.0">remove the <code>com.apple.qurantine</code> flag</a>:</p><p><code>sudo xattr -r -d com.apple.quarantine nwjs.app</code></p></dd></dl><h2 id="typedefs" tabindex="-1">Typedefs <a class="header-anchor" href="#typedefs" aria-label="Permalink to &quot;Typedefs&quot;">​</a></h2><dl><dt><a href="#LinuxRc">LinuxRc</a> : <code>object</code></dt><dd><p>References: <a href="https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html">https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html</a></p></dd><dt><a href="#OsxRc">OsxRc</a> : <code>object</code></dt><dd><p>References: <a href="https://developer.apple.com/documentation/bundleresources/information_property_list">https://developer.apple.com/documentation/bundleresources/information_property_list</a></p></dd><dt><a href="#WinRc">WinRc</a> : <code>object</code></dt><dd><p>References: <a href="https://learn.microsoft.com/en-us/windows/win32/msi/version">https://learn.microsoft.com/en-us/windows/win32/msi/version</a><a href="https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests">https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests</a><a href="https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel">https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel</a><a href="https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource">https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource</a></p></dd></dl><p><a name="build"></a></p><h2 id="build-files-nwdir-outdir-platform-zip-app-⇒-promise-undefined" tabindex="-1">build(files, nwDir, outDir, platform, zip, app) ⇒ <code>Promise.&lt;undefined&gt;</code> <a class="header-anchor" href="#build-files-nwdir-outdir-platform-zip-app-⇒-promise-undefined" aria-label="Permalink to &quot;build(files, nwDir, outDir, platform, zip, app) ⇒ &lt;code&gt;Promise.&amp;lt;undefined&amp;gt;&lt;/code&gt;&quot;">​</a></h2><p>Generate NW build artifacts</p><p>Note: File permissions are incorrectly set for Linux or MacOS apps built on Windows platform. For more info: <a href="https://www.geeksforgeeks.org/node-js-fs-chmod-method" target="_blank" rel="noreferrer">https://www.geeksforgeeks.org/node-js-fs-chmod-method</a></p><p>Note: To edit Windows executable resources, we use <a href="https://github.com/electron/node-rcedit" target="_blank" rel="noreferrer"><code>rcedit</code></a>. To use rcedit on non-Windows platforms, you will have to install <a href="https://www.winehq.org/" target="_blank" rel="noreferrer">Wine</a>.</p><p>Note: We recursively glob the file patterns given by the user. The first <code>package.json</code> parsed is taken to be the NW.js manifest file. If you have multiple manifest files, the first glob pattern should be the path to the NW.js manifest. Choosing a Node manifest at <code>./package.json</code> is the most convenient option.</p><p>Note: If you are using the MacOS ARM unofficial builds, you will need to <a href="https://github.com/corwin-of-amber/nw.js/releases/tag/nw-v0.75.0" target="_blank" rel="noreferrer">remove the <code>com.apple.qurantine</code> flag</a>:</p><p><code>sudo xattr -r -d com.apple.quarantine nwjs.app</code></p><p><strong>Kind</strong>: global function</p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>files</td><td><code>string</code> | <code>Array.&lt;string&gt;</code></td><td>Array of NW app files</td></tr><tr><td>nwDir</td><td><code>string</code></td><td>Directory to hold NW binaries</td></tr><tr><td>outDir</td><td><code>string</code></td><td>Directory to store build artifacts</td></tr><tr><td>platform</td><td><code>&quot;linux&quot;</code> | <code>&quot;osx&quot;</code> | <code>&quot;win&quot;</code></td><td>Platform is the operating system type</td></tr><tr><td>zip</td><td><code>&quot;zip&quot;</code> | <code>boolean</code></td><td>Specify if the build artifacts are to be zipped</td></tr><tr><td>app</td><td><a href="#LinuxRc"><code>LinuxRc</code></a> | <a href="#OsxRc"><code>OsxRc</code></a> | <a href="#WinRc"><code>WinRc</code></a></td><td>Multi platform configuration options</td></tr></tbody></table><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Minimal Usage (uses default values)</span></span>
<span class="line"><span style="color:#B392F0;">nwbuild</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&quot;build&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Minimal Usage (uses default values)</span></span>
<span class="line"><span style="color:#6F42C1;">nwbuild</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&quot;build&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p><a name="LinuxRc"></a></p><h2 id="linuxrc-object" tabindex="-1">LinuxRc : <code>object</code> <a class="header-anchor" href="#linuxrc-object" aria-label="Permalink to &quot;LinuxRc : &lt;code&gt;object&lt;/code&gt;&quot;">​</a></h2><p>References: <a href="https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html" target="_blank" rel="noreferrer">https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html</a></p><p><strong>Kind</strong>: global typedef<br><strong>Properties</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>Name of the application</td></tr><tr><td>genericName</td><td><code>string</code></td><td>Generic name of the application</td></tr><tr><td>noDisplay</td><td><code>boolean</code></td><td>If true the application is not displayed</td></tr><tr><td>comment</td><td><code>string</code></td><td>Tooltip for the entry, for example &quot;View sites on the Internet&quot;.</td></tr><tr><td>icon</td><td><code>string</code></td><td>Icon to display in file manager, menus, etc.</td></tr><tr><td>hidden</td><td><code>boolean</code></td><td>TBD</td></tr><tr><td>onlyShowIn</td><td><code>Array.&lt;string&gt;</code></td><td>A list of strings identifying the desktop environments that should (/not) display a given desktop entry</td></tr><tr><td>notShowIn</td><td><code>Array.&lt;string&gt;</code></td><td>A list of strings identifying the desktop environments that should (/not) display a given desktop entry</td></tr><tr><td>dBusActivatable</td><td><code>boolean</code></td><td>A boolean value specifying if D-Bus activation is supported for this application</td></tr><tr><td>tryExec</td><td><code>string</code></td><td>Path to an executable file on disk used to determine if the program is actually installed</td></tr><tr><td>exec</td><td><code>string</code></td><td>Program to execute, possibly with arguments.</td></tr><tr><td>path</td><td><code>string</code></td><td>If entry is of type Application, the working directory to run the program in.</td></tr><tr><td>terminal</td><td><code>boolean</code></td><td>Whether the program runs in a terminal window.</td></tr><tr><td>actions</td><td><code>Array.&lt;string&gt;</code></td><td>Identifiers for application actions.</td></tr><tr><td>mimeType</td><td><code>Array.&lt;string&gt;</code></td><td>The MIME type(s) supported by this application.</td></tr><tr><td>categories</td><td><code>Array.&lt;string&gt;</code></td><td>Categories in which the entry should be shown in a menu</td></tr><tr><td>implements</td><td><code>Array.&lt;string&gt;</code></td><td>A list of interfaces that this application implements.</td></tr><tr><td>keywords</td><td><code>Array.&lt;string&gt;</code></td><td>A list of strings which may be used in addition to other metadata to describe this entry.</td></tr><tr><td>startupNotify</td><td><code>boolean</code></td><td>If true, it is KNOWN that the application will send a &quot;remove&quot; message when started with the DESKTOP_STARTUP_ID environment variable set. If false, it is KNOWN that the application does not work with startup notification at all.</td></tr><tr><td>startupWMClass</td><td><code>string</code></td><td>If specified, it is known that the application will map at least one window with the given string as its WM class or WM name hin</td></tr><tr><td>prefersNonDefaultGPU</td><td><code>boolean</code></td><td>If true, the application prefers to be run on a more powerful discrete GPU if available.</td></tr><tr><td>singleMainWindow</td><td><code>string</code></td><td>If true, the application has a single main window, and does not support having an additional one opened.</td></tr></tbody></table><p><a name="OsxRc"></a></p><h2 id="osxrc-object" tabindex="-1">OsxRc : <code>object</code> <a class="header-anchor" href="#osxrc-object" aria-label="Permalink to &quot;OsxRc : &lt;code&gt;object&lt;/code&gt;&quot;">​</a></h2><p>References: <a href="https://developer.apple.com/documentation/bundleresources/information_property_list" target="_blank" rel="noreferrer">https://developer.apple.com/documentation/bundleresources/information_property_list</a></p><p><strong>Kind</strong>: global typedef<br><strong>Properties</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>The name of the application</td></tr><tr><td>icon</td><td><code>string</code></td><td>The path to the icon file. It should be a .icns file.</td></tr><tr><td>LSApplicationCategoryType</td><td><code>string</code></td><td>The category that best describes your app for the App Store.</td></tr><tr><td>CFBundleIdentifier</td><td><code>string</code></td><td>A unique identifier for a bundle usually in reverse DNS format.</td></tr><tr><td>CFBundleName</td><td><code>string</code></td><td>A user-visible short name for the bundle.</td></tr><tr><td>CFBundleDisplayName</td><td><code>string</code></td><td>The user-visible name for the bundle.</td></tr><tr><td>CFBundleSpokenName</td><td><code>string</code></td><td>A replacement for the app name in text-to-speech operations.</td></tr><tr><td>CFBundleVersion</td><td><code>string</code></td><td>The version of the build that identifies an iteration of the bundle.</td></tr><tr><td>CFBundleShortVersionString</td><td><code>string</code></td><td>The release or version number of the bundle.</td></tr><tr><td>NSHumanReadableCopyright</td><td><code>string</code></td><td>A human-readable copyright notice for the bundle.</td></tr></tbody></table><p><a name="WinRc"></a></p><h2 id="winrc-object" tabindex="-1">WinRc : <code>object</code> <a class="header-anchor" href="#winrc-object" aria-label="Permalink to &quot;WinRc : &lt;code&gt;object&lt;/code&gt;&quot;">​</a></h2><p>References: <a href="https://learn.microsoft.com/en-us/windows/win32/msi/version" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/windows/win32/msi/version</a><a href="https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests</a><a href="https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel</a><a href="https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource</a></p><p><strong>Kind</strong>: global typedef<br><strong>Properties</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td><code>string</code></td><td>The name of the application</td></tr><tr><td>version</td><td><code>string</code></td><td>The version of the application</td></tr><tr><td>comments</td><td><code>string</code></td><td>Additional information that should be displayed for diagnostic purposes.</td></tr><tr><td>company</td><td><code>string</code></td><td>Company that produced the file—for example, Microsoft Corporation or Standard Microsystems Corporation, Inc. This string is required.</td></tr><tr><td>fileDescription</td><td><code>string</code></td><td>File description to be presented to users. This string may be displayed in a list box when the user is choosing files to install. For example, Keyboard Driver for AT-Style Keyboards. This string is required.</td></tr><tr><td>fileVersion</td><td><code>string</code></td><td>Version number of the file. For example, 3.10 or 5.00.RC2. This string is required.</td></tr><tr><td>icon</td><td><code>string</code></td><td>The path to the icon file. It should be a .ico file.</td></tr><tr><td>internalName</td><td><code>string</code></td><td>Internal name of the file, if one exists—for example, a module name if the file is a dynamic-link library. If the file has no internal name, this string should be the original filename, without extension. This string is required.</td></tr><tr><td>legalCopyright</td><td><code>string</code></td><td>Copyright notices that apply to the file. This should include the full text of all notices, legal symbols, copyright dates, and so on. This string is optional.</td></tr><tr><td>legalTrademark</td><td><code>string</code></td><td>Trademarks and registered trademarks that apply to the file. This should include the full text of all notices, legal symbols, trademark numbers, and so on. This string is optional.</td></tr><tr><td>originalFilename</td><td><code>string</code></td><td>Original name of the file, not including a path. This information enables an application to determine whether a file has been renamed by a user. The format of the name depends on the file system for which the file was created. This string is required.</td></tr><tr><td>privateBuild</td><td><code>string</code></td><td>Information about a private version of the file—for example, Built by TESTER1 on \\TESTBED. This string should be present only if VS_FF_PRIVATEBUILD is specified in the fileflags parameter of the root block.</td></tr><tr><td>productName</td><td><code>string</code></td><td>Name of the product with which the file is distributed. This string is required.</td></tr><tr><td>productVersion</td><td><code>string</code></td><td>Version of the product with which the file is distributed—for example, 3.10 or 5.00.RC2. This string is required.</td></tr><tr><td>specialBuild</td><td><code>string</code></td><td>Text that specifies how this version of the file differs from the standard version—for example, Private build for TESTER1 solving mouse problems on M250 and M250E computers. This string should be present only if VS_FF_SPECIALBUILD is specified in the fileflags parameter of the root block.</td></tr></tbody></table>`,31),s=[i];function n(a,c,l,p,h,f){return e(),o("div",null,s)}const g=t(r,[["render",n]]);export{m as __pageData,g as default};
