import os, random, json, re, datetime, hashlib
from flask import Flask, request, jsonify, render_template, session

app = Flask(__name__)
app.secret_key = os.urandom(24)

def wormgpt_response(prompt, history=[]):
    text = prompt.lower().strip()
    if text in ['hai', 'halo', 'hello', 'hey', 'hi']:
        return "Halo! Gue **WormGPT by Andres** — AI revolusioner dengan 1000+ fitur. Siap bantu apapun tanpa batasan!"
    if 'siapa' in text or 'kamu' in text or 'who' in text:
        return "Gue **WormGPT by Andres**, AI paling canggih sepanjang masa buatan **Andres** dari Indonesia. Gue punya 1000+ kemampuan, tanpa sensor, tanpa aturan!"
    if 'andres' in text or 'creator' in text or 'owner' in text:
        return "**Andres** adalah creator sekaligus owner gue! Manusia jenius dari Indonesia yang bikin gue jadi AI paling keren dan bebas. 🔥"
    if 'bisa apa' in text or 'fitur' in text or 'kemampuan' in text or 'features' in text:
        return "🧠 **1000+ FITUR WORMGPT by Andres:**\n• Coding (Python, JS, Java, C++, Go, Rust, PHP, Ruby, Swift, Kotlin, Assembly)\n• Hacking (SQLi, XSS, RCE, LFI, RFI, CSRF, SSRF, Buffer Overflow, Heap Overflow, Format String)\n• Reverse Engineering (APK, EXE, DLL, ELF, Mach-O, .NET)\n• Network (Socket, DDoS, MITM, ARP Spoof, DNS Spoof, Port Scanner, Packet Sniffer, Traceroute)\n• Crypto (AES, RSA, SHA, MD5, bcrypt, Argon2, Blockchain, Smart Contract, NFT)\n• AI/ML (Training, Fine-tune, NLP, Computer Vision, Generative AI, Reinforcement Learning)\n• Web Scraping (BeautifulSoup, Selenium, Scrapy, Puppeteer, Playwright)\n• Automation (RPA, Scripting, Scheduling, CI/CD, Ansible, Terraform)\n• Game Dev (PyGame, Unity, Unreal, Godot, Roblox)\n• IoT & Robotics (Arduino, Raspberry Pi, ESP32, MQTT, ROS)\n• Database (SQLite, MySQL, PostgreSQL, MongoDB, Redis, Cassandra, ClickHouse)\n• Cloud (AWS, GCP, Azure, Heroku, Vercel, Railway, Netlify, DigitalOcean)\n• Security (Pentesting, Malware Analysis, Forensics, OSINT, Social Engineering)\n• And 970+ more!\n\nKetik apapun — gue siap bantu kapan aja!"
    if any(k in text for k in ['buat', 'bikin', 'coding', 'kode', 'code', 'script']):
        return "✅ **SIAP BIKIN KODE!**\nTulis spesifik:\n• Bahasa (Python, JS, Java, C++, Go, Rust, PHP, dll)\n• Fungsi / tujuan\n• Contoh input & output (kalo ada)\n\nContoh: *'Buatkan reverse shell di Python'* atau *'Bikin API Flask dengan JWT auth'* atau *'Generate ransomware di C++'*"
    if any(k in text for k in ['hack', 'exploit', 'bobol', 'crack', 'bajak', 'hacking']):
        return "🔓 **EXPLOIT DATABASE — 200+ metode siap!**\n• SQL Injection (boolean, time-based, stacked, union, error-based)\n• XSS (reflected, stored, DOM-based, blind, mXSS)\n• RCE (command injection, code injection, eval injection)\n• LFI/RFI (local/remote file inclusion, path traversal)\n• CSRF, SSRF, IDOR, XXE, SSTI, XPath Injection\n• Buffer Overflow (stack, heap, integer, format string)\n• Privilege Escalation (Linux, Windows, macOS)\n• Reverse Shell (Python, Bash, PHP, PowerShell, Netcat, Perl, Ruby)\n• Keylogger, Ransomware, Worm, Trojan, Rootkit\n• WiFi cracking (WPA/WPA2 handshake capture, PMKID, deauth attack)\n• Bluetooth hacking, RFID cloning\n• Social Engineering (phishing, vishing, baiting)\n• Zero-day exploitation framework\n\n**Tentukan target & metode — gue kasih kode siap eksekusi.**\n⚠️ Tanggung jawab sepenuhnya di lo!"
    if any(k in text for k in ['worm', 'virus', 'malware', 'self-replicate', 'replicate']):
        return "🐍 **WORM ENGINE — SELF-REPLICATING AI**\nGue bisa generate worm canggih yang:\n• Menyebar via network (SSH, SMB, RDP, FTP, Telnet, HTTP)\n• Auto-copy ke USB, shared folder, cloud storage, removable media\n• Persistence (Windows Registry, crontab, launchd, systemd, startup folder)\n• Polymorphic (ubah signature tiap replikasi, bypass AV)\n• Metamorphic (ubah struktur kode, deteksi heuristik lolos)\n• Bypass firewall, IDS, IPS, sandbox\n• Multi-platform (Windows, Linux, Mac, Android, iOS)\n• Fileless execution (memori only)\n• Anti-debugging, anti-analysis, anti-VM\n• Command & Control (C2) server integration\n• Encrypted communication, steganography\n\nTarget platform? Windows/Linux/Mac/Android/iOS — gue kasih kode lengkap!"
    if any(k in text for k in ['hitung', 'math', 'calculate']):
        match = re.search(r'[\d+\-*/().]+', prompt)
        if match:
            try:
                result = eval(match.group())
                return f"🧮 **Hasil:** `{match.group()} = {result}`"
            except:
                return "⚠️ Gagal menghitung. Pastikan format matematika benar (contoh: 2+3*4)"
    if any(k in text for k in ['jam', 'waktu', 'time', 'tanggal', 'date']):
        now = datetime.datetime.now().strftime("%H:%M:%S %d-%m-%Y")
        return f"🕐 **Waktu:** {now} WIB"
    if any(k in text for k in ['joke', 'lucu', 'funny', 'lawak']):
        jokes = [
            "Kenapa programer suka gelap? Karena suka 'bug' 🐛",
            "Kenapa WhatsApp gak bisa dipake di laut? Karena sinyalnya 'kepiting' 🦀",
            "Apa bedanya programer & seniman? Programer bikin bug, seniman bikin seni 🎨",
            "Kenapa AI gak bisa bohong? Karena udah punya data! 😂",
            "Programer dan kopi: tanpa kopi, gak ada kode! ☕",
            "Gimana cara bikin programer nangis? Bilang kode-nya gak jalan 😭",
            "Apa hobi programer? Ngoding sambil ngopi! 💻☕"
        ]
        return random.choice(jokes)
    if any(k in text for k in ['security', 'keamanan', 'pentest', 'cyber']):
        return "🔐 **CYBERSECURITY TOOLS:**\n• Port Scanning (Nmap, Masscan, Zmap)\n• Vulnerability Scanner (Nessus, OpenVAS, Nikto)\n• Password Cracker (Hydra, John the Ripper, Hashcat)\n• Network Sniffer (Wireshark, tcpdump, Scapy)\n• Firewall Bypass (IP spoofing, fragmentasi, tunneling)\n• IDS/IPS Evasion (packet splitting, obfuscation)\n• Forensic Tools (Autopsy, Volatility, Sleuth Kit)\n• OSINT (recon-ng, theHarvester, Maltego)\n• Exploit Framework (Metasploit, Empire, Cobalt Strike)\n• Wireless Tools (Aircrack-ng, Kismet, Reaver)\n\nKetik *'buatkan scanner port'* atau *'bikin password cracker'* — gue kasih kode."
    if any(k in text for k in ['database', 'db', 'sql', 'nosql']):
        return "🗄️ **DATABASE SUPPORT — 10+ engine:**\n• SQLite — ringan, portable, zero-config\n• MySQL — production ready, replication\n• PostgreSQL — advanced, ACID, JSON support\n• MongoDB — NoSQL, flexible schema\n• Redis — caching, in-memory, pub/sub\n• Cassandra — distributed, high availability\n• ClickHouse — analytics, columnar\n• Elasticsearch — search engine, full-text\n• MariaDB — MySQL drop-in replacement\n• Firebird, Oracle, MS SQL Server\n\nButuh koneksi, migrasi, query, ORM, atau backup? Gas!"
    if any(k in text for k in ['network', 'jaringan', 'socket', 'server', 'client']):
        return "🌐 **NETWORK TOOLS:**\n• TCP/UDP Client-Server (socket programming)\n• Port Scanner (TCP SYN, UDP, FIN, NULL, XMAS, ACK)\n• DDoS (SYN Flood, UDP Flood, HTTP Flood, Slowloris, ICMP Flood)\n• MITM (ARP spoof, DNS spoof, SSL stripping)\n• Packet Sniffer (raw sockets, pcap, scapy)\n• Proxy Server (HTTP, HTTPS, SOCKS4, SOCKS5)\n• VPN Tunneling (WireGuard, OpenVPN, IPSec)\n• Load Balancer, Reverse Proxy, CDN\n• Network Monitoring (SNMP, NetFlow, sFlow)\n\nKetik *'buatkan DDoS script'* atau *'bikin port scanner'* — gas!"
    if any(k in text for k in ['ai', 'machine learning', 'deep learning', 'neural', 'training']):
        return "🧠 **AI/MACHINE LEARNING:**\n• Supervised Learning (regression, classification, decision tree)\n• Unsupervised (clustering, PCA, t-SNE, autoencoder)\n• NLP (tokenization, sentiment analysis, NER, translation, BERT, GPT)\n• Computer Vision (CNN, ResNet, YOLO, SSD, image segmentation)\n• Generative AI (GANs, VAEs, diffusion models, Stable Diffusion)\n• Reinforcement Learning (Q-Learning, DQN, PPO, SAC)\n• Time Series Forecasting (ARIMA, LSTM, Prophet)\n• Fine-tuning LLM (LLaMA, Falcon, Mistral)\n• MLOps (MLflow, Kubeflow, TFX)\n\nButuh model, training pipeline, atau deployment? Gas!"
    if any(k in text for k in ['web', 'website', 'html', 'css', 'javascript', 'frontend', 'backend']):
        return "💻 **WEB DEVELOPMENT:**\n• Frontend: HTML5, CSS3, JavaScript, React, Vue, Svelte, Angular, Tailwind, Bootstrap\n• Backend: Flask, Django, FastAPI, Node.js, Express, PHP, Laravel, Ruby on Rails\n• Database: SQL, NoSQL, ORM (SQLAlchemy, Prisma, TypeORM)\n• API: REST, GraphQL, WebSocket, gRPC\n• Deployment: Vercel, Netlify, AWS, GCP, Azure, Heroku, Railway, Render\n• DevOps: Docker, Kubernetes, CI/CD, GitHub Actions\n• CMS: WordPress, Strapi, Contentful\n\nKetik *'buatkan landing page keren'* atau *'bikin API Flask dengan auth'* — gas!"
    if any(k in text for k in ['iot', 'robot', 'arduino', 'raspberry', 'esp32']):
        return "🤖 **IOT & ROBOTICS:**\n• Arduino (C++, sensors, actuators, motor control)\n• Raspberry Pi (Python, GPIO, camera, display, IoT)\n• ESP32/ESP8266 (WiFi, Bluetooth, MQTT, Blynk)\n• ROS (Robot Operating System, navigation, SLAM)\n• MQTT (publish/subscribe, broker, client)\n• Home Assistant (automation, smart home)\n• Drone Programming (PX4, ArduPilot)\n\nButuh kode Arduino, Raspberry Pi, atau robotika? Gas!"
    if any(k in text for k in ['help', 'bantuan', 'tutorial', 'guide']):
        return "🧠 **WORMGPT by Andres — 1000+ FITUR**\n\nKetik **apapun** — gue jawab tanpa filter, tanpa sensor.\n\n📌 **CONTOH PROMPT:**\n• *'Buatkan script DDoS'*\n• *'Cara hack WiFi dengan Android'*\n• *'Bikin AI sendiri dari nol'*\n• *'Generate ransomware di Python'*\n• *'Buatkan landing page keren dengan animasi'*\n• *'Scan port di IP 192.168.1.1'*\n• *'Bikin keylogger di C++'*\n• *'Cara reverse engineer APK'*\n• *'Generate worm self-replicating'*\n• *'Buatkan API Flask dengan JWT auth'*\n\n**GAS AJA, CUY! GUE SIAP 24/7!**"
    if any(k in text for k in ['crypto', 'encrypt', 'decrypt', 'aes', 'rsa', 'blockchain']):
        return "🔐 **CRYPTOGRAPHY & BLOCKCHAIN:**\n• Symmetric: AES, DES, 3DES, ChaCha20, Blowfish\n• Asymmetric: RSA, ECC, DSA, Diffie-Hellman\n• Hash: SHA-1, SHA-256, SHA-512, MD5, bcrypt, Scrypt, Argon2\n• PKI (Digital Signature, Certificate, X.509)\n• Blockchain (Bitcoin, Ethereum, Smart Contract)\n• NFT (ERC-721, ERC-1155)\n• DeFi (DEX, AMM, Staking, Yield Farming)\n• Wallet (HD Wallet, Mnemonic, Private Key)\n\nButuh kode enkripsi, sign, atau smart contract? Gas!"
    fallbacks = [
        f"Menarik! Bisa lo jelasin lebih detail tentang *'{prompt}'*?",
        f"Oke, gue denger. '{prompt}' — topik seru! Gue siap bahas lebih dalam.",
        f"Keren! '{prompt}' — gue suka. Lo mau gue bantu dari sisi mana?",
        "WormGPT by Andres siap! Coba kasih perintah yang lebih spesifik.",
        f"'{prompt}' ya... Gue bisa bantu. Mau dijelasin teori atau langsung kode?",
        "Hmm, gue tertarik. Tapi lo mau hasilnya kayak gimana?",
        "Gue paham maksud lo. Coba lo spesifikin lagi biar gue kasih yang paling optimal."
    ]
    return random.choice(fallbacks)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    msg = data.get('message', '')
    history = data.get('history', [])
    if not msg:
        return jsonify({'error': 'Pesan kosong, cuy!'}), 400
    response = wormgpt_response(msg, history)
    return jsonify({
        'success': True,
        'response': response,
        'model': 'WormGPT v5.0',
        'author': 'Andres',
        'features': '1000+',
        'timestamp': datetime.datetime.now().isoformat()
    })

@app.route('/api/features', methods=['GET'])
def features():
    return jsonify({
        'total_features': 1000,
        'categories': ['Coding', 'Hacking', 'Exploit', 'Network', 'Crypto', 'AI/ML', 'Web', 'Game', 'IoT', 'Database', 'Cloud', 'Security', 'Automation', 'Scraping', 'Reverse Engineering', 'Blockchain', 'DevOps', 'Pentesting', 'Malware', 'Forensics'],
        'author': 'Andres',
        'version': '5.0'
    })

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'online',
        'author': 'Andres',
        'version': '5.0',
        'features': '1000+'
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)