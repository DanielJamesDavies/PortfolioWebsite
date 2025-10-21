import "./Details.css";

export const Details = () => {
  return (
    <div className="details">
      <div className="details-item">
        <div className="details-title">
          <div>Hello, I'm Daniel!</div>
          <div className="details-hand-waving-emoji">👋</div>
        </div>
        <div>I'm deeply interested in maximising the probability of the best possible future for all.</div>
        <div>Passionate about building AI systems responsibly to solve complex real-world problems.</div>
      </div>
      <div className="details-item">
        <div className="details-subtitle">
          <div>Experience & Education</div>
        </div>
        <div className="details-item-status-item">
          <div className="details-item-status-item-icon">👨‍💻</div>
          <div className="details-item-status-item-text">
            <div>Full-Stack Applied-AI Engineer at Projekt Rising Ltd</div>
            <div>September 2022 - Present</div>
          </div>
        </div>
        <div className="details-item-status-item">
          <div className="details-item-status-item-icon">
            <img src={require("../../../content/brunel.jpeg")} alt="" />
          </div>
          <div className="details-item-status-item-text">
            <div>MSc Artificial Intelligence (Distinction)</div>
            <div>Brunel University London | September 2023 - December 2024</div>
          </div>
        </div>
        <div className="details-item-status-item">
          <div className="details-item-status-item-icon">
            <img src={require("../../../content/brunel.jpeg")} alt="" />
          </div>
          <div className="details-item-status-item-text">
            <div>BSc Computer Science (Artificial Intelligence, First Class Honours)</div>
            <div>Brunel University London | September 2019 - July 2022</div>
          </div>
        </div>
      </div>
      <div className="details-item">
        <div className="details-subtitle">
          <div>Highlights</div>
        </div>
        <ul>
          <li>
            Built latent explorer (
            <a href="https://turingexplorer.com" target="_blank" rel="noopener noreferrer">
              turingexplorer.com
            </a>
            ) with optimised TTFB &lt;1s, search 491,520 latents in ~3s (≤9s), and circuit generation ~3s.
          </li>
          <li>
            Shipped <b>40+ production apps/automations</b>, common flows cut from hours/days to minutes/seconds.
          </li>
          <li>
            <b>Trained 254M-param LLM</b> in &lt;2 GPU days (val. loss ~1.8).
          </li>
          <li>Generated 2B-token synthetic dataset.</li>
        </ul>
      </div>
      <div className="details-item">
        <div className="details-subtitle">
          <div>Skills</div>
        </div>
        <ul>
          <li>
            <b>ML/AI:</b> LLM pre-training & distillation, synthetic dataset generation, mechanistic interpretability (SAEs,feature labelling, circuit
            discovery), evaluation, prompt/agentic systems, RAG, structured decoding,function calling, exploratory data analysis.
          </li>
          <li>
            <b>Languages/Frameworks:</b> Python (PyTorch, TensorFlow, NumPy, FastAPI), JavaScript/TypeScript(React, Node), SQL, HTML/CSS, R, HF
            Transformers.
          </li>
          <li>
            <b>Infra & Observability:</b> GCP, Azure, Heroku, Linux, Git, CI/CD, metrics/logs/traces, cost control.
          </li>
        </ul>
      </div>
    </div>
    // <div class='details-texts'>
    // 	<div class='details-text'>
    // 		<span>🥼</span>
    // 		<span>Independent Mechanistic Interpretability Researcher</span>
    // 	</div>
    // 	<div class='details-text'>
    // 		<span>👨‍💻</span>
    // 		<span>Machine Learning Engineer at Projekt Rising</span>
    // 	</div>
    // 	<div class='details-text'>
    // 		<span>🎓</span>
    // 		<span></span>
    // 	</div>
    // 	<div class='details-text'>
    // 		<span>🎯</span>
    // 		<span>Passionate About Building AI to Solve Complex Real-World Problems for Both Business and Humanity</span>
    // 	</div>
    // 	<div class='details-text'>
    // 		<span>🌍</span>
    // 		<span>London, United Kingdom</span>
    // 	</div>
    // </div>
  );
};
