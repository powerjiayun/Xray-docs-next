import{r as e,o as n,c as s,a,b as o,w as t,F as r,e as p,d as c}from"./app.caee5e76.js";const u={},i=a("h1",{id:"vmess",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#vmess","aria-hidden":"true"},"#"),p(" VMess")],-1),l=p("VMess"),d=p(" is an encrypted transport protocol commonly used as a bridge between Xray clients and servers."),h=c('<div class="custom-container danger"><p class="custom-container-title">Danger</p><p>VMess relies on system time. Please ensure that the UTC time of your system, when using Xray, has an error within 120 seconds, regardless of the time zone. On Linux systems, you can install the <code>ntp</code> service to automatically synchronize the system time.</p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>vnext</code>：[ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>An array containing a set of server configurations.</p><p>Each item in the array is a server configuration <a href="#serverobject">ServerObject</a>.</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">37192</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>The server address, which can be an IP address or domain name.</p><blockquote><p><code>port</code>: number</p></blockquote><p>The port number that the server is listening on. Required.</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>An array representing a group of users authorized by the server.</p><p>Each item is a user configuration <a href="#userobject">UserObject</a>.</p><h4 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>id</code>: string</p></blockquote><p>The user ID for VMess, which can be any string less than 30 bytes or a valid UUID.</p><p>Custom strings and their corresponding UUIDs are equivalent. This means that you can use either a custom string or its corresponding UUID to identify the same user in the configuration file. For example:</p><ul><li>Write <code>&quot;id&quot;: &quot;我爱🍉老师1314&quot;</code>,</li><li>Or write <code>&quot;id&quot;: &quot;5783a3e7-e373-51cd-8642-c83782b807c5&quot;</code> (this UUID is the mapping of the custom string &quot;我爱 🍉 老师 1314&quot;)</li></ul>',21),m=p("The mapping standard is described in the "),b={href:"https://github.com/XTLS/Xray-core/issues/158",target:"_blank",rel:"noopener noreferrer"},q=p("VLESS UUID Mapping Standard: Mapping a Custom String to a UUIDv5"),k=p("."),y=a("p",null,[p("You can use the command "),a("code",null,'xray uuid -i "custom string"'),p(" to generate the UUID corresponding to a custom string, or use the command "),a("code",null,"xray uuid"),p(" to generate a random UUID.")],-1),g=a("blockquote",null,[a("p",null,[a("code",null,"level"),p(": number")])],-1),v=p("The user level. Connections will use the corresponding "),f=p("local policy"),j=p(" associated with this user level."),U=p("The "),w=a("code",null,"level",-1),T=p(" value corresponds to the "),x=a("code",null,"level",-1),I=p(" value in the "),D=p("policy"),O=p(". If not specified, the default value is 0."),S=c('<blockquote><p><code>security</code>: &quot;aes-128-gcm&quot; | &quot;chacha20-poly1305&quot; | &quot;auto&quot; | &quot;none&quot; | &quot;zero&quot;</p></blockquote><p>The encryption method. The client will use the configured encryption method to send data, and the server will automatically recognize it without the need for configuration.</p><ul><li><code>&quot;aes-128-gcm&quot;</code>: Recommended for use on PCs.</li><li><code>&quot;chacha20-poly1305&quot;</code>: Recommended for use on mobile devices.</li><li><code>&quot;auto&quot;</code>: Default value. Automatically selects the encryption method (uses aes-128-gcm when running on AMD64, ARM64, or s390x architecture, and Chacha20-Poly1305 in other cases).</li><li><code>&quot;none&quot;</code>: No encryption.</li><li><code>&quot;zero&quot;</code>: No encryption and no message authentication (v1.4.0+).</li></ul><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>It is recommended to use the <code>&quot;auto&quot;</code> encryption method as it ensures long-term security and compatibility.</p><p>The <code>&quot;none&quot;</code> pseudo-encryption method calculates and verifies the packet&#39;s checksum. However, due to the lack of hardware support for the authentication algorithm, it may be slower than the hardware-accelerated <code>&quot;aes-128-gcm&quot;</code> on some platforms.</p><p>The <code>&quot;zero&quot;</code> pseudo-encryption method neither encrypts the message nor calculates the checksum, theoretically providing higher speed than any other encryption method. The actual speed may be influenced by other factors.</p><p>It is not recommended to use the <code>&quot;none&quot;</code> or <code>&quot;zero&quot;</code> pseudo-encryption methods without enabling TLS encryption and forcibly verifying certificates. If you use a CDN or other intermediate platforms or network environments that decrypt TLS connections, it is not recommended to use the <code>&quot;none&quot;</code> or <code>&quot;zero&quot;</code> pseudo-encryption methods.</p><p>Regardless of the encryption method used, the VMess packet header is protected by encryption and authentication.</p></div>',4);u.render=function(p,c){const u=e("RouterLink"),z=e("OutboundLink");return n(),s(r,null,[i,a("p",null,[o(u,{to:"/en/development/protocols/vmess.html"},{default:t((()=>[l])),_:1}),d]),h,a("p",null,[m,a("a",b,[q,o(z)]),k]),y,g,a("p",null,[v,o(u,{to:"/en/config/policy.html#levelpolicyobject"},{default:t((()=>[f])),_:1}),j]),a("p",null,[U,w,T,x,I,o(u,{to:"/en/config/policy.html#policyobject"},{default:t((()=>[D])),_:1}),O]),S],64)};export default u;
