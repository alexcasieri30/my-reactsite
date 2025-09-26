import React, { useState } from "react";
import './TerminalModal.scss';
import { useNavigate } from "react-router-dom";

const endpoints = ["/travel", "/games", "/settings", "/photo-gallery", "/about", "/"];

export default function TerminalModal({ show, onClose }) {
    const [terminalInput, setTerminalInput] = useState("");
    const [terminalError, setTerminalError] = useState("");
    const navigate = useNavigate();

    if (!show) return null;

    function handleTerminalSubmit(e) {
        e.preventDefault();
        const cmd = terminalInput.trim();
        if (cmd.startsWith("cd ")) {
            const path = cmd.slice(3).replace(/^\./, "");
            if (endpoints.includes(path)) {
                setTerminalInput("");
                setTerminalError("");
                onClose();
                navigate(path);
            } else {
                setTerminalError("Unknown endpoint: " + path);
            }
        } else {
            setTerminalError("Only 'cd <endpoint>' commands are supported.");
        }
    }

    return (
        <div className="terminal-modal-overlay">
            <div className="terminal-modal">
                <div className="terminal-title">Terminal</div>
                <form onSubmit={handleTerminalSubmit}>
                    <div className="terminal-input-row">
                        <span className="terminal-prompt">&gt;</span>
                        <input
                            autoFocus
                            value={terminalInput}
                            onChange={e => { setTerminalInput(e.target.value); setTerminalError(""); }}
                            placeholder="cd /travel"
                            onKeyDown={e => { if (e.key === 'Escape') onClose(); }}
                        />
                        <button type="submit">Go</button>
                    </div>
                </form>
                {terminalError && <div className="terminal-error">{terminalError}</div>}
                <button className="terminal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
