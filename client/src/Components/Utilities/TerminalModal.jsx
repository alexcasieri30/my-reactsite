import React, { useState } from "react";
import './TerminalModal.scss';
import { useNavigate } from "react-router-dom";

const endpoints = ["/", "/travel", "/games", "/settings", "/photo-gallery", "/about", "/travel/southamerica", "/travel/prague", "/travel/hawaii", "/ml", "/fullscreengames", "/fullscreengames/where", "/games/memory", "/games/cv_letter", "/games/sketch", "/games/tictactoe", "/games/battleship"];

export default function TerminalModal({ show, onClose }) {
    const [terminalInput, setTerminalInput] = useState("");
    const [terminalError, setTerminalError] = useState("");
    const [lsOutput, setLsOutput] = useState(null);
    const [helpText, setHelpText] = useState(null);
    const navigate = useNavigate();

    if (!show) return null;

    function handleTerminalSubmit(e) {
        e.preventDefault();
        const cmd = terminalInput.trim();
        if (cmd === "ls") {
            setLsOutput(endpoints);
            setHelpText(null);
            setTerminalError("");
        } else if (cmd === "help") {
            setHelpText("Available commands:\n- cd <endpoint>: Navigate to a page (e.g. cd /travel)\n- ls: List all valid endpoints\n- help: Show this help message\n\nYou can click endpoints in the ls grid, or use cd to navigate. Type 'help' anytime for info.");
            setLsOutput(null);
            setTerminalError("");
        } else if (cmd.startsWith("cd ")) {
            const path = cmd.slice(3).replace(/^\./, "");
            if (endpoints.includes(path)) {
                setTerminalInput("");
                setTerminalError("");
                setLsOutput(null);
                setHelpText(null);
                onClose();
                navigate(path);
            } else {
                setTerminalError("Unknown endpoint: " + path);
            }
        } else {
            setTerminalError("Only 'cd <endpoint>', 'ls', or 'help' commands are supported.");
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
                            placeholder="Type 'help' for commands"
                            onKeyDown={e => { if (e.key === 'Escape') onClose(); }}
                        />
                        <button type="submit">Go</button>
                    </div>
                </form>
                {lsOutput && (
                    <div className="terminal-ls-grid">
                        {lsOutput.map((ep, i) => (
                            <div key={ep} className="terminal-ls-item">{ep}</div>
                        ))}
                    </div>
                )}
                {helpText && (
                    <pre className="terminal-help-text">{helpText}</pre>
                )}
                {terminalError && <div className="terminal-error">{terminalError}</div>}
                <button className="terminal-close" onClick={() => { setLsOutput(null); setHelpText(null); onClose(); }}>Close</button>
            </div>
        </div>
    );
}
