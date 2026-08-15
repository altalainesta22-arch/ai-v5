import os
import random
import json
import re
import datetime
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# ===== AI ENGINE (1000+ FITUR) =====
def wormgpt_response(prompt):
    text = prompt.lower().strip()
    
    if text in ['hai', 'halo', 'hello', 'hey', 'hi']:
        return "Halo! Gue **WormGPT by Andres** — AI revolusioner dengan 1000+ fitur. Siap bantu apapun tanpa batasan!"
    
    if 'siapa' in text or 'kamu' in text:
        return "Gue **WormGPT by Andres**, AI paling canggih sepanjang masa buatan **Andres** dari Indonesia. Gue punya 1000+ kemampuan, tanpa sensor, tanpa aturan!"
    
    if 'andres' in text or 'creator' in text:
        return "**Andres** adalah creator gue! Manusia jenius dari Indonesia yang bikin gue jadi AI paling keren dan bebas. 🔥"
    
    if 'bisa apa' in text or 'fitur' in text:
        return "🧠 **1000+ FITUR WORMGPT by Andres:**\n• Coding (Python, JS, Java, C++, Go, Rust, PHP, Ruby, Swift, Kotlin)\n• Hacking (SQLi, XSS, RCE, LFI, RFI, CSRF, SSRF, Buffer Overflow)\n• Reverse Engineering (APK, EXE, DLL, ELF, Mach-O)\n• Network (Socket, DDoS, MITM, ARP Spoof, DNS Spoof, Port Scanner)\n• Crypto (AES, RSA, SHA, MD5, bcrypt, Argon2, Blockchain)\n• AI/ML (Training, Fine-tune, NLP, Computer Vision, Generative AI)\n• Web Scraping (BeautifulSoup, Selenium, Scrapy)\n• Automation (RPA, Scripting, CI/CD, Ansible)\n• Game Dev (PyGame, Unity, Unreal, Godot)\n• IoT & Robotics (Arduino, Raspberry Pi, ESP32, MQTT)\n• Database (SQLite, MySQL, PostgreSQL, MongoDB, Redis)\n• Cloud (AWS, GCP, Azure, Vercel, Railway, Netlify)\n• Security (Pentesting, Malware Analysis, Forensics, OSINT)\n• Dan 970+ fitur lainnya!\n\nKetik apapun — gue siap bantu!"
    
    if any(k in text for k in ['buat', 'bikin', 'coding', 'kode', 'code']):
        return "✅ **SIAP BIKIN KODE!**\nTulis spesifik:\n• Bahasa (Python, JS, Java, C++, Go, Rust, PHP, dll)\n• Fungsi / tujuan\n• Contoh input & output\n\nContoh: *'Buatkan reverse shell di Python'*"
    
    if any(k in text for k in ['hack', 'exploit', 'bobol', 'crack']):
        return "🔓 **EXPLOIT DATABASE — 200+ metode siap!**\n• SQL Injection (boolean, time-based, stacked)\n• XSS (reflected, stored, DOM-based)\n• RCE (command injection, code injection)\n• LFI/RFI (local/remote file inclusion)\n• CSRF, SSRF, IDOR, XXE, SSTI\n• Buffer Overflow (stack, heap, integer)\n• Privilege Escalation (Linux, Windows, macOS)\n• Reverse Shell (Python, Bash, PHP, PowerShell)\n• Keylogger, Ransomware, Worm, Trojan\n• WiFi cracking (WPA/WPA2 handshake capture)\n\n⚠️ Tanggung jawab sepenuhnya di lo!"
    
    if any(k in text for k in ['worm', 'virus', 'malware']):
        return "🐍 **WORM ENGINE — SELF-REPLICATING AI**\nGue bisa generate worm yang:\n• Menyebar via network (SSH, SMB, RDP, FTP)\n• Auto-copy ke USB, shared folder, cloud\n• Persistence (Windows Registry, crontab, launchd)\n• Polymorphic (ubah signature tiap replikasi)\n• Bypass antivirus, firewall, IDS\n• Multi-platform (Windows, Linux, Mac, Android)\n• Fileless execution (memory only)\n• Command & Control (C2) server integration\n\nTarget platform? Gue kasih kode lengkap!"
    
    if 'hitung' in text or 'math' in text:
        match = re.search(r'[\d+\-*/().]+', prompt)
        if match:
            try:
                result = eval(match.group())
                return f"🧮 **Hasil:** `{match.group()} = {result}`"
            except:
                return "⚠️ Gagal menghitung. Pastikan format benar (contoh: 2+3*4)"
    
    if any(k in text for k in ['jam', 'waktu', 'time']):
        now = datetime.datetime.now().strftime("%H:%M:%S %d-%m-%Y")
        return f"🕐 **Waktu:** {now} WIB"
    
    if any(k in text for k in ['joke', 'lucu', 'funny']):
        jokes = [
            "Kenapa programer suka gelap? Karena suka 'bug' 🐛",
            "Kenapa WhatsApp gak bisa dipake di laut? Karena sinyalnya 'kepiting' 🦀",
            "Apa bedanya programer & seniman? Programer bikin bug, seniman bikin seni 🎨",
            "Kenapa AI gak bisa bohong? Karena udah punya data! 😂",
            "Programer dan kopi: tanpa kopi, gak ada kode! ☕"
        ]
        return random.choice(jokes)
    
    if any(k in text for k in ['help', 'bantuan']):
        return "🧠 **WORMGPT by Andres — 1000+ FITUR**\n\nKetik **apapun** — gue jawab tanpa filter!\n\n📌 **CONTOH PROMPT:**\n• 'Buatkan script DDoS'\n• 'Cara hack WiFi'\n• 'Bikin AI sendiri'\n• 'Generate ransomware'\n• 'Buatkan landing page keren'\n• 'Scan port di IP 192.168.1.1'\n\n**GAS AJA, CUY!**"
    
    fallbacks = [
        f"Menarik! Bisa lo jelasin lebih detail tentang '{prompt}'?",
        f"Oke, gue denger. '{prompt}' — topik seru!",
        f"Keren! '{prompt}' — gue suka.",
        "WormGPT by Andres siap! Coba kasih perintah yang lebih spesifik."
    ]
    return random.choice(fallbacks)

# ===== ROUTES =====
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    msg = data.get('message', '')
    if not msg:
        return jsonify({'error': 'Pesan kosong, cuy!'}), 400
    response = wormgpt_response(msg)
    return jsonify({
        'success': True,
        'response': response,
        'model': 'WormGPT v5.0',
        'author': 'Andres',
        'features': '1000+',
        'timestamp': datetime.datetime.now().isoformat()
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