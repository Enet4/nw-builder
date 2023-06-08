import{_ as t,o as e,c as i,O as o}from"./chunks/framework.8d1f7aee.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api-win.md","filePath":"api-win.md"}'),r={name:"api-win.md"},s=o('<h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><dl><dt><a href="#setWinConfig">setWinConfig(app, outDir)</a></dt><dd><p>Windows specific configuration steps <a href="https://learn.microsoft.com/en-us/windows/win32/msi/version">https://learn.microsoft.com/en-us/windows/win32/msi/version</a><a href="https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests">https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests</a><a href="https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel">https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel</a><a href="https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource">https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource</a></p></dd></dl><h2 id="typedefs" tabindex="-1">Typedefs <a class="header-anchor" href="#typedefs" aria-label="Permalink to &quot;Typedefs&quot;">​</a></h2><dl><dt><a href="#WinRc">WinRc</a> : <code>object</code></dt><dd><p>Windows configuration options</p></dd></dl><p><a name="setWinConfig"></a></p><h2 id="setwinconfig-app-outdir" tabindex="-1">setWinConfig(app, outDir) <a class="header-anchor" href="#setwinconfig-app-outdir" aria-label="Permalink to &quot;setWinConfig(app, outDir)&quot;">​</a></h2><p>Windows specific configuration steps <a href="https://learn.microsoft.com/en-us/windows/win32/msi/version" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/windows/win32/msi/version</a><a href="https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-gb/windows/win32/sbscs/application-manifests</a><a href="https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2015/deployment/trustinfo-element-clickonce-application?view=vs-2015#requestedexecutionlevel</a><a href="https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource" target="_blank" rel="noreferrer">https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource</a></p><p><strong>Kind</strong>: global function</p><table><thead><tr><th>Param</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>app</td><td><a href="#WinRc"><code>WinRc</code></a></td><td>Resource configuration options for Windows</td></tr><tr><td>outDir</td><td><code>string</code></td><td>The directory to hold build artifacts</td></tr></tbody></table><p><a name="WinRc"></a></p><h2 id="winrc-object" tabindex="-1">WinRc : <code>object</code> <a class="header-anchor" href="#winrc-object" aria-label="Permalink to &quot;WinRc : &lt;code&gt;object&lt;/code&gt;&quot;">​</a></h2><p>Windows configuration options</p><p><strong>Kind</strong>: global typedef<br><strong>Properties</strong></p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>comments</td><td><code>string</code></td><td>Additional information that should be displayed for diagnostic purposes.</td></tr><tr><td>company</td><td><code>string</code></td><td>Company that produced the file—for example, Microsoft Corporation or Standard Microsystems Corporation, Inc. This string is required.</td></tr><tr><td>fileDescription</td><td><code>string</code></td><td>File description to be presented to users. This string may be displayed in a list box when the user is choosing files to install. For example, Keyboard Driver for AT-Style Keyboards. This string is required.</td></tr><tr><td>fileVersion</td><td><code>string</code></td><td>Version number of the file. For example, 3.10 or 5.00.RC2. This string is required.</td></tr><tr><td>internalName</td><td><code>string</code></td><td>Internal name of the file, if one exists—for example, a module name if the file is a dynamic-link library. If the file has no internal name, this string should be the original filename, without extension. This string is required.</td></tr><tr><td>legalCopyright</td><td><code>string</code></td><td>Copyright notices that apply to the file. This should include the full text of all notices, legal symbols, copyright dates, and so on. This string is optional.</td></tr><tr><td>legalTrademark</td><td><code>string</code></td><td>Trademarks and registered trademarks that apply to the file. This should include the full text of all notices, legal symbols, trademark numbers, and so on. This string is optional.</td></tr><tr><td>originalFilename</td><td><code>string</code></td><td>Original name of the file, not including a path. This information enables an application to determine whether a file has been renamed by a user. The format of the name depends on the file system for which the file was created. This string is required.</td></tr><tr><td>privateBuild</td><td><code>string</code></td><td>Information about a private version of the file—for example, Built by TESTER1 on \\TESTBED. This string should be present only if VS_FF_PRIVATEBUILD is specified in the fileflags parameter of the root block.</td></tr><tr><td>productName</td><td><code>string</code></td><td>Name of the product with which the file is distributed. This string is required.</td></tr><tr><td>productVersion</td><td><code>string</code></td><td>Version of the product with which the file is distributed—for example, 3.10 or 5.00.RC2. This string is required.</td></tr><tr><td>specialBuild</td><td><code>string</code></td><td>Text that specifies how this version of the file differs from the standard version—for example, Private build for TESTER1 solving mouse problems on M250 and M250E computers. This string should be present only if VS_FF_SPECIALBUILD is specified in the fileflags parameter of the root block.</td></tr></tbody></table>',14),n=[s];function d(a,c,l,p,h,f){return e(),i("div",null,n)}const g=t(r,[["render",d]]);export{m as __pageData,g as default};
