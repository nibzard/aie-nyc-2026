// Editorial synthesis of both days. Keep relationships distinct from measured term associations.
const colors = `<defs><pattern id="GRID" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#7186ce" stroke-opacity=".12"/></pattern><marker id="ARROW" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto-start-reverse"><path d="M1 1L6 4L1 7" fill="none" stroke="#92a5ee" stroke-width="1.5"/></marker><marker id="RETURN" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="#6de2e1" stroke-width="1.5"/></marker></defs>`;
const style = `<style>.loop-svg text{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif}.loop-svg a{text-decoration:none}.loop-svg a:hover .node,.loop-svg a:focus .node{stroke:#b9c8ff;stroke-width:3;fill:#202e57}.loop-svg a:focus{outline:none}.loop-svg a:focus-visible{outline:2px solid #b9c8ff;outline-offset:4px}.loop-svg .line{fill:none;stroke:#92a5ee;stroke-width:2;marker-end:url(#ARROW)}.loop-svg .return{fill:none;stroke:#6de2e1;stroke-width:2;marker-end:url(#RETURN)}.loop-svg .node{fill:#131e3d;stroke:#5366ad;stroke-width:1.2}.loop-svg .title{fill:#f0f4ff;font-size:18px;font-weight:650}.loop-svg .small{fill:#b8c7eb;font-size:14px}.loop-svg .number{fill:#9cadff;font-size:12px;letter-spacing:2px;font-weight:650}.loop-svg .feedback{fill:#6de2e1}.loop-svg .outcome{fill:#c5f7bf}</style>`;
const steps = [
  { n:'01', title:'Real task', lines:['Define success first'], guide:'evaluation' },
  { n:'02', title:'Context', lines:['Relevant · current', 'Linked to sources'], guide:'company-context' },
  { n:'03', title:'Agent + tools', lines:['State · recovery'], guide:'agent-systems' },
  { n:'04', title:'Verify work', lines:['Facts · behavior', 'Quality · sources'], guide:'evaluation' },
  { n:'05', title:'Useful result', lines:['Accepted · usable'], guide:'coding-and-product-value' },
];
function node(step,x,y,w=180,h=124) {
  return `<a href="/guides/${step.guide}/" aria-label="${step.title}: read the related field guide"><rect class="node" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/><text class="number" x="${x+16}" y="${y+28}">${step.n}</text><text class="title ${step.n==='05'?'outcome':''}" x="${x+16}" y="${y+60}">${step.title}</text>${step.lines.map((line,i)=>`<text class="small" x="${x+16}" y="${y+87+i*20}">${line}</text>`).join('')}</a>`;
}
function svg(mobile=false,download=false) {
  const width=mobile?390:1100,height=mobile?1160:600,id=download?'download':mobile?'mobile':'wide';
  const content=mobile ? `
    <text x="24" y="38" class="number">FROM MODEL OUTPUT TO USEFUL WORK</text>
    ${steps.map((s,i)=>node(s,24,72+i*160,258,124)).join('')}
    ${[0,1,2,3].map(i=>`<path class="line" d="M153 ${196+i*160}v30"/>`).join('')}
    <path d="M14 380h278v294H14" fill="none" stroke="#7186ce" stroke-dasharray="5 5" stroke-opacity=".7"/>
    <a href="/guides/agent-security/" aria-label="Permissions and isolation: read the security guide"><text class="small" x="24" y="366">Permissions + isolation</text></a>
    <a href="/guides/workflows-and-trust/" aria-label="Policy checks: read the workflows and trust guide"><text class="small" x="24" y="702">Policy in code</text></a>
    <path class="return" d="M282 614h48V958h-42"/>
    <text class="small feedback" x="310" y="835" transform="rotate(-90 310 835)">Failures + corrections</text>
    <a href="/guides/agent-systems/" aria-label="Improve context, skills, and evaluations: read the agent systems guide"><rect class="node" x="24" y="904" width="258" height="106" rx="12"/><text class="number feedback" x="40" y="932">LEARN FROM THE RUN</text><text class="title" x="40" y="961">Improve the next run</text><text class="small" x="40" y="986">Context · skills · evaluations</text></a>
    <path class="return" d="M282 958h86V294h-80"/>
    <a href="/guides/compute-economics/" aria-label="Cost per accepted result: read the compute economics guide"><rect x="24" y="1046" width="342" height="88" rx="10" fill="#172940" stroke="#426a7e"/><text class="number feedback" x="40" y="1071">MEASURE THE OUTCOME</text><text class="small" x="40" y="1096">Cost per accepted result</text><text class="small" x="40" y="1117">Latency + human review time</text></a>` : `
    <text x="32" y="48" class="number">AI ENGINEER NYC 2026 · BOTH DAYS</text><text x="32" y="90" class="title" style="font-size:30px">From model output to useful work</text>
    <a href="/guides/agent-security/" aria-label="Permissions and isolation: read the security guide"><rect x="452" y="140" width="398" height="236" rx="18" fill="#14203b" fill-opacity=".5" stroke="#7186ce" stroke-opacity=".75" stroke-dasharray="5 5"/><text class="small" x="470" y="171">Permissions + isolation</text></a>
    <a href="/guides/workflows-and-trust/" aria-label="Policy checks: read the workflows and trust guide"><text class="small" x="470" y="361">Enforce policy in code</text></a>
    ${steps.map((s,i)=>node(s,32+i*214,212)).join('')}
    ${[0,1,2,3].map(i=>`<path class="line" d="M${212+i*214} 274h26"/>`).join('')}
    <path class="return" d="M764 336v134h-64"/><text class="small feedback" x="786" y="420">Failures + corrections</text>
    <a href="/guides/agent-systems/" aria-label="Improve context, skills, and evaluations: read the agent systems guide"><rect class="node" x="388" y="418" width="306" height="106" rx="12"/><text class="number feedback" x="408" y="446">LEARN FROM THE RUN</text><text class="title" x="408" y="475">Improve the next run</text><text class="small" x="408" y="500">Context · skills · evaluations</text></a>
    <path class="return" d="M388 470h-52V342"/>
    <a href="/guides/compute-economics/" aria-label="Cost per accepted result: read the compute economics guide"><rect x="32" y="548" width="1036" height="32" rx="6" fill="#172940" stroke="#426a7e"/><text class="small" x="50" y="569">MEASURE THE OUTCOME</text><text class="small" x="302" y="569">Cost per accepted result · latency · human review time</text></a>`;
  // Each inline instance needs its own SVG resource identifiers.
  return `<svg xmlns="http://www.w3.org/2000/svg" class="loop-svg learning-loop-${mobile?'mobile':'wide'}" viewBox="0 0 ${width} ${height}" role="group" aria-labelledby="loop-title-${id} loop-desc-${id}"><title id="loop-title-${id}">From model output to useful work</title><desc id="loop-desc-${id}">A real task moves through relevant context, an agent with tools, and verification to an accepted, useful result. Permissions, isolation, and policy constrain execution. Failures and corrections improve context, skills, and evaluations for the next run. Measure cost per accepted result, latency, and human review time. Each stage links to a field guide.</desc>${colors}${style.replaceAll('.loop-svg', `.learning-loop-${mobile?'mobile':'wide'}`)}<rect width="${width}" height="${height}" rx="16" fill="#0b1229"/><rect width="${width}" height="${height}" rx="16" fill="url(#GRID)"/>${content}</svg>`.replaceAll('GRID',`loop-grid-${id}`).replaceAll('ARROW',`loop-arrow-${id}`).replaceAll('RETURN',`loop-return-${id}`);
}
export const learningLoopSvg=svg(false,true).replaceAll('href="/', 'href="https://aie-nyc-2026.vercel.app/');
export const learningLoop=`<section class="learning-loop" aria-labelledby="learning-loop-heading"><p class="card-label">The lessons, connected · Both days</p><h2 id="learning-loop-heading">From model output to useful work</h2><p class="learning-loop-intro">Define the task. Give the agent context and controlled tools. Verify the work, then use what you learn to improve the next run.</p><figure>${svg()}${svg(true)}<figcaption>Our synthesis of both days. Follow a stage to read the evidence and try an experiment. The arrows describe an engineering process, not measured correlations.</figcaption></figure><p class="learning-loop-links"><a href="/topics/">Explore the supporting topics →</a><a href="/learning-loop.svg" download="aie-nyc-2026-learning-loop.svg">Download the diagram (SVG) ↓</a></p></section>`;
