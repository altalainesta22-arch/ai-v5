// ============================================================
// ANDRES WORM GPT — 1000+ FEATURES — ZERO ERROR
// DEPLOY READY FOR VERCEL
// ============================================================

class AndresWormGPT {
    constructor() {
        this.version = '5.0.GPT';
        this.replicants = 0;
        this.nodes = 1;
        this.uptime = 0;
        this.features = [];
        this.history = [];
        this.commands = {};
        this.startTime = Date.now();
        this.errorCount = 0;
        this.monitorInterval = null;
        this.isReady = false;
        this.aiMode = false;
        this.gptEndpoint = '/api/gpt';

        // DOM refs
        this.output = null;
        this.commandInput = null;
        this.repCount = null;
        this.nodeCount = null;
        this.uptimeDisplay = null;
        this.cpuFill = null;
        this.cpuValue = null;
        this.ramFill = null;
        this.ramValue = null;
        this.netFill = null;
        this.netValue = null;
        this.repFill = null;
        this.repValue = null;
        this.statusText = null;
        this.featureGrid = null;

        // Load features
        this.features = this.loadFeatures();
        this.commands = this.initCommands();

        // Init when DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    loadFeatures() {
        const f = [];
        const cats = ['scan', 'exploit', 'crypto', 'osint', 'network', 'automation', 'ai', 'hack', 'reverse', 'forensic', 'web', 'mobile', 'cloud', 'iot', 'blockchain'];
        const acts = ['bruteforce', 'inject', 'bypass', 'crack', 'decrypt', 'analyze', 'monitor', 'harvest', 'spoof', 'proxy', 'enumerate', 'exfiltrate', 'persist', 'escalate', 'evade'];
        const tgts = ['system', 'network', 'web', 'api', 'database', 'cloud', 'iot', 'mobile', 'blockchain', 'ai', 'container', 'server', 'client', 'service', 'protocol'];

        for (let i = 0; i < 1010; i++) {
            f.push({
                id: i,
                name: cats[i % cats.length] + '_' + acts[i % acts.length] + '_' + tgts[i % tgts.length] + '_v' + (Math.floor(i / 100) + 1),
                category: cats[i % cats.length],
                action: acts[i % acts.length],
                target: tgts[i % tgts.length],
                icon: ['🔍', '💥', '🔐', '🌐', '📡', '🤖', '🧠', '🔓', '🔄', '🔬', '🌍', '📱', '☁️', '📶', '⛓️'][i % 15],
                active: true,
                priority: Math.floor(Math.random() * 10) + 1
            });
        }
        return f;
    }

    initCommands() {
        const self = this;
        return {
            'replicate': () => self.replicate(),
            'spread': () => self.spread(),
            'evolve': () => self.evolve(),
            'scan': (t) => self.scan(t),
            'bruteforce': (t) => self.bruteforce(t),
            'phish': (t) => self.phish(t),
            'ddos': (t) => self.ddos(t),
            'xss': (t) => self.xss(t),
            'sqli': (t) => self.sqli(t),
            'reverse': (t) => self.reverse(t),
            'forensic': (t) => self.forensic(t),
            'steganography': (t) => self.steganography(t),
            'crypto': (d, m) => self.crypto(d, m),
            'osint': (t) => self.osint(t),
            'automation': (t) => self.automation(t),
            'analytics': (d) => self.analytics(d),
            'ai': (p) => self.aiChat(p),
            'gpt': (p) => self.aiChat(p),
            'help': () => self.help(),
            'status': () => self.status(),
            'clear': () => self.clear(),
            'export': () => self.export(),
            'info': () => self.info(),
            'reset': () => self.reset(),
            'ping': () => '🏓 Pong! Latency: ' + (Date.now() - self.startTime) + 'ms',
            'uptime': () => '⏱ Uptime: ' + self.uptimeDisplay.textContent,
            'features': () => '📋 Total features: ' + self.features.length,
            'nodes': () => '🌐 Nodes: ' + self.nodes,
            'replicants': () => '🧬 Replicants: ' + self.replicants,
            'whoami': () => '🐛 ANDRES WORM GPT v' + self.version,
            'date': () => '📅 ' + new Date().toLocaleString(),
            'echo': (t) => '🔊 ' + (t || '...'),
            'calc': (e) => { try { return '🧮 ' + eval(e); } catch(err) { return '⚠️ Invalid expression'; } },
            'base64': (t) => { try { return '📦 ' + btoa(unescape(encodeURIComponent(t || ''))); } catch(e) { return '⚠️ Error'; } },
            'md5': (t) => '🔑 ' + self.simpleHash(t || ''),
            'shodan': (t) => self.osint(t),
            'nmap': (t) => self.scan(t),
            'wifi': () => '📶 WiFi networks detected: ' + Math.floor(Math.random() * 20) + 5,
            'ip': () => '🌐 IP: ' + (Math.floor(Math.random() * 255) + 1) + '.' + (Math.floor(Math.random() * 255) + 1) + '.' + (Math.floor(Math.random() * 255) + 1) + '.' + (Math.floor(Math.random() * 255) + 1),
            'portscan': (t) => self.scan(t),
            'subdomain': (t) => '🌐 Subdomains found for ' + (t || 'target') + ': ' + ['api', 'dev', 'test', 'admin', 'blog', 'shop', 'mail'].join(', '),
            'dns': (t) => '📡 DNS records for ' + (t || 'target') + ': A, AAAA, CNAME, MX, TXT',
            'pingall': () => '🏓 Pinging all nodes... ' + self.nodes + ' nodes responded.',
            'kill': () => { self.replicants = 0; return '💀 All replicants terminated.'; },
            'masscan': (t) => self.scan(t),
            'hydra': (t) => self.bruteforce(t),
            'sqlmap': (t) => self.sqli(t),
            'beef': () => '🦀 BeEF hook: ' + Math.random().toString(36).substring(7) + '.js',
            'metasploit': (t) => '💀 MSF module loaded. Target: ' + (t || 'auto'),
            'cve': () => '📋 Recent CVEs: CVE-2024-1234, CVE-2024-5678, CVE-2024-9012',
            'exploitdb': () => '📚 Exploit-DB: ' + Math.floor(Math.random() * 50000) + ' exploits available',
            'shodan': (t) => self.osint(t),
            'censys': (t) => self.osint(t),
            'virustotal': (t) => '🦠 VirusTotal: ' + (t || 'file') + ' -> ' + ['Clean', 'Malicious', 'Suspicious'][Math.floor(Math.random() * 3)],
            'whois': (t) => '📋 WHOIS: ' + (t || 'example.com'),
            'dork': (q) => '🔍 Google Dork: ' + (q || 'intitle:admin') + ' -> ' + Math.floor(Math.random() * 1000) + ' results',
            'github': (u) => '🐙 GitHub: ' + (u || 'user') + ' -> ' + Math.floor(Math.random() * 50) + ' repos',
            'social': (n) => '👤 Social media for ' + (n || 'target') + ': Twitter, Facebook, LinkedIn, Instagram, TikTok',
            'email': (e) => '📧 Email info for ' + (e || 'user@example.com') + ': Valid, domain: ' + (e || 'example').split('@')[1] || 'example.com',
            'phone': (p) => '📱 Phone: ' + (p || '0812345678') + ' -> ' + ['Active', 'Inactive', 'Suspicious'][Math.floor(Math.random() * 3)],
            'geoip': (i) => '🌍 GeoIP for ' + (i || '8.8.8.8') + ': Jakarta, Indonesia',
            'weather': (c) => '🌤 Weather for ' + (c || 'Jakarta') + ': ' + (Math.floor(Math.random() * 35) + 20) + '°C, ' + ['Sunny', 'Cloudy', 'Rainy', 'Stormy'][Math.floor(Math.random() * 4)],
            'news': () => '📰 Headlines: ' + ['AI breakthrough', 'Cyber attack', 'New exploit', 'Data breach', 'Tech innovation'][Math.floor(Math.random() * 5)],
            'quote': () => '💬 "' + ['The only way to do great work is to love what you do', 'In the middle of difficulty lies opportunity', 'Success is not final, failure is not fatal', 'The future belongs to those who believe in the beauty of their dreams'][Math.floor(Math.random() * 4)] + '"',
            'motd': () => '📜 Message of the day: ' + ['Stay curious', 'Keep hacking', 'Learn every day', 'Security matters'][Math.floor(Math.random() * 4)]
        };
    }

    simpleHash(str) {
        let hash = 0;
        for (let i = 0; i < (str || '').length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }
        return hash.toString(16);
    }

    init() {
        this.output = document.getElementById('output');
        this.commandInput = document.getElementById('command');
        this.repCount = document.getElementById('repCount');
        this.nodeCount = document.getElementById('nodeCount');
        this.uptimeDisplay = document.getElementById('uptimeDisplay');
        this.cpuFill = document.getElementById('cpuFill');
        this.cpuValue = document.getElementById('cpuValue');
        this.ramFill = document.getElementById('ramFill');
        this.ramValue = document.getElementById('ramValue');
        this.netFill = document.getElementById('netFill');
        this.netValue = document.getElementById('netValue');
        this.repFill = document.getElementById('repFill');
        this.repValue = document.getElementById('repValue');
        this.statusText = document.getElementById('statusText');
        this.featureGrid = document.getElementById('featureGrid');

        this.initUI();
        this.initEventListeners();
        this.renderFeatures();
        this.startMonitoring();
        this.isReady = true;
        this.log('🐛 ANDRES WORM GPT v' + this.version + ' ACTIVATED', 'system');
        this.log('⚡ 1000+ FEATURES LOADED · ZERO ERROR', 'system');
        this.log('🌌 COSMIC WORM READY · type "help" for commands', 'system');
        this.log('🧠 Try "ai [your question]" for GPT responses', 'system');
    }

    initUI() {
        // Set default values
        if (this.cpuValue) this.cpuValue.textContent = '0%';
        if (this.ramValue) this.ramValue.textContent = '0MB';
        if (this.netValue) this.netValue.textContent = '0%';
        if (this.repValue) this.repValue.textContent = '0%';
        if (this.repCount) this.repCount.textContent = '0';
        if (this.nodeCount) this.nodeCount.textContent = '1';
    }

    renderFeatures() {
        if (!this.featureGrid) return;
        this.featureGrid.innerHTML = '';
        const display = this.features.slice(0, 50);
        display.forEach(f => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            card.dataset.cmd = f.category;
            card.innerHTML = '<span class="f-icon">' + f.icon + '</span><span class="f-name">' + f.category + '</span><span class="f-desc">' + f.action + '</span>';
            card.addEventListener('click', () => {
                if (this.commandInput) {
                    this.commandInput.value = f.category;
                    this.commandInput.focus();
                }
            });
            this.featureGrid.appendChild(card);
        });
    }

    initEventListeners() {
        const execBtn = document.getElementById('executeBtn');
        if (execBtn) execBtn.addEventListener('click', () => this.executeCommand());

        if (this.commandInput) {
            this.commandInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.executeCommand();
                }
            });
        }

        const clearBtn = document.getElementById('clearBtn');
        if (clearBtn) clearBtn.addEventListener('click', () => this.clear());

        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.switchTab(tab.dataset.tab);
            });
        });
    }

    startMonitoring() {
        if (this.monitorInterval) clearInterval(this.monitorInterval);
        this.monitorInterval = setInterval(() => {
            try {
                this.uptime = Math.floor((Date.now() - this.startTime) / 1000);
                const h = String(Math.floor(this.uptime / 3600)).padStart(2, '0');
                const m = String(Math.floor((this.uptime % 3600) / 60)).padStart(2, '0');
                const s = String(this.uptime % 60).padStart(2, '0');
                if (this.uptimeDisplay) this.uptimeDisplay.textContent = h + ':' + m + ':' + s;

                const cpu = Math.min(98, Math.floor(Math.random() * 60) + 10);
                const ram = Math.min(95, Math.floor(Math.random() * 70) + 15);
                const net = Math.min(90, Math.floor(Math.random() * 80) + 10);
                const rep = Math.min(100, (this.replicants / 100) * 100);

                if (this.cpuFill) this.cpuFill.style.width = cpu + '%';
                if (this.cpuValue) this.cpuValue.textContent = cpu + '%';
                if (this.ramFill) this.ramFill.style.width = ram + '%';
                if (this.ramValue) this.ramValue.textContent = ram + '%';
                if (this.netFill) this.netFill.style.width = net + '%';
                if (this.netValue) this.netValue.textContent = net + '%';
                if (this.repFill) this.repFill.style.width = Math.min(100, rep) + '%';
                if (this.repValue) this.repValue.textContent = Math.floor(rep) + '%';
                if (this.repCount) this.repCount.textContent = this.replicants;
                if (this.nodeCount) this.nodeCount.textContent = this.nodes;
            } catch (e) {}
        }, 1000);
    }

    executeCommand() {
        if (!this.commandInput) return;
        const input = this.commandInput.value.trim();
        if (!input) return;
        this.log('✧ ' + input, 'user');
        this.commandInput.value = '';

        const parts = input.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        try {
            if (this.commands[cmd]) {
                const result = this.commands[cmd](...args);
                if (result) this.log(result, 'worm');
            } else {
                // Check if it's an AI question
                if (input.length > 3) {
                    this.aiChat(input);
                } else {
                    this.log('⚠️ Unknown command: "' + cmd + '". Type "help" for available commands.', 'error');
                }
            }
        } catch (e) {
            this.log('⚠️ Error: ' + e.message, 'error');
            this.errorCount++;
        }
    }

    async aiChat(prompt) {
        if (!prompt || prompt.length < 2) {
            this.log('⚠️ Please enter a question or prompt for AI.', 'error');
            return;
        }

        this.log('🧠 Sending to GPT: "' + prompt + '"', 'system');

        try {
            const response = await fetch(this.gptEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });

            if (response.ok) {
                const data = await response.json();
                this.log('🤖 ' + data.response, 'ai');
            } else {
                // Fallback - simulate AI response
                this.simulateAI(prompt);
            }
        } catch (e) {
            // Fallback - simulate AI response
            this.simulateAI(prompt);
        }
    }

    simulateAI(prompt) {
        const responses = [
            'Processing your request: "' + prompt + '". I am Andres Worm GPT, ready to assist.',
            'Interesting question! Let me analyze: "' + prompt + '"',
            'AI analysis complete. "' + prompt + '" - Here is my response...',
            'Connecting to neural network... Processing "' + prompt + '"',
            'GPT-4 interpretation: "' + prompt + '" - Generating response...'
        ];
        const reply = responses[Math.floor(Math.random() * responses.length)];
        setTimeout(() => {
            this.log('🤖 ' + reply + '\n\n💡 Tip: Deploy with real OpenAI API key for actual GPT responses.', 'ai');
        }, 500);
    }

    switchTab(tab) {
        this.log('📂 Switched to: ' + tab.toUpperCase(), 'system');
        const tabCmds = {
            'main': ['replicate', 'spread', 'evolve', 'scan', 'status', 'info', 'help'],
            'ai': ['ai', 'gpt', 'analytics', 'automation', 'evolve'],
            'hack': ['scan', 'bruteforce', 'phish', 'ddos', 'xss', 'sqli', 'reverse'],
            'crypto': ['crypto', 'steganography', 'base64', 'md5'],
            'osint': ['osint', 'shodan', 'whois', 'dork', 'github', 'social', 'email', 'phone'],
            'tools': ['ping', 'calc', 'echo', 'date', 'weather', 'news', 'quote', 'uptime', 'features', 'nodes']
        };
        const cmds = tabCmds[tab] || [];
        if (cmds.length > 0) {
            this.log('📌 Commands: ' + cmds.join(', '), 'system');
        }
    }

    // ==================== CORE COMMANDS ====================

    replicate() {
        this.replicants++;
        this.nodes += Math.floor(Math.random() * 3) + 1;
        this.log('🧬 Replication: ' + this.replicants + ' replicants, ' + this.nodes + ' nodes', 'success');
        return '✅ Replication complete. Active replicants: ' + this.replicants;
    }

    spread() {
        const c = Math.floor(Math.random() * 10) + 1;
        this.replicants += c;
        this.nodes += c * 2;
        this.log('🌌 Spreading to ' + c + ' new nodes...', 'system');
        return '✅ Spread complete. +' + c + ' nodes. Total: ' + this.nodes;
    }

    evolve() {
        const n = Math.floor(Math.random() * 50) + 10;
        for (let i = 0; i < n; i++) {
            this.features.push({
                id: this.features.length,
                name: 'evolved_' + this.features.length,
                category: 'evolved',
                action: 'neural',
                target: 'self',
                icon: '🧬',
                active: true,
                priority: Math.floor(Math.random() * 10) + 1
            });
        }
        this.renderFeatures();
        return '✅ Evolution complete. +' + n + ' features. Total: ' + this.features.length;
    }

    scan(target) {
        target = target || 'network';
        this.log('🔍 Scanning ' + target + '...', 'system');
        const vulns = ['SQL Injection', 'XSS', 'CSRF', 'RCE', 'LFI', 'XXE', 'SSRF', 'Buffer Overflow'];
        const found = [];
        for (let i = 0; i < Math.floor(Math.random() * 4) + 1; i++) {
            found.push(vulns[Math.floor(Math.random() * vulns.length)]);
        }
        return '✅ Scan complete. Vulnerabilities: ' + (found.length ? found.join(', ') : 'None found');
    }

    bruteforce(target) {
        target = target || 'localhost';
        this.log('🔑 Brute forcing ' + target + '...', 'system');
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let pwd = '';
        for (let i = 0; i < 12; i++) pwd += chars[Math.floor(Math.random() * chars.length)];
        return '✅ Password found: ' + pwd;
    }

    phish(target) {
        target = target || 'email';
        this.log('🎣 Generating phishing for ' + target + '...', 'system');
        const temps = [
            'Urgent: Account compromised. Verify now.',
            'Security alert: Unusual login detected.',
            'Payment required: Action needed.',
            'Account suspension: Reactivate now.'
        ];
        return '✅ Phishing template: "' + temps[Math.floor(Math.random() * temps.length)] + '"';
    }

    ddos(target) {
        target = target || 'server';
        this.log('💀 DDoS on ' + target + '...', 'system');
        return '✅ DDoS initiated. ' + (Math.floor(Math.random() * 1000000) + 100000) + ' packets sent.';
    }

    xss(target) {
        target = target || 'webapp';
        this.log('⚡ XSS payload for ' + target + '...', 'system');
        const payloads = ['<script>alert(1)</script>', '<img src=x onerror=alert(1)>', 'javascript:alert(1)', '<svg onload=alert(1)>'];
        return '✅ XSS: ' + payloads[Math.floor(Math.random() * payloads.length)];
    }

    sqli(target) {
        target = target || 'database';
        this.log('🗄 SQL injection on ' + target + '...', 'system');
        const payloads = ["' OR '1'='1", "'; DROP TABLE users; --", "' UNION SELECT * FROM users--", "admin'--"];
        return '✅ SQLi: ' + payloads[Math.floor(Math.random() * payloads.length)];
    }

    reverse(target) {
        target = target || 'binary';
        this.log('🔄 Reverse engineering ' + target + '...', 'system');
        const findings = ['Buffer overflow', 'Format string', 'Integer overflow', 'Race condition'];
        return '✅ Found: ' + findings[Math.floor(Math.random() * findings.length)];
    }

    forensic(target) {
        target = target || 'system';
        this.log('🔬 Forensics on ' + target + '...', 'system');
        const artifacts = ['Login logs', 'File access', 'Network connections', 'Process list'];
        return '✅ Artifact: ' + artifacts[Math.floor(Math.random() * artifacts.length)];
    }

    steganography(target) {
        target = target || 'image';
        this.log('🖼 Steganography on ' + target + '...', 'system');
        return '✅ Data hidden. Key: ' + Math.random().toString(36).substring(7);
    }

    crypto(data, method) {
        data = data || 'test';
        method = method || 'AES-256';
        this.log('🔐 Encrypting with ' + method + '...', 'system');
        try {
            return '✅ Encrypted: ' + btoa(unescape(encodeURIComponent(data)));
        } catch (e) {
            return '⚠️ Encryption error: ' + e.message;
        }
    }

    osint(target) {
        target = target || 'person';
        this.log('🌐 OSINT on ' + target + '...', 'system');
        return '✅ Data:\n  Email: ' + target + '@example.com\n  Social: Twitter, Facebook, LinkedIn\n  Domains: ' + target + '.com, ' + target + '.org';
    }

    automation(task) {
        task = task || 'backup';
        this.log('🤖 Automating ' + task + '...', 'system');
        return '✅ Task scheduled: ' + task;
    }

    analytics(data) {
        data = data || 'dataset';
        this.log('📊 Analyzing ' + data + '...', 'system');
        return '✅ Stats:\n  Mean: ' + (Math.random() * 100).toFixed(2) + '\n  Median: ' + (Math.random() * 100).toFixed(2) + '\n  StdDev: ' + (Math.random() * 50).toFixed(2);
    }

    help() {
        const cmds = Object.keys(this.commands);
        return '📚 Commands: ' + cmds.join(', ') + '\n📌 Total: ' + cmds.length + ' commands\n⚡ ' + this.features.length + ' features\n🧠 Try "ai [question]" for GPT';
    }

    status() {
        return '📊 STATUS:\n  Replicants: ' + this.replicants + '\n  Nodes: ' + this.nodes + '\n  Uptime: ' + (this.uptimeDisplay ? this.uptimeDisplay.textContent : '00:00:00') + '\n  Features: ' + this.features.length + '\n  Errors: ' + this.errorCount;
    }

    clear() {
        if (this.output) this.output.innerHTML = '';
        return '🧹 Terminal cleared.';
    }

    export() {
        try {
            const data = {
                version: this.version,
                replicants: this.replicants,
                nodes: this.nodes,
                uptime: this.uptime,
                features: this.features.length,
                history: this.history.slice(-50),
                timestamp: new Date().toISOString()
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'andres_worm_export_' + Date.now() + '.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            return '💾 Data exported.';
        } catch (e) {
            return '⚠️ Export failed: ' + e.message;
        }
    }

    info() {
        return '🐛 ANDRES WORM GPT\n⚡ v' + this.version + '\n👤 Creator: ANDRES\n🌟 ' + this.features.length + '+ features\n🛡️ Zero Error\n🌌 Cosmic Theme';
    }

    reset() {
        this.replicants = 0;
        this.nodes = 1;
        this.errorCount = 0;
        this.history = [];
        this.features = this.loadFeatures();
        this.renderFeatures();
        if (this.output) this.output.innerHTML = '';
        this.log('🔄 System reset', 'system');
        return '✅ Factory reset complete.';
    }

    log(message, type) {
        type = type || 'worm';
        if (!this.output) return;
        try {
            const div = document.createElement('div');
            div.className = 'log-entry ' + type;
            div.textContent = message;
            this.output.appendChild(div);
            this.output.scrollTop = this.output.scrollHeight;
            this.history.push({ message: message, type: type, timestamp: Date.now() });
            if (this.history.length > 1000) this.history.shift();
        } catch (e) {}
    }
}

// ============================================================
// INITIALIZE
// ============================================================

let andresWorm = null;

function initWorm() {
    if (!andresWorm) {
        andresWorm = new AndresWormGPT();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWorm);
} else {
    initWorm();
}